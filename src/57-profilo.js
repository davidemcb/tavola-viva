<script>
/* =========================================================
   PROFILO: «lavoro con le mani» (massaggiatori, osteopati, posturologi) oppure «alleno» (personal trainer, chinesiologi).
   Stessi contenuti; cambiano l'ordine delle porte, l'ordine dei blocchi nelle schede e il sottotitolo.
   ========================================================= */
let PROFILO = load("profilo", null);
const PROFILI = {
  mani:   {n:"Lavoro con le mani", d:"Massaggiatori, massoterapisti, osteopati, posturologi", sig:"l'anatomia di chi lavora con le mani",
           ordine:["problema","movimento","muscolo","osso","nervo","plesso","articolazione","catena","postura","test","trigger"]},
  allena: {n:"Alleno", d:"Personal trainer, chinesiologi, istruttori", sig:"l'anatomia di chi allena",
           ordine:["problema","muscolo","movimento","postura","articolazione","test","trigger","osso","nervo","catena","plesso"]}
};
const _PRINCIPALI_base = PRINCIPALI.slice();
function applicaProfilo(){
  const p = PROFILO && PROFILI[PROFILO];
  const ordine = p ? p.ordine.filter(k=>_PRINCIPALI_base.includes(k)).concat(_PRINCIPALI_base.filter(k=>!p.ordine.includes(k))) : _PRINCIPALI_base.slice();
  PRINCIPALI.splice(0, PRINCIPALI.length, ...ordine);
  const sig = document.querySelector(".brand .sig");
  if(sig) sig.textContent = p ? p.sig : "l'anatomia di chi lavora sul corpo";
  document.documentElement.setAttribute("data-profilo", PROFILO || "");
}
applicaProfilo();

/* ordine dei blocchi nelle schede */
const _blocchi_conProfilo = blocchi;
blocchi = function(kind,it){
  const B=_blocchi_conProfilo(kind,it);
  if(PROFILO!=="allena") return B;
  const sposta=(lista,titoli,primaDi)=>{
    const mossi=lista.filter(b=>titoli.includes(b.h)); if(!mossi.length) return lista;
    const resto=lista.filter(b=>!titoli.includes(b.h));
    let k=resto.findIndex(b=>primaDi.includes(b.h)); if(k<0) k=resto.findIndex(b=>b.t==="segreto"); if(k<0) k=resto.length;
    return resto.slice(0,k).concat(mossi,resto.slice(k));
  };
  if(kind==="muscolo"){
    const L=sposta(B,["Come si allunga","Come si rinforza","Da fare a casa"],["Come si palpa"]);
    return L.map(b=>b.h==="In trattamento"?Object.assign({},b,{h:"In trattamento (per chi lavora con le mani)"}):b);
  }
  if(kind==="problema"){
    const L=sposta(B,["In palestra"],["Come si tratta"]);
    return L.map(b=>b.h==="Come si tratta"?Object.assign({},b,{h:"Come si tratta con le mani"}):b);
  }
  return B;
};

/* scelta del profilo: in home e nel mio studio */
function cardProfilo(compatta){
  const btn=(k)=>'<button class="btn'+(PROFILO===k?' primary':'')+'" data-act="profilo" data-id="'+k+'" style="flex-direction:column;align-items:flex-start;gap:2px;text-align:left"><b>'+PROFILI[k].n+'</b><span style="font-size:12px;font-weight:400;opacity:.8">'+PROFILI[k].d+'</span></button>';
  if(compatta && PROFILO) return '<p style="font-size:12.5px;color:var(--faint);margin:0 0 14px">Profilo: <b>'+PROFILI[PROFILO].n.toLowerCase()+'</b> · <button class="chip" data-act="profilo" data-id="'+(PROFILO==="mani"?"allena":"mani")+'">passa a «'+PROFILI[PROFILO==="mani"?"allena":"mani"].n.toLowerCase()+'»</button></p>';
  return '<div class="card" style="margin-bottom:18px;gap:8px"><span class="eyebrow">Come lavori?</span><h3 style="margin:0">Stesso corpo, due modi di usarlo</h3>'+
    '<p style="margin:0">Scegli il profilo: i contenuti sono gli stessi, cambiano l\'ordine delle porte e che cosa viene prima nelle schede. Puoi cambiarlo quando vuoi.</p>'+
    '<div class="acts" style="flex-wrap:wrap">'+btn("mani")+btn("allena")+'</div></div>';
}
const _vistaHome_conProfilo = vistaHome;
vistaHome = function(){ return cardProfilo(true) + _vistaHome_conProfilo(); };
const _vistaStudio_conProfilo = vistaStudio;
vistaStudio = function(){ return _vistaStudio_conProfilo() + '<div class="seg" style="margin:18px 0 10px">Il tuo profilo</div>' + cardProfilo(false); };
document.addEventListener("click",function(e){
  const a=e.target.closest('[data-act="profilo"]'); if(!a) return;
  PROFILO=a.getAttribute("data-id"); save("profilo",PROFILO); applicaProfilo(); if(typeof render==="function") render();
});
</script>
