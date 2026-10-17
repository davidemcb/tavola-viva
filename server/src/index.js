/* AnatomiaPratica — API su Cloudflare Workers.
   Accesso con email e password; i contenuti (bundle JS in KV) arrivano solo a chi ha un abbonamento attivo
   o è amministratore. L'amministratore crea gli utenti e attiva gli abbonamenti (bonifico, contanti, omaggio):
   il contatore parte dalla data di attivazione. */

const GIORNI_SESSIONE = 30;
const PIANI = { mensile: { mesi: 1 }, annuale: { mesi: 12 }, giorni: {}, omaggio: {} };

export default {
  async fetch(req, env) {
    const url = new URL(req.url);
    if (!url.pathname.startsWith("/api/")) return env.ASSETS.fetch(req);
    const origine = req.headers.get("Origin") || "";
    const cors = corsHeaders(origine, env);
    if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });
    try {
      const r = await api(req, env, url);
      Object.entries(cors).forEach(([k, v]) => r.headers.set(k, v));
      return r;
    } catch (e) {
      return json({ errore: "Errore del server: " + (e && e.message ? e.message : e) }, 500, cors);
    }
  }
};

function corsHeaders(origine, env) {
  const lista = String(env.ORIGINI || "").split(",").map(s => s.trim()).filter(Boolean);
  const h = { "Vary": "Origin", "Cache-Control": "no-store" };
  if (origine && lista.includes(origine)) {
    h["Access-Control-Allow-Origin"] = origine;
    h["Access-Control-Allow-Headers"] = "Content-Type, Authorization";
    h["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS";
  }
  return h;
}
const json = (o, status = 200, extra = {}) => new Response(JSON.stringify(o), { status, headers: { "Content-Type": "application/json; charset=utf-8", ...extra } });
const oggi = () => new Date().toISOString().slice(0, 10);
const hex = b => Array.from(new Uint8Array(b)).map(x => x.toString(16).padStart(2, "0")).join("");
const randHex = n => hex(crypto.getRandomValues(new Uint8Array(n)));
function passwordProvvisoria() { const a = "abcdefghjkmnpqrstuvwxyz23456789"; let s = ""; const r = crypto.getRandomValues(new Uint8Array(8)); for (const x of r) s += a[x % a.length]; return s.slice(0, 4) + "-" + s.slice(4); }
async function hashPw(pw, salt) {
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(pw), "PBKDF2", false, ["deriveBits"]);
  const bits = await crypto.subtle.deriveBits({ name: "PBKDF2", hash: "SHA-256", salt: new TextEncoder().encode(salt), iterations: 100000 }, key, 256);
  return hex(bits);
}
function aggiungi(data, { mesi = 0, giorni = 0 }) {
  const d = new Date(data + "T12:00:00Z");
  if (mesi) { const g = d.getUTCDate(); d.setUTCMonth(d.getUTCMonth() + mesi); if (d.getUTCDate() !== g) d.setUTCDate(0); }
  if (giorni) d.setUTCDate(d.getUTCDate() + giorni);
  return d.toISOString().slice(0, 10);
}
async function leggiJSON(req) { try { return await req.json(); } catch (e) { return {}; } }

