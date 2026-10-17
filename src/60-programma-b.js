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
               ["f3","Fase 3 · settimane 9–12 · carico e gesti reali","3–4 serie, carichi più alti, varianti più difficili e il gesto che il cliente deve riconquistare, provato a ogni seduta."]];
const SA_ATTREZZI={corpo:"Corpo libero ed elastici",manubri:"Manubri, kettlebell ed elastici",palestra:"Palestra completa"};
const SA_LIVELLI={principiante:"Principiante",intermedio:"Intermedio"};

function saVoce(s){ const p=s.split("|"); return p[0].indexOf("e-")===0?{e:p[0],sr:p[1]||""}:{t:p[0],sr:p[1]||"",m:p[2]||""}; }
/* adatta una voce al livello e all'attrezzatura; restituisce il testo della riga */
function saRiga(v,livello,attrezzatura){
  if(v.e){
    const e=DB.esercizi_schede.find(x=>x.id===v.e); if(!e) return null;
    const attr=(e.attrezzo||"").toLowerCase();
    const corpoOk=/corpo libero|elastico|gradino|box|panca|asciugamano|sbarra/.test(attr);
    const manubriOk=corpoOk||/manubri|kettlebell|cavo|elastico/.test(attr);
    let nota="";
    if(attrezzatura==="corpo" && !corpoOk) nota=" · senza attrezzi: "+(e.regressioni||"").split(/[.;]/)[0].trim().toLowerCase();
    else if(attrezzatura==="manubri" && !manubriOk) nota=" · con i manubri: "+(e.regressioni||"").split(/[.;]/)[0].trim().toLowerCase();
    else if(livello==="principiante") nota=" · versione facile: "+(e.regressioni||"").split(/[.;]/)[0].trim().toLowerCase();
    return e.nome+" · "+v.sr+nota;
  }
  return v.t+(v.sr?" · "+v.sr:"");
}
function saComponi(it){
  const voci={f1:[],f2:[],f3:[]}, visti={f1:{},f2:{},f3:{}};
  it.problemi.forEach(pid=>{ const P=DB.programma[pid]; if(!P) return;
    ["f1","f2","f3"].forEach(f=>(P[f]||[]).forEach(s=>{ const v=saVoce(s); const k=v.e||v.t.toLowerCase(); if(visti[f][k]) return; visti[f][k]=1; voci[f].push(v); })); });
  const righe={}; ["f1","f2","f3"].forEach(f=>{ righe[f]=voci[f].map(v=>saRiga(v,it.livello,it.attrezzatura)).filter(Boolean); });
  return {voci,righe};
}
function saGiorni(righe,giorni){
  if(righe.length<=5 || giorni<2) return [["Ogni seduta",righe]];
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
  B.push({t:"dl",voci:[["Per",it.cliente||"il cliente"],["Problemi di partenza",it.problemi.map(nomeOf).join("; ")],["Livello",SA_LIVELLI[it.livello]||it.livello],["Sedute a settimana",String(it.giorni)],["Attrezzatura",SA_ATTREZZI[it.attrezzatura]||it.attrezzatura],["Fatta il",it.creato]]});
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
  if(kind==="problema" && DB.programma[it.id]) h=box("Allenamento",'<button class="btn primary sm" data-act="fai-scheda" data-id="'+it.id+'">Fai scheda da questo problema</button>')+h;
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
  const opz=(name,vals,sel)=>'<div class="sa-opz">'+Object.keys(vals).map(k=>'<label><input type="radio" name="'+name+'" value="'+k+'"'+(String(sel)===k?' checked':'')+'> '+vals[k]+'</label>').join("")+'</div>';
  return crumbs([["Home","home/"],["Fai scheda",null]])+
   '<h1 style="font-size:clamp(23px,5vw,32px);margin-bottom:6px">Fai scheda</h1>'+
   '<p style="margin:0 0 14px;color:var(--muted);max-width:66ch">Scegli i problemi del cliente, il livello, le sedute a settimana e l\'attrezzatura: la scheda di dodici settimane in tre fasi si compone da sola, con gli esercizi presi dalle schede, le versioni facili per chi comincia, cosa evitare e quando fermarsi.</p>'+
   '<form id="sa-form" class="card" style="gap:14px">'+
   '<label>Nome del cliente (facoltativo)<br><input name="cliente" class="inp" style="width:100%;max-width:360px" value="'+esc(base?base.cliente||"":"")+'" placeholder="Es. Marco"></label>'+
   '<div><div class="seg" style="margin-bottom:6px">Problemi del cliente (uno o più)</div><div class="sa-griglia">'+
   Object.keys(zone).map(z=>'<div class="sa-zona eyebrow">'+esc(z)+'</div>'+zone[z].map(p=>'<label><input type="checkbox" name="p" value="'+p.id+'"'+(pre.includes(p.id)?' checked':'')+'> '+esc(p.voce)+'</label>').join("")).join("")+'</div></div>'+
   '<div><div class="seg" style="margin-bottom:6px">Livello</div>'+opz("livello",SA_LIVELLI,base?base.livello:"principiante")+'</div>'+
   '<div><div class="seg" style="margin-bottom:6px">Sedute a settimana</div>'+opz("giorni",{"2":"2","3":"3"},base?base.giorni:"2")+'</div>'+
   '<div><div class="seg" style="margin-bottom:6px">Attrezzatura</div>'+opz("attrezzatura",SA_ATTREZZI,base?base.attrezzatura:"manubri")+'</div>'+
   '<p id="sa-err" style="color:var(--muscle);margin:0"></p>'+
   '<div class="acts"><button class="btn primary" type="submit">Fai scheda</button></div></form>';
}
document.addEventListener("submit",function(e){
  const f=e.target.closest("#sa-form"); if(!f) return; e.preventDefault();
  const fd=new FormData(f); const problemi=fd.getAll("p");
  if(!problemi.length){ document.querySelector("#sa-err").textContent="Scegli almeno un problema."; return; }
  const cliente=(fd.get("cliente")||"").trim(); const d=new Date();
  const it={id:"sa-"+Date.now().toString(36),nome:"Scheda"+(cliente?" per "+cliente:"")+" · "+problemi.map(p=>nomeOf(p).replace(/[«»]/g,"")).join(" + ").slice(0,90),cliente:cliente,problemi:problemi,livello:fd.get("livello")||"principiante",giorni:parseInt(fd.get("giorni")||"2",10),attrezzatura:fd.get("attrezzatura")||"manubri",creato:d.toLocaleDateString("it-IT")};
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
  if(kind==="problema" && DB.programma[id]) h=h.replace('<button class="btn primary" data-act="ascolta"','<button class="btn sa-big" data-act="fai-scheda" data-id="'+id+'">⚡ Fai scheda</button><button class="btn primary" data-act="ascolta"');
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
