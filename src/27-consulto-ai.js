<style>
.ai-box{border:1px solid color-mix(in srgb,var(--fascia) 45%,var(--line));background:color-mix(in srgb,var(--fascia) 6%,var(--surface));border-radius:13px;padding:14px 16px;display:flex;flex-direction:column;gap:10px}
.ai-box h3{font-size:17px}
.ai-wait{display:flex;gap:10px;align-items:center;color:var(--muted);font-size:13.5px}
.ai-wait i{width:14px;height:14px;border:2px solid var(--line);border-top-color:var(--fascia);border-radius:50%;animation:girasp 1s linear infinite;display:inline-block}
@keyframes girasp{to{transform:rotate(360deg)}}
.ai-key{display:flex;gap:8px;flex-wrap:wrap;align-items:center}
.ai-key input{flex:1;min-width:220px;padding:8px 10px;border:1px solid var(--line);border-radius:9px;background:var(--surface);color:var(--ink);font:inherit;font-size:13px}
.ai-q{background:var(--surface);border:1px dashed var(--line);border-radius:10px;padding:10px 12px;font-size:13.5px}
</style>
<script>
/* =========================================================
   CONSULTO CON CLAUDE — ragiona sulla frase del cliente
   usando le schede dell'app come base di conoscenza.
   La chiave API resta sul dispositivo (localStorage) e non passa da nessun server nostro.
   ========================================================= */
const AI = { modello:"claude-opus-5-5", url:"https://api.anthropic.com/v1/messages" };
function aiKey(){ return load("apikey",""); }
function aiHaKey(){ return !!aiKey(); }

/* base di conoscenza compatta: nomi, trigger e test già scritti nelle schede */
function aiConoscenza(){
  const m=DB.muscoli.map(x=>"- "+x.nome+" ["+x.id+"] · "+(x.gruppo||"")+" · dolore riferito: "+(x.trigger||"").slice(0,110)).join("\n");
  const a=DB.articolazioni.map(x=>"- "+x.nome+" ["+x.id+"]").join("\n");
  const v=DB.movimenti.map(x=>"- "+x.nome+" ["+x.id+"] · normale "+x.range+" · limitato da: "+(x.limite||"").slice(0,90)).join("\n");
  const p=DB.problemi.map(x=>"- "+x.voce+" ["+x.id+"] · test: "+(x.cause||[]).map(c=>c.test).join(" / ").slice(0,160)).join("\n");
  const n=DB.nervi.map(x=>"- "+x.nome+" ["+x.id+"] · segno: "+(x.segno||"").slice(0,80)).join("\n");
  const g=DB.legamenti.map(x=>"- "+x.nome+" ["+x.id+"] · test: "+(x.test||"").slice(0,80)).join("\n");
  const b=DB.borse.map(x=>"- "+x.nome+" ["+x.id+"]").join("\n");
  const d=DB.tendini.map(x=>"- "+x.nome+" ["+x.id+"] · test: "+(x.test||"").slice(0,80)).join("\n");
  return "MUSCOLI\n"+m+"\n\nARTICOLAZIONI\n"+a+"\n\nMOVIMENTI\n"+v+"\n\nNERVI\n"+n+"\n\nLEGAMENTI\n"+g+"\n\nTENDINI\n"+d+"\n\nBORSE\n"+b+"\n\nQUADRI CLINICI GIA' DESCRITTI\n"+p;
}
const AI_SISTEMA = `Sei un docente di anatomia, biomeccanica e posturologia che forma massoterapisti e massaggiatori olistici in Italia. Un allievo ti descrive un problema con le parole del cliente. Devi aiutarlo a ragionare: che cosa guardare, quali test fare, quali strutture possono c'entrare, che cosa trattare e in che ordine, quando inviare al medico.

Regole:
- Ragiona sulla biomeccanica reale del gesto descritto (quale movimento, su quale piano, quali articolazioni e quali muscoli lo producono o lo frenano), non limitarti ai quadri gia' descritti.
- Usa la base di conoscenza qui sotto per nominare le strutture: quando citi un muscolo, un'articolazione, un nervo, un legamento, un tendine, una borsa o un movimento presenti nell'elenco, scrivi il nome ESATTO dell'elenco e aggiungi l'id fra parentesi quadre, es. "Quadrato dei lombi [m-quadrato-lombi]".
- Dai sempre 2-4 ipotesi ordinate per probabilita', ognuna con il test pratico per confermarla o escluderla (nome del test, posizione, cosa si osserva).
- Il massoterapista non fa diagnosi: usa "ipotesi da verificare", e indica chiaramente i segnali che richiedono l'invio al medico.
- Rispondi in italiano, con frasi brevi e concrete. Niente premesse, niente elenchi di avvertenze generiche.
- Rispondi SOLO con un oggetto JSON valido, senza testo prima o dopo, con questa forma:
{"sintesi":"2-3 frasi su cosa sta succedendo biomeccanicamente",
 "domande":["domanda da fare al cliente per orientarsi", "..."],
 "ipotesi":[{"titolo":"...","perche":"...","test":["..."],"strutture":["Nome esatto [id]","..."],"trattamento":["..."]}],
 "movimenti":[{"nome":"Nome esatto [id]","cosaMisurare":"..."}],
 "bandiereRosse":["..."],
 "segreto":"un consiglio pratico da esperto, 1-2 frasi"}

BASE DI CONOSCENZA
`;

