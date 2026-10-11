<script>
/* =========================================================
   VISTE: home, porte d'ingresso, atlante, il mio studio, quiz
   ========================================================= */
const PORTE = [
 {k:"problema",  n:"Dal problema",    d:"«Non riesco ad allacciarmi il reggiseno.» Parti dalla frase del cliente e arriva al muscolo.", c:"var(--muscle)", i:"porta-problema"},
 {k:"movimento", n:"Dal movimento",   d:"Un gesto, il piano su cui avviene, i gradi che servono e i muscoli che lo producono.", c:"var(--fascia)", i:"porta-movimento"},
 {k:"muscolo",   n:"Dal muscolo",     d:"Origine, inserzione, innervazione, vascolarizzazione, palpazione, dolore riferito.", c:"var(--muscle)", i:"porta-muscolo"},
 {k:"osso",      n:"Dall'osso",       d:"Dove si trova, come si palpa, quali muscoli ci nascono e quali ci arrivano.", c:"var(--bone)", i:"porta-osso"},
 {k:"nervo",     n:"Dal nervo",       d:"Radici, decorso, muscoli innervati, territorio sensitivo, segni di sofferenza.", c:"var(--nerve)", i:"porta-nervo"},
 {k:"articolazione",n:"Dall'articolazione",d:"Tipo, superfici, legamenti e gradi di movimento normali.", c:"var(--joint)", i:"porta-art"},
 {k:"catena",    n:"Dalle catene",    d:"I meridiani miofasciali: come il tallone parla con la nuca.", c:"var(--fascia)", i:"porta-catena"},
 {k:"postura",   n:"Dalla postura",   d:"Filo a piombo, sindromi crociate, schemi sagittali e cosa cambiare.", c:"var(--joint)", i:"porta-postura"},
 {k:"legamento", n:"Dai legamenti",   d:"Che cosa frena ogni legamento, come si testa, che cosa succede quando cede.", c:"var(--joint)", i:"porta-legamento"},
 {k:"fascia",    n:"Dalle fasce",     d:"Strato per strato: dove si trova, che cosa contiene, come si lavora.", c:"var(--fascia)", i:"porta-fascia"},
 {k:"arteria",   n:"Dai vasi",        d:"Arterie, polsi, zone di rispetto e segni vascolari da riconoscere.", c:"#B8452F", i:"porta-vaso"},
 {k:"tipo",      n:"Tipi di articolazione", d:"La classificazione completa: sinartrosi, anfiartrosi, diartrosi e i sei sottotipi.", c:"var(--muted)", i:"porta-tipo"},
 {k:"plesso",    n:"I plessi nervosi", d:"Cervicale, brachiale, lombare, sacrale e pudendo: come si formano e dove si comprimono.", c:"var(--nerve)", i:"porta-plesso"},
 {k:"tendine",   n:"Dai tendini",     d:"Dove si inseriscono, che carico sopportano, come si ammalano e come si trattano.", c:"#8A5A2B", i:"porta-tendine"},
 {k:"borsa",     n:"Dalle borse sierose", d:"I cuscinetti del corpo: dove sono, quando si infiammano, che cosa non fare.", c:"#6B7F3A", i:"porta-borsa"}
];

