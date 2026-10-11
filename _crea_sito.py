# -*- coding: utf-8 -*-
"""Prepara il progetto-sito Tavola Viva: tavole come file separati, manifest, service worker, build."""
import re, io, os, sys
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
from PIL import Image, ImageDraw

os.chdir(os.path.dirname(os.path.abspath(__file__)))
os.makedirs("tavole", exist_ok=True)

src = io.open("src/35-immagini-mappa.js", encoding="utf-8").read()
m = src[src.index("DB.immagini ="):]
nums = set()
for _f in ("src/35-immagini-mappa.js","src/37-nuovi-muscoli-tavole.js"):
    if os.path.exists(_f):
        for grp in re.findall(r"G2?\(([\d,]+)\)", io.open(_f, encoding="utf-8").read()): nums.update(int(x) for x in grp.split(","))
nums = sorted(nums)
tot = 0; mappa = []
for n in nums:
    p = "tavole-originali/Gray%d.png" % n
    if not os.path.exists(p):
        print("manca", n); continue
    im = Image.open(p).convert("L"); W, H = im.size
    if W > 900: im = im.resize((900, int(H * 900 / W)), Image.LANCZOS)
    out = "tavole/Gray%d.jpg" % n
    im.save(out, "JPEG", quality=76, optimize=True, progressive=True); tot += os.path.getsize(out)
    mappa.append('"Gray%d":"tavole/Gray%d.jpg"' % (n, n))
print("tavole jpg:", len(mappa), "MB:", round(tot / 1e6, 2))
io.open("src/41-immagini-file.js", "w", encoding="utf-8").write(
    "<script>\n/* Sito: le tavole sono file separati, caricati solo quando servono */\nDB.img = {\n" + ",\n".join(mappa) + "\n};\n</script>\n")

io.open("src/00-doc-head.html", "w", encoding="utf-8").write("""<!doctype html>
<html lang="it">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="description" content="Tavola Viva: anatomia, biomeccanica e posturologia per massoterapisti. Entra dal problema, dal movimento, dal muscolo, dall'osso o dal nervo. Ogni scheda si legge e si ascolta.">
<meta name="theme-color" content="#2F7A74" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#0E1413" media="(prefers-color-scheme: dark)">
<link rel="manifest" href="manifest.webmanifest">
<link rel="icon" href="icona.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="icona-192.png">
<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)} [hidden]{display:none!important} img{max-width:100%}</style>
""")
io.open("src/01b-head-close.html", "w", encoding="utf-8").write("</head>\n<body>\n")
io.open("src/98-sito.js", "w", encoding="utf-8").write("""<script>
/* Solo sul sito: installabile e consultabile anche senza rete, dopo la prima visita */
if("serviceWorker" in navigator && location.protocol.indexOf("http")===0){
  window.addEventListener("load",()=>{ navigator.serviceWorker.register("sw.js").catch(()=>{}); });
}
</script>
""")
io.open("src/99-doc-foot.html", "w", encoding="utf-8").write("</body>\n</html>\n")

files = ["00-doc-head.html","01-head.html","01b-head-close.html","02-shell.html","10-data-ossa.js","10b-data-articolazioni2.js","11-data-nervi.js",
 "12-data-muscoli-a.js","13-data-muscoli-b.js","14-data-muscoli-c.js","12b-data-muscoli-d.js","12c-data-muscoli-e.js","12d-data-muscoli-f.js","12e-data-muscoli-g.js","12f-data-muscoli-h.js","15-data-catene.js","16-data-movimenti.js","16b-data-movimenti2.js",
 "17-data-problemi-a.js","18-data-problemi-b.js","17b-data-problemi-c.js","19-data-arterie.js","19b-data-nervi2.js","19c-data-legamenti.js","19d-data-fasce-tipi.js",
 "19e-data-plessi.js","19f-data-borse.js","19g-data-tendini.js","20-app-core.js","20b-app-link.js","21-app-audio.js","22-app-views.js",
 "23-app-scheda.js","30-tavole-a.js","31-tavole-b.js","32-tavole-render.js","33-cranio-e-tavole.js","34-disegni-muscoli.js",
 "36-immagini-render.js","35-immagini-mappa.js","41-immagini-file.js","37-nuovi-muscoli-tavole.js","38-catene-myers.js","98-sito.js","25-consulto.js","26-allegati.js","27-consulto-ai.js","39-collegamenti.js","40-concetti.js","41-condividi.js","24-app-router.js","99-doc-foot.html"]
