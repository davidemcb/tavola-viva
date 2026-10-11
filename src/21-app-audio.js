<script>
/* =========================================================
   VOCE E PLAYLIST — ogni scheda si legge o si ascolta.
   Più schede si accodano e si ascoltano di seguito, a mani libere.
   ========================================================= */
const VOCE = {
  coda: load("coda",[]),   // [{id,kind,titolo}]
  i: 0, frase: 0, frasi: [], attivo:false, pausa:false, lock:null,
  ok: ("speechSynthesis" in window)
};

/* ---------- testo da leggere per ogni tipo di scheda ---------- */
function racconto(kind,it){
  const L=[];
  const add=(t)=>{ if(t) L.push(String(t)); };
  if(kind==="muscolo"){
    add(it.nome+". "+(it.lat||"")+".");
    add("Origine. "+it.origine);
    add("Inserzione. "+it.inserzione);
    add("Innervazione. "+(it.nervi||[]).map(n=>nomeOf(n)).join(", ")+".");
    add("Vascolarizzazione. "+it.vascol);
    add("Azioni. "+(it.azioni||[]).join(". ")+".");
    add("Come si palpa. "+it.palpazione);
    add("Dolore riferito. "+it.trigger);
    add("In trattamento. "+it.massaggio);
    add("Il segreto. "+it.segreto);
  } else if(kind==="osso"){
    add(it.nome+". "+(it.lat||"")+". Regione: "+it.regione+".");
    add("Dove si trova. "+it.dove);
    add("Forma e funzione. "+it.forma);
    const mo=rel.muscoliDiOsso(it.id);
    if(mo.length) add("Muscoli collegati a quest'osso: "+mo.map(m=>m.nome).join(", ")+".");
    add("Il segreto. "+it.segreto);
  } else if(kind==="nervo"){
    add(it.nome+". "+(it.lat||"")+". Radici: "+it.radici+".");
    add("Origine. "+it.origine);
    add("Decorso. "+it.decorso);
    add("Funzione motoria. "+it.motorio);
    add("Territorio sensitivo. "+it.sensitivo);
    add("Segno di lesione. "+it.segno);
    add("Il segreto. "+it.segreto);
  } else if(kind==="articolazione"){
    add(it.nome+". Tipo: "+it.tipo+". Regione: "+it.regione+".");
    add("Superfici articolari. "+it.superfici);
    add("Legamenti. "+it.legamenti);
    add("Gradi di movimento. "+(it.rom||[]).map(r=>r[0]+": "+r[1]).join(". ")+".");
    add("Il segreto. "+it.segreto);
  } else if(kind==="movimento"){
    add(it.nome+". Piano "+it.piano+", asse "+it.asse+". Ampiezza normale: "+it.range+".");
    add("A cosa serve. "+it.serve);
    add("Agonisti: "+(it.agonisti||[]).map(nomeOf).join(", ")+".");
    if((it.sinergici||[]).length) add("Sinergici: "+it.sinergici.map(nomeOf).join(", ")+".");
    if((it.antagonisti||[]).length) add("Antagonisti: "+it.antagonisti.map(nomeOf).join(", ")+".");
    add("Che cosa lo limita. "+it.limite);
  } else if(kind==="problema"){
    add(it.voce);
    add(it.sintesi);
    add("Che cosa serve per fare questo gesto. "+(it.gesto||[]).join(". ")+".");
    (it.cause||[]).forEach((c,i)=>{
      add("Causa numero "+(i+1)+". "+c.t+". "+c.perche);
      add("Come si verifica. "+c.test);
    });
    add("Come si tratta. "+(it.trattamento||[]).join(". ")+".");
    add("Bandiere rosse, quando si invia dal medico. "+(it.rosse||[]).join(". ")+".");
    add("Il segreto. "+it.segreto);
  } else if(kind==="catena"){
    add(it.nome+", "+it.sigla+".");
    add("Stazioni ossee. "+(it.stazioni||[]).join(", ")+".");
    add("Tratti miofasciali. "+(it.tratti||[]).join(". ")+".");
    add("Funzione. "+it.funzione);
    add("Come si valuta. "+it.valutazione);
    add("Come si tratta. "+it.trattamento);
    add("Il segreto. "+it.segreto);
  } else if(kind==="postura"){
    add(it.nome+". "+it.descr);
    if((it.corti||[]).length) add("Muscoli tendenzialmente accorciati: "+it.corti.map(nomeOf).join(", ")+".");
    if((it.lunghi||[]).length) add("Muscoli tendenzialmente inibiti: "+it.lunghi.map(nomeOf).join(", ")+".");
    add(it.nota);
  }
  /* spezza in frasi leggibili */
  const out=[];
  const testo=L.join(" ");
  let buf="";
  for(let i=0;i<testo.length;i++){
    buf+=testo[i];
    if(".:;!?".indexOf(testo[i])>=0 && (i+1>=testo.length || testo[i+1]===" ")){
      const f=buf.trim(); if(f) out.push(f); buf="";
    }
  }
  if(buf.trim()) out.push(buf.trim());
  return out;
}

