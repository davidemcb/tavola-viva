<style>
.acc-wrap{max-width:760px;display:flex;flex-direction:column;gap:14px}
.acc-row{display:flex;flex-wrap:wrap;gap:8px;align-items:center}
.acc-form{display:flex;flex-direction:column;gap:9px}
.acc-form label{font-family:var(--mono);font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--faint)}
.acc-form .inp{width:100%}
.acc-msg{border-radius:10px;padding:9px 12px;font-size:13.5px;background:var(--fascia-soft);color:var(--ink)}
.acc-msg.err{background:var(--muscle-soft)}
.acc-tabs{display:inline-flex;border:1px solid var(--line);border-radius:999px;overflow:hidden}
.acc-tabs button{border:0;background:var(--surface);padding:7px 16px;font-size:13.5px}
.acc-tabs button.on{background:var(--ink);color:var(--paper)}
.acc-lvl{font-family:var(--mono);font-size:10px;letter-spacing:.12em;text-transform:uppercase;padding:3px 9px;border-radius:999px;border:1px solid var(--line)}
.acc-lvl.studio{background:var(--fascia);border-color:var(--fascia);color:#fff}
.acc-lvl.cliente{background:var(--joint-soft);border-color:transparent}
.acc-tile{opacity:1}
.acc-tile .soon{font-family:var(--mono);font-size:9.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--nerve)}
.acc-code{font-family:var(--mono);font-size:24px;letter-spacing:.12em}
.acc-demo{border:1px dashed color-mix(in srgb,var(--nerve) 55%,var(--line));background:var(--nerve-soft);border-radius:12px;padding:12px 14px;display:flex;flex-direction:column;gap:8px}
</style>
<script>
/* =========================================================
   ACCOUNT, LIVELLI E SEZIONE STUDIO
   Un solo accesso per tutti: Base (anatomia), Studio (gestionale e analisi
   posturale, titolare o collaboratore), Cliente (la propria scheda).
   Con config.js vuoto (o senza rete) gira in versione di prova, con dati finti
   salvati solo su questo dispositivo.
   ========================================================= */
const TVCFG = window.TV_CONFIG || {};
const ACC = { pronto:false, caricando:false, demo:!(TVCFG.supabaseUrl && TVCFG.supabaseAnonKey),
  utente:null, profilo:null, studi:[], schede:[], membri:{}, msg:"", err:false, tab:"entra", codice:null };

function accMsg(t,err){ ACC.msg=t||""; ACC.err=!!err; }
function accLivello(){
  if(!ACC.utente) return null;
  if(ACC.studi.length) return "studio";
  if(ACC.profilo && ACC.profilo.plan==="studio") return "studio";
  if(ACC.schede.length) return "cliente";
  return "base";
}
const LIV_NOME={base:"Base",studio:"Gestionale",cliente:"Cliente"};
function accErrore(e){
  const m=String((e&&(e.message||e.error_description))||e||"");
  if(/Invalid login/i.test(m)) return "Email o password non corretti.";
  if(/already registered|already been registered/i.test(m)) return "Esiste già un account con questa email: usa Accedi.";
  if(/at least 6/i.test(m)) return "La password deve avere almeno 6 caratteri.";
  if(/valid email|invalid email/i.test(m)) return "Controlla l'indirizzo email.";
  if(/Serve il livello Studio/i.test(m)) return "Serve il livello Gestionale.";
  if(/Failed to fetch|NetworkError|network/i.test(m)) return "Nessuna connessione: riprova quando sei in rete.";
  return m || "Qualcosa non ha funzionato: riprova.";
}

