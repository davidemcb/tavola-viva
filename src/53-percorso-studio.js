<script>
/* =========================================================
   PERCORSO DI STUDIO GUIDATO (#/percorso/) e FLASHCARD con ripetizione nel tempo (#/flash/).
   Questo file va DOPO 24-app-router.js: sostituisce render() e aggiunge le carte in home.
   ========================================================= */
const PERCORSO=[
 {id:"t1",titolo:"Come funziona il corpo che tocchi",sett:"Settimana 1",descr:"Prima di imparare i nomi: come lavora un muscolo, come guarisce un tessuto, che cosa fa davvero il massaggio e quando non si fa.",
  schede:["z-contrazione-muscolare","z-fibre-muscolari","z-guarigione-tessuti","z-infiammazione","z-dolore","z-effetti-massaggio","z-controindicazioni","z-fascia-tessuto","z-carico-progressivo","z-sistema-linfatico","q-homans-tvp","z-fuso-otg","z-inibizione-reciproca"]},
 {id:"t2",titolo:"Colonna e postura",sett:"Settimana 2",descr:"La colonna come asse: vertebre, dischi, faccette, erettori, multifido, le curve, e come si guarda una persona in piedi.",
  schede:["o-vertebre-c","o-vertebre-t","o-vertebre-l","o-sacro","a-intervertebrale","a-zigoapofisarie","a-lombo-sacrale","m-erettori","m-multifido","m-quadrato-lombi","m-iliocostale","m-lunghissimo","f-toracolombare","z-ernia-disco","mv-rachide-flex","mv-rachide-est","mv-rachide-incl","mv-rachide-rot","post-quattro-viste","post-iperlordosi","post-ipercifosi","post-scoliosi","q-schober","q-adams","q-lasegue","p-alzarsi","p-stare-in-piedi"]},
 {id:"t3",titolo:"Bacino e anca",sett:"Settimana 3",descr:"Il centro: osso dell'anca, sacro-iliaca, sinfisi, coxo-femorale; psoas, glutei, piriforme, adduttori; antiversione e retroversione.",
  schede:["o-ileo","a-sacro-iliaca","a-sinfisi","a-coxo-femorale","m-ileopsoas","m-iliaco","m-gluteo-massimo","m-gluteo-medio","m-gluteo-piccolo","m-piriforme","m-rotatori-anca","m-tfl","m-adduttori","m-pettineo","g-ileofemorale","mv-bacino","mv-anca-flex","mv-anca-est","mv-anca-abd","mv-anca-ri","z-nutazione","z-trendelenburg","post-crociata-inf","q-versione-bacino","q-thomas","q-fadir-faber","q-trendelenburg-test","q-fortin-sacroiliaci","p-calzino","p-anca-laterale-notte","p-sacroiliaca","p-pubalgia"]},
 {id:"t4",titolo:"Ginocchio",sett:"Settimana 4",descr:"Femoro-tibiale e femoro-rotulea, crociati, collaterali, menischi; quadricipite, ischiocrurali, popliteo; il valgo dinamico.",
  schede:["o-femore","o-rotula","o-tibia","o-perone","a-femoro-tibiale","a-femoro-rotulea","g-crociati","g-menischi","m-quadricipite","m-vasto-mediale","m-vasto-laterale","m-ischiocrurali","m-bicipite-femorale","m-semitendinoso","m-semimembranoso","m-popliteo","m-sartorio","m-gracile","mv-ginocchio-flex","mv-ginocchio-est","mv-ginocchio-rot","z-valgo-dinamico","z-close-pack","q-lachman","q-mcmurray","q-ballottamento","q-ober","p-ginocchio-scale","p-ginocchio-cede","p-dietro-ginocchio","p-ginocchio-gonfio"]},
 {id:"t5",titolo:"Caviglia e piede",sett:"Settimana 5",descr:"Tibio-tarsica e sotto-astragalica, le ossa del tarso, gli archi, tricipite surale, tibiali, peronei, fascia plantare e l'argano.",
  schede:["o-calcagno","o-astragalo","o-navicolare","o-cuboide","o-cuneiformi","o-metatarsi","a-tibio-tarsica","a-sotto-astragalica","a-medio-tarsica","a-metatarso-falangee","g-laterali-caviglia","g-spring","m-gastrocnemio","m-soleo","m-tibiale-ant","m-tibiale-post","m-peronei","m-flessore-lungo-alluce","m-abduttore-alluce","m-intrinseci-piede","f-plantare","d-achille","mv-caviglia-dorsi","mv-caviglia-plantar","mv-piede-inv","mv-piede-ev","z-argano","post-piede","q-ginocchio-muro","q-cassetto-caviglia","q-thompson","q-heel-raise","q-argano","p-tallone","p-caviglia-recidiva","p-piede-piatto","p-achille","p-morton"]},
 {id:"t6",titolo:"Spalla",sett:"Settimana 6",descr:"Gleno-omerale e scapola, cuffia dei rotatori, ritmo scapolo-omerale, conflitto, instabilità, spalla congelata.",
  schede:["o-scapola","o-clavicola","o-omero","a-gleno-omerale","a-acromion-claveare","a-scapolo-toracica","g-coraco-acromiale","b-subacromiale","m-deltoide","m-sovraspinato","m-sottospinato","m-sottoscapolare","m-rotondi","m-trapezio","m-dentato","m-romboidi","m-elevatore","m-pettorale-grande","m-pettorale-piccolo","m-gran-dorsale","d-sovraspinato","d-capo-lungo-bicipite","mv-spalla-flex","mv-spalla-abd","mv-spalla-re","mv-spalla-ri","mv-scapola","mv-scapola-pro-retro","z-ritmo-scapolo-omerale","post-scapola-alata","post-spalle-anteposte","q-neer-hawkins","q-jobe","q-apprensione","q-lift-off","q-wall-pushup","p-reggiseno","p-pettinarsi","p-braccio-sopra-testa","p-spalla-congelata","p-spalla-alta"]},
 {id:"t7",titolo:"Gomito, polso e mano",sett:"Settimana 7",descr:"Le tre articolazioni del gomito, prono-supinazione, le ossa del carpo, epicondilite, tunnel carpale, De Quervain, rizoartrosi.",
  schede:["o-radio","o-ulna","o-scafoide-mano","o-semilunare","o-trapezio-osso","o-metacarpi","a-omero-ulnare","a-radio-ulnare","a-radio-carpica","a-trapezio-metacarpale","a-metacarpo-falangee","m-bicipite","m-tricipite","m-brachiale","m-brachioradiale","m-pronatori","m-supinatore","m-flessori-polso","m-estensori-polso","m-estensori-radiali-carpo","m-flessori-dita","m-estensori-dita","m-abduttore-lungo-pollice","m-tenar","m-lombricali-interossei","g-retinacolo-flessori","mv-gomito-flex","mv-gomito-est","mv-supinazione","mv-pronazione","mv-polso-flex","mv-polso-est","mv-presa","mv-pollice","q-cozen-mill","q-finkelstein","q-phalen-tinel","q-grind","q-froment","p-gomito-tennista","p-mano-notte","p-pollice-base","p-dito-scatto","p-polso-appoggio"]},
 {id:"t8",titolo:"Collo, testa e mandibola",sett:"Settimana 8",descr:"Cervicali, atlante ed epistrofeo, flessori profondi, sternocleidomastoideo e scaleni, suboccipitali, ATM e masticatori, la cefalea dalla nuca.",
  schede:["o-vertebre-c","o-cranio","o-mandibola","o-ioide","a-occipito-atlantoidea","a-atlo-assiale","a-uncovertebrali","a-atm","m-scom","m-scaleni","m-suboccipitali","m-lungo-collo","m-lungo-capo","m-splenio","m-semispinale","m-elevatore","m-massetere","m-temporale","m-pterigoidei","m-sopraioidei","n-grande-occipitale","n-vago","x-cervicale","mv-collo-rot","mv-collo-flex","mv-collo-est","mv-collo-incl","mv-atm","z-trigemino-cervicale","post-rettilineizzazione","post-crociata-sup","post-testa-inclinata","q-spurling","q-cranio-cervicale","q-rotazione-flessa","q-adson","p-torcicollo","p-cefalea","p-retromarcia","p-click-mandibola","p-colpo-frusta","p-cervicale-vertigini"]},
 {id:"t9",titolo:"Nervi e plessi",sett:"Settimana 9",descr:"Dalle radici ai nervi periferici: plesso brachiale e lombo-sacrale, dermatomeri, i nervi che si comprimono e dove, come si riconosce un dolore neuropatico.",
  schede:["x-cervicale","x-brachiale","x-lombare","x-sacrale","z-dermatomero","z-dolore","n-mediano","n-ulnare","n-radiale","n-ascellare","n-sovrascapolare","n-toracico-lungo","n-femorale","n-otturatorio","n-sciatico","n-tibiale","n-peroneo","n-peroneo-profondo","n-plantari","n-clunei","n-cutaneo-laterale","n-pudendo","n-frenico","n-facciale","n-trigemino","z-stretto-toracico","q-phalen-tinel","q-lasegue","q-spurling","p-formicolio-braccio","p-sciatica","p-mano-notte"]},
 {id:"t10",titolo:"Catene miofasciali e collegamenti",sett:"Settimana 10",descr:"Le dodici linee di Myers, le fasce, i percorsi «perché fa male lontano»: dal piede alla lombare, dal massetere alla nuca.",
  schede:["c-sbl","c-sfl","c-laterale","c-spirale","c-braccio-ant-sup","c-braccio-ant-prof","c-braccio-post-sup","c-braccio-post-prof","c-funzionale-post","c-funzionale-ant","c-funzionale-omo","c-profonda","z-fascia-tessuto","f-toracolombare","f-lata","f-plantare","f-cervicale","z-catena-cinetica","post-catene-asc-disc","k-caviglia-lombare","k-massetere-nuca"]},
 {id:"t11",titolo:"Dai problemi al trattamento",sett:"Settimana 11",descr:"La porta più importante: la frase del cliente, le cause possibili, i test, che cosa trattare in che ordine, e quando mandare dal medico. Più il Consulto.",
  schede:["p-reggiseno","p-calzino","p-spalla-alta","p-alzarsi","p-accovacciarsi","p-mano-notte","p-tallone","p-ginocchio-scale","p-sciatica","p-torcicollo","p-cefalea","p-gomito-tennista","p-stare-in-piedi","p-stenosi","p-sotto-scapola","p-gambe-gonfie","p-crampi-polpaccio","p-strappo-polpaccio","p-coccige","p-schiena-gravidanza","p-diastasi","z-controindicazioni","q-isometrico","q-sit-to-stand"]},
 {id:"t12",titolo:"Posturologia e valutazione globale",sett:"Settimana 12",descr:"Le quattro viste, i recettori, le catene ascendente e discendente, le deformità, l'anziano, e i test posturali: mettere insieme tutto.",
  schede:["post-quattro-viste","post-recettori","post-catene-asc-disc","post-scoliosi","post-ipercifosi","post-iperlordosi","post-sway","post-ginocchio","post-piede","post-dismetria","post-bacino-ruotato","post-seduta","post-anziano","post-gravidanza","post-spondilolistesi","z-propriocezione","q-romberg-fukuda","q-versione-bacino","q-adams","q-sit-to-stand","q-trendelenburg-test","q-heel-raise"]}
];
PERCORSO.forEach(t=>{ t.schede=t.schede.filter(id=>anyById(id)); });

