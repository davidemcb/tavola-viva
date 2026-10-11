<style>
.coll{border:1px solid color-mix(in srgb,var(--joint) 40%,var(--line));background:color-mix(in srgb,var(--joint) 6%,var(--surface));border-radius:12px;padding:13px 15px;display:flex;flex-direction:column;gap:8px}
.coll .lbl{font-family:var(--mono);font-size:9.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--joint)}
.coll h4{font-size:15.5px;font-family:var(--display)}
.coll .via{font-family:var(--mono);font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:var(--faint);padding:2px 7px;border:1px solid var(--line);border-radius:999px;display:inline-block}
.coll-step{display:grid;grid-template-columns:22px minmax(0,1fr);gap:8px;align-items:start;font-size:13.6px}
.coll-step i{font-family:var(--mono);font-style:normal;font-size:10.5px;color:var(--joint);padding-top:3px}
.coll-step b{font-weight:600}
.coll-step small{display:block;color:var(--muted);margin-top:1px}
.coll-step+.coll-step{border-top:1px dashed var(--line-soft);padding-top:8px}
.coll .fine{font-size:13px;color:var(--muted);border-top:1px solid var(--line-soft);padding-top:8px}
</style>
<script>
/* =========================================================
   COLLEGAMENTI — i percorsi anatomici citati nei "segreti",
   spiegati tappa per tappa. Ogni tappa è cliccabile.
   ========================================================= */
