<script>
/* Ossa della mano: scheda propria, così le tavole possono collegarla. */
DB.ossa = DB.ossa.concat([
 {id:"o-mano",nome:"Ossa della mano",lat:"Carpus, metacarpus, phalanges",regione:"Arto superiore",
  alias:["carpo","ossa carpali","ossa del carpo","ossa della mano"],
  dove:"Otto ossa carpali in due file, cinque metacarpi e quattordici falangi. Reperi: il pisiforme sporge sul lato del mignolo alla piega del polso; lo scafoide si palpa nella tabacchiera anatomica.",
  forma:"Fila prossimale: scafoide, semilunare, piramidale, pisiforme. Fila distale: trapezio, trapezoide, capitato, uncinato. Il capitato è al centro e fa da perno di tutto il carpo.",
  articola:["a-radio-carpica","a-mediocarpica","a-trapezio-metacarpale","a-metacarpo-falangee"],
  segreto:"Una caduta sulla mano aperta con dolore nella tabacchiera anatomica è frattura di scafoide finché non si dimostra il contrario — e nelle prime settimane spesso non si vede alla radiografia. È l'osso che, se trascurato, va in necrosi: mai minimizzare quel punto."}
]);

DB.tavole.rachide = {nome:"Colonna vertebrale — profilo, anteriore a sinistra", vb:"0 0 150 310",
 svg:
 /* cervicale */
 '<path class="bone" data-osso="o-vertebre-c" d="M74,14 C60,32 56,54 62,76 L80,76 C74,54 78,32 90,16 Z"/>'+
 '<g class="acc2"><path d="M70,26 L86,28"/><path d="M66,38 L84,40"/><path d="M63,50 L82,52"/><path d="M62,62 L81,64"/></g>'+
 /* toracica */
 '<path class="bone" data-osso="o-vertebre-t" d="M62,80 C58,110 60,146 68,174 L88,172 C80,146 78,110 80,80 Z"/>'+
 '<g class="acc2"><path d="M60,94 L80,94"/><path d="M59,110 L79,110"/><path d="M60,126 L79,126"/><path d="M62,142 L81,142"/><path d="M64,158 L84,158"/></g>'+
 /* lombare */
 '<path class="bone" data-osso="o-vertebre-l" d="M68,178 C76,198 80,214 78,232 L100,232 C100,212 96,196 88,176 Z"/>'+
 '<g class="acc2"><path d="M70,190 L92,188"/><path d="M74,204 L96,202"/><path d="M77,218 L99,216"/></g>'+
 /* sacro e coccige */
 '<path class="bone" data-osso="o-sacro" d="M78,236 L102,236 C102,262 96,282 86,292 C78,282 76,258 78,236 Z"/>'+
 '<path class="bone" data-osso="o-sacro" d="M84,294 C90,298 90,304 86,306 C82,304 82,298 84,294 Z"/>'+
 /* filo a piombo */
 '<g class="acc"><path d="M74,6 L74,306"/></g>',
 punti:{
  "lordosi cervicale":[62,48],"cifosi dorsale":[86,126],"lordosi lombare":[74,206],
  "C7":[70,74],"T12":[76,172],"L5":[90,228],"promontorio":[90,238]
 }};

DB.tavole.bacino = {nome:"Bacino — vista anteriore", vb:"0 0 230 200",
 svg:
 /* ali iliache */
 '<path class="bone" data-osso="o-ileo" d="M20,46 C46,24 80,26 96,50 C104,64 104,84 96,96 L72,106 C50,104 30,88 22,70 Z"/>'+
 '<path class="bone" data-osso="o-ileo" d="M210,46 C184,24 150,26 134,50 C126,64 126,84 134,96 L158,106 C180,104 200,88 208,70 Z"/>'+
 /* sacro */
 '<path class="bone" data-osso="o-sacro" d="M100,54 L130,54 C132,84 126,110 115,124 C104,110 98,84 100,54 Z"/>'+
 /* branche pubiche e ischio */
 '<path class="bone" data-osso="o-ileo" d="M74,110 C88,116 102,124 110,134 L110,146 C96,142 80,134 70,124 Z"/>'+
 '<path class="bone" data-osso="o-ileo" d="M156,110 C142,116 128,124 120,134 L120,146 C134,142 150,134 160,124 Z"/>'+
 '<path class="bone" data-osso="o-ileo" d="M62,120 C74,136 86,152 92,168 L78,176 C66,160 56,140 54,126 Z"/>'+
 '<path class="bone" data-osso="o-ileo" d="M168,120 C156,136 144,152 138,168 L152,176 C164,160 174,140 176,126 Z"/>'+
 /* sinfisi */
 '<path class="bone" data-osso="o-ileo" d="M110,148 L120,148 L120,164 L110,164 Z"/>'+
 /* acetaboli e teste femorali */
 '<circle class="bone" data-osso="o-femore" cx="58" cy="106" r="16"/>'+
 '<circle class="bone" data-osso="o-femore" cx="172" cy="106" r="16"/>'+
 '<path class="bone" data-osso="o-femore" d="M48,116 L34,150 L20,146 C18,130 26,116 44,106 Z"/>'+
 '<path class="bone" data-osso="o-femore" d="M182,116 L196,150 L210,146 C212,130 204,116 186,106 Z"/>'+
 '<path class="bone" data-osso="o-femore" d="M36,150 L54,198 L74,198 L52,146 Z"/>'+
 '<path class="bone" data-osso="o-femore" d="M194,150 L176,198 L156,198 L178,146 Z"/>',
 punti:{
  "cresta iliaca":[48,40],"spina iliaca antero-superiore":[24,60],"sinfisi pubica":[115,156],
  "tuberosità ischiatica":[80,174],"gran trocantere":[24,142],"acetabolo":[58,106],
  "articolazione sacro-iliaca":[100,72],"promontorio":[115,54]
 }};

