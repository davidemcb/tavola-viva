<script>
/* Tavole Gray, disegni e regioni per i muscoli aggiunti nelle parti 5-7. */
Object.assign(TAVOLA_PER_REGIONE,{"Dorso (profondo)":"rachide","Collo (profondo)":"collo","Pelvi":"bacino","Avambraccio (profondo)":"gomito","Gomito":"gomito","Testa":"collo","Mano":"mano"});

Object.assign(DB.didascalie,{
 Gray390:"Faccia posteriore dello sterno: trasverso del torace, intercostali interni, origine del diaframma",
 Gray417:"Sezione dell'avambraccio: flessori, estensori, pronatori, nervi mediano, ulnare e radiale",
 Gray419:"Avambraccio posteriore, strato profondo: supinatore, abduttore lungo ed estensori del pollice",
 Gray425:"Palmo della mano: aponeurosi palmare, eminenza tenar e ipotenar, nervo ulnare",
 Gray431:"Sezione del braccio: bicipite, brachiale, tricipite, nervi radiale, mediano e ulnare",
 Gray444:"Pianta del piede, secondo strato: quadrato della pianta, lombricali, tendini dei flessori lunghi",
 Gray445:"Pianta del piede, terzo strato: flessore breve dell'alluce, adduttore dell'alluce, tibiale posteriore"
});
const G2=(...n)=>n.map(x=>"Gray"+x);
Object.assign(DB.immagini,{
 "m-splenio":G2(389,385),"m-semispinale":G2(389),"m-lungo-collo":G2(387),"m-platisma":G2(378,385),"m-sopraioidei":G2(386),"m-sottoioidei":G2(386),
 "m-mimici":G2(378),"m-succlavio":G2(411),"m-intercostali":G2(390,411),"m-dentato-post":G2(409,389),"m-pavimento-pelvico":G2(241,828),"m-trasverso-torace":G2(390),
 "m-psoas-minore-iliaco":G2(430),"m-coracobrachiale":G2(411,525),"m-brachiale":G2(431,411),"m-anconeo":G2(418),"m-brachioradiale":G2(418,414),
 "m-pronatori":G2(414,417),"m-supinatore":G2(419),"m-flessori-polso":G2(414,417),"m-flessori-dita":G2(414,417),"m-estensori-polso":G2(418),"m-estensori-dita":G2(418,419),
 "m-intrinseci-mano":G2(425,219),"m-rotatori-anca":G2(434,436),"m-sartorio":G2(430,549),"m-gracile":G2(433,430),"m-pettineo":G2(433,549),"m-popliteo":G2(439),
 "m-estensori-dita-piede":G2(437,441),"m-flessori-dita-piede":G2(439,442),"m-intrinseci-piede":G2(443,444,445),"m-plantare-gracile":G2(438),
 "p-torcicollo":G2(385,389),"p-cefalea":G2(389,804),"p-braccio-sopra-testa":G2(412,326),"p-spalla-congelata":G2(327,411),"p-gomito-tennista":G2(418,414),
 "p-mano-gonfia-mattino":G2(414,425),"p-formicolio-braccio":G2(387,808),"p-dito-scatto":G2(425,414),"p-click-mandibola":G2(383,309),"p-vertigine-collo":G2(389,513)
});

