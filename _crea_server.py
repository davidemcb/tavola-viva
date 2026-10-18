# -*- coding: utf-8 -*-
"""Prepara la versione con accesso a pagamento (Cloudflare Workers):
   server/public/index.html   = pagina di accesso (nessun contenuto dentro)
   server/app-bundle.js       = tutta l'app (dati + codice), da caricare nel KV "DATI" con chiave "bundle"
   server/public/             = manifest, icone, sw.js, tavole
Si lancia DOPO _crea_sito.py (che prepara tavole/ e la lista dei file)."""
import io, os, re, shutil

BASE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(BASE, "src")
SERVER = os.path.join(BASE, "server")
PUB = os.path.join(SERVER, "public")
os.makedirs(PUB, exist_ok=True)

# lista dei file nell'ordine della build del sito
testo = io.open(os.path.join(BASE, "_crea_sito.py"), encoding="utf-8").read()
m = re.search(r"files\s*=\s*\[(.*?)\]", testo, re.S)
ordine = re.findall(r'"([^"]+)"', m.group(1))

SHELL = ["00-doc-head.html", "01-head.html", "01b-head-close.html", "02-shell.html", "97-accesso.js", "98-sito.js", "99-doc-foot.html"]
bundle_files = [f for f in ordine if f not in SHELL]

def leggi(f): return io.open(os.path.join(SRC, f), encoding="utf-8").read()

# 1) pagina di accesso
shell = "".join(leggi(f) for f in SHELL)
io.open(os.path.join(PUB, "index.html"), "w", encoding="utf-8").write(shell)

# 2) bundle: ogni file diventa una o più parti (CSS / JS), separate da un marcatore
parti = []
for f in bundle_files:
    t = leggi(f)
    for css in re.findall(r"<style>(.*?)</style>", t, re.S):
        parti.append("/*CSS*/" + css)
    for js in re.findall(r"<script>(.*?)</script>", t, re.S):
        if js.strip(): parti.append("/* " + f + " */\n" + js)
bundle = "\n/*@@SEP@@*/\n".join(parti)
bundle = bundle.replace("\r\n", "\n")
io.open(os.path.join(SERVER, "app-bundle.js"), "w", encoding="utf-8", newline="\n").write(bundle)

# 3) file statici
for f in ["manifest.webmanifest", "icona-192.png", "icona-512.png", "icona.svg", "trainer.html", "massaggiatori.html", "prova.html"]:
    p = os.path.join(BASE, f)
    if os.path.exists(p): shutil.copy2(p, os.path.join(PUB, f))
dst_t = os.path.join(PUB, "tavole"); os.makedirs(dst_t, exist_ok=True)
n = 0
for f in os.listdir(os.path.join(BASE, "tavole")):
    s = os.path.join(BASE, "tavole", f); d = os.path.join(dst_t, f)
    if not os.path.exists(d) or os.path.getmtime(s) > os.path.getmtime(d): shutil.copy2(s, d); n += 1

io.open(os.path.join(PUB, "sw.js"), "w", encoding="utf-8").write(r"""/* AnatomiaPratica - service worker: tavole e icone in cache; pagina e API sempre dalla rete */
const CACHE="ap-v1";
self.addEventListener("install",e=>{ self.skipWaiting(); });
self.addEventListener("activate",e=>{ e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())); });
self.addEventListener("fetch",e=>{
  const u=new URL(e.request.url);
  if(e.request.method!=="GET" || u.pathname.indexOf("/api/")>=0) return;
  if(/\/tavole\/|icona|manifest/.test(u.pathname)){
    e.respondWith(caches.open(CACHE).then(async c=>{ const r=await c.match(e.request); if(r) return r; const n=await fetch(e.request); if(n.ok) c.put(e.request,n.clone()); return n; }));
  }
});
""")
io.open(os.path.join(SERVER, ".gitignore"), "w", encoding="utf-8").write("node_modules/\n.wrangler/\napp-bundle.js\npublic/tavole/\n.dev.vars\n")
print("shell: %d KB · bundle: %d parti, %d KB · tavole copiate: %d" % (len(shell)//1024, len(parti), len(bundle)//1024, n))