async function aiConsulto(testo){
  const key=aiKey(); if(!key) throw new Error("nokey");
  const corpo={
    model:AI.modello, max_tokens:4000,
    output_config:{effort:"high"},
    fallbacks:"default",
    system:[{type:"text",text:AI_SISTEMA+aiConoscenza(),cache_control:{type:"ephemeral"}}],
    messages:[{role:"user",content:"Il cliente dice: «"+testo.trim()+"»"}]
  };
  const r=await fetch(AI.url,{method:"POST",headers:{
    "content-type":"application/json","x-api-key":key,"anthropic-version":"2023-06-01",
    "anthropic-beta":"server-side-fallback-2026-07-01",
    "anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify(corpo)});
  if(!r.ok){
    let msg="Errore "+r.status; try{ const j=await r.json(); msg=(j.error&&j.error.message)||msg; }catch(e){}
    if(r.status===401) msg="Chiave API non valida o scaduta.";
    if(r.status===429) msg="Troppe richieste: riprova fra qualche secondo.";
    throw new Error(msg);
  }
  const j=await r.json();
  if(j.stop_reason==="refusal") throw new Error("La richiesta non e' stata elaborata (filtro di sicurezza). Riformula la frase.");
  const txt=(j.content||[]).filter(b=>b.type==="text").map(b=>b.text).join("\n").trim();
  const inizio=txt.indexOf("{"), fine=txt.lastIndexOf("}");
  if(inizio<0||fine<0) throw new Error("Risposta non leggibile. Riprova.");
  return JSON.parse(txt.slice(inizio,fine+1));
}

/* "Nome [id]" -> pillola cliccabile, altrimenti testo con auto-link */
function aiTesto(s){
  s=String(s||"");
  return autolink(esc(s).replace(/\s*\[([a-z]+-[a-z0-9-]+)\]/g,""),null)
    .replace(/$/,"");
}
function aiStruttura(s){
  const m=String(s||"").match(/^(.*?)\s*\[([a-z]+-[a-z0-9-]+)\]\s*$/);
  if(m && anyById(m[2])) return pill(m[2],m[1].trim());
  const t=trovaTermine(s); if(t) return pill(t.id,String(s).replace(/\s*\[[^\]]*\]/,""));
  return '<span class="pill plain">'+esc(String(s).replace(/\s*\[[^\]]*\]/,""))+'</span>';
}
function aiHTML(r){
  let h='<div class="cons-res">';
  if((r.bandiereRosse||[]).length) h+='<div class="cons-card rosso"><h3>Quando inviare al medico</h3><ul style="margin:0;padding-left:18px;font-size:13.5px">'+r.bandiereRosse.map(x=>'<li>'+aiTesto(x)+'</li>').join("")+'</ul></div>';
  h+='<div class="ai-box"><span class="eyebrow" style="color:var(--fascia)">Consulto con Claude · ragionamento sulla frase</span><h3>Che cosa sta succedendo</h3><p style="margin:0;font-size:14px">'+aiTesto(r.sintesi)+'</p>';
  if((r.domande||[]).length) h+='<div class="seg" style="margin-top:4px">Domande da fare prima di toccare</div>'+r.domande.map(q=>'<div class="ai-q">'+aiTesto(q)+'</div>').join("");
  h+='</div>';
  (r.ipotesi||[]).forEach((ip,i)=>{
    h+='<div class="cons-card"><span class="pct">Ipotesi '+(i+1)+'</span><h3>'+aiTesto(ip.titolo)+'</h3><p style="margin:0;font-size:13.5px;color:var(--muted)">'+aiTesto(ip.perche)+'</p>'+
      '<div class="seg" style="margin-top:4px">Test per verificarla</div>'+(ip.test||[]).map((t,k)=>'<div class="cons-step"><i>'+(k+1)+'</i><div>'+aiTesto(t)+'</div></div>').join("")+
      ((ip.strutture||[]).length?'<div class="seg" style="margin-top:4px">Strutture in gioco</div><div class="pills">'+ip.strutture.map(aiStruttura).join("")+'</div>':'')+
      ((ip.trattamento||[]).length?'<div class="seg" style="margin-top:4px">Che cosa trattare</div>'+ip.trattamento.map((t,k)=>'<div class="cons-step"><i>'+(k+1)+'</i><div>'+aiTesto(t)+'</div></div>').join(""):'')+
      '</div>';
  });
  if((r.movimenti||[]).length) h+='<div class="cons-card"><h3>Movimenti da misurare</h3>'+r.movimenti.map(m=>'<div class="cons-step"><i>●</i><div><b>'+aiStruttura(m.nome)+'</b><small>'+aiTesto(m.cosaMisurare)+'</small></div></div>').join("")+'</div>';
  if(r.segreto) h+='<div class="secret"><span class="lbl">◆ Il consiglio dell\'esperto</span><p>'+aiTesto(r.segreto)+'</p></div>';
  h+='<p style="font-size:12px;color:var(--faint);margin:0">Ragionamento generato da Claude ('+AI.modello+') sulla base delle schede dell\'app. E\' un aiuto alla valutazione, non una diagnosi: le decisioni restano tue.</p></div>';
  return h;
}

/* ---- motore locale per regione e movimento (senza chiave) ---- */
const CONS_REGIONI = [
 [/collo|cervic|nuca|torcicollo|testa/, ["Collo","Collo (profondo)","Masticazione","Testa"], ["a-intervertebrale","a-occipito-atlantoidea","a-atlo-assiale","a-uncovertebrali","a-atm"], ["mv-collo-rot"]],
 [/spalla|omero|scapol|braccio alto|deltoid/, ["Spalla","Cingolo scapolare","Cuffia dei rotatori","Braccio"], ["a-gleno-omerale","a-acromion-claveare","a-scapolo-toracica","a-sterno-claveare"], ["mv-spalla-flex","mv-spalla-abd","mv-spalla-re","mv-spalla-ri"]],
 [/gomito|avambraccio|epicondil/, ["Gomito","Avambraccio","Avambraccio (profondo)","Braccio"], ["a-omero-ulnare","a-omero-radiale","a-radio-ulnare"], ["mv-gomito-flex","mv-supinazione"]],
 [/polso|mano|dita|pollice|formicol.*mano|tunnel/, ["Mano","Avambraccio","Avambraccio (profondo)"], ["a-radio-carpica","a-mediocarpica","a-trapezio-metacarpale","a-metacarpo-falangee"], ["mv-presa"]],
 [/dors|scapole|torac|costol|petto|sterno|respir/, ["Dorso","Dorso (profondo)","Torace","Respirazione"], ["a-costo-vertebrale","a-costo-trasversarie","a-costo-sternale","a-zigoapofisarie"], ["mv-rachide-rot","mv-rachide-est"]],
 [/lombar|schiena in basso|reni|bassa schiena|parte bassa|lombalg|fianco|sacro/, ["Dorso","Dorso (profondo)","Addome","Addome (profondo)","Anca (profondo)","Pelvi"], ["a-intervertebrale","a-zigoapofisarie","a-lombo-sacrale","a-sacro-iliaca"], ["mv-rachide-flex","mv-rachide-est","mv-rachide-rot","mv-anca-est"]],
 [/anca|inguine|gluteo|sedere|natica|trocanter|pube|adduttor/, ["Anca","Anca (profondo)","Anca (rotatori profondi)","Coscia mediale","Pelvi"], ["a-coxo-femorale","a-sacro-iliaca","a-sinfisi"], ["mv-anca-flex","mv-anca-est","mv-anca-abd","mv-anca-re"]],
 [/coscia|quadricip|ischiocrur|femor/, ["Coscia anteriore","Coscia posteriore","Coscia mediale","Anca"], ["a-coxo-femorale","a-femoro-tibiale"], ["mv-anca-flex","mv-ginocchio-flex"]],
 [/ginocchi|rotul|menisc|crociat/, ["Ginocchio","Coscia anteriore","Coscia posteriore"], ["a-femoro-tibiale","a-femoro-rotulea","a-tibio-fibulare"], ["mv-ginocchio-flex"]],
 [/polpacc|gamba|tibia|stinco|peron/, ["Gamba posteriore","Gamba anteriore","Gamba profonda","Gamba laterale"], ["a-tibio-fibulare","a-tibio-tarsica"], ["mv-caviglia-dorsi","mv-caviglia-plantar"]],
 [/cavigli|malleol|piede|tallone|pianta|alluce|dita del piede/, ["Piede","Gamba posteriore","Gamba laterale","Gamba profonda"], ["a-tibio-tarsica","a-sotto-astragalica","a-medio-tarsica","a-metatarso-falangee"], ["mv-caviglia-dorsi","mv-caviglia-plantar"]]
];
const CONS_MOVIMENTI_TESTO = [
 [/inclin|piego di lato|di lato|lateral/, "inclinazione laterale"],[/ruot|gir/, "rotazione"],[/piego in avanti|in avanti|chinar|flett|allacciar/, "flessione"],
 [/indietro|inarcar|estend|guardare in alto/, "estensione"],[/alz(o|are) il braccio|sopra la testa|in alto/, "elevazione"],[/sedut|alzarmi|sedia/, "passaggio seduto-in piedi"],
 [/scale|gradin/, "salire o scendere le scale"],[/cammin|passo/, "cammino"],[/notte|dorm|letto/, "riposo notturno"],[/matt/, "al mattino"],[/in piedi|stare in piedi/, "stazione eretta prolungata"]
];
function consRegione(testo){
  const t=consNorm(testo);
  const reg=CONS_REGIONI.find(r=>r[0].test(t));
  const mov=CONS_MOVIMENTI_TESTO.filter(m=>m[0].test(t)).map(m=>m[1]);
  return {reg:reg,mov:mov};
}
function consRegioneHTML(testo){
  const {reg,mov}=consRegione(testo); if(!reg) return "";
  const gruppi=reg[1];
  const musc=DB.muscoli.filter(m=>gruppi.indexOf(m.gruppo)>=0);
  /* muscoli coerenti con il movimento citato: quelli le cui azioni lo nominano */
  const chiavi=mov.map(x=>consNorm(x).split(" ")[0]);
  const coer=musc.filter(m=>chiavi.some(k=>k&&consNorm((m.azioni||[]).join(" ")).indexOf(k)>=0));
  const lista=(coer.length?coer:musc).slice(0,10);
  const art=reg[2].filter(a=>anyById(a)), mv=reg[3].filter(v=>anyById(v));
  return '<div class="cons-card"><span class="pct">Ragionamento per regione'+(mov.length?' · '+esc(mov.join(", ")):'')+'</span><h3>Che cosa guardare in questa zona</h3>'+
    '<div class="seg" style="margin-top:4px">Movimenti da misurare</div><div class="scroller"><table class="tbl"><thead><tr><th>Movimento</th><th>Normale</th><th>Che cosa lo limita</th></tr></thead><tbody>'+
      mv.map(v=>{ const x=anyById(v).item; return '<tr><td>'+pill(v)+'</td><td class="mono">'+esc(x.range)+'</td><td style="color:var(--muted)">'+esc(x.limite)+'</td></tr>'; }).join("")+'</tbody></table></div>'+
    '<div class="seg" style="margin-top:4px">Muscoli '+(coer.length?'che producono o frenano questo movimento':'della regione')+'</div>'+
      lista.map(m=>'<div class="cons-step"><i>●</i><div><b>'+pill(m.id)+'</b><small>'+esc(m.trigger)+'</small></div></div>').join("")+
    '<div class="seg" style="margin-top:4px">Articolazioni da valutare</div><div class="pills">'+art.map(a=>pill(a)).join("")+'</div>'+
    '<p style="font-size:12px;color:var(--faint);margin:6px 0 0">Costruito dalle schede della regione. Per un ragionamento sulla frase specifica, attiva il Consulto con Claude nel tuo studio.</p></div>';
}

/* ---- innesto nella vista Consulto ---- */
const _vistaConsulto_base = vistaConsulto;
vistaConsulto = function(arg){
  let h=_vistaConsulto_base(arg);
  const q=arg? decodeURIComponent(arg) : "";
  const haKey=aiHaKey();
  const pulsante = haKey
    ? '<button class="btn primary" data-act="cons-ai">✦ Ragiona con Claude</button><button class="btn" data-act="cons-go">Analizza senza Claude</button>'
    : '<button class="btn primary" data-act="cons-go">Analizza</button>';
  h=h.replace('<button class="btn primary" data-act="cons-go">Analizza</button>', pulsante);
  if(!haKey) h=h.replace('</div><div class="chips">','</div><p style="margin:0;font-size:12px;color:var(--faint)">Vuoi che ragioni sulla frase con l\'intelligenza artificiale? <button class="lk" data-go="studio/">Attiva Claude nel tuo studio</button></p><div class="chips">');
  if(q){
    const idx=h.indexOf('<div class="cons-res">');
    const regione=consRegioneHTML(q);
    const slot='<div id="ai-slot"></div>';
    if(idx>=0) h=h.slice(0,idx)+slot+h.slice(idx).replace('<div class="cons-res">','<div class="cons-res">'+regione);
    else h+=slot+'<div class="cons-res">'+regione+'</div>';
    if(haKey && S._aiAuto!==q){ S._aiAuto=q; setTimeout(()=>consAI(q),0); }
  }
  return h;
};
function consAI(q){
  const slot=document.getElementById("ai-slot"); if(!slot) return;
  slot.innerHTML='<div class="ai-box"><div class="ai-wait"><i></i> Claude sta ragionando sulla frase (10–30 secondi)…</div></div>';
  aiConsulto(q).then(r=>{ const s=document.getElementById("ai-slot"); if(s) s.innerHTML=aiHTML(r); S._aiUltimo=r; })
    .catch(e=>{ const s=document.getElementById("ai-slot"); if(s) s.innerHTML='<div class="ai-box"><h3>Non sono riuscito a interrogare Claude</h3><p style="margin:0;font-size:13.5px">'+esc(e.message==="nokey"?"Manca la chiave API: inseriscila nel tuo studio.":e.message)+'</p></div>'; });
}

/* ---- impostazione della chiave in "Il mio studio" ---- */
const _vistaStudio_conAI = vistaStudio;
vistaStudio = function(){
  const k=aiKey();
  return _vistaStudio_conAI()+
   '<div class="seg" style="margin:18px 0 10px">Consulto con Claude</div>'+
   '<div class="card" style="gap:8px"><p style="margin:0;font-size:13.5px">Con una chiave API di Anthropic il Consulto ragiona sulla frase del cliente invece di confrontarla con i quadri già scritti. La chiave resta su questo dispositivo e viene usata solo per parlare direttamente con Claude; ogni consulto costa pochi centesimi.</p>'+
   '<div class="ai-key"><input id="ai-key" type="password" placeholder="sk-ant-…" value="'+esc(k)+'" autocomplete="off"><button class="btn sm primary" data-act="ai-salva">Salva</button>'+(k?'<button class="btn sm" data-act="ai-togli">Rimuovi</button>':'')+'</div>'+
   '<p style="margin:0;font-size:12px;color:var(--faint)">La chiave si crea su console.anthropic.com → API keys. '+(k?'<b style="color:var(--ok)">Attivo.</b>':'Non ancora attivo.')+'</p></div>';
};
document.addEventListener("click",e=>{
  const a=e.target.closest("[data-act]"); if(!a) return;
  const t=a.getAttribute("data-act");
  if(t==="ai-salva"){ const v=($("#ai-key")||{}).value||""; save("apikey",v.trim()); render(); }
  else if(t==="ai-togli"){ save("apikey",""); render(); }
  else if(t==="cons-ai"){ const q=($("#cons-q")||{}).value||""; if(!q.trim()) return; S._aiAuto=null; vai("consulto/"+encodeURIComponent(q.trim())); }
});
</script>