function glifo(nome){
  const g={
   "porta-problema":'<path d="M24 6v20M24 34v4" stroke="currentColor" stroke-width="5" stroke-linecap="round" fill="none"/>',
   "porta-movimento":'<path d="M8 38c10-4 14-16 12-26M20 12l8 4-2 8" stroke="currentColor" stroke-width="4" fill="none" stroke-linecap="round"/>',
   "porta-muscolo":'<path d="M10 8c12 2 18 12 18 32M10 8c-2 14 4 24 18 32" stroke="currentColor" stroke-width="4" fill="none" stroke-linecap="round"/>',
   "porta-osso":'<path d="M12 36 36 12M12 12l4 4M36 36l-4-4" stroke="currentColor" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="10" cy="38" r="5" fill="currentColor"/><circle cx="38" cy="10" r="5" fill="currentColor"/>',
   "porta-nervo":'<path d="M6 40c8 0 8-16 16-16s8 16 16 16M22 24V6" stroke="currentColor" stroke-width="4" fill="none" stroke-linecap="round"/>',
   "porta-art":'<circle cx="16" cy="16" r="9" stroke="currentColor" stroke-width="4" fill="none"/><path d="M22 22l14 14" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>',
   "porta-catena":'<path d="M10 44c6-10 2-20 6-28s14-6 18-12" stroke="currentColor" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="10" cy="44" r="4" fill="currentColor"/><circle cx="34" cy="4" r="4" fill="currentColor"/>',
   "porta-postura":'<path d="M24 2v44" stroke="currentColor" stroke-width="2" fill="none"/><path d="M18 8c6 6 4 14 8 20s2 12-2 16" stroke="currentColor" stroke-width="4" fill="none" stroke-linecap="round"/>',
   "porta-legamento":'<path d="M8 30c0-8 6-14 14-14M26 32c8 0 14-6 14-14" stroke="currentColor" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M14 40l20-20" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round"/>',
   "porta-fascia":'<path d="M6 14c8 4 14 4 20 0s14-4 18 2M6 26c8 4 14 4 20 0s14-4 18 2M6 38c8 4 14 4 20 0s14-4 18 2" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round"/>',
   "porta-vaso":'<path d="M24 4v14M24 18c-8 0-12 6-12 12s4 10 4 14M24 18c8 0 12 6 12 12s-4 10-4 14" stroke="currentColor" stroke-width="4" fill="none" stroke-linecap="round"/>',
   "porta-plesso":'<path d="M24 4v10M24 14c-9 0-14 5-14 12s5 18 5 18M24 14c9 0 14 5 14 12s-5 18-5 18M24 14v30" stroke="currentColor" stroke-width="3.2" fill="none" stroke-linecap="round"/>',
   "porta-tendine":'<path d="M18 4c0 10-8 12-8 20s8 10 8 20M30 4c0 10 8 12 8 20s-8 10-8 20" stroke="currentColor" stroke-width="3.5" fill="none" stroke-linecap="round"/><path d="M18 24h12" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>',
   "porta-borsa":'<ellipse cx="24" cy="28" rx="15" ry="8" stroke="currentColor" stroke-width="3.5" fill="none"/><path d="M14 16c4-6 16-6 20 0" stroke="currentColor" stroke-width="3.5" fill="none" stroke-linecap="round"/>',
   "porta-tipo":'<circle cx="14" cy="14" r="7" stroke="currentColor" stroke-width="3.5" fill="none"/><rect x="26" y="6" width="16" height="16" rx="3" stroke="currentColor" stroke-width="3.5" fill="none"/><path d="M8 32h32M8 40h20" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/>'
  };
  return '<svg class="gl" viewBox="0 0 48 48" aria-hidden="true">'+(g[nome]||"")+'</svg>';
}

const PRINCIPALI=["problema","movimento","muscolo","osso","nervo","plesso","articolazione","catena","postura"];
const RIFERIMENTI=["tendine","borsa","legamento","fascia","arteria","tipo"];
const porta=k=>PORTE.find(p=>p.k===k);
function conta(k){ return KINDS[k].db().length; }