DB.tavole.ginocchio = {nome:"Ginocchio — vista anteriore destra", vb:"0 0 180 230",
 svg:
 /* femore */
 '<path class="bone" data-osso="o-femore" d="M66,2 L112,2 L116,68 C120,84 122,96 118,104 L60,104 C56,96 58,84 62,68 Z"/>'+
 '<path class="bone" data-osso="o-femore" d="M58,92 C44,96 40,114 50,124 C62,132 74,124 74,110 Z"/>'+
 '<path class="bone" data-osso="o-femore" d="M120,92 C134,96 138,114 128,124 C116,132 104,124 104,110 Z"/>'+
 /* menischi */
 '<path class="acc3" d="M50,128 C64,122 78,122 88,128 C78,134 62,134 50,128 Z"/>'+
 '<path class="acc3" d="M92,128 C102,122 116,122 130,128 C118,134 102,134 92,128 Z"/>'+
 /* tibia */
 '<path class="bone" data-osso="o-tibia" d="M48,134 L132,134 C134,148 130,158 124,164 L118,226 L64,226 L58,164 C50,158 46,148 48,134 Z"/>'+
 /* tuberosità tibiale */
 '<path class="bone" data-osso="o-tibia" d="M82,166 C92,164 100,168 100,176 C100,184 90,188 82,184 Z"/>'+
 /* perone */
 '<path class="bone" data-osso="o-perone" d="M132,140 C142,142 146,152 144,162 L140,226 L128,226 L132,162 Z"/>'+
 /* rotula */
 '<path class="bone" data-osso="o-rotula" d="M74,70 C94,64 112,72 112,90 C112,108 96,118 84,112 C72,106 68,84 74,70 Z"/>'+
 /* tendini */
 '<g class="acc2"><path d="M80,2 L80,66"/><path d="M106,2 L106,66"/><path d="M84,114 L88,166"/><path d="M104,114 L98,166"/></g>',
 punti:{
  "rotula":[92,90],"tuberosità tibiale":[91,176],"testa del perone":[138,150],
  "condilo femorale mediale":[128,112],"condilo tibiale laterale":[56,140],"zampa d'oca":[128,180],"menisco mediale":[112,128]
 }};

DB.tavole.piede = {nome:"Piede — profilo laterale destro", vb:"0 0 250 150",
 svg:
 /* tibia e perone */
 '<path class="bone" data-osso="o-tibia" d="M46,2 L78,2 L80,56 L44,56 Z"/>'+
 '<path class="bone" data-osso="o-perone" d="M82,2 L98,2 L98,64 C98,72 88,74 84,68 L82,56 Z"/>'+
 /* astragalo */
 '<path class="bone" data-osso="o-piede" d="M44,58 C70,52 92,60 96,74 C98,86 86,94 72,92 C56,90 44,78 44,58 Z"/>'+
 /* calcagno */
 '<path class="bone" data-osso="o-piede" d="M22,66 C40,62 58,74 62,92 C66,110 54,122 34,120 C16,118 8,102 10,86 C12,74 16,68 22,66 Z"/>'+
 /* scafoide */
 '<path class="bone" data-osso="o-piede" d="M98,74 C110,70 118,78 116,90 C114,100 104,102 98,96 C94,90 94,80 98,74 Z"/>'+
 /* cuboide */
 '<path class="bone" data-osso="o-piede" d="M64,96 C80,92 92,100 92,110 C92,120 80,124 70,120 C62,116 60,102 64,96 Z"/>'+
 /* cuneiformi */
 '<path class="bone" data-osso="o-piede" d="M118,80 C132,76 142,84 140,94 C138,104 126,106 118,100 Z"/>'+
 '<path class="bone" data-osso="o-piede" d="M116,102 C130,98 140,106 138,114 C134,122 122,122 116,116 Z"/>'+
 /* metatarsi */
 '<path class="bone" data-osso="o-piede" d="M142,84 L196,94 L198,104 L142,98 Z"/>'+
 '<path class="bone" data-osso="o-piede" d="M140,106 L194,110 L194,120 L140,118 Z"/>'+
 '<path class="bone" data-osso="o-piede" d="M94,112 L188,122 L188,132 L94,124 Z"/>'+
 /* falangi */
 '<path class="bone" data-osso="o-piede" d="M200,92 L226,98 L226,108 L200,104 Z"/>'+
 '<path class="bone" data-osso="o-piede" d="M230,98 L244,102 L244,110 L230,108 Z"/>'+
 '<path class="bone" data-osso="o-piede" d="M196,112 L220,116 L220,124 L196,122 Z"/>'+
 '<path class="bone" data-osso="o-piede" d="M190,126 L214,130 L214,138 L190,136 Z"/>'+
 /* fascia plantare */
 '<path class="acc2" d="M24,118 C70,132 130,134 190,134"/>'+
 /* arco */
 '<g class="acc"><path d="M22,124 C70,144 140,146 212,142"/></g>',
 punti:{
  "malleolo laterale":[90,66],"malleolo mediale":[58,56],"calcagno":[34,94],"astragalo":[70,74],
  "scafoide":[106,86],"cuboide":[76,108],"tuberosità del calcagno":[20,114],
  "base del 5º metatarso":[96,118],"prima metatarso-falangea":[198,98]
 }};

