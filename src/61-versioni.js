<script>
/* =========================================================
   VERSIONI: Mani (chi lavora con le mani), Allena (chi allena), Completa.
   Chi ha Mani o Allena vede per intero il proprio lato e, al posto dei blocchi dell'altro lato,
   un richiamo «nella versione Completa» (con un assaggio: un esercizio, una riga di palestra).
   Nella versione a pagamento la versione arriva dal server (ACCESSO.me().utente.versione);
   sul sito gratuito è Completa, con anteprima da link: ?versione=mani oppure ?versione=allena.
   ========================================================= */
const VERSIONI={mani:{n:"Mani",d:"per chi lavora con le mani"},allena:{n:"Allena",d:"per chi allena"},completa:{n:"Completa",d:"tutti e due i lati"},demo:{n:"Demo",d:"due schede per tipo, tutte intere"}};
let VERSIONE=(function(){
  const me=window.ACCESSO&&ACCESSO.me&&ACCESSO.me();
  if(me&&me.utente) return VERSIONI[me.utente.versione]?me.utente.versione:"completa";
  const m=(location.search||"").match(/versione=(mani|allena|completa|demo)/); if(m){ save("versione",m[1]); return m[1]; }
  const v=load("versione",null); return VERSIONI[v]?v:"completa";
})();
const VERSIONE_BLOCCATA = VERSIONE==="mani"||VERSIONE==="allena";
const DEMO = VERSIONE==="demo";
if(VERSIONE_BLOCCATA){ PROFILO=VERSIONE; save("profilo",PROFILO); applicaProfilo(); }
document.documentElement.setAttribute("data-versione",VERSIONE);
const CONTATTO_COMPLETA='<a href="mailto:scuderidavide@libero.it?subject=AnatomiaPratica%20versione%20Completa">scrivi a Davide</a>';
const CSS_VERSIONI=document.createElement("style"); CSS_VERSIONI.textContent=
'.sblocca{border:1px dashed color-mix(in srgb,var(--muscle) 45%,var(--line));background:color-mix(in srgb,var(--muscle) 5%,transparent);border-radius:12px;padding:11px 14px}'+
'.sblocca .lbl{display:block;font-size:11px;letter-spacing:.08em;text-transform:uppercase;font-weight:700;color:var(--muscle);margin-bottom:4px}'+
'.sblocca p{margin:0;font-size:13.5px;color:var(--muted)}.sblocca a{color:var(--muscle);font-weight:600}'+
'html[data-versione="allena"] .sblocca{border-style:solid}';
document.head.appendChild(CSS_VERSIONI);

/* ---- i blocchi: cosa resta, cosa diventa richiamo ---- */
const _blocchi_conVersione = blocchi;
blocchi = function(kind,it){
  const B=_blocchi_conVersione(kind,it);
  if(!VERSIONE_BLOCCATA || !it) return B;
  const nome=(it.nome||it.voce||"").replace(/^«|»$/g,"");
  const S_=txt=>({t:"sblocca",txt:txt});
  const primaDelSegreto=(lista,blocco)=>{ let k=lista.findIndex(b=>b.t==="segreto"); if(k<0) k=lista.length; return lista.slice(0,k).concat([blocco],lista.slice(k)); };
  const dopo=(lista,titolo,blocco)=>{ const k=lista.findIndex(b=>b.h===titolo); return k<0?primaDelSegreto(lista,blocco):lista.slice(0,k+1).concat([blocco],lista.slice(k+1)); };
  if(VERSIONE==="allena"){
    /* i blocchi manuali li ha già tolti il profilo: qui si mette il richiamo al loro posto */
    if(kind==="muscolo") return dopo(B,"Come si palpa",S_("Sblocca «"+nome+"» per intero: come si tratta con le mani (manovre, direzione, profondità) e i suoi trigger point con il trattamento."));
    if(kind==="problema") return primaDelSegreto(B,S_("Sblocca «"+nome+"» per intero: come si tratta con le mani questo problema, in che ordine e con quali manovre, e i trigger point che lo alimentano."));
    if(kind==="trigger") return dopo(B,"Da fare a casa",S_("Sblocca «"+nome+"»: come si tratta questo punto con le mani (pressione, durata, cosa fare subito dopo)."));
    if(kind==="postura") return dopo(B,"Test da fare",S_("Sblocca «"+nome+"»: come si tratta questa postura con le mani, muscolo per muscolo."));
    if(kind==="catena") return primaDelSegreto(B,S_("Sblocca «"+nome+"»: come si tratta questa catena con le mani."));
    return B;
  }
  /* versione Mani: resta un esercizio semplice, il resto diventa richiamo */
  if(kind==="muscolo"){
    const via=["Come si allunga","Come si rinforza"]; if(!B.some(b=>via.includes(b.h))) return B;
    const k=B.findIndex(b=>via.includes(b.h)); const resto=B.filter(b=>!via.includes(b.h));
    const casa=resto.find(b=>b.h==="Da fare a casa"); if(casa) casa.h="Un esercizio da fare a casa";
    return resto.slice(0,k).concat([S_("Sblocca «"+nome+"» per intero: come si allunga, come si rinforza, le schede degli esercizi che lo coinvolgono e Fai scheda, il programma di 12 settimane costruito dai problemi del cliente.")],resto.slice(k));
  }
  if(kind==="problema"){
    const P=DB.palestra&&DB.palestra[it.id]; if(!P) return B;
    const assaggio={t:"dl",h:"In palestra (un assaggio)",voci:[["Cosa evitare finché c'è il problema",P.evita]]};
    return primaDelSegreto(primaDelSegreto(B,assaggio),S_("Sblocca «"+nome+"» per intero: cosa allenare, come adattare gli esercizi, quando non è lavoro da trainer, e Fai scheda per questo problema."));
  }
  if(kind==="esercizio"){
    const k=B.findIndex(b=>b.h==="Esecuzione"); if(k<0) return B;
    const seg=B.find(b=>b.t==="segreto");
    return B.slice(0,k+1).concat([S_("Sblocca «"+nome+"» per intero: errori frequenti e la loro causa, versioni più facili e più difficili, chi deve fare attenzione, i problemi collegati.")],seg?[seg]:[]);
  }
  return B;
};

