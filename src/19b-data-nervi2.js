<script>
/* Nervi citati nelle schede muscolari: ora hanno una scheda propria e sono cliccabili. */
DB.nervi = DB.nervi.concat([
 {id:"n-toraco-dorsale",nome:"Nervo toraco-dorsale",lat:"N. thoracodorsalis",regione:"Spalla",radici:"C6, C7, C8",
  alias:["toraco-dorsale","toracodorsale"],
  origine:"Corda posteriore del plesso brachiale.",
  decorso:"Scende lungo la parete posteriore dell'ascella, sul margine laterale della scapola, insieme all'arteria toraco-dorsale, ed entra nella faccia profonda del gran dorsale.",
  motorio:"Gran dorsale.",sensitivo:"Nessuno.",
  segno:"Difficoltà a portare il braccio indietro e in basso contro resistenza; perdita di forza in trazione e arrampicata.",
  segreto:"Nervo e arteria entrano nel muscolo nello stesso punto, sotto la piega ascellare posteriore. Quando prendi quella piega a pinza tieni in mano il peduncolo: presa larga e morbida, e se il cliente sente formicolio allarghi subito."},

 {id:"n-dorsale-scapola",nome:"Nervo dorsale della scapola",lat:"N. dorsalis scapulae",regione:"Spalla",radici:"C4, C5",
  alias:["dorsale della scapola"],
  origine:"Direttamente dalla radice C5 del plesso brachiale.",
  decorso:"Perfora lo scaleno medio, scende sotto l'elevatore della scapola lungo il margine mediale della scapola con l'arteria dorsale della scapola.",
  motorio:"Romboidi maggiore e minore, elevatore della scapola.",sensitivo:"Nessuno.",
  segno:"Scapola leggermente abdotta e ruotata verso il basso; difficoltà a retrarre la scapola.",
  segreto:"Attraversa lo scaleno medio: uno scaleno in tensione cronica può dare bruciore fra le scapole senza alcun problema locale. Se il dolore interscapolare non risponde al lavoro sui romboidi, sali al collo."},

 {id:"n-pettorali",nome:"Nervi pettorali laterale e mediale",lat:"Nn. pectorales lateralis et medialis",regione:"Torace",radici:"C5–T1",
  alias:["pettorale laterale","pettorale mediale","pettorali"],
  origine:"Il laterale dalla corda laterale, il mediale dalla corda mediale del plesso brachiale.",
  decorso:"Il laterale raggiunge la faccia profonda del grande pettorale; il mediale perfora il piccolo pettorale e ne innerva anche una porzione.",
  motorio:"Grande pettorale (entrambi) e piccolo pettorale (mediale).",sensitivo:"Nessuno.",
  segno:"Debolezza in adduzione e rotazione interna della spalla, spalla che perde la spinta.",
  segreto:"Il nervo pettorale mediale attraversa il piccolo pettorale: un piccolo pettorale accorciato non comprime solo il plesso brachiale sotto il coracoide, irrita anche il proprio nervo. È uno dei motivi per cui il lavoro su quel muscolo va fatto lento e in espirazione."},

 {id:"n-sottoscapolari",nome:"Nervi sottoscapolari",lat:"Nn. subscapulares",regione:"Spalla",radici:"C5, C6",
  alias:["sottoscapolare superiore","sottoscapolare inferiore","sottoscapolari"],
  origine:"Corda posteriore del plesso brachiale.",
  decorso:"Il superiore entra nella parte alta del sottoscapolare; l'inferiore scende e innerva anche il grande rotondo.",
  motorio:"Sottoscapolare e grande rotondo.",sensitivo:"Nessuno.",
  segno:"Perdita della rotazione interna attiva della spalla e instabilità anteriore.",
  segreto:"Sono nervi corti e profondi, difficilmente lesionabili: quando la rotazione interna manca, quasi sempre il problema è meccanico (capsula, sottoscapolare corto), non nervoso. Sapere che cosa è raro serve tanto quanto sapere che cosa è frequente."},

 {id:"n-gluteo-inf",nome:"Nervo gluteo inferiore",lat:"N. gluteus inferior",regione:"Bacino",radici:"L5, S1, S2",
  alias:["gluteo inferiore"],
  origine:"Plesso sacrale.",
  decorso:"Esce dal grande forame ischiatico SOTTO il piriforme, insieme all'arteria glutea inferiore e al nervo ischiatico.",
  motorio:"Grande gluteo.",sensitivo:"Nessuno.",
  segno:"Difficoltà ad alzarsi dalla sedia, a salire le scale e a correre; andatura con tronco che si butta indietro.",
  segreto:"Esce sotto il piriforme, accanto al nervo ischiatico. Un piriforme ipertonico può quindi dare insieme falsa sciatica e gluteo debole: e un gluteo debole fa lavorare di più il piriforme. È un circolo chiuso che si rompe liberando il piriforme e poi riattivando il gluteo nella stessa seduta."},

 {id:"n-intercostali",nome:"Nervi intercostali",lat:"Nn. intercostales",regione:"Torace",radici:"T1–T12 (rami anteriori)",
  alias:["intercostale","intercostali","ileoipogastrico","ileoinguinale"],
  origine:"Rami anteriori dei nervi spinali toracici.",
  decorso:"Corrono nel solco costale, sul bordo inferiore di ogni costa, sotto vena e arteria (sigla VAN). I rami inferiori proseguono nella parete addominale fra obliquo interno e trasverso.",
  motorio:"Muscoli intercostali, retto dell'addome, obliqui, trasverso dell'addome.",
  sensitivo:"Parete toracica e addominale a fasce orizzontali (dermatomeri): T4 al capezzolo, T10 all'ombelico.",
  segno:"Nevralgia intercostale: dolore a cintura lungo una costa, che peggiora con tosse e respiro profondo.",
  segreto:"T4 capezzolo, T10 ombelico, T12 piega inguinale: tre riferimenti che permettono di capire da quale livello vertebrale arriva un dolore a fascia. Se un cliente indica una banda orizzontale precisa, il problema è segmentario — e tu sai subito quale tratto di colonna guardare."},

 {id:"n-rami-dorsali",nome:"Rami posteriori dei nervi spinali",lat:"Rami dorsales nn. spinalium",regione:"Rachide",radici:"Da C1 a S5",
  alias:["rami posteriori","rami dorsali","rami posteriori dei nervi spinali"],
  origine:"Ogni nervo spinale, appena uscito dal forame, si divide in un ramo anteriore (grosso) e uno posteriore (sottile).",
  decorso:"Il ramo posteriore torna indietro, attraversa la muscolatura paravertebrale e si distribuisce alle faccette articolari, ai muscoli profondi del dorso e alla cute della schiena.",
  motorio:"Tutta la muscolatura profonda del dorso: erettori spinali, trasverso-spinali, multifidi, sotto-occipitali.",
  sensitivo:"Cute del dorso lungo la linea mediana e capsula delle faccette articolari.",
  segno:"Dolore paravertebrale locale, profondo, che non scende oltre il ginocchio.",
  segreto:"Ogni ramo posteriore innerva la faccetta del suo livello E il muscolo che le sta sopra. Per questo un'articolazione irritata fa contrarre in riflesso il muscolo vicino: la contrattura paravertebrale non è la malattia, è la reazione. Trattarla a forza senza togliere la causa articolare la fa tornare in due giorni."},



 {id:"n-suboccipitale",nome:"Nervo sotto-occipitale",lat:"N. suboccipitalis",regione:"Collo",radici:"C1 (ramo posteriore)",
  alias:["sotto-occipitale","suboccipitale"],
  origine:"Ramo posteriore del primo nervo cervicale.",
  decorso:"Emerge fra osso occipitale e arco posteriore dell'atlante, nel triangolo sotto-occipitale, accanto all'arteria vertebrale.",
  motorio:"I quattro muscoli sotto-occipitali.",
  sensitivo:"Praticamente nullo: è un nervo quasi esclusivamente motorio.",
  segno:"Non dà un quadro sensitivo: i sintomi arrivano dal vicino grande occipitale.",
  segreto:"Nel triangolo sotto-occipitale convivono questo nervo, il grande occipitale e l'arteria vertebrale in pochi centimetri quadrati. È l'area più delicata del corpo per densità di strutture: ci si lavora appoggiando e aspettando, mai spingendo."},

]);
</script>
