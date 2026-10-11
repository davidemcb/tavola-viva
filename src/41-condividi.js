<style>
.toast{position:fixed;left:50%;bottom:calc(84px + env(safe-area-inset-bottom,0px));transform:translateX(-50%);background:var(--ink);color:var(--paper);padding:9px 14px;border-radius:999px;font-size:13px;z-index:300;box-shadow:var(--shadow);opacity:0;transition:opacity .2s}
.toast.on{opacity:1}
.sh-back{position:fixed;inset:0;z-index:250;background:rgba(10,14,13,.55);display:flex;align-items:flex-end;justify-content:center}
.sh{width:100%;max-width:520px;background:var(--surface);border-radius:18px 18px 0 0;padding:14px 16px calc(18px + env(safe-area-inset-bottom,0px));box-shadow:0 -10px 40px rgba(0,0,0,.3);display:flex;flex-direction:column;gap:10px}
.sh h3{font-size:16px}
.sh .grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
.sh-btn{display:flex;flex-direction:column;align-items:center;gap:6px;padding:12px 6px;border:1px solid var(--line);border-radius:12px;background:var(--surface-2);font-size:12px;text-align:center}
.sh-btn:hover{border-color:var(--fascia)}
.sh-btn .ic{width:40px;height:40px;border-radius:12px;display:grid;place-items:center;color:#fff;font-weight:600;font-size:15px}
.sh-prev{border:1px solid var(--line-soft);border-radius:10px;padding:10px 12px;font-size:12.5px;color:var(--muted);background:var(--surface-2);max-height:110px;overflow:auto;white-space:pre-wrap}
.sh-img{display:none}
</style>
<script>
/* =========================================================
   CONDIVIDI — manda la scheda a un cliente, su WhatsApp, nello stato, per mail.
   ========================================================= */
function urlScheda(kind,id){ return location.href.split("#")[0]+"#/"+kind+"/"+id; }
function toast(msg){
  let t=document.querySelector(".toast"); if(!t){ t=el("div","toast"); document.body.appendChild(t); }
  t.textContent=msg; requestAnimationFrame(()=>t.classList.add("on"));
  clearTimeout(t._h); t._h=setTimeout(()=>t.classList.remove("on"),2200);
}
/* testo della scheda in forma di messaggio */
function testoCondivisione(kind,it,id){
  const nome=it.nome||it.voce;
  const bl=renderBlocchi(blocchi(kind,it),id).speak;
  const corpo=bl.slice(0,4).join(" ").replace(/^(Origine|Inserzione|Dove si trova e come si palpa|In due righe|Che cos'è|Dove si trova)[:.]\s*/i,"");
  const seg=it.segreto? "\n\n◆ Il segreto del mestiere: "+it.segreto : "";
  return nome.toUpperCase()+"\n"+(it.lat?it.lat+"\n":"")+"\n"+corpo.slice(0,420)+(corpo.length>420?"…":"")+seg+"\n\nTavola Viva · Kinesiologia Studio\n"+urlScheda(kind,id);
}
/* immagine della scheda (per lo stato di WhatsApp, Instagram, ecc.) */
function wrapLines(ctx,text,maxW){
  const out=[]; text.split("\n").forEach(par=>{ let line=""; par.split(" ").forEach(w=>{ const t=line?line+" "+w:w; if(ctx.measureText(t).width>maxW && line){ out.push(line); line=w; } else line=t; }); out.push(line); });
  return out;
}
async function immagineScheda(kind,it,id){
  const W=1080, pad=72, c=document.createElement("canvas"); c.width=W; c.height=1350; const x=c.getContext("2d");
  x.fillStyle="#EEF1F0"; x.fillRect(0,0,W,c.height);
  x.fillStyle="#2F7A74"; x.fillRect(0,0,W,14);
  x.fillStyle="#8A9996"; x.font="500 26px Archivo, Arial, sans-serif"; x.fillText(("Tavola Viva · "+KINDS[kind].label).toUpperCase(),pad,90);
  x.fillStyle="#141D1C"; x.font="600 64px Newsreader, Georgia, serif";
  let y=170; wrapLines(x,it.nome||it.voce,W-2*pad).forEach(l=>{ x.fillText(l,pad,y); y+=72; });
  if(it.lat){ x.fillStyle="#5B6B68"; x.font="italic 32px Newsreader, Georgia, serif"; x.fillText(it.lat,pad,y+6); y+=56; }
  y+=24; x.fillStyle="#141D1C"; x.font="400 32px Archivo, Arial, sans-serif";
  const bl=renderBlocchi(blocchi(kind,it),id).speak; const corpo=bl.slice(0,3).join(" ");
  wrapLines(x,corpo,W-2*pad).slice(0,9).forEach(l=>{ x.fillText(l,pad,y); y+=46; });
  if(it.segreto){
    y+=30; const h0=y;
    const lines=wrapLines(x,it.segreto,W-2*pad-48).slice(0,9);
    x.fillStyle="#F4E9D2"; x.fillRect(pad,y-10,W-2*pad,lines.length*44+70);
    x.fillStyle="#A9760E"; x.font="600 24px Archivo, Arial, sans-serif"; x.fillText("◆ IL SEGRETO DEL MESTIERE",pad+24,y+28); y+=70;
    x.fillStyle="#141D1C"; x.font="400 30px Archivo, Arial, sans-serif"; lines.forEach(l=>{ x.fillText(l,pad+24,y); y+=44; });
  }
  x.fillStyle="#2F7A74"; x.fillRect(0,c.height-120,W,120);
  x.fillStyle="#fff"; x.font="600 30px Archivo, Arial, sans-serif"; x.fillText("Tavola Viva · Kinesiologia Studio",pad,c.height-66);
  x.font="400 24px Archivo, Arial, sans-serif"; x.fillText(urlScheda(kind,id).replace(/^https?:\/\//,""),pad,c.height-30);
  return new Promise(r=>c.toBlob(b=>r(b),"image/png"));
}
async function condividiImmagine(kind,it,id){
  toast("Preparo l'immagine…");
  const blob=await immagineScheda(kind,it,id);
  const file=new File([blob],(it.nome||it.voce).replace(/[^\w\s-]/g,"").trim().replace(/\s+/g,"-")+".png",{type:"image/png"});
  if(navigator.canShare && navigator.canShare({files:[file]})){
    try{ await navigator.share({files:[file],title:it.nome||it.voce,text:"Tavola Viva · "+(it.nome||it.voce)}); return; }catch(e){ if(e&&e.name==="AbortError") return; }
  }
  const a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download=file.name; document.body.appendChild(a); a.click(); a.remove();
  toast("Immagine scaricata: la trovi nei download");
}
function apriCondivisione(kind,id){
  const r=anyById(id); if(!r) return;
  const it=r.item, nome=it.nome||it.voce, url=urlScheda(kind,id), testo=testoCondivisione(kind,it,id);
  const enc=encodeURIComponent(testo);
  const ic=(bg,t)=>'<span class="ic" style="background:'+bg+'">'+t+'</span>';
  const back=el("div","sh-back",
    '<div class="sh" role="dialog" aria-label="Condividi"><h3>Condividi «'+esc(nome)+'»</h3>'+
    '<div class="sh-prev">'+esc(testo)+'</div>'+
    '<div class="grid">'+
      '<a class="sh-btn" href="https://wa.me/?text='+enc+'" target="_blank" rel="noopener">'+ic("#25D366","W")+'WhatsApp</a>'+
      '<a class="sh-btn" href="https://t.me/share/url?url='+encodeURIComponent(url)+'&text='+encodeURIComponent(testo.replace(url,"").trim())+'" target="_blank" rel="noopener">'+ic("#2AABEE","T")+'Telegram</a>'+
      '<a class="sh-btn" href="mailto:?subject='+encodeURIComponent(nome+" — Tavola Viva")+'&body='+enc+'">'+ic("#5B6B68","@")+'E-mail</a>'+
      '<button class="sh-btn" data-sh="img">'+ic("#A62B3F","IMG")+'Immagine<br>per lo stato</button>'+
      '<button class="sh-btn" data-sh="copia">'+ic("#3E5F93","⎘")+'Copia testo<br>e link</button>'+
      '<button class="sh-btn" data-sh="sys">'+ic("#2F7A74","⇪")+'Altre app</button>'+
    '</div>'+
    '<button class="btn sm" data-sh="chiudi" style="align-self:center">Chiudi</button></div>');
  back.addEventListener("click",async e=>{
    const b=e.target.closest("[data-sh]"); if(!b){ if(e.target===back) back.remove(); return; }
    const t=b.getAttribute("data-sh");
    if(t==="chiudi") back.remove();
    else if(t==="copia"){ try{ await navigator.clipboard.writeText(testo); toast("Copiato: incollalo in WhatsApp o dove vuoi"); }catch(x){ prompt("Copia il testo:",testo); } }
    else if(t==="img"){ await condividiImmagine(kind,it,id); }
    else if(t==="sys"){ if(navigator.share){ try{ await navigator.share({title:nome,text:testo}); }catch(x){} } else toast("Usa WhatsApp, Telegram o Copia"); }
  });
  document.body.appendChild(back);
}
document.addEventListener("click",e=>{
  const b=e.target.closest("[data-act='condividi']"); if(!b) return;
  apriCondivisione(b.getAttribute("data-kind"),b.getAttribute("data-id"));
});
const _vistaScheda_conCondividi = vistaScheda;
vistaScheda = function(kind,id){
  return _vistaScheda_conCondividi(kind,id).replace(
    '<button class="btn'+((S.done.includes(id))?' on':'')+'" data-act="fatto"',
    '<button class="btn" data-act="condividi" data-kind="'+kind+'" data-id="'+id+'" title="Manda questa scheda">⇪ Condividi</button>'+
    '<button class="btn'+((S.done.includes(id))?' on':'')+'" data-act="fatto"');
};
</script>