const _esc_p=s=>esc(String(s==null?"":s));
function tappaProgresso(t){ const n=t.schede.filter(id=>S.done.includes(id)).length; return {n:n,tot:t.schede.length,pct:t.schede.length?Math.round(100*n/t.schede.length):0}; }
function tappaCorrente(){ return PERCORSO.find(t=>tappaProgresso(t).pct<100)||PERCORSO[PERCORSO.length-1]; }

function vistaPercorso(arg){
  const t=arg?PERCORSO.find(x=>x.id===arg):null;
  if(t){
    const pr=tappaProgresso(t);
    const card=id=>{ const r=anyById(id); const fatto=S.done.includes(id);
      return '<button class="card" data-go="'+r.kind+'/'+id+'" style="gap:3px;'+(fatto?'opacity:.72':'')+'"><span class="eyebrow">'+KINDS[r.kind].label+(fatto?' · ✓ studiata':'')+'</span>'+
        '<h3 style="font-size:15px">'+_esc_p(r.item.nome||r.item.voce)+'</h3></button>'; };
    const i=PERCORSO.indexOf(t);
    return crumbs([["Home","home/"],["Percorso di studio","percorso/"],[t.titolo,null]])+
      '<span class="eyebrow">'+_esc_p(t.sett)+' · tappa '+(i+1)+' di '+PERCORSO.length+'</span>'+
      '<h1 style="font-size:clamp(23px,5vw,32px);margin:4px 0 6px">'+_esc_p(t.titolo)+'</h1>'+
      '<p style="margin:0 0 12px;color:var(--muted);max-width:66ch">'+_esc_p(t.descr)+'</p>'+
      '<div class="card" style="margin-bottom:16px;gap:6px"><div style="display:flex;justify-content:space-between;align-items:baseline"><span class="eyebrow">Avanzamento</span><b class="mono">'+pr.n+' / '+pr.tot+'</b></div>'+
      '<div class="bar"><i style="width:'+pr.pct+'%"></i></div>'+
      '<div class="acts" style="margin-top:6px"><button class="btn primary sm" data-act="tappa-quiz" data-id="'+t.id+'">Quiz di questa tappa</button>'+
      '<button class="btn sm" data-act="tappa-flash" data-id="'+t.id+'">Flashcard della tappa</button>'+
      '<button class="btn sm" data-act="tappa-coda" data-id="'+t.id+'">Ascolta tutta la tappa</button></div>'+
      '<p style="font-size:12.5px;color:var(--faint);margin:4px 0 0">Apri ogni scheda, leggila o ascoltala e premi «Segna studiata»: la tappa si completa da sola.</p></div>'+
      '<div class="grid g3">'+t.schede.map(card).join("")+'</div>'+
      '<div class="acts" style="margin-top:18px">'+(i>0?'<button class="btn sm" data-go="percorso/'+PERCORSO[i-1].id+'">← '+_esc_p(PERCORSO[i-1].titolo)+'</button>':'')+
      (i<PERCORSO.length-1?'<button class="btn sm" data-go="percorso/'+PERCORSO[i+1].id+'" style="margin-left:auto">'+_esc_p(PERCORSO[i+1].titolo)+' →</button>':'')+'</div>';
  }
  const cur=tappaCorrente();
  const tot=PERCORSO.reduce((n,t)=>n+t.schede.length,0), fatte=PERCORSO.reduce((n,t)=>n+tappaProgresso(t).n,0);
  return crumbs([["Home","home/"],["Percorso di studio",null]])+
    '<h1 style="font-size:clamp(23px,5vw,32px);margin-bottom:6px">Percorso di studio</h1>'+
    '<p style="margin:0 0 16px;color:var(--muted);max-width:66ch">Dodici tappe, una a settimana, dalla fisiologia alla valutazione globale. Ogni tappa è una selezione di schede da leggere o ascoltare, con un quiz e le flashcard alla fine. Puoi seguirlo in ordine o saltare dove ti serve.</p>'+
    '<div class="card" style="margin-bottom:18px;gap:6px"><span class="eyebrow">Dove sei</span><h3 style="font-size:17px">'+_esc_p(cur.sett)+' · '+_esc_p(cur.titolo)+'</h3>'+
    '<div class="bar"><i style="width:'+Math.round(100*fatte/Math.max(1,tot))+'%"></i></div><p style="font-size:12.5px">'+fatte+' schede su '+tot+' del percorso segnate come studiate.</p>'+
    '<button class="btn primary sm" data-go="percorso/'+cur.id+'" style="align-self:flex-start">Continua</button></div>'+
    '<div class="grid g2">'+PERCORSO.map((t,i)=>{ const pr=tappaProgresso(t);
      return '<button class="card" data-go="percorso/'+t.id+'" style="gap:5px"><span class="eyebrow">'+_esc_p(t.sett)+(pr.pct===100?' · ✓ completata':'')+'</span>'+
        '<h3 style="font-size:16px">'+(i+1)+'. '+_esc_p(t.titolo)+'</h3><p style="font-size:13px">'+_esc_p(t.descr)+'</p>'+
        '<div class="bar"><i style="width:'+pr.pct+'%"></i></div><span style="font-size:12px;color:var(--faint)">'+pr.n+' / '+pr.tot+' schede</span></button>'; }).join("")+'</div>';
}

