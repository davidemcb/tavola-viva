/* AnatomiaPratica - service worker: app subito disponibile, tavole in cache dopo la prima visita */
const V="tv-v3";
const SHELL=["./","./index.html","./config.js","./manifest.webmanifest","./icona.svg","./icona-192.png"];
self.addEventListener("install",e=>{ e.waitUntil(caches.open(V).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting())); });
self.addEventListener("activate",e=>{ e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim())); });
self.addEventListener("fetch",e=>{
  const u=new URL(e.request.url);
  if(e.request.method!=="GET") return;
  if(u.pathname.endsWith("/")||u.pathname.endsWith("index.html")||u.pathname.endsWith("config.js")){
    e.respondWith(fetch(e.request).then(r=>{ const cp=r.clone(); caches.open(V).then(c=>c.put(e.request,cp)); return r; }).catch(()=>caches.match(e.request)));
    return;
  }
  if(u.pathname.includes("/tavole/")||u.hostname.includes("gstatic")||u.hostname.includes("googleapis")||u.pathname.match(/\.(png|svg|webmanifest)$/)){
    e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request).then(r=>{ const cp=r.clone(); caches.open(V).then(c=>c.put(e.request,cp)); return r; })));
  }
});