/* ---------- archivio online (Supabase) ---------- */
function caricaScript(src){ return new Promise((ok,ko)=>{ const s=document.createElement("script"); s.src=src; s.onload=ok; s.onerror=()=>ko(new Error("Failed to fetch")); document.head.appendChild(s); }); }
const ONLINE = {
  sb:null,
  async client(){
    if(this.sb) return this.sb;
    if(!window.supabase) await caricaScript("https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/dist/umd/supabase.min.js");
    this.sb=window.supabase.createClient(TVCFG.supabaseUrl, TVCFG.supabaseAnonKey, {auth:{persistSession:true, storageKey:"tv-auth"}});
    return this.sb;
  },
  ok(r){ if(r.error) throw r.error; return r.data; },
  async stato(){
    const sb=await this.client();
    const { data:{ session } } = await sb.auth.getSession();
    if(!session) return { utente:null };
    const u=session.user;
    const prof=this.ok(await sb.from("profiles").select("full_name, plan, plan_until").eq("id",u.id).maybeSingle()) || {full_name:"",plan:"base"};
    const mem=this.ok(await sb.from("studio_members").select("studio_id, role").eq("user_id",u.id));
    let studi=[];
    if(mem.length){
      const st=this.ok(await sb.from("studios").select("id, name, site_url").in("id",mem.map(m=>m.studio_id)));
      studi=mem.map(m=>Object.assign({role:m.role}, st.find(s=>s.id===m.studio_id)||{id:m.studio_id,name:"Studio"}));
    }
    const schede=this.ok(await sb.from("clients").select("id, studio_id, full_name").eq("user_id",u.id));
    return { utente:{id:u.id,email:u.email}, profilo:prof, studi, schede };
  },
  async entra(email,pw){ const sb=await this.client(); this.ok(await sb.auth.signInWithPassword({email,password:pw})); },
  async registrati(email,pw,nome){
    const sb=await this.client();
    const d=this.ok(await sb.auth.signUp({email,password:pw,options:{data:{full_name:nome}}}));
    if(!d.session) throw new Error("Controlla la tua email per confermare l'account, poi accedi.");
  },
  async esci(){ const sb=await this.client(); await sb.auth.signOut(); },
  async creaStudio(nome){ const sb=await this.client(); return this.ok(await sb.rpc("create_studio",{nome})); },
  async invito(sid){ const sb=await this.client(); return this.ok(await sb.rpc("new_invite",{sid})); },
  async unisciti(code){ const sb=await this.client(); return this.ok(await sb.rpc("join_studio",{code})); },
  async collegaScheda(code){ const sb=await this.client(); return this.ok(await sb.rpc("claim_client",{code})); },
  async membri(sid){ const sb=await this.client(); return this.ok(await sb.from("studio_members").select("user_id, role, full_name").eq("studio_id",sid).order("role",{ascending:false})); },
  async togli(sid,uid){ const sb=await this.client(); this.ok(await sb.from("studio_members").delete().eq("studio_id",sid).eq("user_id",uid)); }
};

