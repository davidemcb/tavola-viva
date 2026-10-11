<style>
.pill.v{color:#B8452F}.pill.g{color:var(--joint)}.pill.f{color:var(--fascia)}.pill.t{color:var(--muted)}.pill.d{color:#8A5A2B}.pill.b{color:#6B7F3A}
.lk{border:0;background:none;padding:0;margin:0;font:inherit;color:inherit;cursor:pointer;
    text-decoration:underline;text-decoration-style:dotted;text-decoration-thickness:1px;text-underline-offset:3px;
    text-decoration-color:color-mix(in srgb,currentColor 45%,transparent);border-radius:3px}
.lk:hover{text-decoration-style:solid;background:var(--fascia-soft)}
.lk.k-muscolo{text-decoration-color:color-mix(in srgb,var(--muscle) 70%,transparent)}
.lk.k-osso{text-decoration-color:color-mix(in srgb,var(--bone) 80%,transparent)}
.lk.k-nervo{text-decoration-color:color-mix(in srgb,var(--nerve) 80%,transparent)}
.lk.k-arteria{text-decoration-color:#C0563D}
.lk.k-articolazione,.lk.k-legamento,.lk.k-tipo{text-decoration-color:color-mix(in srgb,var(--joint) 70%,transparent)}
.lk.k-tendine{text-decoration-color:#A9743A}
.lk.k-borsa{text-decoration-color:#7E9448}
.lk.k-fascia,.lk.k-catena{text-decoration-color:color-mix(in srgb,var(--fascia) 70%,transparent)}
.legenda{display:flex;flex-wrap:wrap;gap:4px 12px;font-size:11.5px;color:var(--faint);align-items:center}
.legenda i{display:inline-flex;align-items:center;gap:5px;font-style:normal}
.legenda i::before{content:"";width:16px;height:2px;border-radius:2px;background:currentColor}
</style>
<script>
/* =========================================================
   COLLEGAMENTI NEL TESTO
   Ogni termine riconosciuto dentro origine, inserzione,
   innervazione, vascolarizzazione ecc. diventa cliccabile.
   ========================================================= */

/* Sinonimi e reperi che nei testi compaiono con nomi diversi dalla scheda.
   I termini rivendicati da più schede vengono scartati automaticamente. */
const ALIAS_EXTRA = {
 "o-cranio":["occipite","occipitale","protuberanza occipitale esterna","linea nucale superiore","linea nucale inferiore","forame occipitale","processo mastoideo","mastoide"],
 "o-mandibola":["mandibola","mandibolare","mento"],
 "o-clavicola":["clavicola"],
 "o-scapola":["scapola","acromion","processo coracoideo","coracoide","fossa sovraspinata","fossa sottospinata","spina della scapola","angolo inferiore della scapola","margine mediale della scapola","incisura sovrascapolare","cavità glenoidea","glena","tubercolo sovraglenoideo","tubercolo sottoglenoideo"],
 "o-omero":["omero","tubercolo maggiore","tubercolo minore","solco bicipitale","tuberosità deltoidea","epicondilo laterale","epicondilo mediale","troclea omerale","capitulum","solco spirale","collo chirurgico"],
 "o-radio":["radio","testa del radio","stiloide radiale","tuberosità radiale"],
 "o-ulna":["ulna","olecrano","stiloide ulnare","incisura trocleare"],
 "o-sterno":["sterno","manubrio","processo xifoideo","incisura giugulare","angolo sternale"],
 "o-coste":["coste","costa","cartilagini costali","prima costa","solco costale"],
 "o-vertebre-c":["vertebre cervicali","atlante","epistrofeo","dente dell'epistrofeo","processi trasversi cervicali"],
 "o-vertebre-t":["vertebre toraciche","processi spinosi toracici"],
 "o-vertebre-l":["vertebre lombari","corpi vertebrali lombari","processi trasversi lombari"],
 "o-sacro":["sacro","coccige","cresta sacrale","forami sacrali","faccia anteriore del sacro"],
 "o-ileo":["ileo","cresta iliaca","spina iliaca antero-superiore","spina iliaca antero-inferiore","SIAS","SIPS","tuberosità ischiatica","ischio","pube","cresta pubica","sinfisi pubica","acetabolo","fossa iliaca","ala iliaca","spina ischiatica","tubercolo pubico","ramo ischio-pubico"],
 "o-femore":["femore","gran trocantere","piccolo trocantere","linea aspra","condili femorali","condilo femorale mediale","testa del femore","collo del femore","tuberosità glutea"],
 "o-rotula":["rotula","patella"],
 "o-tibia":["tibia","tuberosità tibiale","condilo tibiale laterale","condilo tibiale mediale","malleolo mediale","tubercolo di Gerdy","zampa d'oca","cresta tibiale","piatti tibiali"],
 "o-perone":["perone","testa del perone","malleolo laterale","collo del perone"],
 "o-piede":["calcagno","astragalo","scafoide","cuboide","cuneiforme","cuneiformi","metatarso","metatarsi","falangi","tuberosità del calcagno","sustentaculum tali","primo metatarso","quinto metatarso"],
 "m-ileopsoas":["psoas","grande psoas","iliaco","ileo-psoas","ileopsoas"],
 "m-gran-dorsale":["gran dorsale","grande dorsale"],
 "m-pettorale-grande":["grande pettorale","gran pettorale"],
 "m-pettorale-piccolo":["piccolo pettorale"],
 "m-gluteo-massimo":["grande gluteo","gluteo massimo","gluteo grande"],
 "m-gluteo-medio":["gluteo medio","medio gluteo","piccolo gluteo","gluteo minimo"],
 "m-quadricipite":["quadricipite","vasto laterale","vasto mediale","retto femorale","vasto intermedio"],
 "m-ischiocrurali":["ischiocrurali","bicipite femorale","semitendinoso","semimembranoso","ischio-crurali"],
 "m-erettori":["erettori spinali","paravertebrali","ileocostale","lunghissimo","massa comune"],
 "m-gastrocnemio":["gastrocnemio","gemelli","tricipite surale","tendine d'Achille"],
 "m-soleo":["soleo","arcata del soleo"],
 "m-trasverso":["trasverso dell'addome","trasverso addominale"],
 "m-scom":["sternocleidomastoideo","SCOM"],
 "m-trapezio":["trapezio","trapezio superiore","trapezio inferiore"],
 "m-dentato":["dentato anteriore","gran dentato"],
 "m-tfl":["tensore della fascia lata","bandelletta","tratto ileotibiale"],
 "m-diaframma":["diaframma","pilastri del diaframma","centro frenico"],
 "m-adduttori":["adduttori","adduttore lungo","grande adduttore","gracile","pettineo"],
 "m-tibiale-post":["tibiale posteriore"],
 "m-peronei":["peronei","peroneo lungo","peroneo breve"],
 "m-plantare":["muscoli intrinseci del piede"],
 "m-sovraspinato":["sovraspinato","sopraspinato"],
 "m-sottospinato":["sottospinato","infraspinato"],
 "m-sottoscapolare":["sottoscapolare"],
 "m-rotondi":["piccolo rotondo","grande rotondo","spazio quadrangolare"],
 "m-quadrato-lombi":["quadrato dei lombi","quadrato lombare"],
 "m-suboccipitali":["sotto-occipitali","suboccipitali","triangolo sotto-occipitale"],
 "m-scaleni":["scaleni","scaleno anteriore","scaleno medio","triangolo interscalenico"],
 "a-gleno-omerale":["gleno-omerale"],
 "a-coxo-femorale":["coxo-femorale","articolazione dell'anca"],
 "a-femoro-tibiale":["femoro-tibiale"],
 "a-femoro-rotulea":["femoro-rotulea"],
 "a-sacro-iliaca":["sacro-iliaca","sacroiliaca"],
 "a-tibio-tarsica":["tibio-tarsica"],
 "a-sotto-astragalica":["sotto-astragalica"],
 "a-medio-tarsica":["medio-tarsica","Chopart"],
 "a-radio-carpica":["radio-carpica"],
 "a-intervertebrale":["faccette articolari","faccette","disco intervertebrale","dischi intervertebrali","unità vertebrale"],
 "a-scapolo-toracica":["scapolo-toracica"],
 "a-atm":["temporo-mandibolare","ATM"],
 "v-carotide":["seno carotideo"],
 "v-aorta":["aorta"],
 "v-femorale":["triangolo femorale","canale degli adduttori"],
 "v-poplitea":["cavo popliteo"],
 "v-linfatico":["drenaggio linfatico","linfonodi","dotto toracico"],
 "g-retinacolo-flessori":["tunnel carpale","legamento trasverso del carpo"],
 "g-inguinale":["legamento inguinale"],
 "g-sacrotuberoso":["legamento sacro-tuberoso"],
 "g-coraco-acromiale":["spazio sotto-acromiale","arco coraco-acromiale","sotto l'acromion"],
 "g-crociati":["crociato anteriore","crociato posteriore"],
 "g-menischi":["menisco mediale","menisco laterale","menischi"],
 "g-membrana-interossea":["membrana interossea"],
 "f-toracolombare":["fascia toraco-lombare","fascia lombare"],
 "f-lata":["fascia lata"],
 "f-plantare":["fascia plantare","aponeurosi plantare"],
 "f-clavipettorale":["fascia clavi-pettorale"],
 "f-addominale":["linea alba","aponeurosi addominale","guaina dei retti"],
 "f-iliaca":["fascia iliaca"],
 "f-profonda":["fascia profonda","epimisio"],
 "f-superficiale":["fascia superficiale"],
 "c-sbl":["Linea Superficiale Posteriore","catena posteriore"],
 "c-sfl":["Linea Superficiale Frontale"],
 "c-profonda":["Linea Profonda Frontale"],
 "c-spirale":["Linea Spirale"],
 "c-laterale":["Linea Laterale"],
 "t-diartrosi":["articolazione sinoviale","diartrosi"],
 "t-ginglimo":["ginglimo","trocleartrosi"],
 "t-enartrosi":["enartrosi"],
 "t-artrodia":["artrodia","artrodie"],
 "t-anfiartrosi":["anfiartrosi","sinfisi"],
 "t-sinartrosi":["sinartrosi","sindesmosi"],
 "t-condiloidea":["condiloidea"],
 "t-trocoide":["trocoide"],
 "t-sellare":["sellare"]
};

const STOP_TERMINI=new Set(["frontale","temporale","nasale","laterale","mediale","anteriore","posteriore","superficiale","profonda","piana","parietale","zigomatico","mascellare","occipitale","sfenoide","etmoide"]);
let TERMINI=[], TERM_MAP=null, MAXW=1;
const PAROLE_TIPO=/^(nervo|nervi|arteria|arterie|articolazione|articolazioni|legamento|legamenti|muscolo|muscoli|fascia|fasce|linea|plesso|vertebre|ossa|osso)\s+/i;
const RE_TOKEN=new RegExp("([A-Za-z0-9'\u00C0-\u017F\u2019\\-]+)");

function buildTermini(){
  const claim={};
  const add=(t,kind,id)=>{
    t=String(t||"").trim(); if(t.length<4) return;
    const k=t.toLowerCase();
    (claim[k]=claim[k]||{lista:[],testo:t}).lista.push({kind:kind,id:id});
  };
  Object.keys(KINDS).forEach(kind=>{
    (KINDS[kind].db()||[]).forEach(it=>{
      const nome=it.nome||it.voce; if(!nome) return;
      if(!STOP_TERMINI.has(nome.toLowerCase())) add(nome,kind,it.id);
      const corto=nome.replace(PAROLE_TIPO,"");
      if(corto!==nome && !STOP_TERMINI.has(corto.toLowerCase())) add(corto,kind,it.id);
      (it.alias||[]).forEach(a=>add(a,kind,it.id));
      if(it.sigla) add(it.sigla,kind,it.id);
    });
  });
  Object.keys(ALIAS_EXTRA).forEach(id=>{
    const r=anyById(id); if(!r) return;
    ALIAS_EXTRA[id].forEach(a=>add(a,r.kind,id));
  });
  TERMINI=[]; TERM_MAP={}; MAXW=1;
  Object.keys(claim).forEach(k=>{
    const c=claim[k];
    const unici={}; c.lista.forEach(x=>unici[x.id]=x);
    const ids=Object.keys(unici);
    if(ids.length!==1) return;                 /* termine ambiguo: si scarta */
    const voce={t:c.testo,kind:unici[ids[0]].kind,id:ids[0],k:k};
    TERMINI.push(voce); TERM_MAP[k]=voce;
    const n=k.split(" ").length; if(n>MAXW) MAXW=n;
  });
  TERMINI.sort((a,b)=>b.k.length-a.k.length);
}

/* testo GIA' passato da esc(): restituisce html con i termini cliccabili.
   Nessuna regex gigante: si scorrono le parole e si provano i gruppi piu' lunghi. */
function autolink(testo,selfId){
  if(!TERM_MAP) return testo;
  const p=String(testo).split(RE_TOKEN);       /* indici dispari = parole */
  let out="", i=0;
  while(i<p.length){
    if(i%2===0){ out+=p[i]; i++; continue; }
    let preso=false;
    for(let k=Math.min(MAXW,(p.length-i+1)/2|0); k>=1 && !preso; k--){
      let frase=p[i], j=i+1, ok=true;
      for(let n=1;n<k;n++){
        if(p[j]!==" "){ ok=false; break; }
        frase+=" "+p[j+1]; j+=2;
      }
      if(!ok) continue;
      const x=TERM_MAP[frase.toLowerCase()];
      if(x && x.id!==selfId){
        out+='<button class="lk k-'+x.kind+'" data-go="'+x.kind+'/'+x.id+'" title="Apri: '+x.t+'">'+frase+'</button>';
        i=j; preso=true;
      }
    }
    if(!preso){ out+=p[i]; i++; }
  }
  return out;
}

/* cerca dentro un testo libero il termine conosciuto piu' lungo */
function trovaTermine(testo){
  if(!TERMINI.length) return null;
  const t=String(testo||"").toLowerCase();
  for(let i=0;i<TERMINI.length;i++){ if(t.indexOf(TERMINI[i].k)>=0) return TERMINI[i]; }
  return null;
}

/* muscoli irrorati da un vaso: si deduce dal testo della vascolarizzazione */
rel.muscoliDiArteria = function(vid){
  const v=DB.arterie.find(x=>x.id===vid); if(!v) return [];
  const chiavi=[v.nome.replace(PAROLE_TIPO,"")].concat(v.alias||[]).map(s=>s.toLowerCase());
  return DB.muscoli.filter(m=>{
    const t=(m.vascol||"").toLowerCase();
    return chiavi.some(k=>k.length>3 && t.indexOf(k)>=0);
  });
};
rel.legamentiDiArt = aid => DB.legamenti.filter(g=>(g.art||[]).includes(aid));
rel.articolazioniDiTipo = tid => {
  const t=DB.tipi.find(x=>x.id===tid); if(!t) return [];
  const chiavi=[t.nome.toLowerCase()].concat((t.alias||[]).map(s=>s.toLowerCase()));
  return DB.articolazioni.filter(a=>{
    const s=(a.tipo||"").toLowerCase();
    return chiavi.some(k=>s.indexOf(k)>=0);
  });
};
</script>
