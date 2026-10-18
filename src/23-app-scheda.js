<script>
/* =========================================================
   SCHEDE: stesso testo letto e ascoltato, con indici allineati
   ========================================================= */
function spezza(t){
  const out=[]; let buf="";
  t=String(t||"").trim();
  for(let i=0;i<t.length;i++){
    buf+=t[i];
    if(".:;!?".indexOf(t[i])>=0 && (i+1>=t.length || t[i+1]===" ")){ const f=buf.trim(); if(f) out.push(f); buf=""; }
  }
  if(buf.trim()) out.push(buf.trim());
  return out;
}

/* blocchi(kind,item) -> [{t:"dl"|"p"|"lista"|"segreto"|"html", ...}] */
function blocchi(kind,it){
  const B=[];
  const nomi=ids=>(ids||[]).map(nomeOf).join(", ");
  if(kind==="muscolo"){
    B.push({t:"dl",voci:[
      ["Origine",it.origine],["Inserzione",it.inserzione],
      ["Innervazione",nomi(it.nervi)+"."],["Vascolarizzazione",it.vascol]]});
    B.push({t:"lista",h:"Azioni",items:it.azioni});
    B.push({t:"p",h:"Come si palpa",txt:it.palpazione});
    B.push({t:"p",h:"Dolore riferito",txt:it.trigger});
    B.push({t:"p",h:"In trattamento",txt:it.massaggio});
    B.push({t:"segreto",txt:it.segreto});
  } else if(kind==="osso"){
    B.push({t:"p",h:"Dove si trova e come si palpa",txt:it.dove});
    B.push({t:"p",h:"Forma e funzione",txt:it.forma});
    B.push({t:"segreto",txt:it.segreto});
  } else if(kind==="nervo"){
    B.push({t:"dl",voci:[["Radici",it.radici],["Origine",it.origine]]});
    B.push({t:"p",h:"Decorso",txt:it.decorso});
    B.push({t:"dl",voci:[["Muscoli innervati",it.motorio],["Territorio sensitivo",it.sensitivo],["Segno di lesione",it.segno]]});
    B.push({t:"segreto",txt:it.segreto});
  } else if(kind==="articolazione"){
    B.push({t:"dl",voci:[["Tipo",it.tipo],["Superfici",it.superfici],["Legamenti",it.legamenti]]});
    B.push({t:"segreto",txt:it.segreto});
  } else if(kind==="movimento"){
    B.push({t:"dl",voci:[["Piano",it.piano],["Asse",it.asse],["Ampiezza normale",it.range]]});
    B.push({t:"p",h:"A cosa serve nella vita reale",txt:it.serve});
    B.push({t:"p",h:"Che cosa lo limita",txt:it.limite});
  } else if(kind==="problema"){
    B.push({t:"p",h:"In due righe",txt:it.sintesi});
    B.push({t:"lista",h:"Che cosa serve per fare questo gesto",items:it.gesto});
    (it.cause||[]).forEach((c,k)=>{
      B.push({t:"p",h:"Causa "+(k+1)+" · "+c.t,txt:c.perche});
      B.push({t:"p",h:"Come si verifica",txt:c.test,small:true,muscoli:c.muscoli});
    });
    B.push({t:"lista",h:"Come si tratta",items:it.trattamento});
    B.push({t:"lista",h:"Bandiere rosse: quando si manda dal medico",items:it.rosse,rosso:true});
    B.push({t:"segreto",txt:it.segreto});
  } else if(kind==="catena"){
    B.push({t:"lista",h:"Stazioni ossee",items:it.stazioni});
    B.push({t:"lista",h:"Tratti miofasciali",items:it.tratti});
    B.push({t:"p",h:"Funzione",txt:it.funzione});
    B.push({t:"p",h:"Come si valuta",txt:it.valutazione});
    B.push({t:"p",h:"Come si tratta",txt:it.trattamento});
    B.push({t:"segreto",txt:it.segreto});
  } else if(kind==="tendine"){
    B.push({t:"dl",voci:[["Dove si trova",it.dove],["Com'e' fatto",it.struttura]]});
    B.push({t:"p",h:"Che carico sopporta",txt:it.carico});
    B.push({t:"p",h:"Come si ammala",txt:it.patologia});
    B.push({t:"p",h:"Come si valuta",txt:it.test});
    B.push({t:"p",h:"Come si tratta",txt:it.tratt});
    B.push({t:"segreto",txt:it.segreto});
  } else if(kind==="borsa"){
    B.push({t:"dl",voci:[["Dove si trova",it.dove],["Fra quali strutture",it.fra]]});
    B.push({t:"p",h:"A cosa serve",txt:it.funzione});
    B.push({t:"p",h:"Quando si infiamma",txt:it.borsite});
    B.push({t:"p",h:"Come si riconosce",txt:it.test});
    B.push({t:"p",h:"Che cosa fare e che cosa non fare",txt:it.tratt});
    B.push({t:"segreto",txt:it.segreto});
  } else if(kind==="plesso"){
    B.push({t:"dl",voci:[["Radici",it.radici],["Regione",it.regione]]});
    B.push({t:"p",h:"Come si forma",txt:it.formazione});
    B.push({t:"p",h:"Rami che ne derivano",txt:it.ramiTesto});
    B.push({t:"p",h:"Dove si comprime",txt:it.sedi});
    B.push({t:"p",h:"Lesioni e quadri tipici",txt:it.lesioni});
    B.push({t:"segreto",txt:it.segreto});
  } else if(kind==="arteria"){
    B.push({t:"dl",voci:[["Origine",it.origine],["Territorio",it.territorio],["Dove si sente il polso",it.polso]]});
    B.push({t:"p",h:"Decorso",txt:it.decorso});
    B.push({t:"p",h:"Da sapere in studio",txt:it.nota});
    B.push({t:"segreto",txt:it.segreto});
  } else if(kind==="legamento"){
    B.push({t:"p",h:"Dove si trova",txt:it.dove});
    B.push({t:"p",h:"Che cosa frena",txt:it.funzione});
    B.push({t:"p",h:"Come si valuta",txt:it.test});
    B.push({t:"segreto",txt:it.segreto});
  } else if(kind==="fascia"){
    B.push({t:"dl",voci:[["Dove si trova",it.dove],["Che cosa contiene",it.contiene]]});
    B.push({t:"p",h:"Funzione",txt:it.funzione});
    B.push({t:"p",h:"Come si lavora",txt:it.tecnica});
    B.push({t:"segreto",txt:it.segreto});
  } else if(kind==="tipo"){
    B.push({t:"dl",voci:[["Classe",it.classe],["Movimenti concessi",it.movimenti],["Sottotipi",it.sottotipi&&it.sottotipi!=="—"?it.sottotipi:""]]});
    B.push({t:"p",h:"Definizione",txt:it.definizione});
    B.push({t:"segreto",txt:it.segreto});
  } else if(kind==="postura"){
    B.push({t:"p",h:"Che cosa si vede",txt:it.descr});
    B.push({t:"p",h:"Da ricordare",txt:it.nota});
  }
  return B;
}

