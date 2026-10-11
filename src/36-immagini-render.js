<style>
.gray{margin:0;background:var(--surface);border:1px solid var(--line-soft);border-radius:12px;padding:8px;display:flex;flex-direction:column;gap:6px}
.gray img{width:100%;height:auto;border-radius:8px;background:#fff;cursor:zoom-in;display:block}
.gray figcaption{font-size:12px;color:var(--muted);line-height:1.4;padding:0 2px}
.gray figcaption b{font-family:var(--mono);font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--faint);display:block;margin-bottom:2px}
.graygrid{display:grid;gap:10px}
.graygrid.due{grid-template-columns:1fr 1fr}
@media(max-width:520px){.graygrid.due{grid-template-columns:1fr}}
.lb{position:fixed;inset:0;z-index:200;background:rgba(10,14,13,.92);display:grid;place-items:center;padding:16px;cursor:zoom-out}
.lb img{max-width:min(96vw,1100px);max-height:86vh;width:auto;height:auto;background:#fff;border-radius:6px;box-shadow:0 20px 60px rgba(0,0,0,.6)}
.lb figcaption{color:#E7EEEB;font-size:13px;text-align:center;max-width:70ch;margin-top:10px}
.lb .x{position:absolute;top:14px;right:14px;width:40px;height:40px;border-radius:999px;border:1px solid rgba(255,255,255,.3);background:rgba(255,255,255,.08);color:#fff;font-size:20px}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]) .gray img{filter:brightness(.92)}}
</style>
<script>
/* =========================================================
   IMMAGINI ANATOMICHE — tavole della Gray's Anatomy (1918, pubblico dominio)
   DB.img:      {"Gray409": "data:image/jpeg;base64,..."}       (file generato)
   DB.didascalie: {"Gray409": "Muscoli che uniscono..."}        (file generato)
   DB.immagini: {"m-gran-dorsale": ["Gray409","Gray412"], ...}  (mappa curata)
   DB.immaginiRegione: {"Spalla": ["Gray326"], ...}             (ripiego per regione)
   ========================================================= */
DB.img = DB.img || {}; DB.didascalie = DB.didascalie || {}; DB.immagini = DB.immagini || {}; DB.immaginiRegione = DB.immaginiRegione || {};

function immaginiDi(kind,it){
  let lista = DB.immagini[it.id];
  if(!lista || !lista.length){
    const chiavi=[it.regione,it.gruppo,it.zona].filter(Boolean);
    for(const k of chiavi){ if(DB.immaginiRegione[k]){ lista=DB.immaginiRegione[k]; break; } }
  }
  return (lista||[]).filter(k=>DB.img[k]);
}
function figuraGray(k,piccola){
  const cap=DB.didascalie[k]||"";
  const n=k.replace(/^Gray/,"");
  return '<figure class="gray"><img src="'+DB.img[k]+'" alt="'+esc(cap||("Tavola "+n))+'" loading="lazy" data-lb="'+k+'">'+
    '<figcaption><b>Gray\'s Anatomy · tav. '+n+'</b>'+esc(cap)+'</figcaption></figure>';
}
function immagini(kind,it){
  const L=immaginiDi(kind,it); if(!L.length) return "";
  if(L.length===1) return figuraGray(L[0]);
  return '<div class="graygrid'+(L.length>1?" due":"")+'">'+L.slice(0,4).map(k=>figuraGray(k,true)).join("")+'</div>';
}
function apriLightbox(k){
  const cap=DB.didascalie[k]||"", n=k.replace(/^Gray/,"");
  const lb=el("figure","lb",'<button class="x" aria-label="Chiudi">✕</button><img src="'+DB.img[k]+'" alt="'+esc(cap)+'">'+
    '<figcaption>Gray\'s Anatomy (1918), tavola '+n+' — '+esc(cap)+'<br><span style="opacity:.6;font-size:11px">Pubblico dominio · Henry Gray, Henry Vandyke Carter</span></figcaption>');
  lb.addEventListener("click",()=>lb.remove());
  document.body.appendChild(lb);
}
document.addEventListener("click",e=>{ const i=e.target.closest("[data-lb]"); if(i){ apriLightbox(i.getAttribute("data-lb")); } });
document.addEventListener("keydown",e=>{ if(e.key==="Escape"){ const lb=document.querySelector(".lb"); if(lb) lb.remove(); } });

/* innesto: le immagini vanno in cima alla colonna visiva di ogni scheda */
const _visual_conImmagini = visual;
visual = function(kind,it){ return immagini(kind,it) + _visual_conImmagini(kind,it); };
</script>