/* ---- quiz di tappa: usa la stessa struttura QZ del quiz generale ---- */
function quizDiTappa(t){
  const rnd=a=>a[Math.floor(Math.random()*a.length)];
  const mischia=a=>a.map(v=>[Math.random(),v]).sort((x,y)=>x[0]-y[0]).map(p=>p[1]);
  const items=t.schede.map(id=>anyById(id)).filter(Boolean);
  const mus=items.filter(r=>r.kind==="muscolo").map(r=>r.item), art=items.filter(r=>r.kind==="articolazione").map(r=>r.item),
        ner=items.filter(r=>r.kind==="nervo").map(r=>r.item), tst=items.filter(r=>r.kind==="test").map(r=>r.item), con=items.filter(r=>r.kind==="concetto").map(r=>r.item);
  const tipi=[];
  if(mus.length>=4){
    tipi.push(()=>{ const m=rnd(mus); return {d:"Dove si inserisce il "+m.nome+"?",ok:m.inserzione,alt:mischia(mus.filter(x=>x.id!==m.id)).slice(0,3).map(x=>x.inserzione),rif:"muscolo/"+m.id}; });
    tipi.push(()=>{ const m=rnd(mus); return {d:"Da dove origina il "+m.nome+"?",ok:m.origine,alt:mischia(mus.filter(x=>x.id!==m.id)).slice(0,3).map(x=>x.origine),rif:"muscolo/"+m.id}; });
    tipi.push(()=>{ const m=rnd(mus.filter(x=>(x.nervi||[]).length)); if(!m) return null; const ok=nomeOf(m.nervi[0]);
      return {d:"Quale nervo innerva il "+m.nome+"?",ok:ok,alt:mischia(DB.nervi.filter(n=>n.nome!==ok)).slice(0,3).map(n=>n.nome),rif:"muscolo/"+m.id}; });
    tipi.push(()=>{ const m=rnd(mus.filter(x=>(x.azioni||[]).length)); if(!m) return null; const ok=m.azioni[0];
      return {d:"Qual è un'azione del "+m.nome+"?",ok:ok,alt:mischia(mus.filter(x=>x.id!==m.id&&(x.azioni||[]).length)).slice(0,3).map(x=>x.azioni[0]),rif:"muscolo/"+m.id}; });
  }
  if(art.length>=3) tipi.push(()=>{ const a=rnd(art); return {d:"Di che tipo è l'"+a.nome.toLowerCase()+"?",ok:a.tipo,alt:mischia(DB.articolazioni.filter(x=>x.id!==a.id&&x.tipo!==a.tipo)).slice(0,3).map(x=>x.tipo),rif:"articolazione/"+a.id}; });
  if(art.length>=2) tipi.push(()=>{ const a=rnd(art.filter(x=>DB.articolazioniExtra&&DB.articolazioniExtra[x.id])); if(!a) return null; const X=DB.articolazioniExtra[a.id];
      return {d:"Qual è il pattern capsulare dell'"+a.nome.toLowerCase()+"?",ok:X.pattern,alt:mischia(Object.keys(DB.articolazioniExtra).filter(k=>k!==a.id)).slice(0,3).map(k=>DB.articolazioniExtra[k].pattern),rif:"articolazione/"+a.id}; });
  if(ner.length>=2) tipi.push(()=>{ const n=rnd(ner); const ms=rel.muscoliDiNervo(n.id); if(!ms.length) return null; const ok=rnd(ms).nome;
      return {d:"Quale muscolo è innervato dal "+n.nome.toLowerCase()+"?",ok:ok,alt:mischia(DB.muscoli.filter(m=>!(m.nervi||[]).includes(n.id))).slice(0,3).map(m=>m.nome),rif:"nervo/"+n.id}; });
  if(tst.length>=3) tipi.push(()=>{ const q=rnd(tst); return {d:"Che cosa cerca il "+q.nome+"?",ok:q.cerca,alt:mischia(DB.test.filter(x=>x.id!==q.id)).slice(0,3).map(x=>x.cerca),rif:"test/"+q.id}; });
  if(tst.length>=3) tipi.push(()=>{ const q=rnd(tst); return {d:"Quando è positivo il "+q.nome+"?",ok:q.positivo,alt:mischia(DB.test.filter(x=>x.id!==q.id)).slice(0,3).map(x=>x.positivo),rif:"test/"+q.id}; });
  if(con.length>=3) tipi.push(()=>{ const c=rnd(con); return {d:"Che cos'è: «"+c.nome+"»?",ok:c.cosa,alt:mischia(DB.concetti.filter(x=>x.id!==c.id)).slice(0,3).map(x=>x.cosa),rif:"concetto/"+c.id}; });
  const dom=[], usati={}; let tentativi=0;
  while(dom.length<10 && tentativi<400 && tipi.length){ tentativi++;
    const q=rnd(tipi)(); if(!q||!q.ok||usati[q.d]) continue; usati[q.d]=1;
    q.opz=mischia([q.ok].concat(q.alt.filter(x=>x&&x!==q.ok))); if(q.opz.length<3) continue; dom.push(q); }
  if(!dom.length) return false;
  QZ={dom:dom,i:0,giuste:0,risposto:false,tappa:t.id};
  return true;
}