DB.percorsi = [
 {id:"k-massetere-nuca",titolo:"Dal massetere alla nuca",via:"neurologica, meccanica e fasciale",schede:["m-massetere","m-temporale","m-pterigoidei","m-suboccipitali","a-atm","n-grande-occipitale","p-click-mandibola","p-cefalea"],
  tappe:[
   {s:"m-massetere",t:"Massetere e temporale in tensione cronica (serramento, bruxismo)",p:"Mandano al nervo trigemino (V3) un flusso continuo di segnali di tensione e dolore."},
   {s:"a-atm",t:"La mandibola viene tirata in alto e indietro: il condilo comprime la parte posteriore dell'ATM",p:"Il disco si sposta in avanti, compare il click, e il piano di chiusura dei denti cambia di poco."},
   {s:"n-grande-occipitale",t:"Il nucleo del trigemino scende nel midollo fino a C2–C3: è il complesso trigemino-cervicale",p:"Lo stesso nucleo riceve i nervi dei sotto-occipitali e il grande occipitale. Un ingresso dal massetere produce un'uscita riflessa sul collo."},
   {s:"m-suboccipitali",t:"Ipertono riflesso dei sotto-occipitali e dolore riferito alla nuca",p:"La testa si estende sull'atlante di qualche grado per mantenere lo sguardo orizzontale e i denti combacianti: i sotto-occipitali si accorciano e restano così."},
   {s:"c-profonda",t:"La via fasciale chiude il cerchio",p:"Mandibola e ioide sono la stazione alta della Linea Profonda Frontale; la fascia del massetere continua nella fascia temporale, nella galea e nell'occipite, capolinea della Linea Superficiale Posteriore."}],
  fine:"Test: apertura della bocca sotto le tre dita + sotto-occipitali dolenti = si trattano mandibola e nuca nella stessa seduta. Chiedi sempre: «al mattino hai la mascella stanca?»"},

 {id:"k-dorsale-gluteo",titolo:"Dal gran dorsale al gluteo del lato opposto",via:"fasciale (Linea Funzionale Posteriore)",schede:["m-gran-dorsale","m-gluteo-massimo","f-toracolombare","c-funzionale-post","p-braccio-sopra-testa"],
  tappe:[
   {s:"m-gran-dorsale",t:"Il gran dorsale nasce dalla fascia toraco-lombare, non dalle vertebre",p:"Le sue fibre basse si intrecciano nello strato superficiale della fascia con quelle del gluteo massimo controlaterale."},
   {s:"f-toracolombare",t:"La fascia toraco-lombare è una X di fibre incrociate sopra il sacro",p:"Quando il braccio destro tira, la tensione attraversa la fascia e arriva al gluteo sinistro: è ciò che stabilizza il bacino nel lancio e nel passo."},
   {s:"m-gluteo-massimo",t:"Un gluteo spento lascia la fascia floscia da quel lato",p:"Il gran dorsale opposto deve lavorare di più per tendere la diagonale: si affatica e la spalla di quel lato si sovraccarica."},
   {s:"c-funzionale-post",t:"Linea Funzionale Posteriore: omero → gran dorsale → fascia → gluteo → vasto laterale → rotula",p:"Per questo una spalla destra dolorante può nascere da un gluteo sinistro addormentato — e per questo il test del ponte monopodalico fa parte della valutazione di spalla."}],
  fine:"Prova: fai lanciare una palla, poi dieci ponti con la gamba opposta, poi rilancia. La differenza si sente senza aver toccato la spalla."},

 {id:"k-pianta-nuca",titolo:"Dalla pianta del piede alla nuca",via:"fasciale (Linea Superficiale Posteriore)",schede:["m-plantare","f-plantare","m-gastrocnemio","m-soleo","m-ischiocrurali","m-erettori","p-tallone","d-achille","c-sbl"],
  tappe:[
   {s:"f-plantare",t:"Aponeurosi plantare: dal calcagno alle dita",p:"Si avvolge attorno al calcagno e continua, senza interruzione di tessuto, nel periostio del tallone e nel tendine d'Achille."},
   {s:"d-achille",t:"Tendine d'Achille, soleo e gastrocnemio",p:"Il gastrocnemio nasce sopra il ginocchio: la tensione passa l'articolazione e arriva alla coscia posteriore."},
   {s:"m-ischiocrurali",t:"Ischiocrurali fino alla tuberosità ischiatica",p:"Qui la linea cambia binario: il tendine del bicipite femorale continua nel legamento sacro-tuberoso, fino al sacro."},
   {s:"m-erettori",t:"Fascia toraco-lombare ed erettori spinali fino all'occipite",p:"Gli erettori salgono su tutta la colonna e si inseriscono sotto la linea nucale."},
   {s:"f-epicranica",t:"Fascia epicranica: dall'occipite alle sopracciglia",p:"È il capolinea: il cuoio capelluto è l'ultimo tratto della stessa linea che parte dalla pianta."}],
  fine:"Esperimento da fare agli allievi: due minuti di pallina sotto un solo piede, poi flessione in avanti. Quel lato scende di più. È la dimostrazione che la fascia è continua."},

 {id:"k-psoas-diaframma",titolo:"Dallo psoas al diaframma (e al respiro)",via:"fasciale e meccanica (Linea Profonda Frontale)",schede:["m-ileopsoas","m-diaframma","m-quadrato-lombi","f-iliaca","c-profonda","p-alzarsi","p-stare-in-piedi"],
  tappe:[
   {s:"m-diaframma",t:"I pilastri del diaframma scendono sui corpi di L1–L3",p:"Sono tendini che si ancorano alla colonna lombare, davanti."},
   {s:"m-ileopsoas",t:"Lo psoas nasce da T12 a L4, sugli stessi corpi vertebrali",p:"Le fibre più alte dello psoas e i pilastri del diaframma si fondono nei legamenti arcuati: sono un tessuto continuo."},
   {s:"f-iliaca",t:"La fascia iliaca riveste psoas e iliaco e continua in alto nella fascia del diaframma",p:"Chi inspira trattenendo il respiro tiene in tensione questa continuità: lo psoas resta accorciato."},
   {s:"m-quadrato-lombi",t:"Il quadrato dei lombi fissa la dodicesima costa per dare appoggio al diaframma",p:"Diaframma, psoas e quadrato dei lombi formano un triangolo che lavora a ogni respiro: se uno è rigido, lo sono tutti."},
   {s:"c-profonda",t:"Linea Profonda Frontale: dal piede al diaframma, dal diaframma alla mandibola",p:"È la via per cui chi vive in apnea emotiva ha le anche chiuse, e per cui trattare lo psoas cambia il respiro senza toccare il torace."}],
  fine:"Il lavoro sullo psoas si fa in espirazione: non per comodità, ma perché in espirazione i pilastri del diaframma mollano e lo psoas si lascia raggiungere."},

 {id:"k-scaleni-mano",titolo:"Dagli scaleni al formicolio della mano",via:"compressiva (stretto toracico superiore)",schede:["m-scaleni","m-pettorale-piccolo","m-succlavio","x-brachiale","v-succlavia","p-mano-notte","p-formicolio-braccio","o-coste"],
  tappe:[
   {s:"m-scaleni",t:"Respiro alto: gli scaleni lavorano 20.000 volte al giorno e tengono la prima costa sollevata",p:"Il plesso brachiale passa fra scaleno anteriore e medio; con la costa alta il triangolo si chiude."},
   {s:"x-brachiale",t:"Il plesso brachiale e l'arteria succlavia attraversano tre strettoie",p:"Triangolo interscalenico, spazio costo-clavicolare, passaggio sotto il piccolo pettorale: tre punti stretti in sequenza."},
   {s:"m-succlavio",t:"Spalle cadenti: la clavicola scende sulla prima costa",p:"Il succlavio corto chiude lo spazio costo-clavicolare, soprattutto con uno zaino o una borsa a tracolla."},
   {s:"m-pettorale-piccolo",t:"Spalle chiuse: il piccolo pettorale comprime plesso e vasi contro il coracoide",p:"Con il braccio sopra la testa (dormire con le mani dietro la nuca) la compressione aumenta."},
   {s:"n-mediano",t:"Il risultato arriva alla mano come formicolio diffuso, non in una fascia precisa",p:"A differenza del tunnel carpale (prime tre dita) o della radice cervicale (un dermatomero), lo stretto toracico dà tutta la mano o il bordo ulnare, e peggiora con le braccia alzate."}],
  fine:"Test di Adson e test di Wright: il polso radiale che sparisce con la testa ruotata o con il braccio alzato dimostra al cliente, in trenta secondi, che il problema non è nella mano."},

 {id:"k-gluteo-ginocchio",titolo:"Dal gluteo medio al dolore anteriore di ginocchio",via:"meccanica (catena cinetica chiusa)",schede:["m-gluteo-medio","m-tfl","m-quadricipite","a-femoro-rotulea","g-rotuleo","p-ginocchio-scale","b-trocanterica","mv-anca-ri"],
  tappe:[
   {s:"m-gluteo-medio",t:"Un gluteo medio debole non tiene il bacino in appoggio monopodalico",p:"A ogni passo, a ogni gradino, il bacino cade dal lato opposto (Trendelenburg) e il femore ruota internamente."},
   {s:"mv-anca-ri",t:"Il femore in rotazione interna e adduzione porta il ginocchio verso l'interno: valgo dinamico",p:"La rotula, trascinata dal femore, perde il centro della troclea e scivola verso l'esterno."},
   {s:"m-tfl",t:"Il tensore della fascia lata lavora al posto del gluteo e la bandelletta si tende",p:"Il retinacolo laterale della rotula si irrigidisce e tira ancora di più verso fuori."},
   {s:"a-femoro-rotulea",t:"La femoro-rotulea sopporta fino a 7 volte il peso corporeo in discesa, su una superficie ridotta",p:"Il dolore compare scendendo le scale e dopo aver stato seduti a lungo (segno del cinema)."},
   {s:"m-quadricipite",t:"Il vasto mediale si spegne in pochi giorni di dolore e non riesce più a riportare la rotula al centro",p:"Il circolo si chiude: più dolore, meno vasto mediale, più scivolamento laterale."}],
  fine:"Il test che spiega tutto al cliente: squat su una gamba sola davanti a uno specchio. Quando vede il ginocchio cadere all'interno capisce perché lavorerai sull'anca."},

 {id:"k-caviglia-lombare",titolo:"Dalla caviglia rigida alla lombalgia",via:"meccanica (catena ascendente)",schede:["m-soleo","m-gastrocnemio","a-tibio-tarsica","mv-caviglia-dorsi","p-accovacciarsi","p-stare-in-piedi","a-coxo-femorale"],
  tappe:[
   {s:"a-tibio-tarsica",t:"La caviglia non arriva ai 10° di dorsiflessione che servono per camminare",p:"Soleo e gastrocnemio corti, o astragalo che non scivola indietro: il piede non riesce a passare sotto il ginocchio."},
   {s:"mv-caviglia-dorsi",t:"Il corpo cerca i gradi mancanti altrove",p:"Il piede si apre in fuori (rotazione esterna) o il ginocchio va in valgo per far avanzare la tibia."},
   {s:"a-coxo-femorale",t:"L'anca ruota esternamente a ogni passo e perde l'estensione finale",p:"Senza i 20° di estensione d'anca, il passo si accorcia e la spinta viene dalla lombare."},
   {s:"a-lombo-sacrale",t:"La lombare si iperestende a ogni passo per compensare l'anca",p:"Ottomila passi al giorno con una micro-iperestensione lombare: le faccette si irritano e il quadrato dei lombi si accorcia."}],
  fine:"Test del ginocchio al muro: in ginocchio a terra, il ginocchio deve superare le dita del piede di circa 10 cm senza staccare il tallone. Meno di 8 cm, e la lombalgia potrebbe partire da lì."},

 {id:"k-pettorale-romboidi",titolo:"Dal piccolo pettorale al bruciore fra le scapole",via:"meccanica (squilibrio agonista-antagonista)",schede:["m-pettorale-piccolo","m-romboidi","m-trapezio","m-dentato-post","a-scapolo-toracica","post-crociata-sup"],
  tappe:[
   {s:"m-pettorale-piccolo",t:"Il piccolo pettorale corto tira la scapola in avanti e in basso (protrazione e tilt anteriore)",p:"Ore al computer, alla guida, al telefono: le spalle chiuse lo accorciano in modo permanente."},
   {s:"a-scapolo-toracica",t:"La scapola scivola lateralmente sul torace e si allontana dalla colonna",p:"Il margine mediale si sposta di 2–3 cm verso l'esterno: tutto ciò che si inserisce lì viene messo in allungamento."},
   {s:"m-romboidi",t:"I romboidi restano allungati tutto il giorno, in tensione eccentrica continua",p:"Un muscolo tenuto lungo e in tensione brucia: è il dolore interscapolare superficiale, che la persona non riesce a raggiungere con la mano."},
   {s:"m-trapezio",t:"Il trapezio inferiore è spento, il superiore lavora per tutti",p:"È la sindrome crociata superiore di Janda: corti davanti e sopra, lunghi e deboli dietro e sotto."}],
  fine:"Massaggiare i romboidi dà sollievo per due giorni. Allungare il piccolo pettorale e risvegliare il trapezio inferiore cambia la persona per mesi: si tratta il davanti per guarire il dietro."},

 {id:"k-ischiocrurali-sacro",titolo:"Dagli ischiocrurali al sacro",via:"legamentosa e fasciale",schede:["m-ischiocrurali","g-sacrotuberoso","a-sacro-iliaca","o-sacro","d-ischiocrurali-prox","mv-sacro"],
  tappe:[
   {s:"m-ischiocrurali",t:"Il bicipite femorale nasce dalla tuberosità ischiatica",p:"Ma una parte delle sue fibre non si ferma all'osso: continua in alto."},
   {s:"g-sacrotuberoso",t:"Il tendine è in continuità con il legamento sacro-tuberoso, che sale fino al sacro",p:"Tirare l'ischiocrurale significa tirare il sacro verso il basso e in avanti (nutazione)."},
   {s:"a-sacro-iliaca",t:"La sacro-iliaca si muove di 2–4°: basta una trazione asimmetrica per bloccarla",p:"Un ischiocrurale più corto da un lato tiene il sacro in posizione asimmetrica, e il dolore compare sopra la SIPS."},
   {s:"f-toracolombare",t:"Dal sacro la tensione sale nella fascia toraco-lombare",p:"È il binario della Linea Superficiale Posteriore: dagli ischiocrurali alla nuca passando per il sacro."}],
  fine:"Una sacro-iliaca dolente migliora spesso lavorando la coscia posteriore, non il sacro. E gli ischiocrurali «corti» di chi ha il bacino in antiversione sono in realtà lunghi e in protezione: non si allungano a forza."},

 {id:"k-respiro-collo",titolo:"Dal respiro alto alla cervicalgia",via:"funzionale (muscoli respiratori accessori)",schede:["m-scaleni","m-scom","m-diaframma","m-suboccipitali","mv-respiro","p-cervicale-vertigini","p-torcicollo"],
  tappe:[
   {s:"m-diaframma",t:"Un diaframma che non scende (stress, postura seduta, pancia tenuta dentro) lascia il lavoro ai muscoli accessori",p:"Il respiro diventa toracico alto: si vedono le spalle che salgono a ogni inspirazione."},
   {s:"m-scaleni",t:"Scaleni e sternocleidomastoideo sollevano le prime coste e lo sterno 20.000 volte al giorno",p:"Sono muscoli del collo: ogni respiro è una contrazione cervicale."},
   {s:"m-scom",t:"Lo sternocleidomastoideo accorciato porta la testa in avanti",p:"Testa protratta: ogni 2,5 cm di avanzamento raddoppia il carico sui muscoli posteriori del collo."},
   {s:"m-suboccipitali",t:"I sotto-occipitali si accorciano per riportare lo sguardo orizzontale",p:"Cefalea, vertigine cervicogenica, nuca che non migliora mai: ma la causa è nel modo di respirare."}],
  fine:"Insegnare a respirare con la pancia non è un consiglio di benessere: è il trattamento della cervicalgia cronica. Senza quello, ogni seduta ricomincia da capo."},

 {id:"k-piede-anca",titolo:"Dal piede pronato all'anca ruotata",via:"meccanica (catena ascendente)",schede:["m-tibiale-post","a-sotto-astragalica","mv-piede-inv","m-gluteo-medio","a-coxo-femorale","g-spring","post-crociata-inf"],
  tappe:[
   {s:"a-sotto-astragalica",t:"Il piede che prona troppo fa ruotare l'astragalo e la tibia verso l'interno",p:"La sotto-astragalica è un giunto cardanico: ogni grado di pronazione diventa rotazione interna della gamba."},
   {s:"a-femoro-tibiale",t:"La tibia ruotata internamente porta il ginocchio in valgo",p:"Rotula verso l'interno, dolore anteriore e mediale di ginocchio."},
   {s:"a-coxo-femorale",t:"Il femore ruota internamente e l'anca perde la sua stabilità frontale",p:"Il gluteo medio lavora in posizione svantaggiata, si affatica, e il bacino cade dal lato opposto."},
   {s:"a-sacro-iliaca",t:"Il bacino si inclina e ruota: una SIAS più bassa, la lombare in compenso",p:"Ottomila volte al giorno. La lombalgia «senza causa» spesso ha la causa nella scarpa."}],
  fine:"Prima di trattare un'anca guarda il piede in carico: se da dietro vedi «troppe dita» da un lato, quel piede sta scrivendo la storia dell'anca."},

 {id:"k-mandibola-bacino",titolo:"Dalla mandibola al bacino",via:"fasciale (Linea Profonda Frontale) e neurologica",schede:["m-pterigoidei","m-sopraioidei","m-sottoioidei","o-ioide","m-pavimento-pelvico","m-ileopsoas","c-profonda"],
  tappe:[
   {s:"m-sopraioidei",t:"La mandibola è sospesa all'osso ioide dai sopraioidei",p:"Chi serra i denti tiene i sopraioidei allungati e lo ioide tirato in alto."},
   {s:"m-sottoioidei",t:"Dallo ioide i sottoioidei scendono allo sterno",p:"La fascia cervicale media continua nel mediastino, davanti alla colonna, fino al diaframma."},
   {s:"m-diaframma",t:"Il diaframma è il pavimento del torace e il tetto dell'addome",p:"I suoi pilastri si fondono con lo psoas: la linea continua verso il basso."},
   {s:"m-pavimento-pelvico",t:"Diaframma e pavimento pelvico si muovono insieme a ogni respiro",p:"Pavimento pelvico contratto, ileopsoas corto, bacino in antiversione: il fondo della stessa linea che comincia ai denti."}],
  fine:"È il motivo per cui ATM e bacino vanno valutati insieme: le due uniche articolazioni del corpo che lavorano in coppia (destra e sinistra non possono muoversi separatamente) stanno alle due estremità della stessa linea."},

 {id:"k-suboccipitali-equilibrio",titolo:"Dai sotto-occipitali agli occhi e all'equilibrio",via:"neurologica (propriocezione)",schede:["m-suboccipitali","a-occipito-atlantoidea","p-cervicale-vertigini","n-suboccipitale","post-crociata-sup"],
  tappe:[
   {s:"m-suboccipitali",t:"36 fusi neuromuscolari per grammo: i sotto-occipitali sono sensori, non motori",p:"Dicono al cervello dove sta la testa rispetto al collo, momento per momento."},
   {s:"n-suboccipitale",t:"Il loro segnale converge nel tronco encefalico con quello degli occhi e dell'orecchio interno",p:"Il cervello confronta tre fonti: vista, vestibolo, collo. Se una dice una cosa diversa, nasce l'instabilità."},
   {s:"a-occipito-atlantoidea",t:"Con la testa protratta i sotto-occipitali restano accorciati e il segnale è distorto",p:"Sensazione «di barca», difficoltà a mettere a fuoco, testa vuota a fine giornata."},
   {s:"m-scom",t:"Lo sternocleidomastoideo aggiunge i suoi trigger: vertigine, nausea, visione offuscata",p:"È il quadro della vertigine cervicogenica, che va distinta da quella vestibolare (rotatoria, brevissima, posizionale)."}],
  fine:"Chiedi «gira la stanza o giri tu?». Se è «come su una barca» è quasi sempre cervicale: due minuti di sotto-occipitali con le dita ferme, e rimisuri la rotazione del collo."},

 {id:"k-trapezio",titolo:"Dal trapezio inferiore spento al trapezio superiore contratto",via:"meccanica (sinergia scapolare)",schede:["m-trapezio","m-elevatore","m-dentato","a-scapolo-toracica","mv-scapola","p-spalla-alta","p-pettinarsi"],
  tappe:[
   {s:"a-scapolo-toracica",t:"La scapola non ha legamenti: è tenuta solo dai muscoli, in equilibrio fra chi la alza e chi la abbassa",p:"Trapezio superiore ed elevatore la alzano; trapezio inferiore e dentato la abbassano e la fanno ruotare."},
   {s:"m-trapezio",t:"Il trapezio inferiore si spegne con la postura seduta e le spalle chiuse",p:"Nessuno lo allena: è un muscolo che lavora solo quando le braccia salgono sopra la testa."},
   {s:"m-elevatore",t:"La scapola si solleva e ruota verso il basso: elevatore e trapezio superiore lavorano in continuo",p:"Non sono contratti perché lavorano troppo: sono contratti perché nessuno li aiuta dal basso."},
   {s:"mv-scapola",t:"Il ritmo scapolo-omerale si perde: la spalla sale prima di 90° e la cuffia si schiaccia sotto l'acromion",p:"Spalla alta, dolore laterale, trapezio «di marmo». Massaggiarlo dà due giorni di sollievo."}],
  fine:"Il trattamento vero è in basso: dieci ripetizioni di «Y» in prono per risvegliare il trapezio inferiore alla fine di ogni seduta."}
];

