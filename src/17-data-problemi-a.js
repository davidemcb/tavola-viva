<script>
/* PORTA 1 — dal problema reale. Le frasi sono quelle che i clienti dicono davvero. */
DB.problemi = DB.problemi.concat([

 {id:"p-reggiseno",voce:"«Non riesco ad allacciarmi il reggiseno»",zona:"Spalla",
  sintesi:"Il gesto chiede alla spalla tre cose insieme: estensione, rotazione interna e adduzione, mentre la scapola deve scivolare indietro. Basta che ne manchi una e la mano non arriva.",
  gesto:["La mano parte lungo il fianco","La spalla si estende di circa 40°","L'omero ruota internamente di 60–70°","Il gomito si flette e la mano risale lungo la colonna","La scapola retrae e ruota verso il basso"],
  movimenti:["mv-spalla-ri","mv-gomito-flex"],
  cause:[
   {t:"Capsula posteriore e sottospinato rigidi",perche:"Sono i freni della rotazione interna. Se il tessuto posteriore non cede, la testa dell'omero non può ruotare e la mano si ferma a metà schiena.",muscoli:["m-sottospinato","m-rotondi"],test:"Supino, braccio a 90°: porta l'avambraccio verso il lettino. Confronta i lati: una differenza oltre 15° è significativa."},
   {t:"Piccolo pettorale corto",perche:"Tiene la scapola protratta e ruotata in basso: la scapola non può retrarre e il braccio perde il binario su cui scorrere.",muscoli:["m-pettorale-piccolo"],test:"Supino, rilassata: misura quanto la spalla resta staccata dal lettino. Oltre due dita, è corto."},
   {t:"Conflitto sotto-acromiale",perche:"Nella rotazione interna lo spazio sotto l'acromion si riduce: se c'è infiammazione, il gesto diventa doloroso prima ancora che limitato.",muscoli:["m-sovraspinato","m-deltoide"],test:"Arco doloroso fra 60° e 120° in abduzione; dolore che sveglia di notte."},
   {t:"Gomito o avambraccio",perche:"Se manca flessione al gomito o supinazione, la mano non riesce a risalire anche con una spalla perfetta.",muscoli:["m-bicipite","m-tricipite"],test:"Flessione passiva del gomito e prono-supinazione a gomito attaccato al fianco."}],
  catene:["c-braccio-post-prof","c-braccio-ant-prof"],
  trattamento:["Apri prima il davanti: piccolo pettorale e piega ascellare anteriore","Poi la fossa sottospinata e il margine laterale della scapola","Mobilizza la scapola in retrazione passiva, in decubito laterale","Chiudi con il gesto stesso, lentamente, senza dolore: il cervello deve ritrovarlo"],
  rosse:["Dolore notturno costante che non cambia con la posizione","Perdita di forza improvvisa dopo un trauma","Formicolio a tutta la mano"],
  segreto:"Quasi tutti trattano la parte che fa male: il dietro. Ma la rotazione interna è limitata dal davanti che non lascia scivolare la scapola. Tratta il piccolo pettorale e fai rifare il gesto: nel 70% dei casi la mano sale di due vertebre nella stessa seduta. È l'effetto che convince un cliente a tornare."},

 {id:"p-calzino",voce:"«Non riesco a mettermi il calzino»",zona:"Anca",
  sintesi:"È un gesto composto: l'anca deve flettersi oltre 90°, ruotare esternamente e abdurre, il ginocchio deve piegarsi e la schiena deve poter flettere un poco. È il test funzionale d'anca più onesto che esista.",
  gesto:["L'anca flette a 100–120°","L'anca ruota esternamente di 30–40°","L'anca abduce di 20°","Il ginocchio flette oltre 120°","Il tronco flette in avanti di 30–40°"],
  movimenti:["mv-anca-flex","mv-anca-re","mv-ginocchio-flex","mv-rachide-flex"],
  cause:[
   {t:"Artrosi o conflitto femoro-acetabolare",perche:"La testa del femore urta contro il bordo dell'acetabolo in flessione e rotazione: è dolore inguinale profondo, non muscolare.",muscoli:[],test:"Test FADIR: anca flessa a 90°, addotta e ruotata internamente. Dolore inguinale = positivo. Se positivo, si invia."},
   {t:"Glutei e rotatori profondi accorciati",perche:"Il grande gluteo e il piriforme frenano la flessione profonda; il piriforme, ad anca flessa, limita proprio la rotazione che serve.",muscoli:["m-gluteo-massimo","m-piriforme"],test:"Seduto, caviglia sul ginocchio opposto: quanto scende il ginocchio? Confronta i lati."},
   {t:"Ischiocrurali corti o in protezione",perche:"Bloccano la flessione del tronco: la persona non riesce ad avvicinare il busto al piede.",muscoli:["m-ischiocrurali"],test:"Supino, gamba tesa sollevata: sotto i 70° è limitazione significativa."},
   {t:"Lombare che non flette",perche:"Con un bacino in antiversione fissa, la lombare non accompagna e il gesto si interrompe.",muscoli:["m-erettori","m-ileopsoas","m-quadrato-lombi"],test:"Flessione in piedi: osserva se la curva lombare si inverte o resta piatta."}],
  catene:["c-sbl","c-profonda"],
  trattamento:["Piede e polpaccio: apri il capolinea basso della catena posteriore","Ischiocrurali con manovre lente, senza forzare l'allungamento","Glutei e rotatori profondi in decubito laterale","Psoas per ultimo, in espirazione","Rifai il gesto a fine seduta e misura di nuovo"],
  rosse:["Dolore inguinale a riposo e di notte","Rigidità mattutina superiore a un'ora","Blocco improvviso con scatto articolare"],
  segreto:"Questo gesto è il miglior indicatore di autonomia dopo i sessant'anni: si perde molto prima della forza. Registralo alla prima seduta (quante dita mancano al piede) e rimisuralo ogni mese. Un cliente che vede quel numero scendere non smette più di venire."},

 {id:"p-spalla-alta",voce:"«Ho una spalla più alta dell'altra»",zona:"Postura",
  sintesi:"Un'asimmetria del cingolo scapolare quasi mai nasce nella spalla: nasce dal bacino, dal piede, dalla dominanza o dal mestiere. Il tuo compito è capire se è strutturale o adattativa.",
  gesto:["In piedi, sguardo all'orizzonte","Confronta acromion, angoli inferiori delle scapole, pieghe del fianco","Poi confronta creste iliache, SIAS e SIPS","Poi guarda i piedi"],
  movimenti:["mv-rachide-rot","mv-spalla-abd"],
  cause:[
   {t:"Compenso da bacino asimmetrico",perche:"Se un emibacino è più alto, la colonna si inclina e la spalla opposta sale per tenere gli occhi orizzontali. La spalla è l'ultimo anello, non il primo.",muscoli:["m-quadrato-lombi","m-gluteo-medio"],test:"Mani sulle creste iliache: sono allo stesso livello? Poi ripeti da seduto: se l'asimmetria sparisce, viene dagli arti inferiori."},
   {t:"Trapezio superiore ed elevatore dominanti",perche:"Chi porta la borsa sempre dallo stesso lato o tiene il telefono fra orecchio e spalla accorcia questi due muscoli.",muscoli:["m-trapezio","m-elevatore"],test:"Palpa e confronta il tono dei due trapezi superiori; chiedi che lavoro fa e da che lato porta i pesi."},
   {t:"Scoliosi strutturale",perche:"Una rotazione vertebrale fissa produce un gibbo costale che non si riduce nella flessione.",muscoli:["m-erettori","m-obliqui"],test:"Test di Adams: flessione in avanti; se compare un gibbo asimmetrico, è strutturale. Si invia per valutazione."},
   {t:"Dismetria degli arti inferiori",perche:"Una gamba più corta inclina il bacino e tutta la colonna si adatta a spirale.",muscoli:["m-quadrato-lombi","m-tfl"],test:"Confronto dei malleoli mediali in supino, dopo aver 'pareggiato' il bacino."}],
  catene:["c-laterale","c-spirale"],
  trattamento:["Lavora sul lato concavo, non su quello che fa male","Quadrato dei lombi e fianco in decubito laterale","Fascia laterale e bandelletta","Trapezio superiore ed elevatore solo alla fine","Rivaluta in piedi e fotografa"],
  rosse:["Asimmetria comparsa rapidamente in un adolescente","Gibbo evidente al test di Adams","Dolore notturno o perdita di peso"],
  segreto:"Fotografa sempre, con il telefono, in piedi e da dietro, con un riferimento verticale dietro (lo stipite di una porta). Le persone non credono ai cambiamenti che non vedono. Due foto a un mese di distanza valgono più di qualunque spiegazione — e sono anche il tuo miglior materiale di marketing, con il consenso scritto."},

 {id:"p-pettinarsi",voce:"«Non riesco a pettinarmi né a prendere i piatti in alto»",zona:"Spalla",
  sintesi:"Il braccio sopra la testa richiede 120° di gleno-omerale più 60° di rotazione della scapola, più la rotazione della clavicola. È una catena a quattro articolazioni: se una salta, il braccio si ferma a 90°.",
  gesto:["Abduzione fino a 90° con deltoide e sovraspinato","La scapola inizia a ruotare verso l'alto dopo i 30°","La clavicola ruota di 30–40° sul proprio asse","Il tronco si estende leggermente negli ultimi gradi"],
  movimenti:["mv-spalla-abd","mv-spalla-re"],
  cause:[
   {t:"Discinesia scapolare",perche:"Il dentato anteriore e il trapezio inferiore non ruotano la scapola: la testa omerale sbatte sotto l'acromion.",muscoli:["m-dentato","m-trapezio"],test:"Spinta contro il muro: se la scapola si stacca a 'ala', il dentato non tiene."},
   {t:"Conflitto sotto-acromiale e sofferenza del sovraspinato",perche:"Lo spazio si riduce e il tendine si schiaccia ripetutamente. La zona critica del sovraspinato è poco vascolarizzata e guarisce male.",muscoli:["m-sovraspinato"],test:"Arco doloroso 60–120°; Jobe positivo."},
   {t:"Capsulite (spalla congelata)",perche:"La capsula si retrae: si perde prima la rotazione esterna, poi l'abduzione, poi tutto. Il limite è passivo, non solo attivo.",muscoli:["m-sottoscapolare"],test:"Anche mobilizzando passivamente il braccio non si va oltre: limite duro in tutte le direzioni."},
   {t:"Tratto dorsale rigido",perche:"Senza una minima estensione dorsale il braccio non arriva mai verticale, per quanto la spalla sia libera.",muscoli:["m-erettori","m-pettorale-grande"],test:"Ripeti l'elevazione da supino: se guadagna 20°, il dorso era il freno."}],
  catene:["c-braccio-post-sup","c-spirale"],
  trattamento:["Mobilizzazione dorsale e costale con il respiro","Piccolo pettorale e piega ascellare anteriore","Fossa sottospinata e sottoscapolare per la rotazione esterna","Riattivazione del dentato e del trapezio inferiore","Nessuna manovra dolorosa: nel conflitto il dolore peggiora il compenso"],
  rosse:["Perdita progressiva anche passiva in tutte le direzioni","Dolore notturno che impedisce di dormire da settimane","Storia di diabete e spalla rigida: valutazione medica"],
  segreto:"Prima di trattare, fai alzare il braccio da supino invece che in piedi. Se in quella posizione arriva molto più in alto, il problema non è la spalla: è il dorso e la gravità. Questo semplice cambio di posizione ti dice dove lavorare e fa capire al cliente, in dieci secondi, che il suo problema non è dove pensava."},

 {id:"p-retromarcia",voce:"«Non riesco a girarmi per fare la retromarcia»",zona:"Colonna",
  sintesi:"Il gesto chiede rotazione dorsale e cervicale, più una rotazione di spalla. La lombare non può aiutare: ha solo 13° totali. Se il dorso è bloccato, il collo va in sofferenza.",
  gesto:["Rotazione cervicale fino a 80°","Rotazione dorsale fino a 35°","Il braccio si appoggia allo schienale in rotazione esterna","La lombare partecipa pochissimo"],
  movimenti:["mv-collo-rot","mv-rachide-rot","mv-spalla-re"],
  cause:[
   {t:"Rigidità dorsale e costale",perche:"Ventiquattro articolazioni costo-vertebrali immobili impediscono la rotazione: il corpo la chiede al collo e alla lombare, che non possono darla.",muscoli:["m-erettori","m-obliqui"],test:"Seduto a cavalcioni su una sedia con le braccia incrociate al petto: misura la rotazione pura del tronco, senza bacino."},
   {t:"Blocco alto C1–C2",perche:"Metà della rotazione del collo viene da lì. Se manca, la persona gira le spalle invece della testa.",muscoli:["m-suboccipitali","m-elevatore"],test:"Rotazione del collo con il mento verso il petto (flessione): isola C1–C2. Meno di 30° per lato è ridotto."},
   {t:"Obliqui asimmetrici",perche:"La rotazione è il loro lavoro: se un lato è dominante, la rotazione opposta si riduce.",muscoli:["m-obliqui"],test:"Confronta la rotazione seduta destra e sinistra: una differenza di 10° è già funzionale."},
   {t:"Postura di guida",perche:"Sedile reclinato, braccia tese, bacino scivolato: la colonna perde le curve e il dorso si blocca in flessione.",muscoli:["m-ileopsoas","m-pettorale-grande"],test:"Chiedi di mimare la posizione al volante e osserva il bacino."}],
  catene:["c-spirale","c-laterale"],
  trattamento:["Mobilizzazione costale a persona seduta o in decubito laterale, sul respiro","Lavoro sugli obliqui del lato limitato","Fascia toraco-lombare","Sotto-occipitali per ultimi, dolcemente","Consigli sul sedile: schienale più verticale, bacino indietro"],
  rosse:["Vertigini o nausea durante la rotazione","Formicolio a entrambe le mani","Storia di trauma cervicale recente"],
  segreto:"Insegna al cliente la 'regola dei venti gradi': se il collo gira meno di 60° per lato, non è il collo ad essere malato, è il dorso a non collaborare. Mobilizzare tre o quattro segmenti dorsali dà un guadagno immediato e misurabile di rotazione cervicale. Misura prima e dopo, davanti a lui."},

 {id:"p-alzarsi",voce:"«Mi fa male la schiena quando mi alzo dalla sedia»",zona:"Lombare",
  sintesi:"Alzarsi richiede di estendere le anche con i glutei mentre il tronco resta rigido. Se i glutei non partono, il lavoro passa a lombari e ischiocrurali — e la schiena protesta.",
  gesto:["Il tronco si inclina avanti di 30–40°","Il bacino si solleva con estensione d'anca","I glutei devono attivarsi per primi","La lombare deve restare stabile, non estendersi"],
  movimenti:["mv-anca-est","mv-rachide-est","mv-ginocchio-flex"],
  cause:[
   {t:"Gluteo massimo inibito",perche:"Con lo psoas corto da postura seduta, il gluteo viene inibito per inibizione reciproca. Gli ischiocrurali e gli erettori lo sostituiscono e si sovraccaricano.",muscoli:["m-gluteo-massimo","m-ileopsoas"],test:"Prono, una mano sul gluteo e una sull'ischiocrurale: chiedi di alzare la gamba tesa. Se parte l'ischiocrurale, il gluteo è spento."},
   {t:"Quadrato dei lombi accorciato",perche:"È il muscolo che tira il fianco: si sovraccarica quando i glutei non spingono. Dà il classico dolore sulla cresta iliaca che rende difficile alzarsi.",muscoli:["m-quadrato-lombi"],test:"Decubito laterale, palpazione del quadrilatero fra 12ª costa e cresta iliaca."},
   {t:"Ileopsoas corto",perche:"Tiene il bacino in antiversione: quando ci si alza, la lombare parte già in compressione.",muscoli:["m-ileopsoas"],test:"Test di Thomas: supino sul bordo del lettino, una coscia al petto. Se l'altra coscia si solleva, lo psoas è corto."},
   {t:"Controllo del trasverso perso",perche:"Nelle lombalgie croniche sparisce l'attivazione anticipata del trasverso: il corpo non si prepara al carico.",muscoli:["m-trasverso"],test:"Dita mediali alle SIAS, espirazione lenta: deve comparire tensione profonda senza gonfiare l'addome."}],
  catene:["c-profonda","c-sbl","c-funzionale-post"],
  trattamento:["Psoas lento, in espirazione, mai su addome dolente","Quadrato dei lombi in decubito laterale","Glutei: prima liberarli, poi riattivarli con dieci ponti alla fine della seduta","Insegna a respirare col diaframma: è parte del trattamento","Rivaluta facendo alzare e sedere tre volte"],
  rosse:["Dolore irradiato sotto il ginocchio con formicolio","Perdita di forza al piede","Disturbi di vescica o intestino: invio urgente"],
  segreto:"Il gesto è il test e il test è il trattamento. Fai alzare e sedere il cliente tre volte prima di iniziare e tre volte alla fine, chiedendogli un numero da 0 a 10. È un dato che resta nella scheda, motiva il cliente e ti dice, seduta dopo seduta, se la tua strategia funziona davvero."}
]);
</script>