DB.tavole.collo = {nome:"Cranio e rachide cervicale — profilo destro", vb:"0 0 190 230",
 svg:
 /* cranio */
 '<path class="bone" data-osso="o-cranio" d="M64,18 C104,4 146,20 152,56 C156,80 146,98 128,104 L96,104 C74,100 58,84 56,60 C54,44 56,28 64,18 Z"/>'+
 /* faccia accennata */
 '<path class="acc2" d="M60,66 C48,70 42,80 46,88 L62,92"/>'+
 /* mandibola */
 '<path class="bone" data-osso="o-mandibola" d="M46,92 C40,104 44,118 58,124 C78,132 104,130 122,120 L124,108 C104,118 78,120 62,112 C54,108 52,98 56,92 Z"/>'+
 '<path class="bone" data-osso="o-mandibola" d="M120,90 C128,90 132,98 130,108 L122,120 L114,112 Z"/>'+
 /* vertebre cervicali */
 '<g class="bone" data-osso="o-vertebre-c">'+
 '<path d="M104,108 L138,108 L138,120 L104,120 Z"/>'+
 '<path d="M102,124 L136,124 L136,136 L102,136 Z"/>'+
 '<path d="M100,140 L134,140 L134,152 L100,152 Z"/>'+
 '<path d="M100,156 L134,156 L134,168 L100,168 Z"/>'+
 '<path d="M102,172 L136,172 L136,184 L102,184 Z"/>'+
 '<path d="M104,188 L138,188 L138,200 L104,200 Z"/>'+
 '<path d="M108,204 L142,204 L142,218 L108,218 Z"/>'+
 '</g>'+
 /* dischi */
 '<g class="acc2"><path d="M102,122 L137,122"/><path d="M101,138 L135,138"/><path d="M100,154 L134,154"/><path d="M101,170 L135,170"/><path d="M103,186 L137,186"/><path d="M106,202 L140,202"/></g>'+
 /* filo a piombo dal meato acustico */
 '<g class="acc"><path d="M112,60 L112,226"/></g>',
 punti:{
  "protuberanza occipitale esterna":[140,86],"processo mastoideo":[126,102],"linea nucale superiore":[136,80],
  "atlante":[120,114],"epistrofeo":[118,130],"C7":[124,210],"angolo della mandibola":[60,118],"meato acustico":[112,60]
 }};

/* quale tavola mostrare in base alla regione della scheda */
const TAVOLA_PER_REGIONE = {
 "Spalla":"spalla","Cingolo scapolare":"spalla","Cuffia dei rotatori":"spalla",
 "Braccio":"gomito","Gomito":"gomito","Avambraccio":"gomito","Avambraccio e gamba":"gomito",
 "Polso":"mano","Mano":"mano","Arto superiore":"gomito",
 "Torace":"torace","Respirazione":"torace",
 "Rachide":"rachide","Rachide cervicale":"collo","Dorso":"rachide","Addome":"rachide","Addome (profondo)":"rachide",
 "Collo":"collo","Testa":"collo","Masticazione":"collo",
 "Bacino":"bacino","Anca":"bacino","Anca (profondo)":"bacino","Anca (rotatori profondi)":"bacino","Coscia":"ginocchio",
 "Coscia anteriore":"ginocchio","Coscia posteriore":"ginocchio","Coscia mediale":"bacino",
 "Ginocchio":"ginocchio","Gamba":"piede","Gamba posteriore":"piede","Gamba anteriore":"piede",
 "Gamba profonda":"piede","Gamba laterale":"piede","Caviglia":"piede","Piede":"piede",
 "Arto inferiore":"ginocchio","Perineo":"bacino","Tutto il corpo":"rachide","Arti":"ginocchio",
 "Collo e arto superiore":"spalla","Bacino e arto inferiore":"bacino","Addome e coscia":"bacino",
 "Gamba e piede":"piede","Avambraccio e mano":"mano","Dorso e bacino":"rachide","Postura":"rachide","Colonna":"rachide","Lombare":"rachide"
};
</script>