/* ---------- versione di prova (dati finti, solo su questo dispositivo) ---------- */
const PROVA = {
  dati(){ return load("prova.acc",null) || this.semi(); },
  salva(d){ save("prova.acc",d); },
  semi(){
    return { sessione:null, utenti:[
      {id:"u-davide",email:"davide@prova.it",pw:"prova",profilo:{full_name:"Davide Scuderi",plan:"studio"}},
      {id:"u-morena",email:"morena@prova.it",pw:"prova",profilo:{full_name:"Morena Anastasi",plan:"base"}},
      {id:"u-maria",email:"maria@prova.it",pw:"prova",profilo:{full_name:"Maria Rossi",plan:"base"}},
      {id:"u-base",email:"allievo@prova.it",pw:"prova",profilo:{full_name:"Allievo di prova",plan:"base"}}],
      studi:[{id:"s-ks",name:"Kinesiologia Studio",site_url:"https://davidemcb.github.io/che-postura/",invito:null}],
      membri:[{studio_id:"s-ks",user_id:"u-davide",role:"titolare",full_name:"Davide Scuderi"},{studio_id:"s-ks",user_id:"u-morena",role:"collaboratore",full_name:"Morena Anastasi"}],
      clienti:[{id:"c-maria",studio_id:"s-ks",full_name:"Maria Rossi",user_id:"u-maria",codice:null}] };
  },
  async stato(){
    const d=this.dati(), u=d.utenti.find(x=>x.id===d.sessione);
    if(!u) return { utente:null };
    const studi=d.membri.filter(m=>m.user_id===u.id).map(m=>Object.assign({role:m.role}, d.studi.find(s=>s.id===m.studio_id)));
    return { utente:{id:u.id,email:u.email}, profilo:u.profilo, studi, schede:d.clienti.filter(c=>c.user_id===u.id) };
  },
  async entraCome(id){ const d=this.dati(); d.sessione=id; this.salva(d); },
  async entra(email,pw){ const d=this.dati(), u=d.utenti.find(x=>x.email===email.trim().toLowerCase()&&x.pw===pw); if(!u) throw new Error("Invalid login"); d.sessione=u.id; this.salva(d); },
  async registrati(email,pw,nome){
    const d=this.dati(); email=email.trim().toLowerCase();
    if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) throw new Error("invalid email");
    if(pw.length<6) throw new Error("at least 6");
    if(d.utenti.some(x=>x.email===email)) throw new Error("already registered");
    const id="u-"+Date.now().toString(36); d.utenti.push({id,email,pw,profilo:{full_name:nome||email.split("@")[0],plan:"base"}}); d.sessione=id; this.salva(d);
  },
  async esci(){ const d=this.dati(); d.sessione=null; this.salva(d); },
  async creaStudio(nome){
    const d=this.dati(), u=d.utenti.find(x=>x.id===d.sessione);
    if(!u||u.profilo.plan!=="studio") throw new Error("Serve il livello Studio");
    if(d.studi.some(s=>d.membri.some(m=>m.studio_id===s.id&&m.user_id===u.id&&m.role==="titolare"))) throw new Error("Hai già uno studio");
    const id="s-"+Date.now().toString(36); d.studi.push({id,name:nome||"Il mio studio",invito:null}); d.membri.push({studio_id:id,user_id:u.id,role:"titolare",full_name:u.profilo.full_name}); this.salva(d); return id;
  },
  codice(){ const a="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; let s=""; for(let i=0;i<8;i++){ s+=a[Math.floor(Math.random()*a.length)]; if(i===3) s+="-"; } return s; },
  norm(c){ return String(c||"").toUpperCase().replace(/[^A-Z0-9]/g,""); },
  async invito(sid){ const d=this.dati(), c=this.codice(); d.studi.find(s=>s.id===sid).invito=c; this.salva(d); return c; },
  async unisciti(code){
    const d=this.dati(), u=d.utenti.find(x=>x.id===d.sessione), st=d.studi.find(s=>s.invito&&this.norm(s.invito)===this.norm(code));
    if(!st) throw new Error("Codice non valido o scaduto");
    if(!d.membri.some(m=>m.studio_id===st.id&&m.user_id===u.id)) d.membri.push({studio_id:st.id,user_id:u.id,role:"collaboratore",full_name:u.profilo.full_name});
    st.invito=null; this.salva(d); return st.name;
  },
  async collegaScheda(code){
    const d=this.dati(), c=d.clienti.find(x=>x.codice&&this.norm(x.codice)===this.norm(code));
    if(!c) throw new Error("Codice non valido o scaduto");
    c.user_id=d.sessione; c.codice=null; this.salva(d); return c.full_name;
  },
  async membri(sid){ return this.dati().membri.filter(m=>m.studio_id===sid).sort((a,b)=>a.role<b.role?1:-1); },
  async togli(sid,uid){ const d=this.dati(); d.membri=d.membri.filter(m=>!(m.studio_id===sid&&m.user_id===uid&&m.role!=="titolare")); this.salva(d); },
  azzera(){ save("prova.acc",null); }
};
const AC = () => ACC.demo ? PROVA : ONLINE;