function vistaHome(){
  const tot = Object.keys(KINDS).reduce((n,k)=>n+KINDS[k].db().length,0);
  const studiate = S.done.length;
  return '<section style="margin-bottom:22px">'+
    '<span class="eyebrow">Il corpo non si studia dall\'inizio: si entra da dove serve</span>'+
    '<h1 style="font-size:clamp(27px,6vw,40px);line-height:1.1;margin:8px 0 10px;max-width:16ch">Entra nel corpo da dove vuoi</h1>'+
    '<p style="margin:0;max-width:60ch;color:var(--muted);font-size:15.5px">Scegli da dove partire. Ogni scheda si legge o si ascolta, e da ogni scheda si passa a tutte le altre: un problema porta al movimento, il movimento al muscolo, il muscolo all\'osso, al nervo, alla catena.</p>'+
    '</section>'+

    '<button class="card" data-go="consulto/" style="gap:8px;margin-bottom:18px;border-color:var(--fascia);background:var(--fascia-soft)">'+
      '<span class="eyebrow" style="color:var(--fascia)">Consulto</span><h3>Descrivi il problema, ti dico cosa guardare</h3>'+
      '<p>Scrivi la frase del cliente: ricevi le ipotesi da verificare, i test da fare, i muscoli che possono riferire dolore lì e che cosa trattare, in ordine.</p></button>'+
    '<div class="grid g3" style="margin-bottom:18px">'+
      PRINCIPALI.map(porta).map((p,i)=>'<button class="card porta" data-go="lista/'+p.k+'" style="color:'+p.c+'">'+
        glifo(p.i)+'<span class="num">'+String(i+1).padStart(2,"0")+'</span>'+
        '<span class="tag" style="color:'+p.c+'">'+conta(p.k)+' schede</span>'+
        '<h3 style="color:var(--ink)">'+p.n+'</h3>'+
        '<p>'+esc(p.d)+'</p></button>').join("")+
    '</div>'+
    '<div class="seg" style="margin:0 0 10px">Riferimenti</div>'+
    '<div class="grid g3" style="margin-bottom:26px">'+
      RIFERIMENTI.map(porta).map(p=>'<button class="card" data-go="lista/'+p.k+'" style="gap:4px;color:'+p.c+'">'+
        '<span class="tag eyebrow" style="color:'+p.c+'">'+conta(p.k)+' schede</span>'+
        '<h3 style="color:var(--ink);font-size:16px">'+p.n+'</h3>'+
        '<p style="font-size:12.8px">'+esc(p.d)+'</p></button>').join("")+
    '</div>'+

    '<div class="grid g2" style="margin-bottom:22px">'+
      '<button class="card" data-go="collegamenti/" style="gap:10px">'+
        '<span class="eyebrow">Perché fa male lontano</span><h3>I collegamenti</h3>'+
        '<p>Dal massetere alla nuca, dal gran dorsale al gluteo opposto, dal piede alla lombare: i percorsi dei «segreti», tappa per tappa.</p>'+
      '</button>'+
      '<button class="card" data-go="tavole/spalla" style="gap:10px">'+
        '<span class="eyebrow">Tavole disegnate</span><h3>Tavole dei muscoli</h3>'+
        '<p>Nove tavole ossee con i muscoli posturali disegnati sopra: passa il mouse per vedere chi è chi, tocca per aprire la scheda.</p>'+
      '</button>'+
      '<button class="card" data-go="atlante/ant" style="gap:10px">'+
        '<span class="eyebrow">Mappa interattiva</span><h3>Atlante del corpo</h3>'+
        '<p>Tocca un muscolo sulla figura, davanti o dietro, e apri la sua scheda. Oppure accendi una catena miofasciale e guarda dove passa.</p>'+
      '</button>'+
      '<button class="card" data-go="studio/" style="gap:10px">'+
        '<span class="eyebrow">Area personale</span><h3>Il mio studio</h3>'+
        '<p>'+(S.saved.length? S.saved.length+' schede salvate' : 'Nessuna scheda salvata ancora')+
        ' · '+studiate+' su '+tot+' studiate. Qui costruisci la tua lista di ripasso e la playlist da ascoltare.</p>'+
        '<div class="bar" style="margin-top:6px"><i style="width:'+Math.round(100*studiate/tot)+'%"></i></div>'+
      '</button>'+
    '</div>'+

    '<div class="grid g2">'+
      '<button class="card" data-go="quiz/" style="gap:8px"><span class="eyebrow">Verifica</span><h3>Mettiti alla prova</h3>'+
       '<p>Domande generate ogni volta diverse su origini, inserzioni, innervazioni e catene. Dieci per volta.</p></button>'+
      '<div class="card" style="gap:8px"><span class="eyebrow">Come si usa</span><h3>Studia anche mentre guidi</h3>'+
       '<p>Su ogni scheda trovi <b>Ascolta</b> e <b>Aggiungi alla playlist</b>. Accoda dieci muscoli, premi play e ascoltali di seguito: in palestra, in auto, camminando.</p>'+
       '<p style="font-size:12.5px;color:var(--faint)">'+esc(PRO.piano)+'</p></div>'+
    '</div>';
}

