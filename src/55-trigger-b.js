<style>
.tpdot{fill:var(--muscle);stroke:#fff;stroke-width:1.3;cursor:pointer;transition:r .12s}
.tpdot:hover,.tpdot.on{r:5.5;stroke-width:2}
.tpdot.tender{fill:var(--joint)}
.tplegend{display:flex;gap:14px;flex-wrap:wrap;font-size:12.5px;color:var(--muted);margin:8px 0 0}
.tplegend i{display:inline-block;width:10px;height:10px;border-radius:50%;margin-right:5px;vertical-align:-1px}
</style>
<script>
/* Trigger point — parte 2: braccio, bacino, arto inferiore. Tender point della fibromialgia. Mappa e registrazione. */
DB.trigger = DB.trigger.concat([
 {id:"tp-bicipite",nome:"Trigger point del bicipite e del brachiale",muscolo:"m-bicipite",vista:"ant",xy:[62,120],regione:"Braccio",alias:["trigger bicipite","trigger brachiale","trigger point bicipite"],
  dove:"Bicipite: nel terzo inferiore dei due capi, sopra la piega del gomito. Brachiale: sotto e a lato del bicipite nel terzo inferiore del braccio, raggiungibile scostando il bicipite verso l'interno.",
  riferito:"Bicipite: davanti alla spalla (solco bicipitale) e alla piega del gomito; dolore nel sollevare la mano sopra la testa e nel portare pesi. Brachiale: alla base del pollice e al dorso della mano (con formicolio del pollice se comprime il radiale), davanti alla spalla.",
  attiva:"Portare pesi con il gomito piegato (buste, bambini), sollevamenti ripetuti con supinazione (cacciavite, violino), tendinite del capo lungo, gomito tenuto flesso a lungo (telefono).",
  cerca:"Supino, braccio rilassato: pinza del ventre del bicipite nel terzo inferiore; per il brachiale, si spinge il bicipite medialmente e si preme sull'omero laterale.",
  tratta:"Pinzatura e scorrimenti lungo il bicipite, pressione sul brachiale con il gomito semiflesso, allungamento con il braccio dietro e il palmo in su (bicipite) e in giù (brachiale).",
  auto:"Pollice dell'altra mano lungo il braccio dal gomito in su, 2 minuti; portare le buste con le braccia tese.",
  simula:"Tendinite del capo lungo, epicondilite, sindrome del tunnel carpale (pollice), De Quervain.",
  segreto:"Il dolore alla base del pollice con Finkelstein e grind test negativi, in chi porta pesi con il gomito piegato, è il brachiale: il più trascurato dei flessori perché sta nascosto sotto il bicipite. Si trova in trenta secondi spostando il bicipite di lato."},
 {id:"tp-tricipite",nome:"Trigger point del tricipite",muscolo:"m-tricipite",vista:"post",xy:[62,118],regione:"Braccio",alias:["trigger tricipite","trigger point tricipite"],
  dove:"Capo lungo nel terzo superiore e medio (il più frequente), capo laterale e mediale nel terzo inferiore vicino all'epicondilo e all'epitroclea.",
  riferito:"Capo lungo: alla faccia posteriore della spalla e del braccio e al dorso dell'avambraccio; capo laterale e mediale: all'epicondilo laterale (gomito del tennista) e all'epitroclea, con dolore nel quarto e quinto dito.",
  attiva:"Spingere (flessioni, alzarsi dai braccioli), tennis (rovescio), stampelle, portare pesi con il braccio teso, dormire con il braccio sotto la testa.",
  cerca:"Prono o seduto con il braccio appoggiato: pinza del capo lungo nel terzo superiore, pressione dei capi laterale e mediale sopra il gomito; il dolore all'epicondilo si riproduce.",
  tratta:"Pinzatura del capo lungo, pressione e scorrimenti sui capi bassi, allungamento con il gomito dietro la testa; frizioni sull'inserzione olecranica se dolente.",
  auto:"Pallina sulla faccia posteriore del braccio contro il muro; allungamento con il gomito piegato dietro la nuca.",
  simula:"Epicondilite ed epitrocleite, borsite olecranica, cervicobrachialgia C7.",
  segreto:"Un terzo delle «epicondiliti» ha un trigger nel capo laterale del tricipite, due dita sopra il gomito: il carico degli estensori non lo tocca. Prima di dichiarare un'epicondilite resistente, premere qui."},
 {id:"tp-brachioradiale",nome:"Trigger point del brachioradiale e degli estensori del polso",muscolo:"m-estensori-radiali-carpo",vista:"post",xy:[55,160],regione:"Avambraccio",alias:["trigger brachioradiale","trigger estensori del polso","trigger estensore radiale breve","trigger point epicondilite"],
  dove:"Brachioradiale: sul bordo esterno dell'avambraccio, 3–4 dita sotto il gomito. Estensore radiale lungo: subito sotto, vicino all'epicondilo. Estensore radiale breve: 3–4 cm sotto l'epicondilo, in profondità (il punto dell'epicondilite). Estensore delle dita: al centro del dorso dell'avambraccio.",
  riferito:"Brachioradiale: all'epicondilo e al dorso della mano fra pollice e indice. Estensori radiali: all'epicondilo e al dorso del polso. Estensore delle dita: al dito corrispondente (medio soprattutto) e all'epicondilo. Presa debole e dolorosa.",
  attiva:"Stringere con il polso flesso (mouse, martello, racchetta leggera), avvitare, suonare, sollevare con il palmo in giù, prono-supinazione ripetuta.",
  cerca:"Seduto con l'avambraccio appoggiato: pinza del brachioradiale, pressione sui ventri degli estensori sotto l'epicondilo mentre il cliente apre e chiude la mano; il punto riproduce il dolore «al gomito».",
  tratta:"Pinzatura del brachioradiale, pressione e scorrimenti sugli estensori verso il polso, frizioni sul ventre (non solo sull'inserzione), allungamento con il polso flesso e il gomito teso; poi carico eccentrico del polso.",
  auto:"Pollice lungo il dorso dell'avambraccio con la mano che si apre e chiude, 2 minuti; allungamento 3 volte al giorno; mouse vicino, polso dritto, impugnature grosse.",
  simula:"Epicondilite, tunnel radiale, De Quervain, cervicobrachialgia C6.",
  segreto:"L'epicondilite cronica è quasi sempre un trigger dell'estensore radiale breve 3–4 cm sotto l'epicondilo: chi friziona l'inserzione sull'osso lavora dove non c'è il problema. Il bracciale si mette lì, il pollice si mette lì, e il dolore «sull'osso» sparisce quando il ventre si scioglie."},
 {id:"tp-supinatore",nome:"Trigger point del supinatore",muscolo:"m-supinatore",vista:"post",xy:[58,150],regione:"Avambraccio",alias:["trigger supinatore","trigger point supinatore"],
  dove:"Davanti e sotto l'epicondilo laterale, nella piega del gomito, fra brachioradiale e bicipite, sulla testa del radio: si preme con il gomito leggermente piegato e l'avambraccio supinato.",
  riferito:"All'epicondilo laterale (il dolore del «tennista»), alla piega del gomito, al dorso della mano fra pollice e indice; formicolio del pollice se comprime il nervo radiale (interosseo posteriore).",
  attiva:"Girare la chiave, avvitare, dritto del tennis, portare valigie, lavare i vetri, remare.",
  cerca:"Seduto: pollice nella piega del gomito a lato del tendine del bicipite, verso la testa del radio, mentre il cliente supina contro resistenza: il punto riproduce il dolore all'epicondilo.",
  tratta:"Pressione mantenuta sulla testa del radio con piccole prono-supinazioni passive, allungamento in pronazione con il gomito teso; con il brachioradiale e gli estensori.",
  auto:"Pollice nella piega del gomito con la mano che prona e supina, 1 minuto; avvitare con il gomito al fianco.",
  simula:"Epicondilite, tunnel radiale, neuropatia dell'interosseo posteriore.",
  segreto:"Travell diceva che il supinatore è la causa più frequente del gomito del tennista, non gli estensori. Il test: dolore supinando contro resistenza con il gomito teso, e un punto esquisito davanti all'epicondilo, non sopra."},
 {id:"tp-flessori-avambraccio",nome:"Trigger point dei flessori del polso e delle dita e del pronatore rotondo",muscolo:"m-flessori-polso",vista:"ant",xy:[52,170],regione:"Avambraccio",alias:["trigger flessori avambraccio","trigger pronatore rotondo","trigger flessore radiale","trigger point epitrocleite"],
  dove:"Pronatore rotondo: subito sotto l'epitroclea, obliquo verso il radio. Flessori del polso: nel terzo superiore dell'avambraccio anteriore. Flessori delle dita: a metà avambraccio, profondi.",
  riferito:"Pronatore: alla piega del gomito e al polso radiale, con formicolio di pollice e indice (sindrome del pronatore). Flessori del polso: alla piega del polso. Flessori delle dita: al dito corrispondente, come «dolore nel dito» con la mano sana.",
  attiva:"Stringere a lungo (guida, utensili, manubrio), scrivere, strizzare, avvitare, portare pesi, computer con i polsi in appoggio.",
  cerca:"Supino con il palmo in su: pollice lungo l'avambraccio anteriore dall'epitroclea in giù mentre la mano si apre e chiude; i punti riproducono il dolore al polso o nelle dita.",
  tratta:"Scorrimenti e pressioni lungo i flessori verso il polso, allungamento con il polso e le dita estese e il gomito teso, lavoro sul pronatore con supinazione passiva.",
  auto:"Pollice lungo la faccia anteriore dell'avambraccio 2 minuti; palmo contro il muro con le dita in su; pause ogni 30 minuti.",
  simula:"Tunnel carpale, epitrocleite, dito a scatto, rizoartrosi, artrite delle dita.",
  segreto:"Il dolore «dentro il dito» che fa pensare a un'artrite, con il dito sano, viene dal flessore di quel dito nell'avambraccio: si preme a metà avambraccio e il dito «risponde». E il formicolio di pollice e indice con Phalen negativo e dolore alla piega del gomito è il pronatore, non il tunnel."},
 {id:"tp-intrinseci-mano",nome:"Trigger point dei muscoli della mano (adduttore e opponente del pollice, interossei)",muscolo:"m-intrinseci-mano",vista:"ant",xy:[46,214],regione:"Mano",alias:["trigger adduttore del pollice","trigger opponente","trigger interossei","trigger point mano"],
  dove:"Adduttore del pollice: nel palmo, nella membrana fra pollice e indice (pinzabile). Opponente: nell'eminenza tenar. Primo interosseo dorsale: sul dorso fra pollice e indice. Altri interossei: fra i metacarpi.",
  riferito:"Adduttore e opponente: alla base del pollice e lungo il lato radiale del polso (imita la rizoartrosi), al pollice. Interossei: al lato del dito corrispondente, con rigidità e «dita gonfie» al mattino.",
  attiva:"Scrivere, cucire, pinza prolungata (telefono, bisturi, pennello), strumenti musicali, artrosi, freddo.",
  cerca:"Pinza della membrana fra pollice e indice fra pollice e indice del terapista; pressione sulla tenar e negli spazi intermetacarpali dal dorso.",
  tratta:"Pinzatura dell'adduttore, pressione sulla tenar, scorrimenti negli spazi intermetacarpali, allungamento del pollice in abduzione ed estensione; calore e movimento.",
  auto:"Pinzare la membrana fra pollice e indice con l'altra mano 1 minuto; aprire le dita contro un elastico.",
  simula:"Rizoartrosi, De Quervain, artrite reumatoide delle dita, tunnel carpale.",
  segreto:"Metà dei dolori «da rizoartrosi» nelle persone che scrivono al telefono tutto il giorno sono l'adduttore del pollice: la radiografia può mostrare l'artrosi, ma il dolore cambia in una seduta pinzando la membrana fra pollice e indice. L'artrosi resta, il dolore no."},
 {id:"tp-ileopsoas",nome:"Trigger point dell'ileopsoas",muscolo:"m-ileopsoas",vista:"ant",xy:[88,180],regione:"Bacino",alias:["trigger ileopsoas","trigger psoas","trigger point psoas lombalgia"],
  dove:"Psoas: nell'addome, due-tre dita a lato dell'ombelico, in profondità, con le ginocchia piegate ed espirazione (cliente supino). Iliaco: dentro la cresta iliaca, sotto la spina antero-superiore. Inserzione: nel triangolo femorale, a lato dell'arteria, sul piccolo trocantere.",
  riferito:"Alla lombare in verticale lungo la colonna (il «mal di schiena a striscia» da un lato), all'inguine e alla faccia anteriore-interna della coscia. Dolore nell'alzarsi dalla sedia, nel raddrizzarsi, a stare in piedi; meglio sdraiati con le ginocchia piegate.",
  attiva:"Stare seduti a lungo con le anche flesse, dormire in posizione fetale, addominali con i piedi bloccati, gravidanza, corsa in salita, gamba corta.",
  cerca:"Supino con le ginocchia piegate: pressione lenta a lato dell'ombelico mentre il cliente espira e solleva appena il tallone (il muscolo si tende sotto le dita); test di Thomas positivo; dolore alla pressione nel triangolo femorale.",
  tratta:"Pressione lenta e profonda con il respiro, mai contro i vasi; rilascio dell'iliaco dentro la cresta; allungamento in affondo con il bacino in retroversione; non a stomaco pieno, non in gravidanza avanzata, non con aneurisma noto.",
  auto:"Pallina da tennis a lato dell'ombelico da proni, 2 minuti con il respiro; affondo ogni ora di seduta; non dormire rannicchiati.",
  simula:"Ernia discale, sacro-iliaca, appendicite, dolore inguinale, pubalgia, ernia inguinale.",
  segreto:"Il mal di schiena di chi sta seduto otto ore e si alza «piegato» sta davanti, non dietro: lo psoas accorciato tira le lombari in avanti ogni volta che la persona si raddrizza. Trattare la schiena dà un giorno di sollievo; trattare lo psoas e insegnare l'affondo lo risolve."},
 {id:"tp-gluteo-massimo",nome:"Trigger point del grande gluteo",muscolo:"m-gluteo-massimo",vista:"post",xy:[84,207],regione:"Bacino",alias:["trigger grande gluteo","trigger point gluteo"],
  dove:"Tre punti: vicino al sacro (bordo laterale), sopra la tuberosità ischiatica, e nella parte bassa e laterale vicino al coccige. Si palpano proni o sul fianco con il muscolo rilassato.",
  riferito:"Locale al gluteo, al sacro e al coccige, e alla parte alta posteriore della coscia; dolore a stare seduti (sull'ischio), a salire le scale, a dormire sul lato.",
  attiva:"Cadute a sedere, stare seduti a lungo su superfici dure, portafoglio, camminate in salita, nuoto a rana, iniezioni intramuscolari.",
  cerca:"Prono: pressione nel gluteo lungo le tre zone; il punto vicino all'ischio riproduce il dolore «da seduti», quello vicino al coccige il dolore coccigeo.",
  tratta:"Pressione profonda con il gomito morbido o il pugno, scorrimenti verso il trocantere, allungamento con il ginocchio al petto e verso la spalla opposta; rinforzo (ponte) perché un gluteo dolente è spesso spento.",
  auto:"Pallina sotto il gluteo da seduti a terra, 2 minuti; ponte ogni mattina; cuscino con il vuoto se il coccige fa male.",
  simula:"Coccigodinia, borsite ischiatica, sacro-iliaca, sciatica.",
  segreto:"La «coccigodinia» che non viene da un trauma è spesso il trigger inferiore del grande gluteo che riferisce al coccige: si tratta il gluteo e il coccige smette di far male. Vale la pena provare prima di qualunque cosa invasiva."},
 {id:"tp-gluteo-medio",nome:"Trigger point del gluteo medio",muscolo:"m-gluteo-medio",vista:"post",xy:[78,196],regione:"Bacino",alias:["trigger gluteo medio","trigger point gluteo medio lombalgia"],
  dove:"Subito sotto la cresta iliaca, dietro, sopra il grande gluteo: tre punti dalla spina postero-superiore verso il trocantere. Spesso scambiati per la sacro-iliaca.",
  riferito:"Alla cresta iliaca, al sacro, alla sacro-iliaca e al gluteo stesso, con dolore nella parte bassa della schiena (la «lombalgia» che sta nel gluteo); nel camminare, nel dormire sul fianco, nello stare seduti curvi.",
  attiva:"Camminare a lungo, correre, stare su una gamba, gamba corta, portafoglio, iniezioni, dormire sul lato senza cuscino fra le ginocchia, gluteo medio debole che lavora sempre al limite.",
  cerca:"Sul fianco sano o prono: pressione sotto la cresta iliaca da dietro in avanti; il punto riproduce la «lombalgia bassa»; Trendelenburg spesso positivo.",
  tratta:"Pressione mantenuta e scorrimenti sotto la cresta, allungamento con la gamba incrociata, ma soprattutto rinforzo (conchiglia, abduzione sul fianco) per settimane; correggere la gamba corta.",
  auto:"Pallina sotto la cresta iliaca da sdraiati sul fianco, 2 minuti; conchiglia ogni giorno; cuscino fra le ginocchia.",
  simula:"Lombalgia, sacro-iliaca, borsite trocanterica, sciatica.",
  segreto:"Metà delle «lombalgie» che il cliente indica con la mano aperta sul gluteo alto, sotto la cintura, sono il gluteo medio, e la schiena non c'entra. Si distingue in dieci secondi: la pressione sotto la cresta riproduce esattamente il dolore. Poi però non basta scioglierlo: è un muscolo debole che si lamenta, e vuole forza."},
 {id:"tp-gluteo-piccolo",nome:"Trigger point del piccolo gluteo",muscolo:"m-gluteo-piccolo",vista:"post",xy:[75,202],regione:"Bacino",alias:["trigger piccolo gluteo","trigger point piccolo gluteo sciatica"],
  dove:"Sotto il gluteo medio, davanti al trocantere e sotto la spina iliaca antero-superiore (fibre anteriori), e dietro il trocantere (posteriori); profondo, si raggiunge sul fianco con l'anca leggermente flessa.",
  riferito:"La «falsa sciatica»: dalla natica lungo la faccia laterale (anteriori) o posteriore (posteriori) della coscia e della gamba fino alla caviglia, senza coinvolgere il piede; dolore costante, anche a riposo e di notte, che impedisce di dormire sul lato e di stare seduti a lungo.",
  attiva:"Camminare molto, stare su una gamba, sedersi su un portafoglio, gamba corta, cadute, iniezioni, lunghe corse.",
  cerca:"Sul fianco, anca leggermente flessa: pressione profonda davanti e dietro il trocantere; il dolore scende lungo la gamba esattamente come il cliente lo descrive; Lasègue negativo, riflessi normali.",
  tratta:"Pressione profonda e paziente (è sotto due muscoli), con piccoli movimenti passivi dell'anca; allungamento in adduzione; rinforzo con il gluteo medio; trattare anche quadrato dei lombi e piriforme.",
  auto:"Pallina sul fianco davanti al trocantere, da sdraiati, con la gamba che si muove avanti e indietro, 2 minuti; conchiglia.",
  simula:"Sciatica da ernia (ma senza deficit, senza Lasègue), borsite trocanterica, sindrome del piriforme, meralgia.",
  segreto:"È la causa più frequente di «sciatica» senza ernia e senza segni neurologici: un dolore che scende fino alla caviglia e che la risonanza non spiega. La differenza con la sciatica vera: non va nel piede, non ha formicolio, il Lasègue è negativo, e la pressione sotto il trocantere lo riproduce per intero."},
 {id:"tp-piriforme",nome:"Trigger point del piriforme",muscolo:"m-piriforme",vista:"post",xy:[85,205],regione:"Bacino",alias:["trigger piriforme","trigger point piriforme"],
  dove:"Lungo la linea dal bordo del sacro al trocantere, a metà e vicino al sacro, sotto il grande gluteo: si palpa prono o sul fianco con l'anca flessa a 90° e il muscolo in leggero allungamento.",
  riferito:"Alla sacro-iliaca, al gluteo e all'anca posteriore, con dolore che scende dietro la coscia; se comprime lo sciatico, formicolio della gamba e del piede. Dolore da seduti, nel salire in auto, nei rapporti.",
  attiva:"Stare seduti a lungo con le gambe incrociate, guidare, cadute, torsioni, gamba corta, correre su strade inclinate, piede pronato (la tibia ruota e il piriforme lavora).",
  cerca:"Prono con il ginocchio piegato: rotazione interna passiva che tende il muscolo, poi pressione lungo la linea sacro-trocantere; test FAIR (flessione, adduzione, rotazione interna) che riproduce il dolore.",
  tratta:"Pressione profonda e mantenuta con il gomito morbido, in allungamento, 1–2 minuti per punto; allungamento con la caviglia sul ginocchio opposto; trattare gluteo medio e piccolo e quadrato dei lombi insieme; correggere il piede.",
  auto:"Pallina a metà fra sacro e trocantere da seduti a terra, con il piede che ruota; allungamento del piriforme 2 volte al giorno; portafoglio fuori dalla tasca.",
  simula:"Sciatica, sacro-iliaca, borsite ischiatica, dolore pelvico.",
  segreto:"La «sindrome del piriforme» è diagnosticata dieci volte più di quanto esista: la maggior parte delle sciatiche glutee senza ernia sono il piccolo gluteo o il gluteo medio. Si tratta il piriforme quando il FAIR è positivo e il dolore sta sulla linea sacro-trocantere; altrimenti si guarda un dito più in alto."},
 {id:"tp-tfl",nome:"Trigger point del tensore della fascia lata",muscolo:"m-tfl",vista:"ant",xy:[76,215],regione:"Bacino",alias:["trigger tensore della fascia lata","trigger point TFL"],
  dove:"Subito sotto e dietro la spina iliaca antero-superiore, nel ventre carnoso prima che diventi bandelletta: cliente supino o sul fianco, con l'anca leggermente abdotta.",
  riferito:"Al grande trocantere e lungo la faccia laterale della coscia verso il ginocchio; dolore a dormire sul lato, a stare seduti con l'anca flessa, a camminare velocemente.",
  attiva:"Camminare e correre con il gluteo medio debole (il TFL fa il suo lavoro), stare seduti con le ginocchia alte, piedi pronati, gamba corta, salite.",
  cerca:"Supino: pressione sotto la spina iliaca antero-superiore verso l'esterno mentre il cliente abduce leggermente; il dolore al trocantere si riproduce; Ober positivo.",
  tratta:"Pressione e scorrimenti sul ventre (non sulla bandelletta a metà coscia), allungamento in estensione-adduzione, rinforzo del gluteo medio per scaricarlo.",
  auto:"Rullo sulla coscia alta laterale sotto la spina iliaca, 2 minuti; allungamento con la gamba incrociata dietro; conchiglia.",
  simula:"Borsite trocanterica, sindrome della bandelletta, artrosi dell'anca, meralgia.",
  segreto:"Il «dolore alla bandelletta» dei corridori non sta nella bandelletta (che è un tendine e non si «scioglie» con il rullo) ma nel TFL che la tende: due dita sotto la spina iliaca. E il TFL è teso perché il gluteo medio dorme: senza rinforzo torna dopo ogni corsa."},
 {id:"tp-quadricipite",nome:"Trigger point del quadricipite (retto femorale e vasti)",muscolo:"m-quadricipite",vista:"ant",xy:[83,240],regione:"Coscia",alias:["trigger quadricipite","trigger retto femorale","trigger vasto mediale","trigger vasto laterale","trigger point ginocchio"],
  dove:"Retto femorale: in alto, sotto la spina iliaca antero-inferiore. Vasto mediale: sopra e dentro la rotula (due punti). Vasto laterale: lungo tutta la faccia esterna della coscia (molti punti, i più dolenti vicino al ginocchio e a metà). Vasto intermedio: sotto il retto, a metà coscia.",
  riferito:"Retto femorale: davanti al ginocchio e nella rotula (dolore nel scendere le scale e di notte). Vasto mediale: al ginocchio interno, con il ginocchio che «cede». Vasto laterale: lungo la coscia esterna fino al ginocchio esterno, con rotula bloccata e dolore a dormire sul lato. Vasto intermedio: a metà coscia, difficoltà a estendere il ginocchio.",
  attiva:"Corsa in discesa, accovacciate, squat profondi, cadute sul ginocchio, immobilizzazione, iniezioni, stare seduti con le gambe accavallate, gamba corta.",
  cerca:"Supino: pinza del retto femorale in alto, pressione sul vasto mediale sopra la rotula e lungo il vasto laterale con la gamba rilassata; i punti riproducono il dolore al ginocchio.",
  tratta:"Scorrimenti e pressioni lungo i quattro capi, pinzatura del retto femorale, rullo sul vasto laterale, allungamento in flessione del ginocchio con il bacino in retroversione; isometrici del vasto mediale.",
  auto:"Rullo sulla faccia anteriore e laterale della coscia, 2 minuti ciascuna; allungamento del quadricipite in piedi; pallina sopra la rotula interna.",
  simula:"Condropatia rotulea, artrosi del ginocchio, tendinite rotulea, lesione meniscale (vasto mediale: ginocchio che cede).",
  segreto:"Il ginocchio che fa male davanti e «cede» senza che il menisco sia rotto è il vasto mediale con i suoi trigger: inibiscono il muscolo e la rotula scivola. Il dolore «nel ginocchio» che non ha un punto nel ginocchio ha un punto nella coscia: si preme la coscia e il ginocchio risponde."},
 {id:"tp-ischiocrurali",nome:"Trigger point degli ischiocrurali",muscolo:"m-ischiocrurali",vista:"post",xy:[82,250],regione:"Coscia",alias:["trigger ischiocrurali","trigger bicipite femorale","trigger semitendinoso","trigger point ischiocrurali"],
  dove:"Bicipite femorale: nella metà inferiore della coscia laterale posteriore. Semitendinoso e semimembranoso: nella metà inferiore mediale, vicino all'ischio e sopra il ginocchio. Si palpano proni o seduti sul bordo del lettino (la sedia comprime proprio i punti).",
  riferito:"Bicipite: dietro il ginocchio e alla faccia posteriore della coscia e della gamba. Semitendinoso e semimembranoso: alla piega glutea e dietro la coscia fino al polpaccio interno. Dolore a stare seduti (la sedia preme), a camminare, a salire le scale; «gamba che tira».",
  attiva:"Sedie alte che premono dietro la coscia, stare seduti a lungo, corsa e scatto, gamba corta, flessione in avanti ripetuta, ischiocrurali tenuti corti da un bacino in retroversione.",
  cerca:"Prono con il ginocchio leggermente piegato: pinza del bicipite e dei mediali nella metà inferiore; seduto, pressione dal basso dietro la coscia; il dolore dietro il ginocchio si riproduce.",
  tratta:"Pinzatura e scorrimenti lungo i ventri, pressione sui punti con il ginocchio che si estende passivamente, allungamento dolce (senza tirare il nervo: se formicola, fermarsi), lavoro sull'ischio.",
  auto:"Rullo o pallina sotto la coscia da seduti, 2 minuti; allungamento con la cinghia da supini; sedia con il bordo più basso o un cuscino sotto il ginocchio.",
  simula:"Sciatica, cisti di Baker, tendinopatia prossimale, dolore della zampa d'oca.",
  segreto:"Il dolore dietro il ginocchio in chi sta seduto su sedie alte (bar, scrivanie da bancone) è il bicipite femorale schiacciato dal bordo della sedia per ore: il cliente non si «stira abbastanza», si siede male. Un poggiapiedi vale più dello stretching."},
 {id:"tp-adduttori",nome:"Trigger point degli adduttori e del pettineo",muscolo:"m-adduttori",vista:"ant",xy:[92,235],regione:"Coscia",alias:["trigger adduttori","trigger adduttore lungo","trigger grande adduttore","trigger pettineo","trigger point inguine"],
  dove:"Adduttore lungo e breve: nel terzo superiore della coscia interna, vicino all'inguine. Grande adduttore: più profondo e posteriore, a metà coscia interna. Pettineo: nella piega dell'inguine, a lato dei vasi femorali.",
  riferito:"Adduttore lungo: all'inguine e alla faccia interna della coscia fino al ginocchio interno, con rigidità dell'anca (non si apre la gamba). Grande adduttore: profondo nella pelvi (vagina, retto, pube) e alla coscia interna. Pettineo: dolore profondo all'inguine subito sotto il legamento.",
  attiva:"Calcio e cambi di direzione, scivolate, cavalcare, sedere con le gambe accavallate, artrosi dell'anca, cadute a gambe divaricate, gravidanza.",
  cerca:"Supino con la gamba a «4» rilassata: pinza dell'adduttore lungo vicino all'inguine, pressione sul grande adduttore a metà coscia e sul pettineo nella piega; il dolore all'inguine o pelvico si riproduce.",
  tratta:"Pinzatura e scorrimenti dall'inguine al ginocchio, pressione mantenuta sul grande adduttore, allungamento a farfalla e in affondo laterale; rinforzo isometrico (squeeze) nella pubalgia; con cautela vicino ai vasi.",
  auto:"Rullo sull'interno coscia da proni con la gamba aperta, 2 minuti; farfalla; squeeze del pallone.",
  simula:"Pubalgia, ernia inguinale, artrosi dell'anca, dolore pelvico cronico, nevralgia dell'otturatorio.",
  segreto:"Il grande adduttore riferisce dolore dentro la pelvi: dolori pelvici, «vaginali» o rettali senza causa ginecologica o proctologica hanno spesso un trigger a metà della coscia interna, e il cliente non lo collega mai. Chiederlo e cercarlo con delicatezza apre casi che girano da anni."},
 {id:"tp-popliteo",nome:"Trigger point del popliteo",muscolo:"m-popliteo",vista:"post",xy:[82,312],regione:"Ginocchio",alias:["trigger popliteo","trigger point popliteo"],
  dove:"Nel cavo popliteo, sotto l'interlinea, verso l'interno, in profondità sotto il gastrocnemio: si preme con il ginocchio piegato a 90° e il muscolo rilassato (prono o seduto).",
  riferito:"Dietro il ginocchio, nell'articolazione, con dolore nel scendere le scale, nell'estendere del tutto il ginocchio e nel camminare in discesa; il ginocchio «non si sblocca» a fine estensione.",
  attiva:"Corsa in discesa, sci, torsioni del ginocchio, lesione del crociato posteriore, piede pronato (la tibia ruota).",
  cerca:"Prono con il ginocchio a 90°: pollice nel cavo popliteo, sotto l'interlinea mediale, mentre il cliente ruota la tibia internamente contro resistenza; il dolore dietro il ginocchio si riproduce.",
  tratta:"Pressione mantenuta e scorrimenti trasversali con il ginocchio piegato, poi estensioni passive lente; rotazione esterna della tibia in allungamento; correggere la pronazione.",
  auto:"Pollice nel cavo popliteo da seduti con il ginocchio piegato, 1 minuto; rotazioni della tibia; scarpe con sostegno.",
  simula:"Cisti di Baker, lesione meniscale posteriore, tendinite del bicipite femorale, trombosi (escludere).",
  segreto:"Il ginocchio che fa male dietro scendendo le scale e non si estende del tutto, con risonanza pulita, è il popliteo: un muscolo piccolo e introvabile che blocca lo screw-home. Un minuto di pressione nel cavo popliteo e il ginocchio «si sblocca» sotto le mani."},
 {id:"tp-gastrocnemio",nome:"Trigger point del gastrocnemio",muscolo:"m-gastrocnemio",vista:"post",xy:[78,332],regione:"Gamba",alias:["trigger gastrocnemio","trigger polpaccio","trigger point crampi polpaccio"],
  dove:"Nei due capi, mediale e laterale, nel terzo superiore e medio del polpaccio: il punto mediale alto è quello dei crampi notturni.",
  riferito:"Al polpaccio stesso e alla pianta del piede (arco) con crampi notturni, dietro il ginocchio, alla caviglia; dolore nel camminare in salita e nel salire le scale.",
  attiva:"Tacchi, sedie alte che premono dietro il polpaccio, stare in piedi su superfici dure, pedalare con il sellino basso, corsa in salita, freddo, immobilizzazione, carenza di idratazione e di sali.",
  cerca:"Prono con il piede fuori dal lettino: pinza dei due capi nel terzo superiore; il punto mediale riproduce il crampo o il dolore all'arco; Thompson negativo.",
  tratta:"Pinzatura e scorrimenti lungo i capi, pressione mantenuta con la caviglia in dorsiflessione passiva, allungamento a ginocchio teso; calore; attenzione al polpaccio gonfio da un lato (trombosi).",
  auto:"Rullo sul polpaccio con l'altra gamba sopra, 2 minuti; allungamento al muro ogni sera; tacchi bassi; idratazione.",
  simula:"Trombosi venosa (sempre da escludere), claudicatio, fascite plantare, crampi da farmaci (statine).",
  segreto:"Il crampo notturno al polpaccio che sveglia la persona è un trigger del gastrocnemio mediale che scatta quando il piede va in flessione plantare sotto il lenzuolo: si previene con l'allungamento serale e con il piede che non resta a punta (cuscino sotto il lenzuolo). Il magnesio aiuta solo chi ne è carente."},
 {id:"tp-soleo",nome:"Trigger point del soleo",muscolo:"m-soleo",vista:"post",xy:[79,365],regione:"Gamba",alias:["trigger soleo","trigger point soleo tallone"],
  dove:"Nel terzo inferiore del polpaccio, ai lati del tendine d'Achille, e più in alto sotto il gastrocnemio (si palpa con il ginocchio piegato, che rilassa il gastrocnemio).",
  riferito:"Al tallone e al tendine d'Achille (il «tallone che fa male» con fascite negativa), al polpaccio, e un punto raro alla sacro-iliaca; dolore nel salire le scale, nel correre, nel mettersi sulle punte.",
  attiva:"Corsa (il soleo regge 6–8 volte il peso), salite, tacchi, stare in piedi, pedalare, scarpe rigide, immobilizzazione, freddo.",
  cerca:"Prono con il ginocchio piegato a 90°: pressione ai lati del tendine nel terzo inferiore e sotto il gastrocnemio; il dolore al tallone si riproduce; ginocchio al muro ridotto.",
  tratta:"Pressione e scorrimenti con il ginocchio piegato, allungamento con il ginocchio flesso (il soleo si allunga solo così), calore; sollevamenti sulle punte da seduti dopo.",
  auto:"Pollici nel polpaccio basso con il ginocchio piegato, 2 minuti; allungamento del soleo al muro con il ginocchio piegato ogni giorno.",
  simula:"Fascite plantare, tendinopatia dell'Achille, borsite retrocalcaneare, trombosi.",
  segreto:"Il tallone che fa male «come una fascite» ma non al primo passo del mattino, bensì dopo la corsa e sulle punte, è il soleo che riferisce al calcagno. Si allunga solo a ginocchio piegato: chi allunga il polpaccio a gamba tesa non lo tocca mai, e per questo il tallone non guarisce."},
 {id:"tp-tibiale-ant",nome:"Trigger point del tibiale anteriore e degli estensori delle dita",muscolo:"m-tibiale-ant",vista:"ant",xy:[80,340],regione:"Gamba",alias:["trigger tibiale anteriore","trigger estensori del piede","trigger point tibiale anteriore alluce"],
  dove:"Tibiale anteriore: nel terzo superiore della gamba, a lato della cresta tibiale. Estensore lungo delle dita e dell'alluce: più laterali e più in basso, nel terzo medio.",
  riferito:"Tibiale anteriore: all'alluce e alla faccia anteriore-interna della caviglia (dolore «all'alluce» con l'alluce sano). Estensori delle dita: al dorso del piede e alle dita, con crampi del dorso del piede e dita a griffe.",
  attiva:"Camminare su terreni irregolari, corsa, scarpe pesanti, guidare a lungo (piede sull'acceleratore), stare accovacciati, dormire con il piede a punta, dopo una distorsione.",
  cerca:"Supino: pressione lungo il tibiale anteriore a lato della tibia e sugli estensori più in fuori mentre il cliente solleva la punta del piede; il dolore all'alluce o al dorso si riproduce.",
  tratta:"Scorrimenti e pressioni lungo il compartimento anteriore, allungamento con il piede in flessione plantare (in ginocchio sui talloni), lavoro sui peronei insieme; rinforzo (camminata sui talloni).",
  auto:"Pollice lungo il bordo esterno della tibia con il piede che si muove, 2 minuti; in ginocchio sui talloni 30 secondi.",
  simula:"Sindrome compartimentale anteriore (dolore con sforzo e gamba dura: urgenza), periostite tibiale, artrosi dell'alluce, neuroma.",
  segreto:"Il dolore all'alluce senza alluce valgo né rigidità, che compare camminando e sparisce a riposo, è il tibiale anteriore che riferisce in basso. E il dolore «alla caviglia davanti» mesi dopo una distorsione è spesso lui, rimasto contratto da quando ha cercato di proteggere l'articolazione."},
 {id:"tp-tibiale-post",nome:"Trigger point del tibiale posteriore e dei flessori delle dita",muscolo:"m-tibiale-post",vista:"post",xy:[83,352],regione:"Gamba",alias:["trigger tibiale posteriore","trigger flessore lungo dita","trigger flessore lungo alluce","trigger point tibiale posteriore"],
  dove:"In profondità nel polpaccio, sotto soleo e gastrocnemio: si raggiungono dal lato mediale della tibia (dietro il bordo) con il ginocchio piegato, o dal lato laterale fra soleo e peronei. Flessore lungo dell'alluce: nel terzo inferiore laterale, dietro il perone.",
  riferito:"Tibiale posteriore: al tendine d'Achille sopra il calcagno e alla pianta del piede, con dolore nel camminare su terreni irregolari. Flessore lungo delle dita: alla pianta e alle dita. Flessore lungo dell'alluce: sotto l'alluce e al primo metatarso.",
  attiva:"Piede piatto o pronato, corsa su superfici irregolari o inclinate, scarpe consumate, salite, stare sulle punte (ballerini), sovrappeso.",
  cerca:"Prono con il ginocchio a 90°: pressione profonda dietro il bordo mediale della tibia nel terzo medio e dal lato laterale fra soleo e peronei; il dolore all'Achille o alla pianta si riproduce.",
  tratta:"Pressione profonda e lenta con il ginocchio piegato, scorrimenti lungo il bordo mediale della tibia, allungamento con il piede in eversione e dorsiflessione; rinforzo del tibiale posteriore e sostegno dell'arco.",
  auto:"Pollici dietro il bordo interno della tibia con il ginocchio piegato, 2 minuti; pallina sotto l'arco; scarpe con sostegno nelle fasi dolorose.",
  simula:"Tendinopatia dell'Achille, fascite plantare, tunnel tarsale, periostite mediale («shin splints»), sindrome compartimentale profonda.",
  segreto:"Il dolore «all'Achille» che sta sopra il tendine, nel polpaccio basso, e che aumenta su terreni irregolari, è il tibiale posteriore: il tendine è sano, il muscolo che lo tira no. E la «fascite» che non risponde alle frizioni sulla pianta risponde al polpaccio profondo, perché i flessori delle dita riferiscono proprio lì."},
 {id:"tp-peronei",nome:"Trigger point dei peronei",muscolo:"m-peronei",vista:"post",xy:[73,345],regione:"Gamba",alias:["trigger peronei","trigger peroneo lungo","trigger point peronei caviglia"],
  dove:"Peroneo lungo: 2–4 cm sotto la testa del perone, sulla faccia laterale della gamba (vicino al nervo peroneo comune: pressione moderata). Peroneo breve: nel terzo inferiore laterale, davanti al tendine del lungo. Peroneo terzo: davanti al malleolo laterale.",
  riferito:"Sul malleolo laterale e intorno (la «caviglia che fa ancora male» dopo la distorsione), lungo la faccia laterale della gamba, al tallone laterale; debolezza della caviglia e tendenza a girarla.",
  attiva:"Distorsioni in inversione (la causa più frequente), gamba ingessata, piede piatto o cavo, scarpe strette, dormire con il piede a punta, gambe accavallate (compressione del nervo), stare in piedi su una gamba.",
  cerca:"Sul fianco o supino: pressione sulla faccia laterale della gamba sotto la testa del perone e nel terzo inferiore mentre il cliente everte il piede; il dolore al malleolo si riproduce. Attenzione a non comprimere il nervo (formicolio del dorso del piede = spostarsi).",
  tratta:"Scorrimenti e pressioni lungo il compartimento laterale, pressione mantenuta sui punti con il piede in inversione passiva, allungamento in inversione; propriocezione e rinforzo in eversione dopo.",
  auto:"Pollice lungo la faccia esterna della gamba dalla testa del perone in giù, 2 minuti; eversione contro elastico; equilibrio su una gamba.",
  simula:"Distorsione cronica, instabilità della caviglia, tendinopatia dei peronei, neuropatia del peroneo.",
  segreto:"La caviglia che «fa ancora male» mesi dopo una distorsione guarita, con i legamenti sani all'ecografia, ha quasi sempre trigger nei peronei: il muscolo che ha cercato di salvare la caviglia è rimasto in guardia. Tre sedute sui peronei e sei settimane di equilibrio cambiano la storia di una caviglia «debole»."},
 {id:"tp-piede",nome:"Trigger point dei muscoli del piede (quadrato della pianta, abduttore dell'alluce, flessore breve, interossei)",muscolo:"m-intrinseci-piede",vista:"post",xy:[74,420],regione:"Piede",alias:["trigger quadrato della pianta","trigger abduttore dell'alluce","trigger flessore breve delle dita","trigger interossei del piede","trigger point piede"],
  dove:"Quadrato della pianta: davanti al tallone, in profondità al centro. Abduttore dell'alluce: lungo il bordo mediale. Flessore breve delle dita: al centro della pianta. Abduttore del quinto: bordo laterale. Interossei: fra i metatarsi, dal dorso. Adduttore dell'alluce: sotto le teste metatarsali.",
  riferito:"Quadrato della pianta: al tallone (la seconda «fascite»). Abduttore dell'alluce: al bordo mediale del tallone e dell'arco. Flessore breve: alle teste metatarsali (metatarsalgia). Interossei: alle dita, con dita a martello e formicolio. Adduttore dell'alluce: sotto l'avampiede, come un «sasso».",
  attiva:"Scarpe strette o rigide, camminare su superfici dure, correre, stare in piedi, piede piatto, dita a martello, immobilizzazione, freddo.",
  cerca:"Supino o prono con la pianta accessibile: pressione con il pollice sul tallone anteriore (quadrato), lungo il bordo mediale, al centro e fra i metatarsi dal dorso; i punti riproducono il dolore al tallone o alle dita.",
  tratta:"Pressione con i pollici e con le nocche sulla pianta, zona per zona, scorrimenti dal tallone alle dita, mobilizzazione dei metatarsi, allungamento delle dita in estensione; calore; poi short foot e scarpe adatte.",
  auto:"Pallina sotto la pianta 3 minuti al mattino prima di alzarsi, dal tallone alle dita; separatori di dita; scarpe larghe in punta; camminare scalzi su superfici morbide.",
  simula:"Fascite plantare, metatarsalgia, neuroma di Morton, tunnel tarsale, artrosi delle dita.",
  segreto:"Un terzo delle «fasciti» che non guariscono sono il quadrato della pianta e l'abduttore dell'alluce con i loro trigger: la fascia è sana, i muscoli sotto di lei no. Si vede perché il dolore risponde alla pressione sul muscolo (più in alto e più profondo del tubercolo) e cambia in una seduta, mentre la fascia vera ci mette mesi."},
 {id:"tp-pavimento-pelvico",nome:"Trigger point del pavimento pelvico",muscolo:"m-pavimento-pelvico",vista:"ant",xy:[100,206],centro:true,regione:"Bacino",alias:["trigger pavimento pelvico","trigger elevatore dell'ano","trigger point pelvico"],
  dove:"Nell'elevatore dell'ano, nel coccigeo, nell'otturatore interno e nei muscoli perineali superficiali: esternamente si palpa solo il perineo e la zona attorno al coccige; il trattamento interno richiede formazione specifica e consenso scritto.",
  riferito:"Al coccige, al sacro, al retto, alla vagina, al pene e ai testicoli, al perineo, alla vescica (urgenza), alla parte bassa della schiena; dolore da seduti, nei rapporti, nella defecazione e nella minzione.",
  attiva:"Stress e «tenere tutto», stipsi, parto, interventi pelvici, cadute sul coccige, ciclismo, ginnastica del pavimento fatta solo in contrazione, posture sedute scorrette, dolore pelvico cronico.",
  cerca:"Anamnesi prima di tutto: dolore da seduti, urgenza, dolore nei rapporti, stipsi. Esternamente: dolenzia del perineo e dei muscoli attorno al coccige (prono o sul fianco), otturatore interno dall'ischio. Valutazione interna solo da chi è formato.",
  tratta:"Lavoro esterno su otturatore interno, glutei, adduttori e coccige; respiro diaframmatico con rilascio del perineo; posizioni di apertura; invio a un fisioterapista del pavimento pelvico per il trattamento interno, che è il più efficace.",
  auto:"Respiro con la pancia e il perineo che si rilascia nell'inspirazione, 5 minuti; posizione del bambino con le ginocchia larghe; squat profondo; calore; niente «Kegel» finché il muscolo non sa rilasciarsi.",
  simula:"Prostatite cronica, cistite interstiziale, vulvodinia, coccigodinia, emorroidi, endometriosi.",
  segreto:"La «prostatite cronica» con esami negativi, la cistite senza batteri, il dolore vulvare senza lesioni: in gran parte sono trigger del pavimento pelvico, un muscolo che nessuno pensa di poter trattare. Il massaggiatore non lo tratta internamente, ma è spesso il primo a dirlo al cliente e a indirizzarlo bene."}
]);

/* ---- Tender point della fibromialgia (ACR 1990): 9 coppie ---- */
DB.tender = [
 {id:"tp-tender-occipite",nome:"Tender point: occipite",vista:"post",xy:[92,52],dove:"All'inserzione dei muscoli suboccipitali, sotto la linea nucale, bilateralmente.",nota:"Coincide con i trigger dei suboccipitali: nel fibromialgico il dolore è alla pressione leggera (4 kg: l'unghia del pollice che sbianca), senza riferimento a distanza."},
 {id:"tp-tender-cervicale",nome:"Tender point: cervicale bassa",vista:"ant",xy:[94,76],dove:"Sulla faccia anteriore degli spazi intertrasversari C5–C7, davanti al collo basso, bilateralmente.",nota:"Si palpa con delicatezza a lato della trachea; nel sano non fa male."},
 {id:"tp-tender-trapezio",nome:"Tender point: trapezio",vista:"post",xy:[84,76],dove:"A metà del bordo superiore del trapezio, bilateralmente.",nota:"Lo stesso punto del trigger del trapezio superiore: la differenza è che nel tender non c'è il cordone teso né il dolore riferito alla tempia."},
 {id:"tp-tender-sovraspinato",nome:"Tender point: sovraspinato",vista:"post",xy:[86,80],dove:"All'origine del sovraspinato, sopra la spina della scapola vicino al bordo mediale, bilateralmente.",nota:"Dolente anche nei sani con spalle sovraccariche: conta la soglia bassa e la simmetria."},
 {id:"tp-tender-seconda-costa",nome:"Tender point: seconda costa",vista:"ant",xy:[88,88],dove:"Alla seconda giunzione condro-costale, appena a lato dello sterno, sulla superficie superiore, bilateralmente.",nota:"Da distinguere dalla costocondrite (dolore anche spontaneo, a volte gonfiore) e dai trigger del pettorale."},
 {id:"tp-tender-epicondilo",nome:"Tender point: epicondilo laterale",vista:"ant",xy:[58,148],dove:"2 cm sotto l'epicondilo laterale, sugli estensori, bilateralmente.",nota:"Lo stesso punto dell'epicondilite e del trigger dell'estensore radiale breve: bilaterale e senza storia di sovraccarico nel fibromialgico."},
 {id:"tp-tender-gluteo",nome:"Tender point: gluteo",vista:"post",xy:[76,200],dove:"Nel quadrante supero-esterno del gluteo, nella piega anteriore del muscolo (gluteo medio e piccolo), bilateralmente.",nota:"Coincide con i trigger del gluteo medio e piccolo, ma senza il dolore riferito lungo la gamba."},
 {id:"tp-tender-trocantere",nome:"Tender point: grande trocantere",vista:"post",xy:[72,212],dove:"Dietro la prominenza del trocantere, dove si inseriscono i rotatori, bilateralmente.",nota:"Da distinguere dalla sindrome dolorosa del trocantere (gluteo medio), che è di solito monolaterale."},
 {id:"tp-tender-ginocchio",nome:"Tender point: ginocchio",vista:"ant",xy:[90,298],dove:"Sul cuscinetto adiposo mediale, appena sopra l'interlinea articolare interna del ginocchio, bilateralmente.",nota:"Da distinguere dalla borsite della zampa d'oca (più in basso, sotto l'interlinea) e dal trigger del vasto mediale."}
];
DB.tender.forEach(t=>{ t.tipo="tender"; t.alias=t.alias||[t.nome.toLowerCase()]; t.regione="Tender point (fibromialgia)";
  t.cosa="Un tender point è un punto che fa male alla pressione leggera (circa 4 kg, quanto basta a far sbiancare l'unghia del pollice) senza cordone teso, senza scatto locale e senza dolore riferito a distanza: la soglia del dolore è abbassata in tutto il corpo, non c'è un nodo nel muscolo. I 18 punti (9 coppie) dei criteri ACR 1990 per la fibromialgia servivano alla diagnosi: 11 su 18 dolenti con dolore diffuso da oltre 3 mesi. Oggi i criteri (2010/2016) usano un indice di dolore diffuso e la gravità dei sintomi (stanchezza, sonno non ristoratore, nebbia mentale), ma i punti restano utili per capire che cosa si ha sotto le mani.";
  t.differenza="Trigger point: nodo palpabile in un cordone teso, scatto locale alla pinzatura, dolore riferito con una mappa precisa, di solito in pochi muscoli, risponde al trattamento locale. Tender point: dolore alla pressione in punti simmetrici, nessun nodo, nessun riferimento, in tutto il corpo, con sonno, stanchezza e sensibilizzazione centrale; il trattamento locale non lo risolve e il trattamento profondo lo peggiora.";
  t.tratta="Nel cliente con molti tender point: pressione leggera e scelta da lui, sedute brevi e regolari, calore, movimento dolce e progressivo, respiro, sonno; niente «caccia ai nodi»; collaborazione con medico (reumatologo) e, quando serve, psicologo. I trigger point veri possono coesistere e vanno trattati con delicatezza.";
  t.segreto="Nel fibromialgico il massaggio «che fa bene perché fa male» è un errore che si paga per due giorni: il sistema nervoso è già troppo acceso. La misura giusta è la pressione che il cliente definisce piacevole; e se un punto fa male alla pressione leggera anche in zone «di controllo» (fronte, unghia del pollice, avambraccio), non si cerca un muscolo colpevole: si cambia strategia.";
});

/* ---- registrazione del tipo ---- */
KINDS.trigger={label:"Trigger point",cls:"m",db:()=>DB.trigger.concat(DB.tender)};
const _anyById_conTrigger = anyById;
anyById = function(id){ if(id && id.indexOf("tp-")===0){ const it=DB.trigger.find(x=>x.id===id)||DB.tender.find(x=>x.id===id); return it?{kind:"trigger",item:it}:null; } return _anyById_conTrigger(id); };
PORTE.push({k:"trigger",n:"Dai trigger point",d:"La mappa dei punti che riferiscono dolore lontano: dove sono, dove fanno male, come si cercano e si trattano. E i tender point della fibromialgia.",c:"var(--muscle)",i:"porta-mus"});
PRINCIPALI.push("trigger");
const _blocchi_conTrigger = blocchi;
blocchi = function(kind,it){
  if(kind!=="trigger") return _blocchi_conTrigger(kind,it);
  if(it.tipo==="tender") return [
    {t:"p",h:"Dove si trova",txt:it.dove},
    {t:"p",h:"Che cos'è un tender point",txt:it.cosa},
    {t:"p",h:"Trigger point o tender point?",txt:it.differenza},
    {t:"p",h:"Nota su questo punto",txt:it.nota},
    {t:"p",h:"Come si lavora",txt:it.tratta},
    {t:"segreto",txt:it.segreto}
  ];
  return [
    {t:"p",h:"Dove si trova",txt:it.dove},
    {t:"p",h:"Dove riferisce il dolore",txt:it.riferito},
    {t:"p",h:"Che cosa lo attiva",txt:it.attiva},
    {t:"p",h:"Come si cerca",txt:it.cerca},
    {t:"p",h:"Come si tratta",txt:it.tratta},
    {t:"p",h:"Da fare a casa",txt:it.auto},
    {t:"p",h:"Che cosa imita",txt:it.simula},
    {t:"segreto",txt:it.segreto}
  ];
};
const _collegamenti_conTrigger = collegamenti;
collegamenti = function(kind,it){
  const box=(titolo,html)=>'<section><div class="seg" style="margin-bottom:8px">'+titolo+'</div>'+html+'</section>';
  if(kind==="trigger"){
    let h="";
    if(it.muscolo) h+=box("Muscolo",pills([it.muscolo]));
    const P=DB.problemi.filter(p=>it.muscolo && JSON.stringify(p.cause||[]).indexOf('"'+it.muscolo+'"')>=0).map(p=>p.id);
    if(P.length) h+=box("Problemi in cui compare",pills(P));
    const vicini=(it.tipo==="tender"?DB.trigger:DB.tender).filter(x=>x.vista===it.vista && Math.hypot(x.xy[0]-it.xy[0],x.xy[1]-it.xy[1])<14).map(x=>x.id);
    if(vicini.length) h+=box(it.tipo==="tender"?"Trigger point nella stessa zona":"Tender point nella stessa zona",pills(vicini));
    h+=box("Concetti",pills(["z-trigger-point","z-dolore","z-sensibilizzazione-centrale"].filter(x=>anyById(x))));
    h+=box("Mappa",'<button class="btn sm" data-go="lista/trigger">Apri la mappa dei trigger point</button>');
    return h;
  }
  let h=_collegamenti_conTrigger(kind,it);
  if(kind==="muscolo"){ const T=DB.trigger.filter(t=>t.muscolo===it.id).map(t=>t.id); if(T.length) h=box("Trigger point",pills(T))+h; }
  return h;
};

/* ---- la mappa: figure anteriore e posteriore con i punti ---- */
function mappaTriggerSVG(vista,filtro,sel){
  const dot=(p,cls)=>{ const inner='<circle class="tpdot '+cls+(p.id===sel?" on":"")+'" cx="'+p.xy[0]+'" cy="'+p.xy[1]+'" r="4" data-go="trigger/'+p.id+'"><title>'+esc(p.nome)+'</title></circle>';
    return p.centro?inner:mirrored(inner); };
  let g="";
  if(filtro!=="tender") g+=DB.trigger.filter(t=>t.vista===vista).map(t=>dot(t,"")).join("");
  if(filtro!=="trigger") g+=DB.tender.filter(t=>t.vista===vista).map(t=>dot(t,"tender")).join("");
  return '<svg viewBox="0 0 200 448" class="figsvg" role="img" aria-label="Mappa dei trigger point, vista '+(vista==="ant"?"anteriore":"posteriore")+'">'+figuraBase()+g+'</svg>';
}
let TP_FILTRO=load("tp.filtro","tutti");
const _vistaLista_conTrigger = vistaLista;
vistaLista = function(k){
  if(k!=="trigger") return _vistaLista_conTrigger(k);
  const chip=(v,n)=>'<button class="chip'+(TP_FILTRO===v?" on":"")+'" data-act="tp-filtro" data-id="'+v+'">'+n+'</button>';
  const gruppi={}; DB.trigger.forEach(t=>{ (gruppi[t.regione]=gruppi[t.regione]||[]).push(t); });
  const card=t=>'<button class="card" data-go="trigger/'+t.id+'" style="gap:3px"><span class="eyebrow">'+esc(nomeOf(t.muscolo))+'</span><h3 style="font-size:15px">'+esc(t.nome.replace("Trigger point del ","").replace("Trigger point dello ","").replace("Trigger point dei ","").replace("Trigger point degli ","").replace("Trigger point della ","").replace("Trigger point dell'",""))+'</h3><p style="font-size:12.8px">'+esc(t.riferito.split(/[.;]/)[0])+'.</p></button>';
  return crumbs([["Home","home/"],["Trigger point",null]])+
   '<h1 style="font-size:clamp(23px,5vw,32px);margin-bottom:6px">Mappa dei trigger point</h1>'+
   '<p style="margin:0 0 14px;color:var(--muted);max-width:66ch">Tocca un punto per aprire la scheda: dove si trova, dove riferisce il dolore, che cosa lo attiva, come si cerca e si tratta. In rosso i trigger point (nodo nel muscolo, dolore riferito), in blu i tender point della fibromialgia (dolore alla pressione leggera, senza nodo).</p>'+
   '<div class="wg"><div class="wg-head"><span class="t">Mostra</span>'+chip("tutti","Tutti")+chip("trigger","Solo trigger point")+chip("tender","Solo tender point")+
   '<span class="t" style="margin-left:auto">'+DB.trigger.length+' trigger · '+DB.tender.length+' tender</span></div>'+
   '<div class="wg-body"><div class="wg-split"><div class="stage">'+mappaTriggerSVG("ant",TP_FILTRO)+'<span class="eyebrow" style="margin-top:6px">Vista anteriore</span></div>'+
   '<div class="stage">'+mappaTriggerSVG("post",TP_FILTRO)+'<span class="eyebrow" style="margin-top:6px">Vista posteriore</span></div></div>'+
   '<div class="tplegend"><span><i style="background:var(--muscle)"></i>Trigger point</span><span><i style="background:var(--joint)"></i>Tender point (fibromialgia)</span><span>I punti sono indicativi: la posizione esatta si trova con le mani.</span></div></div></div>'+
   '<div class="seg" style="margin:18px 0 8px">Che cosa sono</div><div class="pills">'+pills(["z-trigger-point","z-dolore","z-sensibilizzazione-centrale"].filter(x=>anyById(x)))+'</div>'+
   Object.keys(gruppi).map(r=>'<div class="seg" style="margin:18px 0 10px">'+esc(r)+' · '+gruppi[r].length+'</div><div class="grid g3">'+gruppi[r].map(card).join("")+'</div>').join("")+
   '<div class="seg" style="margin:18px 0 10px">Tender point della fibromialgia · '+DB.tender.length+'</div><div class="grid g3">'+DB.tender.map(t=>'<button class="card" data-go="trigger/'+t.id+'" style="gap:3px"><span class="eyebrow">Tender point</span><h3 style="font-size:15px">'+esc(t.nome.replace("Tender point: ",""))+'</h3><p style="font-size:12.8px">'+esc(t.dove)+'</p></button>').join("")+'</div>';
};
document.addEventListener("click",function(e){
  const a=e.target.closest('[data-act="tp-filtro"]'); if(!a) return;
  TP_FILTRO=a.getAttribute("data-id"); save("tp.filtro",TP_FILTRO); render();
});
/* la figura del trigger nella scheda: la mappa con il punto evidenziato */
const _visual_conTrigger = visual;
visual = function(kind,it){
  if(kind!=="trigger") return _visual_conTrigger(kind,it);
  const svg=mappaTriggerSVG(it.vista,it.tipo==="tender"?"tender":"trigger",it.id);
  return '<div class="stage">'+svg+'<span class="eyebrow" style="margin-top:6px">Il punto evidenziato, vista '+(it.vista==="ant"?"anteriore":"posteriore")+'</span></div>';
};
</script>
