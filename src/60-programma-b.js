<style>
.sa-griglia{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:4px 14px}
.sa-griglia label{display:flex;gap:8px;align-items:flex-start;font-size:13.5px;padding:4px 0;cursor:pointer}
.sa-zona{grid-column:1/-1;margin-top:8px}
.sa-opz{display:flex;gap:6px;flex-wrap:wrap}
.sa-opz label{border:1px solid var(--line);border-radius:999px;padding:6px 12px;cursor:pointer;font-size:13px}
.sa-opz input{display:none}
.sa-opz label:has(input:checked){background:var(--muscle);color:#fff;border-color:var(--muscle)}
.btn.sa-big{background:var(--muscle);border-color:var(--muscle);color:#fff;font-size:15px;padding:12px 20px;border-radius:10px;font-weight:700;letter-spacing:.02em;box-shadow:0 6px 18px -8px var(--muscle)}
.btn.sa-big:hover{filter:brightness(1.08)}
#sa-top{margin-left:8px;white-space:nowrap}
@media (max-width:640px){#sa-top{padding:8px 10px;font-size:12px}}
</style>
<script>
/* =========================================================
   FAI SCHEDA — dai problemi del cliente alla scheda di allenamento in tre fasi.
   Le schede fatte sono un tipo a sé (prefisso sa-), salvate sul dispositivo: si leggono, si ascoltano, si condividono.
   ========================================================= */
S.schede = load("schede",[]);
S.preProblema = null;
const SA_FASI=[["f1","Fase 1 · settimane 1–4 · mobilità e attivazione","2 serie, movimenti lenti e controllati, nessun dolore: si impara il gesto e si svegliano i muscoli che dormono."],
               ["f2","Fase 2 · settimane 5–8 · forza","3 serie; il carico sale quando le ultime ripetizioni restano pulite; dolore accettabile fino a 3 su 10, che passa entro il giorno dopo."],
               ["f3","Fase 3 · settimane 9–12 · carico e gesti reali","3–4 serie (una in più per l'avanzato), carichi più alti, varianti più difficili e il gesto che il cliente deve riconquistare, provato a ogni seduta."]];
const SA_ATTREZZI={corpo:"Corpo libero ed elastici",manubri:"Manubri, kettlebell ed elastici",palestra:"Palestra completa"};
const SA_LIVELLI={principiante:"Principiante",intermedio:"Intermedio",avanzato:"Avanzato"};
const SA_COND={ipertensione:"Pressione alta",cardiopatia:"Problemi di cuore",diabete:"Diabete",osteoporosi:"Osteoporosi",gravidanza:"Gravidanza",protesi:"Protesi d'anca o di ginocchio",ernia:"Ernia del disco nota",sovrappeso:"Sovrappeso importante",intervento:"Intervento chirurgico recente (meno di 6 mesi)",trauma:"Trauma o infortunio recente (meno di 3 mesi)"};
function saAdattamenti(it){
  const L=[]; const eta=parseInt(it.eta||0,10); const c=it.condizioni||[];
  if(eta&&eta>=65) L.push("Oltre i 65 anni: a ogni seduta 5 minuti di equilibrio (su una gamba, con appoggio) e un esercizio di potenza leggera (alzarsi dalla sedia veloce, step-up rapido): sono quelli che prevengono le cadute. Progressione del carico più lenta (+5 % ogni due settimane), recupero di 48–72 ore fra le sedute.");
  else if(eta&&eta>=50) L.push("Dopo i 50 anni: forza due volte a settimana è la priorità (contro la perdita di massa muscolare), con almeno un esercizio in piedi su una gamba per l'equilibrio; attenzione ai tendini, che si adattano più lentamente del muscolo.");
  if(eta&&eta<18) L.push("Sotto i 18 anni: tecnica prima del carico, niente massimali; se c'è un gibbo o una curva in crescita, prima la valutazione ortopedica.");
  if(it.sesso==="F"&&eta>=45&&eta<=60&&!c.includes("gravidanza")) L.push("Donna fra 45 e 60 anni: la forza con carico protegge l'osso e il metabolismo nella menopausa; se ci sono vampate o sonno disturbato, sedute più brevi e regolari.");
  if(it.sesso==="F"&&!c.includes("gravidanza")) L.push("Pavimento pelvico: se ci sono perdite con tosse o salti, niente salti e carichi in apnea finché non è stato valutato; respirare nello sforzo.");
  if(c.includes("ipertensione")||c.includes("cardiopatia")) L.push("Pressione alta o cuore: mai trattenere il respiro (Valsalva), niente isometrie lunghe sopra i 20 secondi, carichi moderati con più ripetizioni, pause complete; il cardio a ritmo di conversazione è la medicina migliore. Programma concordato con il medico se la pressione non è controllata.");
  if(c.includes("diabete")) L.push("Diabete: allenarsi dopo un pasto leggero, controllare i piedi (scarpe, calze, piccole ferite), zuccheri a portata di mano; forza e cardio insieme abbassano la glicemia per 24–48 ore.");
  if(c.includes("osteoporosi")) L.push("Osteoporosi: niente flessioni del tronco caricate (crunch, sit-up, piegarsi con il peso), niente torsioni veloci; sì carico assiale progressivo (squat al box, step-up, farmer walk) ed equilibrio: sono ciò che rinforza l'osso.");
  if(c.includes("gravidanza")) L.push("Gravidanza: programma concordato con il ginecologo; niente supino prolungato dopo la 20ª settimana, niente salti, niente apnea, carichi moderati, esercizi simmetrici; fermarsi con contrazioni, perdite, capogiri.");
  if(c.includes("protesi")) L.push("Protesi d'anca o di ginocchio: rispettare i limiti dati dal chirurgo (nell'anca spesso niente flessione oltre 90° con rotazione interna nei primi mesi); niente salti; squat al box e leg press con range controllato.");
  if(c.includes("ernia")) L.push("Ernia del disco nota: niente flessione lombare caricata e torsioni con peso; hip hinge con la schiena lunga, core anti-rotazione (Pallof), camminata; se il dolore scende nella gamba, fermarsi.");
  if(c.includes("sovrappeso")) L.push("Sovrappeso importante: bici, acqua e camminata al posto della corsa e dei salti; esercizi in piedi e seduti più che a terra; progressione lenta per tendini e articolazioni.");
  if(c.includes("intervento")) L.push("Intervento chirurgico recente: valgono le indicazioni del chirurgo e del fisioterapista, non questa scheda, per la zona operata; nessun carico su quella zona finché non è autorizzato per iscritto; il resto del corpo si allena normalmente (gli esercizi della scheda che coinvolgono la zona operata vanno saltati o sostituiti).");
  if(c.includes("trauma")) L.push("Trauma o infortunio recente: la zona è in riparazione (muscolo 2–6 settimane, legamento 6 settimane–6 mesi, tendine 3–12 mesi, osso 6–12 settimane): sulla zona solo isometrici e range indolore nelle prime settimane, poi carico progressivo; il dolore non deve aumentare il giorno dopo. Se c'è stato un trauma alla testa o al collo, prima la valutazione medica.");
  if(it.traumi) L.push("Storia riferita (traumi, interventi): "+it.traumi+". Tenerne conto nella scelta delle varianti e chiedere la documentazione medica se recente.");
  return L;
}
function saConsigli(it){
  const L=[]; const peso=parseFloat(it.peso||0);
  if(peso) L.push("Acqua: circa "+Math.round(peso*33/100)/10+" litri al giorno ("+Math.round(peso*33)+" ml: 30–35 ml per kg), di più nelle giornate di allenamento e con il caldo.");
  else L.push("Acqua: 30–35 ml per chilo di peso al giorno, di più nelle giornate di allenamento e con il caldo.");
  if(peso) L.push("Proteine: in chi si allena per la forza la letteratura indica 1,2–1,6 g per kg al giorno (per "+Math.round(peso)+" kg: "+Math.round(peso*1.2)+"–"+Math.round(peso*1.6)+" g), distribuite nei pasti. È un'indicazione generale: la dieta vera la fa il nutrizionista o il medico.");
  else L.push("Proteine: in chi si allena per la forza la letteratura indica 1,2–1,6 g per kg al giorno, distribuite nei pasti; la dieta vera la fa il nutrizionista o il medico.");
  L.push("Sonno: 7–9 ore; il muscolo e il tendine si riparano di notte, e una settimana di sonno corto vale come una seduta saltata.");
  L.push("Recupero: 48 ore fra due sedute sullo stesso gruppo; una settimana di scarico (metà volume) ogni 4–6; il battito a riposo del mattino come termometro.");
  return L;
}

function saVoce(s){ const p=s.split("|"); return p[0].indexOf("e-")===0?{e:p[0],sr:p[1]||""}:{t:p[0],sr:p[1]||"",m:p[2]||""}; }
/* adatta una voce al livello e all'attrezzatura; restituisce il testo della riga */
function saAttr(it){ const a=it.attrezzatura; const L=Array.isArray(a)?a:[a||"manubri"]; return L.length?L:["corpo"]; }
function saRiga(v,livello,attrezzatura){
  const A=Array.isArray(attrezzatura)?attrezzatura:[attrezzatura];
  const primo=s=>(s||"").split(/[.;]/)[0].trim().toLowerCase();
  if(v.e){
    const e=DB.esercizi_schede.find(x=>x.id===v.e); if(!e) return null;
    const attr=(e.attrezzo||"").toLowerCase();
    const corpoOk=/corpo libero|elastico|gradino|box|panca|asciugamano|sbarra/.test(attr);
    const manubriOk=/manubri|kettlebell|cavo|elastico/.test(attr);
    const palestraOk=true;
    const disponibile=(A.includes("palestra")&&palestraOk)||(A.includes("manubri")&&(manubriOk||corpoOk))||(A.includes("corpo")&&corpoOk);
    let nota="";
    if(!disponibile) nota=" · con quello che hai: "+primo(e.regressioni);
    else if(livello==="principiante") nota=" · versione facile: "+primo(e.regressioni);
    else if(livello==="avanzato") nota=" · versione avanzata: "+primo(e.progressioni)+" (+1 serie)";
    return e.nome+" · "+v.sr+nota;
  }
  return v.t+(v.sr?" · "+v.sr:"")+(livello==="avanzato"&&/×/.test(v.sr)?" (+1 serie)":"");
}
function saComponi(it){
  const voci={f1:[],f2:[],f3:[]}, visti={f1:{},f2:{},f3:{}};
  it.problemi.forEach(pid=>{ const P=DB.programma[pid]; if(!P) return;
    ["f1","f2","f3"].forEach(f=>(P[f]||[]).forEach(s=>{ const v=saVoce(s); const k=v.e||v.t.toLowerCase(); if(visti[f][k]) return; visti[f][k]=1; voci[f].push(v); })); });
  const zone=[]; it.problemi.forEach(pid=>{ const pr=DB.problemi.find(x=>x.id===pid); const z=pr?pr.zona:(pid.indexOf("post-")===0?"Postura":null); if(z&&zone.indexOf(z)<0) zone.push(z); });
  (it.discipline||[]).forEach(dk=>{ const D=DB.discipline&&DB.discipline[dk]; if(!D) return;
    ["f1","f2","f3"].forEach(f=>{ const lista=(D.gen[f]||[]).concat(...zone.map(z=>(D.zone[z]&&D.zone[z][f])||[]));
      lista.forEach(s=>{ const v=saVoce(s); const k=v.t.toLowerCase(); if(visti[f][k]) return; visti[f][k]=1; voci[f].push(v); }); }); });
  const righe={}; ["f1","f2","f3"].forEach(f=>{ righe[f]=voci[f].map(v=>saRiga(v,it.livello,saAttr(it))).filter(Boolean); });
  return {voci,righe};
}
function saGiorni(righe,giorni){
  if(giorni<2) return [["L'unica seduta della settimana (scegli 5–6 voci e alternale di settimana in settimana)",righe]];
  if(righe.length<=5) return [["Ogni seduta",righe]];
  const A=righe.filter((r,i)=>i%2===0), B=righe.filter((r,i)=>i%2===1);
  return giorni>=3 ? [["Giorno A (1ª e 3ª seduta)",A],["Giorno B (2ª seduta)",B]] : [["Giorno A",A],["Giorno B",B]];
}

/* ---- registrazione del tipo ---- */
KINDS.allenamento={label:"Scheda di allenamento",cls:"m",db:()=>S.schede};
const _anyById_conSchede = anyById;
anyById = function(id){ if(id && id.indexOf("sa-")===0){ const it=S.schede.find(x=>x.id===id); return it?{kind:"allenamento",item:it}:null; } return _anyById_conSchede(id); };
const _blocchi_conSchede = blocchi;
blocchi = function(kind,it){
  if(kind!=="allenamento") return _blocchi_conSchede(kind,it);
  const c=saComponi(it); const B=[];
  const cond=(it.condizioni||[]).map(k=>SA_COND[k]||k).join(", ");
  B.push({t:"dl",voci:[["Per",(it.cliente||"il cliente")+(it.eta?", "+it.eta+" anni":"")+(it.sesso?(it.sesso==="F"?", donna":it.sesso==="M"?", uomo":""):"")+(it.peso?", "+it.peso+" kg":"")],["Condizioni da considerare",cond||"nessuna segnalata"],["Traumi e interventi",it.traumi||""],["Note",it.note||""],["Problemi di partenza",it.problemi.map(nomeOf).join("; ")],["Livello",SA_LIVELLI[it.livello]||it.livello],["Sedute a settimana",String(it.giorni)],["Attrezzatura",saAttr(it).map(a=>SA_ATTREZZI[a]||a).join(", ")],["Discipline",(it.discipline&&it.discipline.length?it.discipline.map(d=>DB.discipline[d]?DB.discipline[d].n:d).join(", "):"Allenamento con i pesi e a corpo libero")],["Fatta il",it.creato]]});
  const ad=saAdattamenti(it); if(ad.length) B.push({t:"lista",h:"Adattamenti per questa persona",items:ad});
  B.push({t:"p",h:"Come si usa",txt:"Dodici settimane in tre fasi. Ogni seduta comincia con dieci minuti di riscaldamento (cinque di cardio leggero e gli esercizi di mobilità della fase 1) e finisce con due minuti di respiro lento. Il carico sale solo quando la tecnica resta pulita; se un esercizio fa male oltre 3 su 10 o il dolore resta il giorno dopo, si torna alla versione più facile. Ogni esercizio sottolineato si apre con esecuzione, errori e varianti."});
  SA_FASI.forEach(([f,titolo,descr])=>{
    const r=c.righe[f]; if(!r.length) return;
    if(f==="f1"){ B.push({t:"lista",h:titolo,items:[descr].concat(r)}); return; }
    const gg=saGiorni(r,it.giorni);
    B.push({t:"p",h:titolo,txt:descr+(gg.length>1?" Riscaldamento con gli esercizi della fase 1, poi la seduta del giorno.":"")});
    gg.forEach(([g,items])=>B.push({t:"lista",h:g,items:items}));
  });
  const evita=[],confine=[]; it.problemi.forEach(pid=>{ const P=DB.palestra[pid]; if(!P) return; if(P.evita) evita.push(nomeOf(pid).replace(/[«»]/g,"")+": "+P.evita); if(P.confine) confine.push(P.confine); });
  if(evita.length) B.push({t:"lista",h:"Da evitare finché c'è il problema",items:evita});
  if(confine.length) B.push({t:"lista",h:"Quando fermarsi e mandare dal medico",items:confine,rosso:true});
  B.push({t:"lista",h:"Consigli generali (non sostituiscono medico e nutrizionista)",items:saConsigli(it)});
  B.push({t:"segreto",txt:"La scheda migliore non è la più completa: è quella che il cliente fa davvero. Tre esercizi fatti bene tre volte a settimana battono dieci esercizi fatti una volta. E il gesto che il cliente voleva riconquistare va provato a ogni seduta: è lui il vero test, non il carico sul bilanciere."});
  return B;
};
const _collegamenti_conSchede = collegamenti;
collegamenti = function(kind,it){
  const box=(titolo,html)=>'<section><div class="seg" style="margin-bottom:8px">'+titolo+'</div>'+html+'</section>';
  if(kind==="allenamento"){
    const c=saComponi(it); const E=[],M=[];
    ["f1","f2","f3"].forEach(f=>c.voci[f].forEach(v=>{ if(v.e&&E.indexOf(v.e)<0) E.push(v.e); if(v.m&&M.indexOf(v.m)<0&&anyById(v.m)) M.push(v.m); }));
    return box("Problemi di partenza",pills(it.problemi))+box("Esercizi della scheda",pills(E))+box("Muscoli al centro del lavoro",pills(M))+
      box("Modifica",'<div class="acts"><button class="btn sm" data-act="sa-rifai" data-id="'+it.id+'">Rifai con altre scelte</button><button class="btn sm" data-act="sa-elimina" data-id="'+it.id+'" style="color:var(--muscle)">Elimina questa scheda</button></div>');
  }
  let h=_collegamenti_conSchede(kind,it);
  if((kind==="problema"||kind==="postura") && DB.programma[it.id]) h=box("Allenamento",'<button class="btn primary sm" data-act="fai-scheda" data-id="'+it.id+'">Fai scheda da '+(kind==="postura"?"questa postura":"questo problema")+'</button>')+h;
  return h;
};
/* il testo condiviso di una scheda è la scheda intera */
const _testoCondivisione_base = testoCondivisione;
testoCondivisione = function(kind,it,id){
  if(kind!=="allenamento") return _testoCondivisione_base(kind,it,id);
  const r=renderBlocchi(blocchi(kind,it),id).speak;
  return (it.nome||"").toUpperCase()+"\n\n"+r.join("\n")+"\n\nAnatomiaPratica · Kinesiologia Studio";
};

/* ---- il modulo «Fai scheda» ---- */
function vistaFaiScheda(base){
  const pre=S.preProblema? [S.preProblema] : (base? base.problemi : []);
  const zone={}; DB.problemi.forEach(p=>{ if(!DB.programma[p.id]) return; (zone[p.zona]=zone[p.zona]||[]).push(p); });
  const posture=(DB.posture||[]).filter(x=>DB.programma[x.id]).map(x=>({id:x.id,voce:x.nome}));
  if(posture.length) zone["Postura (alterazioni posturali)"]=posture;
  const opz=(name,vals,sel)=>'<div class="sa-opz">'+Object.keys(vals).map(k=>'<label><input type="radio" name="'+name+'" value="'+k+'"'+(String(sel)===k?' checked':'')+'> '+vals[k]+'</label>').join("")+'</div>';
  return crumbs([["Home","home/"],["Fai scheda",null]])+
   '<h1 style="font-size:clamp(23px,5vw,32px);margin-bottom:6px">Fai scheda</h1>'+
   '<p style="margin:0 0 14px;color:var(--muted);max-width:66ch">Scegli i problemi del cliente, il livello, le sedute a settimana e l\'attrezzatura: la scheda di dodici settimane in tre fasi si compone da sola, con gli esercizi presi dalle schede, le versioni facili per chi comincia, cosa evitare e quando fermarsi.</p>'+
   '<form id="sa-form" class="card" style="gap:14px">'+
   '<div><div class="seg" style="margin-bottom:6px">Il cliente</div><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:8px">'+
   '<input name="cliente" class="inp" value="'+esc(base?base.cliente||"":"")+'" placeholder="Nome (facoltativo)">'+
   '<input name="eta" type="number" min="10" max="100" class="inp" value="'+esc(base?base.eta||"":"")+'" placeholder="Età">'+
   '<select name="sesso" class="inp"><option value="">Sesso</option><option value="F"'+(base&&base.sesso==="F"?' selected':'')+'>Donna</option><option value="M"'+(base&&base.sesso==="M"?' selected':'')+'>Uomo</option><option value="X"'+(base&&base.sesso==="X"?' selected':'')+'>Altro</option></select>'+
   '<input name="peso" type="number" min="30" max="250" step="0.5" class="inp" value="'+esc(base?base.peso||"":"")+'" placeholder="Peso (kg, facoltativo)"></div>'+
   '<div class="sa-opz" style="margin-top:8px">'+Object.keys(SA_COND).map(k=>'<label><input type="checkbox" name="condizioni" value="'+k+'"'+((base&&base.condizioni||[]).includes(k)?' checked':'')+'> '+SA_COND[k]+'</label>').join("")+'</div>'+
   '<input name="traumi" class="inp" style="width:100%;margin-top:8px" value="'+esc(base?base.traumi||"":"")+'" placeholder="Traumi e interventi chirurgici: che cosa e quando (es. menisco destro operato nel 2024, distorsione caviglia sinistra 2025)">'+
   '<input name="note" class="inp" style="width:100%;margin-top:8px" value="'+esc(base?base.note||"":"")+'" placeholder="Note (es. lavora in piedi, gioca a calcetto, dorme male)">'+
   '<p style="font-size:12px;color:var(--faint);margin:6px 0 0">I dati restano solo su questo dispositivo. Età, sesso, peso, condizioni e traumi cambiano gli adattamenti e i consigli della scheda.</p></div>'+
   '<div><div class="seg" style="margin-bottom:6px">Problemi del cliente (uno o più)</div><div class="sa-griglia">'+
   Object.keys(zone).map(z=>'<div class="sa-zona eyebrow">'+esc(z)+'</div>'+zone[z].map(p=>'<label><input type="checkbox" name="p" value="'+p.id+'"'+(pre.includes(p.id)?' checked':'')+'> '+esc(p.voce)+'</label>').join("")).join("")+'</div></div>'+
   '<div><div class="seg" style="margin-bottom:6px">Livello</div>'+opz("livello",SA_LIVELLI,base?base.livello:"principiante")+'</div>'+
   '<div><div class="seg" style="margin-bottom:6px">Sedute a settimana</div>'+opz("giorni",{"1":"1","2":"2","3":"3"},base?base.giorni:"2")+'</div>'+
   '<div><div class="seg" style="margin-bottom:6px">Attrezzatura (anche più di una)</div><div class="sa-opz">'+Object.keys(SA_ATTREZZI).map(k=>'<label><input type="checkbox" name="attrezzatura" value="'+k+'"'+((base?saAttr(base):["manubri"]).includes(k)?' checked':'')+'> '+SA_ATTREZZI[k]+'</label>').join("")+'</div></div>'+
   '<div><div class="seg" style="margin-bottom:6px">Discipline da aggiungere (facoltative)</div><div class="sa-opz">'+Object.keys(DB.discipline||{}).map(k=>'<label title="'+esc(DB.discipline[k].d)+'"><input type="checkbox" name="discipline" value="'+k+'"'+((base&&base.discipline||[]).includes(k)?' checked':'')+'> '+DB.discipline[k].n+'</label>').join("")+'</div><p style="font-size:12.5px;color:var(--faint);margin:6px 0 0">Gli esercizi con i pesi e a corpo libero ci sono sempre; qui aggiungi pilates, yoga, cammino, acqua o respiro, con le voci adatte alle zone dei problemi scelti.</p></div>'+
   '<p id="sa-err" style="color:var(--muscle);margin:0"></p>'+
   '<div class="acts"><button class="btn primary" type="submit">Fai scheda</button></div></form>';
}
document.addEventListener("submit",function(e){
  const f=e.target.closest("#sa-form"); if(!f) return; e.preventDefault();
  const fd=new FormData(f); const problemi=fd.getAll("p");
  if(!problemi.length){ document.querySelector("#sa-err").textContent="Scegli almeno un problema."; return; }
  const cliente=(fd.get("cliente")||"").trim(); const d=new Date();
  const it={id:"sa-"+Date.now().toString(36),nome:"Scheda"+(cliente?" per "+cliente:"")+" · "+problemi.map(p=>nomeOf(p).replace(/[«»]/g,"")).join(" + ").slice(0,90),cliente:cliente,problemi:problemi,livello:fd.get("livello")||"principiante",giorni:parseInt(fd.get("giorni")||"2",10),attrezzatura:(fd.getAll("attrezzatura").length?fd.getAll("attrezzatura"):["corpo"]),discipline:fd.getAll("discipline"),eta:(fd.get("eta")||"").trim(),sesso:fd.get("sesso")||"",peso:(fd.get("peso")||"").trim(),condizioni:fd.getAll("condizioni"),traumi:(fd.get("traumi")||"").trim().slice(0,300),note:(fd.get("note")||"").trim().slice(0,300),creato:d.toLocaleDateString("it-IT")};
  S.schede.unshift(it); save("schede",S.schede); S.preProblema=null; vai("allenamento/"+it.id);
});
document.addEventListener("click",function(e){
  const a=e.target.closest('[data-act="fai-scheda"],[data-act="sa-rifai"],[data-act="sa-elimina"]'); if(!a) return;
  const act=a.getAttribute("data-act"), id=a.getAttribute("data-id");
  if(act==="fai-scheda"){ S.preProblema=id; vai("allenamento/nuova"); }
  else if(act==="sa-rifai"){ S.preProblema=null; S.rifai=id; vai("allenamento/nuova"); }
  else if(act==="sa-elimina"){ if(!confirm("Eliminare questa scheda?")) return; S.schede=S.schede.filter(x=>x.id!==id); save("schede",S.schede); vai("studio/"); }
});
const _vistaScheda_conFai = vistaScheda;
vistaScheda = function(kind,id){
  if(kind==="allenamento" && (!id || id==="nuova")){ const base=S.rifai? S.schede.find(x=>x.id===S.rifai) : null; S.rifai=null; return vistaFaiScheda(base); }
  let h=_vistaScheda_conFai(kind,id);
  if((kind==="problema"||kind==="postura") && DB.programma[id]) h=h.replace('<button class="btn primary" data-act="ascolta"','<button class="btn sa-big" data-act="fai-scheda" data-id="'+id+'">⚡ Fai scheda</button><button class="btn primary" data-act="ascolta"');
  return h;
};
/* pulsante sempre visibile nella barra in alto */
(function(){ const bar=document.querySelector(".topbar-in"); const s=bar&&bar.querySelector(".search"); if(!bar||document.getElementById("sa-top")) return;
  const b=document.createElement("button"); b.id="sa-top"; b.className="btn sa-big"; b.setAttribute("data-go","allenamento/nuova"); b.textContent="⚡ Fai scheda"; bar.insertBefore(b,s); })();
/* home e studio */
const _vistaHome_conFai = vistaHome;
vistaHome = function(){
  const h=_vistaHome_conFai();
  const card='<button class="card" data-go="allenamento/nuova" style="gap:8px;margin-bottom:18px;border-color:var(--muscle)"><span class="eyebrow" style="color:var(--muscle)">Fai scheda</span><h3>Dai problemi del cliente alla scheda di allenamento</h3>'+
    '<p>Scegli i problemi, il livello e l\'attrezzatura: dodici settimane in tre fasi, con gli esercizi giusti, le versioni facili, cosa evitare e quando fermarsi.'+(S.schede.length?' <b>'+S.schede.length+' sched'+(S.schede.length===1?'a fatta':'e fatte')+'.</b>':'')+'</p></button>';
  const k=h.indexOf('<button class="card" data-go="consulto/"');
  let out=k<0? card+h : h.slice(0,k)+card+h.slice(k);
  const big='<div class="acts" style="margin:14px 0 4px"><button class="btn sa-big" data-go="allenamento/nuova" style="font-size:17px;padding:14px 26px">⚡ Fai scheda</button><span style="font-size:13px;color:var(--muted)">dai problemi del cliente alla scheda di allenamento</span></div>';
  const j=out.indexOf('</section>'); return j<0? big+out : out.slice(0,j)+big+out.slice(j);
};
const _vistaStudio_conFai = vistaStudio;
vistaStudio = function(){
  return _vistaStudio_conFai()+'<div class="seg" style="margin:18px 0 10px">Schede di allenamento · '+S.schede.length+'</div>'+
    (S.schede.length?'<div class="grid g3" style="margin-bottom:12px">'+S.schede.map(s=>'<button class="card" data-go="allenamento/'+s.id+'" style="gap:3px"><span class="eyebrow">'+esc(s.creato)+' · '+esc(SA_LIVELLI[s.livello]||"")+'</span><h3 style="font-size:15px">'+esc(s.nome)+'</h3></button>').join("")+'</div>':'<p class="empty">Nessuna scheda ancora. </p>')+
    '<button class="btn sm" data-go="allenamento/nuova">Fai scheda</button>';
};
</script>
