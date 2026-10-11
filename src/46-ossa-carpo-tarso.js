<script>
/* =========================================================
   OSSA DEL CARPO, DEL TARSO E DELLE DITA — una scheda per osso.
   «Ossa della mano» e «Ossa del piede» restano come schede d'insieme.
   ========================================================= */
DB.ossa = DB.ossa.concat([
 /* ---------- CARPO: fila prossimale ---------- */
 {id:"o-scafoide-mano",nome:"Scafoide (della mano)",lat:"Os scaphoideum",regione:"Arto superiore",insieme:"o-mano",
  alias:["scafoide della mano","scafoide carpale","os scaphoideum","tubercolo dello scafoide","tabacchiera anatomica"],
  dove:"Fila prossimale del carpo, lato del pollice. Si palpa nel fondo della tabacchiera anatomica (la fossetta fra i tendini del pollice quando lo si estende) e, dal palmo, come il tubercolo dello scafoide alla base dell'eminenza tenar.",
  forma:"A forma di barchetta, obliquo, è il ponte fra le due file del carpo: si articola con il radio in alto, con semilunare, capitato, osso trapezio e trapezoide. Riceve la vascolarizzazione da un solo lato (distale): il polo prossimale vive «a credito».",
  articola:["a-radio-carpica","a-mediocarpica","a-trapezio-metacarpale"],
  segreto:"È l'osso più fratturato del carpo e il più tradito: la radiografia delle prime due settimane è spesso normale. Caduta sulla mano aperta più dolore alla pressione nella tabacchiera anatomica significa polso immobilizzato e nuova radiografia a dieci giorni, non un massaggio. Se il polo prossimale resta senza sangue, va in necrosi."},
 {id:"o-semilunare",nome:"Semilunare",lat:"Os lunatum",regione:"Arto superiore",insieme:"o-mano",
  alias:["semilunare","lunato","os lunatum","malattia di Kienböck"],
  dove:"Al centro della fila prossimale, fra scafoide e piramidale, sotto il radio. Si palpa sul dorso del polso, subito distale al tubercolo di Lister, nella fossetta che compare flettendo il polso.",
  forma:"A mezzaluna: concavo in basso (accoglie il capitato), convesso in alto (contro il radio). È un osso «intercalato»: nessun tendine si inserisce su di lui, si muove solo per effetto dei vicini e dei legamenti.",
  articola:["a-radio-carpica","a-mediocarpica"],
  segreto:"È l'osso che si lussa nelle cadute violente (lussazione perilunare) e quello che può morire da solo (malattia di Kienböck: necrosi senza trauma, in giovani lavoratori manuali con dolore dorsale sordo al polso). Un polso dorsalmente dolente e gonfio in un ragazzo che usa il martello non è una tendinite finché non lo dice una risonanza."},
 {id:"o-piramidale",nome:"Piramidale",lat:"Os triquetrum",regione:"Arto superiore",insieme:"o-mano",
  alias:["piramidale","triquetro","os triquetrum"],
  dove:"Fila prossimale, lato del mignolo, sotto la stiloide ulnare; si palpa sul bordo ulnare del polso, distalmente alla stiloide, quando si devia radialmente la mano. Il pisiforme gli sta davanti.",
  forma:"A piramide a tre facce. Non tocca l'ulna direttamente: fra i due c'è il disco del TFCC. Si articola con semilunare, uncinato e pisiforme.",
  articola:["a-radio-carpica","a-mediocarpica"],
  segreto:"Il dolore sul lato ulnare del polso che aumenta appoggiandosi sulle mani (alzarsi dalla sedia, flessioni) viene quasi sempre da qui o dal TFCC che lo copre: nel dubbio, confrontare la pressione sul piramidale con l'altro lato prima di accusare i tendini."},
 {id:"o-pisiforme",nome:"Pisiforme",lat:"Os pisiforme",regione:"Arto superiore",insieme:"o-mano",
  alias:["pisiforme","os pisiforme","canale di Guyon"],
  dove:"La pallina ossea che sporge alla base dell'eminenza ipotenar, alla piega del polso dal lato del mignolo. Si muove sotto il dito quando il polso è rilassato e si blocca quando si flette contro resistenza.",
  forma:"Piccolo e rotondo, è un osso sesamoide: sta dentro il tendine del flessore ulnare del carpo e poggia sul piramidale. Con l'uncino dell'uncinato forma il canale di Guyon, dove passa il nervo ulnare.",
  articola:["a-radio-carpica"],
  segreto:"Chi va in bicicletta a lungo o usa il martello pneumatico lo spinge contro il nervo ulnare per ore: formicolio a mignolo e anulare senza problemi al gomito. Prima di trattare il gomito, guardare se il pisiforme è dolente e se la mano è stata appoggiata su qualcosa."},
 /* ---------- CARPO: fila distale ---------- */
 {id:"o-trapezio-osso",nome:"Trapezio (osso del carpo)",lat:"Os trapezium",regione:"Arto superiore",insieme:"o-mano",
  alias:["osso trapezio","trapezio del carpo","trapezio carpale","os trapezium"],
  dove:"Fila distale, alla base del pollice: si palpa subito sotto la tabacchiera anatomica, prima della base del primo metacarpo, muovendo il pollice.",
  forma:"La sua faccia distale è una sella, e la sella è il motivo per cui il pollice si oppone: la trapezio-metacarpale concede due assi e, grazie alla forma, una rotazione automatica. Ha un solco palmare per il tendine del flessore radiale del carpo.",
  articola:["a-trapezio-metacarpale","a-mediocarpica"],
  segreto:"La rizoartrosi è l'artrosi di quest'osso: dolore alla base del pollice nell'aprire i barattoli e nel girare la chiave, soprattutto nelle donne dopo i cinquant'anni. Si distingue dalla De Quervain premendo qui (dolore osseo, grind test) e non sullo stiloide radiale."},
 {id:"o-trapezoide",nome:"Trapezoide",lat:"Os trapezoideum",regione:"Arto superiore",insieme:"o-mano",
  alias:["trapezoide","os trapezoideum"],
  dove:"Fila distale, fra l'osso trapezio e il capitato, alla base del secondo metacarpo. Non si palpa bene: è il più piccolo e il più nascosto della fila distale.",
  forma:"A cuneo, con la faccia dorsale più larga della palmare. Incastra la base del secondo metacarpo e ne fa il raggio più fisso della mano, il pilastro attorno a cui gli altri ruotano.",
  articola:["a-mediocarpica"],
  segreto:"Quasi mai si frattura e quasi mai fa male: è l'osso che dà stabilità al dito indice. Quando l'indice e il medio sono «la mano che non si muove» nel pugno, è anche per i loro metacarpi incastrati su trapezoide e capitato."},
 {id:"o-capitato",nome:"Capitato",lat:"Os capitatum",regione:"Arto superiore",insieme:"o-mano",
  alias:["capitato","grande osso","os capitatum"],
  dove:"Al centro del carpo, alla base del terzo metacarpo. Si palpa sul dorso come la fossetta appena prossimale alla base del terzo metacarpo, che si apre flettendo il polso.",
  forma:"Il più grande del carpo: la sua testa rotonda entra nella concavità di scafoide e semilunare. È il perno attorno a cui ruota tutta la mano nella flessione e nella deviazione; il terzo metacarpo gli è saldato quasi senza movimento.",
  articola:["a-mediocarpica"],
  segreto:"L'asse di flessione-estensione del polso passa per la testa del capitato: è su quel punto che si fa leva per mobilizzare il polso, e il punto che si immobilizza con il tutore. Una pressione dolorosa qui dopo una caduta chiede una radiografia, non un massaggio."},
 {id:"o-uncinato",nome:"Uncinato",lat:"Os hamatum",regione:"Arto superiore",insieme:"o-mano",
  alias:["uncinato","os hamatum","uncino dell'uncinato","amato"],
  dove:"Fila distale, lato del mignolo, sotto il quarto e il quinto metacarpo. L'uncino si palpa dal palmo, 1–2 cm distale e radiale al pisiforme, premendo in profondità nell'eminenza ipotenar.",
  forma:"A cuneo, con un uncino palmare che dà inserzione al retinacolo dei flessori e forma la parete del canale di Guyon. Le basi del quarto e quinto metacarpo si articolano su di lui con una certa mobilità (il quinto raggio è il più mobile dopo il pollice).",
  articola:["a-mediocarpica"],
  segreto:"L'uncino si frattura nei golfisti, nei tennisti e nei battitori: il manico sbatte proprio lì. Dolore profondo nell'eminenza ipotenar, stretta debole, a volte formicolio ulnare, con radiografia normale. Se il dolore alla pressione sull'uncino persiste da settimane, serve una TAC."},
 /* ---------- METACARPI E FALANGI DELLA MANO ---------- */
 {id:"o-metacarpi",nome:"Metacarpi",lat:"Ossa metacarpalia",regione:"Arto superiore",insieme:"o-mano",
  alias:["metacarpo","metacarpi","primo metacarpo","secondo metacarpo","terzo metacarpo","quarto metacarpo","quinto metacarpo","testa del metacarpo","base del metacarpo","osso metacarpale"],
  dove:"Le cinque ossa lunghe del palmo, dal carpo alle nocche: le teste sono le nocche, le basi stanno alla radice del palmo. Si palpano dal dorso per tutta la lunghezza.",
  forma:"Ossa lunghe in miniatura: base, corpo e testa. Il primo è il più corto e il più mobile (si articola con il trapezio a sella); il secondo e il terzo sono quasi fissi (pilastro centrale); il quarto e il quinto hanno 10–20° di mobilità (il pugno che si chiude «a coppa»). Le teste sono a camma: più larghe palmarmente, tendono i collaterali in flessione.",
  articola:["a-trapezio-metacarpale","a-metacarpo-falangee","a-mediocarpica"],
  segreto:"La frattura del collo del quinto metacarpo si chiama «del pugile» perché viene dal pugno contro il muro; quella del quarto e quinto metacarpo nelle cadute sulla mano chiusa. Un dito che, nel chiudere il pugno, ruota e va sotto il vicino (sovrapposizione) significa frattura rotata: va vista subito, non trattata."},
 {id:"o-falangi-mano",nome:"Falangi della mano",lat:"Phalanges manus",regione:"Arto superiore",insieme:"o-mano",
  alias:["falangi della mano","falange prossimale","falange media","falange distale","falange ungueale","falangi delle dita","falange del pollice"],
  dove:"Quattordici: tre per ogni dito lungo (prossimale, media, distale) e due per il pollice. Si palpano facilmente; le interlinee articolari corrispondono alle pieghe delle dita, un po' più distali.",
  forma:"Ossa lunghe piccolissime con la base concava e la testa a troclea: per questo le interfalangee sono cerniere pure. La falange distale ha una tuberosità a ferro di cavallo che sostiene il polpastrello e l'unghia. Sulla faccia palmare corrono i tendini flessori dentro le pulegge.",
  articola:["a-metacarpo-falangee","a-interfalangee"],
  segreto:"Il dito «a martello» (la falange distale che resta flessa dopo una pallonata) è la rottura dell'estensore sulla falange distale: va messo in estensione con uno stecco per sei-otto settimane senza mai piegarlo, altrimenti resta così. Il dito «a bottoniera» (media flessa, distale estesa) è la bandelletta centrale che si rompe. Non sono problemi da mobilizzare: sono da immobilizzare."},
 /* ---------- TARSO ---------- */
 {id:"o-calcagno",nome:"Calcagno",lat:"Calcaneus",regione:"Arto inferiore",insieme:"o-piede",
  alias:["calcagno","calcaneus","tuberosità del calcagno","sustentaculum tali","tubercolo mediale del calcagno","sperone calcaneare","tallone osseo"],
  dove:"L'osso del tallone, il più grande del piede: si palpa tutto intorno al tallone; la tuberosità posteriore riceve il tendine d'Achille, il tubercolo mediale sotto la pianta dà origine alla fascia plantare. Il sustentaculum tali è la mensola mediale, due dita sotto il malleolo mediale.",
  forma:"Lungo e squadrato, poggia a terra con la tuberosità e regge l'astragalo sul sustentaculum e sulle tre faccette della sotto-astragalica. Il suo asse è leggermente valgo (5°) in piedi: l'inclinazione del calcagno decide se il piede è piatto o cavo. Il seno del tarso è il tunnel fra calcagno e astragalo, davanti al malleolo laterale.",
  articola:["a-sotto-astragalica","a-medio-tarsica","a-talo-navicolare"],
  segreto:"Lo «sperone» che si vede alla radiografia non è la causa del dolore al tallone: metà delle persone senza dolore ce l'ha, e molte con fascite non lo hanno. Il dolore viene dall'inserzione della fascia e dalla borsa sotto il tubercolo mediale; trattare il polpaccio corto dà più risultato che inseguire lo sperone."},
 {id:"o-astragalo",nome:"Astragalo",lat:"Talus",regione:"Arto inferiore",insieme:"o-piede",
  alias:["astragalo","talo","talus","troclea astragalica","collo dell'astragalo","testa dell'astragalo","os trigonum"],
  dove:"Fra i malleoli, sopra il calcagno: la sua troclea si palpa davanti alla caviglia, fra i due malleoli, quando il piede si flette plantarmente (compare il «bordo» della troclea). La testa si palpa davanti al malleolo mediale, verso lo scafoide: sporge nel piede pronato.",
  forma:"Nessun muscolo si inserisce su di lui: è un osso passivo, incastrato fra tibia, perone, calcagno e scafoide, e riceve il peso del corpo per distribuirlo indietro (calcagno) e avanti (arco). La troclea è più larga davanti: la caviglia dorsiflessa si incastra, flessa plantarmente è lassa (le distorsioni avvengono in flessione plantare). Il 60 % è coperto di cartilagine: poca superficie per i vasi.",
  articola:["a-tibio-tarsica","a-sotto-astragalica","a-talo-navicolare"],
  segreto:"L'astragalo è il «giunto cardanico» fra gamba e piede: quando il piede prona, la testa dell'astragalo scivola in dentro e in basso e la tibia ruota internamente con lui, fino al ginocchio. Chi guarda un ginocchio valgo deve guardare la testa dell'astragalo: se sporge dal lato interno, il problema parte da sotto."},
 {id:"o-navicolare",nome:"Scafoide del piede (navicolare)",lat:"Os naviculare",regione:"Arto inferiore",insieme:"o-piede",
  alias:["navicolare","scafoide del piede","scafoide tarsale","os naviculare","tuberosità dello scafoide","tuberosità del navicolare","navicular drop","os tibiale externum","scafoide accessorio"],
  dove:"Il bozzo osseo sul bordo mediale del piede, una o due dita davanti e sotto il malleolo mediale: è la tuberosità dello scafoide, dove si inserisce il tibiale posteriore. È la chiave di volta dell'arco longitudinale mediale.",
  forma:"A barchetta: concavo dietro (riceve la testa dell'astragalo), convesso davanti (porta i tre cuneiformi). La sua altezza da terra in carico misura l'arco; la sua discesa nel passare da seduto a in piedi (navicular drop) misura quanto il piede prona.",
  articola:["a-talo-navicolare","a-medio-tarsica","a-tarso-metatarsale"],
  segreto:"Un osso accessorio (scafoide accessorio, os tibiale externum) c'è nel 10 % delle persone e in alcuni fa male perché il tibiale posteriore si inserisce su di lui invece che sullo scafoide: il «bozzo» dolente che sfrega nella scarpa in un adolescente sportivo. La frattura da stress dello scafoide, nei corridori, dà dolore vago sul dorso del mediopiede e non si vede alla radiografia: pressione dolorosa sul punto N (il centro del dorso dello scafoide) = risonanza."},
 {id:"o-cuboide",nome:"Cuboide",lat:"Os cuboideum",regione:"Arto inferiore",insieme:"o-piede",
  alias:["cuboide","os cuboideum","sindrome del cuboide","solco del peroneo lungo"],
  dove:"Sul bordo laterale del piede, fra il calcagno e le basi del quarto e quinto metatarso, davanti al tubercolo del calcagno. Si palpa come un osso cubico dolente a volte nella pianta laterale, dietro la base del quinto metatarso.",
  forma:"A cubo, è la chiave di volta dell'arco laterale. Sulla faccia plantare ha un solco per il tendine del peroneo lungo, che lo usa come puleggia per attraversare la pianta e arrivare al primo raggio.",
  articola:["a-medio-tarsica","a-tarso-metatarsale"],
  segreto:"La «sindrome del cuboide»: dopo una distorsione in inversione (o nei ballerini), il peroneo lungo tira il cuboide fuori posto di pochi millimetri e il piede fa male nella pianta laterale, soprattutto nella spinta. Non si vede alla radiografia; si tratta con una manovra di riposizionamento (il «cuboid whip») e si previene con i peronei forti."},
 {id:"o-cuneiformi",nome:"Cuneiformi (mediale, intermedio, laterale)",lat:"Ossa cuneiformia",regione:"Arto inferiore",insieme:"o-piede",
  alias:["cuneiforme","cuneiformi","primo cuneiforme","cuneiforme mediale","cuneiforme intermedio","cuneiforme laterale","secondo cuneiforme","terzo cuneiforme","ossa cuneiformi"],
  dove:"I tre cunei fra lo scafoide e i primi tre metatarsi, sul dorso del mediopiede. Il mediale è il più grande e si palpa sul bordo interno del piede, davanti allo scafoide, prima della base del primo metatarso.",
  forma:"A cuneo con la base in alto (mediale) o in basso (intermedio e laterale): incastrati così formano l'arco trasverso del mediopiede, come le pietre di una volta. L'intermedio è il più corto e crea una nicchia in cui si incastra la base del secondo metatarso (la chiave di volta di Lisfranc). Tibiale anteriore e peroneo lungo si inseriscono sul mediale: uno lo tira su e in dentro, l'altro giù e in fuori.",
  articola:["a-tarso-metatarsale","a-medio-tarsica"],
  segreto:"Il cuneiforme mediale è il punto d'incontro delle due «staffe» del piede: tibiale anteriore dall'alto, peroneo lungo dal basso. Se il peroneo lungo è debole, il primo raggio si alza e il carico passa sul secondo metatarso; se il tibiale anteriore è debole, l'arco cede. Nel piede piatto, prima di parlare di plantari, testare questi due muscoli."},
 {id:"o-metatarsi",nome:"Metatarsi",lat:"Ossa metatarsalia",regione:"Arto inferiore",insieme:"o-piede",
  alias:["metatarso","metatarsi","primo metatarso","secondo metatarso","terzo metatarso","quarto metatarso","quinto metatarso","testa del metatarso","teste metatarsali","base del quinto metatarso","osso metatarsale","metatarsale"],
  dove:"Le cinque ossa lunghe dell'avampiede, dal tarso alle dita. Le teste poggiano a terra e si palpano sotto la pianta (l'avampiede); la base del quinto sporge sul bordo laterale a metà del piede (inserzione del peroneo breve).",
  forma:"Il primo è corto e grosso: porta da solo metà del carico dell'avampiede, con i due sesamoidi sotto la testa. Il secondo è il più lungo e il più fisso (incastrato fra i cuneiformi): per questo è quello che si rompe da stress. Il quinto ha una tuberosità alla base (la frattura di Jones è lì vicino) ed è il più mobile.",
  articola:["a-tarso-metatarsale","a-metatarso-falangee"],
  segreto:"Metatarsalgia sotto la seconda e terza testa vuol dire quasi sempre che il primo raggio non fa il suo lavoro: alluce valgo, primo metatarso corto o ipermobile, polpaccio corto che porta il peso in avanti. Il callo sotto la seconda testa è la firma. Si tratta la causa a monte, non il callo."},
 {id:"o-falangi-piede",nome:"Falangi del piede",lat:"Phalanges pedis",regione:"Arto inferiore",insieme:"o-piede",
  alias:["falangi del piede","falangi delle dita del piede","falange dell'alluce","falange prossimale dell'alluce","falange distale dell'alluce","dita a martello","dito a martello del piede","dita a griffe"],
  dove:"Quattordici: due per l'alluce, tre per le altre dita. Le dell'alluce sono grandi e portano carico nella spinta; quelle del quinto dito spesso sono fuse (due invece di tre).",
  forma:"Piccole ossa lunghe con basi concave e teste a troclea. L'alluce lavora come leva nella spinta (meccanismo dell'argano); le dita lunghe servono soprattutto a stabilizzare e a sentire il terreno. Le falangi distali reggono l'unghia.",
  articola:["a-metatarso-falangee"],
  segreto:"Le dita a martello e a griffe non sono un problema delle dita ma dei muscoli che le muovono: i flessori lunghi che tirano perché il piede è instabile o la scarpa è stretta, mentre gli intrinseci (lombricali e interossei) non reggono. Finché la deformità è riducibile con le mani, lavoro sugli intrinseci e spazio nella scarpa; quando è fissa, è dell'ortopedico."},
 {id:"o-sesamoidi-piede",nome:"Sesamoidi dell'alluce",lat:"Ossa sesamoidea",regione:"Arto inferiore",insieme:"o-piede",
  alias:["sesamoidi","sesamoidi dell'alluce","sesamoide mediale","sesamoide laterale","sesamoidite","ossa sesamoidee"],
  dove:"Due piccole ossa sotto la testa del primo metatarso, dentro il tendine del flessore breve dell'alluce; si palpano premendo sotto la «pallina» dell'alluce, uno mediale e uno laterale.",
  forma:"Come due rotule in miniatura: scorrono in due solchi sotto la testa metatarsale, aumentano la leva del flessore breve e proteggono il tendine del flessore lungo che passa fra loro. Portano il carico della spinta e dell'appoggio sulle punte.",
  articola:["a-metatarso-falangee"],
  segreto:"La sesamoidite è il dolore sotto l'alluce di ballerini, corridori e chi porta i tacchi: dolore preciso premendo sul sesamoide, peggio nell'estensione dell'alluce. Nell'alluce valgo i sesamoidi restano al loro posto mentre il metatarso scappa verso l'interno: alla radiografia sembrano «lussati», ma sono loro ad essere rimasti fermi."}
]);