function renderBlocchi(bs,selfId){
  const speak=[]; let i=0; let html="";
  const sp=(sents,prefix)=>sents.map((s,k)=>{
      speak.push(((k===0&&prefix)?prefix+" ":"")+s);
      return '<span class="s" data-i="'+(i++)+'">'+autolink(esc(s),selfId)+'</span>';
    }).join(" ");
  bs.forEach(b=>{
    if(b.t==="dl"){
      if(!b.voci||!b.voci.filter(v=>v&&v[1]).length) return;
      if(b.h) html+='<div class="seg" style="margin:10px 0 7px">'+esc(b.h)+'</div>';
      html+='<dl class="dl">'+b.voci.filter(v=>v[1]).map(v=>
        '<dt>'+esc(v[0])+'</dt><dd>'+sp(spezza(v[1]),v[0]+":")+'</dd>').join("")+'</dl>';
    } else if(b.t==="p"){
      if(!b.txt) return;
      html+='<section><div class="seg" style="margin-bottom:7px">'+esc(b.h)+'</div>'+
        '<p style="margin:0'+(b.small?';font-size:13.6px;color:var(--muted)':'')+'">'+sp(spezza(b.txt),b.h+".")+'</p>'+
        (b.muscoli&&b.muscoli.length?'<div class="pills" style="margin-top:7px">'+b.muscoli.map(m=>pill(m)).join("")+'</div>':'')+
        '</section>';
    } else if(b.t==="lista"){
      const items=(b.items||[]).filter(Boolean); if(!items.length) return;
      html+='<section><div class="seg" style="margin-bottom:7px">'+esc(b.h)+'</div>'+
        '<ul style="margin:0;padding-left:18px;display:flex;flex-direction:column;gap:5px'+(b.rosso?';color:var(--muscle)':'')+'">'+
        items.map(x=>'<li>'+sp(spezza(x),null)+'</li>').join("")+'</ul></section>';
    } else if(b.t==="sblocca"){
      if(!b.txt) return;
      html+='<div class="sblocca"><span class="lbl">Nella versione Completa</span><p>'+esc(b.txt)+' Per passare alla Completa: <a href="mailto:scuderidavide@libero.it?subject=AnatomiaPratica%20versione%20Completa">scrivi a Davide</a>.</p></div>';
    } else if(b.t==="segreto"){
      if(!b.txt) return;
      html+='<div class="secret"><span class="lbl">◆ Il segreto del mestiere</span><p>'+sp(spezza(b.txt),"Il segreto del mestiere.")+'</p></div>';
    }
  });
  return {html:html,speak:speak};
}

