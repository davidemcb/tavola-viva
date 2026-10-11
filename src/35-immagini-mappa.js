<script>
/* =========================================================
   MAPPA scheda -> tavole della Gray's Anatomy (1918), verificate una per una.
   Le didascalie sono in italiano, scritte per gli allievi.
   ========================================================= */
DB.didascalie = {
 Gray82:"Vertebra toracica tipica vista dall'alto",Gray84:"Vertebra cervicale tipica",Gray87:"Epistrofeo (C2) visto dall'alto, con il dente",
 Gray90:"Vertebra toracica di profilo",Gray93:"Vertebra lombare vista da dietro e dall'alto",Gray95:"Sacro, faccia pelvica",
 Gray115:"Sterno e cartilagini costali, faccia anteriore",Gray116:"Sterno, faccia posteriore",Gray122:"Una costa tipica, faccia inferiore con il solco costale",
 Gray129:"Osso occipitale, superficie esterna: linee nucali e protuberanza",Gray132:"Osso parietale sinistro, superficie esterna",Gray134:"Osso frontale, superficie esterna",
 Gray137:"Osso temporale sinistro: squama, mastoide, arcata zigomatica",Gray145:"Sfenoide visto dall'alto: corpo, ali, sella turcica",Gray149:"Etmoide visto dall'alto: lamina cribrosa",
 Gray155:"Osso nasale destro",Gray157:"Mascellare sinistro, superficie esterna",Gray164:"Osso zigomatico sinistro in sede",
 Gray176:"Mandibola, superficie esterna: corpo, angolo, ramo, condilo, coronoide",Gray186:"Osso ioide, faccia anteriore",Gray188:"Cranio di profilo con le suture",
 Gray190:"Cranio visto di fronte: orbite, mascellari, zigomi, nasali",Gray200:"Clavicola sinistra, faccia superiore",Gray202:"Scapola sinistra, faccia costale (fossa sottoscapolare)",
 Gray203:"Scapola sinistra, faccia dorsale: spina, fosse sovra e sottospinata, acromion",Gray207:"Omero sinistro, vista anteriore: tubercoli, solco bicipitale, epicondili",
 Gray208:"Omero sinistro, vista posteriore: solco del nervo radiale",Gray212:"Estremità superiore dell'ulna: olecrano e incisura trocleare",Gray214:"Ossa dell'avambraccio, faccia posteriore, con la membrana interossea",
 Gray219:"Ossa della mano, faccia palmare",Gray220:"Ossa della mano destra, faccia palmare",Gray235:"Osso dell'anca destro, faccia esterna: acetabolo, ileo, ischio, pube",
 Gray236:"Osso dell'anca destro, faccia interna: fossa iliaca, faccia auricolare",Gray241:"Bacino maschile nel suo insieme",Gray244:"Femore destro, faccia anteriore: testa, collo, trocanteri",
 Gray245:"Femore destro, faccia posteriore: linea aspra, condili",Gray255:"Rotula, faccia anteriore",Gray258:"Tibia e perone, faccia anteriore",
 Gray268:"Ossa del piede, dorso",Gray269:"Ossa del piede, pianta",Gray291:"Scheletro del piede, lato laterale: calcagno, astragalo, cuboide",
 Gray301:"Sezione sagittale di due vertebre lombari: disco, legamenti longitudinali, giallo, interspinoso",Gray303:"Archi vertebrali toracici visti di fronte: legamenti gialli e faccette",
 Gray304:"Membrana atlanto-occipitale e legamento atlo-assiale",Gray309:"Articolazione temporo-mandibolare, lato esterno: legamento laterale",Gray310:"Articolazione temporo-mandibolare, lato interno",
 Gray312:"Articolazioni costo-vertebrali, vista anteriore",Gray325:"Articolazione sterno-claveare: disco, legamenti",Gray326:"Spalla sinistra: legamenti coraco-acromiale, coraco-claveari, acromion-claveari, trasverso della scapola",
 Gray327:"Capsula della spalla distesa, vista anteriore: legamenti gleno-omerali, tendine del capo lungo",Gray329:"Gomito sinistro: legamenti anteriore e collaterale ulnare",
 Gray330:"Gomito sinistro: legamenti posteriore e collaterale radiale",Gray333:"Legamento anulare del radio visto dall'alto",Gray334:"Legamenti del polso, vista anteriore, con il retinacolo dei flessori",
 Gray339:"Anca destra di fronte: legamento ileo-femorale, sacro-iliaci anteriori, ileo-lombare",Gray340:"Anca da dietro: legamento ischio-femorale, sacro-tuberoso, sacro-spinoso",
 Gray341:"Anca aperta dall'interno: labbro acetabolare e legamento rotondo",Gray342:"Anca di fronte con la capsula rimossa",Gray345:"Ginocchio destro di fronte: tendine rotuleo, collaterali, retinacoli",
 Gray346:"Ginocchio destro da dietro: legamento popliteo obliquo, capsula",Gray347:"Ginocchio aperto di fronte: crociati e menischi",Gray348:"Ginocchio da dietro: crociato posteriore e menischi",
 Gray354:"Legamenti del piede, lato mediale: deltoideo, calcaneo-scafoideo plantare (spring), plantare lungo",Gray355:"Legamenti del piede, lato laterale: peroneo-astragalici, peroneo-calcaneare, sindesmosi",
 Gray357:"Sezione frontale di caviglia e sotto-astragalica",Gray378:"Muscoli di testa, faccia e collo",Gray382:"Temporale: a ventaglio dalla fossa temporale al processo coronoideo (arcata e massetere rimossi)",
 Gray383:"Pterigoidei laterale e mediale, visti dopo aver rimosso l'arcata zigomatica e parte del ramo",Gray384:"Sezione del collo a livello di C6: fasce, muscoli, visceri",
 Gray385:"Muscoli del collo, vista laterale: sternocleidomastoideo, trapezio, scaleni",Gray386:"Muscoli anteriori del collo: sopra e sotto-ioidei attorno all'osso ioide",
 Gray387:"Muscoli prevertebrali: lungo del collo e scaleni anteriore, medio, posteriore fino alle prime coste",Gray388:"Sezione della parete addominale posteriore: fascia toraco-lombare, quadrato dei lombi, psoas",
 Gray389:"Muscoli profondi del dorso: erettori spinali, splenio, sotto-occipitali",Gray391:"Diaframma visto da sotto: pilastri, centro frenico, orifizi",
 Gray392:"Obliquo esterno dell'addome e guaina del retto",Gray395:"Obliquo interno dell'addome",Gray409:"Muscoli che uniscono l'arto superiore alla colonna: trapezio, gran dorsale, romboidi, elevatore",
 Gray410:"Muscoli superficiali del torace e del braccio: grande pettorale, deltoide, bicipite",Gray411:"Muscoli profondi del torace: piccolo pettorale, dentato anteriore, intercostali, coracobrachiale",
 Gray412:"Muscoli dorsali della scapola e tricipite: sovraspinato, sottospinato, piccolo e grande rotondo",Gray414:"Avambraccio anteriore, strato superficiale: flessori dall'epitroclea",
 Gray418:"Avambraccio posteriore: estensori dall'epicondilo, brachioradiale, abduttore lungo ed estensore breve del pollice",Gray430:"Ileopsoas, quadrato dei lombi, tensore della fascia lata, sartorio, quadricipite, adduttori",
 Gray432:"Sezione della coscia: logge, setti intermuscolari, fascia lata",Gray433:"Adduttori: grande, lungo, breve, pettineo, otturatore esterno",Gray434:"Regione glutea profonda e coscia posteriore: medio gluteo, piriforme, gemelli, otturatore, ischiocrurali",
 Gray436:"Otturatore esterno con legamenti pubo-capsulare e ileo-femorale",Gray437:"Gamba anteriore: tibiale anteriore, estensori, peroneo lungo",Gray438:"Polpaccio: capi del gastrocnemio e soleo, tendine d'Achille",
 Gray439:"Gamba posteriore profonda: popliteo, tibiale posteriore, flessori lunghi, peronei",Gray440:"Sezione della gamba: le quattro logge",Gray441:"Caviglia laterale: tendini dei peronei, tibiale anteriore, estensori, retinacoli",
 Gray442:"Caviglia mediale: tibiale posteriore, flessori, tendine d'Achille e borsa retrocalcaneare",Gray443:"Pianta del piede, primo strato: aponeurosi plantare, flessore breve, abduttori",
 Gray507:"Arteria carotide esterna e suoi rami",Gray513:"Carotide interna e arteria vertebrale, lato destro",Gray520:"Vasi del collo di profilo: carotide, giugulare, sternocleidomastoideo",
 Gray523:"Arteria ascellare e suoi rami: toracica laterale, sottoscapolare, circonflesse",Gray525:"Arteria brachiale con nervo mediano e radiale, bicipite, coracobrachiale",
 Gray526:"Arterie del braccio e dell'avambraccio",Gray529:"Arterie dell'avambraccio, lato dorsale",Gray531:"Aorta addominale e suoi rami",
 Gray549:"Triangolo femorale: nervo, arteria e vena femorale, sartorio, adduttore lungo, tensore della fascia lata",Gray550:"Arteria femorale lungo tutta la coscia con il nervo safeno",
 Gray551:"Arterie poplitea, tibiale posteriore e peroniera con il nervo tibiale",Gray552:"Rete arteriosa del ginocchio e arteria tibiale anteriore",
 Gray599:"Cisterna del chilo e dotto toracico",Gray604:"Linfonodi di testa e collo",Gray607:"Linfonodi ascellari e drenaggio della mammella",
 Gray793:"Nervi glossofaringeo, vago e accessorio",Gray804:"Schema del plesso cervicale",Gray806:"Nervo frenico e suoi rapporti con il vago",
 Gray808:"Plesso brachiale destro visto di fronte: radici, tronchi, corde, rami",Gray809:"Plesso brachiale nell'ascella: muscolocutaneo, mediano, ulnare, radiale, toracico lungo, toraco-dorsale",
 Gray810:"Nervi sovrascapolare e ascellare sulla scapola: sovraspinato, sottospinato, rotondi, deltoide",Gray811:"Nervi cutanei dell'arto superiore",Gray819:"Nervo intercostale nel suo percorso lungo la costa",
 Gray822:"Schema del plesso lombare",Gray823:"Plesso lombare e suoi rami nello psoas",Gray827:"Nervi dell'arto inferiore, vista anteriore: femorale, otturatorio, cutaneo laterale",
 Gray828:"Schema del plesso sacrale e pudendo",Gray832:"Nervi dell'arto inferiore, vista posteriore: ischiatico, tibiale, peroneo comune",Gray833:"Nervi plantari"
};

