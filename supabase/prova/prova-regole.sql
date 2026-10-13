\set ON_ERROR_STOP 0
-- utenti: D=Davide titolare, M=Morena collaboratrice, X=altro studio, C=cliente, B=base
insert into auth.users (id,email,raw_user_meta_data) values
 ('00000000-0000-0000-0000-00000000000d','davide@x.it','{"full_name":"Davide Scuderi"}'),
 ('00000000-0000-0000-0000-00000000000e','morena@x.it','{"full_name":"Morena Anastasi"}'),
 ('00000000-0000-0000-0000-00000000000a','altro@x.it','{"full_name":"Altro Studio"}'),
 ('00000000-0000-0000-0000-00000000000c','cliente@x.it','{}'),
 ('00000000-0000-0000-0000-00000000000b','base@x.it','{}');
select 'profili creati dal trigger', count(*) from public.profiles;
update public.profiles set plan='studio' where id in ('00000000-0000-0000-0000-00000000000d','00000000-0000-0000-0000-00000000000a');
set role authenticated;
-- base non può creare uno studio
select set_config('request.jwt.claim.sub','00000000-0000-0000-0000-00000000000b',false);
select 'BASE create_studio (atteso errore)'; select public.create_studio('Abusivo');
-- base non può alzarsi il livello
update public.profiles set plan='studio' where id=auth.uid();
select 'BASE piano dopo tentativo', plan from public.profiles where id=auth.uid();
-- Davide crea lo studio
select set_config('request.jwt.claim.sub','00000000-0000-0000-0000-00000000000d',false);
select 'DAVIDE crea studio', public.create_studio('Kinesiologia Studio') is not null;
\gset
select id as sid from public.studios limit 1 \gset
select public.new_invite(:'sid') as invito \gset
insert into public.clients (studio_id, full_name, consent_date) values (:'sid','Maria Rossi','2026-10-12') returning id as cid \gset
insert into public.visits (studio_id, client_id) values (:'sid', :'cid');
insert into public.sessions (studio_id, client_id, kind, text, visible_to_client) values (:'sid', :'cid','trattamento','privata',false), (:'sid', :'cid','allenamento','condivisa',true);
select public.new_client_code(:'cid') as codcli \gset
insert into storage.objects (bucket_id,name) values ('studi', :'sid' || '/' || :'cid' || '/foto.jpg');
-- Morena entra con il codice
select set_config('request.jwt.claim.sub','00000000-0000-0000-0000-00000000000e',false);
select 'MORENA prima di entrare vede clienti', count(*) from public.clients;
select 'MORENA entra in', public.join_studio(:'invito');
select 'MORENA dopo vede clienti', count(*) from public.clients;
select 'MORENA codice riusato (atteso errore)'; select public.join_studio(:'invito');
-- altro studio non vede nulla
select set_config('request.jwt.claim.sub','00000000-0000-0000-0000-00000000000a',false);
select public.create_studio('Altro') is not null as altro_ok;
select 'ALTRO vede clienti di Davide', count(*) from public.clients where studio_id = :'sid';
select 'ALTRO vede file di Davide', count(*) from storage.objects;
select 'ALTRO inserisce cliente nello studio di Davide (atteso errore)'; insert into public.clients (studio_id, full_name) values (:'sid','Intruso');
-- cliente
select set_config('request.jwt.claim.sub','00000000-0000-0000-0000-00000000000c',false);
select 'CLIENTE prima', count(*) from public.clients;
select 'CLIENTE collega', public.claim_client(:'codcli');
select 'CLIENTE vede schede', count(*) from public.clients;
select 'CLIENTE vede visite', count(*) from public.visits;
select 'CLIENTE vede sedute (atteso 1)', count(*), string_agg(text, ',') from public.sessions;
select 'CLIENTE vede note? (atteso errore)'; select notes from public.clients;
select 'CLIENTE vede file', count(*) from storage.objects;
select 'CLIENTE modifica scheda (atteso 0 righe)'; update public.clients set full_name='X'; 
select 'CLIENTE legge hash (atteso errore)'; select access_code_hash from public.clients;
select set_config('request.jwt.claim.sub','00000000-0000-0000-0000-00000000000d',false);
insert into public.client_notes (client_id, studio_id, notes) values (:'cid', :'sid', 'nota privata');
select 'DAVIDE legge nota', notes from public.client_notes;
select set_config('request.jwt.claim.sub','00000000-0000-0000-0000-00000000000c',false);
select 'CLIENTE legge note (atteso 0)', count(*) from public.client_notes;
