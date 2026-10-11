<script>
/* Articolazioni che completano l'elenco: mano, piede, rachide, torace. */
DB.articolazioni = DB.articolazioni.concat([

 {id:"a-mediocarpica",nome:"Articolazioni mediocarpica e intercarpiche",tipo:"Artrodia composita",regione:"Polso",
  alias:["mediocarpica","intercarpiche","carpo"],
  superfici:"Fila prossimale del carpo (scafoide, semilunare, piramidale) contro la fila distale (trapezio, trapezoide, capitato, uncinato), più le piccole articolazioni fra un osso e l'altro.",
  legamenti:"Intercarpici dorsali, palmari e interossei; legamento radiato del capitato.",
  rom:[["Flessione (quota mediocarpica)","circa 60% del totale"],["Estensione (quota mediocarpica)","circa 40% del totale"],["Inclinazione ulnare","prevalentemente qui"]],
  segreto:"Il polso non è un'articolazione sola: sono due file di ossa che si muovono in sequenza. Nella flessione lavora di più la mediocarpica, nell'estensione la radio-carpica. È il motivo per cui un polso può perdere l'estensione e conservare la flessione: il blocco è in una fila sola."},

 {id:"a-trapezio-metacarpale",nome:"Articolazione trapezio-metacarpale del pollice",tipo:"Sellare",regione:"Mano",
  alias:["trapezio-metacarpale","carpo-metacarpale del pollice","base del pollice"],
  superfici:"Base del primo metacarpo sul trapezio, due superfici a sella incastrate.",
  legamenti:"Legamento obliquo anteriore (beak ligament), intermetacarpale, dorso-radiale.",
  rom:[["Abduzione","0–70°"],["Flessione-estensione","0–50°"],["Opposizione","polpastrello al 5° dito"]],
  segreto:"È l'articolazione che ci rende umani e la prima che un massaggiatore consuma. La rizoartrosi comincia con dolore alla base del pollice quando si apre un barattolo. Regola di sopravvivenza professionale: il pollice appoggia, l'avambraccio e le nocche spingono. Chi lavora di pollice smette prima."},

 {id:"a-metacarpo-falangee",nome:"Articolazioni metacarpo-falangee e interfalangee della mano",tipo:"Condiloidee (MCF) e ginglimi (IF)",regione:"Mano",
  alias:["metacarpo-falangea","metacarpo-falangee","interfalangea","interfalangee","MCF","IFP","IFD"],
  superfici:"Teste dei metacarpi nelle basi delle falangi prossimali; troclee falangee nelle basi delle falangi successive.",
  legamenti:"Collaterali (tesi in flessione, lassi in estensione), placca volare, legamento intermetacarpale trasverso.",
  rom:[["MCF flessione","0–90°"],["IFP flessione","0–110°"],["IFD flessione","0–80°"]],
  segreto:"I legamenti collaterali delle metacarpo-falangee sono tesi a dito flesso e lassi a dito esteso: per questo una mano immobilizzata in estensione si irrigidisce in modo quasi irreversibile. Se qualcuno ti chiede come tenere una mano ferma, la risposta è: dita piegate, mai dritte."},

 {id:"a-tarso-metatarsale",nome:"Articolazione tarso-metatarsale (di Lisfranc)",tipo:"Artrodia composita",regione:"Piede",
  alias:["tarso-metatarsale","Lisfranc"],
  superfici:"Cuneiformi e cuboide contro le basi dei cinque metatarsi; la base del secondo metatarso è incastrata come una chiave di volta.",
  legamenti:"Legamento di Lisfranc (fra primo cuneiforme e base del secondo metatarso), tarso-metatarsali dorsali e plantari.",
  rom:[["Scivolamento dei raggi","pochi millimetri, maggiore sul 4° e 5°"]],
  segreto:"La base del secondo metatarso è incassata fra i cuneiformi come una chiave di volta: rende rigido il centro del piede e mobili i bordi. Un dolore sul dorso del mesopiede dopo un trauma, con gonfiore e difficoltà a caricare, richiede sempre una valutazione medica: le lesioni di Lisfranc vengono spesso scambiate per semplici distorsioni."},

 {id:"a-metatarso-falangee",nome:"Articolazioni metatarso-falangee e interfalangee del piede",tipo:"Condiloidee e ginglimi",regione:"Piede",
  alias:["metatarso-falangea","metatarso-falangee","prima metatarso-falangea","alluce"],
  superfici:"Teste dei metatarsi nelle basi delle falangi; sotto la prima ci sono due ossa sesamoidi.",
  legamenti:"Collaterali, placca plantare, legamento metatarsale trasverso profondo.",
  rom:[["Estensione della prima MTF","0–70° (ne servono 60° per camminare)"],["Flessione","0–40°"]],
  segreto:"Per fare un passo normale l'alluce deve estendersi di almeno 60°. Se non ci arriva (alluce rigido), il piede esce dal bordo esterno e la catena si avvita fino all'anca. Controlla l'estensione dell'alluce a ogni valutazione del piede: dura cinque secondi e spiega moltissimi dolori più in alto."},

 {id:"a-uncovertebrali",nome:"Articolazioni uncovertebrali (di Luschka)",tipo:"Artrodie",regione:"Rachide cervicale",
  alias:["uncovertebrali","Luschka","uncus"],
  superfici:"Piccoli rilievi (unci) sui bordi laterali dei corpi vertebrali cervicali, da C3 a C7, che si articolano con la vertebra soprastante.",
  legamenti:"Capsule sottili; sono in rapporto stretto con il forame di coniugazione.",
  rom:[["Guidano l'accoppiamento fra rotazione e inclinazione cervicale"]],
  segreto:"Compaiono solo nell'uomo e solo dopo i primi anni di vita: sono la risposta del corpo al carico sulla colonna cervicale. Quando si artrosizzano restringono il forame e comprimono la radice nervosa: è la causa più comune di cervicobrachialgia dopo i cinquant'anni."},

 {id:"a-zigoapofisarie",nome:"Articolazioni zigoapofisarie (faccette)",tipo:"Artrodie",regione:"Rachide",
  alias:["zigoapofisarie","faccette articolari","faccette","interapofisarie"],
  superfici:"Processo articolare inferiore di una vertebra contro quello superiore della vertebra sottostante, con cartilagine e capsula sinoviale.",
  legamenti:"Capsula articolare, legamento giallo che ne forma la parete anteriore.",
  rom:[["Cervicali (45° sul piano orizzontale)","molto mobili"],["Toraciche (piano frontale)","favoriscono la rotazione"],["Lombari (piano sagittale)","flettono ma non ruotano"]],
  segreto:"Sono le uniche articolazioni sinoviali vere della colonna, ed è il loro orientamento a decidere che cosa può fare ogni tratto. Il dolore faccettario è locale, peggiora in estensione e rotazione e migliora in flessione: l'opposto del dolore discale. Due domande e sai già dove sei."},

 {id:"a-sacro-coccigea",nome:"Articolazione sacro-coccigea",tipo:"Sinfisi",regione:"Bacino",
  alias:["sacro-coccigea","coccige"],
  superfici:"Apice del sacro contro la base del coccige, con un disco fibrocartilagineo interposto.",
  legamenti:"Sacro-coccigei anteriore, posteriore e laterali.",
  rom:[["Flesso-estensione","5–25° in seduta e nel parto"]],
  segreto:"Il coccige si muove: si flette quando ci si siede e si estende nel parto. Sul coccige si inseriscono il grande gluteo e il pavimento pelvico. Una coccigodinia dopo una caduta si accompagna quasi sempre a un pavimento pelvico in difesa: il lavoro utile è attorno, non sopra l'osso dolente."},

 {id:"a-manubrio-sternale",nome:"Sinfisi manubrio-sternale (angolo di Louis)",tipo:"Sinfisi",regione:"Torace",
  alias:["manubrio-sternale","angolo di Louis","angolo sternale"],
  superfici:"Manubrio contro corpo dello sterno, uniti da fibrocartilagine, con un angolo aperto indietro di circa 160°.",
  legamenti:"Fibre radiate sterno-costali che lo attraversano.",
  rom:[["Apertura dell'angolo in inspirazione profonda","pochi gradi, ma essenziali"]],
  segreto:"L'angolo di Louis si sente come un gradino a circa 5 cm dal giugulo ed è il repere per contare le coste: lì si attacca la seconda. È anche una cerniera respiratoria: quando è rigida, il torace alto non si apre e la persona respira solo con le clavicole."},

 {id:"a-atlo-assiale",nome:"Articolazione atlo-assiale",tipo:"Trocoide (mediana) e artrodie (laterali)",regione:"Collo",
  alias:["atlo-assiale","atlo-epistrofea","C1-C2"],
  superfici:"Dente dell'epistrofeo dentro l'anello formato dall'arco anteriore dell'atlante e dal legamento trasverso; più due faccette laterali piane.",
  legamenti:"Trasverso dell'atlante, alari, apicale, membrana tectoria.",
  rom:[["Rotazione","0–45° per lato: circa la metà di tutta la rotazione del collo"],["Flesso-estensione","minima"]],
  segreto:"Il test è elegante: fai flettere il mento al petto (così blocchi le cervicali basse) e poi ruotare. Quello che resta è quasi solo C1-C2. Sotto i 30° per lato il blocco è lassù, e nessun massaggio ai trapezi lo risolverà."},

 {id:"a-costo-trasversarie",nome:"Articolazioni costo-trasversarie",tipo:"Artrodie",regione:"Torace",
  alias:["costo-trasversaria","costo-trasversarie"],
  superfici:"Tubercolo della costa contro il processo trasverso della vertebra corrispondente.",
  legamenti:"Costo-trasversario, costo-trasversario superiore e laterale.",
  rom:[["Coste alte","movimento a braccio di pompa"],["Coste basse","movimento a manico di secchio"]],
  segreto:"Insieme alle costo-vertebrali fanno 48 articolazioni che devono muoversi a ogni respiro. Quando il dorso è «rigido» spesso non è un muscolo contratto: sono queste articolazioni ferme. Mobilizzarle in espirazione dà risultati che nessun impastamento sul trapezio può dare."}
]);
</script>
