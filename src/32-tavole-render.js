<style>
.tav{background:var(--surface);border:1px solid var(--line-soft);border-radius:12px;padding:10px 10px 8px;display:flex;flex-direction:column;gap:6px}
.tav svg{width:100%;max-width:340px;height:auto;margin:0 auto}
.tav .cap{font-family:var(--mono);font-size:9.5px;letter-spacing:.1em;text-transform:uppercase;color:var(--faint);text-align:center}
.bone{fill:var(--bone-soft);stroke:var(--bone);stroke-width:1.1;stroke-linejoin:round;cursor:pointer;transition:fill .15s}
.bone:hover{fill:color-mix(in srgb,var(--bone) 35%,var(--bone-soft))}
.bone.org{fill:color-mix(in srgb,var(--joint) 28%,var(--surface));stroke:var(--joint);stroke-width:1.5}
.bone.ins{fill:color-mix(in srgb,var(--muscle) 26%,var(--surface));stroke:var(--muscle);stroke-width:1.5}
.bone.org.ins{fill:url(#tv-mix);stroke:var(--ink)}
.bone.sel{fill:color-mix(in srgb,var(--nerve) 30%,var(--surface));stroke:var(--nerve);stroke-width:1.6}
.acc path{fill:none;stroke:var(--line);stroke-width:1;stroke-dasharray:3 3}
.acc2 path,path.acc2{fill:none;stroke:var(--bone);stroke-width:.9;opacity:.7}
.acc3{fill:color-mix(in srgb,var(--fascia) 30%,var(--surface));stroke:var(--fascia);stroke-width:.9}
.pt-min{fill:var(--bone);opacity:.45}
.pt circle{fill:var(--nerve);stroke:var(--surface);stroke-width:1.2}
.pt line{stroke:var(--nerve);stroke-width:.8}
.pt text{font-family:var(--body);font-size:6.6px;fill:var(--ink);paint-order:stroke;stroke:var(--surface);stroke-width:2.2px;stroke-linejoin:round}
.tav-leg{display:flex;flex-wrap:wrap;gap:4px 12px;justify-content:center;font-size:11px;color:var(--muted)}
.tav-leg i{display:inline-flex;align-items:center;gap:5px;font-style:normal}
.tav-leg i::before{content:"";width:11px;height:11px;border-radius:3px;border:1.5px solid}
.tav-leg .o::before{background:color-mix(in srgb,var(--joint) 28%,var(--surface));border-color:var(--joint)}
.tav-leg .i::before{background:color-mix(in srgb,var(--muscle) 26%,var(--surface));border-color:var(--muscle)}
.tav-leg .s::before{background:color-mix(in srgb,var(--nerve) 30%,var(--surface));border-color:var(--nerve)}
.tav-leg .r::before{background:var(--nerve);border-color:var(--nerve);border-radius:50%;width:8px;height:8px}
</style>
<script>
/* =========================================================
   RENDERING DELLE TAVOLE
   ========================================================= */
const TAVOLA_PER_OSSO={"o-cranio":"collo","o-mandibola":"collo","o-vertebre-c":"collo","o-clavicola":"spalla","o-scapola":"spalla",
 "o-omero":"spalla","o-radio":"gomito","o-ulna":"gomito","o-mano":"mano","o-sterno":"torace","o-coste":"torace",
 "o-vertebre-t":"rachide","o-vertebre-l":"rachide","o-sacro":"rachide","o-ileo":"bacino","o-femore":"bacino",
 "o-rotula":"ginocchio","o-tibia":"ginocchio","o-perone":"ginocchio","o-piede":"piede"};
function tavoleCon(ids){ return Object.keys(DB.tavole).filter(k=>ids.some(id=>DB.tavole[k].svg.indexOf('data-osso="'+id+'"')>=0)); }
function tavolaPer(it){
  if(it.tavola && DB.tavole[it.tavola]) return it.tavola;
  const chiavi=[it.regione,it.gruppo,it.zona].filter(Boolean);
  if(!chiavi.length && it.art){ const a=(typeof it.art==="string")? anyById(it.art) : anyById((it.art||[])[0]); if(a&&a.item&&a.item.regione) chiavi.push(a.item.regione); }
  for(const k of chiavi){ if(TAVOLA_PER_REGIONE[k]) return TAVOLA_PER_REGIONE[k]; }
  return null;
}

/* testo completo della scheda, per capire quali reperi evidenziare */
function testoScheda(it){
  return Object.keys(it).map(k=>{
    const v=it[k]; if(typeof v==="string") return v;
    if(Array.isArray(v)) return v.map(x=>typeof x==="string"?x:(x&&x.t?x.t+" "+x.perche:"")).join(" ");
    return "";
  }).join(" ").toLowerCase();
}

function tavolaSVG(tid,o){
  const T=DB.tavole[tid]; if(!T) return "";
  o=o||{};
  const org=o.org||[], ins=o.ins||[], sel=o.sel||[];
  let svg=T.svg;
  /* colora le ossa secondo il ruolo */
  svg=svg.replace(/class="bone" data-osso="([^"]+)"/g,function(m,id){
    let c="bone";
    if(org.includes(id)) c+=" org";
    if(ins.includes(id)) c+=" ins";
    if(sel.includes(id)) c+=" sel";
    return 'class="'+c+'" data-osso="'+id+'"';
  });
  /* reperi: tutti come puntini, quelli rilevanti con etichetta */
  const vb=T.vb.split(" ").map(Number), W=vb[2];
  const testo=(o.testo||"");
  let pts="";
  Object.keys(T.punti||{}).forEach(nome=>{
    const p=T.punti[nome];
    const rilevante = o.tutti || testo.indexOf(nome.toLowerCase())>=0 || (o.punti||[]).includes(nome);
    if(!rilevante){ pts+='<circle class="pt-min" cx="'+p[0]+'" cy="'+p[1]+'" r="1.6"></circle>'; return; }
    const destra = p[0] < W*0.55;
    const x2 = destra ? p[0]+14 : p[0]-14;
    pts+='<g class="pt"><line x1="'+p[0]+'" y1="'+p[1]+'" x2="'+x2+'" y2="'+(p[1]-8)+'"></line>'+
         '<circle cx="'+p[0]+'" cy="'+p[1]+'" r="2.4"></circle>'+
         '<text x="'+(destra?x2+1:x2-1)+'" y="'+(p[1]-9.5)+'" text-anchor="'+(destra?"start":"end")+'">'+esc(nome)+'</text></g>';
  });
  const defs='<defs><pattern id="tv-mix" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">'+
    '<rect width="4" height="4" fill="color-mix(in srgb,var(--joint) 28%,var(--surface))"></rect><rect width="2" height="4" fill="color-mix(in srgb,var(--muscle) 30%,var(--surface))"></rect></pattern></defs>';
  const leg=[];
  if(org.length) leg.push('<i class="o">Origine</i>');
  if(ins.length) leg.push('<i class="i">Inserzione</i>');
  if(sel.length) leg.push('<i class="s">Osso della scheda</i>');
  leg.push('<i class="r">Repere</i>');
  return '<div class="tav"><svg viewBox="'+T.vb+'" role="img" aria-label="'+esc(T.nome)+'">'+defs+svg+pts+'</svg>'+
    '<span class="cap">'+esc(T.nome)+' · disegno schematico, ossa cliccabili</span>'+
    '<div class="tav-leg">'+leg.join("")+'</div></div>';
}

/* la tavola giusta per ogni tipo di scheda */
function tavolaScheda(kind,it){
  const tid=tavolaPer(it);
  if(!tid) return "";
  const testo=testoScheda(it);
  if(kind==="muscolo"){
    const o={org:it.ossaO||[],ins:it.ossaI||[],testo:testo};
    let out=tavolaSVG(tid,o);
    /* se l'inserzione (o l'origine) sta in un'altra regione, aggiungi la seconda tavola */
    const mancanti=[].concat(o.org,o.ins).filter(id=>DB.tavole[tid].svg.indexOf('data-osso="'+id+'"')<0);
    if(mancanti.length){
      const alt=tavoleCon(mancanti).filter(k=>k!==tid)[0];
      if(alt) out+=tavolaSVG(alt,o);
    }
    return out;
  }
  if(kind==="osso"){
    const scelta=TAVOLA_PER_OSSO[it.id]||tavoleCon([it.id])[0]||tid;
    return tavolaSVG(scelta,{sel:[it.id],testo:testo+" "+(ALIAS_EXTRA[it.id]||[]).join(" ").toLowerCase()});
  }
  return tavolaSVG(tid,{testo:testo});
}
</script>