Object.assign(DB.disegni,{
 /* collo */
 "m-splenio":[{tav:"collo",d:"M124,100 L134,104 L128,176 L116,172 Z",fibre:"M128,104 L122,172"}],
 "m-semispinale":[{tav:"collo",d:"M136,94 L146,98 L144,220 L132,218 Z",deep:true},{tav:"rachide",d:"M88,20 L96,22 L96,232 L86,230 Z",deep:true}],
 "m-lungo-collo":[{tav:"collo",d:"M98,110 L104,110 L106,218 L98,216 Z",deep:true}],
 "m-platisma":[{tav:"collo",d:"M52,120 L80,118 L96,226 L60,226 Z",fibre:"M60,124 L72,224 M74,120 L86,224"}],
 "m-sopraioidei":[{tav:"collo",d:"M50,112 L84,116 L92,136 L74,138 Z",fibre:"M58,116 L78,136"}],
 "m-sottoioidei":[{tav:"collo",d:"M74,144 L92,142 L96,226 L80,226 Z",fibre:"M80,146 L84,224 M88,145 L92,224"}],
 "m-mimici":[{tav:"collo",d:"M56,30 L100,12 L104,30 L62,56 Z",fibre:"M64,34 L98,20 M62,46 L100,28"}],
 /* torace e spalla */
 "m-succlavio":[{tav:"torace",d:"M60,50 L94,40 L96,48 L64,58 Z",deep:true},{tav:"spalla",d:"M30,52 L92,56 L92,64 L32,62 Z",deep:true}],
 "m-intercostali":[{tav:"torace",d:"M26,78 L92,60 L92,74 L18,98 Z M18,100 L92,76 L92,90 L14,120 Z M14,122 L92,92 L92,106 L14,140 Z",fibre:"M30,80 L36,92 M50,74 L56,86 M70,68 L76,80 M28,104 L34,116 M50,98 L56,110 M72,92 L78,104"}],
 "m-dentato-post":[{tav:"spalla",d:"M206,40 L206,70 L150,80 L146,70 Z",deep:true},{tav:"rachide",d:"M86,150 L96,154 L84,180 L74,176 Z",deep:true}],
 "m-trasverso-torace":[{tav:"torace",d:"M70,60 L96,58 L96,130 L60,116 Z",deep:true}],
 "m-pavimento-pelvico":[{tav:"bacino",d:"M90,150 L140,150 L130,176 L100,176 Z",deep:true}],
 "m-psoas-minore-iliaco":[{tav:"bacino",d:"M40,60 L92,52 L96,66 L64,140 L48,154 C50,120 44,90 40,60 Z",fibre:"M60,64 L52,140 M78,58 L56,146"}],
 /* braccio e avambraccio (tavola gomito: anteriore destra, radio a sinistra) */
 "m-coracobrachiale":[{tav:"spalla",d:"M110,66 L120,70 L112,120 L104,118 Z",deep:true}],
 "m-brachiale":[{tav:"gomito",d:"M80,40 L120,40 L118,96 L106,100 L92,100 L82,96 Z",deep:true}],
 "m-anconeo":[{tav:"gomito",d:"M68,96 L82,98 L104,106 L96,116 Z",deep:true}],
 "m-brachioradiale":[{tav:"gomito",d:"M76,56 L86,58 L80,190 L66,186 Z",fibre:"M81,60 L73,186"}],
 "m-pronatori":[{tav:"gomito",d:"M128,98 L138,104 L92,130 L88,120 Z M74,180 L108,176 L108,186 L72,190 Z",fibre:"M130,102 L92,126"}],
 "m-supinatore":[{tav:"gomito",d:"M70,96 L86,100 L96,128 L84,136 Z",deep:true}],
 "m-flessori-polso":[{tav:"gomito",d:"M130,100 L140,104 L114,196 L98,194 Z",fibre:"M134,104 L108,194 M128,112 L104,192"}],
 "m-flessori-dita":[{tav:"gomito",d:"M124,106 L134,110 L112,196 L100,196 Z",deep:true}],
 "m-estensori-polso":[{tav:"gomito",d:"M62,96 L74,102 L88,196 L72,196 Z",fibre:"M66,100 L78,194 M70,98 L84,194"}],
 "m-estensori-dita":[{tav:"gomito",d:"M66,104 L78,108 L94,196 L82,198 Z",deep:true}],
 "m-intrinseci-mano":[{tav:"mano",d:"M120,104 L146,96 L160,168 L128,160 Z M30,106 L48,106 L44,156 L28,152 Z M54,110 L64,110 L66,150 L56,150 Z M74,110 L84,110 L86,152 L76,152 Z M94,108 L104,108 L108,150 L98,150 Z",fibre:"M126,108 L142,160 M34,110 L34,150"}],
 /* anca e coscia */
 "m-rotatori-anca":[{tav:"bacino",d:"M78,120 L108,130 L108,144 L40,146 L30,138 Z",deep:true}],
 "m-sartorio":[{tav:"bacino",d:"M20,58 L30,62 L84,198 L74,198 Z",fibre:"M25,62 L78,196"},{tav:"ginocchio",d:"M26,0 L36,0 L58,160 L48,162 Z",fibre:"M31,4 L52,160"}],
 "m-gracile":[{tav:"bacino",d:"M108,160 L118,164 L102,198 L92,198 Z",fibre:"M112,164 L98,196"},{tav:"ginocchio",d:"M44,0 L52,0 L62,170 L54,174 Z",fibre:"M48,4 L58,170"}],
 "m-pettineo":[{tav:"bacino",d:"M74,122 L96,130 L72,170 L56,166 Z",fibre:"M80,126 L64,166"}],
 /* ginocchio, gamba, piede */
 "m-popliteo":[{tav:"ginocchio",d:"M120,112 L132,116 L70,150 L60,142 Z",deep:true}],
 "m-estensori-dita-piede":[{tav:"ginocchio",d:"M126,142 L138,146 L128,226 L114,226 Z",deep:true},{tav:"piede",d:"M110,0 L124,0 L124,60 L166,96 L158,104 L112,66 Z",fibre:"M116,4 L118,60 L160,98"}],
 "m-flessori-dita-piede":[{tav:"piede",d:"M60,0 L72,0 L72,56 L104,92 L100,100 L62,62 Z",deep:true}],
 "m-intrinseci-piede":[{tav:"piede",d:"M30,122 L190,132 L186,142 L34,134 Z",fibre:"M50,128 L180,138 M70,130 L172,140"}],
 "m-plantare-gracile":[{tav:"piede",d:"M44,0 L52,0 L36,60 L30,58 Z",deep:true}]
});
</script>
