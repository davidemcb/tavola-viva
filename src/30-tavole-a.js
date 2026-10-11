<script>
/* =========================================================
   TAVOLE ANATOMICHE — disegni vettoriali originali.
   Ogni osso porta data-osso: si colora secondo il ruolo
   (origine / inserzione / osso della scheda) ed è cliccabile.
   ========================================================= */
DB.tavole = {};

DB.tavole.spalla = {nome:"Spalla e cingolo scapolare — vista anteriore destra", vb:"0 0 210 200",
 svg:
 /* coste accennate */
 '<g class="acc">'+
 '<path d="M4,66 C30,58 54,64 72,80"/><path d="M2,88 C30,80 58,88 78,106"/><path d="M4,110 C32,104 60,114 80,132"/>'+
 '</g>'+
 /* clavicola */
 '<path class="bone" data-osso="o-clavicola" d="M14,44 C40,32 68,40 92,52 C100,56 108,57 116,55 L118,65 C106,70 94,68 82,62 C60,51 40,45 18,54 Z"/>'+
 /* scapola: corpo */
 '<path class="bone" data-osso="o-scapola" d="M132,62 L196,50 L188,104 C186,120 176,140 166,150 L150,112 C144,98 136,80 132,62 Z"/>'+
 /* scapola: acromion */
 '<path class="bone" data-osso="o-scapola" d="M112,50 L140,40 L148,52 L126,64 Z"/>'+
 /* scapola: processo coracoideo */
 '<path class="bone" data-osso="o-scapola" d="M104,66 C112,56 126,56 132,62 L128,72 C120,68 112,70 108,76 Z"/>'+
 /* glena */
 '<ellipse class="bone" data-osso="o-scapola" cx="128" cy="86" rx="10" ry="15"/>'+
 /* omero: testa e diafisi */
 '<path class="bone" data-osso="o-omero" d="M118,86 C118,70 106,60 94,62 C80,64 72,78 74,92 C76,104 84,112 94,114 L92,188 L114,188 L116,112 C118,104 118,94 118,86 Z"/>'+
 /* tubercolo maggiore e solco */
 '<path class="acc2" d="M84,66 C78,74 78,86 82,96"/><path class="acc2" d="M96,64 C92,74 92,86 96,96"/>'+
 '',
 punti:{
  "acromion":[130,50],"processo coracoideo":[114,68],"tubercolo maggiore":[80,74],
  "tubercolo minore":[98,74],"solco bicipitale":[89,78],"cavità glenoidea":[128,86],
  "spina della scapola":[170,64],"angolo inferiore della scapola":[166,148],"margine mediale della scapola":[192,80]
 }};

DB.tavole.gomito = {nome:"Gomito e avambraccio — vista anteriore destra", vb:"0 0 200 210",
 svg:
 /* omero */
 '<path class="bone" data-osso="o-omero" d="M84,4 L116,4 L120,66 C124,78 126,88 122,96 L78,96 C74,88 76,78 80,66 Z"/>'+
 /* epicondili */
 '<path class="bone" data-osso="o-omero" d="M74,80 C64,82 60,92 66,100 C72,106 80,102 82,94 Z"/>'+
 '<path class="bone" data-osso="o-omero" d="M126,80 C136,82 140,92 134,100 C128,106 120,102 118,94 Z"/>'+
 /* ulna */
 '<path class="bone" data-osso="o-ulna" d="M112,92 C120,94 124,102 122,112 L114,196 L102,196 L106,112 C104,102 106,94 112,92 Z"/>'+
 /* olecrano */
 '<path class="bone" data-osso="o-ulna" d="M108,84 C118,84 124,92 122,100 L106,98 Z"/>'+
 /* radio */
 '<path class="bone" data-osso="o-radio" d="M86,100 C94,100 98,108 96,118 L90,178 C88,190 82,196 72,196 L66,186 L80,118 C80,108 80,100 86,100 Z"/>'+
 /* testa del radio */
 '<ellipse class="bone" data-osso="o-radio" cx="86" cy="96" rx="11" ry="7"/>'+
 /* membrana interossea */
 '<g class="acc"><path d="M96,120 L106,128"/><path d="M94,134 L106,142"/><path d="M92,148 L106,156"/><path d="M90,162 L106,170"/></g>',
 punti:{
  "epicondilo laterale":[68,92],"epicondilo mediale":[132,92],"olecrano":[114,88],
  "testa del radio":[86,96],"tuberosità radiale":[92,112],"stiloide radiale":[72,190],"stiloide ulnare":[112,192]
 }};

