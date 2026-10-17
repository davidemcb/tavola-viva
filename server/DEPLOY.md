# AnatomiaPratica — versione con accesso a pagamento

Che cosa c'è qui:
- `src/index.js` — l'API (Cloudflare Worker): login, sessioni, abbonamenti, pannello admin, consegna dei contenuti.
- `schema.sql` — le tabelle (D1/SQLite): `utenti`, `abbonamenti`, `sessioni`.
- `public/` — il sito pubblico: pagina di accesso, icone, manifest, service worker, tavole. **Nessun contenuto dell'app sta qui.**
- `app-bundle.js` — tutta l'app (dati + codice), generato da `python _crea_server.py`; va nel KV `DATI` con chiave `bundle`. Non è nel repository.

## Prima volta (serve un account Cloudflare gratuito)

Node portatile: `C:\Users\utente\node` (aggiungere al PATH nella sessione: `$env:Path="C:\Users\utente\node;"+$env:Path`).

```
cd "C:\Users\utente\Desktop\TAVOLA VIVA\server"
npx wrangler login                                   # apre il browser: cliccare "Allow"
npx wrangler d1 create anatomiapratica               # copiare database_id in wrangler.toml
npx wrangler kv namespace create DATI                # copiare id in wrangler.toml
npx wrangler d1 execute anatomiapratica --remote --file=schema.sql
npx wrangler secret put SETUP_KEY                    # una frase lunga a piacere
npx wrangler deploy                                  # stampa l'indirizzo https://anatomiapratica.<sottodominio>.workers.dev
npx wrangler kv key put --remote --binding DATI bundle --path app-bundle.js
```

Poi si crea l'amministratore (una volta sola), sostituendo chiave, email e password:
```
curl -X POST https://anatomiapratica.<sottodominio>.workers.dev/api/setup -H "Content-Type: application/json" -d "{\"chiave\":\"LA-CHIAVE\",\"email\":\"email@esempio.it\",\"password\":\"una-password-lunga\",\"nome\":\"Davide\"}"
```

## Ogni volta che cambiano i contenuti o il codice dell'app
```
cd "C:\Users\utente\Desktop\TAVOLA VIVA"
python _crea_sito.py && python _crea_server.py
cd server
npx wrangler kv key put --remote --binding DATI bundle --path app-bundle.js   # contenuti
npx wrangler deploy                                                          # solo se è cambiata la pagina di accesso o l'API
```

## Prove in locale
```
cd server
npx wrangler d1 execute anatomiapratica --local --file=schema.sql
npx wrangler kv key put --local --binding DATI bundle --path app-bundle.js
npx wrangler dev --port 8787
```
Apri http://127.0.0.1:8787/ . La chiave di setup locale sta in `.dev.vars`.

## Come funziona per gli allievi
1. Davide crea l'utente dal **Pannello utenti** (email, nome, piano, metodo di pagamento): compare una password provvisoria da comunicare.
2. L'allievo entra, sceglie la sua password, e vede l'app con «accesso fino al …».
3. Alla scadenza l'app si blocca e spiega come rinnovare (bonifico o contanti); Davide registra il pagamento con «Attiva / prolunga»: il nuovo periodo parte dal giorno dopo la scadenza, senza giorni persi.
4. «Blocca» sospende subito l'accesso; «Nuova password» genera una password provvisoria; «Storico» mostra i pagamenti e permette di cambiare una scadenza a mano.

Listino: mensile 19 € (1 mese), annuale 197 € (12 mesi); «giorni» per le prove, «omaggio» per gli accessi gratuiti.
