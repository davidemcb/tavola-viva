-- AnatomiaPratica: utenti, abbonamenti, sessioni (Cloudflare D1 / SQLite)
CREATE TABLE IF NOT EXISTS utenti (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT UNIQUE NOT NULL,
  nome TEXT,
  pass_hash TEXT NOT NULL,
  salt TEXT NOT NULL,
  ruolo TEXT NOT NULL DEFAULT 'allievo',      -- 'allievo' | 'admin'
  attivo INTEGER NOT NULL DEFAULT 1,           -- 0 = bloccato dall'amministratore
  cambia_password INTEGER NOT NULL DEFAULT 1,  -- 1 = deve cambiare la password provvisoria
  creato TEXT NOT NULL DEFAULT (datetime('now')),
  ultimo_accesso TEXT
);
CREATE TABLE IF NOT EXISTS abbonamenti (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  utente_id INTEGER NOT NULL REFERENCES utenti(id) ON DELETE CASCADE,
  piano TEXT NOT NULL,                         -- 'mensile' | 'annuale' | 'giorni' | 'omaggio'
  inizio TEXT NOT NULL,                        -- YYYY-MM-DD
  scadenza TEXT NOT NULL,                      -- YYYY-MM-DD (incluso)
  metodo TEXT,                                 -- 'bonifico' | 'contanti' | 'stripe' | 'omaggio'
  importo REAL,
  nota TEXT,
  creato TEXT NOT NULL DEFAULT (datetime('now')),
  creato_da INTEGER,
  avviso3 INTEGER NOT NULL DEFAULT 0,
  avviso0 INTEGER NOT NULL DEFAULT 0
);
CREATE INDEX IF NOT EXISTS idx_abb_utente ON abbonamenti(utente_id, scadenza);
CREATE TABLE IF NOT EXISTS sessioni (
  token TEXT PRIMARY KEY,
  utente_id INTEGER NOT NULL REFERENCES utenti(id) ON DELETE CASCADE,
  creato TEXT NOT NULL DEFAULT (datetime('now')),
  scade TEXT NOT NULL,
  ua TEXT
);
CREATE INDEX IF NOT EXISTS idx_sess_utente ON sessioni(utente_id);
