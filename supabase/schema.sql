-- AnatomiaPratica · archivio unico: account, livelli (Base, Studio), studi con
-- collaboratori, clienti, visite, sedute, schede inviate e foto.
-- Da incollare in Supabase: SQL Editor > New query > Run. Si puo' rieseguire:
-- non cancella dati gia' presenti.
--
-- Ogni studio vede solo i propri clienti. Ogni cliente vede solo la propria scheda.
-- Il livello di un account (base/studio) lo cambia solo il titolare del progetto
-- Supabase (o, piu' avanti, il sistema di pagamento): l'utente non puo' modificarlo.

create extension if not exists pgcrypto with schema extensions;

-- ---------------------------------------------------------------------------
-- Account
-- ---------------------------------------------------------------------------
create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  full_name text,
  plan text not null default 'base' check (plan in ('base', 'studio')),
  plan_until timestamptz,                       -- scadenza dell'abbonamento, se gestita
  created_at timestamptz not null default now()
);
alter table public.profiles enable row level security;
revoke all on public.profiles from anon, authenticated;
grant select on public.profiles to authenticated;
grant update (full_name) on public.profiles to authenticated;
drop policy if exists "profilo: il proprio" on public.profiles;
create policy "profilo: il proprio" on public.profiles for select using (id = auth.uid());
drop policy if exists "profilo: modifica il proprio nome" on public.profiles;
create policy "profilo: modifica il proprio nome" on public.profiles for update using (id = auth.uid()) with check (id = auth.uid());

-- il profilo nasce da solo alla registrazione
create or replace function public.nuovo_profilo() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, full_name)
    values (new.id, coalesce(new.raw_user_meta_data ->> 'full_name', split_part(new.email, '@', 1)))
    on conflict (id) do nothing;
  return new;
end $$;
drop trigger if exists nuovo_profilo on auth.users;
create trigger nuovo_profilo after insert on auth.users for each row execute function public.nuovo_profilo();

-- ---------------------------------------------------------------------------
-- Studi e collaboratori
-- ---------------------------------------------------------------------------
create table if not exists public.studios (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  owner_id uuid not null references auth.users (id) on delete cascade,
  site_url text,                                -- sito dello studio, per le schede inviate
  invite_code_hash text,
  invite_created_at timestamptz,
  created_at timestamptz not null default now()
);
create table if not exists public.studio_members (
  studio_id uuid not null references public.studios (id) on delete cascade,
  user_id uuid not null references auth.users (id) on delete cascade,
  role text not null check (role in ('titolare', 'collaboratore')),
  full_name text,
  created_at timestamptz not null default now(),
  primary key (studio_id, user_id)
);
alter table public.studios enable row level security;
alter table public.studio_members enable row level security;

create or replace function public.is_member(sid uuid) returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.studio_members where studio_id = sid and user_id = auth.uid());
$$;
create or replace function public.is_owner(sid uuid) returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.studio_members where studio_id = sid and user_id = auth.uid() and role = 'titolare');
$$;

revoke all on public.studios from anon, authenticated;
grant select (id, name, owner_id, site_url, created_at) on public.studios to authenticated;
grant update (name, site_url) on public.studios to authenticated;
drop policy if exists "studi: i miei" on public.studios;
create policy "studi: i miei" on public.studios for select using (public.is_member(id));
drop policy if exists "studi: modifica il titolare" on public.studios;
create policy "studi: modifica il titolare" on public.studios for update using (public.is_owner(id)) with check (public.is_owner(id));

grant select, delete on public.studio_members to authenticated;
drop policy if exists "membri: dello stesso studio" on public.studio_members;
create policy "membri: dello stesso studio" on public.studio_members for select using (public.is_member(studio_id));
drop policy if exists "membri: il titolare toglie, ognuno puo' uscire" on public.studio_members;
create policy "membri: il titolare toglie, ognuno puo' uscire" on public.studio_members for delete
  using ((public.is_owner(studio_id) and role <> 'titolare') or (user_id = auth.uid() and role <> 'titolare'));