async function utenteDaToken(req, env) {
  const auth = req.headers.get("Authorization") || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7).trim() : "";
  if (!token) return null;
  const s = await env.DB.prepare("SELECT s.token, s.scade, u.* FROM sessioni s JOIN utenti u ON u.id=s.utente_id WHERE s.token=?").bind(token).first();
  if (!s || s.scade < new Date().toISOString()) return null;
  if (!s.attivo) return null;
  return s;
}
async function abbonamentoAttivo(env, utenteId) {
  return env.DB.prepare("SELECT * FROM abbonamenti WHERE utente_id=? AND scadenza>=? ORDER BY scadenza DESC LIMIT 1").bind(utenteId, oggi()).first();
}
async function ultimoAbbonamento(env, utenteId) {
  return env.DB.prepare("SELECT * FROM abbonamenti WHERE utente_id=? ORDER BY scadenza DESC LIMIT 1").bind(utenteId).first();
}
function giorniRimasti(scadenza) { return Math.max(0, Math.round((new Date(scadenza + "T12:00:00Z") - new Date(oggi() + "T12:00:00Z")) / 86400000) + 1); }
async function stato(env, u) {
  const abb = await abbonamentoAttivo(env, u.id);
  const ult = abb || await ultimoAbbonamento(env, u.id);
  const admin = u.ruolo === "admin";
  return {
    utente: { id: u.id, email: u.email, nome: u.nome, ruolo: u.ruolo, cambia_password: !!u.cambia_password },
    abbonamento: ult ? { piano: ult.piano, inizio: ult.inizio, scadenza: ult.scadenza, metodo: ult.metodo, attivo: !!abb, giorni: abb ? giorniRimasti(abb.scadenza) : 0 } : null,
    accesso: admin || !!abb
  };
}