async function accAggiorna(){
  ACC.caricando=true;
  try{
    const st=await AC().stato();
    ACC.utente=st.utente; ACC.profilo=st.profilo||null; ACC.studi=st.studi||[]; ACC.schede=st.schede||[];
  }catch(e){ accMsg(accErrore(e),true); }
  ACC.pronto=true; ACC.caricando=false;
  accBadge();
}
function accBadge(){
  const b=document.getElementById("acc-btn"); if(!b) return;
  const l=accLivello();
  b.title = ACC.utente ? ((ACC.profilo&&ACC.profilo.full_name)||ACC.utente.email)+" · "+LIV_NOME[l] : "Accedi";
  b.classList.toggle("on", !!ACC.utente);
  if(l==="studio") PRO.piano="Livello Gestionale: anatomia, clienti e analisi posturale";
}
function accServe(){ // le viste dell'account chiedono lo stato la prima volta
  if(!ACC.pronto && !ACC.caricando) accAggiorna().then(render);
  return ACC.pronto;
}
const caricamento='<div class="empty">Un momento…</div>';
const accMsgHtml = () => ACC.msg ? '<div class="acc-msg'+(ACC.err?' err':'')+'" role="status">'+esc(ACC.msg)+'</div>' : "";

/* ---------- vista: il mio account ---------- */
function vistaAccount(){
  const testa=crumbs([["Home","home/"],["Il mio account",null]]);
  if(!accServe()) return testa+caricamento;
  const prova = ACC.demo ? '<div class="acc-demo"><b>Versione di prova</b><span style="font-size:13.5px">Gli account sono finti e restano solo su questo dispositivo. Entra al volo come:</span>'+
    '<div class="acc-row"><button class="btn sm" data-acc="come" data-id="u-davide">Davide · titolare</button><button class="btn sm" data-acc="come" data-id="u-morena">Morena · collaboratrice</button><button class="btn sm" data-acc="come" data-id="u-maria">Maria · cliente</button><button class="btn sm" data-acc="come" data-id="u-base">Allievo · Base</button><button class="btn sm" data-acc="azzera" style="margin-left:auto">Ripristina la prova</button></div></div>' : "";
  if(!ACC.utente){
    const reg=ACC.tab==="nuovo";
    return testa+'<div class="acc-wrap"><h1 style="font-size:clamp(23px,5vw,32px)">'+(reg?"Crea il tuo account":"Accedi")+'</h1>'+
      '<p style="margin:0;color:var(--muted)">Un solo accesso per l\'anatomia, per il Gestionale e per la tua scheda di cliente.</p>'+accMsgHtml()+prova+
      '<div class="card"><div class="acc-tabs" role="tablist"><button class="'+(reg?"":"on")+'" data-acc="tab" data-id="entra">Accedi</button><button class="'+(reg?"on":"")+'" data-acc="tab" data-id="nuovo">Nuovo account</button></div>'+
      '<form class="acc-form" id="acc-form" style="margin-top:6px">'+
        (reg?'<label for="acc-nome">Nome e cognome</label><input class="inp" id="acc-nome" autocomplete="name" required>':'')+
        '<label for="acc-email">Email</label><input class="inp" id="acc-email" type="email" autocomplete="email" required>'+
        '<label for="acc-pw">Password</label><input class="inp" id="acc-pw" type="password" autocomplete="'+(reg?"new-password":"current-password")+'" minlength="6" required>'+
        '<button class="btn primary" type="submit" style="align-self:flex-start">'+(reg?"Crea l'account":"Accedi")+'</button></form></div>'+
      '<p style="font-size:13px;color:var(--muted);margin:0">Sei un cliente e lo studio ti ha dato un codice? Crea l\'account, poi inseriscilo qui: si collegherà la tua scheda.</p></div>';
  }
  const l=accLivello(), p=ACC.profilo||{};
  const studi=ACC.studi.map(s=>'<div class="acc-row"><b>'+esc(s.name)+'</b><span class="acc-lvl studio">'+(s.role==="titolare"?"Titolare":"Collaboratore")+'</span><button class="btn sm" data-go="pro/" style="margin-left:auto">Apri il Gestionale</button></div>').join("");
  const schede=ACC.schede.map(c=>'<div class="acc-row"><b>La mia scheda</b><span class="acc-lvl cliente">Cliente</span><button class="btn sm" data-go="mia-scheda/" style="margin-left:auto">Apri</button></div>').join("");
  return testa+'<div class="acc-wrap"><h1 style="font-size:clamp(23px,5vw,32px)">Il mio account</h1>'+accMsgHtml()+prova+
    '<div class="card"><span class="eyebrow">Account</span><div class="acc-row"><h3>'+esc(p.full_name||ACC.utente.email)+'</h3><span class="acc-lvl '+l+'">'+LIV_NOME[l]+'</span></div>'+
      '<p>'+esc(ACC.utente.email)+'</p>'+
      '<p>'+(l==="studio"?"Hai l'anatomia completa e il Gestionale: clienti, analisi posturale, schede da inviare."
        :l==="cliente"?"Hai la tua scheda di cliente e puoi esplorare l'anatomia."
        :"Hai l'anatomia completa. Con il Gestionale aggiungi clienti, analisi posturale e schede da inviare.")+'</p>'+
      (studi||schede?'<div style="display:flex;flex-direction:column;gap:8px;margin-top:6px">'+studi+schede+'</div>':'')+
      '<div class="acc-row" style="margin-top:8px"><button class="btn sm" data-acc="esci">Esci</button></div></div>'+
    '<div class="card"><span class="eyebrow">Hai un codice?</span><p>Il codice d\'invito di uno studio (collaboratori) o il codice della tua scheda di cliente.</p>'+
      '<form class="acc-row" id="acc-codice"><input class="inp" id="acc-cod" placeholder="Es. K7MP-Q4XZ" autocomplete="off" style="flex:1;min-width:160px;text-transform:uppercase"><button class="btn primary" type="submit">Usa il codice</button></form></div></div>';
}