-- codice leggibile: 8 caratteri senza lettere ambigue, es. K7MP-Q4XZ
create or replace function public.nuovo_codice() returns text
language plpgsql volatile set search_path = public, extensions as $$
declare
  abc text := 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  b bytea := extensions.gen_random_bytes(8);
  s text := '';
begin
  for i in 0..7 loop
    s := s || substr(abc, (get_byte(b, i) % length(abc)) + 1, 1);
    if i = 3 then s := s || '-'; end if;
  end loop;
  return s;
end $$;
create or replace function public.hash_codice(code text) returns text
language sql immutable set search_path = public, extensions as $$
  select encode(extensions.digest(upper(replace(trim(code), ' ', '')), 'sha256'), 'hex');
$$;

-- un account Studio crea il proprio studio e ne diventa titolare
create or replace function public.create_studio(nome text) returns uuid
language plpgsql security definer set search_path = public as $$
declare sid uuid; pr public.profiles;
begin
  if auth.uid() is null then raise exception 'Accesso richiesto'; end if;
  select * into pr from public.profiles where id = auth.uid();
  if pr.plan <> 'studio' or (pr.plan_until is not null and pr.plan_until < now()) then
    raise exception 'Serve il livello Studio';
  end if;
  if exists (select 1 from public.studios where owner_id = auth.uid()) then raise exception 'Hai gia'' uno studio'; end if;
  insert into public.studios (name, owner_id) values (coalesce(nullif(trim(nome), ''), 'Il mio studio'), auth.uid()) returning id into sid;
  insert into public.studio_members (studio_id, user_id, role, full_name) values (sid, auth.uid(), 'titolare', pr.full_name);
  return sid;
end $$;

-- il titolare genera un codice d'invito per un collaboratore (valido 14 giorni, una volta)
create or replace function public.new_invite(sid uuid) returns text
language plpgsql security definer set search_path = public as $$
declare c text := public.nuovo_codice();
begin
  if not public.is_owner(sid) then raise exception 'Solo il titolare puo'' invitare'; end if;
  update public.studios set invite_code_hash = public.hash_codice(c), invite_created_at = now() where id = sid;
  return c;
end $$;

-- il collaboratore usa il codice ed entra nello studio
create or replace function public.join_studio(code text) returns text
language plpgsql security definer set search_path = public as $$
declare st public.studios; pr public.profiles;
begin
  if auth.uid() is null then raise exception 'Accesso richiesto'; end if;
  select * into st from public.studios
    where invite_code_hash = public.hash_codice(code) and invite_created_at > now() - interval '14 days';
  if st.id is null then raise exception 'Codice non valido o scaduto'; end if;
  select * into pr from public.profiles where id = auth.uid();
  insert into public.studio_members (studio_id, user_id, role, full_name)
    values (st.id, auth.uid(), 'collaboratore', pr.full_name) on conflict do nothing;
  update public.studios set invite_code_hash = null where id = st.id;
  return st.name;
end $$;

-- ---------------------------------------------------------------------------
-- Clienti
-- ---------------------------------------------------------------------------
create table if not exists public.clients (
  id uuid primary key default gen_random_uuid(),
  studio_id uuid not null references public.studios (id) on delete cascade,
  full_name text not null,
  birth date,
  phone text,
  email text,
  consent_date date,
  user_id uuid references auth.users (id) on delete set null,
  access_code_hash text,
  code_created_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (studio_id, user_id)
);
create index if not exists clients_studio on public.clients (studio_id, full_name);
alter table public.clients enable row level security;

-- schede cliente collegate all'utente che sta usando l'app
create or replace function public.my_client_ids() returns setof uuid
language sql stable security definer set search_path = public as $$
  select id from public.clients where user_id = auth.uid();
$$;

