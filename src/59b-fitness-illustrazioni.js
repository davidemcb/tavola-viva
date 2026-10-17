<style>
.fit-hero{position:relative;overflow:hidden;border-radius:10px;margin:0 0 18px;padding:22px 22px 18px;background:linear-gradient(135deg,#0F1216 0%,#1B2026 60%,#23160F 100%);color:#F3F4F6;border-left:5px solid var(--muscle)}
.fit-hero h1{color:#fff;margin:6px 0 8px}
.fit-hero p{margin:0;max-width:58ch;color:#C9D0D6}
.fit-hero .eyebrow{color:var(--muscle)}
.fit-hero h1,.fit-hero p,.fit-hero .eyebrow{position:relative;z-index:1}
.fit-hero h1,.fit-hero p{max-width:min(58ch,64%)}
.fit-hero svg{position:absolute;right:-6px;bottom:-12px;width:min(34%,240px);height:auto;opacity:.95}
@media (max-width:900px){.fit-hero svg{opacity:.22;width:52%} .fit-hero h1,.fit-hero p{max-width:100%}}
.fit-ill{display:flex;align-items:center;justify-content:center;background:var(--surface-2);border:1px solid var(--line);border-radius:10px;padding:14px;margin-bottom:12px}
.fit-ill svg{width:100%;max-width:360px;height:auto}
html[data-profilo="allena"] .fit-ill{background:linear-gradient(135deg,var(--surface-2),var(--surface));border-left:3px solid var(--muscle)}
.fit-porta svg{width:34px;height:34px;display:block;margin-bottom:6px}
</style>
<script>
/* Illustrazioni fitness originali (vettoriali): attrezzi e figure, nei colori del tema. */
const FIT_ICONE = {
 bilanciere:'<svg viewBox="0 0 240 120" aria-hidden="true"><g fill="none" stroke="var(--ink)" stroke-width="5" stroke-linecap="round"><line x1="40" y1="60" x2="200" y2="60"/></g><g fill="var(--muscle)"><rect x="18" y="30" width="16" height="60" rx="3"/><rect x="36" y="22" width="16" height="76" rx="3"/><rect x="206" y="30" width="16" height="60" rx="3"/><rect x="188" y="22" width="16" height="76" rx="3"/></g><g fill="var(--joint)"><rect x="56" y="52" width="10" height="16" rx="2"/><rect x="174" y="52" width="10" height="16" rx="2"/></g></svg>',
 manubrio:'<svg viewBox="0 0 240 120" aria-hidden="true"><g fill="none" stroke="var(--ink)" stroke-width="7" stroke-linecap="round"><line x1="76" y1="60" x2="164" y2="60"/></g><g fill="var(--muscle)"><rect x="38" y="30" width="18" height="60" rx="4"/><rect x="58" y="22" width="18" height="76" rx="4"/><rect x="184" y="30" width="18" height="60" rx="4"/><rect x="164" y="22" width="18" height="76" rx="4"/></g></svg>',
 kettlebell:'<svg viewBox="0 0 240 120" aria-hidden="true"><g fill="none" stroke="var(--ink)" stroke-width="7" stroke-linecap="round"><path d="M96 46c0-24 48-24 48 0"/></g><circle cx="120" cy="80" r="32" fill="var(--muscle)"/><circle cx="110" cy="70" r="7" fill="#fff" opacity=".35"/></svg>',
 panca:'<svg viewBox="0 0 240 120" aria-hidden="true"><rect x="40" y="52" width="150" height="14" rx="4" fill="var(--muscle)"/><g fill="none" stroke="var(--ink)" stroke-width="6" stroke-linecap="round"><line x1="60" y1="66" x2="60" y2="100"/><line x1="170" y1="66" x2="170" y2="100"/><line x1="44" y1="100" x2="76" y2="100"/><line x1="154" y1="100" x2="186" y2="100"/><line x1="200" y1="20" x2="200" y2="100"/><line x1="186" y1="32" x2="214" y2="32"/></g><g fill="var(--joint)"><rect x="176" y="24" width="8" height="16" rx="2"/><rect x="208" y="24" width="8" height="16" rx="2"/></g></svg>',
 sbarra:'<svg viewBox="0 0 240 120" aria-hidden="true"><g fill="none" stroke="var(--ink)" stroke-width="7" stroke-linecap="round"><line x1="40" y1="24" x2="200" y2="24"/><line x1="52" y1="24" x2="52" y2="100"/><line x1="188" y1="24" x2="188" y2="100"/></g><g fill="none" stroke="var(--muscle)" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"><path d="M98 26v18M142 26v18"/><circle cx="120" cy="54" r="9" fill="var(--muscle)"/><path d="M98 44c10 6 34 6 44 0v24c-6 8-38 8-44 0z" fill="var(--muscle)"/><path d="M106 66l-6 30M134 66l6 30"/></g></svg>',
 cavo:'<svg viewBox="0 0 240 120" aria-hidden="true"><g fill="none" stroke="var(--ink)" stroke-width="6" stroke-linecap="round"><line x1="60" y1="12" x2="60" y2="108"/><line x1="60" y1="22" x2="150" y2="70"/></g><rect x="40" y="44" width="40" height="40" rx="4" fill="var(--joint)"/><g fill="none" stroke="var(--muscle)" stroke-width="8" stroke-linecap="round"><path d="M150 70c14 0 22 6 22 14h-30"/></g></svg>',
 corpo:'<svg viewBox="0 0 240 120" aria-hidden="true"><g fill="none" stroke="var(--muscle)" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"><circle cx="120" cy="24" r="10" fill="var(--muscle)"/><path d="M120 36v36"/><path d="M120 44l-28 16M120 44l28 16"/><path d="M120 72l-24 30M120 72l24 30"/></g><g fill="none" stroke="var(--ink)" stroke-width="5" stroke-linecap="round"><line x1="56" y1="108" x2="184" y2="108"/></g></svg>',
 macchina:'<svg viewBox="0 0 240 120" aria-hidden="true"><g fill="none" stroke="var(--ink)" stroke-width="6" stroke-linecap="round"><line x1="50" y1="100" x2="190" y2="100"/><line x1="70" y1="100" x2="70" y2="40"/><line x1="70" y1="40" x2="120" y2="40"/><line x1="150" y1="100" x2="150" y2="60"/></g><rect x="56" y="44" width="52" height="22" rx="4" fill="var(--muscle)"/><rect x="134" y="52" width="30" height="36" rx="4" fill="var(--joint)"/></svg>',
 atleta:'<svg viewBox="0 0 260 200" aria-hidden="true"><g fill="none" stroke="#fff" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"><circle cx="150" cy="46" r="14" fill="#fff"/><path d="M150 64v46"/><path d="M98 54h104" stroke="var(--muscle)"/><path d="M150 72l-44-14M150 72l44-14"/><path d="M150 110l-36 30 10 44M150 110l36 30-10 44"/></g><g fill="var(--muscle)"><rect x="80" y="38" width="12" height="32" rx="3"/><rect x="66" y="42" width="12" height="24" rx="3"/><rect x="208" y="38" width="12" height="32" rx="3"/><rect x="222" y="42" width="12" height="24" rx="3"/></g></svg>'
};
function fitIconaPer(it){
  const a=(it.attrezzo||"").toLowerCase();
  if(/kettlebell/.test(a)&&!/bilanciere/.test(a)) return "kettlebell";
  if(/sbarra|parallele|lat machine/.test(a)) return "sbarra";
  if(/macchina|leg press/.test(a)) return "macchina";
  if(/cavo|elastico/.test(a)&&!/bilanciere|manubri/.test(a)) return "cavo";
  if(/panca/.test(a)&&!/bilanciere|manubri/.test(a)) return "panca";
  if(/bilanciere/.test(a)) return "bilanciere";
  if(/manubri/.test(a)) return "manubrio";
  return "corpo";
}
/* illustrazione in testa a ogni scheda esercizio */
const _visual_conFitness = visual;
visual = function(kind,it){
  if(kind!=="esercizio") return _visual_conFitness(kind,it);
  return '<div class="fit-ill" title="'+esc(it.attrezzo||"")+'">'+FIT_ICONE[fitIconaPer(it)]+'</div>' + _visual_conFitness(kind,it);
};
/* fascia d'apertura nella home del profilo «alleno» */
const _vistaHome_conFitness = vistaHome;
vistaHome = function(){
  const h=_vistaHome_conFitness();
  if(PROFILO!=="allena") return h;
  const hero='<section class="fit-hero"><span class="eyebrow">Per chi allena</span><h1 style="font-size:clamp(26px,5.2vw,40px)">Capire perché il cliente non riesce. Sapere cosa fargli fare in palestra.</h1>'+
    '<p>Squat, stacco, panca e trazioni spiegati muscolo per muscolo. I problemi del cliente, con il blocco «In palestra». Test, trigger point e postura. Tutto da leggere o ascoltare, con ogni nome cliccabile.</p>'+FIT_ICONE.atleta+'</section>';
  const k=h.indexOf('<section style="margin-bottom:22px">');
  return k<0? hero+h : h.slice(0,k)+hero+h.slice(k);
};
/* icone degli attrezzi nelle carte della lista esercizi */
const _vistaLista_conFitness = vistaLista;
vistaLista = function(k){
  const h=_vistaLista_conFitness(k);
  if(k!=="esercizio") return h;
  return h.replace(/<button class="card" data-go="esercizio\/([a-z0-9-]+)" style="gap:3px">/g,(m,id)=>{ const it=DB.esercizi_schede.find(e=>e.id===id); return '<button class="card fit-porta" data-go="esercizio/'+id+'" style="gap:3px">'+(it?FIT_ICONE[fitIconaPer(it)]:""); });
};
</script>