/* ---------- liste per ogni porta ---------- */
function vistaLista(k){
  const items=KINDS[k].db().slice();
  const p=PORTE.find(x=>x.k===k)||{n:KINDS[k].label,d:""};
  let gruppi={};
  items.forEach(it=>{
    const g = it.gruppo || it.regione || it.zona || it.classe || it.piano || (it.sigla? "Meridiani miofasciali":"Schemi");
    (gruppi[g]=gruppi[g]||[]).push(it);
  });
  const body=Object.keys(gruppi).map(g=>
    '<section style="margin-bottom:18px"><div class="seg" style="margin-bottom:9px">'+esc(g)+'</div>'+
    '<div class="grid g3">'+gruppi[g].map(it=>{
      const nome=it.nome||it.voce;
      const sott = it.lat || it.sintesi || it.serve || it.funzione || it.descr || it.definizione || it.dove || it.tipo || "";
      const fatto=S.done.includes(it.id);
      return '<button class="card" data-go="'+k+'/'+it.id+'" style="gap:4px">'+
        (fatto?'<span class="eyebrow" style="color:var(--ok)">✓ studiata</span>':'')+
        '<h3 style="font-size:16px">'+esc(nome)+'</h3>'+
        '<p style="font-size:12.8px">'+esc(String(sott).slice(0,120))+(String(sott).length>120?"…":"")+'</p></button>';
    }).join("")+'</div></section>').join("");
  return crumbs([["Home","home/"],[p.n,null]])+
    '<h1 style="font-size:clamp(23px,5vw,32px);margin-bottom:6px">'+esc(p.n)+'</h1>'+
    '<p style="margin:0 0 20px;color:var(--muted);max-width:62ch">'+esc(p.d)+'</p>'+body;
}

function crumbs(list){
  return '<nav class="crumbs">'+list.map((c,i)=>
    (c[1]? '<button data-go="'+c[1]+'">'+esc(c[0])+'</button>' : '<span>'+esc(c[0])+'</span>')+
    (i<list.length-1?'<span class="sep">›</span>':'')).join("")+'</nav>';
}

/* ---------- atlante interattivo ---------- */
function vistaAtlante(arg){
  const vista = (arg==="post")?"post":"ant";
  const cat = S.arg && S.arg.indexOf("c-")===0 ? DB.catene.find(c=>c.id===S.arg) : null;
  const lista=DB.muscoli.filter(m=>m.vista===vista||m.vista==="both");
  return crumbs([["Home","home/"],["Atlante del corpo",null]])+
   '<h1 style="font-size:clamp(23px,5vw,32px);margin-bottom:6px">Atlante del corpo</h1>'+
   '<p style="margin:0 0 16px;color:var(--muted);max-width:62ch">Tocca un muscolo per aprirne la scheda. La figura è volutamente schematica: serve a collegare, non a sostituire una tavola anatomica.</p>'+
   '<div class="wg"><div class="wg-head">'+
     '<span class="t">Vista</span>'+
     '<button class="chip'+(vista==="ant"?" on":"")+'" data-go="atlante/ant">Anteriore</button>'+
     '<button class="chip'+(vista==="post"?" on":"")+'" data-go="atlante/post">Posteriore</button>'+
     '<span class="t" style="margin-left:auto">'+lista.length+' muscoli in questa vista</span>'+
   '</div><div class="wg-body"><div class="wg-split">'+
     '<div class="stage" id="atl">'+atlanteSVG(vista,null)+'</div>'+
     '<div><div class="seg" style="margin-bottom:8px">Muscoli visibili</div>'+
      '<div class="pills">'+lista.map(m=>'<button class="pill m" data-go="muscolo/'+m.id+'" data-hl="'+m.id+'">'+esc(m.nome)+'</button>').join("")+'</div>'+
      '<div class="seg" style="margin:16px 0 8px">Accendi una catena miofasciale</div>'+
      '<div class="pills">'+DB.catene.map(c=>'<button class="pill" style="color:'+c.colore+'" data-go="catena/'+c.id+'">'+esc(c.sigla||c.nome)+'</button>').join("")+'</div>'+
     '</div>'+
   '</div></div></div>';
}