revoke all on public.clients from anon, authenticated;
grant select (id, studio_id, full_name, birth, phone, email, consent_date, user_id, code_created_at, created_at, updated_at) on public.clients to authenticated;
grant insert (studio_id, full_name, birth, phone, email, consent_date) on public.clients to authenticated;
grant update (full_name, birth, phone, email, consent_date, updated_at) on public.clients to authenticated;
grant delete on public.clients to authenticated;
drop policy if exists "clienti: lo studio" on public.clients;
create policy "clienti: lo studio" on public.clients for all using (public.is_member(studio_id)) with check (public.is_member(studio_id));
drop policy if exists "clienti: la propria scheda" on public.clients;
create policy "clienti: la propria scheda" on public.clients for select using (user_id = auth.uid());

-- note dello studio sul cliente: in una tabella a parte, che il cliente non puo' leggere
create table if not exists public.client_notes (
  client_id uuid primary key references public.clients (id) on delete cascade,
  studio_id uuid not null references public.studios (id) on delete cascade,
  notes text,
  updated_at timestamptz not null default now()
);
alter table public.client_notes enable row level security;
revoke all on public.client_notes from anon;
grant select, insert, update, delete on public.client_notes to authenticated;
drop policy if exists "note: solo lo studio" on public.client_notes;
create policy "note: solo lo studio" on public.client_notes for all using (public.is_member(studio_id)) with check (public.is_member(studio_id));

-- codice di accesso per il cliente (valido 60 giorni, una volta)
create or replace function public.new_client_code(cid uuid) returns text
language plpgsql security definer set search_path = public as $$
declare c text := public.nuovo_codice(); sid uuid;
begin
  select studio_id into sid from public.clients where id = cid;
  if sid is null or not public.is_member(sid) then raise exception 'Cliente non trovato'; end if;
  update public.clients set access_code_hash = public.hash_codice(c), code_created_at = now() where id = cid;
  return c;
end $$;

create or replace function public.claim_client(code text) returns text
language plpgsql security definer set search_path = public as $$
declare c public.clients;
begin
  if auth.uid() is null then raise exception 'Accesso richiesto'; end if;
  select * into c from public.clients
    where access_code_hash = public.hash_codice(code) and code_created_at > now() - interval '60 days';
  if c.id is null then raise exception 'Codice non valido o scaduto'; end if;
  update public.clients set user_id = null where user_id = auth.uid() and studio_id = c.studio_id and id <> c.id;
  update public.clients set user_id = auth.uid(), access_code_hash = null, updated_at = now() where id = c.id;
  return c.full_name;
end $$;

-- ---------------------------------------------------------------------------
-- Visite (analisi posturale) e diario delle sedute
-- ---------------------------------------------------------------------------
create table if not exists public.visits (
  id uuid primary key default gen_random_uuid(),
  studio_id uuid not null references public.studios (id) on delete cascade,
  client_id uuid not null references public.clients (id) on delete cascade,
  date date not null default current_date,
  label text,                                   -- es. «Prima del trattamento»
  height numeric,
  auto jsonb not null default '[]',
  findings jsonb not null default '[]',
  exercises jsonb not null default '[]',
  plan jsonb not null default '{}',
  extras jsonb not null default '[]',
  mobility jsonb,
  notes text,
  photos jsonb not null default '{}',
  pdf_path text,
  created_by uuid references auth.users (id) on delete set null,
  created_at timestamptz not null default now()
);
create index if not exists visits_client_date on public.visits (client_id, date desc);
alter table public.visits enable row level security;
drop policy if exists "visite: lo studio" on public.visits;
create policy "visite: lo studio" on public.visits for all using (public.is_member(studio_id)) with check (public.is_member(studio_id));
drop policy if exists "visite: le proprie" on public.visits;
create policy "visite: le proprie" on public.visits for select using (client_id in (select public.my_client_ids()));