/* ---- flashcard con ripetizione nel tempo (Leitner: 1, 3, 7, 14, 30 giorni) ---- */
S.flash = load("flash",{});
const FLASH_INTERVALLI=[1,3,7,14,30,60];
function oggiStr(){ return new Date().toISOString().slice(0,10); }
function addGiorni(n){ const d=new Date(); d.setDate(d.getDate()+n); return d.toISOString().slice(0,10); }
const FLASH_MAZZI=[
 {k:"salvate",n:"Le mie salvate",ids:()=>S.saved.slice()},
 {k:"tappa",n:"Tappa corrente",ids:()=>tappaCorrente().schede.slice()},
 {k:"muscolo",n:"Muscoli",ids:()=>DB.muscoli.map(m=>m.id)},
 {k:"nervo",n:"Nervi",ids:()=>DB.nervi.map(m=>m.id)},
 {k:"articolazione",n:"Articolazioni",ids:()=>DB.articolazioni.map(m=>m.id)},
 {k:"test",n:"Test clinici",ids:()=>DB.test.map(m=>m.id)},
 {k:"concetto",n:"Concetti",ids:()=>DB.concetti.map(m=>m.id)},
 {k:"tutto",n:"Tutto",ids:()=>["muscolo","nervo","articolazione","test","concetto","osso","legamento"].reduce((a,k)=>a.concat(KINDS[k].db().map(x=>x.id)),[])}
];
let FL={mazzo:load("flash.mazzo","tappa"),ids:[],cur:null,mostra:false,fatte:0,tappaIds:null};
function flashPrepara(){
  const m=FLASH_MAZZI.find(x=>x.k===FL.mazzo)||FLASH_MAZZI[1];
  let ids=(FL.mazzo==="tappa"&&FL.tappaIds)?FL.tappaIds.slice():m.ids();
  ids=ids.filter(id=>anyById(id));
  const oggi=oggiStr();
  const due=ids.filter(id=>S.flash[id]&&S.flash[id].due<=oggi);
  const nuove=ids.filter(id=>!S.flash[id]);
  FL.ids=due.concat(nuove.slice(0,Math.max(0,12-due.length)));
  FL.cur=FL.ids.length?FL.ids[0]:null; FL.mostra=false;
  FL.stat={tot:ids.length,due:due.length,nuove:nuove.length,note:ids.filter(id=>S.flash[id]&&S.flash[id].box>=3).length};
}
function flashDomanda(kind,it){
  if(kind==="muscolo") return {q:"Origine, inserzione, innervazione e azione principale?",voci:[["Origine",it.origine],["Inserzione",it.inserzione],["Innervazione",(it.nervi||[]).map(nomeOf).join(", ")],["Azione principale",(it.azioni||[])[0]||""]]};
  if(kind==="nervo") return {q:"Radici, muscoli innervati e segno di lesione?",voci:[["Radici",it.radici],["Muscoli innervati",it.motorio],["Segno di lesione",it.segno]]};
  if(kind==="articolazione") return {q:"Tipo, legamenti principali, pattern capsulare?",voci:[["Tipo",it.tipo],["Legamenti",it.legamenti],["Pattern capsulare",(DB.articolazioniExtra&&DB.articolazioniExtra[it.id]||{}).pattern||""]]};
  if(kind==="test") return {q:"Che cosa cerca, come si esegue, quando è positivo?",voci:[["Cerca",it.cerca],["Esecuzione",it.esecuzione],["Positivo se",it.positivo]]};
  if(kind==="concetto") return {q:"Che cos'è e perché conta nella pratica?",voci:[["Che cos'è",it.cosa],["Nella pratica",it.pratica]]};
  if(kind==="osso") return {q:"Dove si trova e quali muscoli ci si attaccano?",voci:[["Dove",it.dove],["Muscoli che originano",DB.muscoli.filter(m=>(m.ossaO||[]).includes(it.id)).map(m=>m.nome).join(", ")],["Muscoli che si inseriscono",DB.muscoli.filter(m=>(m.ossaI||[]).includes(it.id)).map(m=>m.nome).join(", ")]]};
  if(kind==="legamento") return {q:"Dove sta e che cosa impedisce?",voci:[["Dove",it.dove||it.descr||""],["Funzione",it.funzione||it.limita||""]]};
  if(kind==="problema") return {q:"Quali sono le cause possibili e il primo test?",voci:[["Cause",(it.cause||[]).map(c=>c.t).join("; ")],["Primo test",((it.cause||[])[0]||{}).test||""]]};
  if(kind==="postura") return {q:"Che cos'è e come si valuta?",voci:[["Che cos'è",it.cosa||it.descr||""],["Valutazione",it.valutazione||""]]};
  return {q:"Che cosa ricordi di questa scheda?",voci:[["Scheda",it.segreto||""]]};
}
function vistaFlash(){
  if(!FL.ids.length && !FL.cur) flashPrepara();
  const sel='<div class="chips" style="margin:0 0 14px">'+FLASH_MAZZI.map(m=>'<button class="chip'+(m.k===FL.mazzo?' on':'')+'" data-act="flash-mazzo" data-id="'+m.k+'">'+m.n+'</button>').join("")+'</div>';
  const intro=crumbs([["Home","home/"],["Flashcard",null]])+'<h1 style="font-size:clamp(23px,5vw,32px);margin-bottom:6px">Flashcard</h1>'+
    '<p style="margin:0 0 12px;color:var(--muted);max-width:66ch">Leggi la domanda, prova a rispondere a mente, poi gira la carta e di\' se la sapevi. Le carte che non sai tornano domani; quelle che sai si allontanano: 3, 7, 14, 30 giorni. Dieci minuti al giorno bastano.</p>'+sel;
  const st=FL.stat||{tot:0,due:0,nuove:0,note:0};
  const stat='<p style="font-size:12.5px;color:var(--faint);margin:0 0 12px">'+st.tot+' carte nel mazzo · '+st.due+' da ripassare oggi · '+st.nuove+' mai viste · '+st.note+' che sai bene</p>';
  if(!FL.cur){
    return intro+stat+'<div class="card" style="gap:8px;align-items:flex-start"><span class="eyebrow">Finito per oggi</span><h3>Nessuna carta da ripassare in questo mazzo</h3>'+
      '<p>Hai fatto '+FL.fatte+' carte in questa sessione. Torna domani, oppure scegli un altro mazzo qui sopra.</p>'+
      '<button class="btn sm" data-act="flash-altre">Fammi vedere altre 12 carte nuove</button></div>';
  }
  const r=anyById(FL.cur); const d=flashDomanda(r.kind,r.item); const f=S.flash[FL.cur];
  const stato=f?('ripasso · livello '+(f.box+1)):'nuova';
  return intro+stat+'<div class="sheet"><div class="sheet-head"><span class="eyebrow">'+KINDS[r.kind].label+' · '+stato+' · '+(FL.ids.indexOf(FL.cur)+1)+' di '+FL.ids.length+'</span>'+
    '<h1 style="font-size:clamp(20px,4.5vw,28px)">'+_esc_p(r.item.nome||r.item.voce)+'</h1><p style="margin:6px 0 0;color:var(--muted)">'+_esc_p(d.q)+'</p></div>'+
    '<div class="sheet-body">'+(FL.mostra?
      '<dl class="dl">'+d.voci.filter(v=>v[1]).map(v=>'<dt>'+_esc_p(v[0])+'</dt><dd>'+autolink(esc(v[1]),FL.cur)+'</dd>').join("")+'</dl>'+
      '<div class="acts" style="margin-top:14px;flex-wrap:wrap"><button class="btn" data-act="flash-vota" data-id="0" style="border-color:var(--muscle)">Non la sapevo</button>'+
      '<button class="btn" data-act="flash-vota" data-id="1">Più o meno</button><button class="btn primary" data-act="flash-vota" data-id="2">La sapevo</button>'+
      '<button class="btn sm" data-go="'+r.kind+'/'+FL.cur+'" style="margin-left:auto">Apri la scheda</button></div>'
      :'<div class="acts"><button class="btn primary" data-act="flash-gira">Gira la carta</button><button class="btn sm" data-act="flash-ascolta">Ascolta la scheda</button></div>')+
    '</div></div>';
}
function flashVota(v){
  const id=FL.cur; if(!id) return;
  const f=S.flash[id]||{box:0,due:oggiStr()};
  if(v===0) f.box=0; else if(v===1) f.box=Math.max(0,f.box); else f.box=Math.min(FLASH_INTERVALLI.length-1,f.box+1);
  f.due=addGiorni(v===0?1:FLASH_INTERVALLI[f.box]); f.vista=oggiStr();
  S.flash[id]=f; save("flash",S.flash); FL.fatte++;
  const i=FL.ids.indexOf(id); FL.ids.splice(i,1);
  if(v===0) FL.ids.push(id);
  FL.cur=FL.ids.length?FL.ids[0]:null; FL.mostra=false;
  const st=FL.stat||{}; flashPrepara(); FL.cur=FL.ids.length?FL.ids[0]:null;
}