/* ---------- coda ---------- */
function codaSalva(){ save("coda",VOCE.coda); aggiornaBadge(); }
function aggiornaBadge(){
  const b=$("#queue-n"); if(!b) return;
  b.textContent=VOCE.coda.length; b.hidden = VOCE.coda.length===0;
}
function inCoda(id){ return VOCE.coda.some(t=>t.id===id); }
function accoda(kind,id,titolo,subito){
  if(!inCoda(id)) VOCE.coda.push({id:id,kind:kind,titolo:titolo});
  codaSalva();
  if(subito){ VOCE.i=VOCE.coda.findIndex(t=>t.id===id); riproduci(); }
  else if(!VOCE.attivo){ mostraPlayer(); disegnaPlayer(); }
  disegnaCoda();
  return true;
}
function togliDaCoda(id){
  const k=VOCE.coda.findIndex(t=>t.id===id); if(k<0) return;
  const era=VOCE.i;
  VOCE.coda.splice(k,1);
  if(k<era) VOCE.i--; else if(k===era){ stop(); }
  if(VOCE.i<0) VOCE.i=0;
  codaSalva(); disegnaCoda(); disegnaPlayer();
  if(!VOCE.coda.length) nascondiPlayer();
}
function svuotaCoda(){ stop(); VOCE.coda=[]; codaSalva(); disegnaCoda(); nascondiPlayer(); }

/* ---------- riproduzione ---------- */
function vocePreferita(){
  const v=speechSynthesis.getVoices()||[];
  return v.find(x=>/it[-_]IT/i.test(x.lang)&&/google|alice|federica|elsa/i.test(x.name))
      || v.find(x=>/^it/i.test(x.lang)) || null;
}
async function wakeLock(on){
  try{
    if(on && "wakeLock" in navigator && !VOCE.lock) VOCE.lock=await navigator.wakeLock.request("screen");
    if(!on && VOCE.lock){ VOCE.lock.release(); VOCE.lock=null; }
  }catch(e){}
}
function riproduci(){
  if(!VOCE.ok){ avvisoVoce(); return; }
  if(!VOCE.coda.length) return;
  if(VOCE.i>=VOCE.coda.length) VOCE.i=0;
  const t=VOCE.coda[VOCE.i], r=anyById(t.id);
  if(!r){ avanti(); return; }
  VOCE.frasi=racconto(r.kind,r.item); VOCE.frase=0;
  VOCE.attivo=true; VOCE.pausa=false;
  mostraPlayer(); wakeLock(true);
  speechSynthesis.cancel();
  parlaFrase();
}
function parlaFrase(){
  if(!VOCE.attivo) return;
  if(VOCE.frase>=VOCE.frasi.length){ avanti(); return; }
  const u=new SpeechSynthesisUtterance(VOCE.frasi[VOCE.frase]);
  const v=vocePreferita(); if(v) u.voice=v;
  u.lang="it-IT"; u.rate=S.rate; u.pitch=1;
  u.onend=()=>{ if(!VOCE.attivo||VOCE.pausa) return; VOCE.frase++; disegnaPlayer(); evidenzia(); parlaFrase(); };
  u.onerror=()=>{ if(VOCE.attivo&&!VOCE.pausa){ VOCE.frase++; parlaFrase(); } };
  speechSynthesis.speak(u);
  disegnaPlayer(); evidenzia();
}
function pausaRiprendi(){
  if(!VOCE.attivo){ riproduci(); return; }
  if(VOCE.pausa){ VOCE.pausa=false; speechSynthesis.resume(); wakeLock(true); }
  else { VOCE.pausa=true; speechSynthesis.pause(); wakeLock(false); }
  disegnaPlayer();
}
function stop(){ VOCE.attivo=false; VOCE.pausa=false; try{speechSynthesis.cancel();}catch(e){} wakeLock(false); evidenzia(); disegnaPlayer(); }
function avanti(){ if(VOCE.i<VOCE.coda.length-1){ VOCE.i++; riproduci(); } else { stop(); VOCE.i=0; disegnaCoda(); } }
function indietro(){
  if(VOCE.frase>3){ VOCE.frase=0; speechSynthesis.cancel(); parlaFrase(); return; }
  if(VOCE.i>0){ VOCE.i--; riproduci(); } else { VOCE.frase=0; speechSynthesis.cancel(); parlaFrase(); }
}
function evidenzia(){
  document.querySelectorAll(".s.speaking").forEach(n=>n.classList.remove("speaking"));
  if(!VOCE.attivo) return;
  const t=VOCE.coda[VOCE.i]; if(!t) return;
  if(S.id!==t.id) return;
  const n=document.querySelector('.s[data-i="'+VOCE.frase+'"]');
  if(n){ n.classList.add("speaking");
    const r=n.getBoundingClientRect();
    if(r.top<70||r.bottom>window.innerHeight-120) n.scrollIntoView({block:"center",behavior:"smooth"});
  }
}
function avvisoVoce(){
  alert("Questo browser non ha la sintesi vocale italiana. Prova con Chrome, Edge o Safari aggiornati: il testo resta comunque leggibile.");
}

