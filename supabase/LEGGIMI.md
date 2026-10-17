# Archivio online di AnatomiaPratica (Supabase)

Un solo progetto Supabase per tutto: account, livelli (Base, Gestionale), studi con
collaboratori, clienti, visite, sedute, schede inviate e foto.

## Attivazione (una volta)
1. supabase.com → New project, regione **Central EU (Frankfurt)**, piano Free.
2. SQL Editor → New query → incolla `schema.sql` → Run (si può rieseguire).
3. Authentication → Sign In / Providers → Email: disattiva **Confirm email**.
4. Project Settings → API: copia **Project URL** e chiave **anon public** in `config.js`.
   Mai la chiave `service_role`.
5. Registrati dall'app, poi nel SQL Editor dai il livello Gestionale al titolare
   (ultima riga di `schema.sql`). Il collaboratore entra con il codice d'invito.

## Chi vede cosa
- Ogni studio vede solo i propri clienti, visite, sedute, invii e foto.
- Il cliente vede la propria scheda, le visite, le sedute segnate come visibili, gli invii e le sue foto.
- Le note dello studio (`client_notes`) non sono mai leggibili dal cliente.
- Il livello di un account lo cambia solo il titolare del progetto (o il sistema di pagamento).

## Prova delle regole in locale
Con PostgreSQL 16: `finto-supabase.sql` simula ruoli, `auth.uid()` e archivio file di
Supabase; poi `schema.sql`; poi `prova-regole.sql` (gli "atteso errore" devono dare errore).