/* ---- navigazione: sostituisce render() e aggancia le nuove viste ---- */
window.removeEventListener("hashchange",render);
const _render_base=render;
render=function(){
  const h=(location.hash||"#/home/").replace(/^#\//,""); const p=h.split("/"); const v=p[0]||"home"; const a=decodeURIComponent(p[1]||"");
  if(v!=="percorso"&&v!=="flash") return _render_base();
  S.view=v; S.arg=a; S.id=null;
  const page=$("#page");
  page.innerHTML = v==="percorso"? vistaPercorso(a) : vistaFlash();
  window.scrollTo({top:0,behavior:"instant"in window?"instant":"auto"});
  evidenzia();
  document.title=(v==="percorso"?"Percorso di studio":"Flashcard")+" · AnatomiaPratica";
};
window.addEventListener("hashchange",()=>render());

document.addEventListener("click",function(e){
  const act=e.target.closest("[data-act]"); if(!act) return;
  const a=act.getAttribute("data-act"), id=act.getAttribute("data-id");
  if(a==="tappa-quiz"){ const t=PERCORSO.find(x=>x.id===id); if(t && quizDiTappa(t)) vai("quiz/"); }
  else if(a==="tappa-flash"){ const t=PERCORSO.find(x=>x.id===id); if(!t) return; FL.mazzo="tappa"; FL.tappaIds=t.schede.slice(); save("flash.mazzo",FL.mazzo); flashPrepara(); vai("flash/"); }
  else if(a==="tappa-coda"){ const t=PERCORSO.find(x=>x.id===id); if(!t) return; t.schede.forEach(sid=>{ const r=anyById(sid); if(r && !inCoda(sid)) accoda(r.kind,sid,nomeOf(sid),false); }); mostraPlayer(); disegnaPlayer(); aggiornaBadge(); }
  else if(a==="flash-mazzo"){ FL.mazzo=id; FL.tappaIds=null; save("flash.mazzo",id); flashPrepara(); render(); }
  else if(a==="flash-gira"){ FL.mostra=true; render(); }
  else if(a==="flash-vota"){ flashVota(parseInt(id,10)); render(); }
  else if(a==="flash-altre"){ const m=FLASH_MAZZI.find(x=>x.k===FL.mazzo)||FLASH_MAZZI[1]; const ids=((FL.mazzo==="tappa"&&FL.tappaIds)?FL.tappaIds:m.ids()).filter(x=>anyById(x)&&!S.flash[x]); FL.ids=ids.slice(0,12); FL.cur=FL.ids[0]||null; FL.mostra=false; render(); }
  else if(a==="flash-ascolta"){ const r=anyById(FL.cur); if(r){ accoda(r.kind,FL.cur,nomeOf(FL.cur),true); mostraPlayer(); disegnaPlayer(); aggiornaBadge(); } }
});

/* ---- home: due carte in più ---- */
const _vistaHome_conPercorso=vistaHome;
vistaHome=function(){
  const cur=tappaCorrente(); const pr=tappaProgresso(cur);
  const due=Object.keys(S.flash).filter(id=>S.flash[id].due<=oggiStr()&&anyById(id)).length;
  const h=_vistaHome_conPercorso();
  const extra='<div class="grid g2" style="margin-bottom:22px">'+
    '<button class="card" data-go="percorso/" style="gap:8px"><span class="eyebrow">Da dove comincio</span><h3>Percorso di studio</h3>'+
    '<p>Dodici tappe, una a settimana, dalla fisiologia alla valutazione globale. Sei a: <b>'+_esc_p(cur.titolo)+'</b> ('+pr.n+' di '+pr.tot+' schede).</p>'+
    '<div class="bar" style="margin-top:4px"><i style="width:'+pr.pct+'%"></i></div></button>'+
    '<button class="card" data-go="flash/" style="gap:8px"><span class="eyebrow">Ripasso a memoria</span><h3>Flashcard</h3>'+
    '<p>Domanda, risposta a mente, gira la carta. Le carte che non sai tornano domani, quelle che sai si allontanano. '+(due?'<b>'+due+' da ripassare oggi.</b>':'Dieci minuti al giorno.')+'</p></button>'+
    '</div>';
  const k=h.indexOf('<div class="grid g2" style="margin-bottom:22px">');
  return k<0? h+extra : h.slice(0,k)+extra+h.slice(k);
};
render(); /* la prima resa è avvenuta prima di questo file: si ridisegna con le carte nuove */
</script>