create table if not exists public.sessions (
  id uuid primary key default gen_random_uuid(),
  studio_id uuid not null references public.studios (id) on delete cascade,
  client_id uuid not null references public.clients (id) on delete cascade,
  date date not null default current_date,
  kind text not null check (kind in ('trattamento', 'allenamento', 'colloquio', 'altro')),
  text text,
  zones jsonb not null default '[]',
  tests jsonb not null default '[]',
  exercises jsonb not null default '[]',
  visible_to_client boolean not null default false,
  author_id uuid references auth.users (id) on delete set null,
  author_name text,
  created_at timestamptz not null default now()
);
create index if not exists sessions_client_date on public.sessions (client_id, date desc);
alter table public.sessions enable row level security;
drop policy if exists "sedute: lo studio" on public.sessions;
create policy "sedute: lo studio" on public.sessions for all using (public.is_member(studio_id)) with check (public.is_member(studio_id));
drop policy if exists "sedute: quelle condivise" on public.sessions;
create policy "sedute: quelle condivise" on public.sessions for select
  using (visible_to_client and client_id in (select public.my_client_ids()));

-- ---------------------------------------------------------------------------
-- Schede inviate (catene, problemi, esercizi) e comunicazioni
-- ---------------------------------------------------------------------------
create table if not exists public.sends (
  id uuid primary key default gen_random_uuid(),
  studio_id uuid not null references public.studios (id) on delete cascade,
  client_id uuid references public.clients (id) on delete set null,
  kind text not null,                           -- catena, problema, esercizio, report…
  ref_id text,                                  -- id della scheda in AnatomiaPratica
  note text,                                    -- due righe personali per il cliente
  token text unique not null default encode(extensions.gen_random_bytes(12), 'hex'),
  channel text,                                 -- whatsapp, email, link
  created_by uuid references auth.users (id) on delete set null,
  created_at timestamptz not null default now()
);
alter table public.sends enable row level security;
drop policy if exists "invii: lo studio" on public.sends;
create policy "invii: lo studio" on public.sends for all using (public.is_member(studio_id)) with check (public.is_member(studio_id));
drop policy if exists "invii: i propri" on public.sends;
create policy "invii: i propri" on public.sends for select using (client_id in (select public.my_client_ids()));

revoke all on public.visits, public.sessions, public.sends from anon;
grant select, insert, update, delete on public.visits, public.sessions, public.sends to authenticated;

-- ---------------------------------------------------------------------------
-- Funzioni chiamabili dall'app
-- ---------------------------------------------------------------------------
revoke execute on function public.nuovo_codice() from public, anon, authenticated;
grant execute on function public.create_studio(text), public.new_invite(uuid), public.join_studio(text),
  public.new_client_code(uuid), public.claim_client(text), public.is_member(uuid), public.is_owner(uuid),
  public.my_client_ids() to authenticated;

-- ---------------------------------------------------------------------------
-- Archivio privato delle foto e dei documenti: cartella = studio / cliente
-- ---------------------------------------------------------------------------
create or replace function public.my_studio_ids() returns setof text
language sql stable security definer set search_path = public as $$
  select studio_id::text from public.studio_members where user_id = auth.uid();
$$;
grant execute on function public.my_studio_ids() to authenticated;
insert into storage.buckets (id, name, public) values ('studi', 'studi', false)
  on conflict (id) do nothing;
drop policy if exists "archivio: lo studio" on storage.objects;
create policy "archivio: lo studio" on storage.objects for all
  using (bucket_id = 'studi' and (storage.foldername(name))[1] in (select public.my_studio_ids()))
  with check (bucket_id = 'studi' and (storage.foldername(name))[1] in (select public.my_studio_ids()));
drop policy if exists "archivio: i propri file" on storage.objects;
create policy "archivio: i propri file" on storage.objects for select
  using (bucket_id = 'studi' and (storage.foldername(name))[2] in (select id::text from public.my_client_ids() as id));

-- ---------------------------------------------------------------------------
-- LIVELLO STUDIO. Dopo esservi registrati dall'app con la vostra email, togliete i
-- due trattini davanti alla riga qui sotto, mettete l'email del titolare e rieseguite.
-- Il collaboratore non serve: entra nello studio con il codice d'invito del titolare.
-- update public.profiles set plan = 'studio' where id = (select id from auth.users where email = 'EMAIL-DEL-TITOLARE');