/* la narrazione usa esattamente le stesse frasi della pagina */
function racconto(kind,it){ return renderBlocchi(blocchi(kind,it)).speak; }

/* ---------- elementi visivi specifici per tipo ---------- */
function visual(kind,it){
  const tav=(typeof tavolaScheda==="function")? tavolaScheda(kind,it) : "";
  return tav+visualBase(kind,it);
}
function visualBase(kind,it){
  if(kind==="muscolo"){
    const v = it.vista==="post"?"post":"ant";
    return '<div class="stage">'+atlanteSVG(v,it.id)+
      '<span class="eyebrow" style="margin-top:6px">Vista '+(v==="ant"?"anteriore":"posteriore")+' · schema</span></div>';
  }
  if(kind==="catena") return '<div class="stage">'+catenaSVG(it)+
      '<span class="eyebrow" style="margin-top:6px">'+esc(it.sigla)+' · percorso schematico</span></div>';
  if(kind==="postura") return '<div class="stage">'+posturaSVG(it)+
      '<span class="eyebrow" style="margin-top:6px">Filo a piombo di riferimento</span></div>';
  if(kind==="articolazione"){
    return '<div class="wg"><div class="wg-head"><span class="t">Gradi di movimento normali</span></div><div class="wg-body">'+
      '<table class="tbl">'+ (it.rom||[]).map(r=>'<tr><td>'+esc(r[0])+'</td><td class="mono" style="text-align:right">'+esc(r[1])+'</td></tr>').join("")+'</table></div></div>';
  }
  if(kind==="osso"){
    return '<div class="stage">'+atlanteSVG("post",null)+'<span class="eyebrow" style="margin-top:6px">Regione: '+esc(it.regione)+'</span></div>';
  }
  if(kind==="tipo"){
    return '<div class="wg"><div class="wg-head"><span class="t">Esempi nel corpo</span></div><div class="wg-body">'+
      pills(it.esempi)+'</div></div>';
  }
  if(kind==="legamento"||kind==="fascia"||kind==="arteria"||kind==="plesso"||kind==="tendine"||kind==="borsa"){
    return '<div class="stage">'+atlanteSVG(kind==="arteria"?"ant":"post",null)+
      '<span class="eyebrow" style="margin-top:6px">Regione: '+esc(it.regione||"")+'</span></div>';
  }
  return "";
}