/* ---- scelta del profilo: con la versione bloccata non si cambia ---- */
const _cardProfilo_conVersione = cardProfilo;
cardProfilo = function(compatta){
  if(!VERSIONE_BLOCCATA) return _cardProfilo_conVersione(compatta);
  const V=VERSIONI[VERSIONE];
  const altra = VERSIONE==="mani"
    ? "anche tutto il lato allenamento: In palestra in ogni problema, le schede degli esercizi per intero e Fai scheda"
    : "anche tutto il lato manuale: come si tratta in ogni muscolo e problema, trigger e tender point con il trattamento, posturologia con trattamento";
  if(compatta) return '<p style="font-size:12.5px;color:var(--faint);margin:0 0 14px">Versione <b>'+V.n+'</b> · la versione Completa ha '+altra+'. Per passare: '+CONTATTO_COMPLETA+'.</p>';
  return '<div class="card" style="margin-bottom:18px;gap:8px"><span class="eyebrow">La tua versione</span><h3 style="margin:0">'+V.n+' · '+V.d+'</h3><p style="margin:0">La versione <b>Completa</b> ha '+altra+'. Per passare: '+CONTATTO_COMPLETA+'.</p></div>';
};

/* ---- Fai scheda nella versione Mani: la pagina spiega e rimanda ---- */
const _vistaScheda_conVersione = vistaScheda;
vistaScheda = function(kind,id){
  if(VERSIONE==="mani" && kind==="allenamento"){
    return crumbs([["Home","home/"],["Fai scheda",null]])+'<h1 style="font-size:clamp(23px,5vw,32px);margin-bottom:10px">Fai scheda</h1>'+
      '<div class="sblocca" style="margin-bottom:14px"><span class="lbl">Nella versione Completa</span><p>Fai scheda prende i problemi del cliente (per esempio «dolore lombare al mattino» e «spalla anteposta»), il livello, l\'attrezzatura e i suoi dati, e costruisce una scheda di dodici settimane in tre fasi: esercizi giusti, versioni facili, cosa evitare, adattamenti per età e condizioni, da mandare su WhatsApp o stampare. Per passare alla Completa: '+CONTATTO_COMPLETA+'.</p></div>'+
      '<div class="card"><span class="eyebrow">Intanto</span><h3>Dal problema alla palestra, in due righe</h3><p>In ogni problema c\'è «In palestra (un assaggio)»: cosa evitare finché c\'è il problema. E in ogni muscolo c\'è un esercizio da fare a casa da consegnare al cliente.</p></div>';
  }
  return _vistaScheda_conVersione(kind,id);
};