/* ---------- vista: sezione Studio ---------- */
const STUDIO_MODULI=[
  ["Clienti","Anagrafica, contatti, consenso, note del colloquio dettate a voce.","Fase 2"],
  ["Analisi posturale","Foto con misure automatiche, adesivi sul bacino, bocca, talloni, mobilità, confronto prima e dopo.","Fase 2"],
  ["Diario delle sedute","Trattamenti e allenamenti con i menu, riepilogo su WhatsApp.","Fase 2"],
  ["Report e proposta","Il PDF per il cliente: confronto, catene, piano a 3 mesi, link e codice QR.","Fase 2"],
  ["Schede da inviare","Dalla scheda di una catena o di un problema: «Invia al cliente», con l'invito a scoprire AnatomiaPratica.","Fase 3"],
  ["Area del cliente","Il cliente vede la sua scheda: valutazioni, sedute condivise, esercizi, documenti.","Fase 3"]
];
function vistaStudioPro(){
  const testa=crumbs([["Home","home/"],["Gestionale",null]]);
  if(!accServe()) return testa+caricamento;
  const moduli='<div class="grid g2">'+STUDIO_MODULI.map(m=>'<div class="card acc-tile"><span class="soon">'+m[2]+' · in arrivo</span><h3>'+m[0]+'</h3><p>'+m[1]+'</p></div>').join("")+'</div>';
  const intro='<h1 style="font-size:clamp(23px,5vw,32px)">Gestionale</h1><p style="margin:0;color:var(--muted);max-width:62ch">Il gestionale dentro AnatomiaPratica: i tuoi clienti, l\'analisi posturale dalle foto e le schede da mandare, collegati alle schede di anatomia.</p>';
  if(!ACC.utente) return testa+'<div class="acc-wrap">'+intro+'<div class="card"><h3>Accedi per usare il Gestionale</h3><p>Il Gestionale è il livello per i professionisti. Entra con il tuo account o creane uno.</p><button class="btn primary" data-go="account/" style="align-self:flex-start">Accedi</button></div>'+moduli+'</div>';
  const st=ACC.studi[0];
  if(!st){
    if(ACC.profilo && ACC.profilo.plan==="studio")
      return testa+'<div class="acc-wrap">'+intro+accMsgHtml()+'<div class="card"><span class="eyebrow">Primo passo</span><h3>Crea il tuo studio</h3><p>Diventi titolare: potrai invitare i collaboratori e aggiungere i clienti.</p>'+
        '<form class="acc-row" id="acc-studio"><input class="inp" id="acc-snome" placeholder="Nome dello studio" style="flex:1;min-width:180px" required><button class="btn primary" type="submit">Crea lo studio</button></form></div>'+moduli+'</div>';
    return testa+'<div class="acc-wrap">'+intro+accMsgHtml()+'<div class="card"><span class="eyebrow">Livello Gestionale</span><h3>Passa al Gestionale</h3><p>Hai il livello '+LIV_NOME[accLivello()]+'. Con il Gestionale aggiungi clienti, analisi posturale, report e schede da inviare, tutto collegato all\'anatomia.</p>'+
      '<p style="font-size:13px">Collabori in uno studio? Chiedi al titolare il codice d\'invito e inseriscilo nel <button class="btn sm" data-go="account/">tuo account</button>.</p></div>'+moduli+'</div>';
  }
  const titolare=st.role==="titolare", lista=ACC.membri[st.id];
  if(!lista) AC().membri(st.id).then(m=>{ ACC.membri[st.id]=m; render(); }).catch(e=>{ accMsg(accErrore(e),true); ACC.membri[st.id]=[]; render(); });
  const membri=(lista||[]).map(m=>'<div class="acc-row"><span>'+esc(m.full_name||"—")+'</span><span class="acc-lvl'+(m.role==="titolare"?" studio":"")+'">'+(m.role==="titolare"?"Titolare":"Collaboratore")+'</span>'+
    (titolare&&m.role!=="titolare"?'<button class="btn sm" data-acc="togli" data-id="'+esc(m.user_id)+'" style="margin-left:auto">Togli</button>':'')+'</div>').join("");
  const invito = ACC.codice ? '<div class="acc-msg"><span class="eyebrow">Codice d\'invito · valido 14 giorni, una volta</span><div class="acc-code">'+esc(ACC.codice)+'</div>'+
      '<div class="acc-row"><a class="btn sm" target="_blank" rel="noopener" href="https://wa.me/?text='+encodeURIComponent("Ti invito nello studio "+st.name+" su AnatomiaPratica. Crea il tuo account, poi in «Il mio account» inserisci il codice: "+ACC.codice)+'">Manda su WhatsApp</a></div></div>' : "";
  return testa+'<div class="acc-wrap"><span class="eyebrow">'+(titolare?"Titolare":"Collaboratore")+'</span><h1 style="font-size:clamp(23px,5vw,32px)">'+esc(st.name)+'</h1>'+accMsgHtml()+
    '<div class="card"><span class="eyebrow">Chi lavora nello studio</span>'+(lista?membri:'<p>Un momento…</p>')+
      (titolare?'<div class="acc-row" style="margin-top:6px"><button class="btn sm primary" data-acc="invita">Invita un collaboratore</button></div>'+invito:'')+'</div>'+
    '<div class="seg">Il gestionale</div>'+moduli+'</div>';
}

