<style>
.cons-box{background:var(--surface);border:1px solid var(--line);border-radius:14px;padding:16px;box-shadow:var(--shadow);display:flex;flex-direction:column;gap:10px}
.cons-box textarea{width:100%;min-height:96px;padding:12px 14px;border:1px solid var(--line);border-radius:11px;background:var(--surface-2);color:var(--ink);font:inherit;font-size:15px;line-height:1.5;resize:vertical}
.cons-box textarea:focus{outline:2px solid var(--fascia);border-color:transparent}
.cons-res{display:flex;flex-direction:column;gap:16px;margin-top:18px}
.cons-card{background:var(--surface);border:1px solid var(--line);border-radius:13px;padding:14px 16px;display:flex;flex-direction:column;gap:8px}
.cons-card h3{font-size:17px}
.cons-card .pct{font-family:var(--mono);font-size:10.5px;color:var(--faint);letter-spacing:.08em}
.cons-step{display:grid;grid-template-columns:22px 1fr;gap:8px;font-size:13.8px;align-items:start}
.cons-step i{font-family:var(--mono);font-style:normal;font-size:10.5px;color:var(--fascia);padding-top:3px}
.cons-step b{font-weight:600}
.cons-step small{display:block;color:var(--muted);margin-top:2px}
.rosso{border-color:color-mix(in srgb,var(--muscle) 50%,var(--line));background:color-mix(in srgb,var(--muscle) 7%,var(--surface))}
.rosso h3{color:var(--muscle)}
</style>
<script>
/* =========================================================
   CONSULTO — descrivi il problema, l'app dice cosa guardare.
   Ragiona sulle schede (problemi, muscoli, movimenti), senza rete.
   ========================================================= */
const CONS_SINONIMI = {
 "schiena":"lombare lombalgia colonna dorso","lombare":"lombalgia schiena","cervicale":"collo nuca","nuca":"collo cervicale sotto-occipitali",
 "sedere":"gluteo natica","natica":"gluteo","chiappa":"gluteo","polpaccio":"gastrocnemio soleo","coscia":"quadricipite ischiocrurali adduttori",
 "inguine":"anca adduttori psoas pube","fianco":"quadrato dei lombi obliqui","costole":"coste intercostali","petto":"pettorale torace sterno",
 "mascella":"mandibola massetere temporale","mandibola":"massetere pterigoidei atm","tempia":"temporale cefalea","testa":"cefalea cranio nuca",
 "tallone":"calcagno fascia plantare","pianta":"plantare fascia","caviglia":"tibio-tarsica peronei","alluce":"metatarso-falangea","dita":"mano piede",
 "mano":"polso tunnel carpale mediano ulnare","polso":"carpo tunnel","gomito":"epicondilo epitroclea","braccio":"spalla omero","spalla":"cuffia scapola",
 "scapola":"romboidi trapezio dentato","ginocchio":"rotula menisco femoro-rotulea","rotula":"femoro-rotulea quadricipite","anca":"coxo-femorale gluteo psoas",
 "formicolio":"nervo formicolii addormenta parestesie plesso","formicolii":"nervo addormenta","addormenta":"formicolio nervo","scossa":"nervo elettrico",
 "bruciore":"nervo brucia","intorpidita":"formicolio nervo","rigido":"rigidità limitazione","rigidita":"rigidità","bloccato":"blocco limitazione",
 "cede":"cedimento debolezza","debole":"debolezza forza","gonfio":"gonfiore versamento borsa","gonfia":"gonfiore","scatto":"click schiocco",
 "scale":"gradini salire scendere","sedia":"alzarsi seduto","letto":"notte girarsi","notte":"notturno dormire","dormire":"notte","pancia":"addome",
 "guidare":"auto volante retromarcia","auto":"guidare retromarcia","computer":"scrivania seduto postura","telefono":"smartphone testa protratta",
 "corsa":"correre corridore","correre":"corsa","camminare":"passo cammino","respiro":"respirare diaframma scaleni","fiato":"respiro diaframma",
 "vertigini":"vertigine sotto-occipitali","gira":"vertigine","piegarmi":"flessione","piegare":"flessione","alzare":"elevazione flessione",
 "girarmi":"rotazione","girare":"rotazione","ruotare":"rotazione","allacciare":"rotazione interna reggiseno","pettinarmi":"abduzione rotazione esterna",
 "calzino":"anca flessione","scarpe":"flessione anca calzino","accovacciarmi":"squat caviglia dorsiflessione","raccogliere":"accovacciarsi flessione",
 "mattino":"primo passo rigidità mattutina","mattina":"mattino","spalla alta":"asimmetria spalla","storto":"asimmetria scoliosi","asimmetrica":"asimmetria",
 "stretto":"tunnel compressione","pizzica":"nervo compressione","dolore":"dolente dolore","male":"dolore","fa male":"dolore"
};
/* Frasi che da sole dicono molto: si leggono prima delle singole parole, cosi' «a pancia in giu'»
   non diventa «pancia» + «giu'», e «in piedi fermo» non diventa «piedi». */
