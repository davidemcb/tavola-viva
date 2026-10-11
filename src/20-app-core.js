<script>
/* =========================================================
   NUCLEO: stato, archivio locale, indice, figura anatomica
   ========================================================= */

/* Quando arriverà la versione a pagamento basterà mettere PRO.attivo = true:
   le schede marcate come premium mostreranno il blocco "Sblocca". Oggi tutto è aperto. */
const PRO = { attivo:false, piano:"Allievi Kinesiologia Studio — accesso completo" };

const KINDS = {
  muscolo:    {label:"Muscolo",     cls:"m", db:()=>DB.muscoli},
  osso:       {label:"Osso",        cls:"o", db:()=>DB.ossa},
  nervo:      {label:"Nervo",       cls:"n", db:()=>DB.nervi},
  articolazione:{label:"Articolazione",cls:"a",db:()=>DB.articolazioni},
  movimento:  {label:"Movimento",   cls:"p", db:()=>DB.movimenti},
  problema:   {label:"Problema",    cls:"p", db:()=>DB.problemi},
  catena:     {label:"Catena",      cls:"c", db:()=>DB.catene},
  postura:    {label:"Postura",     cls:"p", db:()=>DB.posture},
  arteria:    {label:"Vaso",        cls:"v", db:()=>DB.arterie},
  legamento:  {label:"Legamento",   cls:"g", db:()=>DB.legamenti},
  fascia:     {label:"Fascia",      cls:"f", db:()=>DB.fasce},
  tipo:       {label:"Tipo di articolazione", cls:"t", db:()=>DB.tipi},
  plesso:     {label:"Plesso",      cls:"n", db:()=>DB.plessi},
  tendine:    {label:"Tendine",     cls:"d", db:()=>DB.tendini},
  borsa:      {label:"Borsa sierosa",cls:"b", db:()=>DB.borse}
};

const S = { view:"home", id:null, arg:null, saved:[], done:[], scores:{}, rate:1 };

/* ---------- archivio locale (per-dispositivo, non critico) ---------- */
function load(k,def){ try{ const v=localStorage.getItem("tv."+k); return v?JSON.parse(v):def; }catch(e){ return def; } }
function save(k,v){ try{ localStorage.setItem("tv."+k,JSON.stringify(v)); }catch(e){} }
S.saved = load("saved",[]); S.done = load("done",[]); S.scores = load("scores",{}); S.rate = load("rate",1);

