<script>
/* =========================================================
   OSSA DEL CRANIO E DELLA FACCIA + revisione di alcune tavole
   ========================================================= */
DB.ossa = DB.ossa.concat([
 {id:"o-frontale",nome:"Osso frontale",lat:"Os frontale",regione:"Testa",alias:["glabella","arcata sopracciliare","bozze frontali"],
  dove:"La fronte: dalle arcate sopracciliari fino alla sutura coronale, che si palpa come una linea trasversale a circa quattro dita sopra le sopracciglia. La glabella è il punto piatto fra le due sopracciglia.",
  forma:"Osso a conchiglia che forma la fronte e il tetto delle orbite. Contiene i seni frontali, cavità aeree sopra le sopracciglia.",
  articola:["a-atm"],
  segreto:"È il capolinea della Linea Superficiale Posteriore: la fascia epicranica arriva fino alle arcate sopracciliari. Un lavoro lento sulla fronte, verso l'alto e l'esterno, rilascia la nuca — è il motivo per cui il massaggio della fronte fa «sciogliere il collo»."},
 {id:"o-parietale",nome:"Ossa parietali",lat:"Ossa parietalia",regione:"Testa",alias:["parietale","parietali","bozze parietali","sutura sagittale","sutura coronale","sutura lambdoidea","vertice"],
  dove:"Il tetto e i lati del cranio, dal frontale davanti all'occipite dietro. Le bozze parietali sono i punti più larghi della testa; la sutura sagittale corre al centro dalla fronte alla nuca.",
  forma:"Due ossa quadrangolari curve, unite fra loro dalla sutura sagittale, con il frontale dalla coronale e con l'occipite dalla lambdoidea.",
  articola:[],
  segreto:"Sotto le bozze parietali il cuoio capelluto dovrebbe scorrere liberamente: quando è «incollato» la persona ha quasi sempre cefalea tensiva. Muovere il cuoio capelluto sul cranio con le dita aperte è un test e un trattamento insieme."},
 {id:"o-temporale",nome:"Osso temporale",lat:"Os temporale",regione:"Testa",alias:["osso temporale","squama del temporale","arcata zigomatica","processo zigomatico","fossa glenoidea","meato acustico esterno","rocca petrosa"],
  dove:"Ai lati del cranio, attorno all'orecchio. Reperi: il processo mastoideo dietro il lobo, l'arcata zigomatica davanti all'orecchio (segui lo zigomo all'indietro), il condilo mandibolare che si muove sotto il dito aprendo la bocca.",
  forma:"Quattro parti: squama (sottile, laterale), rocca petrosa (durissima, contiene l'orecchio interno), mastoide (dove si inserisce lo sternocleidomastoideo) e timpanica. Ospita la fossa glenoidea dell'ATM.",
  articola:["a-atm"],
  segreto:"Sul temporale si inseriscono sternocleidomastoideo, splenio, lunghissimo del capo e digastrico, e sopra ci scorre il temporale: è l'osso su cui si scaricano insieme le tensioni del collo e della masticazione. Chi ha acufeni senza causa otologica spesso ha proprio questi muscoli in tensione."},
 {id:"o-sfenoide",nome:"Osso sfenoide",lat:"Os sphenoidale",regione:"Testa",alias:["sfenoide","grande ala","piccola ala","sella turcica","processo pterigoideo","lamina pterigoidea"],
  dove:"Al centro della base del cranio, non palpabile se non nella sua grande ala, che affiora nella tempia in una piccola area davanti all'orecchio (lo pterion).",
  forma:"A forma di pipistrello: corpo centrale con la sella turcica (che ospita l'ipofisi), due grandi ali, due piccole ali e i processi pterigoidei dove nascono gli pterigoidei.",
  articola:["a-atm"],
  segreto:"È la chiave di volta del cranio: si articola con tutte le altre ossa craniche. Gli pterigoidei nascono dai suoi processi e per questo la masticazione «tira» sulla base del cranio. Lo pterion, dove affiora, è il punto più sottile del cranio: nessuna pressione decisa lì."},
 {id:"o-etmoide",nome:"Osso etmoide",lat:"Os ethmoidale",regione:"Testa",alias:["etmoide","lamina cribrosa","cellule etmoidali"],
  dove:"Fra le due orbite, dietro la radice del naso: non è palpabile.",
  forma:"Osso leggero e spugnoso: lamina cribrosa attraversata dai filamenti olfattivi, cellule etmoidali (seni), lamina perpendicolare che forma parte del setto nasale.",
  articola:[],
  segreto:"Le cellule etmoidali sono i seni che si infiammano nelle sinusiti «fra gli occhi». Il dolore alla radice del naso che peggiora piegandosi in avanti è etmoidale, non muscolare: si invia, non si massaggia."},
 {id:"o-mascellare",nome:"Osso mascellare",lat:"Maxilla",regione:"Testa",alias:["mascellare","mascella","seno mascellare","arcata dentaria superiore","tuberosità del mascellare"],
  dove:"L'arcata dentaria superiore, il pavimento delle orbite e i lati del naso. Si palpa sotto lo zigomo e ai lati delle narici.",
  forma:"Due ossa fuse sulla linea mediana; contengono i seni mascellari, le cavità più grandi della faccia.",
  articola:[],
  segreto:"Il seno mascellare ha il pavimento vicino alle radici dei molari superiori: un mal di denti in alto senza carie è spesso una sinusite, e viceversa. Un'altra causa di «mal di denti» senza denti è il massetere in trigger: tre diagnosi diverse per lo stesso dolore."},
 {id:"o-zigomatico",nome:"Osso zigomatico",lat:"Os zygomaticum",regione:"Testa",alias:["zigomatico","zigomo","zigomi","arco zigomatico"],
  dove:"Lo zigomo, la sporgenza della guancia sotto l'occhio. Con il processo zigomatico del temporale forma l'arcata zigomatica che si segue fino all'orecchio.",
  forma:"Osso quadrangolare che forma la parte laterale dell'orbita e la prominenza della guancia.",
  articola:[],
  segreto:"Dall'arcata zigomatica nasce il massetere, e sull'osso zigomatico si attaccano i muscoli mimici della guancia. Un lavoro leggero lungo l'arcata, dal naso verso l'orecchio, scarica il massetere senza toccarlo direttamente: utile quando è troppo dolente."},
 {id:"o-nasale",nome:"Ossa nasali",lat:"Ossa nasalia",regione:"Testa",alias:["nasale","nasali","radice del naso","dorso del naso"],
  dove:"Il dorso del naso nella sua parte alta e dura; la parte bassa è cartilagine.",
  forma:"Due piccole lamine unite sulla linea mediana, articolate con il frontale in alto e con i mascellari ai lati.",
  articola:[],
  segreto:"Nella respirazione nasale le ali del naso dovrebbero aprirsi leggermente: se restano immobili, la persona respira con la bocca, e la respirazione orale è il primo passo verso testa protratta e sotto-occipitali in tensione."},
 {id:"o-ioide",nome:"Osso ioide",lat:"Os hyoideum",regione:"Collo",alias:["ioide","osso ioide","muscoli sovraioidei","muscoli sottoioidei"],
  dove:"Nel collo anteriore, a livello di C3, sopra la cartilagine tiroidea: si prende delicatamente fra pollice e indice, sotto l'angolo della mandibola, e si muove lateralmente.",
  forma:"L'unico osso del corpo che non si articola con nessun altro: è sospeso nei muscoli, fra mandibola sopra e sterno sotto.",
  articola:[],
  segreto:"È una stazione della Linea Profonda Frontale: collega la mandibola allo sterno e da lì al diaframma. Un ioide che non scorre lateralmente indica tensione dei muscoli sopra o sotto di esso, e si accompagna a deglutizione faticosa, voce affaticata e sensazione di nodo in gola. Si tratta con tocco leggerissimo."}
]);

