<style>
.toast{position:fixed;left:50%;bottom:calc(84px + env(safe-area-inset-bottom,0px));transform:translateX(-50%);background:var(--ink);color:var(--paper);padding:9px 14px;border-radius:999px;font-size:13px;z-index:300;box-shadow:var(--shadow);opacity:0;transition:opacity .2s}
.toast.on{opacity:1}
</style>
<script>
/* =========================================================
   CONDIVIDI — ogni scheda ha un indirizzo e si manda con un tocco.
   ========================================================= */
function urlScheda(kind,id){
  const base=location.href.split("#")[0];
  return base+"#/"+kind+"/"+id;
}
function toast(msg){
  let t=document.querySelector(".toast"); if(!t){ t=el("div","toast"); document.body.appendChild(t); }
  t.textContent=msg; requestAnimationFrame(()=>t.classList.add("on"));
  clearTimeout(t._h); t._h=setTimeout(()=>t.classList.remove("on"),2200);
}
async function condividi(kind,id){
  const r=anyById(id); if(!r) return;
  const nome=r.item.nome||r.item.voce;
  const url=urlScheda(kind,id);
  const testo=nome+" — Tavola Viva, "+KINDS[kind].label.toLowerCase();
  if(navigator.share){
    try{ await navigator.share({title:nome,text:testo,url:url}); return; }catch(e){ if(e&&e.name==="AbortError") return; }
  }
  try{ await navigator.clipboard.writeText(url); toast("Link copiato: incollalo dove vuoi"); }
  catch(e){ prompt("Copia il link della scheda:",url); }
}
document.addEventListener("click",e=>{
  const b=e.target.closest("[data-act='condividi']"); if(!b) return;
  condividi(b.getAttribute("data-kind"),b.getAttribute("data-id"));
});
const _vistaScheda_conCondividi = vistaScheda;
vistaScheda = function(kind,id){
  return _vistaScheda_conCondividi(kind,id).replace(
    '<button class="btn'+((S.done.includes(id))?' on':'')+'" data-act="fatto"',
    '<button class="btn" data-act="condividi" data-kind="'+kind+'" data-id="'+id+'" title="Manda il link di questa scheda">⇪ Condividi</button>'+
    '<button class="btn'+((S.done.includes(id))?' on':'')+'" data-act="fatto"');
};
</script>