async function api(req, env, url) {
  const p = url.pathname.replace(/\/+$/, "");
  const m = req.method;

  if (p === "/api/setup" && m === "POST") {
    const b = await leggiJSON(req);
    if (!env.SETUP_KEY || b.chiave !== env.SETUP_KEY) return json({ errore: "Chiave non valida" }, 403);
    const esiste = await env.DB.prepare("SELECT id FROM utenti WHERE ruolo='admin' LIMIT 1").first();
    if (esiste) return json({ errore: "L'amministratore esiste già" }, 409);
    if (!b.email || !b.password || b.password.length < 8) return json({ errore: "Email e password (almeno 8 caratteri)" }, 400);
    const salt = randHex(16), h = await hashPw(b.password, salt);
    await env.DB.prepare("INSERT INTO utenti(email,nome,pass_hash,salt,ruolo,cambia_password) VALUES(?,?,?,?,'admin',0)").bind(b.email.trim().toLowerCase(), b.nome || "Amministratore", h, salt).run();
    return json({ ok: true });
  }

  if (p === "/api/login" && m === "POST") {
    const b = await leggiJSON(req);
    const email = String(b.email || "").trim().toLowerCase();
    const u = await env.DB.prepare("SELECT * FROM utenti WHERE email=?").bind(email).first();
    if (!u) return json({ errore: "Email o password non corretti" }, 401);
    const h = await hashPw(String(b.password || ""), u.salt);
    if (h !== u.pass_hash) return json({ errore: "Email o password non corretti" }, 401);
    if (!u.attivo) return json({ errore: "Accesso sospeso. Scrivi a chi ti ha dato l'accesso." }, 403);
    const token = randHex(32);
    const scade = new Date(Date.now() + GIORNI_SESSIONE * 86400000).toISOString();
    await env.DB.prepare("INSERT INTO sessioni(token,utente_id,scade,ua) VALUES(?,?,?,?)").bind(token, u.id, scade, (req.headers.get("User-Agent") || "").slice(0, 200)).run();
    await env.DB.prepare("UPDATE utenti SET ultimo_accesso=datetime('now') WHERE id=?").bind(u.id).run();
    await env.DB.prepare("DELETE FROM sessioni WHERE scade<?").bind(new Date().toISOString()).run();
    return json({ token, ...(await stato(env, u)) });
  }

  const u = await utenteDaToken(req, env);
  if (!u) return json({ errore: "Non autenticato" }, 401);

  if (p === "/api/logout" && m === "POST") { await env.DB.prepare("DELETE FROM sessioni WHERE token=?").bind(u.token).run(); return json({ ok: true }); }
  if (p === "/api/me" && m === "GET") return json(await stato(env, u));
  if (p === "/api/password" && m === "POST") {
    const b = await leggiJSON(req);
    if (!b.nuova || b.nuova.length < 8) return json({ errore: "La nuova password deve avere almeno 8 caratteri" }, 400);
    const h = await hashPw(String(b.vecchia || ""), u.salt);
    if (h !== u.pass_hash) return json({ errore: "La password attuale non è corretta" }, 400);
    const salt = randHex(16), nh = await hashPw(b.nuova, salt);
    await env.DB.prepare("UPDATE utenti SET pass_hash=?, salt=?, cambia_password=0 WHERE id=?").bind(nh, salt, u.id).run();
    await env.DB.prepare("DELETE FROM sessioni WHERE utente_id=? AND token<>?").bind(u.id, u.token).run();
    return json({ ok: true });
  }
  if (p === "/api/dati" && m === "GET") {
    const st = await stato(env, u);
    if (!st.accesso) return json({ errore: "Abbonamento non attivo", ...st }, 402);
    const bundle = await env.DATI.get("bundle", { type: "text" });
    if (!bundle) return json({ errore: "Contenuti non ancora caricati sul server" }, 503);
    return new Response(bundle, { headers: { "Content-Type": "application/javascript; charset=utf-8", "Cache-Control": "private, no-store" } });
  }

  if (!p.startsWith("/api/admin/")) return json({ errore: "Non trovato" }, 404);
  if (u.ruolo !== "admin") return json({ errore: "Solo l'amministratore" }, 403);

  if (p === "/api/admin/utenti" && m === "GET") {
    const r = await env.DB.prepare(`SELECT u.id,u.email,u.nome,u.ruolo,u.attivo,u.creato,u.ultimo_accesso,u.cambia_password,
      (SELECT scadenza FROM abbonamenti a WHERE a.utente_id=u.id ORDER BY scadenza DESC LIMIT 1) AS scadenza,
      (SELECT piano FROM abbonamenti a WHERE a.utente_id=u.id ORDER BY scadenza DESC LIMIT 1) AS piano
      FROM utenti u ORDER BY u.creato DESC`).all();
    const t = oggi();
    return json({ utenti: r.results.map(x => ({ ...x, attivo: !!x.attivo, abbonato: !!(x.scadenza && x.scadenza >= t), giorni: x.scadenza && x.scadenza >= t ? giorniRimasti(x.scadenza) : 0 })) });
  }
  if (p === "/api/admin/utente" && m === "POST") {
    const b = await leggiJSON(req);
    const email = String(b.email || "").trim().toLowerCase();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return json({ errore: "Email non valida" }, 400);
    const esiste = await env.DB.prepare("SELECT id FROM utenti WHERE email=?").bind(email).first();
    if (esiste) return json({ errore: "Esiste già un utente con questa email" }, 409);
    const pw = b.password && b.password.length >= 8 ? b.password : passwordProvvisoria();
    const salt = randHex(16), h = await hashPw(pw, salt);
    const ins = await env.DB.prepare("INSERT INTO utenti(email,nome,pass_hash,salt,ruolo,cambia_password) VALUES(?,?,?,?,?,1)").bind(email, (b.nome || "").trim(), h, salt, b.ruolo === "admin" ? "admin" : "allievo").run();
    const id = ins.meta.last_row_id;
    let abb = null;
    if (b.piano && PIANI[b.piano]) abb = await attiva(env, u, { utente_id: id, piano: b.piano, giorni: b.giorni, inizio: b.inizio, metodo: b.metodo, importo: b.importo, nota: b.nota });
    return json({ ok: true, id, password: pw, abbonamento: abb });
  }
  if (p === "/api/admin/attiva" && m === "POST") {
    const b = await leggiJSON(req);
    if (!b.utente_id || !PIANI[b.piano]) return json({ errore: "Utente e piano (mensile, annuale, giorni, omaggio) obbligatori" }, 400);
    const abb = await attiva(env, u, b);
    return json({ ok: true, abbonamento: abb });
  }
  if (p === "/api/admin/stato" && m === "POST") {
    const b = await leggiJSON(req);
    await env.DB.prepare("UPDATE utenti SET attivo=? WHERE id=?").bind(b.attivo ? 1 : 0, b.utente_id).run();
    if (!b.attivo) await env.DB.prepare("DELETE FROM sessioni WHERE utente_id=?").bind(b.utente_id).run();
    return json({ ok: true });
  }
  if (p === "/api/admin/reset" && m === "POST") {
    const b = await leggiJSON(req);
    const pw = passwordProvvisoria(); const salt = randHex(16), h = await hashPw(pw, salt);
    await env.DB.prepare("UPDATE utenti SET pass_hash=?, salt=?, cambia_password=1 WHERE id=?").bind(h, salt, b.utente_id).run();
    await env.DB.prepare("DELETE FROM sessioni WHERE utente_id=?").bind(b.utente_id).run();
    return json({ ok: true, password: pw });
  }
  if (p === "/api/admin/elimina" && m === "POST") {
    const b = await leggiJSON(req);
    if (Number(b.utente_id) === u.id) return json({ errore: "Non puoi eliminare te stesso" }, 400);
    await env.DB.prepare("DELETE FROM sessioni WHERE utente_id=?").bind(b.utente_id).run();
    await env.DB.prepare("DELETE FROM abbonamenti WHERE utente_id=?").bind(b.utente_id).run();
    await env.DB.prepare("DELETE FROM utenti WHERE id=?").bind(b.utente_id).run();
    return json({ ok: true });
  }
  if (p === "/api/admin/abbonamenti" && m === "GET") {
    const id = url.searchParams.get("utente_id");
    const r = await env.DB.prepare("SELECT * FROM abbonamenti WHERE utente_id=? ORDER BY scadenza DESC").bind(id).all();
    return json({ abbonamenti: r.results });
  }
  if (p === "/api/admin/scadenza" && m === "POST") {
    const b = await leggiJSON(req);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(b.scadenza || "")) return json({ errore: "Data non valida" }, 400);
    await env.DB.prepare("UPDATE abbonamenti SET scadenza=? WHERE id=?").bind(b.scadenza, b.abbonamento_id).run();
    return json({ ok: true });
  }
  return json({ errore: "Non trovato" }, 404);
}