/* ---------- utilità ---------- */
const $ = (s,r)=> (r||document).querySelector(s);
const el = (t,c,h)=>{ const n=document.createElement(t); if(c) n.className=c; if(h!=null) n.innerHTML=h; return n; };
const esc = s => String(s==null?"":s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
function find(kind,id){ const d=KINDS[kind]; return d ? d.db().find(x=>x.id===id) : null; }
function kindOf(id){
  if(!id) return null;
  const p=id.split("-")[0];
  return {m:"muscolo",o:"osso",n:"nervo",a:"articolazione",mv:"movimento",p:"problema",c:"catena",post:"postura"}[p]||null;
}
function anyById(id){
  if(!id) return null;
  if(id.indexOf("post-")===0) return {kind:"postura",item:DB.posture.find(x=>x.id===id)};
  if(id.indexOf("mv-")===0)  return {kind:"movimento",item:DB.movimenti.find(x=>x.id===id)};
  const map={m:"muscolo",o:"osso",n:"nervo",a:"articolazione",p:"problema",c:"catena",v:"arteria",g:"legamento",f:"fascia",t:"tipo",x:"plesso",d:"tendine",b:"borsa"};
  const k=map[id.split("-")[0]]; if(!k) return null;
  const item=KINDS[k].db().find(x=>x.id===id);
  return item?{kind:k,item:item}:null;
}
function nomeOf(id){ const r=anyById(id); return r? (r.item.nome||r.item.voce) : id; }

/* muscoli collegati, calcolati dalle schede muscolari */
const rel = {
  muscoliDiOsso: oid => DB.muscoli.filter(m=>(m.ossaO||[]).includes(oid)||(m.ossaI||[]).includes(oid)),
  muscoliDiNervo: nid => DB.muscoli.filter(m=>(m.nervi||[]).includes(nid)),
  muscoliDiArt: aid => DB.muscoli.filter(m=>(m.articolazioni||[]).includes(aid)),
  muscoliDiCatena: cid => DB.muscoli.filter(m=>(m.catene||[]).includes(cid)),
  movimentiDiMuscolo: mid => DB.movimenti.filter(v=>[].concat(v.agonisti||[],v.sinergici||[],v.antagonisti||[]).includes(mid)),
  problemiDiMuscolo: mid => DB.problemi.filter(p=>(p.cause||[]).some(c=>(c.muscoli||[]).includes(mid)))
};

/* ---------- indice di ricerca ---------- */
let INDEX=[];
function buildIndex(){
  INDEX=[];
  const ordine=["problema","movimento","muscolo","osso","nervo","plesso","articolazione","legamento","tendine","borsa","fascia","catena","arteria","postura","tipo","concetto"];
  ordine.forEach(kind=>{
    (KINDS[kind].db()||[]).forEach(it=>{
      const extra=[it.lat,it.gruppo,it.regione,it.zona,it.sigla,it.classe,it.origine,it.inserzione,
        it.dove,it.decorso,it.serve,it.sintesi,it.definizione,it.funzione,it.tipo,it.radici,
        (it.alias||[]).join(" "),(it.azioni||[]).join(" "),(it.tratti||[]).join(" ")]
        .filter(Boolean).join(" ");
      INDEX.push({kind:kind,id:it.id,nome:it.nome||it.voce,
        testo:((it.nome||it.voce||"")+" "+extra).toLowerCase()});
    });
  });
}
function cerca(q){
  q=q.trim().toLowerCase(); if(q.length<2) return [];
  return INDEX.filter(r=>r.testo.includes(q)).slice(0,14);
}

/* =========================================================
   FIGURA ANATOMICA SCHEMATICA
   ========================================================= */
function figuraBase(){
  return '<g class="fig" aria-hidden="true">'+
   '<ellipse cx="100" cy="38" rx="18" ry="22"></ellipse>'+
   '<path d="M93,57 h14 v20 h-14 z"></path>'+
   '<path d="M70,82 C66,112 78,142 82,201 L118,201 C122,142 134,112 130,82 C112,73 88,73 70,82 Z"></path>'+
   '<path class="limb" d="M71,84 L57,142 L49,200 L46,226" stroke-width="13"></path>'+
   '<path class="limb" d="M129,84 L143,142 L151,200 L154,226" stroke-width="13"></path>'+
   '<path class="limb" d="M85,201 L81,300 L79,400" stroke-width="19"></path>'+
   '<path class="limb" d="M115,201 L119,300 L121,400" stroke-width="19"></path>'+
   '<path class="limb" d="M79,401 L72,427" stroke-width="9"></path>'+
   '<path class="limb" d="M121,401 L128,427" stroke-width="9"></path>'+
  '</g>';
}
function mirrored(inner){ return inner+'<g transform="translate(200,0) scale(-1,1)">'+inner+'</g>'; }

/* Atlante cliccabile. vista: "ant" | "post". sel: id muscolo evidenziato */
function atlanteSVG(vista,sel){
  const lista=DB.muscoli.filter(m=>m.vista===vista||m.vista==="both");
  let g="";
  lista.forEach(m=>{
    const on = sel===m.id;
    const seg='<path class="mus'+(on?" on":"")+'" data-mid="'+m.id+'" d="'+m.path+'" stroke-width="'+m.w+'"></path>'+
              '<path class="hit" data-mid="'+m.id+'" d="'+m.path+'" stroke-width="'+(m.w+9)+'"></path>';
    g += m.noMirror ? seg : mirrored(seg);
  });
  return '<svg viewBox="0 0 200 448" class="figsvg" role="img" aria-label="Mappa muscolare schematica, vista '+
    (vista==="ant"?"anteriore":"posteriore")+'">'+figuraBase()+g+'</svg>';
}

/* Catena miofasciale disegnata sulla figura */
function catenaSVG(c,extra){
  const linea='<path class="chain" d="'+c.path+'" stroke="'+c.colore+'"></path>';
  const pts=c.path.split(/[ML]\s*/).filter(Boolean).map(s=>s.trim().split(","));
  const dots=pts.map(p=>'<circle class="st" cx="'+p[0]+'" cy="'+p[1]+'" r="2.6" fill="'+c.colore+'"></circle>').join("");
  const inner=linea+dots;
  return '<svg viewBox="0 0 200 448" class="figsvg" role="img" aria-label="Percorso della '+esc(c.nome)+' sul corpo">'+
    figuraBase()+(c.mirror?mirrored(inner):inner)+(extra||"")+'</svg>';
}

/* Figura di profilo per la posturologia (filo a piombo) */
function posturaSVG(p){
  const o=p.offset||{};
  const x=100, n={
    head:[x+ (o.head||0), 38], c7:[x+(o.c7||0), 72], t12:[x+(o.t12||0), 140],
    l5:[x+(o.l5||0), 192], hip:[x+(o.pelvis||0), 205], knee:[x+(o.knee||0), 300], ank:[x, 400]
  };
  const ln=(a,b,w)=>'<path class="limb" d="M'+a[0]+','+a[1]+' L'+b[0]+','+b[1]+'" stroke-width="'+w+'"></path>';
  return '<svg viewBox="0 0 200 448" class="figsvg" role="img" aria-label="Schema posturale di profilo: '+esc(p.nome)+'">'+
    '<path class="plumb" d="M100,14 L100,436"></path>'+
    '<g class="fig">'+
      '<ellipse cx="'+n.head[0]+'" cy="'+n.head[1]+'" rx="17" ry="21"></ellipse>'+
      ln(n.head,n.c7,12)+ln(n.c7,n.t12,34)+ln(n.t12,n.l5,26)+ln(n.l5,n.hip,22)+
      ln(n.hip,n.knee,19)+ln(n.knee,n.ank,15)+
      '<path class="limb" d="M'+n.ank[0]+','+n.ank[1]+' L'+(n.ank[0]+16)+','+(n.ank[1]+26)+'" stroke-width="9"></path>'+
    '</g>'+
    '<g class="node"><circle cx="'+n.head[0]+'" cy="'+n.head[1]+'" r="3"></circle>'+
     '<circle cx="'+n.c7[0]+'" cy="'+n.c7[1]+'" r="3"></circle>'+
     '<circle cx="'+n.hip[0]+'" cy="'+n.hip[1]+'" r="3"></circle>'+
     '<circle cx="'+n.knee[0]+'" cy="'+n.knee[1]+'" r="3"></circle>'+
     '<circle cx="'+n.ank[0]+'" cy="'+n.ank[1]+'" r="3"></circle></g>'+
  '</svg>';
}

/* ---------- pillole di collegamento ---------- */
function pill(id,txt){
  const r=anyById(id);
  if(r) return '<button class="pill '+KINDS[r.kind].cls+'" data-go="'+r.kind+'/'+id+'">'+esc(txt||r.item.nome||r.item.voce)+'</button>';
  /* non e' un id ma testo libero: cerca dentro un termine conosciuto */
  const m=(typeof trovaTermine==="function")? trovaTermine(id) : null;
  if(m) return '<button class="pill '+KINDS[m.kind].cls+'" data-go="'+m.kind+'/'+m.id+'">'+esc(txt||id)+'</button>';
  return '<span class="pill plain">'+esc(txt||id)+'</span>';
}
function pills(ids,vuoto){
  if(!ids||!ids.length) return '<p style="color:var(--faint);font-size:13px;margin:0">'+(vuoto||"—")+'</p>';
  return '<div class="pills">'+ids.map(i=>pill(i)).join("")+'</div>';
}
</script>
