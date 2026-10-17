/* AnatomiaPratica - service worker: tavole e icone in cache; pagina e API sempre dalla rete */
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