/* ---------- vista: la mia scheda (cliente) ---------- */
function vistaMiaScheda(){
  const testa=crumbs([["Home","home/"],["La mia scheda",null]]);
  if(!accServe()) return testa+caricamento;
  if(!ACC.utente) return testa+'<div class="acc-wrap"><div class="card"><h3>Accedi per vedere la tua scheda</h3><button class="btn primary" data-go="account/" style="align-self:flex-start">Accedi</button></div></div>';
  if(!ACC.schede.length) return testa+'<div class="acc-wrap"><div class="card"><h3>Nessuna scheda collegata</h3><p>Se lo studio ti ha dato un codice, inseriscilo nel tuo account.</p><button class="btn" data-go="account/" style="align-self:flex-start">Il mio account</button></div></div>';
  return testa+'<div class="acc-wrap"><h1 style="font-size:clamp(23px,5vw,32px)">Ciao '+esc((ACC.schede[0].full_name||"").split(" ")[0])+'</h1>'+
    '<div class="card"><span class="eyebrow">La mia scheda · in arrivo</span><p>Qui troverai le tue valutazioni con le foto, le sedute, gli esercizi assegnati, le schede che ti manda lo studio e i tuoi documenti.</p></div>'+
    '<div class="card"><span class="eyebrow">Intanto</span><h3>Esplora come funziona il tuo corpo</h3><p>Muscoli, catene miofasciali e problemi di tutti i giorni, spiegati scheda per scheda.</p><button class="btn" data-go="lista/catena" style="align-self:flex-start">Le catene miofasciali</button></div></div>';
}

