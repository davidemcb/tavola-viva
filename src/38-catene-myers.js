<style>
.binario{display:grid;grid-template-columns:18px minmax(0,1fr);gap:0 12px;position:relative;margin:4px 0}
.binario::before{content:"";position:absolute;left:8px;top:10px;bottom:10px;width:2px;background:var(--line)}
.bin-st,.bin-tr{display:contents}
.bin-st .dot{width:18px;height:18px;border-radius:50%;background:var(--surface);border:3px solid var(--bone);box-sizing:border-box;position:relative;z-index:1;margin-top:3px}
.bin-tr .dot{width:18px;display:flex;justify-content:center;align-items:stretch}
.bin-tr .dot i{width:6px;border-radius:3px;background:var(--muscle);opacity:.55;min-height:28px;margin:2px 0}
.bin-st .lab{font-family:var(--mono);font-size:10.5px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);padding:4px 0 6px}
.bin-tr .lab{font-size:13.6px;padding:2px 0 10px}
.bin-tr .lab small{display:block;color:var(--faint);font-size:11px}
.catene-intro{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:8px;margin-bottom:16px}
.catene-intro .card{gap:3px;padding:12px 13px}
.catene-intro .sw{width:28px;height:4px;border-radius:2px;margin-bottom:4px}
</style>
<script>
/* =========================================================
   MERIDIANI MIOFASCIALI DI MYERS — completamento
   Dodicesima linea, binario stazione-per-stazione, muscoli aggiunti.
   ========================================================= */
DB.catene.push({
 id:"c-funzionale-omo",nome:"Linea Funzionale Omolaterale",sigla:"IFL",colore:"#B4487E",mirror:true,
 path:"M78,88 L84,140 L84,180 L82,206 L80,296 L84,310",
 stazioni:["Omero (solco bicipitale)","Ultime tre coste","Spina iliaca antero-superiore","Condilo tibiale mediale"],
 tratti:["Gran dorsale (fibre laterali)","Obliquo esterno (fibre posteriori)","Sartorio"],
 muscoli:["m-gran-dorsale","m-obliqui","m-sartorio"],
 funzione:"Collega il braccio alla gamba dello stesso lato lungo il fianco: è la linea del nuotatore a stile libero e di chi lancia con lo slancio di tutto il corpo. Stabilizza il tronco quando un braccio tira e la gamba omolaterale spinge.",
 valutazione:"In piedi, braccio sollevato e gamba dello stesso lato in appoggio: osserva se il fianco si allunga in modo uniforme o si spezza a livello delle ultime coste o della SIAS.",
 trattamento:"Piega ascellare posteriore, fianco sulle ultime coste, obliquo esterno, origine del sartorio alla SIAS.",
 segreto:"È la meno conosciuta delle dodici, ma spiega il dolore al fianco di chi nuota e il dolore alla SIAS di chi tira di scherma o lancia con il corpo. Quando un dolore laterale al tronco non è né quadrato dei lombi né intercostali, pensa a questa diagonale verticale."
});
DB.immagini["c-funzionale-omo"]=["Gray409","Gray392","Gray430"];

/* muscoli aggiunti nelle parti 5-7: appartenenza alle linee */
const _agg=(cid,ids)=>{ const c=DB.catene.find(x=>x.id===cid); if(!c) return; ids.forEach(i=>{ if(anyById(i)&&c.muscoli.indexOf(i)<0) c.muscoli.push(i); }); };
_agg("c-sbl",["m-semispinale","m-intrinseci-piede","m-popliteo"]);
_agg("c-sfl",["m-estensori-dita-piede","m-sartorio","m-sopraioidei","m-sottoioidei"]);
_agg("c-laterale",["m-splenio","m-intercostali","m-rotatori-anca"]);
_agg("c-spirale",["m-splenio","m-dentato-post"]);
_agg("c-profonda",["m-lungo-collo","m-sopraioidei","m-sottoioidei","m-pettineo","m-rotatori-anca","m-flessori-dita-piede","m-pavimento-pelvico","m-trasverso-torace","m-psoas-minore-iliaco","m-popliteo"]);
_agg("c-braccio-ant-sup",["m-flessori-polso","m-flessori-dita","m-pronatori","m-intrinseci-mano"]);
_agg("c-braccio-ant-prof",["m-coracobrachiale","m-brachiale","m-intrinseci-mano","m-succlavio"]);
_agg("c-braccio-post-sup",["m-estensori-polso","m-estensori-dita","m-brachioradiale","m-anconeo"]);
_agg("c-braccio-post-prof",["m-supinatore","m-intrinseci-mano"]);
_agg("c-funzionale-ant",["m-pettineo","m-gracile"]);

/* il binario: stazione ossea, tratto miofasciale, stazione ossea... come nel libro */
function binarioHTML(c){
  const st=c.stazioni||[], tr=c.tratti||[];
  let h='<div class="wg"><div class="wg-head"><span class="t">Il binario · '+esc(c.sigla||"")+' · dal basso verso l\'alto</span></div><div class="wg-body"><div class="binario">';
  const n=Math.max(st.length,tr.length+1);
  for(let i=0;i<n;i++){
    if(st[i]) h+='<div class="bin-st"><span class="dot"></span><div class="lab">'+autolink(esc(st[i]),null)+'</div></div>';
    if(tr[i]) h+='<div class="bin-tr"><span class="dot"><i></i></span><div class="lab">'+autolink(esc(tr[i]),null)+'<small>tratto miofasciale</small></div></div>';
  }
  h+='</div><p style="margin:8px 0 0;font-size:12px;color:var(--faint)">Cerchio = stazione ossea (dove la fascia si ancora). Barra = tratto miofasciale che corre fra due stazioni. Tocca i nomi per aprire le schede.</p></div></div>';
  return h;
}
const _visual_conBinario = visual;
visual = function(kind,it){ return _visual_conBinario(kind,it) + (kind==="catena" ? binarioHTML(it) : ""); };

/* elenco delle catene: una riga di presentazione con il colore di ciascuna linea */
const _vistaLista_conCatene = vistaLista;
vistaLista = function(k){
  const h=_vistaLista_conCatene(k);
  if(k!=="catena") return h;
  const intro='<div class="catene-intro">'+DB.catene.map(c=>'<button class="card" data-go="catena/'+c.id+'"><span class="sw" style="background:'+c.colore+'"></span>'+
    '<span class="eyebrow">'+esc(c.sigla||"")+' · '+(c.stazioni||[]).length+' stazioni</span><h3 style="font-size:15px">'+esc(c.nome)+'</h3>'+
    '<p style="font-size:12.5px">'+esc((c.funzione||"").split(".")[0])+'.</p></button>').join("")+'</div>'+
    '<div class="callout" style="margin-bottom:16px"><b>Le dodici linee di Myers</b>Quattro linee cardinali (Superficiale Posteriore, Superficiale Frontale, Laterale, Spirale), quattro linee del braccio, tre linee funzionali (Posteriore, Frontale, Omolaterale) e la Linea Profonda Frontale, il nucleo. La regola di Myers: la fascia passa da un muscolo all\'altro solo se le fibre mantengono la stessa direzione e la stessa profondità — per questo ogni linea è un «binario» continuo, e per questo un piede può cambiare una nuca.</div>';
  const i=h.indexOf('<section');
  return i>=0 ? h.slice(0,i)+intro+h.slice(i) : h+intro;
};
</script>