/* ---- ogni osso singolo compare come osso d'origine/inserzione dei muscoli giusti ---- */
(function(){
  const addI={ "m-flessori-polso":["o-metacarpi","o-pisiforme"],"m-flessori-dita":["o-falangi-mano"],"m-estensori-polso":["o-metacarpi"],
    "m-estensori-dita":["o-falangi-mano","o-metacarpi"],"m-intrinseci-mano":["o-falangi-mano","o-metacarpi"],
    "m-estensori-dita-piede":["o-falangi-piede","o-metatarsi"],"m-flessori-dita-piede":["o-falangi-piede"],"m-intrinseci-piede":["o-falangi-piede"],
    "m-plantare-gracile":["o-calcagno"],"m-gastrocnemio":["o-calcagno"],"m-soleo":["o-calcagno"],"m-tibiale-ant":["o-cuneiformi","o-metatarsi"],
    "m-tibiale-post":["o-navicolare","o-cuneiformi","o-metatarsi"],"m-peronei":["o-cuneiformi","o-metatarsi"],"m-plantare":["o-falangi-piede"] };
  const addO={ "m-intrinseci-mano":["o-scafoide-mano","o-trapezio-osso","o-pisiforme","o-uncinato","o-metacarpi"],
    "m-intrinseci-piede":["o-calcagno","o-metatarsi"],"m-plantare":["o-calcagno"] };
  const put=(map,campo)=>Object.keys(map).forEach(mid=>{ const m=DB.muscoli.find(x=>x.id===mid); if(!m) return; m[campo]=(m[campo]||[]).concat(map[mid].filter(o=>(m[campo]||[]).indexOf(o)<0)); });
  put(addI,"ossaI"); put(addO,"ossaO");
})();

