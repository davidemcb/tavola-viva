<script>
/* =========================================================
   ACCESSO: login con email e password. I contenuti arrivano dal server (/api/dati) solo se
   l'abbonamento è attivo; l'amministratore ha il pannello utenti. Tutto dentro una IIFE:
   nessun nome in comune con l'app, che viene caricata dopo.
   ========================================================= */
(function(){
  const API=(localStorage.getItem("tv.api")||"").replace(/\/$/,"");
  const K="tv.token"; let TOKEN=localStorage.getItem(K)||""; let ME=null; let APP_CARICATA=false;
  const q=s=>document.querySelector(s);
  const h=s=>String(s==null?"":s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const dataIt=s=>{ if(!s) return ""; const [a,m,g]=s.split("-"); return g+"/"+m+"/"+a; };
  const TESTO_RINNOVO='<p>Per rinnovare: <b>19 € al mese</b> oppure <b>197 € all\'anno</b>.</p><ul style="margin:0;padding-left:18px"><li><b>Bonifico</b>: chiedi l\'IBAN a Davide e indica la tua email nella causale.</li><li><b>Contanti</b>: in studio o a lezione.</li></ul><p>Appena il pagamento è registrato, l\'accesso riparte da solo: non devi fare altro. Scrivi a <a href="mailto:scuderidavide@libero.it">scuderidavide@libero.it</a> o su WhatsApp.</p>';

  async function chiama(path,corpo,metodo){
    const r=await fetch(API+path,{method:metodo||(corpo?"POST":"GET"),headers:Object.assign({"Content-Type":"application/json"},TOKEN?{"Authorization":"Bearer "+TOKEN}:{}),body:corpo?JSON.stringify(corpo):undefined});
    let d={}; const ct=r.headers.get("Content-Type")||"";
    if(ct.indexOf("json")>=0) d=await r.json().catch(()=>({})); else d={testo:await r.text()};
    return {ok:r.ok,status:r.status,data:d};
  }
  function pagina(html){ const p=q("#page"); if(p) p.innerHTML=html; }
  const card=(inner)=>'<div style="max-width:460px;margin:24px auto"><div class="card" style="gap:12px">'+inner+'</div></div>';

  function mostraLogin(msg){
    pagina(card('<span class="eyebrow">AnatomiaPratica</span><h1 style="font-size:24px;margin:0">Accedi</h1>'+
      '<p style="margin:0;color:var(--muted)">L\'atlante del massaggiatore: anatomia, biomeccanica, posturologia, test e trigger point, da leggere e da ascoltare.</p>'+
      '<form id="acc-form" style="display:flex;flex-direction:column;gap:10px">'+
      '<label>Email<br><input name="email" type="email" required autocomplete="username" class="inp" style="width:100%"></label>'+
      '<label>Password<br><input name="password" type="password" required autocomplete="current-password" class="inp" style="width:100%"></label>'+
      (msg?'<p style="color:var(--muscle);margin:0">'+h(msg)+'</p>':'')+
      '<button class="btn primary" type="submit">Entra</button></form>'+
      '<p style="font-size:12.5px;color:var(--faint);margin:0">Non hai ancora le credenziali o hai dimenticato la password? Scrivi a <a href="mailto:scuderidavide@libero.it">scuderidavide@libero.it</a>: l\'accesso costa 19 € al mese o 197 € all\'anno.</p>'));
    q("#acc-form").addEventListener("submit",async e=>{
      e.preventDefault(); const f=new FormData(e.target); const b=e.target.querySelector("button"); b.disabled=true; b.textContent="Un momento…";
      const r=await chiama("/api/login",{email:f.get("email"),password:f.get("password")});
      if(!r.ok){ mostraLogin(r.data.errore||"Accesso non riuscito"); return; }
      TOKEN=r.data.token; localStorage.setItem(K,TOKEN); ME=r.data; dopoLogin();
    });
  }
  function mostraScaduto(){
    const a=ME.abbonamento;
    pagina(card('<span class="eyebrow">Abbonamento</span><h1 style="font-size:24px;margin:0">'+(a?'Accesso scaduto il '+h(dataIt(a.scadenza)):'Nessun abbonamento attivo')+'</h1>'+
      '<p style="margin:0">Ciao '+h(ME.utente.nome||ME.utente.email)+'. '+(a?'Il tuo accesso '+h(a.piano)+' è terminato.':'Il tuo account esiste ma non è ancora stato attivato.')+'</p>'+TESTO_RINNOVO+
      '<div class="acts"><button class="btn sm" id="acc-ricontrolla">Ho pagato: ricontrolla</button><button class="btn sm" id="acc-esci">Esci</button></div>'));
    q("#acc-esci").onclick=esci; q("#acc-ricontrolla").onclick=avvio;
  }
  function mostraCambioPassword(obbligatorio){
    pagina(card('<span class="eyebrow">Sicurezza</span><h1 style="font-size:22px;margin:0">'+(obbligatorio?'Scegli la tua password':'Cambia password')+'</h1>'+
      (obbligatorio?'<p style="margin:0;color:var(--muted)">Quella che hai ricevuto è provvisoria: scegline una tua (almeno 8 caratteri).</p>':'')+
      '<form id="pw-form" style="display:flex;flex-direction:column;gap:10px">'+
      '<label>Password attuale<br><input name="vecchia" type="password" required autocomplete="current-password" class="inp" style="width:100%"></label>'+
      '<label>Nuova password<br><input name="nuova" type="password" required minlength="8" autocomplete="new-password" class="inp" style="width:100%"></label>'+
      '<label>Ripeti la nuova password<br><input name="nuova2" type="password" required minlength="8" autocomplete="new-password" class="inp" style="width:100%"></label>'+
      '<p id="pw-err" style="color:var(--muscle);margin:0"></p>'+
      '<div class="acts"><button class="btn primary" type="submit">Salva</button>'+(obbligatorio?'':'<button class="btn sm" type="button" id="pw-annulla">Annulla</button>')+'</div></form>'));
    if(!obbligatorio) q("#pw-annulla").onclick=()=>{ location.reload(); };
    q("#pw-form").addEventListener("submit",async e=>{
      e.preventDefault(); const f=new FormData(e.target);
      if(f.get("nuova")!==f.get("nuova2")){ q("#pw-err").textContent="Le due password non coincidono."; return; }
      const r=await chiama("/api/password",{vecchia:f.get("vecchia"),nuova:f.get("nuova")});
      if(!r.ok){ q("#pw-err").textContent=r.data.errore||"Non riuscito"; return; }
      ME.utente.cambia_password=false; if(obbligatorio) dopoLogin(); else location.reload();
    });
  }
  async function esci(){ try{ await chiama("/api/logout",{}); }catch(e){} TOKEN=""; localStorage.removeItem(K); location.hash="#/home/"; location.reload(); }

  async function caricaApp(){
    pagina(card('<span class="eyebrow">AnatomiaPratica</span><h1 style="font-size:22px;margin:0">Carico le schede…</h1><div class="bar"><i style="width:30%"></i></div>'));
    const r=await fetch(API+"/api/dati",{headers:{"Authorization":"Bearer "+TOKEN}});
    if(r.status===402){ ME=(await r.json()); mostraScaduto(); return; }
    if(!r.ok){ pagina(card('<p>Non riesco a caricare i contenuti ('+r.status+'). Riprova fra poco.</p><button class="btn sm" id="acc-esci">Esci</button>')); q("#acc-esci").onclick=esci; return; }
    const testo=await r.text();
    pagina("");
    const parti=testo.split(/\r?\n\/\*@@SEP@@\*\/\r?\n/);
    for(const p of parti){
      if(!p.trim()) continue;
      if(p.indexOf("/*CSS*/")===0){ const s=document.createElement("style"); s.textContent=p.slice(7); document.head.appendChild(s); }
      else { const s=document.createElement("script"); s.textContent=p; document.body.appendChild(s); }
    }
    APP_CARICATA=true; barra();
  }
  function barra(){
    let b=q("#abbo-bar"); if(!b){ b=document.createElement("div"); b.id="abbo-bar"; const page=q("#page"); page.parentNode.insertBefore(b,page); }
    const a=ME.abbonamento; const admin=ME.utente.ruolo==="admin"||ME.utente.ruolo==="venditore";
    const giorni=a&&a.attivo?a.giorni:0; const avviso=a&&a.attivo&&giorni<=7;
    b.innerHTML='<div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap;font-size:12.5px;color:var(--muted);padding:6px 0 2px">'+
      '<span>'+h(ME.utente.nome||ME.utente.email)+(ME.utente.ruolo==="admin"?' · amministratore':ME.utente.ruolo==="venditore"?' · venditore':'')+'</span>'+
      (a?'<span style="'+(avviso?'color:var(--muscle);font-weight:600':'')+'">'+(a.attivo?'accesso fino al '+h(dataIt(a.scadenza))+' ('+giorni+' giorn'+(giorni===1?'o':'i')+')':'abbonamento scaduto')+'</span>':'')+
      (avviso?'<span style="color:var(--muscle)">· rinnova per non interrompere</span>':'')+
      '<span style="margin-left:auto;display:flex;gap:6px">'+(admin?'<button class="btn sm" id="abbo-pannello">Pannello utenti</button>':'')+'<button class="btn sm" id="abbo-pw">Password</button><button class="btn sm" id="abbo-esci">Esci</button></span></div>';
    q("#abbo-esci").onclick=esci; q("#abbo-pw").onclick=()=>mostraCambioPassword(false);
    if(admin) q("#abbo-pannello").onclick=apriPannello;
  }
  async function dopoLogin(){
    if(ME.utente.cambia_password){ mostraCambioPassword(true); return; }
    if(!ME.accesso){ mostraScaduto(); return; }
    if(APP_CARICATA){ location.reload(); return; }
    await caricaApp();
  }
  async function avvio(){
    if(!TOKEN){ mostraLogin(); return; }
    const r=await chiama("/api/me");
    if(r.status===401||r.status===403){ TOKEN=""; localStorage.removeItem(K); mostraLogin(r.data.errore); return; }
    if(!r.ok){ pagina(card('<p>Il server non risponde ('+r.status+'). Riprova fra poco.</p>')); return; }
    ME=r.data; dopoLogin();
  }

  /* ---------- pannello dell'amministratore ---------- */
  let UT=[];
  function ov(){ let o=q("#admin-ov"); if(!o){ o=document.createElement("div"); o.id="admin-ov"; o.style.cssText="position:fixed;inset:0;z-index:60;background:var(--bg,#fff);overflow:auto;padding:16px"; document.body.appendChild(o); } return o; }
  async function apriPannello(){ const o=ov(); o.innerHTML='<p>Carico…</p>'; const r=await chiama("/api/admin/utenti"); UT=r.ok?r.data.utenti:[]; disegnaPannello(); }
  function disegnaPannello(msg){
    const o=ov(); const t=new Date().toISOString().slice(0,10);
    const attivi=UT.filter(u=>u.abbonato).length, inScad=UT.filter(u=>u.abbonato&&u.giorni<=7).length, scaduti=UT.filter(u=>!u.abbonato&&u.ruolo!=="admin").length;
    const riga=u=>'<tr'+(u.attivo?'':' style="opacity:.55"')+'><td><b>'+h(u.nome||"")+'</b><br><span class="mono" style="font-size:12px">'+h(u.email)+'</span>'+(u.ruolo==="admin"?' <span class="eyebrow">admin</span>':u.ruolo==="venditore"?' <span class="eyebrow">venditore</span>':'')+'</td>'+
      '<td>'+(u.scadenza?h(u.piano)+'<br>'+(u.abbonato?'<span style="color:var(--ok)">fino al '+h(dataIt(u.scadenza))+' ('+u.giorni+' gg)</span>':'<span style="color:var(--muscle)">scaduto il '+h(dataIt(u.scadenza))+'</span>'):'<span style="color:var(--faint)">mai attivato</span>')+'</td>'+
      '<td style="font-size:12px">'+(u.ultimo_accesso?h(u.ultimo_accesso.slice(0,16).replace("T"," ")):"mai")+(u.cambia_password?'<br><span style="color:var(--faint)">password provvisoria</span>':'')+(u.venduto_da?'<br><span style="color:var(--faint)">venduto da '+h(u.venduto_da)+'</span>':'')+'</td>'+
      '<td><div style="display:flex;gap:4px;flex-wrap:wrap"><button class="btn sm" data-adm="attiva" data-id="'+u.id+'">Attiva / prolunga</button>'+
      '<button class="btn sm" data-adm="stato" data-id="'+u.id+'" data-v="'+(u.attivo?0:1)+'">'+(u.attivo?"Blocca":"Sblocca")+'</button>'+
      '<button class="btn sm" data-adm="reset" data-id="'+u.id+'">Nuova password</button>'+
      '<button class="btn sm" data-adm="storico" data-id="'+u.id+'">Storico</button>'+
      '<button class="btn sm" data-adm="elimina" data-id="'+u.id+'" style="color:var(--muscle)">Elimina</button></div><div id="adm-out-'+u.id+'" style="font-size:12.5px;margin-top:4px"></div></td></tr>';
    o.innerHTML='<div style="max-width:1100px;margin:0 auto">'+
      '<div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:12px"><h1 style="font-size:24px;margin:0">Pannello utenti</h1><span style="color:var(--muted);font-size:13px">'+UT.length+' utenti · '+attivi+' attivi · '+inScad+' in scadenza entro 7 giorni · '+scaduti+' scaduti o mai attivati</span>'+
      '<button class="btn sm" id="adm-prova-email" style="margin-left:auto">Prova email</button><button class="btn sm" id="adm-chiudi">Chiudi</button></div>'+
      (msg?'<div class="card" style="margin-bottom:12px;border-color:var(--ok)">'+msg+'</div>':'')+
      '<details class="card" style="margin-bottom:14px"><summary style="cursor:pointer;font-weight:600">Nuovo utente</summary>'+
      '<form id="adm-nuovo" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:8px;margin-top:10px">'+
      '<input name="email" type="email" required placeholder="email" class="inp"><input name="nome" placeholder="nome e cognome" class="inp">'+
      (ME.utente.ruolo==="admin"?'<select name="ruolo" class="inp"><option value="allievo">Allievo</option><option value="venditore">Venditore (vende e registra pagamenti)</option><option value="admin">Amministratore</option></select>':'')+
      '<select name="piano" class="inp"><option value="">Solo account (attivo dopo)</option><option value="mensile">Mensile · 19 €</option><option value="annuale">Annuale · 197 €</option><option value="giorni">Giorni (prova)</option><option value="omaggio">Omaggio</option></select>'+
      '<input name="giorni" type="number" min="1" placeholder="giorni (per prova/omaggio)" class="inp"><select name="metodo" class="inp"><option value="contanti">Contanti</option><option value="bonifico">Bonifico</option><option value="omaggio">Omaggio</option></select>'+
      '<input name="importo" type="number" step="0.01" placeholder="importo € (vuoto = listino)" class="inp"><input name="nota" placeholder="nota (es. corso 2026)" class="inp">'+
      '<label style="display:flex;gap:6px;align-items:center;font-size:13px"><input type="checkbox" name="invia_email" value="true" checked> Invia l\'email con le credenziali</label>'+
      '<button class="btn primary" type="submit">Crea</button></form><p style="font-size:12px;color:var(--faint);margin:8px 0 0">La password provvisoria compare qui sotto: comunicala all\'allievo, che al primo accesso ne sceglie una sua.</p><div id="adm-nuovo-out"></div></details>'+
      '<div class="scroller"><table class="tbl"><thead><tr><th>Utente</th><th>Abbonamento</th><th>Ultimo accesso</th><th>Azioni</th></tr></thead><tbody>'+UT.map(riga).join("")+'</tbody></table></div>'+
      '<details class="card" style="margin-top:16px" id="adm-vendite"><summary style="cursor:pointer;font-weight:600">Riepilogo vendite e quote</summary><div id="adm-vendite-in" style="margin-top:10px">Carico…</div></details>'+
      '<div id="adm-dialogo"></div></div>';
    q("#adm-chiudi").onclick=()=>{ o.remove(); };
    q("#adm-vendite").addEventListener("toggle",()=>{ if(q("#adm-vendite").open) riepilogoVendite(); },{once:false});
    q("#adm-prova-email").onclick=async()=>{ const b=q("#adm-prova-email"); b.textContent="Invio…"; const r=await chiama("/api/admin/prova-email",{}); b.textContent="Prova email"; disegnaPannello(r.data.inviata?'Email di prova inviata a '+h(ME.utente.email)+': controlla la posta (anche lo spam).':'<span style="color:var(--muscle)">Email non inviata: '+h(r.data.motivo||r.data.errore||"")+'</span>'); };
    q("#adm-nuovo").addEventListener("submit",async e=>{ e.preventDefault(); const f=Object.fromEntries(new FormData(e.target).entries()); if(!f.invia_email) f.invia_email="false"; const r=await chiama("/api/admin/utente",f);
      if(!r.ok){ q("#adm-nuovo-out").innerHTML='<p style="color:var(--muscle)">'+h(r.data.errore)+'</p>'; return; }
      await apriPannello(); disegnaPannello('<b>Utente creato.</b> Email: <span class="mono">'+h(f.email)+'</span> · password provvisoria: <b class="mono" style="font-size:16px">'+h(r.data.password)+'</b>'+(r.data.abbonamento?' · attivo fino al '+h(dataIt(r.data.abbonamento.scadenza)):'')+esitoEmail(r.data.email)+pulsantiCredenziali(f.email,r.data.password,r.data.abbonamento&&r.data.abbonamento.scadenza,f.nome)); });
    o.querySelectorAll("[data-adm]").forEach(b=>b.onclick=()=>azione(b.getAttribute("data-adm"),parseInt(b.getAttribute("data-id"),10),b));
  }
  async function riepilogoVendite(mese){
    const box=q("#adm-vendite-in"); if(!box) return;
    const r=await chiama("/api/admin/riepilogo"+(mese?"?mese="+mese:"")); if(!r.ok){ box.innerHTML='<span style="color:var(--muscle)">'+h(r.data.errore)+'</span>'; return; }
    const d=r.data; const eur=x=>(Math.round(Number(x||0)*100)/100).toFixed(2).replace(".",",")+" €";
    const mesi=(d.mesi.length?d.mesi:[d.mese]); if(mesi.indexOf(d.mese)<0) mesi.unshift(d.mese);
    box.innerHTML='<div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-bottom:8px"><span>Mese</span><select id="adm-mese" class="inp">'+mesi.map(m=>'<option value="'+m+'"'+(m===d.mese?' selected':'')+'>'+m.split("-").reverse().join("/")+'</option>').join("")+'</select><span style="color:var(--faint);font-size:12.5px">quota venditore: '+d.quota+' % degli incassi registrati da lui/lei</span></div>'+
      (d.righe.length?'<table class="tbl"><tr><th>Chi ha venduto</th><th>Abbonamenti</th><th>Contanti</th><th>Bonifico</th><th>Totale</th><th>Quota ('+d.quota+' %)</th></tr>'+d.righe.map(x=>'<tr><td>'+h(x.venditore)+(x.ruolo==="venditore"?"":" <span class=\"eyebrow\">"+h(x.ruolo||"")+"</span>")+'</td><td>'+x.n+'</td><td>'+eur(x.contanti)+'</td><td>'+eur(x.bonifico)+'</td><td><b>'+eur(x.totale)+'</b></td><td>'+(x.ruolo==="venditore"?'<b>'+eur(x.quota_venditore)+'</b>':'—')+'</td></tr>').join("")+'</table>':'<p class="empty">Nessun abbonamento registrato in questo mese.</p>')+
      (d.dettaglio.length?'<details style="margin-top:8px"><summary style="cursor:pointer">Dettaglio ('+d.dettaglio.length+')</summary><table class="tbl" style="font-size:12px;margin-top:6px"><tr><th>Data</th><th>Allievo</th><th>Piano</th><th>Metodo</th><th>€</th><th>Dal</th><th>Al</th><th>Venduto da</th><th>Nota</th></tr>'+d.dettaglio.map(x=>'<tr><td>'+h((x.creato||"").slice(0,10).split("-").reverse().join("/"))+'</td><td>'+h(x.nome||x.email)+'</td><td>'+h(x.piano)+'</td><td>'+h(x.metodo||"")+'</td><td>'+eur(x.importo)+'</td><td>'+h(dataIt(x.inizio))+'</td><td>'+h(dataIt(x.scadenza))+'</td><td>'+h(x.venditore||"")+'</td><td>'+h(x.nota||"")+'</td></tr>').join("")+'</table></details>':'');
    q("#adm-mese").onchange=e=>riepilogoVendite(e.target.value);
  }
  async function azione(a,id,btn){
    const u=UT.find(x=>x.id===id); const out=q("#adm-out-"+id);
    if(a==="stato"){ await chiama("/api/admin/stato",{utente_id:id,attivo:btn.getAttribute("data-v")==="1"}); return apriPannello(); }
    if(a==="reset"){ if(!confirm("Generare una nuova password provvisoria per "+u.email+"? Quella attuale smette di funzionare.")) return; const r=await chiama("/api/admin/reset",{utente_id:id}); out.innerHTML=r.ok?'Nuova password provvisoria: <b class="mono" style="font-size:15px">'+h(r.data.password)+'</b>'+esitoEmail(r.data.email)+pulsantiCredenziali(u.email,r.data.password,u.abbonato?u.scadenza:null,u.nome):'<span style="color:var(--muscle)">'+h(r.data.errore)+'</span>'; return; }
    if(a==="elimina"){ if(!confirm("Eliminare definitivamente "+u.email+" con tutto lo storico?")) return; await chiama("/api/admin/elimina",{utente_id:id}); return apriPannello(); }
    if(a==="storico"){ const r=await chiama("/api/admin/abbonamenti?utente_id="+id); const L=r.ok?r.data.abbonamenti:[];
      out.innerHTML=L.length?'<table class="tbl" style="font-size:12px"><tr><th>Piano</th><th>Dal</th><th>Al</th><th>Metodo</th><th>€</th><th>Nota</th><th></th></tr>'+L.map(x=>'<tr><td>'+h(x.piano)+'</td><td>'+h(dataIt(x.inizio))+'</td><td>'+h(dataIt(x.scadenza))+'</td><td>'+h(x.metodo||"")+'</td><td>'+(x.importo!=null?x.importo:"")+'</td><td>'+h(x.nota||"")+'</td><td><button class="btn sm" data-sc="'+x.id+'">Cambia scadenza</button></td></tr>').join("")+'</table>':'Nessun abbonamento.';
      out.querySelectorAll("[data-sc]").forEach(b=>b.onclick=async()=>{ const d=prompt("Nuova data di scadenza (AAAA-MM-GG):"); if(!d) return; const r2=await chiama("/api/admin/scadenza",{abbonamento_id:parseInt(b.getAttribute("data-sc"),10),scadenza:d}); if(!r2.ok) alert(r2.data.errore); apriPannello(); }); return; }
    if(a==="attiva"){
      out.innerHTML='<form class="adm-att" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:6px;margin-top:6px">'+
        '<select name="piano" class="inp"><option value="mensile">Mensile · 19 €</option><option value="annuale">Annuale · 197 €</option><option value="giorni">Giorni</option><option value="omaggio">Omaggio</option></select>'+
        '<input name="giorni" type="number" min="1" placeholder="giorni" class="inp"><input name="inizio" type="date" class="inp" title="inizio (vuoto = oggi, o dal giorno dopo la scadenza attuale)">'+
        '<select name="metodo" class="inp"><option value="contanti">Contanti</option><option value="bonifico">Bonifico</option><option value="omaggio">Omaggio</option></select>'+
        '<input name="importo" type="number" step="0.01" placeholder="importo €" class="inp"><input name="nota" placeholder="nota" class="inp">'+
        '<label style="display:flex;gap:6px;align-items:center;font-size:12.5px"><input type="checkbox" name="invia_email" value="true" checked> Avvisa per email</label>'+
        '<button class="btn primary sm" type="submit">Conferma</button><button class="btn sm" type="button" data-ann="1">Annulla</button></form>'+
        '<p style="font-size:12px;color:var(--faint);margin:4px 0 0">Se l\'abbonamento è ancora attivo, il nuovo periodo parte dal giorno dopo la scadenza: nessun giorno perso.</p>';
      const f=out.querySelector("form"); f.querySelector("[data-ann]").onclick=()=>{ out.innerHTML=""; };
      f.addEventListener("submit",async e=>{ e.preventDefault(); const d=Object.fromEntries(new FormData(f).entries()); d.utente_id=id; if(!d.invia_email) d.invia_email="false"; const r=await chiama("/api/admin/attiva",d);
        if(!r.ok){ out.innerHTML='<span style="color:var(--muscle)">'+h(r.data.errore)+'</span>'; return; } await apriPannello(); disegnaPannello('<b>'+h(u.email)+'</b>: '+h(d.piano)+' attivo dal '+h(dataIt(r.data.abbonamento.inizio))+' al '+h(dataIt(r.data.abbonamento.scadenza))+'.'+esitoEmail(r.data.email)); });
    }
  }
  function messaggioCredenziali(email,pw,scadenza,nome){
    const link=location.origin+location.pathname;
    return "Ciao "+(nome||"")+"! Ecco il tuo accesso ad AnatomiaPratica, l'atlante del massaggiatore."+"\n"+"\n"+"Apri: "+link+"\n"+"Email: "+email+"\n"+"Password provvisoria: "+pw+"\n"+"\n"+"Al primo accesso scegli la tua password. "+(scadenza?"L'accesso vale fino al "+dataIt(scadenza)+".":"")+"\n"+"Sul telefono: menu del browser > Aggiungi alla schermata Home, e diventa un'app."+"\n"+"\n"+"Buono studio! Davide";
  }
  function esitoEmail(e){ if(!e) return ""; return e.inviata?' <span style="color:var(--ok)">· email inviata</span>':' <span style="color:var(--faint)">· email non inviata ('+h(e.motivo||"")+')</span>'; }
  function pulsantiCredenziali(email,pw,scadenza,nome){
    const m=messaggioCredenziali(email,pw,scadenza,nome);
    return '<div class="acts" style="margin-top:6px"><a class="btn sm" target="_blank" rel="noopener" href="https://wa.me/?text='+encodeURIComponent(m)+'">Invia su WhatsApp</a>'+
      '<a class="btn sm" href="mailto:'+encodeURIComponent(email)+'?subject='+encodeURIComponent("Il tuo accesso ad AnatomiaPratica")+'&body='+encodeURIComponent(m)+'">Invia per e-mail</a>'+
      '<button class="btn sm" type="button" data-copia="'+h(m)+'">Copia messaggio</button></div>';
  }
  document.addEventListener("click",e=>{ const b=e.target.closest("[data-copia]"); if(!b) return; navigator.clipboard.writeText(b.getAttribute("data-copia")).then(()=>{ b.textContent="Copiato"; setTimeout(()=>b.textContent="Copia messaggio",1500); }); });
  window.ACCESSO={esci:esci,me:()=>ME};
  document.addEventListener("DOMContentLoaded",avvio);
})();
</script>