/* ---------- collegamenti (la rete fra le porte) ---------- */
function collegamenti(kind,it){
  const box=(titolo,html)=>'<section><div class="seg" style="margin-bottom:8px">'+titolo+'</div>'+html+'</section>';
  let out="";
  if(kind==="muscolo"){
    out+=box("Ossa",pills([].concat(it.ossaO||[],it.ossaI||[]).filter((v,i,a)=>a.indexOf(v)===i)));
    out+=box("Innervazione",pills(it.nervi));
    out+=box("Vascolarizzazione",pills(arterieDi(it).map(v=>v.id),"Vedi il testo della scheda."));
    const td=DB.tendini.filter(d=>(d.muscoli||[]).includes(it.id)).map(d=>d.id);
    if(td.length) out+=box("Tendini",pills(td));
    const bs=DB.borse.filter(b=>(b.muscoli||[]).includes(it.id)).map(b=>b.id);
    if(bs.length) out+=box("Borse sierose",pills(bs));
    out+=box("Articolazioni che muove",pills(it.articolazioni));
    out+=box("Catene di appartenenza",pills(it.catene));
    const mv=rel.movimentiDiMuscolo(it.id).map(x=>x.id);
    out+=box("Movimenti in cui interviene",pills(mv,"Nessun movimento collegato."));
    const pr=rel.problemiDiMuscolo(it.id).map(x=>x.id);
    if(pr.length) out+=box("Problemi in cui compare",pills(pr));
  } else if(kind==="osso"){
    const mo=DB.muscoli.filter(m=>(m.ossaO||[]).includes(it.id)).map(m=>m.id);
    const mi=DB.muscoli.filter(m=>(m.ossaI||[]).includes(it.id)).map(m=>m.id);
    out+=box("Muscoli che ci originano",pills(mo,"Nessuno fra quelli in archivio."));
    out+=box("Muscoli che ci si inseriscono",pills(mi,"Nessuno fra quelli in archivio."));
    out+=box("Articolazioni",pills(it.articola));
  } else if(kind==="nervo"){
    out+=box("Muscoli innervati (in archivio)",pills(rel.muscoliDiNervo(it.id).map(m=>m.id),"Vedi l'elenco completo qui sopra."));
  } else if(kind==="articolazione"){
    out+=box("Legamenti",pills(rel.legamentiDiArt(it.id).map(g=>g.id),"Vedi il testo della scheda."));
    out+=box("Tendini e borse",pills(
      DB.tendini.filter(d=>(d.art||[]).includes(it.id)).map(d=>d.id)
      .concat(DB.borse.filter(b=>(b.art||[]).includes(it.id)).map(b=>b.id)),"—"));
    out+=box("Muscoli che la muovono",pills(rel.muscoliDiArt(it.id).map(m=>m.id)));
    const mv=DB.movimenti.filter(v=>v.art===it.id).map(v=>v.id);
    out+=box("Movimenti",pills(mv));
    const tp=DB.tipi.filter(t=>rel.articolazioniDiTipo(t.id).some(x=>x.id===it.id)).map(t=>t.id);
    out+=box("Classificazione",pills(tp,"Vedi il tipo nella scheda."));
  } else if(kind==="movimento"){
    out+=box("Agonisti",pills(it.agonisti));
    out+=box("Sinergici",pills(it.sinergici,"—"));
    out+=box("Antagonisti",pills(it.antagonisti,"—"));
    out+=box("Articolazione",pills([it.art]));
    const pr=DB.problemi.filter(p=>(p.movimenti||[]).includes(it.id)).map(p=>p.id);
    if(pr.length) out+=box("Problemi che lo riguardano",pills(pr));
  } else if(kind==="problema"){
    out+=box("Movimenti coinvolti",pills(it.movimenti));
    out+=box("Catene da considerare",pills(it.catene));
    const ms=[]; (it.cause||[]).forEach(c=>(c.muscoli||[]).forEach(m=>{ if(ms.indexOf(m)<0) ms.push(m); }));
    out+=box("Tutti i muscoli in gioco",pills(ms));
  } else if(kind==="catena"){
    out+=box("Muscoli della catena",pills(it.muscoli));
  } else if(kind==="postura"){
    out+=box("Tendenzialmente accorciati",pills(it.corti,"Nessuno: è il riferimento."));
    out+=box("Tendenzialmente inibiti",pills(it.lunghi,"Nessuno: è il riferimento."));
  } else if(kind==="tendine"||kind==="borsa"){
    out+=box("Muscoli collegati",pills(it.muscoli,"Vedi il testo della scheda."));
    out+=box("Articolazioni",pills(it.art,"—"));
  } else if(kind==="plesso"){
    out+=box("Nervi che ne derivano",pills(it.rami));
    const ms=[]; (it.rami||[]).forEach(n=>rel.muscoliDiNervo(n).forEach(m=>{ if(ms.indexOf(m.id)<0) ms.push(m.id); }));
    out+=box("Muscoli dipendenti da questo plesso",pills(ms,"Vedi le schede dei singoli nervi."));
  } else if(kind==="arteria"){
    out+=box("Muscoli irrorati (in archivio)",pills(rel.muscoliDiArteria(it.id).map(m=>m.id),"Vedi il territorio nella scheda."));
  } else if(kind==="legamento"){
    out+=box("Articolazioni",pills(it.art));
    const ms=[]; (it.art||[]).forEach(a=>rel.muscoliDiArt(a).forEach(m=>{ if(ms.indexOf(m.id)<0) ms.push(m.id); }));
    out+=box("Muscoli della stessa articolazione",pills(ms));
  } else if(kind==="fascia"){
    out+=box("Catene collegate",pills(DB.catene.filter(c=>(it.alias||[]).some(a=>(c.tratti||[]).join(" ").toLowerCase().indexOf(a.toLowerCase())>=0)).map(c=>c.id),"Vedi il testo della scheda."));
  } else if(kind==="tipo"){
    out+=box("Articolazioni di questo tipo",pills(rel.articolazioniDiTipo(it.id).map(a=>a.id),"—"));
  }
  return out;
}
function arterieDi(m){ return DB.arterie.filter(v=>rel.muscoliDiArteria(v.id).some(x=>x.id===m.id)); }

