<style>
.crumbs .indietro{font-weight:700;color:var(--ink);display:inline-flex;align-items:center;gap:4px}
.crumbs .indietro::before{content:"←";font-size:14px}
</style>
<script>
/* =========================================================
   INDIETRO — un tasto per tornare alla scheda precedente senza passare dalla home.
   L'app tiene la propria storia delle pagine (anche nell'app installata, dove il
   tasto indietro del browser non c'e'); si salva nella sessione, cosi' sopravvive
   a un ricaricamento.
   ========================================================= */
let STORIA=(function(){ try{ const v=JSON.parse(sessionStorage.getItem("tv.storia")||"[]"); return Array.isArray(v)?v:[]; }catch(e){ return []; } })();
function storiaSalva(){ try{ sessionStorage.setItem("tv.storia",JSON.stringify(STORIA.slice(-50))); }catch(e){} }
function storiaAggiungi(){
  const h=location.hash||"#/home/";
  if(STORIA[STORIA.length-1]===h) return;      /* ridisegno della stessa pagina: non conta */
  STORIA.push(h); if(STORIA.length>50) STORIA.shift(); storiaSalva();
}
function storiaIndietro(){
  if(STORIA.length<2){ location.hash="#/home/"; return; }
  STORIA.pop();                                  /* la pagina attuale */
  const prev=STORIA.pop();                       /* quella prima: la rimette hashchange */
  storiaSalva();
  if(location.hash===prev) render(); else location.hash=prev;
}
window.addEventListener("hashchange",storiaAggiungi);
storiaAggiungi();

/* il tasto sta nella riga delle briciole, prima di Home, quando c'e' una pagina a cui tornare */
const _crumbs_conIndietro = crumbs;
crumbs = function(list){
  const h=_crumbs_conIndietro(list);
  if(STORIA.length<2) return h;
  const prev=STORIA[STORIA.length-2];
  let nome="Indietro";
  const m=(prev||"").replace(/^#\//,"").split("/"); const k=m[0], a=decodeURIComponent(m[1]||"");
  if(k==="home") nome="Indietro";
  else if(KINDS[k]&&a){ const n=nomeOf(a); if(n&&n!==a) nome=n.length>26? n.slice(0,24)+"…" : n; }
  else if(k==="lista"&&a){ const p=PORTE.find(x=>x.k===a); if(p) nome=p.n; }
  return h.replace('<nav class="crumbs">','<nav class="crumbs"><button class="indietro" data-act="indietro" title="Torna alla pagina precedente">'+esc(nome)+'</button><span class="sep">·</span>');
};
document.addEventListener("click",e=>{ const b=e.target.closest('[data-act="indietro"]'); if(!b) return; storiaIndietro(); });
/* da tastiera: Alt + freccia sinistra */
document.addEventListener("keydown",e=>{ if(e.altKey&&e.key==="ArrowLeft"&&e.target.tagName!=="INPUT"&&e.target.tagName!=="TEXTAREA"){ e.preventDefault(); storiaIndietro(); } });
</script>
