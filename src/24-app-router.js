<style>
.figsvg{width:100%;max-width:270px;height:auto}
.fig>*{fill:var(--figure);stroke:none}
.fig .limb{fill:none;stroke:var(--figure);stroke-linecap:round;stroke-linejoin:round}
.mus{fill:none;stroke:var(--muscle);stroke-linecap:round;stroke-linejoin:round;opacity:.42;transition:opacity .18s,stroke-width .18s}
.mus.on{opacity:1}
.hit{fill:none;stroke:transparent;stroke-linecap:round;cursor:pointer}
.hit:hover+.mus,.mus:hover{opacity:.85}
svg g:hover>.mus{opacity:.85}
.chain{fill:none;stroke-width:3.4;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:6 5;animation:scorri 3.2s linear infinite}
@keyframes scorri{to{stroke-dashoffset:-44}}
.plumb{stroke:var(--fascia);stroke-width:1;stroke-dasharray:3 4;fill:none}
.node circle{fill:var(--fascia)}
@media (prefers-reduced-motion:reduce){.chain{animation:none}}
</style>
<script>
/* =========================================================
   NAVIGAZIONE E AVVIO
   ========================================================= */
function vai(rotta){ location.hash="#/"+rotta; }

function render(){
  const h=(location.hash||"#/home/").replace(/^#\//,"");
  const p=h.split("/"); const v=p[0]||"home"; const a=decodeURIComponent(p[1]||"");
  S.view=v; S.arg=a; S.id = KINDS[v]? a : null;
  const page=$("#page");
  let html="";
  if(v==="home") html=vistaHome();
  else if(v==="lista") html=vistaLista(KINDS[a]?a:"problema");
  else if(v==="atlante") html=vistaAtlante(a);
  else if(v==="studio") html=vistaStudio();
  else if(v==="quiz") html=vistaQuiz();
  else if(v==="tavole") html=vistaTavole(a);
  else if(v==="consulto") html=vistaConsulto(a);
  else if(KINDS[v]) html=vistaScheda(v,a);
  else html=vistaHome();
  page.innerHTML=html;
  window.scrollTo({top:0,behavior:"instant"in window?"instant":"auto"});
  evidenzia();
  const titoli={consulto:"Consulto",tavole:"Tavole dei muscoli",lista:(PORTE.find(x=>x.k===a)||{}).n||"Elenco",atlante:"Atlante del corpo",studio:"Il mio studio",quiz:"Quiz"};
  document.title = (v==="home") ? "Tavola Viva"
    : ((KINDS[v] ? nomeOf(a) : (titoli[v]||"Tavola Viva")) + " · Tavola Viva");
}

/* ---------- eventi globali ---------- */
document.addEventListener("click",function(e){
  const go=e.target.closest("[data-go]");
  if(go){ vai(go.getAttribute("data-go")); return; }

  const osso=e.target.closest("[data-osso]");
  if(osso){ vai("osso/"+osso.getAttribute("data-osso")); return; }

  const hit=e.target.closest("[data-mid]");
  if(hit){ vai("muscolo/"+hit.getAttribute("data-mid")); return; }

  const q=e.target.closest("[data-q]");
  if(q){
    const t=q.getAttribute("data-q");
    if(t==="clear") svuotaCoda();
    else if(t==="del") togliDaCoda(q.getAttribute("data-id"));
    else if(t==="play"){ VOCE.i=parseInt(q.getAttribute("data-i"),10); riproduci(); disegnaCoda(); }
    return;
  }

  const opz=e.target.closest("[data-opz]");
  if(opz && QZ && !QZ.risposto){
    const q2=QZ.dom[QZ.i], scelta=q2.opz[parseInt(opz.getAttribute("data-opz"),10)];
    QZ.risposto=true;
    const giusta = scelta===q2.ok;
    if(giusta) QZ.giuste++;
    document.querySelectorAll("#opz .btn").forEach(b=>{
      const txt=b.textContent;
      if(txt===q2.ok){ b.style.borderColor="var(--ok)"; b.style.background="color-mix(in srgb,var(--ok) 14%,transparent)"; }
      else if(b===opz){ b.style.borderColor="var(--muscle)"; b.style.opacity=".7"; }
      b.disabled=true;
    });
    $("#esito").innerHTML='<div style="margin-top:14px;display:flex;gap:10px;align-items:center;flex-wrap:wrap">'+
      '<b style="color:'+(giusta?"var(--ok)":"var(--muscle)")+'">'+(giusta?"Esatto.":"Non ci siamo.")+'</b>'+
      '<button class="btn sm" data-go="'+q2.rif+'">Apri la scheda</button>'+
      '<button class="btn primary sm" data-act="quiz-next" style="margin-left:auto">Avanti →</button></div>';
    return;
  }

  const act=e.target.closest("[data-act]");
  if(act){
    const a=act.getAttribute("data-act"), id=act.getAttribute("data-id"), kind=act.getAttribute("data-kind");
    if(a==="ascolta"){ accoda(kind,id,nomeOf(id),true); }
    else if(a==="coda"){ if(inCoda(id)) togliDaCoda(id); else accoda(kind,id,nomeOf(id),false); render(); }
    else if(a==="salva"){
      const k=S.saved.indexOf(id); if(k<0) S.saved.push(id); else S.saved.splice(k,1);
      save("saved",S.saved); render();
    }
    else if(a==="fatto"){
      const k=S.done.indexOf(id); if(k<0) S.done.push(id); else S.done.splice(k,1);
      save("done",S.done); render();
    }
    else if(a==="reset-done"){ S.done=[]; save("done",S.done); render(); }
    else if(a==="apri-coda"){ mostraPlayer(); disegnaCoda(); $("#queue").hidden=false; }
    else if(a==="cons-go"){ const q=($("#cons-q")||{}).value||""; if(q.trim()) vai("consulto/"+encodeURIComponent(q.trim())); }
    else if(a==="cons-leggi"){ consLeggi(); }
    else if(a==="quiz-new"){ nuovoQuiz(); render(); }
    else if(a==="quiz-next"){ QZ.i++; QZ.risposto=false; render(); }
    return;
  }

  if(!e.target.closest(".search")) $("#res").hidden=true;
});

/* barra in alto */
$("#home-btn").addEventListener("click",()=>vai("home/"));
$("#me-btn").addEventListener("click",()=>vai("studio/"));
$("#queue-btn").addEventListener("click",()=>{
  mostraPlayer(); disegnaCoda();
  const q=$("#queue"); q.hidden=!q.hidden;
});
$("#theme-btn").addEventListener("click",()=>{
  const cur=document.documentElement.getAttribute("data-theme");
  const scuro = cur ? cur==="dark" : matchMedia("(prefers-color-scheme: dark)").matches;
  document.documentElement.setAttribute("data-theme", scuro?"light":"dark");
  save("tema", scuro?"light":"dark");
});

/* ricerca */
const qi=$("#q"), res=$("#res");
qi.addEventListener("input",()=>{
  const r=cerca(qi.value);
  if(!r.length){ res.hidden=true; return; }
  res.innerHTML=r.map(x=>'<button data-go="'+x.kind+'/'+x.id+'"><span class="k">'+KINDS[x.kind].label+'</span><span>'+esc(x.nome)+'</span></button>').join("");
  res.hidden=false;
});
qi.addEventListener("keydown",e=>{
  if(e.key==="Escape"){ res.hidden=true; qi.blur(); }
  if(e.key==="Enter"){ const b=res.querySelector("button"); if(b){ b.click(); qi.value=""; res.hidden=true; qi.blur(); } }
});
res.addEventListener("click",()=>{ qi.value=""; res.hidden=true; });

/* lettore */
$("#p-play").addEventListener("click",pausaRiprendi);
$("#p-next").addEventListener("click",avanti);
$("#p-prev").addEventListener("click",indietro);
$("#p-close").addEventListener("click",()=>{ stop(); nascondiPlayer(); });
$("#p-open").addEventListener("click",()=>{ const t=VOCE.coda[VOCE.i]; if(t) vai(t.kind+"/"+t.id); });
$("#p-rate").addEventListener("click",()=>{
  const scala=[0.8,0.9,1,1.1,1.25,1.5];
  S.rate = scala[(scala.indexOf(S.rate)+1)%scala.length];
  save("rate",S.rate); disegnaPlayer();
  if(VOCE.attivo && !VOCE.pausa){ speechSynthesis.cancel(); parlaFrase(); }
});

/* scorciatoie da tastiera */
document.addEventListener("keydown",e=>{
  if(e.target.id==="cons-q" && e.key==="Enter" && !e.shiftKey){ e.preventDefault(); const q=e.target.value.trim(); if(q) vai("consulto/"+encodeURIComponent(q)); return; }
  if(e.target.tagName==="INPUT"||e.target.tagName==="TEXTAREA") return;
  if(e.key===" "&&VOCE.coda.length){ e.preventDefault(); pausaRiprendi(); }
  if(e.key==="/"){ e.preventDefault(); qi.focus(); }
});

document.addEventListener("mouseover",e=>{
  const c=e.target.closest("[data-hl]"); if(!c) return;
  document.querySelectorAll(".mdraw.hl").forEach(n=>n.classList.remove("hl"));
  document.querySelectorAll('.mdraw[data-mid="'+c.getAttribute("data-hl")+'"]').forEach(n=>n.classList.add("hl"));
});
document.addEventListener("mouseout",e=>{
  const c=e.target.closest("[data-hl]"); if(!c) return;
  document.querySelectorAll(".mdraw.hl").forEach(n=>n.classList.remove("hl"));
});
window.addEventListener("hashchange",render);

/* ---------- avvio ---------- */
(function init(){
  const tema=load("tema",null);
  if(tema) document.documentElement.setAttribute("data-theme",tema);
  buildIndex();
  buildTermini();
  aggiornaBadge();
  if(VOCE.coda.length){ mostraPlayer(); disegnaPlayer(); }
  if(window.speechSynthesis && speechSynthesis.getVoices().length===0){
    speechSynthesis.onvoiceschanged=()=>{};
  }
  if(!location.hash) location.hash="#/home/";
  render();
})();
</script>