/* Attiva o prolunga: se c'è un abbonamento ancora valido, il nuovo parte dal giorno dopo la scadenza (non si perdono giorni). */
async function attiva(env, admin, b) {
  const corrente = await abbonamentoAttivo(env, b.utente_id);
  let inizio = b.inizio && /^\d{4}-\d{2}-\d{2}$/.test(b.inizio) ? b.inizio : oggi();
  if (corrente && !b.inizio && corrente.scadenza >= inizio) inizio = aggiungi(corrente.scadenza, { giorni: 1 });
  let scadenza;
  if (b.piano === "mensile") scadenza = aggiungi(inizio, { mesi: 1, giorni: -1 });
  else if (b.piano === "annuale") scadenza = aggiungi(inizio, { mesi: 12, giorni: -1 });
  else scadenza = aggiungi(inizio, { giorni: Math.max(1, parseInt(b.giorni || 30, 10)) - 1 });
  const importo = b.importo != null && b.importo !== "" ? Number(b.importo) : (b.piano === "mensile" ? 19 : b.piano === "annuale" ? 197 : 0);
  const r = await env.DB.prepare("INSERT INTO abbonamenti(utente_id,piano,inizio,scadenza,metodo,importo,nota,creato_da) VALUES(?,?,?,?,?,?,?,?)")
    .bind(b.utente_id, b.piano, inizio, scadenza, b.metodo || (b.piano === "omaggio" ? "omaggio" : "contanti"), importo, (b.nota || "").slice(0, 300), admin.id).run();
  return { id: r.meta.last_row_id, piano: b.piano, inizio, scadenza, importo, giorni: giorniRimasti(scadenza) };
}