/* ---------- interfaccia del lettore ---------- */
function mostraPlayer(){ $("#player").hidden=false; document.body.style.paddingBottom="0"; }
function nascondiPlayer(){ $("#player").hidden=true; $("#queue").hidden=true; }
function disegnaPlayer(){
  const t=VOCE.coda[VOCE.i];
  $("#p-title").textContent = t? t.titolo : "Nessuna scheda in coda";
  const n=VOCE.frasi.length||1;
  $("#p-sub").textContent = VOCE.coda.length
    ? (VOCE.i+1)+" di "+VOCE.coda.length+(VOCE.attivo? " · frase "+Math.min(VOCE.frase+1,n)+"/"+n : " · in pausa")
    : "aggiungi una scheda con «Ascolta»";
  $("#p-fill").style.width = VOCE.attivo? Math.round(100*VOCE.frase/n)+"%" : "0%";
  $("#p-rate").textContent = String(S.rate).replace(".",",")+"×";
  $("#p-icon").innerHTML = (VOCE.attivo&&!VOCE.pausa)
    ? '<path d="M4 2.5h3.2v11H4zM8.8 2.5H12v11H8.8z" fill="currentColor"></path>'
    : '<path d="M4 2.5 13 8l-9 5.5z" fill="currentColor" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"></path>';
}
function disegnaCoda(){
  const q=$("#queue");
  if(!VOCE.coda.length){ q.innerHTML='<p class="empty" style="padding:14px">La playlist è vuota. Su ogni scheda trovi «Aggiungi alla playlist».</p>'; return; }
  q.innerHTML='<div class="qrow" style="border:0;color:var(--faint)"><span class="eyebrow">Playlist · '+VOCE.coda.length+' schede</span>'+
    '<button class="btn sm" data-q="clear" style="margin-left:auto">Svuota</button></div>'+
    VOCE.coda.map((t,i)=>'<div class="qrow'+(i===VOCE.i?" cur":"")+'"><span class="i">'+(i+1)+'</span>'+
      '<button class="btn sm" data-q="play" data-i="'+i+'" style="border:0;background:none;padding:0;text-align:left">'+esc(t.titolo)+'</button>'+
      '<button class="x" data-q="del" data-id="'+t.id+'" aria-label="Togli dalla playlist">✕</button></div>').join("");
}
</script>