/* ---------- il mio studio ---------- */
function vistaStudio(){
  const tot=Object.keys(KINDS).reduce((n,k)=>n+KINDS[k].db().length,0);
  const card=(id)=>{ const r=anyById(id); if(!r) return "";
    return '<button class="card" data-go="'+r.kind+'/'+id+'" style="gap:3px"><span class="eyebrow">'+KINDS[r.kind].label+'</span>'+
      '<h3 style="font-size:15.5px">'+esc(r.item.nome||r.item.voce)+'</h3></button>'; };
  const punteggi=Object.keys(S.scores).sort().slice(-6).reverse();
  return crumbs([["Home","home/"],["Il mio studio",null]])+
   '<h1 style="font-size:clamp(23px,5vw,32px);margin-bottom:6px">Il mio studio</h1>'+
   '<p style="margin:0 0 18px;color:var(--muted);max-width:62ch">Quello che salvi resta su questo dispositivo, anche chiudendo l\'app.</p>'+
   '<div class="grid g2" style="margin-bottom:22px">'+
     '<div class="card"><span class="eyebrow">Avanzamento</span>'+
       '<h3 style="font-size:26px" class="mono">'+S.done.length+' / '+tot+'</h3>'+
       '<div class="bar"><i style="width:'+Math.round(100*S.done.length/tot)+'%"></i></div>'+
       '<p style="font-size:12.5px">Schede che hai segnato come studiate.</p>'+
       (S.done.length?'<button class="btn sm" data-act="reset-done" style="align-self:flex-start">Azzera</button>':'')+
     '</div>'+
     '<div class="card"><span class="eyebrow">Playlist</span>'+
       '<h3 style="font-size:26px" class="mono">'+VOCE.coda.length+'</h3>'+
       '<p style="font-size:12.5px">Schede in coda di ascolto. Aprila con il pulsante in alto a destra.</p>'+
       '<button class="btn sm" data-act="apri-coda" style="align-self:flex-start">Apri la playlist</button>'+
     '</div>'+
   '</div>'+
   '<div class="seg" style="margin-bottom:10px">Da ripassare · '+S.saved.length+'</div>'+
   (S.saved.length? '<div class="grid g3" style="margin-bottom:22px">'+S.saved.map(card).join("")+'</div>'
     : '<p class="empty">Nessuna scheda salvata. Su ogni scheda premi <b>Salva</b> per ritrovarla qui.</p>')+
   '<div class="seg" style="margin:18px 0 10px">Ultimi quiz</div>'+
   (punteggi.length? '<div class="scroller"><table class="tbl"><thead><tr><th>Data</th><th>Risposte esatte</th></tr></thead><tbody>'+
      punteggi.map(d=>'<tr><td class="mono">'+esc(d)+'</td><td class="mono">'+S.scores[d]+' / 10</td></tr>').join("")+
      '</tbody></table></div>'
     : '<p class="empty">Nessun quiz ancora. <button class="btn sm" data-go="quiz/">Prova adesso</button></p>');
}