Object.assign(TAVOLA_PER_OSSO,{"o-frontale":"collo","o-parietale":"collo","o-temporale":"collo","o-sfenoide":"collo","o-etmoide":"collo",
 "o-mascellare":"collo","o-zigomatico":"collo","o-nasale":"collo","o-ioide":"collo"});

/* ---------- Tavola del cranio ridisegnata: ogni osso è una regione ---------- */
DB.tavole.collo = {nome:"Cranio e rachide cervicale — profilo sinistro", vb:"0 0 190 230",
 svg:
 '<path class="bone" data-osso="o-frontale" d="M64,18 C80,10 92,8 104,8 L100,30 C96,44 90,52 84,60 L60,64 C56,48 58,30 64,18 Z"/>'+
 '<path class="bone" data-osso="o-parietale" d="M104,8 C124,8 142,20 150,44 L136,70 L112,64 L100,30 Z"/>'+
 '<path class="bone" data-osso="o-cranio" d="M150,44 C156,66 150,90 134,102 L124,104 L122,92 L136,70 Z"/>'+
 '<path class="bone" data-osso="o-temporale" d="M112,64 L136,70 L122,92 L124,104 L108,104 C100,100 96,90 94,84 L70,76 L70,70 L94,72 C96,68 104,64 112,64 Z"/>'+
 '<path class="bone" data-osso="o-sfenoide" d="M84,60 C90,54 96,52 100,54 L98,66 L94,72 C90,70 86,66 84,60 Z"/>'+
 '<path class="bone" data-osso="o-nasale" d="M56,64 L60,64 L58,74 L52,72 Z"/>'+
 '<path class="bone" data-osso="o-zigomatico" d="M62,72 L70,70 L70,78 L66,84 L58,82 Z"/>'+
 '<path class="bone" data-osso="o-mascellare" d="M58,74 L66,84 L68,92 L46,92 C44,84 48,78 58,74 Z"/>'+
 '<path class="bone" data-osso="o-mandibola" d="M46,92 C40,104 44,118 58,124 C78,132 104,130 122,120 L124,108 C104,118 78,120 62,112 C54,108 52,98 56,92 Z"/>'+
 '<path class="bone" data-osso="o-mandibola" d="M120,90 C128,90 132,98 130,108 L122,120 L114,112 Z"/>'+
 '<path class="bone" data-osso="o-mandibola" d="M100,92 L108,90 L106,108 L98,108 Z"/>'+
 '<path class="bone" data-osso="o-ioide" d="M74,138 L92,136 L92,141 L74,143 Z"/>'+
 '<g class="bone" data-osso="o-vertebre-c">'+
 '<path d="M104,108 L138,108 L138,120 L104,120 Z"/><path d="M102,124 L136,124 L136,136 L102,136 Z"/>'+
 '<path d="M100,140 L134,140 L134,152 L100,152 Z"/><path d="M100,156 L134,156 L134,168 L100,168 Z"/>'+
 '<path d="M102,172 L136,172 L136,184 L102,184 Z"/><path d="M104,188 L138,188 L138,200 L104,200 Z"/>'+
 '<path d="M108,204 L142,204 L142,218 L108,218 Z"/></g>'+
 '<g class="acc2"><path d="M102,122 L137,122"/><path d="M101,138 L135,138"/><path d="M100,154 L134,154"/><path d="M101,170 L135,170"/><path d="M103,186 L137,186"/><path d="M106,202 L140,202"/></g>'+
 '<g class="acc"><path d="M112,60 L112,226"/></g>',
 punti:{
  "protuberanza occipitale esterna":[148,86],"processo mastoideo":[122,102],"linea nucale superiore":[144,80],
  "arcata zigomatica":[82,73],"atlante":[120,114],"epistrofeo":[118,130],"C7":[124,210],
  "angolo della mandibola":[122,120],"condilo":[124,94],"processo coronoideo":[104,92],"mento":[50,112],
  "meato acustico":[112,60],"glabella":[60,52],"pterion":[102,58],"osso ioide":[83,139]
 }};

