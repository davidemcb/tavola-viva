# AnatomiaPratica

App di studio per allievi massoterapisti e massaggiatori olistici: anatomia, biomeccanica, posturologia e meridiani miofasciali.
Si entra dal problema del cliente, dal movimento, dal muscolo, dall'osso, dal nervo, dal plesso, dall'articolazione, dalle catene o dalla postura.
Ogni scheda si legge e si ascolta; piu' schede si accodano in una playlist.

## Come si modifica
- I sorgenti sono in `src/` (file numerati). Non modificare `index.html` a mano.
- Dopo una modifica: `sh build.sh` ricompila `index.html`.
- Le tavole anatomiche sono in `tavole/` (JPEG); gli originali in `tavole-originali/` (non pubblicati).
- La mappa scheda -> tavole e le didascalie sono in `src/35-immagini-mappa.js`.

## Crediti
Le illustrazioni sono tratte da Henry Gray, *Anatomy of the Human Body*, 20a edizione (1918), disegni di Henry Vandyke Carter: opera di pubblico dominio.
Testi e app: Davide Scuderi, Kinesiologia Studio.

## Account e Gestionale
- Icona "persona" in alto: un solo accesso per l'anatomia (Base), il **Gestionale** (titolare o collaboratore di uno studio) e la scheda del **cliente**.
- `config.js`: indirizzo e chiave "anon" di Supabase. Vuoto = versione di prova con account finti sul dispositivo.
- `supabase/schema.sql`: archivio e regole di sicurezza; istruzioni in `supabase/LEGGIMI.md`.
- Sorgente: `src/60-account.js` (account, livelli, sezione Gestionale, la mia scheda).