const G=(...n)=>n.map(x=>"Gray"+x);
DB.immagini = {
 /* ossa */
 "o-cranio":G(129,188),"o-mandibola":G(176,309),"o-clavicola":G(200,325),"o-scapola":G(203,202),"o-omero":G(207,208),"o-radio":G(214,333),"o-ulna":G(212,214),
 "o-sterno":G(115,116),"o-coste":G(122,115),"o-vertebre-c":G(84,87),"o-vertebre-t":G(90,82),"o-vertebre-l":G(93,301),"o-sacro":G(95,241),"o-ileo":G(235,236),
 "o-femore":G(244,245),"o-rotula":G(255,345),"o-tibia":G(258),"o-perone":G(258),"o-piede":G(268,269,291),"o-mano":G(219,220),"o-frontale":G(134,188),
 "o-parietale":G(132,188),"o-temporale":G(137,188),"o-sfenoide":G(145),"o-etmoide":G(149),"o-mascellare":G(157,190),"o-zigomatico":G(164,190),"o-nasale":G(155,190),"o-ioide":G(186,386),
 /* articolazioni */
 "a-gleno-omerale":G(326,327),"a-acromion-claveare":G(326),"a-sterno-claveare":G(325),"a-scapolo-toracica":G(409,203),"a-omero-ulnare":G(329,330),"a-omero-radiale":G(330,333),
 "a-radio-ulnare":G(333,214),"a-radio-carpica":G(334,219),"a-intervertebrale":G(301,303),"a-lombo-sacrale":G(301,95),"a-sacro-iliaca":G(340,339),"a-sinfisi":G(241,339),
 "a-coxo-femorale":G(339,341,342),"a-femoro-tibiale":G(345,347,348),"a-femoro-rotulea":G(345,255),"a-tibio-fibulare":G(355,258),"a-tibio-tarsica":G(354,355,357),
 "a-sotto-astragalica":G(357,355),"a-medio-tarsica":G(354,291),"a-occipito-atlantoidea":G(304,84),"a-atm":G(309,310),"a-costo-vertebrale":G(312),"a-costo-sternale":G(115),
 "a-mediocarpica":G(334,219),"a-trapezio-metacarpale":G(219,334),"a-metacarpo-falangee":G(219),"a-tarso-metatarsale":G(268,354),"a-metatarso-falangee":G(269,268),
 "a-uncovertebrali":G(84),"a-zigoapofisarie":G(303,93),"a-sacro-coccigea":G(95),"a-manubrio-sternale":G(115),"a-atlo-assiale":G(304,87),"a-costo-trasversarie":G(312),
 /* muscoli */
 "m-scom":G(385,386),"m-scaleni":G(387),"m-suboccipitali":G(389,304),"m-trapezio":G(409),"m-elevatore":G(409,385),"m-romboidi":G(409),"m-dentato":G(411,410),
 "m-pettorale-grande":G(410),"m-pettorale-piccolo":G(411),"m-gran-dorsale":G(409),"m-deltoide":G(412,410),"m-sovraspinato":G(412,810),"m-sottospinato":G(412,810),
 "m-sottoscapolare":G(411,809),"m-rotondi":G(412,810),"m-bicipite":G(411,525),"m-tricipite":G(412,418),"m-erettori":G(389),"m-quadrato-lombi":G(430,388),
 "m-retto-addominale":G(392,395),"m-obliqui":G(392,395),"m-trasverso":G(388,395),"m-diaframma":G(391),"m-ileopsoas":G(430),"m-gluteo-massimo":G(434),"m-gluteo-medio":G(434),
 "m-piriforme":G(434),"m-tfl":G(430,549),"m-quadricipite":G(430),"m-ischiocrurali":G(434),"m-adduttori":G(433,430),"m-gastrocnemio":G(438,442),"m-soleo":G(438),
 "m-tibiale-ant":G(437,441),"m-tibiale-post":G(439,442),"m-peronei":G(437,441),"m-plantare":G(443),"m-massetere":G(378,382),"m-temporale":G(382),"m-pterigoidei":G(383),
 /* nervi e plessi */
 "n-accessorio":G(793,804),"n-frenico":G(806,804),"n-toracico-lungo":G(809),"n-sovrascapolare":G(810),"n-ascellare":G(810),"n-muscolocutaneo":G(809,525),
 "n-radiale":G(810,525,811),"n-mediano":G(809,525,414),"n-ulnare":G(809,525),"n-femorale":G(827,549),"n-otturatorio":G(823,436),"n-gluteo-sup":G(828,832),
 "n-sciatico":G(832,828),"n-tibiale":G(832,833),"n-peroneo":G(832,827),"n-grande-occipitale":G(804,389),"n-toraco-dorsale":G(809),"n-dorsale-scapola":G(808),
 "n-pettorali":G(809,808),"n-sottoscapolari":G(809),"n-gluteo-inf":G(828,832),"n-intercostali":G(819),"n-rami-dorsali":G(819,389),"n-suboccipitale":G(304,389),
 "x-cervicale":G(804),"x-brachiale":G(808,809),"x-lombare":G(822,823),"x-sacrale":G(828,832),"x-coccigeo":G(828),
 /* vasi */
 "v-carotide":G(520,507),"v-vertebrale":G(513),"v-succlavia":G(520,523),"v-ascellare":G(523),"v-brachiale":G(525),"v-radiale":G(526,529),"v-ulnare":G(526,414),
 "v-toraco-dorsale":G(523),"v-toracica-laterale":G(523),"v-soprascapolare":G(523,810),"v-circonflessa-omerale":G(523,810),"v-aorta":G(531),"v-iliaca":G(531),
 "v-femorale":G(549,550),"v-poplitea":G(551,552),"v-tibiale-post":G(551),"v-tibiale-ant":G(552),"v-peroniera":G(551),"v-intercostali":G(819),"v-linfatico":G(604,607,599),
 /* legamenti */
 "g-nucale":G(304,389),"g-longitudinale-ant":G(301,312),"g-longitudinale-post":G(301),"g-giallo":G(303,301),"g-interspinosi":G(301),"g-trasverso-atlante":G(304),
 "g-ileolombare":G(339),"g-coraco-acromiale":G(326),"g-coraco-claveari":G(326),"g-glenomerali":G(327,326),"g-trasverso-omerale":G(326,207),"g-trasverso-scapola":G(326,810),
 "g-collaterali-gomito":G(329,330),"g-anulare":G(333,329),"g-membrana-interossea":G(214,258),"g-retinacolo-flessori":G(334,414),"g-inguinale":G(549,339),
 "g-sacroiliaci":G(339,340),"g-sacrotuberoso":G(340),"g-ileofemorale":G(339,436),"g-pubo-ischio-femorali":G(436,340),"g-labbro-acetabolare":G(341),"g-crociati":G(347,348),
 "g-collaterali-ginocchio":G(345,346),"g-menischi":G(348,347),"g-rotuleo":G(345),"g-deltoideo":G(354),"g-laterali-caviglia":G(355),"g-sindesmosi":G(355,357),"g-spring":G(354),"g-plantare-lungo":G(354,443),
 /* tendini, borse, fasce */
 "d-generale":G(442,418),"d-sovraspinato":G(412,326),"d-capo-lungo-bicipite":G(327,411),"d-achille":G(438,442),"d-rotuleo":G(345,430),"d-estensori-gomito":G(418),
 "d-flessori-gomito":G(414),"d-dequervain":G(418),"d-flessori-dita":G(414,219),"d-tibiale-post":G(442,439),"d-peronei":G(441),"d-ileopsoas":G(430),"d-ischiocrurali-prox":G(434),
 "d-adduttori":G(433),"d-zampa-oca":G(430,345),
 "b-generale":G(442),"b-subacromiale":G(326,412),"b-subscapolare":G(327),"b-olecranica":G(330),"b-trocanterica":G(434),"b-ileopectinea":G(430,339),"b-ischiatica":G(434),
 "b-prepatellare":G(345),"b-anserina":G(430,345),"b-poplitea":G(346),"b-retrocalcaneare":G(442),
 "f-superficiale":G(432),"f-profonda":G(432),"f-toracolombare":G(388,409),"f-cervicale":G(384,386),"f-clavipettorale":G(411),"f-addominale":G(392,395),"f-iliaca":G(430),
 "f-lata":G(432,430),"f-crurale":G(440),"f-plantare":G(443),"f-palmare":G(414),"f-epicranica":G(378),"f-setti":G(432,440),"f-glutea":G(434),
 /* tipi di articolazione */
 "t-sinartrosi":G(188),"t-anfiartrosi":G(301,241),"t-diartrosi":G(341,345),"t-enartrosi":G(341,327),"t-condiloidea":G(334,309),"t-sellare":G(325,219),"t-ginglimo":G(329,345),
 "t-trocoide":G(333,304),"t-artrodia":G(303,312),
 /* catene */
 "c-sbl":G(409,434,438),"c-sfl":G(410,430,437),"c-laterale":G(434,437),"c-spirale":G(409,392),"c-braccio-ant-sup":G(410,414),"c-braccio-ant-prof":G(411,414),
 "c-braccio-post-sup":G(409,418),"c-braccio-post-prof":G(412,418),"c-funzionale-post":G(409,434),"c-funzionale-ant":G(410,433),"c-profonda":G(430,391,387)
};
DB.immaginiRegione = {
 "Spalla":G(326,412),"Anca":G(339,434),"Ginocchio":G(345,430),"Lombare":G(301,389),"Colonna":G(301,303),"Collo":G(385,304),"Piede":G(354,443),
 "Arto inferiore":G(430,434),"Arto superiore":G(410,418),"Postura":G(409,430)
};
/* i movimenti prendono le immagini della loro articolazione */
const _immaginiDi_base = immaginiDi;
immaginiDi = function(kind,it){
  let L=_immaginiDi_base(kind,it);
  if(!L.length && it.art){ const a=anyById(it.art); if(a) L=_immaginiDi_base("articolazione",a.item); }
  return L;
};
</script>
