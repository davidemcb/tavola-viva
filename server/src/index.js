/* AnatomiaPratica — API su Cloudflare Workers.
   Accesso con email e password; i contenuti (bundle JS in KV) arrivano solo a chi ha un abbonamento attivo
   o è amministratore. L'amministratore crea gli utenti e attiva gli abbonamenti (bonifico, contanti, omaggio):
   il contatore parte dalla data di attivazione. */

const GIORNI_SESSIONE = 30;
const PIANI = { mensile: { mesi: 1 }, annuale: { mesi: 12 }, giorni: {}, omaggio: {} };

export default {
  async scheduled(ev, env, ctx) { ctx.waitUntil(promemoria(env)); },
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
  if (u.ruolo !== "admin" && u.ruolo !== "venditore") return json({ errore: "Solo l'amministratore" }, 403);
  const soloAdmin = () => json({ errore: "Solo l'amministratore può farlo" }, 403);

  if (p === "/api/admin/utenti" && m === "GET") {
    const r = await env.DB.prepare(`SELECT u.id,u.email,u.nome,u.ruolo,u.attivo,u.creato,u.ultimo_accesso,u.cambia_password,
      (SELECT scadenza FROM abbonamenti a WHERE a.utente_id=u.id ORDER BY scadenza DESC LIMIT 1) AS scadenza,
      (SELECT piano FROM abbonamenti a WHERE a.utente_id=u.id ORDER BY scadenza DESC LIMIT 1) AS piano,
      (SELECT v.nome FROM abbonamenti a JOIN utenti v ON v.id=a.creato_da WHERE a.utente_id=u.id ORDER BY a.scadenza DESC LIMIT 1) AS venduto_da
      FROM utenti u ` + (u.ruolo === "admin" ? "" : "WHERE u.ruolo='allievo' ") + `ORDER BY u.creato DESC`).all();
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
    const ruolo = (b.ruolo === "admin" || b.ruolo === "venditore") ? b.ruolo : "allievo";
    if (ruolo !== "allievo" && u.ruolo !== "admin") return soloAdmin();
    const ins = await env.DB.prepare("INSERT INTO utenti(email,nome,pass_hash,salt,ruolo,cambia_password) VALUES(?,?,?,?,?,1)").bind(email, (b.nome || "").trim(), h, salt, ruolo).run();
    const id = ins.meta.last_row_id;
    let abb = null;
    if (b.piano && PIANI[b.piano]) abb = await attiva(env, u, { utente_id: id, piano: b.piano, giorni: b.giorni, inizio: b.inizio, metodo: b.metodo, importo: b.importo, nota: b.nota });
    let esito = { inviata: false, motivo: "non richiesta" };
    if (b.invia_email !== false && b.invia_email !== "false") esito = await inviaEmail(env, emailBenvenuto(env, req, { email, nome: (b.nome || "").trim() }, pw, abb));
    return json({ ok: true, id, password: pw, abbonamento: abb, email: esito });
  }
  if (p === "/api/admin/attiva" && m === "POST") {
    const b = await leggiJSON(req);
    if (!b.utente_id || !PIANI[b.piano]) return json({ errore: "Utente e piano (mensile, annuale, giorni, omaggio) obbligatori" }, 400);
    const abb = await attiva(env, u, b);
    let email = { inviata: false, motivo: "non richiesta" };
    if (b.invia_email !== false && b.invia_email !== "false") { const ut = await env.DB.prepare("SELECT email,nome FROM utenti WHERE id=?").bind(b.utente_id).first(); if (ut) email = await inviaEmail(env, emailRinnovo(env, req, ut, { ...abb, metodo: b.metodo })); }
    return json({ ok: true, abbonamento: abb, email });
  }
  if (p === "/api/admin/stato" && m === "POST") {
    const b = await leggiJSON(req);
    if (u.ruolo !== "admin") { const x = await env.DB.prepare("SELECT ruolo FROM utenti WHERE id=?").bind(b.utente_id).first(); if (!x || x.ruolo !== "allievo") return soloAdmin(); }
    await env.DB.prepare("UPDATE utenti SET attivo=? WHERE id=?").bind(b.attivo ? 1 : 0, b.utente_id).run();
    if (!b.attivo) await env.DB.prepare("DELETE FROM sessioni WHERE utente_id=?").bind(b.utente_id).run();
    return json({ ok: true });
  }
  if (p === "/api/admin/reset" && m === "POST") {
    const b = await leggiJSON(req);
    if (u.ruolo !== "admin") { const x = await env.DB.prepare("SELECT ruolo FROM utenti WHERE id=?").bind(b.utente_id).first(); if (!x || x.ruolo !== "allievo") return soloAdmin(); }
    const pw = passwordProvvisoria(); const salt = randHex(16), h = await hashPw(pw, salt);
    await env.DB.prepare("UPDATE utenti SET pass_hash=?, salt=?, cambia_password=1 WHERE id=?").bind(h, salt, b.utente_id).run();
    await env.DB.prepare("DELETE FROM sessioni WHERE utente_id=?").bind(b.utente_id).run();
    let email = { inviata: false, motivo: "non richiesta" };
    if (b.invia_email !== false && b.invia_email !== "false") { const ut = await env.DB.prepare("SELECT email,nome FROM utenti WHERE id=?").bind(b.utente_id).first(); if (ut) email = await inviaEmail(env, emailReset(env, req, ut, pw)); }
    return json({ ok: true, password: pw, email });
  }
  if (p === "/api/admin/elimina" && m === "POST") {
    if (u.ruolo !== "admin") return soloAdmin();
    const b = await leggiJSON(req);
    if (Number(b.utente_id) === u.id) return json({ errore: "Non puoi eliminare te stesso" }, 400);
    await env.DB.prepare("DELETE FROM sessioni WHERE utente_id=?").bind(b.utente_id).run();
    await env.DB.prepare("DELETE FROM abbonamenti WHERE utente_id=?").bind(b.utente_id).run();
    await env.DB.prepare("DELETE FROM utenti WHERE id=?").bind(b.utente_id).run();
    return json({ ok: true });
  }
  if (p === "/api/admin/prova-email" && m === "POST") {
    const e = await inviaEmail(env, { a: u.email, nome: u.nome, oggetto: "AnatomiaPratica: prova di invio", html: "<p>Se leggi questa email, l'invio automatico funziona.</p>" });
    return json(e);
  }
  if (p === "/api/admin/riepilogo" && m === "GET") {
    const mese = url.searchParams.get("mese") || oggi().slice(0, 7);
    const quota = Number(env.QUOTA_VENDITORE || 50);
    const r = await env.DB.prepare(`SELECT COALESCE(v.nome, v.email, 'sconosciuto') AS venditore, v.id AS venditore_id, v.ruolo AS ruolo,
        COUNT(*) AS n, SUM(COALESCE(a.importo,0)) AS totale,
        SUM(CASE WHEN a.metodo='contanti' THEN COALESCE(a.importo,0) ELSE 0 END) AS contanti,
        SUM(CASE WHEN a.metodo='bonifico' THEN COALESCE(a.importo,0) ELSE 0 END) AS bonifico
      FROM abbonamenti a LEFT JOIN utenti v ON v.id=a.creato_da
      WHERE substr(a.creato,1,7)=? ` + (u.ruolo === "admin" ? "" : "AND a.creato_da=" + Number(u.id) + " ") + `GROUP BY a.creato_da ORDER BY totale DESC`).bind(mese).all();
    const mesi = await env.DB.prepare("SELECT DISTINCT substr(creato,1,7) AS mese FROM abbonamenti ORDER BY mese DESC LIMIT 24").all();
    const dettaglio = await env.DB.prepare(`SELECT a.creato, a.piano, a.metodo, a.importo, a.inizio, a.scadenza, a.nota, u.nome, u.email, v.nome AS venditore
      FROM abbonamenti a JOIN utenti u ON u.id=a.utente_id LEFT JOIN utenti v ON v.id=a.creato_da
      WHERE substr(a.creato,1,7)=? ` + (u.ruolo === "admin" ? "" : "AND a.creato_da=" + Number(u.id) + " ") + `ORDER BY a.creato DESC`).bind(mese).all();
    return json({ mese, quota, righe: r.results.map(x => ({ ...x, quota_venditore: x.ruolo === "venditore" ? Math.round(x.totale * quota) / 100 : 0 })), mesi: mesi.results.map(x => x.mese), dettaglio: dettaglio.results });
  }
  if (p === "/api/admin/abbonamenti" && m === "GET") {
    const id = url.searchParams.get("utente_id");
    const r = await env.DB.prepare("SELECT * FROM abbonamenti WHERE utente_id=? ORDER BY scadenza DESC").bind(id).all();
    return json({ abbonamenti: r.results });
  }
  if (p === "/api/admin/scadenza" && m === "POST") {
    if (u.ruolo !== "admin") return soloAdmin();
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
  return { id: r.meta.last_row_id, piano: b.piano, inizio, scadenza, importo, giorni: giorniRimasti(scadenza), rinnovo: !!corrente };
}

/* ---------- e-mail (Brevo) ---------- */
function urlApp(env, req) { return (env.URL_APP || (req ? new URL(req.url).origin : "")).replace(/\/$/, ""); }
async function inviaEmail(env, a) {
  if (!env.BREVO_API_KEY || !env.MITTENTE_EMAIL) return { inviata: false, motivo: "email non configurata" };
  const corpo = {
    sender: { email: env.MITTENTE_EMAIL, name: env.MITTENTE_NOME || "AnatomiaPratica" },
    to: [{ email: a.a, name: a.nome || a.a }],
    subject: a.oggetto,
    htmlContent: '<div style="font-family:Arial,sans-serif;font-size:15px;line-height:1.5;color:#1d2422;max-width:560px">' + a.html + '<p style="color:#777;font-size:12px;margin-top:24px">AnatomiaPratica · Kinesiologia Studio · ' + env.MITTENTE_EMAIL + '</p></div>',
    textContent: a.testo || a.html.replace(/<[^>]+>/g, " ")
  };
  if (env.RISPONDI_A) corpo.replyTo = { email: env.RISPONDI_A };
  try {
    const r = await fetch("https://api.brevo.com/v3/smtp/email", { method: "POST", headers: { "api-key": env.BREVO_API_KEY, "Content-Type": "application/json", "Accept": "application/json" }, body: JSON.stringify(corpo) });
    if (r.ok) return { inviata: true };
    const e = await r.text();
    return { inviata: false, motivo: "Brevo " + r.status + ": " + e.slice(0, 200) };
  } catch (e) { return { inviata: false, motivo: String(e) }; }
}
const dataIt = s => s ? s.split("-").reverse().join("/") : "";
function emailBenvenuto(env, req, u, pw, abb) {
  const link = urlApp(env, req);
  return { a: u.email, nome: u.nome, oggetto: "Il tuo accesso ad AnatomiaPratica",
    html: "<p>Ciao " + (u.nome || "") + ",</p><p>ecco il tuo accesso ad <b>AnatomiaPratica</b>, l'atlante del massaggiatore: anatomia, biomeccanica, posturologia, test clinici e trigger point, da leggere e da ascoltare.</p>" +
      '<p><b>Indirizzo:</b> <a href="' + link + '">' + link + '</a><br><b>Email:</b> ' + u.email + '<br><b>Password provvisoria:</b> <span style="font-family:monospace;font-size:17px">' + pw + '</span></p>' +
      "<p>Al primo accesso ti verrà chiesto di scegliere una password tua." + (abb ? " L'accesso è attivo fino al <b>" + dataIt(abb.scadenza) + "</b>." : "") + "</p>" +
      "<p>Sul telefono: apri il link, poi dal menu del browser scegli <b>Aggiungi alla schermata Home</b>: diventa un'app, con le tavole disponibili anche senza rete.</p><p>Buono studio!<br>Davide</p>" };
}
function emailRinnovo(env, req, u, abb) {
  const link = urlApp(env, req);
  return { a: u.email, nome: u.nome, oggetto: "AnatomiaPratica: accesso attivo fino al " + dataIt(abb.scadenza),
    html: "<p>Ciao " + (u.nome || "") + ",</p><p>il tuo accesso ad <b>AnatomiaPratica</b> è stato " + (abb.rinnovo ? "rinnovato" : "attivato") + ": piano <b>" + abb.piano + "</b>, dal " + dataIt(abb.inizio) + " al <b>" + dataIt(abb.scadenza) + "</b>" + (abb.importo ? " (" + abb.importo + " €, " + (abb.metodo || "") + ")" : "") + ".</p>" +
      '<p>Entra qui: <a href="' + link + '">' + link + '</a></p><p>Grazie e buono studio!<br>Davide</p>' };
}
function emailReset(env, req, u, pw) {
  const link = urlApp(env, req);
  return { a: u.email, nome: u.nome, oggetto: "AnatomiaPratica: nuova password provvisoria",
    html: "<p>Ciao " + (u.nome || "") + ',</p><p>ecco la tua nuova password provvisoria per <b>AnatomiaPratica</b>: <span style="font-family:monospace;font-size:17px">' + pw + '</span></p><p>Entra su <a href="' + link + '">' + link + "</a> con la tua email e questa password: ti verrà chiesto di sceglierne una tua.</p><p>Davide</p>" };
}
function emailScadenza(env, u, abb, giorni) {
  const link = urlApp(env, null);
  const quando = giorni > 0 ? "scade fra " + giorni + " giorni, il " + dataIt(abb.scadenza) : "è scaduto il " + dataIt(abb.scadenza);
  return { a: u.email, nome: u.nome, oggetto: giorni > 0 ? "AnatomiaPratica: il tuo accesso scade fra " + giorni + " giorni" : "AnatomiaPratica: accesso scaduto",
    html: "<p>Ciao " + (u.nome || "") + ",</p><p>il tuo accesso ad <b>AnatomiaPratica</b> " + quando + ".</p>" +
      "<p>Per continuare: <b>19 € al mese</b> oppure <b>197 € all'anno</b>, con bonifico o in contanti in studio. Appena il pagamento è registrato l'accesso riparte da solo, senza perdere giorni.</p>" +
      "<p>Rispondi a questa email o scrivi su WhatsApp per rinnovare." + (link ? ' L\'app è qui: <a href="' + link + '">' + link + "</a>" : "") + "</p><p>Davide</p>" };
}

/* Promemoria automatici: ogni mattina, 3 giorni prima della scadenza e il giorno dopo. */
async function promemoria(env) {
  const t = oggi();
  const fra3 = aggiungi(t, { giorni: 3 }), ieri = aggiungi(t, { giorni: -1 });
  const r = await env.DB.prepare(`SELECT a.id, a.scadenza, a.piano, u.email, u.nome, u.attivo, u.ruolo,
      (SELECT MAX(scadenza) FROM abbonamenti b WHERE b.utente_id=a.utente_id) AS ultima
      FROM abbonamenti a JOIN utenti u ON u.id=a.utente_id
      WHERE (a.scadenza=? AND a.avviso3=0) OR (a.scadenza=? AND a.avviso0=0)`).bind(fra3, ieri).all();
  let n = 0;
  for (const x of r.results) {
    if (x.scadenza !== x.ultima || !x.attivo || x.ruolo === "admin") { await env.DB.prepare("UPDATE abbonamenti SET avviso3=1, avviso0=1 WHERE id=?").bind(x.id).run(); continue; }
    const giorni = x.scadenza === fra3 ? 3 : 0;
    const e = await inviaEmail(env, emailScadenza(env, x, x, giorni));
    await env.DB.prepare(giorni === 3 ? "UPDATE abbonamenti SET avviso3=1 WHERE id=?" : "UPDATE abbonamenti SET avviso0=1 WHERE id=?").bind(x.id).run();
    if (e.inviata) n++;
  }
  return n;
}