/* ---------- azioni ---------- */
async function accEsegui(fn, okMsg){
  accMsg("");
  try{ const r=await fn(); if(okMsg) accMsg(typeof okMsg==="function"?okMsg(r):okMsg); await accAggiorna(); }
  catch(e){ accMsg(accErrore(e),true); }
  render();
}
document.addEventListener("click",e=>{
  const b=e.target.closest("[data-acc]"); if(!b) return;
  const a=b.getAttribute("data-acc"), id=b.getAttribute("data-id");
  if(a==="tab"){ ACC.tab=id; accMsg(""); render(); }
  else if(a==="come") accEsegui(()=>PROVA.entraCome(id), "Sei entrato nella versione di prova.");
  else if(a==="azzera"){ PROVA.azzera(); ACC.membri={}; ACC.codice=null; accEsegui(()=>PROVA.esci(), "Prova ripristinata."); }
  else if(a==="esci"){ ACC.membri={}; ACC.codice=null; accEsegui(()=>AC().esci(), "Sei uscito."); }
  else if(a==="invita"){ const st=ACC.studi[0]; accEsegui(async()=>{ ACC.codice=await AC().invito(st.id); }); }
  else if(a==="togli"){ const st=ACC.studi[0]; delete ACC.membri[st.id]; accEsegui(()=>AC().togli(st.id,id), "Collaboratore tolto dallo studio."); }
});
document.addEventListener("submit",e=>{
  const f=e.target;
  if(f.id==="acc-form"){
    e.preventDefault();
    const email=$("#acc-email").value, pw=$("#acc-pw").value, nome=($("#acc-nome")||{}).value||"";
    accEsegui(()=> ACC.tab==="nuovo" ? AC().registrati(email,pw,nome.trim()) : AC().entra(email,pw), ACC.tab==="nuovo"?"Account creato.":"Bentornato.");
  } else if(f.id==="acc-codice"){
    e.preventDefault();
    const c=$("#acc-cod").value.trim(); if(!c) return;
    // prima prova come invito di uno studio, poi come codice cliente
    accEsegui(async()=>{ try{ return "studio:"+await AC().unisciti(c); }catch(e1){ return "cliente:"+await AC().collegaScheda(c); } },
      r=> r.indexOf("studio:")===0 ? "Sei entrato nello studio "+r.slice(7)+"." : "La tua scheda è collegata.");
  } else if(f.id==="acc-studio"){
    e.preventDefault();
    accEsegui(()=>AC().creaStudio($("#acc-snome").value.trim()), "Studio creato: sei il titolare.");
  }
});

/* cambiando pagina il messaggio dell'ultima azione sparisce */
window.addEventListener("hashchange",()=>{ accMsg(""); });

/* all'avvio: se c'è già una sessione salvata, la riprende in silenzio */
(function(){
  let salvata=false;
  try{ salvata = ACC.demo ? !!(load("prova.acc",null)||{}).sessione : !!localStorage.getItem("tv-auth"); }catch(e){}
  if(salvata) accAggiorna();
})();
</script>
