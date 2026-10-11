<script>
/* Movimenti — parte 2: tutti i movimenti articolari che mancavano. */
DB.movimenti = DB.movimenti.concat([

 {id:"mv-rachide-incl",nome:"Inclinazione laterale del tronco",art:"a-intervertebrale",piano:"Frontale",asse:"Sagittale (antero-posteriore)",range:"Lombare 0–25° per lato, toracica 0–20° per lato",
  alias:["flessione laterale del tronco","flessione laterale della colonna","inclinazione laterale della colonna","inclinazione del tronco"],
  agonisti:["m-quadrato-lombi","m-obliqui"],sinergici:["m-erettori","m-ileopsoas","m-gran-dorsale","m-intercostali"],antagonisti:["m-quadrato-lombi","m-obliqui"],
  serve:"Raccogliere qualcosa di lato, portare una borsa pesante con una mano sola, scendere dall'auto, tutti i gesti asimmetrici del lavoro.",
  limite:"Quadrato dei lombi corto dal lato opposto all'inclinazione, faccette lombari irritate (dolore dallo stesso lato in cui ci si inclina), coste basse rigide, dolore sacro-iliaco. Nella lombare l'inclinazione si accoppia sempre a una piccola rotazione: se fa male inclinandosi, va valutata anche la rotazione."},

 {id:"mv-collo-flex",nome:"Flessione ed estensione del collo",art:"a-intervertebrale",piano:"Sagittale",asse:"Trasverso",range:"Flessione 0–50° (mento allo sterno), estensione 0–60°",
  alias:["flessione del collo","estensione del collo","flessione cervicale","estensione cervicale","guardare in alto","guardare in basso"],
  agonisti:["m-scom","m-lungo-collo","m-scaleni"],sinergici:["m-sopraioidei","m-sottoioidei"],antagonisti:["m-trapezio","m-splenio","m-semispinale","m-suboccipitali","m-erettori"],
  serve:"Guardare in basso (telefono, lettura), guardare in alto (scaffali, stendere i panni), annuire.",
  limite:"Testa protratta: la flessione avviene tutta nel tratto basso e l'estensione tutta nel tratto alto, con i sotto-occipitali che si accorciano. Estensione dolorosa = faccette o uncovertebrali; flessione dolorosa = disco o muscoli posteriori in protezione. Nella flessione il mento deve arrivare allo sterno con la bocca chiusa."},

 {id:"mv-collo-incl",nome:"Inclinazione laterale del collo",art:"a-intervertebrale",piano:"Frontale",asse:"Sagittale",range:"0–45° per lato (orecchio verso la spalla)",
  alias:["inclinazione del collo","flessione laterale del collo","inclinazione cervicale","orecchio alla spalla"],
  agonisti:["m-scaleni","m-scom","m-elevatore"],sinergici:["m-trapezio","m-splenio"],antagonisti:["m-scaleni","m-scom","m-elevatore","m-trapezio"],
  serve:"Tenere il telefono fra orecchio e spalla, guardare di sbieco, molti gesti del lavoro al computer con due schermi.",
  limite:"Scaleni ed elevatore della scapola corti dal lato opposto; la spalla opposta che si solleva per compensare (trapezio superiore ipertonico). Misura con la spalla tenuta giù: se il movimento cala di molto, il limite è muscolare e si tratta bene."},

 {id:"mv-spalla-add",nome:"Adduzione della spalla",art:"a-gleno-omerale",piano:"Frontale",asse:"Sagittale",range:"0–45° davanti al tronco (adduzione orizzontale 0–135°)",
  alias:["adduzione della spalla","adduzione orizzontale","portare il braccio al petto"],
  agonisti:["m-pettorale-grande","m-gran-dorsale","m-rotondi"],sinergici:["m-coracobrachiale","m-tricipite","m-sottoscapolare"],antagonisti:["m-deltoide","m-sovraspinato"],
  serve:"Abbracciare, incrociare le braccia, portare un oggetto al petto, chiudere una porta tirandola, tutte le manovre di impastamento a due mani.",
  limite:"Capsula posteriore rigida (test di adduzione orizzontale: il gomito non arriva alla spalla opposta), sottospinato e piccolo rotondo corti, acromion-claveare dolente (dolore puntiforme a fine corsa)."},

 {id:"mv-scapola",nome:"Movimenti della scapola",art:"a-scapolo-toracica",piano:"Frontale e trasverso sul torace",asse:"Scorrimento sulla gabbia toracica",range:"Rotazione verso l'alto 0–60°, elevazione 10–12 cm, protrazione e retrazione 15 cm circa",
  alias:["rotazione della scapola","elevazione della scapola","protrazione della scapola","retrazione della scapola","ritmo scapolo-omerale","scapola alata"],
  agonisti:["m-trapezio","m-dentato","m-romboidi","m-elevatore"],sinergici:["m-pettorale-piccolo","m-gran-dorsale"],antagonisti:["m-pettorale-piccolo","m-elevatore"],
  serve:"Ogni gesto del braccio sopra i 30°: la scapola fornisce 60 dei 180 gradi di elevazione. Spingere, tirare, stringersi nelle spalle, raddrizzarsi.",
  limite:"Dentato anteriore e trapezio inferiore deboli (scapola che non ruota: ritmo 2:1 perso, conflitto subacromiale), piccolo pettorale corto (scapola protratta e inclinata in avanti), elevatore e romboidi ipertonici (scapola bloccata in rotazione verso il basso). Osserva da dietro con le braccia che salgono: le scapole devono ruotare in modo simmetrico, senza alzarsi prima dei 90°."},

 {id:"mv-polso-flex",nome:"Flessione ed estensione del polso",art:"a-radio-carpica",piano:"Sagittale",asse:"Trasverso",range:"Flessione 0–80°, estensione 0–70°",
  alias:["flessione del polso","estensione del polso","piegare il polso"],
  agonisti:["m-flessori-polso","m-estensori-polso"],sinergici:["m-flessori-dita","m-estensori-dita"],antagonisti:["m-estensori-polso","m-flessori-polso"],
  serve:"Appoggiarsi con le mani, spingere, girare una chiave, tutte le posizioni di lavoro sul lettino; l'estensione è la posizione di forza della presa.",
  limite:"Dopo una frattura di radio l'estensione si perde per prima; flessori corti e tunnel carpale limitano l'estensione passiva (test di Phalen inverso). Nel massaggiatore il polso in estensione forzata a lungo è la causa principale di dolore dorsale del polso: si lavora a polso neutro."},

 {id:"mv-polso-incl",nome:"Inclinazione radiale e ulnare del polso",art:"a-radio-carpica",piano:"Frontale",asse:"Antero-posteriore",range:"Radiale 0–20°, ulnare 0–30°",
  alias:["inclinazione radiale","inclinazione ulnare","deviazione ulnare","deviazione radiale"],
  agonisti:["m-flessori-polso","m-estensori-polso","m-estensori-dita"],sinergici:["m-intrinseci-mano"],antagonisti:["m-flessori-polso","m-estensori-polso"],
  serve:"Martellare, versare da una bottiglia, usare il mouse, girare la maniglia; il movimento di «dardo» (estensione+radiale → flessione+ulnare) è il gesto funzionale della mano.",
  limite:"Tendinopatia di De Quervain (dolore in inclinazione ulnare con pollice chiuso, test di Finkelstein), lesione del complesso fibrocartilagineo triangolare (dolore ulnare a fine corsa), artrosi trapezio-metacarpale."},

 {id:"mv-pollice",nome:"Opposizione e movimenti del pollice",art:"a-trapezio-metacarpale",piano:"Tutti (articolazione sellare)",asse:"Due assi più rotazione automatica",range:"Abduzione 0–70°, opposizione: polpastrello del pollice al mignolo",
  alias:["opposizione del pollice","abduzione del pollice","presa di precisione","pinza"],
  agonisti:["m-intrinseci-mano"],sinergici:["m-flessori-dita","m-estensori-dita"],antagonisti:["m-estensori-dita"],
  serve:"Tutte le prese di precisione: scrivere, abbottonare, prendere una moneta, il lavoro di dettaglio del massaggiatore (che però dovrebbe risparmiarlo).",
  limite:"Rizoartrosi (dolore alla base del pollice aprendo un barattolo, test del grind), ipotrofia del tenar da tunnel carpale (il pollice non si oppone più e resta nel piano del palmo), De Quervain. Confronta sempre le due basi del pollice a palmo in su."},

 {id:"mv-dita",nome:"Flessione ed estensione delle dita",art:"a-metacarpo-falangee",piano:"Sagittale",asse:"Trasverso",range:"Metacarpo-falangee 0–90°, interfalangee prossimali 0–110°, distali 0–80°",
  alias:["chiudere il pugno","aprire la mano","flessione delle dita","estensione delle dita","presa di forza"],
  agonisti:["m-flessori-dita","m-estensori-dita"],sinergici:["m-intrinseci-mano"],antagonisti:["m-estensori-dita","m-flessori-dita"],
  serve:"Chiudere il pugno, afferrare, portare, impastare; aprire la mano per lasciare e per appoggiare.",
  limite:"Dita gonfie al mattino (tenosinovite), dito a scatto (blocco in flessione), artrosi (noduli, rigidità breve), artrite (rigidità lunga, gonfiore simmetrico: invio). Il pugno completo è: tutte le dita che toccano il palmo e il pollice che le chiude sopra."},

 {id:"mv-atm",nome:"Apertura, chiusura e lateralità della mandibola",art:"a-atm",piano:"Sagittale e trasverso",asse:"Rotazione del condilo poi traslazione in avanti",range:"Apertura 40–50 mm (tre dita del cliente), lateralità 8–10 mm per lato, protrusione 6–9 mm",
  alias:["apertura della bocca","chiusura della bocca","masticazione","lateralità mandibolare","protrusione"],
  agonisti:["m-massetere","m-temporale","m-pterigoidei","m-sopraioidei"],sinergici:["m-sottoioidei","m-platisma"],antagonisti:["m-massetere","m-temporale","m-sopraioidei"],
  serve:"Masticare, parlare, sbadigliare, cantare; la bocca si apre e si chiude circa duemila volte al giorno.",
  limite:"Apertura ridotta (meno di tre dita) = masseteri e temporali ipertonici o blocco del disco; click = disco spostato in avanti dallo pterigoideo laterale; deviazione dell'apertura verso un lato = quel condilo scorre meno. Si misura con le dita del cliente fra gli incisivi, ad ogni seduta."},

 {id:"mv-anca-add",nome:"Adduzione dell'anca",art:"a-coxo-femorale",piano:"Frontale",asse:"Sagittale",range:"0–30° oltre la linea mediana",
  alias:["adduzione dell'anca","stringere le ginocchia","accavallare"],
  agonisti:["m-adduttori","m-gracile","m-pettineo"],sinergici:["m-gluteo-massimo","m-ischiocrurali"],antagonisti:["m-gluteo-medio","m-tfl"],
  serve:"Accavallare le gambe, stringere le ginocchia, cambiare direzione nella corsa, tenere l'equilibrio su un piede solo (gli adduttori lavorano con gli abduttori per stabilizzare).",
  limite:"Pubalgia (dolore inguinale in adduzione contro resistenza: squeeze test), tendinopatia dell'adduttore lungo, conflitto d'anca, borsite trocanterica dal lato opposto. Un'adduzione forte senza dolore esclude quasi sempre la pubalgia dello sportivo."},

 {id:"mv-anca-ri",nome:"Rotazione interna dell'anca",art:"a-coxo-femorale",piano:"Trasverso",asse:"Longitudinale",range:"0–35° (si misura a 90° di flessione, prono o seduto)",
  alias:["rotazione interna dell'anca","intrarotazione dell'anca","ginocchio che va dentro"],
  agonisti:["m-gluteo-medio","m-tfl"],sinergici:["m-adduttori","m-pettineo"],antagonisti:["m-piriforme","m-rotatori-anca","m-gluteo-massimo"],
  serve:"Camminare (a ogni passo l'anca in appoggio ruota internamente di qualche grado), sedersi a gambe incrociate verso l'interno, girarsi nel letto, entrare in auto.",
  limite:"È il movimento che si perde per primo nell'artrosi d'anca e nel conflitto femoro-acetabolare: una rotazione interna sotto i 15°, con arresto duro e dolore inguinale, è un'anca da far valutare. Piriforme e rotatori profondi corti la limitano in modo elastico, senza dolore inguinale. Confronta sempre i due lati in prono con le ginocchia flesse: è il test d'anca più rapido e informativo."},

 {id:"mv-ginocchio-rot",nome:"Rotazione del ginocchio",art:"a-femoro-tibiale",piano:"Trasverso",asse:"Longitudinale della tibia",range:"Esterna 0–40°, interna 0–30°, solo a ginocchio flesso a 90°; a ginocchio esteso zero",
  alias:["rotazione del ginocchio","rotazione della tibia","screw-home","avvitamento del ginocchio"],
  agonisti:["m-popliteo","m-ischiocrurali"],sinergici:["m-sartorio","m-gracile","m-tfl"],antagonisti:["m-ischiocrurali","m-popliteo"],
  serve:"Cambiare direzione con il piede fermo a terra, girarsi da seduti, l'avvitamento automatico degli ultimi gradi di estensione che blocca il ginocchio in piedi.",
  limite:"Lesione meniscale (dolore e blocco nella rotazione a ginocchio flesso e caricato), rottura dei crociati (rotazione eccessiva, instabilità), popliteo in trigger (lo screw-home non parte). Il test: seduto con il ginocchio a 90°, ruota il piede verso l'esterno e l'interno — una differenza fra i due lati è già significativa."},

 {id:"mv-piede-inv",nome:"Inversione ed eversione del piede",art:"a-sotto-astragalica",piano:"Frontale (con componenti su tutti i piani)",asse:"Obliquo della sotto-astragalica",range:"Inversione 0–30°, eversione 0–15°",
  alias:["inversione","eversione","supinazione del piede","pronazione del piede","girarsi la caviglia","distorsione"],
  agonisti:["m-tibiale-post","m-tibiale-ant","m-peronei"],sinergici:["m-flessori-dita-piede","m-estensori-dita-piede"],antagonisti:["m-peronei","m-tibiale-post"],
  serve:"Adattare il piede al terreno irregolare, assorbire l'impatto (pronazione) e trasformare il piede in leva rigida per spingere (supinazione): succede a ogni passo.",
  limite:"Dopo una distorsione in inversione i peronei restano inibiti e l'inversione diventa eccessiva (caviglia che «si gira sempre»); un tibiale posteriore che cede dà un'eversione eccessiva con arco crollato. La sotto-astragalica rigida obbliga ginocchio e anca a compensare ogni passo."},

 {id:"mv-alluce",nome:"Flessione ed estensione dell'alluce e delle dita del piede",art:"a-metatarso-falangee",piano:"Sagittale",asse:"Trasverso",range:"Estensione dell'alluce 0–70° (ne servono 60° per camminare), flessione 0–40°",
  alias:["estensione dell'alluce","flessione dell'alluce","dita del piede","alluce rigido","meccanismo dell'argano"],
  agonisti:["m-flessori-dita-piede","m-estensori-dita-piede","m-intrinseci-piede"],sinergici:["m-plantare"],antagonisti:["m-estensori-dita-piede","m-flessori-dita-piede"],
  serve:"La spinta finale di ogni passo passa dall'alluce: senza 60° di estensione il piede esce dal bordo esterno e la catena si avvita fino all'anca.",
  limite:"Alluce rigido (artrosi della prima metatarso-falangea), alluce valgo, flessori lunghi corti (crampi notturni), scarpe strette che bloccano le dita. Test dell'argano: con il piede a terra estendi l'alluce, l'arco deve alzarsi."},

 {id:"mv-bacino",nome:"Antiversione e retroversione del bacino",art:"a-coxo-femorale",piano:"Sagittale",asse:"Trasverso (passa per le teste femorali)",range:"Circa 10–15° in ciascuna direzione dalla posizione neutra",
  alias:["antiversione del bacino","retroversione del bacino","bacino in avanti","bacino indietro","tilt pelvico","posizione del bacino"],
  agonisti:["m-ileopsoas","m-erettori","m-gluteo-massimo","m-retto-addominale","m-ischiocrurali"],sinergici:["m-quadricipite","m-trasverso","m-quadrato-lombi"],antagonisti:["m-gluteo-massimo","m-ileopsoas"],
  serve:"Regolare la lordosi lombare in ogni posizione; è il movimento che si impara per primo per proteggere la schiena sollevando, sedendo e stando in piedi.",
  limite:"Sindrome crociata inferiore (bacino bloccato in antiversione: psoas ed erettori corti, glutei e addominali spenti), sway-back (bacino spinto avanti), dorso piatto (bacino retroverso e lordosi assente). Si valuta con le mani sulla cresta iliaca e sulle SIAS, poi chiedendo di «mettere la coda sotto» e «inarcare»: chi non sa muovere il bacino da solo non ha il controllo della propria lombare."},

 {id:"mv-sacro",nome:"Nutazione e contronutazione del sacro",art:"a-sacro-iliaca",piano:"Sagittale",asse:"Trasverso attraverso le sacro-iliache",range:"2–4° (pochi millimetri alla punta del sacro)",
  alias:["nutazione","contronutazione","movimento del sacro","sacro-iliaca che si blocca"],
  agonisti:["m-erettori","m-pavimento-pelvico","m-piriforme"],sinergici:["m-gluteo-massimo","m-ischiocrurali","m-trasverso"],antagonisti:["m-ileopsoas","m-retto-addominale"],
  serve:"Ammortizzare il carico fra tronco e gambe a ogni passo; nel parto la contronutazione apre lo stretto superiore e la nutazione quello inferiore.",
  limite:"Sacro-iliaca bloccata (dolore sopra la SIPS, segno di Fortin), legamenti sacro-tuberoso e sacro-spinoso in tensione (ischiocrurali che tirano), asimmetria del bacino (una SIAS bassa e la SIPS alta dallo stesso lato). Si valuta con i test di provocazione, non con la palpazione del movimento, troppo piccolo per essere affidabile."},

 {id:"mv-respiro",nome:"Movimenti respiratori delle coste",art:"a-costo-vertebrale",piano:"Tutti e tre i diametri del torace",asse:"Coste alte a «braccio di pompa», coste basse a «manico di secchio»",range:"Espansione toracica 3–7 cm fra inspirazione ed espirazione massime, misurata al capezzolo",
  alias:["respirazione","espansione toracica","respiro diaframmatico","respiro toracico","inspirazione","espirazione"],
  agonisti:["m-diaframma","m-intercostali"],sinergici:["m-scaleni","m-scom","m-dentato-post","m-pettorale-piccolo"],antagonisti:["m-trasverso","m-obliqui","m-retto-addominale","m-trasverso-torace"],
  serve:"Ventimila respiri al giorno: ogni rigidità costale si moltiplica per ventimila. La respirazione è anche il primo stabilizzatore della lombare (diaframma, trasverso, pavimento pelvico).",
  limite:"Respiro alto e corto (scaleni e sternocleidomastoideo che lavorano al posto del diaframma), dorso rigido con costo-vertebrali bloccate, diaframma in tensione (apnea emotiva), dolore intercostale. Misura l'espansione con un metro: sotto i 3 cm il torace è bloccato, ed è un numero che migliora visibilmente in poche sedute."}
]);
</script>
