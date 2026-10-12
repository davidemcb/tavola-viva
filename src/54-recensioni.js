<script>
/* =========================================================
   RECENSIONI (#/recensione/): modulo che invia la recensione via e-mail a Davide (FormSubmit),
   con consenso alla pubblicazione. Va DOPO 53-percorso-studio.js.
   ========================================================= */
const RECENSIONE_DEST="scuderidavide@libero.it";
let REC={inviata:false,errore:null,invio:false};
function vistaRecensione(){
  const stelle=[5,4,3,2,1].map(n=>'<label style="display:flex;gap:8px;align-items:center;cursor:pointer"><input type="radio" name="stelle" value="'+n+'"'+(n===5?' checked':'')+'> '+"★".repeat(n)+'<span style="color:var(--muted);font-size:12.5px">'+(n===5?"eccellente":n===4?"molto buona":n===3?"buona":n===2?"così così":"non mi è piaciuta")+'</span></label>').join("");
  if(REC.inviata) return crumbs([["Home","home/"],["Recensione",null]])+'<div class="card" style="gap:8px;align-items:flex-start"><span class="eyebrow">Grazie</span><h3>Recensione inviata</h3><p>Grazie per il tempo che hai dedicato. Se hai dato il consenso, potrà comparire sul sito con il tuo nome e la tua qualifica.</p><button class="btn sm" data-go="home/">Torna alla home</button></div>';
  return crumbs([["Home","home/"],["Recensione",null]])+
   '<h1 style="font-size:clamp(23px,5vw,32px);margin-bottom:6px">Dimmi che cosa ne pensi</h1>'+
   '<p style="margin:0 0 14px;color:var(--muted);max-width:62ch">Due minuti: che cosa ti è servito, che cosa manca, se la consiglieresti a un collega. Le recensioni vere aiutano chi deve decidere se usarla.</p>'+
   '<form id="rec-form" class="card" style="gap:12px;max-width:640px">'+
    '<label>Nome e cognome<br><input name="nome" required class="inp" style="width:100%" placeholder="Es. Maria Rossi"></label>'+
    '<label>Qualifica<br><select name="qualifica" class="inp" style="width:100%"><option>Allievo/a di massoterapia</option><option>Massoterapista</option><option>Massaggiatore/trice olistico/a</option><option>Fisioterapista</option><option>Osteopata</option><option>Posturologo/a</option><option>Personal trainer / chinesiologo</option><option>Altro</option></select></label>'+
    '<div><span style="display:block;margin-bottom:6px">Quanto ti è piaciuta?</span><div style="display:flex;flex-direction:column;gap:4px">'+stelle+'</div></div>'+
    '<label>La tua recensione<br><textarea name="recensione" required rows="5" class="inp" style="width:100%" placeholder="Che cosa ti ha aiutato di più? Che cosa manca? La consiglieresti?"></textarea></label>'+
    '<label>Città (facoltativo)<br><input name="citta" class="inp" style="width:100%"></label>'+
    '<label style="display:flex;gap:8px;align-items:flex-start"><input type="checkbox" name="consenso" value="sì" required style="margin-top:4px"><span style="font-size:13.5px">Acconsento alla pubblicazione della recensione sul sito e sui materiali di AnatomiaPratica con nome, qualifica e città.</span></label>'+
    (REC.errore?'<p style="color:var(--muscle);margin:0">'+esc(REC.errore)+'</p>':'')+
    '<div class="acts"><button class="btn primary" type="submit"'+(REC.invio?' disabled':'')+'>'+(REC.invio?"Invio in corso…":"Invia la recensione")+'</button>'+
    '<a class="btn sm" href="mailto:'+RECENSIONE_DEST+'?subject='+encodeURIComponent("Recensione AnatomiaPratica")+'">Preferisco scrivere una mail</a></div>'+
    '<p style="font-size:12px;color:var(--faint);margin:0">La recensione arriva per e-mail a Davide Scuderi (Kinesiologia Studio). Nessun dato viene salvato altrove.</p>'+
   '</form>';
}
document.addEventListener("submit",async function(e){
  const f=e.target.closest("#rec-form"); if(!f) return;
  e.preventDefault();
  const d=Object.fromEntries(new FormData(f).entries());
  d._subject="Recensione AnatomiaPratica · "+(d.nome||""); d._template="table"; d._captcha="false";
  REC.invio=true; REC.errore=null; render();
  try{
    const r=await fetch("https://formsubmit.co/ajax/"+RECENSIONE_DEST,{method:"POST",headers:{"Content-Type":"application/json","Accept":"application/json"},body:JSON.stringify(d)});
    const j=await r.json().catch(()=>({}));
    if(r.ok && (j.success==="true"||j.success===true)){ REC.inviata=true; }
    else REC.errore="Non sono riuscito a inviare. Riprova fra poco, oppure usa il pulsante della mail.";
  }catch(err){ REC.errore="Non sono riuscito a inviare (sei offline?). Riprova, oppure usa il pulsante della mail."; }
  REC.invio=false; render();
});
const _render_rec=render;
render=function(){
  const h=(location.hash||"#/home/").replace(/^#\//,""); const v=h.split("/")[0]||"home";
  if(v!=="recensione") return _render_rec();
  S.view=v; $("#page").innerHTML=vistaRecensione(); window.scrollTo({top:0}); document.title="Recensione · AnatomiaPratica";
};
const _vistaHome_rec=vistaHome;
vistaHome=function(){
  const h=_vistaHome_rec();
  const card='<button class="card" data-go="recensione/" style="gap:8px"><span class="eyebrow">Due minuti</span><h3>Lascia una recensione</h3><p>Che cosa ti è servito, che cosa manca, se la consiglieresti. Le recensioni vere aiutano chi deve decidere.</p></button>';
  const k=h.lastIndexOf('<div class="grid g2">');
  return k<0? h+'<div class="grid g2" style="margin-top:22px">'+card+'</div>' : h.slice(0,k)+'<div class="grid g2" style="margin-bottom:22px">'+card+'</div>'+h.slice(k);
};
const _vistaStudio_rec=vistaStudio;
vistaStudio=function(){ return _vistaStudio_rec()+'<div class="seg" style="margin:18px 0 10px">La tua opinione</div><p class="empty">Usi l\'app da un po\'? <button class="btn sm" data-go="recensione/">Lascia una recensione</button></p>'; };
if(/^#\/recensione\//.test(location.hash||"")) render();
</script>