function percorsiDi(id){ return DB.percorsi.filter(k=>(k.schede||[]).indexOf(id)>=0); }
function percorsoHTML(k){
  return '<div class="coll"><span class="lbl">◆ Il collegamento, passo per passo</span><h4>'+esc(k.titolo)+'</h4><span class="via">via '+esc(k.via)+'</span>'+
    (k.tappe||[]).map((t,i)=>{ const r=anyById(t.s);
      return '<div class="coll-step"><i>'+(i+1)+'</i><div><b>'+autolink(esc(t.t),null)+'</b><small>'+autolink(esc(t.p),null)+'</small>'+
        (r?'<div style="margin-top:5px">'+pill(t.s)+'</div>':'')+'</div></div>'; }).join("")+
    (k.fine?'<div class="fine">'+autolink(esc(k.fine),null)+'</div>':'')+'</div>';
}
/* innesto: dopo il segreto della scheda */
const _vistaScheda_conPercorsi = vistaScheda;
vistaScheda = function(kind,id){
  let h=_vistaScheda_conPercorsi(kind,id);
  const L=percorsiDi(id); if(!L.length) return h;
  const blocco=L.map(percorsoHTML).join("");
  const i=h.indexOf('<div class="secret">');
  if(i<0) return h.replace('<div class="sheet-body">','<div class="sheet-body">'+blocco);
  const j=h.indexOf('</div>',h.indexOf('</p>',i))+6;
  return h.slice(0,j)+blocco+h.slice(j);
}
/* lista di tutti i collegamenti, raggiungibile dalla home */
function vistaCollegamenti(){
  return crumbs([["Home","home/"],["Collegamenti",null]])+
   '<h1 style="font-size:clamp(23px,5vw,32px);margin-bottom:6px">I collegamenti</h1>'+
   '<p style="margin:0 0 16px;color:var(--muted);max-width:64ch">I percorsi che spiegano perché un dolore nasce lontano da dove si sente. Ogni tappa apre la sua scheda.</p>'+
   '<div style="display:flex;flex-direction:column;gap:14px">'+DB.percorsi.map(percorsoHTML).join("")+'</div>';
}
</script>