/* ---------- Spalla: vista posteriore (la scapola è mediale, a destra) ---------- */
DB.tavole.spalla = {nome:"Spalla destra — vista posteriore", vb:"0 0 210 200",
 svg:
 '<g class="acc"><path d="M206,4 L206,196"/></g>'+
 '<path class="bone" data-osso="o-clavicola" d="M14,44 C40,32 68,40 92,52 C100,56 108,57 116,55 L118,65 C106,70 94,68 82,62 C60,51 40,45 18,54 Z"/>'+
 '<path class="bone" data-osso="o-scapola" d="M132,62 L196,50 L188,104 C186,120 176,140 166,150 L150,112 C144,98 136,80 132,62 Z"/>'+
 '<path class="bone" data-osso="o-scapola" d="M112,50 L140,40 L148,52 L126,64 Z"/>'+
 '<path class="acc2" d="M194,62 L130,50"/>'+
 '<path class="bone" data-osso="o-scapola" d="M104,66 C112,56 126,56 132,62 L128,72 C120,68 112,70 108,76 Z"/>'+
 '<ellipse class="bone" data-osso="o-scapola" cx="128" cy="86" rx="10" ry="15"/>'+
 '<path class="bone" data-osso="o-omero" d="M118,86 C118,70 106,60 94,62 C80,64 72,78 74,92 C76,104 84,112 94,114 L92,188 L114,188 L116,112 C118,104 118,94 118,86 Z"/>'+
 '<path class="acc2" d="M84,66 C78,74 78,86 82,96"/>',
 punti:{
  "acromion":[130,50],"processo coracoideo":[114,68],"tubercolo maggiore":[80,74],
  "cavità glenoidea":[128,86],"spina della scapola":[162,56],"fossa sovraspinata":[172,50],"fossa sottospinata":[168,96],
  "angolo inferiore della scapola":[166,148],"margine mediale della scapola":[192,80],"tuberosità deltoidea":[104,150],
  "processi spinosi":[206,60]
 }};

/* ---------- Mano: radio dal lato del pollice ---------- */
DB.tavole.mano.svg = DB.tavole.mano.svg
  .replace('class="bone" data-osso="o-radio" d="M52,4 L78,4 L80,52 L50,52 Z"','class="bone" data-osso="o-ulna" d="M52,4 L78,4 L80,52 L50,52 Z"')
  .replace('class="bone" data-osso="o-ulna" d="M88,4 L110,4 L108,50 L86,50 Z"','class="bone" data-osso="o-radio" d="M88,4 L110,4 L108,50 L86,50 Z"');
DB.tavole.mano.punti["stiloide radiale"]=[106,50]; DB.tavole.mano.punti["stiloide ulnare"]=[52,52];

/* ---------- Ginocchio: il perone è laterale, quindi è un ginocchio sinistro ---------- */
DB.tavole.ginocchio.nome="Ginocchio sinistro — vista anteriore";
Object.assign(DB.tavole.ginocchio.punti,{"condilo femorale mediale":[52,112],"condilo tibiale laterale":[124,140],"zampa d'oca":[54,182],"menisco mediale":[68,128],"condilo femorale laterale":[128,112]});
</script>