/* ---------- quiz generato dai dati ---------- */
let QZ=null;
function nuovoQuiz(){
  const dom=[], usati={};
  const rnd=a=>a[Math.floor(Math.random()*a.length)];
  const mischia=a=>a.map(v=>[Math.random(),v]).sort((x,y)=>x[0]-y[0]).map(p=>p[1]);
  const tipi=[
    ()=>{ const m=rnd(DB.muscoli); const alt=mischia(DB.muscoli.filter(x=>x.id!==m.id)).slice(0,3);
      return {d:"Dove si inserisce il "+m.nome+"?",ok:m.inserzione,alt:alt.map(x=>x.inserzione),rif:"muscolo/"+m.id}; },
    ()=>{ const m=rnd(DB.muscoli); const alt=mischia(DB.muscoli.filter(x=>x.id!==m.id)).slice(0,3);
      return {d:"Da dove origina il "+m.nome+"?",ok:m.origine,alt:alt.map(x=>x.origine),rif:"muscolo/"+m.id}; },
    ()=>{ const m=rnd(DB.muscoli.filter(x=>(x.nervi||[]).length)); const ok=nomeOf(m.nervi[0]);
      const alt=mischia(DB.nervi.filter(n=>n.nome!==ok)).slice(0,3).map(n=>n.nome);
      return {d:"Quale nervo innerva il "+m.nome+"?",ok:ok,alt:alt,rif:"muscolo/"+m.id}; },
    ()=>{ const c=rnd(DB.catene); const m=rnd(rel.muscoliDiCatena(c.id).length?rel.muscoliDiCatena(c.id):DB.muscoli);
      const alt=mischia(DB.catene.filter(x=>x.id!==c.id)).slice(0,3).map(x=>x.nome);
      return {d:"A quale catena miofasciale appartiene il "+m.nome+"?",ok:c.nome,alt:alt,rif:"catena/"+c.id}; },
    ()=>{ const a=rnd(DB.articolazioni); const alt=mischia(DB.articolazioni.filter(x=>x.id!==a.id)).slice(0,3).map(x=>x.tipo);
      return {d:"Di che tipo è l'"+a.nome.toLowerCase()+"?",ok:a.tipo,alt:alt,rif:"articolazione/"+a.id}; }
  ];
  while(dom.length<10){
    const q=rnd(tipi)();
    if(!q||!q.ok||usati[q.d]) continue;
    usati[q.d]=1;
    q.opz=mischia([q.ok].concat(q.alt.filter(x=>x&&x!==q.ok)));
    if(q.opz.length<3) continue;
    dom.push(q);
  }
  QZ={dom:dom,i:0,giuste:0,risposto:false};
}
function vistaQuiz(){
  if(!QZ) nuovoQuiz();
  if(QZ.i>=QZ.dom.length){
    const oggi=new Date().toISOString().slice(0,10);
    S.scores[oggi]=QZ.giuste; save("scores",S.scores);
    return crumbs([["Home","home/"],["Quiz",null]])+
      '<div class="sheet"><div class="sheet-body" style="align-items:center;text-align:center;gap:12px">'+
      '<span class="eyebrow">Risultato</span>'+
      '<h1 class="mono" style="font-size:52px">'+QZ.giuste+' / 10</h1>'+
      '<p style="max-width:44ch;color:var(--muted)">'+(QZ.giuste>=8?"Ottimo. Passa a una porta nuova: prova a entrare da un nervo.":QZ.giuste>=5?"Buon livello. Rivedi le schede sbagliate e riprova domani.":"Da riprendere con calma: apri l'atlante e ascolta cinque muscoli di seguito.")+'</p>'+
      '<div class="acts" style="justify-content:center"><button class="btn primary" data-act="quiz-new">Un altro giro</button>'+
      '<button class="btn" data-go="studio/">Il mio studio</button></div></div></div>';
  }
  const q=QZ.dom[QZ.i];
  return crumbs([["Home","home/"],["Quiz",null]])+
   '<div class="sheet"><div class="sheet-head"><span class="eyebrow">Domanda '+(QZ.i+1)+' di 10 · '+QZ.giuste+' esatte</span>'+
   '<h1 style="font-size:clamp(19px,4vw,26px)">'+esc(q.d)+'</h1></div>'+
   '<div class="sheet-body"><div id="opz" style="display:flex;flex-direction:column;gap:8px">'+
     q.opz.map((o,i)=>'<button class="btn" style="text-align:left;justify-content:flex-start;border-radius:11px;padding:11px 14px" data-opz="'+i+'">'+esc(o)+'</button>').join("")+
   '</div><div id="esito"></div></div></div>';
}
</script>
