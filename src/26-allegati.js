<style>
.alleg{display:flex;flex-direction:column;gap:8px}
.alleg-row{display:flex;gap:10px;align-items:center;background:var(--surface);border:1px solid var(--line-soft);border-radius:10px;padding:8px 10px;font-size:13px}
.alleg-row .ic{width:30px;height:30px;border-radius:8px;display:grid;place-items:center;flex:none;font-family:var(--mono);font-size:10px;letter-spacing:.06em;color:#fff;background:var(--fascia)}
.alleg-row .ic.img{background:var(--joint)}.alleg-row .ic.aud{background:var(--muscle)}.alleg-row .ic.doc{background:var(--bone)}
.alleg-row .nm{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.alleg-row .nm small{display:block;color:var(--faint);font-family:var(--mono);font-size:10px}
.alleg-row audio{width:100%;height:32px}
.alleg-row img{max-height:120px;border-radius:6px;cursor:zoom-in}
.alleg-add{display:flex;gap:8px;flex-wrap:wrap;align-items:center}
.alleg-add input[type=file]{display:none}
.alleg-note{font-size:12px;color:var(--faint)}
.alleg-view{position:fixed;inset:0;z-index:200;background:rgba(10,14,13,.92);display:grid;place-items:center;padding:16px;cursor:zoom-out}
.alleg-view img{max-width:96vw;max-height:88vh;border-radius:6px;background:#fff}
</style>
<script>
/* =========================================================
   ALLEGATI — vocali, audio, risonanze, foto, PDF, appunti.
   Restano sul dispositivo (IndexedDB), anche chiudendo l'app.
   ========================================================= */
const ALL = { db:null, ok:("indexedDB" in window) };
function allDB(){
  return new Promise((ris,err)=>{
    if(ALL.db) return ris(ALL.db);
    if(!ALL.ok) return err(new Error("no idb"));
    const r=indexedDB.open("tavola-viva",1);
    r.onupgradeneeded=()=>{ const d=r.result; if(!d.objectStoreNames.contains("allegati")){ const s=d.createObjectStore("allegati",{keyPath:"id"}); s.createIndex("scheda","scheda"); } };
    r.onsuccess=()=>{ ALL.db=r.result; ris(ALL.db); };
    r.onerror=()=>err(r.error);
  });
}
function allTx(mode,fn){
  return allDB().then(d=>new Promise((ris,err)=>{ const t=d.transaction("allegati",mode); const s=t.objectStore("allegati"); const q=fn(s); t.oncomplete=()=>ris(q&&q.result); t.onerror=()=>err(t.error); }));
}
function allLista(scheda){
  return allDB().then(d=>new Promise((ris,err)=>{
    const s=d.transaction("allegati","readonly").objectStore("allegati");
    const q=scheda? s.index("scheda").getAll(scheda) : s.getAll();
    q.onsuccess=()=>ris((q.result||[]).sort((a,b)=>b.quando-a.quando)); q.onerror=()=>err(q.error);
  }));
}
function allSalva(scheda,file,nota){
  const rec={id:"al-"+Date.now()+"-"+Math.random().toString(36).slice(2,7),scheda:scheda||"",nome:file.name,tipo:file.type||"",dim:file.size,quando:Date.now(),nota:nota||"",blob:file};
  return allTx("readwrite",s=>s.put(rec)).then(()=>rec);
}
function allElimina(id){ return allTx("readwrite",s=>s.delete(id)); }
function allAggiornaNota(id,nota){ return allDB().then(d=>new Promise((ris,err)=>{ const s=d.transaction("allegati","readwrite").objectStore("allegati"); const g=s.get(id); g.onsuccess=()=>{ const r=g.result; if(r){ r.nota=nota; s.put(r); } ris(); }; g.onerror=()=>err(g.error); })); }

function allKind(t){ t=t||""; if(t.indexOf("audio")===0) return "aud"; if(t.indexOf("image")===0) return "img"; if(t.indexOf("video")===0) return "vid"; return "doc"; }
function allDim(n){ return n>1e6? (n/1e6).toFixed(1)+" MB" : Math.round(n/1e3)+" KB"; }
const ALL_URL={};
function allUrl(rec){ if(!ALL_URL[rec.id]) ALL_URL[rec.id]=URL.createObjectURL(rec.blob); return ALL_URL[rec.id]; }

function allRowHTML(r,conScheda){
  const k=allKind(r.tipo), u=allUrl(r);
  const titolo=conScheda&&r.scheda? '<small>'+esc(nomeOf(r.scheda))+'</small>' : '';
  let media="";
  if(k==="aud") media='<audio controls preload="metadata" src="'+u+'"></audio>';
  else if(k==="img") media='<img src="'+u+'" alt="'+esc(r.nome)+'" data-allview="'+r.id+'">';
  else if(k==="vid") media='<video controls preload="metadata" src="'+u+'" style="max-height:200px;border-radius:6px"></video>';
  else media='<a class="btn sm" href="'+u+'" target="_blank" rel="noopener">Apri</a>';
  const lab={aud:"AUD",img:"IMG",vid:"VID",doc:"DOC"}[k];
  return '<div class="alleg-row" data-allid="'+r.id+'"><span class="ic '+k+'">'+lab+'</span>'+
    '<div style="flex:1;min-width:0;display:flex;flex-direction:column;gap:6px">'+
      '<div class="nm" title="'+esc(r.nome)+'">'+esc(r.nome)+'<small>'+allDim(r.dim)+' · '+new Date(r.quando).toLocaleDateString("it-IT")+'</small>'+titolo+'</div>'+
      media+
      '<input class="alleg-nota" data-allnota="'+r.id+'" value="'+esc(r.nota)+'" placeholder="Nota (es. paziente M.R., prima seduta)" style="font:inherit;font-size:12.5px;padding:5px 8px;border:1px solid var(--line-soft);border-radius:7px;background:var(--surface-2);color:var(--ink)">'+
    '</div>'+
    '<button class="x" data-alldel="'+r.id+'" aria-label="Elimina" style="background:none;border:0;color:var(--faint);padding:4px 6px;cursor:pointer">✕</button></div>';
}

/* blocco "Allega" per una scheda */
function allegatiBlocco(scheda){
  const id="alleg-"+scheda;
  const nota = ALL.ok? "I file restano su questo dispositivo, anche chiudendo l'app. Non vengono inviati a nessun server."
                     : "Questo browser non permette di salvare file nell'app.";
  const h='<section class="alleg" id="'+id+'"><div class="seg">I tuoi allegati</div>'+
    '<div class="alleg-add"><label class="btn sm"><input type="file" multiple data-allfile="'+scheda+'" accept="audio/*,image/*,video/*,.pdf,.txt,.doc,.docx">+ Allega file</label>'+
    '<label class="btn sm"><input type="file" data-allfile="'+scheda+'" accept="audio/*" capture>🎙 Registra vocale</label>'+
    '<label class="btn sm"><input type="file" data-allfile="'+scheda+'" accept="image/*" capture="environment">📷 Foto</label></div>'+
    '<div class="alleg-lista"></div><p class="alleg-note">'+nota+' Vocali, audio, risonanze, foto, referti, PDF.</p></section>';
  setTimeout(()=>allRender(scheda),0);
  return h;
}
function allRender(scheda){
  const box=document.querySelector('#alleg-'+CSS.escape(scheda)+' .alleg-lista'); if(!box) return;
  allLista(scheda).then(L=>{ box.innerHTML = L.length? L.map(r=>allRowHTML(r,false)).join("") : '<p style="margin:0;font-size:12.5px;color:var(--faint)">Nessun allegato per questa scheda.</p>'; }).catch(()=>{ box.innerHTML=""; });
}

/* sezione in "Il mio studio" */
function allegatiStudio(){
  setTimeout(()=>{ const box=document.getElementById("alleg-tutti"); if(!box) return;
    allLista(null).then(L=>{ box.innerHTML = L.length? L.map(r=>allRowHTML(r,true)).join("") : '<p class="empty">Nessun file ancora. Apri una scheda e premi <b>Allega file</b>, oppure carica qui sotto.</p>'; }).catch(()=>{ box.innerHTML='<p class="empty">Archivio non disponibile su questo browser.</p>'; }); },0);
  return '<div class="seg" style="margin:18px 0 10px">I miei file</div>'+
    '<div class="alleg-add" style="margin-bottom:10px"><label class="btn sm"><input type="file" multiple data-allfile="" accept="audio/*,image/*,video/*,.pdf,.txt,.doc,.docx">+ Carica un file non legato a una scheda</label></div>'+
    '<div class="alleg" id="alleg-tutti"></div>';
}

/* eventi */
document.addEventListener("change",e=>{
  const inp=e.target.closest("[data-allfile]"); if(!inp||!inp.files||!inp.files.length) return;
  const scheda=inp.getAttribute("data-allfile");
  const files=Array.from(inp.files); inp.value="";
  Promise.all(files.map(f=>allSalva(scheda,f,""))).then(()=>{ if(scheda) allRender(scheda); else render(); })
    .catch(()=>alert("Non sono riuscito a salvare il file su questo dispositivo."));
});
document.addEventListener("click",e=>{
  const d=e.target.closest("[data-alldel]");
  if(d){ const id=d.getAttribute("data-alldel"); if(confirm("Eliminare questo allegato da questo dispositivo?")) allElimina(id).then(()=>{ const row=d.closest(".alleg-row"); if(row) row.remove(); }); return; }
  const v=e.target.closest("[data-allview]");
  if(v){ const o=el("div","alleg-view",'<img src="'+v.getAttribute("src")+'" alt="">'); o.addEventListener("click",()=>o.remove()); document.body.appendChild(o); }
});
document.addEventListener("input",e=>{ const n=e.target.closest("[data-allnota]"); if(n){ clearTimeout(n._t); n._t=setTimeout(()=>allAggiornaNota(n.getAttribute("data-allnota"),n.value),400); } });

/* innesto nelle schede e nello studio */
const _vistaScheda_conAllegati = vistaScheda;
vistaScheda = function(kind,id){
  const h=_vistaScheda_conAllegati(kind,id);
  return h.replace('</article>', '<div class="sheet-body" style="padding-top:0">'+allegatiBlocco(id)+'</div></article>');
};
const _vistaStudio_conAllegati = vistaStudio;
vistaStudio = function(){ return _vistaStudio_conAllegati() + allegatiStudio(); };
</script>