/* ---- tavole: ogni osso delle tavole mano e piede apre la sua scheda ---- */
(function(){
  const relabel=(tav,vecchio,lista)=>{ let k=0; tav.svg=tav.svg.split('data-osso="'+vecchio+'"').reduce((a,p,i)=>i===0?p:a+'data-osso="'+(lista[k++]||vecchio)+'"'+p,""); };
  if(DB.tavole.mano) relabel(DB.tavole.mano,"o-mano",["o-scafoide-mano","o-semilunare","o-piramidale","o-trapezio-osso","o-capitato","o-uncinato","o-metacarpi","o-falangi-mano","o-falangi-mano"]);
  if(DB.tavole.piede) relabel(DB.tavole.piede,"o-piede",["o-astragalo","o-calcagno","o-navicolare","o-cuboide","o-cuneiformi","o-cuneiformi","o-metatarsi","o-metatarsi","o-metatarsi","o-falangi-piede","o-falangi-piede","o-falangi-piede","o-falangi-piede"]);
  const mano=["o-scafoide-mano","o-semilunare","o-piramidale","o-pisiforme","o-trapezio-osso","o-trapezoide","o-capitato","o-uncinato","o-metacarpi","o-falangi-mano"];
  const piede=["o-calcagno","o-astragalo","o-navicolare","o-cuboide","o-cuneiformi","o-metatarsi","o-falangi-piede","o-sesamoidi-piede"];
  mano.forEach(id=>{ TAVOLA_PER_OSSO[id]="mano"; DB.immagini[id]=DB.immagini["o-mano"]; });
  piede.forEach(id=>{ TAVOLA_PER_OSSO[id]="piede"; DB.immagini[id]=DB.immagini["o-piede"]; });
})();

/* ---- collegamenti: dall'insieme alle singole ossa e viceversa ---- */
const _collegamenti_conCarpoTarso = collegamenti;
collegamenti = function(kind,it){
  let h=_collegamenti_conCarpoTarso(kind,it);
  if(kind!=="osso") return h;
  const box=(titolo,html)=>'<section><div class="seg" style="margin-bottom:8px">'+titolo+'</div>'+html+'</section>';
  const parti=DB.ossa.filter(o=>o.insieme===it.id).map(o=>o.id);
  if(parti.length) h=box("Le singole ossa",pills(parti))+h;
  if(it.insieme) h=box("Fa parte di",pills([it.insieme]))+h;
  return h;
};
</script>