const CONS_FRASI = [
 [/pancia in giu|a pancia sotto|bocconi|prono|proni/, "prono pancia-in-giu estensione lombare iperlordosi faccette psoas"],
 [/pancia in su|supino|supina|sulla schiena/, "supino sulla-schiena gambe distese psoas"],
 [/sul fianco|su un fianco|su quel fianco|di fianco|di lato/, "fianco decubito-laterale trocantere spalla-sotto"],
 [/in piedi (fermo|ferma|a lungo|per molto|tanto|molto|per ore)|stare in piedi|sto in piedi|stando in piedi|in fila|alla cassa|al lavandino|ai fornelli|stiro|stirare/, "stare-in-piedi fermo estensione lombare iperlordosi faccette psoas glutei"],
 [/seduto|seduta|sedut[oa] a lungo|in ufficio|alla scrivania|in macchina|in auto/, "seduto scrivania flessione lombare disco"],
 [/alzarmi|alzarsi|quando mi alzo|tirarmi su/, "alzarsi seduto flessione estensione"],
 [/piegarmi in avanti|piegandomi|chinarmi|lavarmi i denti|lavandino/, "flessione in-avanti disco"],
 [/girarmi nel letto|girarmi di notte|cambiare posizione/, "girarsi letto notte rotazione"],
 [/salire le scale|salendo le scale|in salita/, "salire scale gradini"],
 [/scendere le scale|scendendo le scale|in discesa/, "scendere scale discesa gradini"],
 [/primo passo|primi passi|appena mi alzo dal letto|appena sveglio/, "primo-passo mattino rigidita"],
 [/sopra la testa|in alto|sulla mensola|pettinarmi/, "elevazione sopra-la-testa abduzione"],
 [/dietro la schiena|allacciare|reggiseno|dietro la nuca/, "rotazione-interna dietro-la-schiena"],
 [/un fianco piu alto|una spalla piu alta|storta|storto|asimmetric/, "asimmetria scoliosi atteggiamento"],
 [/mi cede|cede all'improvviso|mi manca|senza forza/, "cedimento debolezza"],
 [/dalla nuca|parte dalla nuca|dietro gli occhi|dietro l'occhio/, "cefalea nuca sotto-occipitali"],
 [/giu per la gamba|lungo la gamba|fino al piede|scende nella gamba|scende lungo/, "irradiazione sciatica gamba radice"],
 [/giu per il braccio|lungo il braccio|fino alla mano|scende nel braccio/, "irradiazione braccio radice cervicale"],
 [/dopo il parto|ho partorito|incinta|gravidanza/, "parto gravidanza bacino diastasi"]
];
/* Le parole con cui i clienti raccontano ogni quadro: pesano come la frase della scheda. */
const CONS_CHIAVI = {
 "p-reggiseno":"allacciare reggiseno dietro la schiena rotazione interna mano dietro grattarmi",
 "p-calzino":"calzino scarpe allacciare le scarpe piegare anca flessione tagliare le unghie dei piedi",
 "p-spalla-alta":"spalla piu alta asimmetria storto specchio fotografia postura",
 "p-pettinarsi":"pettinarmi piatti in alto mensola sopra la testa elevazione braccio",
 "p-retromarcia":"girarmi retromarcia guidare rotazione collo tronco specchietto",
 "p-alzarsi":"alzarmi dalla sedia alzarsi seduto divano auto blocco lombare schiena bassa",
 "p-accovacciarsi":"accovacciarmi raccogliere da terra squat caviglia ginocchio profondo",
 "p-mano-notte":"mano addormentata di notte formicolio dita pollice scuotere la mano tunnel carpale",
 "p-tallone":"tallone primo passo mattino pianta del piede fascite plantare",
 "p-stare-in-piedi":"stare in piedi fermo a lungo fila coda cassa lavandino cucina stirare blocco schiena bassa lombare estensione pancia in giu prono dormire a pancia in giu iperlordosi inarcare mi devo sedere piegarmi in avanti per stare meglio",
 "p-ginocchio-scale":"scendere le scale ginocchio davanti rotula discesa accovacciarmi seduto a lungo cinema",
 "p-cervicale-vertigini":"alzare lo sguardo gira la testa vertigine guardare in alto collo",
 "p-torcicollo":"collo bloccato svegliato torcicollo girare la testa colpo d'aria",
 "p-cefalea":"mal di testa nuca parte dalla nuca dietro gli occhi cefalea tensione",
 "p-braccio-sopra-testa":"dormire sul fianco spalla fa male di notte sopra la spalla alzare il braccio",
 "p-spalla-congelata":"spalla bloccata rigida tutte le direzioni congelata non va",
 "p-gomito-tennista":"gomito stringere sollevare presa epicondilite tennis mouse borsa della spesa",
 "p-mano-gonfia-mattino":"mani gonfie rigide mattino pugno dita rigidita mattutina",
 "p-formicolio-braccio":"braccio formicola mani in alto telefono asciugare i capelli zaino stretto toracico",
 "p-dito-scatto":"dito bloccato scatta piegato dito a scatto",
 "p-click-mandibola":"mandibola click mascella stanca mattino denti digrigno serro bruxismo bocca",
 "p-vertigine-collo":"instabilita barca ondeggio collo sbandamento",
 "p-sciatica":"gluteo gamba scende sciatica dietro la coscia polpaccio piede formicolio tossire starnutire",
 "p-crampi-polpaccio":"crampi polpaccio notte gambe pesanti",
 "p-caviglia-recidiva":"caviglia gira distorsione cede storta sempre",
 "p-pubalgia":"inguine correre calcio salire in auto pubalgia adduttori",
 "p-sacroiliaca":"sopra il sedere fossetta un lato sacro bacino alzarmi dalla sedia girarmi nel letto",
 "p-ginocchio-cede":"ginocchio cede manca instabile crociato",
 "p-dietro-ginocchio":"dietro il ginocchio discesa cisti popliteo",
 "p-anca-laterale-notte":"dormire sul fianco anca di lato trocantere lato esterno coscia sdraiarsi sul fianco salire le scale",
 "p-piede-piatto":"piede piatto appiattito caviglia cede verso l'interno arco",
 "p-scoliosi":"figlio figlia schiena storta fianco piu alto scoliosi gibbo adolescente",
 "p-dorso-curvo":"dorso curvo gobba fra le scapole brucia spalle in avanti computer",
 "p-costale":"fitta al fianco respirare a fondo girarmi costa costola intercostale",
 "p-torace-chiuso":"respiro corto torace chiuso peso sul petto ansia fiato",
 "p-alluce-valgo":"alluce storto cipolla scarpe strette",
 "p-pollice-base":"base del pollice barattolo aprire presa rizoartrosi",
 "p-colpo-frusta":"incidente tamponamento colpo di frusta collo rigido",
 "p-gambe-gonfie":"gambe gonfie pesanti sera caviglie gonfie",
 "p-stenosi":"camminando devo fermarmi piegarmi in avanti carrello riparto gambe pesanti camminare",
 "p-morton":"dita del piede bruciano sasso nella scarpa avampiede",
 "p-achille":"tendine d'achille rigido dolente mattino si scioglie dietro la caviglia",
 "p-coccige":"coccige seduto alzarmi osso sacro sedere cuscino",
 "p-strappo-polpaccio":"frustata polpaccio zoppico strappo scatto corsa",
 "p-ginocchio-gonfio":"ginocchio gonfio gonfiato versamento",
 "p-polso-appoggio":"polso appoggiarmi mano flessioni yoga spingere",
 "p-sotto-scapola":"sotto la scapola chiodo dolore fisso fra le scapole",
 "p-schiena-gravidanza":"incinta gravidanza schiena bacino pube",
 "p-diastasi":"dopo il parto pancia non tiene solco al centro diastasi addome"
};
const CONS_ROSSE = [
 [/febbre|brivid/,"Febbre o brividi insieme al dolore"],[/perdita di peso|dimagri/,"Perdita di peso non voluta"],
 [/incontinen|urin|vescica|intestin|sfinter|sella/,"Disturbi di vescica, intestino o sensibilità a sella: invio urgente"],
 [/trauma|caduta|caduto|incidente|frattur/,"Dolore dopo un trauma o una caduta: prima una valutazione medica"],
 [/caldo|rosso|arrossat|calda|rossa/,"Zona calda, rossa e gonfia: possibile infezione o trombosi"],
 [/entrambe le mani|tutte e due le mani|entrambe le gambe|tutte e due le gambe|bilateral/,"Sintomi su entrambi i lati: non è un problema locale"],
 [/costante|continuo|anche a riposo|non passa mai|sempre/,"Dolore costante, anche a riposo e di notte: va indagato"],
 [/forza|non riesco a tenere|cade dalla mano|cedimento|cade il piede/,"Perdita di forza: possibile sofferenza nervosa"],
 [/polpaccio.*(gonfi|dur|cald)|(gonfi|dur|cald).*polpaccio/,"Polpaccio gonfio, duro o caldo: escludere trombosi prima di qualsiasi massaggio"],
 [/vertigin.*(vista|parl|doppio)|(vista|parl|doppio).*vertigin/,"Vertigine con disturbi visivi o della parola: urgenza"]
];
function consNorm(s){
  return String(s||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9\s'-]/g," ");
}
function consTermini(testo){
  const base=consNorm(testo);
  let esp=base;
  CONS_FRASI.forEach(f=>{ if(f[0].test(base)) esp+=" "+f[1]; });
  Object.keys(CONS_SINONIMI).forEach(k=>{ if(base.indexOf(consNorm(k))>=0) esp+=" "+CONS_SINONIMI[k]; });
  const stop=new Set(["non","riesco","riesce","quando","sono","dello","della","delle","degli","con","per","che","una","uno","gli","del","dal","mi","si","ho","ha","il","la","le","lo","un","e","a","o","di","da","in","su","al","ai","mio","mia","molto","poco","sempre","anche","come","cosa","fare","fa","male","dolore",
    "mal","sto","sta","stai","sti","stare","stato","viene","vengo","venire","giu","poi","ogni","tutto","tutta","tutti","dopo","prima","volta","volte","anni","mesi","giorni","giorno","settimane","sento","senti","sentire","tanto","tanta","troppo","appena","verso","tipo","pero","perche","mentre","quasi","ancora","piu","meno","essere","devo","posso","puo","fatico","tengo","tiene","questo","questa","quello","quella","quel","suo","sua","nel","nella","alla","allo","sul","sulla","sulle","sui","ore","ora"]);
  const out={};
  consNorm(esp).replace(/-/g," ").split(/\s+/).forEach(w=>{ if(w.length<3||stop.has(w)) return; const r=w.length>6?w.slice(0,6):w; out[r]=(out[r]||0)+1; });
  return out;
}
function consScore(terms,testo,peso){
  const t=" "+consNorm(testo).replace(/[\s'-]+/g," ")+" "; let s=0;
  Object.keys(terms).forEach(r=>{ if(t.indexOf(" "+r)>=0) s+=peso*(1+Math.min(terms[r],2)*0.25); });
  return s;
}
function consAnalizza(testo){
  const terms=consTermini(testo);
  const base=consNorm(testo);
  const probl=DB.problemi.map(p=>{
    const corpo=[p.sintesi,p.zona,(p.gesto||[]).join(" "),(p.cause||[]).map(c=>c.t+" "+c.perche+" "+c.test).join(" ")].join(" ");
    return {p:p,s:consScore(terms,p.voce,3)+consScore(terms,CONS_CHIAVI[p.id]||"",2.5)+consScore(terms,corpo,1)};
  }).filter(x=>x.s>0).sort((a,b)=>b.s-a.s).slice(0,3);
  /* un'ipotesi che vale meno della meta' della prima e' rumore: meglio non mostrarla */
  if(probl.length>1){ const top=probl[0].s; for(let i=probl.length-1;i>0;i--) if(probl[i].s<top*0.55) probl.splice(i,1); }
  const musc=DB.muscoli.map(m=>({m:m,s:consScore(terms,m.trigger,2.2)+consScore(terms,(m.azioni||[]).join(" ")+" "+m.palpazione+" "+m.segreto,0.6)}))
    .filter(x=>x.s>0).sort((a,b)=>b.s-a.s).slice(0,6);
  const mov=DB.movimenti.map(v=>({v:v,s:consScore(terms,v.serve+" "+v.limite+" "+v.nome,1.2)})).filter(x=>x.s>0).sort((a,b)=>b.s-a.s).slice(0,4);
  const nervi=DB.nervi.map(n=>({n:n,s:consScore(terms,n.segno+" "+n.sensitivo,1.5)})).filter(x=>x.s>0).sort((a,b)=>b.s-a.s).slice(0,3);
  const rosse=CONS_ROSSE.filter(r=>r[0].test(base)).map(r=>r[1]);
  return {probl:probl,musc:musc,mov:mov,nervi:nervi,rosse:rosse,terms:terms};
}
function consUnici(liste){ const o=[]; liste.forEach(l=>l.forEach(x=>{ if(o.indexOf(x)<0) o.push(x); })); return o; }
function consHTML(testo){
  const r=consAnalizza(testo);
  const max=r.probl.length? r.probl[0].s : 1;
  let h='<div class="cons-res">';
  if(r.rosse.length) h+='<div class="cons-card rosso"><h3>Prima di tutto</h3><p style="margin:0;font-size:13.5px">Nel racconto ci sono segnali che vanno chiariti prima di trattare:</p>'+
     '<ul style="margin:0;padding-left:18px;font-size:13.5px">'+r.rosse.map(x=>'<li>'+esc(x)+'</li>').join("")+'</ul></div>';
  if(!r.probl.length && !r.musc.length) return h+'<div class="cons-card"><h3>Non ho trovato appigli</h3><p style="margin:0;font-size:13.5px;color:var(--muted)">Prova a dire <b>dove</b> fa male, <b>quale gesto</b> non riesce e <b>quando</b> peggiora (notte, scale, seduto, al mattino).</p></div></div>';
  r.probl.forEach((x,i)=>{
    const p=x.p, pct=Math.round(100*x.s/max);
    h+='<div class="cons-card"><span class="pct">Ipotesi '+(i+1)+' · affinità '+pct+'%</span><h3>'+esc(p.voce)+'</h3>'+
       '<p style="margin:0;font-size:13.5px;color:var(--muted)">'+esc(p.sintesi)+'</p>'+
       '<div class="seg" style="margin-top:4px">Cosa guardare e come verificarlo</div>'+
       (p.cause||[]).map((c,k)=>'<div class="cons-step"><i>'+(k+1)+'</i><div><b>'+esc(c.t)+'</b><small>'+esc(c.test)+'</small>'+
         (c.muscoli&&c.muscoli.length?'<div class="pills" style="margin-top:5px">'+c.muscoli.map(m=>pill(m)).join("")+'</div>':'')+'</div></div>').join("")+
       '<div class="seg" style="margin-top:4px">Che cosa trattare, in ordine</div>'+
       (p.trattamento||[]).map((t,k)=>'<div class="cons-step"><i>'+(k+1)+'</i><div>'+esc(t)+'</div></div>').join("")+
       '<div class="seg" style="margin-top:4px">Muscoli, articolazioni e catene in gioco</div><div class="pills">'+
         consUnici((p.cause||[]).map(c=>c.muscoli||[])).map(m=>pill(m)).join("")+
         consUnici((p.movimenti||[]).map(v=>{ const r=anyById(v); return r&&r.item.art? [r.item.art] : []; })).map(a=>pill(a)).join("")+
         (p.catene||[]).map(c=>pill(c)).join("")+'</div>'+
       '<div class="seg" style="margin-top:4px">Bandiere rosse di questo quadro</div><ul style="margin:0;padding-left:18px;font-size:13px;color:var(--muscle)">'+(p.rosse||[]).map(x=>'<li>'+esc(x)+'</li>').join("")+'</ul>'+
       '<div class="acts" style="margin-top:4px"><button class="btn sm primary" data-go="problema/'+p.id+'">Apri la scheda completa</button>'+
       '<button class="btn sm" data-act="ascolta" data-id="'+p.id+'" data-kind="problema">▶ Ascolta</button></div></div>';
  });
  if(r.musc.length) h+='<div class="cons-card"><h3>Muscoli che possono riferire dolore in questa zona</h3>'+
     r.musc.map(x=>'<div class="cons-step"><i>●</i><div><b>'+pill(x.m.id)+'</b><small>'+esc(x.m.trigger)+'</small></div></div>').join("")+'</div>';
  if(r.nervi.length) h+='<div class="cons-card"><h3>Se il quadro è nervoso</h3>'+
     r.nervi.map(x=>'<div class="cons-step"><i>●</i><div><b>'+pill(x.n.id)+'</b><small>'+esc(x.n.segno)+'</small></div></div>').join("")+'</div>';
  if(r.mov.length) h+='<div class="cons-card"><h3>Movimenti da misurare</h3><div class="scroller"><table class="tbl"><thead><tr><th>Movimento</th><th>Normale</th><th>Che cosa lo limita</th></tr></thead><tbody>'+
     r.mov.map(x=>'<tr><td>'+pill(x.v.id)+'</td><td class="mono">'+esc(x.v.range)+'</td><td style="color:var(--muted)">'+esc(x.v.limite)+'</td></tr>').join("")+'</tbody></table></div></div>';
  h+='<p style="font-size:12px;color:var(--faint);margin:0">Il consulto ragiona sulle schede dell\'app: è un aiuto per orientare la valutazione, non una diagnosi. Le decisioni cliniche restano tue.</p></div>';
  return h;
}
function vistaConsulto(arg){
  const q=arg? decodeURIComponent(arg) : "";
  const esempi=["Non riesco ad allacciarmi il reggiseno","Mi fa male il tallone al primo passo del mattino","Mi si addormenta la mano di notte",
    "Scendendo le scale mi fa male il ginocchio davanti","Ho una spalla più alta dell'altra","Mi gira la testa quando alzo lo sguardo"];
  return crumbs([["Home","home/"],["Consulto",null]])+
   '<h1 style="font-size:clamp(23px,5vw,32px);margin-bottom:6px">Consulto</h1>'+
   '<p style="margin:0 0 14px;color:var(--muted);max-width:64ch">Scrivi il problema con le parole del cliente: dove fa male, quale gesto non riesce, quando peggiora. L\'app ti dice che cosa guardare, quali test fare e quali muscoli possono c\'entrare.</p>'+
   '<div class="cons-box"><textarea id="cons-q" placeholder="Es. «Da due settimane mi fa male la parte bassa della schiena quando mi alzo dalla sedia, e di notte fatico a girarmi nel letto»">'+esc(q)+'</textarea>'+
   '<div class="acts"><button class="btn primary" data-act="cons-go">Analizza</button>'+
   (q?'<button class="btn" data-act="cons-leggi">▶ Leggi ad alta voce</button><button class="btn" data-go="consulto/">Nuova domanda</button>':'')+'</div>'+
   (q? '' : '<div class="seg" style="margin-top:4px">Prova con un esempio</div><div class="chips">'+esempi.map(e=>'<button class="chip sm" data-go="consulto/'+encodeURIComponent(e)+'">'+esc(e)+'</button>').join("")+'</div>')+'</div>'+
   (q? consHTML(q) : "");
}
function consLeggi(){
  const q=($("#cons-q")||{}).value||""; if(!q||!window.speechSynthesis) return;
  const r=consAnalizza(q); const frasi=[];
  if(r.rosse.length) frasi.push("Prima di tutto. "+r.rosse.join(". ")+".");
  r.probl.forEach((x,i)=>{ frasi.push("Ipotesi "+(i+1)+": "+x.p.voce.replace(/[«»]/g,"")+". "+x.p.sintesi);
    (x.p.cause||[]).forEach((c,k)=>frasi.push("Da guardare, "+(k+1)+": "+c.t+". Come si verifica: "+c.test));
    if((x.p.trattamento||[]).length) frasi.push("Che cosa trattare. "+x.p.trattamento.join(". ")+"."); });
  if(r.musc.length) frasi.push("Muscoli che possono riferire dolore in questa zona: "+r.musc.map(x=>x.m.nome).join(", ")+".");
  speechSynthesis.cancel();
  frasi.forEach(f=>{ const u=new SpeechSynthesisUtterance(f); const v=vocePreferita(); if(v) u.voice=v; u.lang="it-IT"; u.rate=S.rate; speechSynthesis.speak(u); });
}
</script>
