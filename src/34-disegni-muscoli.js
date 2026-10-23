<style>
.mdraw path{fill:var(--muscle);opacity:.55;stroke:color-mix(in srgb,var(--muscle) 75%,#000);stroke-width:.55;stroke-linejoin:round;cursor:pointer;transition:opacity .15s}
.mdraw .fib{fill:none;stroke:var(--surface);stroke-width:.7;opacity:.75;stroke-linecap:round;pointer-events:none}
.mdraw.deep path{fill:color-mix(in srgb,var(--muscle) 18%,transparent);stroke:var(--muscle);stroke-dasharray:2.4 1.8;stroke-width:1;opacity:.95}
.mdraw.deep .fib{display:none}
.mdraw.on path{opacity:.82}
.gal .mdraw path{opacity:.26}
.gal .mdraw.deep path{opacity:.55}
.gal .mdraw:hover path,.gal .mdraw.hl path{opacity:.88}
.gal .mdraw:hover .fib,.gal .mdraw.hl .fib{opacity:.9}
.tav-leg .m::before{background:color-mix(in srgb,var(--muscle) 55%,var(--surface));border-color:var(--muscle)}
.tav-leg .d::before{background:transparent;border:1.5px dashed var(--muscle)}
.galwrap{display:grid;grid-template-columns:minmax(260px,1.1fr) minmax(0,1fr);gap:16px;align-items:start}
@media(max-width:760px){.galwrap{grid-template-columns:1fr}}
</style>
<script>
/* =========================================================
   DISEGNI DEI MUSCOLI SULLE TAVOLE OSSEE
   Ogni voce: tav = tavola, d = sagoma, fibre = direzione delle fibre,
   deep = muscolo profondo o sul lato non visibile (tratteggiato).
   ========================================================= */
DB.disegni = {
 /* ---- collo (profilo sinistro) ---- */
 "m-massetere":[{tav:"collo",d:"M84,74 L114,72 L124,120 L102,122 Z",fibre:"M90,76 L106,120 M98,75 L114,121"}],
 "m-temporale":[{tav:"collo",d:"M76,60 C82,26 124,22 140,58 L108,92 L102,92 Z",fibre:"M100,92 L94,40 M104,92 L110,36 M106,92 L126,44"}],
 "m-pterigoidei":[{tav:"collo",d:"M92,84 L104,82 L126,118 L118,122 Z M90,78 L98,76 L128,92 L126,98 Z",deep:true}],
 "m-scom":[{tav:"collo",d:"M116,100 L128,106 L88,226 L74,220 Z",fibre:"M120,104 L82,222"},
           {tav:"torace",d:"M60,2 L72,2 L100,34 L96,44 Z M150,2 L138,2 L110,34 L114,44 Z"}],
 "m-suboccipitali":[{tav:"collo",d:"M134,96 L146,102 L138,132 L128,128 Z"},{tav:"rachide",d:"M84,14 L94,16 L90,32 L82,30 Z"}],
 "m-scaleni":[{tav:"collo",d:"M100,132 L108,134 L106,226 L92,224 Z",fibre:"M104,134 L100,224"},
              {tav:"torace",d:"M96,4 L104,4 L66,52 L58,48 Z M106,4 L114,4 L152,48 L144,52 Z"}],
 "m-elevatore":[{tav:"collo",d:"M104,118 L112,120 L156,226 L142,226 Z"},{tav:"spalla",d:"M194,50 L206,8 L210,8 L210,20 L200,56 Z"}],
 "m-trapezio":[{tav:"collo",d:"M146,92 L154,96 C158,140 166,180 176,226 L158,226 C148,180 142,140 140,100 Z",fibre:"M150,100 L166,224"},
               {tav:"spalla",d:"M206,10 L128,46 L136,60 L206,132 Z",fibre:"M206,20 L140,52 M206,60 L150,58 M206,110 L152,62"}],
 /* ---- spalla (posteriore destra) ---- */
 "m-romboidi":[{tav:"spalla",d:"M192,64 L206,42 L210,42 L210,86 L188,104 Z",fibre:"M194,70 L208,52 M192,84 L208,68 M190,98 L208,84"}],
 "m-sovraspinato":[{tav:"spalla",d:"M190,54 C170,50 150,50 136,54 L118,60 C104,60 92,64 82,72 L86,80 C98,74 110,72 122,70 L138,64 C154,60 172,60 190,60 Z",fibre:"M186,56 L128,66 M170,54 L118,68"}],
 "m-sottospinato":[{tav:"spalla",d:"M190,68 L184,120 C170,114 152,102 138,92 L98,86 L94,76 L130,74 C150,70 170,68 190,68 Z",fibre:"M186,74 L100,80 M184,100 L112,84 M170,110 L124,88"}],
 "m-rotondi":[{tav:"spalla",d:"M164,124 L170,132 L102,98 L98,90 Z M160,140 L170,150 L120,128 L114,118 Z",fibre:"M166,128 L104,94 M164,144 L118,124"}],
 "m-deltoide":[{tav:"spalla",d:"M112,50 L192,60 L190,66 L118,152 L100,150 L96,66 Z",fibre:"M120,54 L104,146 M160,62 L110,148"}],
 "m-tricipite":[{tav:"spalla",d:"M124,104 L134,106 L116,188 L98,188 Z",fibre:"M128,110 L108,186"},{tav:"gomito",d:"M84,6 L92,6 L118,86 L108,92 Z",deep:true}],
 "m-gran-dorsale":[{tav:"spalla",d:"M172,196 L210,196 L210,150 L118,110 L112,120 L150,160 Z",fibre:"M204,190 L120,116 M180,194 L130,140"},
                   {tav:"rachide",d:"M70,120 L84,124 L100,236 L84,240 Z",deep:true}],
 "m-sottoscapolare":[{tav:"spalla",d:"M150,74 L188,66 L184,126 L100,84 L100,76 Z",deep:true}],
 /* ---- gomito (anteriore destra) ---- */
 "m-bicipite":[{tav:"gomito",d:"M88,4 L112,4 L110,60 C114,84 104,102 96,116 L86,110 C90,90 88,60 88,30 Z",fibre:"M96,8 L98,100 M104,8 L104,96"},
               {tav:"spalla",d:"M122,102 L130,104 L112,188 L96,188 Z",deep:true}],
 /* ---- torace (anteriore) ---- */
 "m-pettorale-grande":[{tav:"torace",d:"M94,46 L96,122 C78,126 58,120 42,110 L10,72 C34,66 62,54 94,46 Z",fibre:"M92,56 L26,76 M92,80 L34,98 M92,110 L48,116"}],
 "m-pettorale-piccolo":[{tav:"torace",d:"M70,84 L60,112 L50,110 L26,44 L34,40 Z",deep:true}],
 "m-dentato":[{tav:"torace",d:"M18,80 L30,74 L36,170 L24,166 Z",fibre:"M20,90 L34,86 M20,110 L34,106 M22,130 L34,126 M22,150 L34,146"}],
 "m-retto-addominale":[{tav:"torace",d:"M90,146 L120,146 L122,208 L88,208 Z",fibre:"M90,166 L120,166 M90,186 L120,186"},
                       {tav:"rachide",d:"M34,132 L46,132 L54,250 L42,252 Z",fibre:"M40,140 L48,246"}],
 "m-obliqui":[{tav:"torace",d:"M28,152 L50,148 L72,208 L46,208 Z",fibre:"M36,160 L58,204 M44,156 L66,200"},
              {tav:"bacino",d:"M20,0 L44,0 L56,44 L28,40 Z",fibre:"M30,6 L40,38"}],
 "m-diaframma":[{tav:"torace",d:"M20,150 C60,120 150,120 190,150 L188,162 C150,138 60,138 22,162 Z",deep:true},
                {tav:"rachide",d:"M18,166 C40,148 60,158 66,174 L58,180 C52,168 36,162 20,176 Z",deep:true}],
 "m-trasverso":[{tav:"torace",d:"M24,170 L186,170 L186,182 L24,182 Z",deep:true},{tav:"rachide",d:"M62,180 C50,182 38,190 30,200 L34,208 C42,198 52,192 64,190 Z",deep:true}],
 /* ---- rachide (profilo, anteriore a sinistra) ---- */
 "m-erettori":[{tav:"rachide",d:"M84,18 L98,20 C94,80 100,150 110,240 L96,244 C88,170 82,90 84,18 Z",fibre:"M90,30 L100,240"},
               {tav:"bacino",d:"M96,0 L108,0 L112,60 L100,60 Z M122,0 L134,0 L130,60 L118,60 Z",deep:true}],
 "m-quadrato-lombi":[{tav:"rachide",d:"M62,172 L74,176 L86,238 L74,240 Z",fibre:"M68,180 L80,236"},{tav:"bacino",d:"M44,0 L58,0 L66,40 L48,42 Z",deep:true}],
 "m-ileopsoas":[{tav:"rachide",d:"M64,182 L78,186 L46,306 L30,302 Z",fibre:"M70,190 L40,300"},
                {tav:"bacino",d:"M104,0 L124,0 L120,44 C114,84 88,120 62,148 L48,156 C70,124 96,92 100,50 Z M40,60 L92,52 L96,66 L64,140 L48,154 C50,120 44,90 40,60 Z",fibre:"M112,10 L56,150 M60,64 L52,140"}],
 /* ---- bacino (anteriore) ---- */
 "m-gluteo-medio":[{tav:"bacino",d:"M26,46 L92,46 L86,62 L32,148 L20,142 Z",fibre:"M40,50 L26,140 M60,50 L30,144 M80,52 L34,146"}],
 "m-gluteo-massimo":[{tav:"bacino",d:"M150,60 L208,72 L212,122 L200,192 L186,190 L186,132 L150,110 Z",deep:true},{tav:"rachide",d:"M96,238 L104,240 L120,300 L108,304 Z",deep:true}],
 "m-piriforme":[{tav:"bacino",d:"M110,80 L122,86 L32,144 L26,138 Z",deep:true}],
 "m-adduttori":[{tav:"bacino",d:"M78,130 L112,152 L112,168 L78,198 L56,198 L68,176 Z",fibre:"M84,136 L60,196 M96,144 L68,196 M108,156 L76,196"},
                {tav:"ginocchio",d:"M40,0 L54,0 L62,172 L48,176 Z",fibre:"M47,6 L55,170"}],
 "m-tfl":[{tav:"bacino",d:"M20,60 L34,64 L36,198 L16,198 Z",fibre:"M26,66 L26,196"},{tav:"ginocchio",d:"M140,0 L148,0 L134,146 L126,142 Z",fibre:"M144,4 L131,142"}],
 "m-quadricipite":[{tav:"bacino",d:"M38,90 L52,94 L70,198 L52,198 Z",fibre:"M45,96 L60,196"},
                   {tav:"ginocchio",d:"M62,0 L116,0 L114,70 L66,70 Z M54,36 L70,42 L76,74 L58,88 Z M122,30 L134,34 L124,88 L110,74 Z",fibre:"M76,4 L78,66 M90,4 L90,66 M104,4 L102,66"}],
 "m-ischiocrurali":[{tav:"bacino",d:"M76,178 L94,178 L88,198 L70,198 Z",deep:true},{tav:"ginocchio",d:"M108,0 L120,0 L142,148 L132,150 Z M66,0 L76,0 L60,162 L50,160 Z",deep:true}],
 /* ---- ginocchio (anteriore sinistra) e piede (laterale destra) ---- */
 "m-gastrocnemio":[{tav:"ginocchio",d:"M52,112 L70,116 L90,226 L64,226 Z M128,112 L110,116 L96,226 L120,226 Z",deep:true},
                   {tav:"piede",d:"M8,0 L44,0 C46,30 36,50 30,66 L14,68 C6,50 4,26 8,0 Z",fibre:"M16,6 L16,60 M28,4 L26,62"}],
 "m-soleo":[{tav:"piede",d:"M32,0 L48,0 L48,60 L36,64 Z",deep:true}],
 "m-tibiale-ant":[{tav:"ginocchio",d:"M112,142 L128,144 L116,226 L100,226 Z",fibre:"M120,146 L108,224"},
                  {tav:"piede",d:"M96,0 L112,0 L116,60 L140,96 L130,104 L104,66 Z",fibre:"M102,6 L108,62 L134,98"}],
 "m-peronei":[{tav:"ginocchio",d:"M134,162 L146,166 L142,226 L130,226 Z",fibre:"M140,168 L136,224"},
              {tav:"piede",d:"M84,0 L96,0 L100,64 L98,118 L88,118 L92,70 Z M96,120 C120,138 150,134 178,110 L176,104 C150,128 122,130 98,114 Z",fibre:"M90,6 L94,66"}],
 "m-tibiale-post":[{tav:"piede",d:"M52,0 L62,0 L62,56 L98,84 L92,92 L52,62 Z",deep:true}],
 "m-plantare":[{tav:"piede",d:"M24,120 C70,134 130,134 190,132 L190,140 C130,144 70,144 22,128 Z",fibre:"M40,128 L180,136 M60,132 L170,140"}]
};

/* html dei disegni per una tavola: mids = quali muscoli, on = quale evidenziare */
function disegniPer(tid,mids,on){
  let h="";
  (mids||Object.keys(DB.disegni)).forEach(mid=>{
    (DB.disegni[mid]||[]).filter(x=>x.tav===tid).forEach(x=>{
      const r=anyById(mid); if(!r) return;
      h+='<g class="mdraw'+(x.deep?" deep":"")+(on===mid?" on":"")+'" data-mid="'+mid+'" data-hl-target="'+mid+'"><title>'+esc(r.item.nome)+(x.deep?" (profondo o sul lato opposto)":"")+'</title>'+
         '<path d="'+x.d+'"></path>'+(x.fibre?'<path class="fib" d="'+x.fibre+'"></path>':"")+'</g>';
    });
  });
  return h;
}
function muscoliDellaTavola(tid){
  return Object.keys(DB.disegni).filter(mid=>DB.disegni[mid].some(x=>x.tav===tid));
}

/* ---- innesto nel rendering delle tavole ---- */
const _tavolaSVG_base = tavolaSVG;
tavolaSVG = function(tid,o){
  o=o||{};
  let html=_tavolaSVG_base(tid,o);
  if(o.mus){
    const dis=disegniPer(tid,o.mus,o.on);
    /* i disegni vanno sopra le ossa e sotto i reperi: si inseriscono prima del primo gruppo di reperi */
    const k=html.indexOf('<circle class="pt-min"'); const k2=html.indexOf('<g class="pt">');
    let pos=[k,k2].filter(i=>i>=0).sort((a,b)=>a-b)[0];
    if(pos==null) pos=html.indexOf("</svg>");
    html=html.slice(0,pos)+dis+html.slice(pos);
    const leg=(o.on?'<i class="m">Muscolo della scheda</i>':'<i class="m">Muscoli</i>')+'<i class="d">Profondo / lato opposto</i>';
    html=html.replace('<div class="tav-leg">','<div class="tav-leg">'+leg);
    if(o.gal) html=html.replace('<div class="tav">','<div class="tav gal">');
  }
  return html;
};

const _tavolaScheda_base = tavolaScheda;
tavolaScheda = function(kind,it){
  if(kind!=="muscolo" || !DB.disegni[it.id]) return _tavolaScheda_base(kind,it);
  const testo=testoScheda(it);
  const tavs=[]; DB.disegni[it.id].forEach(x=>{ if(tavs.indexOf(x.tav)<0) tavs.push(x.tav); });
  return tavs.map(tid=>tavolaSVG(tid,{org:it.ossaO||[],ins:it.ossaI||[],testo:testo,mus:[it.id],on:it.id})).join("");
};

/* ---- galleria: una tavola con tutti i muscoli disegnati ---- */
/* le tavole dalla testa ai piedi; una tavola nuova non in lista va in fondo */
const ORDINE_TAVOLE=["collo","rachide","torace","spalla","gomito","mano","bacino","ginocchio","piede"];
function vistaTavole(arg){
  const tutte=Object.keys(DB.tavole);
  const pos=k=>{ const i=ORDINE_TAVOLE.indexOf(k); return i<0? ORDINE_TAVOLE.length+tutte.indexOf(k) : i; };
  const ids=tutte.slice().sort((a,b)=>pos(a)-pos(b));
  const tid=DB.tavole[arg]?arg:ids[0];
  const mids=muscoliDellaTavola(tid);
  const chips=mids.map(mid=>{ const r=anyById(mid); const deep=DB.disegni[mid].filter(x=>x.tav===tid).every(x=>x.deep);
    return '<button class="pill m" data-go="muscolo/'+mid+'" data-hl="'+mid+'">'+esc(r.item.nome)+(deep?' ·':'')+'</button>'; }).join("");
  return crumbs([["Home","home/"],["Tavole dei muscoli",null]])+
   '<h1 style="font-size:clamp(23px,5vw,32px);margin-bottom:6px">Tavole dei muscoli</h1>'+
   '<p style="margin:0 0 14px;color:var(--muted);max-width:64ch">Ogni muscolo è disegnato sulle ossa da cui parte e su cui arriva. Passa il mouse su un muscolo o su un nome per evidenziarlo, tocca per aprire la scheda. I muscoli profondi o sul lato non visibile sono tratteggiati.</p>'+
   '<div class="chips" style="margin-bottom:14px">'+ids.map(k=>'<button class="chip'+(k===tid?" on":"")+'" data-go="tavole/'+k+'">'+esc(DB.tavole[k].nome.split(" — ")[0])+'</button>').join("")+'</div>'+
   '<div class="galwrap">'+
     '<div>'+tavolaSVG(tid,{mus:mids,gal:true})+'</div>'+
     '<div><div class="seg" style="margin-bottom:8px">'+mids.length+' muscoli in questa tavola</div><div class="pills" id="gal-chips">'+chips+'</div>'+
     '<p style="font-size:12.5px;color:var(--faint);margin-top:10px">· = disegnato tratteggiato perché profondo o sul lato opposto.</p></div>'+
   '</div>';
}
</script>