DB.tavole.mano = {nome:"Polso e mano — vista palmare destra", vb:"0 0 190 220",
 svg:
 /* radio e ulna */
 '<path class="bone" data-osso="o-radio" d="M52,4 L78,4 L80,52 L50,52 Z"/>'+
 '<path class="bone" data-osso="o-ulna" d="M88,4 L110,4 L108,50 L86,50 Z"/>'+
 /* carpo: fila prossimale */
 '<path class="bone" data-osso="o-mano" d="M46,56 C58,52 68,56 70,66 C72,76 62,82 52,80 C44,78 40,68 46,56 Z"/>'+
 '<path class="bone" data-osso="o-mano" d="M74,54 C86,52 94,58 94,68 C94,78 84,82 76,78 C70,74 68,62 74,54 Z"/>'+
 '<path class="bone" data-osso="o-mano" d="M98,56 C108,54 116,60 114,70 C112,78 102,82 96,76 C92,70 92,60 98,56 Z"/>'+
 /* carpo: fila distale */
 '<path class="bone" data-osso="o-mano" d="M44,86 C56,82 66,88 66,96 C66,104 56,108 48,104 C42,100 40,92 44,86 Z"/>'+
 '<path class="bone" data-osso="o-mano" d="M70,84 C80,82 88,88 88,96 C88,104 78,108 72,104 C66,100 66,88 70,84 Z"/>'+
 '<path class="bone" data-osso="o-mano" d="M92,84 C104,82 112,90 110,98 C108,106 98,108 92,102 C88,96 88,88 92,84 Z"/>'+
 /* metacarpi */
 '<g class="bone" data-osso="o-mano">'+
 '<path d="M34,108 L46,108 L44,150 L30,150 Z"/>'+
 '<path d="M54,110 L66,110 L66,156 L54,156 Z"/>'+
 '<path d="M74,110 L86,110 L88,158 L76,158 Z"/>'+
 '<path d="M94,108 L106,108 L110,154 L98,154 Z"/>'+
 '<path d="M114,104 L126,102 L134,144 L122,148 Z"/>'+
 '</g>'+
 /* falangi */
 '<g class="bone" data-osso="o-mano">'+
 '<path d="M28,154 L44,154 L42,182 L28,182 Z"/><path d="M28,186 L42,186 L40,206 L28,206 Z"/>'+
 '<path d="M52,160 L66,160 L66,190 L52,190 Z"/><path d="M52,194 L66,194 L64,214 L52,214 Z"/>'+
 '<path d="M76,162 L88,162 L90,192 L78,192 Z"/><path d="M78,196 L90,196 L90,214 L78,214 Z"/>'+
 '<path d="M100,158 L112,156 L116,186 L104,188 Z"/><path d="M104,192 L116,190 L118,208 L106,210 Z"/>'+
 '</g>'+
 /* pollice */
 '<g class="bone" data-osso="o-mano"><path d="M132,148 L146,142 L160,170 L148,178 Z"/><path d="M150,182 L162,176 L172,198 L160,204 Z"/></g>'+
 /* retinacolo dei flessori */
 '<path class="acc2" d="M42,92 C64,102 92,102 112,92"/>',
 punti:{
  "stiloide radiale":[52,52],"stiloide ulnare":[104,50],"scafoide":[56,68],"semilunare":[84,66],
  "piramidale":[104,68],"trapezio":[54,96],"uncinato":[100,96],"tunnel carpale":[77,96],"base del pollice":[138,148]
 }};

DB.tavole.torace = {nome:"Gabbia toracica e sterno — vista anteriore", vb:"0 0 210 210",
 svg:
 /* clavicole */
 '<path class="bone" data-osso="o-clavicola" d="M16,26 C44,14 74,24 98,36 L96,46 C72,36 46,28 20,36 Z"/>'+
 '<path class="bone" data-osso="o-clavicola" d="M194,26 C166,14 136,24 112,36 L114,46 C138,36 164,28 190,36 Z"/>'+
 /* sterno */
 '<path class="bone" data-osso="o-sterno" d="M96,34 L114,34 L116,54 L94,54 Z"/>'+
 '<path class="bone" data-osso="o-sterno" d="M95,58 L115,58 L112,124 L98,124 Z"/>'+
 '<path class="bone" data-osso="o-sterno" d="M99,128 L111,128 L108,144 L102,144 Z"/>'+
 /* coste destra e sinistra */
 '<g class="bone" data-osso="o-coste">'+
 '<path d="M92,42 C66,44 40,56 26,76" fill="none"/><path d="M92,58 C60,60 32,74 18,98" fill="none"/>'+
 '<path d="M92,74 C56,76 26,92 14,118" fill="none"/><path d="M92,90 C54,92 24,110 14,138" fill="none"/>'+
 '<path d="M92,106 C54,108 26,128 18,154" fill="none"/><path d="M94,122 C58,126 32,146 26,168" fill="none"/>'+
 '<path d="M98,138 C66,144 44,162 38,180" fill="none"/><path d="M104,150 C80,160 60,176 54,192" fill="none"/>'+
 '<path d="M118,42 C144,44 170,56 184,76" fill="none"/><path d="M118,58 C150,60 178,74 192,98" fill="none"/>'+
 '<path d="M118,74 C154,76 184,92 196,118" fill="none"/><path d="M118,90 C156,92 186,110 196,138" fill="none"/>'+
 '<path d="M118,106 C156,108 184,128 192,154" fill="none"/><path d="M116,122 C152,126 178,146 184,168" fill="none"/>'+
 '<path d="M112,138 C144,144 166,162 172,180" fill="none"/><path d="M106,150 C130,160 150,176 156,192" fill="none"/>'+
 '</g>'+
 /* colonna accennata */
 '<g class="acc"><path d="M105,30 L105,200"/></g>',
 punti:{
  "manubrio":[105,44],"angolo di Louis":[105,56],"processo xifoideo":[105,136],
  "incisura giugulare":[105,32],"prima costa":[60,50],"12ª costa":[60,180]
 }};
</script>