/* ---------- la scheda completa ---------- */
function vistaScheda(kind,id){
  const r=anyById(id); if(!r) return '<p class="empty">Scheda non trovata.</p>';
  const it=r.item, nome=it.nome||it.voce;
  const bl=renderBlocchi(blocchi(kind,it),id);
  const salvata=S.saved.includes(id), fatta=S.done.includes(id), incoda=inCoda(id);
  const porta=PORTE.find(p=>p.k===kind);
  const sotto = it.lat || it.zona || it.regione || it.gruppo || it.sigla || "";
  return crumbs([["Home","home/"],[porta?porta.n:KINDS[kind].label,"lista/"+kind],[nome,null]])+
   '<article class="sheet"><div class="sheet-head">'+
     '<span class="eyebrow">'+KINDS[kind].label+(sotto?' · '+esc(sotto):'')+'</span>'+
     '<h1>'+esc(nome)+'</h1>'+
     (it.lat?'<span class="lat">'+esc(it.lat)+'</span>':'')+
     '<div class="acts" style="margin-top:12px">'+
       '<button class="btn primary" data-act="ascolta" data-id="'+id+'" data-kind="'+kind+'">▶ Ascolta</button>'+
       '<button class="btn'+(incoda?" on":"")+'" data-act="coda" data-id="'+id+'" data-kind="'+kind+'">'+(incoda?"✓ In playlist":"+ Playlist")+'</button>'+
       '<button class="btn'+(salvata?" on":"")+'" data-act="salva" data-id="'+id+'">'+(salvata?"★ Salvata":"☆ Salva")+'</button>'+
       '<button class="btn'+(fatta?" on":"")+'" data-act="fatto" data-id="'+id+'">'+(fatta?"✓ Studiata":"Segna studiata")+'</button>'+
     '</div>'+
   '</div><div class="sheet-body">'+
     '<div class="two"><div class="prose" style="gap:16px">'+bl.html+'</div>'+
     '<div style="display:flex;flex-direction:column;gap:14px">'+visual(kind,it)+collegamenti(kind,it)+'</div></div>'+
   '</div></article>';
}
</script>