/* ---- DEMO: si usa subito, due schede aperte per ogni tipo (più quelle in vetrina), le altre chiuse con il richiamo ---- */
const DEMO_VETRINA=["p-reggiseno","p-calzino","m-bicipite","m-trapezio","q-neer-hawkins","q-lasegue","tp-trapezio-sup","e-squat","e-stacco","post-spalle-anteposte","post-iperlordosi"];
const DEMO_PER_TIPO=2;
const DEMO_APERTE=(function(){ if(!DEMO) return null; const s=new Set(DEMO_VETRINA); for(const k in KINDS){ let db=[]; try{ db=KINDS[k].db()||[]; }catch(e){} db.slice(0,DEMO_PER_TIPO).forEach(x=>s.add(x.id)); } return s; })();
function demoAperta(id){ return !DEMO || DEMO_APERTE.has(id) || /^sa-/.test(id); }
const DEMO_PROVA='https://wa.me/393481514382?text='+encodeURIComponent("Ciao Davide, ho provato la demo di AnatomiaPratica e vorrei l'accesso completo per 24 ore.");
const DEMO_PREZZI=location.pathname.replace(/[^/]*$/,"")+"prova.html#prezzi";
function demoRichiamo(nome){
  return '<div class="sblocca demo-box"><span class="lbl">Scheda chiusa nella demo</span><p>'+(nome?'«'+esc(nome)+'» è una delle oltre 600 schede di AnatomiaPratica. ':'')+'Nella demo ne vedi due per ogni tipo, intere e con tutti i collegamenti. Per averle tutte: <a href="'+DEMO_PROVA+'" target="_blank" rel="noopener">prova gratis 24 ore</a> oppure <a href="'+DEMO_PREZZI+'">guarda i prezzi</a>, da 19 € al mese.</p></div>';
}
if(DEMO){
  CSS_VERSIONI.textContent+='.demo-box{margin:14px 0}.demo-box .lbl{color:var(--muscle)}.demo-box p{font-size:14.5px}[data-lock] h3:after,[data-lock] .t:after{content:" 🔒";font-size:.8em;opacity:.6}'+
    '.demo-bar{background:var(--muscle);color:#fff;font-size:13.5px;padding:8px 14px;text-align:center}.demo-bar a{color:#fff;font-weight:700;text-decoration:underline}';
  const _vistaScheda_demo = vistaScheda;
  vistaScheda = function(kind,id){
    if(demoAperta(id)) return _vistaScheda_demo(kind,id);
    const r=anyById(id); if(!r) return _vistaScheda_demo(kind,id);
    const it=r.item, nome=it.nome||it.voce; const porta=PORTE.find(p=>p.k===kind);
    const primo=renderBlocchi(blocchi(kind,it).filter(b=>b.t==="p"||b.t==="dl"||b.t==="lista").slice(0,1),id).html;
    return crumbs([["Home","home/"],[porta?porta.n:KINDS[kind].label,"lista/"+kind],[nome,null]])+
      '<article class="sheet"><div class="sheet-head"><span class="eyebrow">'+KINDS[kind].label+'</span><h1>'+esc(nome)+'</h1></div>'+
      (primo?'<div style="margin-top:14px">'+primo+'</div>':'')+
      '<p style="color:var(--faint);font-size:13px;margin:10px 0 0">… e poi tutto il resto: '+esc(blocchi(kind,it).filter(b=>b.h).map(b=>b.h.toLowerCase()).slice(1,7).join(", "))+(blocchi(kind,it).some(b=>b.t==="segreto")?", il segreto del mestiere":"")+'.</p>'+
      demoRichiamo(nome)+'</article>';
  };
  /* nelle liste e nelle pillole: le schede chiuse hanno il lucchetto */
  const _lock=html=>html.replace(/data-go="([a-z]+)\/([^"\/]+)"/g,(m,k,id)=>(KINDS[k]&&!demoAperta(id))?m+' data-lock="1"':m);
  const _vistaLista_demo = vistaLista; vistaLista = function(k){ return _lock(_vistaLista_demo(k)); };
  const _vistaScheda_lock = vistaScheda; vistaScheda = function(kind,id){ return _lock(_vistaScheda_lock(kind,id)); };
  const _vistaHome_demo = vistaHome;
  vistaHome = function(){ return '<div class="demo-bar" style="border-radius:10px;margin-bottom:14px">Stai usando la demo: due schede per tipo, intere. <a href="'+DEMO_PROVA+'" target="_blank" rel="noopener">Prova gratis 24 ore</a> · <a href="'+DEMO_PREZZI+'">prezzi</a></div>'+_vistaHome_demo(); };
  cardProfilo = function(compatta){ return _cardProfilo_conVersione(compatta); };
}
</script>
