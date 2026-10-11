<script>
/* Solo sul sito: installabile e consultabile anche senza rete, dopo la prima visita */
if("serviceWorker" in navigator && location.protocol.indexOf("http")===0){
  window.addEventListener("load",()=>{ navigator.serviceWorker.register("sw.js").catch(()=>{}); });
}
</script>