io.open("build.sh", "w", encoding="utf-8").write(
    '#!/bin/sh\n# Ricompila index.html dai sorgenti in src/\ncd "$(dirname "$0")"\ncat ' + " ".join("src/" + f for f in files) +
    ' > index.html\necho "index.html: $(wc -c < index.html) byte"\n')

io.open("manifest.webmanifest", "w", encoding="utf-8").write("""{
  "name": "Tavola Viva",
  "short_name": "Tavola Viva",
  "description": "Anatomia, biomeccanica e posturologia per massoterapisti",
  "start_url": "./index.html",
  "scope": "./",
  "display": "standalone",
  "background_color": "#EEF1F0",
  "theme_color": "#2F7A74",
  "lang": "it",
  "icons": [
    {"src": "icona-192.png", "sizes": "192x192", "type": "image/png"},
    {"src": "icona-512.png", "sizes": "512x512", "type": "image/png", "purpose": "any maskable"}
  ]
}
""")
io.open("icona.svg", "w", encoding="utf-8").write(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#2F7A74"/>'
    '<circle cx="32" cy="32" r="22" fill="none" stroke="#fff" stroke-width="2.4" opacity=".5"/>'
    '<path d="M32 8v48M17 16c8 5 8 27 0 32M47 16c-8 5-8 27 0 32" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/>'
    '<circle cx="32" cy="32" r="6" fill="#fff"/></svg>')
for s in (192, 512):
    im = Image.new("RGB", (s, s), "#2F7A74"); d = ImageDraw.Draw(im); c = s / 2; r = s * 0.34
    d.ellipse([c - r, c - r, c + r, c + r], outline="#9ED0CB", width=max(2, s // 64))
    d.line([c, s * 0.12, c, s * 0.88], fill="white", width=max(3, s // 20))
    d.arc([s * 0.2, s * 0.2, s * 0.6, s * 0.8], start=200, end=160, fill="white", width=max(3, s // 22))
    d.arc([s * 0.4, s * 0.2, s * 0.8, s * 0.8], start=20, end=340, fill="white", width=max(3, s // 22))
    d.ellipse([c - s * 0.09, c - s * 0.09, c + s * 0.09, c + s * 0.09], fill="white")
    im.save("icona-%d.png" % s)

io.open("sw.js", "w", encoding="utf-8").write(r"""/* Tavola Viva - service worker: app subito disponibile, tavole in cache dopo la prima visita */
const V="tv-v1";
const SHELL=["./","./index.html","./manifest.webmanifest","./icona.svg","./icona-192.png"];
self.addEventListener("install",e=>{ e.waitUntil(caches.open(V).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting())); });
self.addEventListener("activate",e=>{ e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim())); });
self.addEventListener("fetch",e=>{
  const u=new URL(e.request.url);
  if(e.request.method!=="GET") return;
  if(u.pathname.endsWith("/")||u.pathname.endsWith("index.html")){
    e.respondWith(fetch(e.request).then(r=>{ const cp=r.clone(); caches.open(V).then(c=>c.put(e.request,cp)); return r; }).catch(()=>caches.match(e.request)));
    return;
  }
  if(u.pathname.includes("/tavole/")||u.hostname.includes("gstatic")||u.hostname.includes("googleapis")||u.pathname.match(/\.(png|svg|webmanifest)$/)){
    e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request).then(r=>{ const cp=r.clone(); caches.open(V).then(c=>c.put(e.request,cp)); return r; })));
  }
});
""")
io.open(".nojekyll", "w").write("")
io.open(".gitignore", "w", encoding="utf-8").write("tavole-originali/\n__pycache__/\n*.pyc\n")
io.open("README.md", "w", encoding="utf-8").write("""# Tavola Viva

App di studio per allievi massoterapisti e massaggiatori olistici: anatomia, biomeccanica, posturologia e meridiani miofasciali.
Si entra dal problema del cliente, dal movimento, dal muscolo, dall'osso, dal nervo, dal plesso, dall'articolazione, dalle catene o dalla postura.
Ogni scheda si legge e si ascolta; piu' schede si accodano in una playlist.

## Come si modifica
- I sorgenti sono in `src/` (file numerati). Non modificare `index.html` a mano.
- Dopo una modifica: `sh build.sh` ricompila `index.html`.
- Le tavole anatomiche sono in `tavole/` (JPEG); gli originali in `tavole-originali/` (non pubblicati).
- La mappa scheda -> tavole e le didascalie sono in `src/35-immagini-mappa.js`.

## Crediti
Le illustrazioni sono tratte da Henry Gray, *Anatomy of the Human Body*, 20a edizione (1918), disegni di Henry Vandyke Carter: opera di pubblico dominio.
Testi e app: Davide Scuderi, Kinesiologia Studio.
""")
print("progetto pronto")
