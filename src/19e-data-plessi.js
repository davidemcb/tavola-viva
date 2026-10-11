<script>
/* PLESSI NERVOSI — id con prefisso x- */
DB.plessi = [
 {id:"x-cervicale",nome:"Plesso cervicale",lat:"Plexus cervicalis",radici:"C1–C4",regione:"Collo",
  alias:["plesso cervicale","rami anteriori cervicali","rami anteriori dei nervi cervicali"],
  formazione:"I rami anteriori dei primi quattro nervi cervicali si uniscono in tre anse davanti ai processi trasversi, sotto lo sternocleidomastoideo e sopra l'elevatore della scapola. Si divide in un gruppo superficiale (sensitivo) e uno profondo (motorio).",
  sedi:"Punto di Erb, a metà del margine posteriore dello sternocleidomastoideo: è il punto in cui tutti i rami sensitivi bucano la fascia e diventano sottocutanei.",
  rami:["n-frenico","n-accessorio"],
  ramiTesto:"Superficiali: piccolo occipitale, grande auricolare, cutaneo del collo, sopraclaveari. Profondi: ansa cervicale per i muscoli sotto-ioidei, rami per scaleni ed elevatore della scapola, e soprattutto il nervo frenico.",
  lesioni:"Nevralgia cervico-brachiale alta, dolore riferito a orecchio e mandibola, singhiozzo persistente per irritazione del frenico.",
  segreto:"Da qui nasce il nervo frenico: C3, C4, C5 tengono vivo il diaframma. È il motivo anatomico per cui una cervicale rigida cambia il respiro e per cui un diaframma bloccato dà dolore alla punta della spalla. Quando una spalla non guarisce mai, guarda come respira la persona."},

 {id:"x-brachiale",nome:"Plesso brachiale",lat:"Plexus brachialis",radici:"C5, C6, C7, C8, T1",regione:"Collo e arto superiore",
  alias:["plesso brachiale"],
  formazione:"Cinque radici formano tre tronchi (superiore C5–C6, medio C7, inferiore C8–T1). Ogni tronco si sdoppia in divisione anteriore e posteriore. Le divisioni si riorganizzano in tre corde attorno all'arteria ascellare: laterale, posteriore e mediale. Dalle corde nascono i cinque rami terminali. La filastrocca è: Radici, Tronchi, Divisioni, Corde, Rami.",
  sedi:"Tre punti stretti in sequenza: il triangolo interscalenico (fra scaleno anteriore e medio), lo spazio costo-claveare (fra clavicola e prima costa) e il passaggio sotto il piccolo pettorale, vicino al processo coracoideo.",
  rami:["n-muscolocutaneo","n-ascellare","n-radiale","n-mediano","n-ulnare","n-toracico-lungo","n-dorsale-scapola","n-sovrascapolare","n-toraco-dorsale","n-pettorali","n-sottoscapolari"],
  ramiTesto:"Terminali: muscolocutaneo (corda laterale), ascellare e radiale (corda posteriore), ulnare (corda mediale), mediano (dalle corde laterale e mediale). Collaterali: dorsale della scapola, toracico lungo, sovrascapolare, pettorali, sottoscapolari, toraco-dorsale.",
  lesioni:"Paralisi di Erb-Duchenne (C5–C6): braccio addotto, ruotato internamente ed esteso, la «mano del cameriere in attesa di mancia». Paralisi di Klumpke (C8–T1): mano ad artiglio per perdita degli intrinseci. Sindrome dello stretto toracico superiore: formicolii, mano che si addormenta, braccio che si stanca tenendolo alzato.",
  segreto:"È il nodo che devi conoscere a memoria: i tre punti di compressione sono tutti muscolari o posturali, e sono tutti raggiungibili con le mani. Scaleni contratti, prima costa alta, piccolo pettorale corto — cioè respiro alto e spalle chiuse. È il motivo per cui il formicolio notturno alla mano si tratta insegnando a respirare e aprendo il torace, non massaggiando il polso."},

 {id:"x-lombare",nome:"Plesso lombare",lat:"Plexus lumbalis",radici:"T12, L1, L2, L3, L4",regione:"Addome e coscia",
  alias:["plesso lombare","rami lombari","rami del plesso lombare"],
  formazione:"I rami anteriori si intrecciano dentro lo spessore del muscolo grande psoas, davanti ai processi trasversi lombari. I rami emergono ai margini dello psoas: quelli laterali sul bordo esterno, l'otturatorio sul bordo interno.",
  sedi:"Dentro lo psoas stesso; sotto il legamento inguinale per il nervo cutaneo laterale della coscia; nel canale otturatorio per l'otturatorio.",
  rami:["n-femorale","n-otturatorio","n-intercostali"],
  ramiTesto:"Ileoipogastrico e ileoinguinale (parete addominale), genito-femorale, cutaneo laterale della coscia, femorale (il più grosso) e otturatorio.",
  lesioni:"Meralgia parestesica: bruciore sulla faccia laterale della coscia da compressione del cutaneo laterale sotto il legamento inguinale, tipica di cinture strette, gravidanza e aumento di peso. Deficit del quadricipite con ginocchio che cede nelle lesioni del femorale.",
  segreto:"Il plesso lombare vive dentro lo psoas. Ecco perché il lavoro sullo psoas non è mai «solo muscolare»: stai lavorando attorno a un intreccio nervoso. Lento, sempre in espirazione, mai a dita rigide, e se compare formicolio alla coscia si esce subito. Chi lo tratta a forza fa danni che durano settimane."},

 {id:"x-sacrale",nome:"Plesso sacrale",lat:"Plexus sacralis",radici:"L4, L5, S1, S2, S3, S4",regione:"Bacino e arto inferiore",
  alias:["plesso sacrale","rami del plesso sacrale","rami diretti del plesso sacrale","tronco lombosacrale"],
  formazione:"Il tronco lombosacrale (L4–L5) scende nel bacino e si unisce ai rami sacrali anteriori. Il plesso si appoggia sulla faccia anteriore del muscolo piriforme e converge verso il grande forame ischiatico.",
  sedi:"Il grande forame ischiatico, diviso in due passaggi dal piriforme: sopra il muscolo esce il nervo gluteo superiore, sotto escono il gluteo inferiore, il nervo ischiatico, il pudendo e i vasi glutei inferiori.",
  rami:["n-sciatico","n-tibiale","n-peroneo","n-gluteo-sup","n-gluteo-inf"],
  ramiTesto:"Nervo gluteo superiore, gluteo inferiore, ischiatico (con i suoi terminali tibiale e peroneo comune), cutaneo posteriore della coscia, pudendo per il perineo.",
  lesioni:"Sciatalgia, sindrome del piriforme, Trendelenburg per il gluteo superiore, piede cadente per il peroneo. La sindrome della cauda equina (disturbi di vescica e intestino, anestesia a sella) è un'urgenza medica.",
  segreto:"Il piriforme è l'unico muscolo del corpo appoggiato direttamente su un plesso nervoso. È per questo che una sua contrattura produce sintomi così vari e confondenti, e per questo ci si lavora con pressione ampia, sostenuta e progressiva — mai a scatti, mai con la punta del gomito."},

 {id:"x-coccigeo",nome:"Plesso pudendo e coccigeo",lat:"Plexus pudendus et coccygeus",radici:"S2, S3, S4 (e S5–Co)",regione:"Perineo",
  alias:["plesso pudendo","plesso coccigeo","nervo pudendo"],
  formazione:"I rami anteriori sacrali bassi formano il nervo pudendo, che esce dal grande forame ischiatico, gira attorno alla spina ischiatica e rientra dal piccolo forame nel canale di Alcock, lungo la parete laterale della fossa ischio-rettale.",
  sedi:"Il canale di Alcock e il passaggio fra legamento sacro-spinoso e sacro-tuberoso: due punti di intrappolamento tipici.",
  rami:["n-sciatico"],
  ramiTesto:"Nervo pudendo (motorio per il pavimento pelvico e gli sfinteri, sensitivo per il perineo e i genitali) e nervo coccigeo per la cute attorno al coccige.",
  lesioni:"Nevralgia del pudendo: dolore perineale urente che peggiora da seduti e migliora in piedi o seduti sul water. Riguarda ciclisti, persone che stanno sedute molte ore, esiti di parto.",
  segreto:"Il segno che orienta è il dolore che peggiora stando seduti su una superficie dura e sparisce sedendosi sul water: significa che il carico passa sul canale di Alcock. È una zona che NON si tratta manualmente senza formazione specifica: il tuo ruolo è riconoscerla, nominarla e inviare alla figura giusta. Saper riconoscere ciò che non è tuo è parte della professionalità."}
];
</script>
