<script>
/* Dagli esercizi — parte 2: spinta, tirata, braccia, core. Concetti di fisiologia dell'allenamento. Registrazione. */
DB.esercizi_schede = DB.esercizi_schede.concat([
 {id:"e-panca",nome:"Panca piana",cat:"Spinta",attrezzo:"Bilanciere, manubri",regione:"Spalla",alias:["panca piana","bench press","distensioni su panca","panca con bilanciere","panca con manubri"],
  primari:["m-pettorale-grande","m-tricipite","m-deltoide"],secondari:["m-dentato","m-sottoscapolare","m-gran-dorsale","m-romboidi","m-trapezio","m-coracobrachiale"],
  articolazioni:["a-gleno-omerale","a-scapolo-toracica","a-omero-ulnare","a-radio-carpica"],
  gradi:"Estensione orizzontale della spalla 20–30° in basso (il bilanciere al petto), gomiti a 45–70° dal tronco, scapole retratte e abbassate per tutto il movimento, polsi neutri sopra i gomiti.",
  esecuzione:"Supino con cinque punti di appoggio (testa, spalle, sedere, due piedi), scapole «in tasca», presa poco più larga delle spalle; si scende con il bilanciere allo sterno basso con i gomiti a 45–70°, si spinge espirando senza che le spalle si stacchino dalla panca. Con i manubri la presa neutra o a 45° è più gentile con la spalla.",
  errori:[["Gomiti aperti a 90°","La spalla va in conflitto: la cuffia e il capo lungo del bicipite pagano"],["Spalle che si alzano verso le orecchie","Scapole che perdono la retrazione: il pettorale piccolo prende il sopravvento"],["Polsi piegati indietro","Presa troppo aperta: bilanciere sulla base del palmo"],["Sedere che si stacca","Carico eccessivo, arco lombare esagerato"]],
  regressioni:"Flessioni al muro e in ginocchio, panca con manubri leggeri, panca con il bilanciere scarico e pausa al petto.",
  progressioni:"Panca con fermo, panca inclinata, panca con manubri pesanti, panca stretta per i tricipiti.",
  attenzione:"Spalla con conflitto o instabilità anteriore (presa neutra, manubri, range ridotto), capsulite, dopo intervento alla cuffia (solo con il fisioterapista), dolore sternale.",
  problemi:["p-braccio-sopra-testa","p-pettinarsi","p-spalla-congelata","p-dorso-curvo"],
  segreto:"La panca si fa con le scapole, non con le braccia: se restano retratte e abbassate, la spalla è protetta e il pettorale lavora; se si alzano, la panca diventa la fabbrica dei conflitti subacromiali. Un cliente che fa solo panca e mai tirate finirà da un massaggiatore con il pettorale piccolo corto e le spalle in avanti."},
 {id:"e-flessioni",nome:"Flessioni (push-up)",cat:"Spinta",attrezzo:"Corpo libero",regione:"Spalla",alias:["flessioni","push up","push-up","piegamenti sulle braccia","flessioni al muro"],
  primari:["m-pettorale-grande","m-tricipite","m-deltoide","m-dentato"],secondari:["m-trasverso","m-obliqui","m-retto-addominale","m-gluteo-massimo","m-quadricipite","m-sottoscapolare"],
  articolazioni:["a-gleno-omerale","a-scapolo-toracica","a-omero-ulnare","a-radio-carpica"],
  gradi:"Come la panca, più l'estensione del polso a 90° in appoggio (o maniglie) e il controllo della scapola che si allontana dal torace alla fine della spinta (plus).",
  esecuzione:"Mani poco più larghe delle spalle, corpo in linea dalla nuca ai talloni (glutei e addome attivi), si scende con i gomiti a 45° fino a sfiorare il pavimento con il petto, si spinge e alla fine si allontanano le scapole (il plus) senza perdere la linea.",
  errori:[["Bacino che cade o che si alza","Core che non tiene: regressione al muro o in ginocchio"],["Gomiti aperti","Conflitto di spalla, come in panca"],["Scapole alate durante la discesa","Dentato anteriore debole: il plus e le flessioni al muro lo riattivano"],["Testa che cade in avanti","Collo che compensa: sguardo a terra, mento in dentro"]],
  regressioni:"Flessioni al muro, su un tavolo, in ginocchio, eccentriche (solo la discesa lenta).",
  progressioni:"Piedi rialzati, con pausa, a presa stretta (tricipiti), su un braccio progressivo, con anelli.",
  attenzione:"Polsi dolenti (maniglie o pugni), spalla instabile (range ridotto), gravidanza avanzata (al muro), diastasi (in ginocchio o al muro, senza «pinna»).",
  problemi:["p-polso-appoggio","p-spalla-alta","p-braccio-sopra-testa","p-diastasi"],
  segreto:"Le flessioni al muro con il «plus» finale sono l'esercizio con cui si cura la scapola alata, e nessuno le considera un esercizio. Tre serie da dieci ogni giorno per otto settimane e il dentato anteriore torna a incollare la scapola al torace."},
 {id:"e-military-press",nome:"Military press e landmine press",cat:"Spinta",attrezzo:"Bilanciere, manubri, landmine",regione:"Spalla",alias:["military press","overhead press","lento avanti","spinte sopra la testa","landmine press","shoulder press"],
  primari:["m-deltoide","m-tricipite","m-trapezio"],secondari:["m-dentato","m-sovraspinato","m-sottospinato","m-trasverso","m-obliqui","m-gluteo-massimo","m-pettorale-grande"],
  articolazioni:["a-gleno-omerale","a-scapolo-toracica","a-acromion-claveare","a-omero-ulnare","a-intervertebrale"],
  gradi:"Flessione completa della spalla (170–180°) con rotazione superiore della scapola (60°) ed estensione dorsale: se il dorso è rigido o il gran dorsale corto, la lombare si inarca per far salire il braccio. Il landmine chiede solo 120–140° di flessione.",
  esecuzione:"In piedi, bilanciere sulle clavicole, glutei e addome attivi, si spinge sopra la testa portando la testa «attraverso» le braccia alla fine, con le scapole che ruotano e si sollevano; si scende controllando. Landmine: bilanciere incastrato a terra, si spinge in diagonale con un braccio o due.",
  errori:[["Lombare che si inarca","Dorsale rigida, gran dorsale e pettorali corti, glutei che non tengono il bacino"],["Bilanciere davanti alla testa in alto","Testa che non passa: spalla che non flette del tutto"],["Scapole che non salgono (spalle «giù e indietro» forzate)","Istruzione sbagliata: sopra la testa la scapola deve ruotare e salire, altrimenti conflitto"],["Gomiti che vanno indietro","Spalla in abduzione pura: più conflitto"]],
  regressioni:"Landmine press (la diagonale aggira la rigidità), spinte con manubri a presa neutra, spinte seduti con schienale, mezze spinte.",
  progressioni:"Push press, spinte con manubri in piedi, military con pausa, spinte su un braccio.",
  attenzione:"Conflitto subacromiale, capsulite, instabilità (landmine o niente), stenosi cervicale, pressione alta non controllata; chi non alza il braccio senza dolore non spinge sopra la testa.",
  problemi:["p-pettinarsi","p-braccio-sopra-testa","p-spalla-alta","p-stare-in-piedi"],
  segreto:"Il landmine press è la spinta sopra la testa per chi non può spingere sopra la testa: la traiettoria diagonale lascia alla scapola lo spazio per ruotare e al dorso quello per non estendere. Per il 90 % delle spalle da ufficio è la scelta giusta, e la military resta per chi ha mobilità da ginnasta."},
 {id:"e-dip",nome:"Dip alle parallele",cat:"Spinta",attrezzo:"Parallele, panca (dip su panca)",regione:"Spalla",alias:["dip","dip alle parallele","parallele","dip su panca"],
  primari:["m-pettorale-grande","m-tricipite","m-deltoide"],secondari:["m-gran-dorsale","m-dentato","m-coracobrachiale","m-trapezio"],
  articolazioni:["a-gleno-omerale","a-scapolo-toracica","a-sterno-claveare","a-omero-ulnare"],
  gradi:"Estensione della spalla 40–60° sotto carico (la più impegnativa per la capsula anteriore e il capo lungo del bicipite), gomito a 90°, scapole che scendono e si avvicinano in basso senza che le spalle salgano alle orecchie.",
  esecuzione:"Braccia tese sulle parallele, corpo leggermente inclinato in avanti (più pettorale) o dritto (più tricipiti), si scende finché la spalla è alla stessa altezza del gomito, non oltre, e si risale. Dip su panca: mani dietro sulla panca e piedi a terra, molto più stressante per la spalla anteriore.",
  errori:[["Discesa troppo profonda","Capsula anteriore e capo lungo del bicipite in tensione: dolore davanti alla spalla"],["Spalle che salgono alle orecchie","Scapole che perdono la depressione"],["Oscillazione","Core che non tiene"]],
  regressioni:"Dip con la macchina assistita o con l'elastico, dip eccentrici, flessioni a presa stretta.",
  progressioni:"Dip con zavorra, con pausa in basso, agli anelli.",
  attenzione:"Instabilità anteriore della spalla, tendinopatia del capo lungo del bicipite, conflitto, dolore sternale: i dip sono l'esercizio che più spesso fa male alla spalla anteriore; il dip su panca peggio di tutti.",
  problemi:["p-braccio-sopra-testa","p-spalla-congelata","p-formicolio-braccio"],
  segreto:"Il dip su panca, quello che si vede in tutte le palestre e in tutti i parchi, porta la spalla in estensione con rotazione interna sotto carico: è la posizione del test dell'apprensione fatta con il peso del corpo. Per la maggior parte delle spalle, le flessioni a presa stretta danno lo stesso tricipite senza il danno."},
 {id:"e-alzate-laterali",nome:"Alzate laterali e full can",cat:"Spinta",attrezzo:"Manubri, elastico, cavo",regione:"Spalla",alias:["alzate laterali","lateral raise","full can","alzate frontali","sollevamenti laterali"],
  primari:["m-deltoide","m-sovraspinato"],secondari:["m-trapezio","m-dentato","m-sottospinato","m-sottoscapolare"],
  articolazioni:["a-gleno-omerale","a-scapolo-toracica","a-acromion-claveare"],
  gradi:"Abduzione 0–90° nel piano della scapola (30° avanti rispetto al frontale), con il pollice in alto o neutro; sopra i 90° serve la rotazione esterna e la scapola che ruota.",
  esecuzione:"In piedi, manubri leggeri, braccia leggermente avanti (piano della scapola), si sollevano fino all'altezza delle spalle con i pollici in alto o neutri, senza scrollare, e si scende lentamente (il full can è esattamente questo con 0,5–1 kg, come esercizio della cuffia).",
  errori:[["Pollice in basso (lattina vuota)","Rotazione interna: il tubercolo urta l'acromion, conflitto"],["Scrollata del trapezio","Carico eccessivo o cuffia debole: il trapezio superiore solleva la spalla al posto del deltoide"],["Slancio con il busto","Carico eccessivo"],["Sopra i 90° con il pollice in basso","Conflitto garantito"]],
  regressioni:"Full can con 0,5–1 kg, isometrica a 30° contro il muro, alzate con elastico leggero.",
  progressioni:"Alzate con manubri, al cavo, con pausa in alto, in sospensione su una gamba (equilibrio).",
  attenzione:"Conflitto subacromiale in fase acuta (isometrica e range sotto i 60°), tendinopatia del sovraspinato (full can leggero, progressivo), capsulite (range disponibile).",
  problemi:["p-braccio-sopra-testa","p-pettinarsi","p-spalla-alta"],
  segreto:"Le alzate laterali con il pollice in basso erano «per isolare il deltoide»; in realtà isolano il tendine del sovraspinato sotto l'acromion. Il full can con 1 kg, pollice in alto e il braccio nel piano della scapola, è lo stesso esercizio fatto come lo prescriverebbe un fisioterapista: cura la cuffia invece di consumarla."},
 {id:"e-trazioni",nome:"Trazioni alla sbarra e lat machine",cat:"Tirata",attrezzo:"Sbarra, lat machine, elastico",regione:"Spalla",alias:["trazioni","pull up","chin up","lat machine","trazioni alla sbarra","trazioni assistite","lat pulldown"],
  primari:["m-gran-dorsale","m-bicipite","m-brachiale","m-rotondi"],secondari:["m-trapezio","m-romboidi","m-sottospinato","m-pettorale-grande","m-brachioradiale","m-flessori-dita","m-trasverso"],
  articolazioni:["a-gleno-omerale","a-scapolo-toracica","a-omero-ulnare","a-radio-carpica"],
  gradi:"Flessione completa della spalla in basso (braccia tese sopra la testa: dorso esteso, gran dorsale lungo) e adduzione-estensione con il gomito che va verso il fianco; scapole che scendono prima che i gomiti si pieghino.",
  esecuzione:"Appesi con presa poco più larga delle spalle (o supina/neutra: più gentile per spalla e gomito), si «abbassano» prima le scapole, poi si tira con i gomiti verso i fianchi fino al mento sopra la sbarra, petto alla sbarra, e si scende controllando fino alle braccia tese senza lasciare che le spalle salgano del tutto alle orecchie. Lat machine: stessa cosa seduti, senza inclinarsi indietro.",
  errori:[["Spalle alle orecchie all'inizio","Scapole che non scendono: il gran dorsale non si attiva, lavora il collo"],["Kipping e oscillazione","Forza insufficiente: assistenza con elastico"],["Lat machine dietro la nuca","Rotazione esterna massima con carico: spalla e collo a rischio"],["Gomiti che vanno indietro invece che in basso","Dorsale rigida, pettorali corti"]],
  regressioni:"Lat machine, trazioni con elastico, trazioni eccentriche (salire con lo sgabello, scendere in 5 secondi), rematore inverso (australian pull-up).",
  progressioni:"Trazioni complete, con zavorra, presa larga, L-sit, su un braccio progressivo.",
  attenzione:"Conflitto di spalla (presa neutra, range), epicondilite ed epitrocleite (presa supina o neutra, fasce), gomito del golfista (le trazioni supinate pesanti sono la sua causa classica), instabilità.",
  problemi:["p-gomito-tennista","p-braccio-sopra-testa","p-dorso-curvo","p-sotto-scapola"],
  segreto:"Il primo centimetro di una trazione è il più importante: le scapole che scendono senza piegare i gomiti. Chi salta quel centimetro tira con bicipiti e collo, e dopo mesi ha i gomiti infiammati e il gran dorsale che non è mai cresciuto. Si insegna da appesi, dieci «scapole giù» a braccia tese prima di qualunque trazione."},
 {id:"e-rematore",nome:"Rematore con bilanciere e con manubrio",cat:"Tirata",attrezzo:"Bilanciere, manubrio, cavo, elastico",regione:"Spalla",alias:["rematore","rematore con bilanciere","rematore con manubrio","bent over row","dumbbell row","rematore al cavo","seated row"],
  primari:["m-gran-dorsale","m-romboidi","m-trapezio","m-rotondi"],secondari:["m-bicipite","m-brachiale","m-sottospinato","m-erettori","m-multifido","m-ischiocrurali","m-gluteo-massimo","m-flessori-dita"],
  articolazioni:["a-gleno-omerale","a-scapolo-toracica","a-omero-ulnare","a-intervertebrale","a-coxo-femorale"],
  gradi:"Hip hinge mantenuto (rematore con bilanciere: colonna neutra a 45°), estensione della spalla 30–40° con la scapola che si retrae alla fine, gomito che resta vicino al fianco.",
  esecuzione:"Rematore con bilanciere: hinge a 45°, schiena neutra, si tira il bilanciere verso l'ombelico con i gomiti vicini al corpo e si avvicinano le scapole alla fine, poi si scende controllando senza perdere la posizione. Con manubrio: ginocchio e mano sulla panca, si tira con il gomito verso l'anca.",
  errori:[["Schiena che si arrotonda","Hinge perso, carico eccessivo"],["Spalle in avanti e gomiti che si aprono","Si tira con il trapezio superiore e il collo: retrarre la scapola, non alzarla"],["Slancio con il busto","Carico eccessivo"],["Rotazione del tronco nel rematore con manubrio","Obliqui che compensano: tirare più leggero"]],
  regressioni:"Rematore con il petto appoggiato (panca inclinata), al cavo seduto, con elastico, rematore inverso al TRX.",
  progressioni:"Pendlay row (dal pavimento a ogni ripetizione), con pausa a scapola retratta, con manubrio pesante, rematore a presa larga per il trapezio medio.",
  attenzione:"Lombalgia acuta (petto appoggiato), epicondilite (presa neutra), spalla con conflitto (gomito vicino al corpo, range ridotto).",
  problemi:["p-dorso-curvo","p-sotto-scapola","p-spalla-alta","p-alzarsi"],
  segreto:"Il rapporto tirate/spinte è il segreto delle spalle sane: per ogni serie di panca, due di rematore, per mesi. Il corpo moderno è già in flessione tutto il giorno; la palestra che aggiunge solo spinte lo chiude ancora di più. Il rematore con pausa a scapole retratte è l'esercizio che scrive la postura."},
 {id:"e-face-pull",nome:"Face pull e Y-W-T",cat:"Tirata",attrezzo:"Cavo, elastico, prono su panca",regione:"Spalla",alias:["face pull","Y-W-T","Y W T","esercizi per il trapezio inferiore","prone Y","tirate al viso"],
  primari:["m-trapezio","m-romboidi","m-sottospinato","m-rotondi","m-deltoide"],secondari:["m-dentato","m-erettori","m-sovraspinato"],
  articolazioni:["a-gleno-omerale","a-scapolo-toracica"],
  gradi:"Rotazione esterna della spalla a 90° di abduzione (face pull), rotazione superiore e depressione della scapola (Y), retrazione (T), retrazione con rotazione esterna (W).",
  esecuzione:"Face pull: elastico o cavo all'altezza del viso, presa con i pollici verso di sé, si tira verso la fronte aprendo i gomiti e ruotando esternamente le spalle, scapole che si avvicinano e scendono, pausa 2 secondi. Y-W-T: prono su panca inclinata, braccia a Y (pollici in alto) sollevate abbassando le scapole, poi a W (gomiti piegati, rotazione esterna), poi a T; 10 secondi di tenuta, carichi minimi.",
  errori:[["Spalle che salgono","Trapezio superiore che ruba il lavoro: abbassare le scapole prima"],["Gomiti che scendono nel face pull","Rotazione esterna persa: diventa un rematore"],["Carico eccessivo","Questi muscoli lavorano con 1–3 kg; oltre, compensa tutto il resto"]],
  regressioni:"Y-W-T a corpo libero in piedi contro il muro (scivolamenti), face pull con elastico leggero.",
  progressioni:"Face pull con rotazione esterna completa in alto, Y-W-T con manubri da 1–2 kg, su panca a 45°.",
  attenzione:"Nessuna di rilievo: sono gli esercizi più sicuri per la spalla; nella capsulite, nel range disponibile.",
  problemi:["p-dorso-curvo","p-spalla-alta","p-braccio-sopra-testa","p-sotto-scapola","p-cefalea"],
  segreto:"Il trapezio inferiore è il muscolo più debole dell'uomo da scrivania e il più importante per la spalla: tira la scapola giù e indietro mentre il braccio sale. La Y da prono con 1 kg, tenuta 10 secondi, è l'esercizio che nessuno fa perché «non si sente niente»: si sente dopo otto settimane, quando la spalla smette di fare male."},
 {id:"e-pullover",nome:"Pull-over",cat:"Tirata",attrezzo:"Manubrio, cavo",regione:"Spalla",alias:["pull over","pull-over","pullover con manubrio"],
  primari:["m-gran-dorsale","m-pettorale-grande","m-tricipite"],secondari:["m-dentato","m-rotondi","m-trasverso","m-intercostali"],
  articolazioni:["a-gleno-omerale","a-scapolo-toracica","a-costo-vertebrale"],
  gradi:"Flessione della spalla oltre i 150° con il dorso esteso e il gran dorsale allungato: la mobilità dorsale decide se lo fa la spalla o la lombare.",
  esecuzione:"Supino sulla panca, manubrio tenuto con entrambe le mani sopra il petto, gomiti leggermente piegati e fissi, si porta il peso dietro la testa fino a sentire il gran dorsale allungarsi, con le costole che non si aprono (addome attivo), e si torna.",
  errori:[["Costole che si aprono e lombare che si inarca","Gran dorsale o dorso rigidi: la lombare compensa; ridurre il range"],["Gomiti che si piegano troppo","Diventa un'estensione dei tricipiti"],["Dolore davanti alla spalla","Capo lungo del bicipite in tensione: peso minore, range minore"]],
  regressioni:"Pull-over con il cavo in piedi, allungamento del gran dorsale alla sedia.",
  progressioni:"Pull-over con manubrio pesante, con le anche basse (panca trasversale).",
  attenzione:"Instabilità di spalla, tendinopatia del capo lungo del bicipite, ernia lombare con dolore in estensione.",
  problemi:["p-pettinarsi","p-dorso-curvo","p-torace-chiuso"],
  segreto:"Il pull-over è l'unico esercizio che allunga il gran dorsale sotto carico e apre il torace: per chi non riesce ad alzare le braccia sopra la testa senza inarcare la schiena, è insieme la diagnosi e la cura. A patto che le costole restino chiuse."},
 {id:"e-curl",nome:"Curl per i bicipiti e pushdown per i tricipiti",cat:"Braccia",attrezzo:"Manubri, bilanciere EZ, cavo",regione:"Arto superiore",alias:["curl","curl bicipiti","curl con manubri","curl a martello","pushdown","tricipiti al cavo","french press","estensioni tricipiti"],
  primari:["m-bicipite","m-brachiale","m-brachioradiale","m-tricipite","m-anconeo"],secondari:["m-flessori-polso","m-estensori-polso","m-deltoide","m-trasverso"],
  articolazioni:["a-omero-ulnare","a-omero-radiale","a-radio-ulnare","a-radio-carpica"],
  gradi:"Flessione ed estensione del gomito complete (0–140°) con il polso neutro e la spalla ferma; nel curl a martello la presa neutra sposta il lavoro sul brachiale e sul brachioradiale.",
  esecuzione:"Curl: in piedi, gomiti al fianco e fermi, si flette senza oscillare e si scende lentamente fino all'estensione completa. Pushdown: al cavo, gomiti al fianco, si estende del tutto e si torna controllando. French press: supino, manubri sopra, si piegano i gomiti portando i pesi verso le orecchie.",
  errori:[["Gomiti che vanno avanti nel curl","Il deltoide anteriore aiuta: braccio che si solleva"],["Oscillazione del busto","Carico eccessivo"],["Polso flesso nel curl con bilanciere dritto","Epitroclea sotto stress: bilanciere EZ o manubri"],["Gomiti che si aprono nel pushdown","Tricipite che perde il lavoro"]],
  regressioni:"Curl con elastico, pushdown con elastico, estensioni al muro a presa stretta.",
  progressioni:"Curl con pausa, curl inclinato (più allungamento), french press pesante, dip.",
  attenzione:"Epicondilite ed epitrocleite (presa neutra, carichi moderati, eccentrico lento), tendinopatia del capo lungo del bicipite (curl inclinato con cautela), gomito rigido dopo trauma.",
  problemi:["p-gomito-tennista","p-mano-notte"],
  segreto:"Il curl a martello (pollice in alto) allena il brachiale e il brachioradiale, che fanno la metà del lavoro di flessione del gomito e che nessuno conosce: è il curl giusto per chi ha il gomito dolente, perché il polso resta neutro e l'epitroclea non tira. E il tricipite cresce con i gomiti fermi, non con quelli che si aprono."},
 {id:"e-plank",nome:"Plank frontale e side plank",cat:"Core",attrezzo:"Corpo libero",regione:"Lombare",alias:["plank","side plank","plank laterale","isometrico addominale","tavola"],
  primari:["m-trasverso","m-retto-addominale","m-obliqui","m-quadrato-lombi"],secondari:["m-gluteo-massimo","m-gluteo-medio","m-dentato","m-quadricipite","m-multifido","m-pettorale-grande","m-deltoide"],
  articolazioni:["a-intervertebrale","a-lombo-sacrale","a-scapolo-toracica","a-gleno-omerale"],
  gradi:"Colonna neutra tenuta contro la gravità (plank: contro l'estensione; side plank: contro la flessione laterale), scapole che avvolgono il torace, bacino in leggera retroversione, anche estese.",
  esecuzione:"Plank: sugli avambracci e sulle punte, corpo in linea, glutei stretti, addome attivo «come per ricevere un pugno», scapole spinte via dal pavimento, respiro normale; 20–40 secondi di qualità valgono più di 2 minuti storti. Side plank: sul gomito e sul bordo esterno del piede (o sul ginocchio), bacino sollevato in linea, 20–30 secondi per lato.",
  errori:[["Bacino che cade e lombare che si inarca","Glutei e addome che mollano: ridurre il tempo o appoggiare le ginocchia"],["Sedere in alto","Fuga dal lavoro dell'addome"],["Scapole che sprofondano","Dentato anteriore che non tiene"],["Respiro trattenuto","Pressione che sale: respirare normalmente"],["Side plank con il bacino indietro o avanti","Obliqui e quadrato dei lombi che cedono: ginocchia a terra prima"]],
  regressioni:"Plank in ginocchio, plank inclinato al muro o alla panca, side plank sulle ginocchia, tempi brevi ripetuti (10 secondi × 6).",
  progressioni:"Plank con sollevamento di un arto, plank con scivolamento (body saw), side plank con la gamba sollevata, plank su un braccio, RKC plank (massima tensione 10 secondi).",
  attenzione:"Diastasi dei retti (in ginocchio, senza «pinna»), gravidanza (inclinato), pressione alta (tempi brevi, respiro), spalla dolente in appoggio (plank sugli avambracci), lombalgia acuta in estensione.",
  problemi:["p-alzarsi","p-stare-in-piedi","p-diastasi","p-sacroiliaca","p-spalla-alta"],
  segreto:"Il side plank è l'esercizio di core più utile per la lombalgia e il meno fatto: allena il quadrato dei lombi e gli obliqui, che tengono la colonna di lato quando si cammina e si porta la spesa, senza comprimere i dischi. McGill lo mette nei suoi «big three» con il bird-dog e il curl-up: tre esercizi, tutti i giorni, nessun crunch."},
 {id:"e-dead-bug",nome:"Dead bug e bird-dog",cat:"Core",attrezzo:"Corpo libero",regione:"Lombare",alias:["dead bug","bird dog","bird-dog","quadrupedia","core stability"],
  primari:["m-trasverso","m-multifido","m-obliqui","m-retto-addominale"],secondari:["m-gluteo-massimo","m-erettori","m-ileopsoas","m-deltoide","m-dentato","m-pavimento-pelvico"],
  articolazioni:["a-intervertebrale","a-lombo-sacrale","a-coxo-femorale","a-gleno-omerale"],
  gradi:"Colonna e bacino fermi mentre gli arti si muovono: anca che estende (bird-dog) o che si estende da supino (dead bug) senza che la lombare si inarchi; spalla che flette senza che il dorso si muova.",
  esecuzione:"Dead bug: supino, anche e ginocchia a 90°, braccia verso il soffitto, lombare appoggiata; espirando si allunga una gamba e il braccio opposto senza che la lombare si stacchi, si torna, si alterna. Bird-dog: a quattro zampe, schiena neutra, si allungano un braccio e la gamba opposta senza che il bacino ruoti né la lombare si inarchi, 5–10 secondi, si torna.",
  errori:[["Lombare che si stacca nel dead bug","Gamba allungata troppo in basso o troppo presto: piegare il ginocchio"],["Bacino che ruota nel bird-dog","Obliqui e gluteo medio che non tengono: ridurre l'escursione"],["Gamba sollevata sopra il bacino nel bird-dog","Lombare in estensione: il tallone resta all'altezza del bacino"],["Respiro trattenuto","Espirare nel movimento"]],
  regressioni:"Dead bug con le sole gambe (o con un piede che tocca terra), bird-dog con un solo arto.",
  progressioni:"Dead bug con elastico tra mani e piedi, bird-dog con pausa lunga e con il «disegno del quadrato» con la mano, bird-dog su panca.",
  attenzione:"Polsi dolenti nel bird-dog (pugni o avambracci), gravidanza avanzata (bird-dog sì, dead bug breve), dolore lombare acuto in estensione (dead bug ok, bird-dog con cautela).",
  problemi:["p-alzarsi","p-stare-in-piedi","p-sciatica","p-diastasi","p-schiena-gravidanza","p-sacroiliaca"],
  segreto:"Il dead bug insegna la cosa che a tutti manca: muovere le gambe senza muovere la schiena. Chi non lo sa fare con una gamba sola non dovrebbe fare sit-up, leg raise o mountain climber; chi lo sa fare bene ha già il core che serve nella vita, e il resto è estetica."},
 {id:"e-pallof-press",nome:"Pallof press e anti-rotazione",cat:"Core",attrezzo:"Cavo, elastico",regione:"Lombare",alias:["pallof press","anti-rotazione","anti rotazione","core anti-rotazione","chop e lift"],
  primari:["m-obliqui","m-trasverso","m-quadrato-lombi"],secondari:["m-gluteo-medio","m-gluteo-massimo","m-multifido","m-deltoide","m-dentato","m-adduttori"],
  articolazioni:["a-intervertebrale","a-lombo-sacrale","a-coxo-femorale"],
  gradi:"Nessun movimento: tronco e bacino che resistono alla rotazione mentre le braccia si allungano davanti; anche e ginocchia leggermente piegate, piedi a larghezza delle spalle o in posizione di affondo.",
  esecuzione:"Elastico o cavo all'altezza del petto, di lato; si tiene con due mani al petto e si allungano le braccia davanti senza che il tronco ruoti verso l'ancoraggio, si tiene 2–5 secondi, si torna. In ginocchio o su un ginocchio solo per togliere l'aiuto delle gambe.",
  errori:[["Tronco che ruota verso l'elastico","Obliqui del lato opposto che non tengono: ridurre la resistenza"],["Spalle che salgono","Trapezio superiore che compensa"],["Respiro trattenuto","Espirare mentre si allungano le braccia"]],
  regressioni:"Elastico leggero, braccia a metà, in ginocchio con base larga.",
  progressioni:"Su un ginocchio, in affondo, in piedi con i piedi uniti, con sollevamento delle braccia sopra la testa, chop e lift.",
  attenzione:"Nessuna di rilievo; adatto anche in gravidanza e nella lombalgia acuta (resistenza bassa).",
  problemi:["p-stare-in-piedi","p-sacroiliaca","p-schiena-gravidanza","p-diastasi","p-retromarcia"],
  segreto:"Il core non serve a piegare il tronco: serve a impedire che si pieghi o ruoti quando il corpo spinge, tira, cammina. Il Pallof press allena esattamente quello, senza un solo grado di flessione lombare: per chi ha un'ernia è il primo esercizio di core, e per chi gioca a tennis o a golf è il più importante."},
 {id:"e-crunch",nome:"Crunch, sit-up e curl-up di McGill",cat:"Core",attrezzo:"Corpo libero",regione:"Lombare",alias:["crunch","sit up","sit-up","addominali","curl up","curl-up di McGill","addominali classici"],
  primari:["m-retto-addominale","m-obliqui"],secondari:["m-ileopsoas","m-trasverso","m-scom","m-lungo-collo"],
  articolazioni:["a-intervertebrale","a-lombo-sacrale","a-coxo-femorale"],
  gradi:"Crunch: flessione dorsale di 30° con la lombare che resta a terra. Sit-up: flessione completa del tronco con l'anca che flette (è lo psoas che fa metà del lavoro e comprime la lombare). Curl-up di McGill: sollevamento di pochi centimetri di testa e spalle con la lombare neutra, mani sotto la lombare.",
  esecuzione:"Curl-up di McGill: supino, una gamba tesa e una piegata, mani sotto la lombare per conservarne la curva, si sollevano appena testa e spalle (come un blocco, senza piegare il collo), 10 secondi, si torna. Crunch classico: ginocchia piegate, mento in dentro, si solleva il dorso espirando senza staccare la lombare. Sit-up con i piedi bloccati: da evitare in chi ha la schiena delicata.",
  errori:[["Mento al petto e collo che tira","Flessori profondi del collo che non reggono: mani sotto la lombare e sguardo al soffitto"],["Lombare che si stacca e piedi che si sollevano","Psoas che fa l'esercizio"],["Serie infinite","Il retto si allena con la qualità; il resto è compressione del disco"],["Pancia che spinge in fuori (pinna)","Diastasi o trasverso spento: prima il dead bug"]],
  regressioni:"Curl-up di McGill, dead bug, espirazione con trasverso.",
  progressioni:"Crunch con le braccia dietro, crunch al cavo, hollow body, sit-up solo per chi li tollera e ne ha bisogno (ginnasti, sport specifici).",
  attenzione:"Ernia lombare (il crunch ripetuto flette il disco: curl-up o niente), diastasi e post-parto (niente crunch finché c'è la pinna), osteoporosi (niente flessione caricata), gravidanza.",
  problemi:["p-diastasi","p-alzarsi","p-sciatica","p-dorso-curvo"],
  segreto:"Il curl-up di McGill con le mani sotto la lombare sembra un esercizio da niente: si solleva la testa di tre centimetri. È invece il modo di allenare il retto dell'addome senza flettere la colonna, cioè senza fare quello che l'ernia non tollera. Chi lo fa bene per 10 secondi sente il retto più che in cinquanta crunch."},
 {id:"e-farmer-walk",nome:"Farmer walk e camminata con il peso",cat:"Core",attrezzo:"Manubri, kettlebell, trap bar",regione:"Lombare",alias:["farmer walk","farmer carry","camminata del contadino","suitcase carry","camminata con la valigia","loaded carry"],
  primari:["m-trapezio","m-flessori-dita","m-quadrato-lombi","m-obliqui","m-trasverso"],secondari:["m-gluteo-medio","m-erettori","m-multifido","m-deltoide","m-romboidi","m-gastrocnemio","m-intrinseci-mano"],
  articolazioni:["a-intervertebrale","a-coxo-femorale","a-gleno-omerale","a-radio-carpica"],
  gradi:"Postura eretta tenuta sotto carico: spalle giù e indietro, bacino orizzontale a ogni passo (gluteo medio e quadrato dei lombi), presa che tiene.",
  esecuzione:"Pesi pesanti nelle mani (o in una sola: suitcase carry), petto alto, spalle «in tasca», addome attivo, si cammina a passi normali per 20–40 metri senza inclinarsi né ondeggiare; il suitcase carry costringe il lato opposto a tenere il bacino e il tronco dritti.",
  errori:[["Spalle che cadono in avanti","Trapezio e romboidi che cedono: peso minore"],["Inclinazione verso il peso nel suitcase","Quadrato dei lombi e obliqui del lato opposto che non tengono"],["Passi corti e rigidi","Peso eccessivo o paura"],["Presa che molla prima del resto","Il limite è la presa: fasce no, meglio allenarla"]],
  regressioni:"Pesi leggeri, distanze brevi, suitcase carry con il peso moderato.",
  progressioni:"Pesi pesanti, distanze lunghe, carry sopra la testa (waiter), carry al petto, scale.",
  attenzione:"Pressione alta non controllata (presa isometrica prolungata), gomito del tennista (presa), ernia inguinale, dolore lombare acuto.",
  problemi:["p-stare-in-piedi","p-sacroiliaca","p-spalla-alta","p-anca-laterale-notte","p-gomito-tennista"],
  segreto:"Il suitcase carry è il test di Trendelenburg con un peso in mano: se il bacino cade o il tronco si inclina, il gluteo medio e il quadrato dei lombi del lato opposto non tengono. Ed è anche la cura: 30 metri per lato, tre volte, due volte a settimana. Nessun esercizio somiglia di più alla vita vera."},
 {id:"e-hollow",nome:"Hollow body e leg raise",cat:"Core",attrezzo:"Corpo libero, sbarra",regione:"Lombare",alias:["hollow body","hollow hold","leg raise","sollevamento delle gambe","leg raise alla sbarra","toes to bar"],
  primari:["m-retto-addominale","m-ileopsoas","m-obliqui","m-trasverso"],secondari:["m-quadricipite","m-gran-dorsale","m-flessori-dita","m-dentato"],
  articolazioni:["a-intervertebrale","a-lombo-sacrale","a-coxo-femorale"],
  gradi:"Bacino in retroversione e lombare «incollata» a terra (hollow) mentre le gambe e le braccia si allontanano; nel leg raise l'anca flette da 0 a 90° con la lombare che non si inarca; alla sbarra, spalle attive.",
  esecuzione:"Hollow: supino, lombare schiacciata a terra, gambe tese sollevate e braccia dietro la testa, si tiene la posizione a banana con la lombare che non si stacca, 20–40 secondi. Leg raise a terra: gambe tese che salgono a 90° e scendono senza che la lombare si stacchi; alla sbarra: appesi con le scapole attive, ginocchia al petto e poi gambe tese.",
  errori:[["Lombare che si stacca","Psoas che tira il bacino: ginocchia piegate o gambe più alte"],["Collo che tira","Mento in dentro, sguardo in alto"],["Oscillazione alla sbarra","Spalle passive, core che non tiene: ginocchia al petto prima"]],
  regressioni:"Hollow con le ginocchia piegate, dead bug, leg raise con un ginocchio piegato, ginocchia al petto alla sbarra.",
  progressioni:"Hollow rock, leg raise alla sbarra con gambe tese, toes to bar, dragon flag.",
  attenzione:"Ernia lombare, diastasi, osteoporosi, dolore all'inguine (psoas), gravidanza: tutti esercizi di flessione caricata dell'anca con leva lunga.",
  problemi:["p-diastasi","p-alzarsi","p-pubalgia"],
  segreto:"Il leg raise è un esercizio per lo psoas travestito da addominale: il retto dell'addome lavora solo per tenere il bacino fermo mentre lo psoas solleva le gambe. Chi ha la lombalgia da psoas corto e fa leg raise «per gli addominali» peggiora ogni volta. Prima il dead bug; poi, se serve, il resto."}
]);

/* ---- concetti di fisiologia dell'allenamento ---- */
DB.concetti = DB.concetti.concat([
 {id:"z-ipertrofia-forza",nome:"Ipertrofia e forza: come si adatta il muscolo",ambito:"Fisiologia dell'allenamento",alias:["ipertrofia","forza muscolare","sovraccarico progressivo","volume e intensità","adattamento neurale","massa muscolare","sarcopenia"],
  cosa:"La forza cresce in due modi: nelle prime 4–8 settimane soprattutto per via nervosa (più unità motorie reclutate, più sincronizzate, meno freno degli antagonisti), poi per ipertrofia (fibre più grandi: più sarcomeri in parallelo). L'ipertrofia risponde alla tensione meccanica (carico vicino al cedimento, qualunque sia il peso fra il 30 e l'85 % del massimale), al volume settimanale (10–20 serie per gruppo muscolare) e alla progressione; la forza massima ai carichi alti (oltre l'80 %) con poche ripetizioni. Il muscolo cresce nel recupero, non in palestra: proteine (1,6–2 g per kg al giorno), sonno, 48 ore fra due sedute dello stesso gruppo.",
  perche:"La tensione sulle fibre attiva vie di segnale (mTOR) che aumentano la sintesi proteica per 24–48 ore; le fibre veloci rispondono di più, e vengono reclutate solo quando il carico o la fatica lo richiedono (legge di Henneman: prima le lente, poi le veloci). Dai 30 anni si perde l'1 % di massa all'anno e di più dopo i 60 (sarcopenia), soprattutto fibre veloci: l'allenamento di forza è l'unico rimedio provato, a ogni età.",
  pratica:"Per il cliente comune: 2–3 sedute a settimana, 6–12 esercizi multiarticolari, 2–4 serie da 6–15 ripetizioni lasciando 1–3 ripetizioni di riserva, carico che sale quando le ripetizioni diventano facili. Per l'anziano: forza e potenza (alzarsi dalla sedia veloce) valgono più del cardio. Per chi ha dolore: il carico progressivo è terapia, se la tecnica è giusta. Il massaggiatore che sa questo spiega al cliente perché «sciogliere» non basta: il muscolo che si lamenta è spesso un muscolo debole.",
  esempio:"La cliente di 55 anni con «le gambe che non tengono» sulle scale: tre mesi di sit-to-stand, step-up e leg press due volte a settimana, +5 % di carico ogni due settimane, e le scale tornano facili; il massaggio ai quadricipiti da solo non l'avrebbe fatto.",
  segreto:"Il muscolo non sa quanto pesa il bilanciere: sa quanto è vicino al cedimento. Con 10 kg o con 40 cresce uguale, se le ultime ripetizioni sono difficili. È la notizia migliore per chi ha articolazioni delicate: carichi leggeri, serie vicine al limite, stessa ipertrofia e metà del rischio.",
  schede:["z-contrazione-muscolare","z-fibre-muscolari","z-carico-progressivo","z-doms","e-squat","e-stacco","post-anziano"]},
 {id:"z-sistemi-energetici",nome:"Sistemi energetici: da dove viene la forza",ambito:"Fisiologia dell'allenamento",alias:["sistemi energetici","ATP-CP","glicolisi","sistema aerobico","soglia anaerobica","acido lattico","lattato","VO2max","metabolismo energetico"],
  cosa:"Il muscolo usa sempre ATP, e lo ricarica in tre modi. Fosfocreatina (ATP-CP): immediata, potentissima, dura 8–10 secondi (lo scatto, il massimale, il salto). Glicolisi: dal glucosio senza ossigeno, da 10 secondi a 2 minuti, produce lattato e ioni idrogeno (il bruciore e la gamba che non risponde a fine serie). Sistema aerobico: con l'ossigeno, da grassi e zuccheri, lento ad avviarsi ma illimitato (camminata, corsa lunga, tutto ciò che dura oltre 2–3 minuti). I tre lavorano sempre insieme: cambia la proporzione.",
  perche:"Il lattato non è una scoria che «indurisce i muscoli»: è un carburante che il cuore e le fibre lente riutilizzano, e viene smaltito in 30–60 minuti; l'acidità che causa il bruciore sparisce in pochi minuti. Il dolore del giorno dopo non c'entra con il lattato (è il DOMS). La «soglia» è l'intensità oltre la quale il lattato si accumula più in fretta di quanto venga usato: allenarla alza il punto in cui la fatica arriva. Il VO2max (quanto ossigeno il corpo riesce a usare) è il miglior predittore di longevità che esista, e sale con l'allenamento a intervalli.",
  pratica:"Per il cliente: i recuperi fra le serie di forza durano 2–3 minuti perché la fosfocreatina si ricarica in quel tempo; un circuito con 30 secondi di pausa non allena la forza ma la glicolisi. Il cardio «a ritmo di conversazione» (zona 2) costruisce i mitocondri e brucia grassi; gli intervalli brevi e intensi alzano il VO2max. Per il massaggiatore: il «massaggio che elimina l'acido lattico» è un mito; il massaggio dopo lo sforzo riduce il DOMS e il dolore percepito per altre vie.",
  esempio:"Il cliente che corre sempre allo stesso ritmo «medio» (troppo veloce per la zona 2, troppo lento per gli intervalli) non migliora da anni: due uscite lente a ritmo di conversazione e una di intervalli a settimana, e in tre mesi corre più forte con meno fatica.",
  segreto:"Il muscolo che ha una buona base aerobica recupera più in fretta anche fra le serie di forza, perché i mitocondri ricaricano la fosfocreatina. Per questo i migliori sollevatori hanno un cuore allenato, e per questo il cliente che «fa solo pesi» si stanca prima di chi fa anche due camminate veloci a settimana.",
  schede:["z-contrazione-muscolare","z-fibre-muscolari","z-doms","z-recupero","m-soleo","m-diaframma"]},
 {id:"z-recupero",nome:"Recupero, sovrallenamento e sonno",ambito:"Fisiologia dell'allenamento",alias:["recupero","sovrallenamento","overtraining","overreaching","supercompensazione","sonno e allenamento","riposo attivo","deload"],
  cosa:"L'allenamento è uno stress che abbassa temporaneamente la capacità; l'adattamento (muscolo più forte, tendine più resistente, cuore più efficiente) avviene nelle 24–72 ore seguenti, se c'è recupero: sonno (7–9 ore: l'ormone della crescita e la sintesi proteica lavorano di notte), proteine e calorie sufficienti, giorni senza carico sullo stesso tessuto. Senza recupero la capacità scende invece di salire: stanchezza che non passa, prestazioni in calo, sonno disturbato, battito a riposo più alto, infortuni da sovraccarico, umore basso, infezioni frequenti (sovrallenamento, o più spesso «overreaching» non pianificato).",
  perche:"Ogni tessuto ha il suo tempo: il muscolo recupera in 24–72 ore, il sistema nervoso dopo una seduta di forza massima in 48–72, i tendini e le ossa rispondono in settimane e si adattano più lentamente del muscolo (per questo il principiante entusiasta si fa male ai tendini: il muscolo è pronto, il tendine no). Lo stress della vita (lavoro, sonno corto, dieta) si somma a quello dell'allenamento: lo stesso programma è giusto in un periodo e troppo in un altro.",
  pratica:"Regole da dare al cliente: una settimana di scarico (metà volume) ogni 4–6; mai due sedute pesanti consecutive sullo stesso gruppo; +10 % a settimana, non di più; il battito a riposo al mattino come termometro (5–10 battiti sopra la norma = recupero incompleto); sonno prima degli integratori. Per il massaggiatore: il massaggio accelera il recupero percepito e il sonno; la seduta profonda nelle 24 ore dopo uno sforzo massimale aumenta il danno. Chiedere sempre «quando ti sei allenato?» prima di decidere la pressione.",
  esempio:"Il quarantenne che riprende la corsa e in tre settimane passa da zero a cinque uscite: tendine d'Achille dolente alla quarta. Il muscolo era pronto, il tendine no; e il sonno da cinque ore ha fatto il resto.",
  segreto:"Il segnale di sovrallenamento più precoce non è la stanchezza: è il sonno che peggiora e il battito a riposo che sale. Chi li controlla ogni mattina (basta un dito sul polso) sa quando fermarsi una settimana prima di farsi male.",
  schede:["z-guarigione-tessuti","z-carico-progressivo","z-doms","z-ipertrofia-forza","z-tenosinovite","n-vago"]},
 {id:"z-riscaldamento-mobilita",nome:"Riscaldamento, mobilità e stretching: che cosa serve davvero",ambito:"Fisiologia dell'allenamento",alias:["riscaldamento","mobilità","stretching statico","stretching dinamico","defaticamento","foam roller","flessibilità","warm up"],
  cosa:"Il riscaldamento alza la temperatura del muscolo (più elastico, enzimi più veloci, nervi che conducono meglio), apre i capillari e prepara il sistema nervoso al gesto: 5–10 minuti di attività generale leggera, poi movimenti specifici a intensità crescente (serie di avvicinamento). Lo stretching statico prolungato prima della forza o dello scatto riduce la forza per qualche minuto e non previene gli infortuni; lo stretching dinamico e la mobilità attiva sì. Lo stretching statico ha il suo posto dopo l'allenamento o in sedute a parte, per guadagnare range dove manca (30–60 secondi, più volte, per settimane: il guadagno è soprattutto di tolleranza all'allungamento, non di lunghezza del muscolo).",
  perche:"Il muscolo freddo è più rigido e il fuso neuromuscolare più reattivo: lo strappo avviene quasi sempre a inizio sforzo o su un muscolo stanco. La flessibilità dipende dal sistema nervoso (quanto tollera l'allungamento) più che dalla lunghezza delle fibre: per questo si guadagna range in poche settimane e lo si perde in poche altre. Il foam roller cambia la percezione e la tolleranza al dolore per 10–20 minuti, non la lunghezza della fascia: utile come preparazione, inutile come «scioglimento» permanente.",
  pratica:"Un riscaldamento utile: 5 minuti di cardio leggero, mobilità dinamica delle articolazioni che lavoreranno (anche, caviglie, dorsale, spalle), attivazione dei muscoli pigri (gluteo medio, dentato, flessori profondi del collo), serie di avvicinamento con il carico. La mobilità che resta è quella allenata con forza nel range nuovo (il cosacco, il goblet con pausa in basso), non quella tirata passivamente. Il defaticamento serve al cliente per sentirsi bene e per rilasciare il sistema nervoso (respiro, camminata), non per «eliminare le tossine».",
  esempio:"Il cliente che fa 15 minuti di stretching statico prima di giocare a calcetto e si strappa comunque: aveva il muscolo rilassato e freddo. Cinque minuti di corsa, skip, affondi dinamici e qualche scatto progressivo lo proteggono di più.",
  segreto:"La mobilità si conquista nell'esercizio, non prima: una pausa di tre secondi in fondo al goblet squat insegna all'anca più di dieci minuti di stretching, perché il sistema nervoso impara a fidarsi di quel range mentre lavora. Lo stretching passivo chiede permesso; il carico nel range lo prende.",
  schede:["z-fuso-otg","z-fascia-tessuto","z-contrazione-muscolare","z-propriocezione","e-affondo-laterale","e-front-squat"]}
]);

/* ---- registrazione del tipo "esercizio" ---- */
KINDS.esercizio={label:"Esercizio",cls:"m",db:()=>DB.esercizi_schede};
const _anyById_conEsercizi = anyById;
anyById = function(id){ if(id && id.indexOf("e-")===0){ const it=DB.esercizi_schede.find(x=>x.id===id); return it?{kind:"esercizio",item:it}:null; } return _anyById_conEsercizi(id); };
PORTE.push({k:"esercizio",n:"Dagli esercizi",d:"Squat, stacco, panca, trazioni, affondi, plank…: quali muscoli lavorano, che gradi servono, gli errori e la loro causa, regressioni e progressioni, chi deve fare attenzione.",c:"var(--muscle)",i:"porta-mus"});
PRINCIPALI.push("esercizio");
if(typeof _PRINCIPALI_base!=="undefined"){ _PRINCIPALI_base.push("esercizio"); PROFILI.allena.ordine.unshift("esercizio"); PROFILI.mani.ordine.splice(3,0,"esercizio"); applicaProfilo(); }
const _blocchi_conSchedeEsercizi = blocchi;
blocchi = function(kind,it){
  if(kind!=="esercizio") return _blocchi_conSchedeEsercizi(kind,it);
  const nomi=ids=>(ids||[]).map(nomeOf).join(", ");
  return [
    {t:"dl",voci:[["Categoria",it.cat],["Attrezzo",it.attrezzo],["Muscoli primari",nomi(it.primari)+"."],["Muscoli secondari e stabilizzatori",nomi(it.secondari)+"."]]},
    {t:"p",h:"Articolazioni e gradi che servono",txt:it.gradi},
    {t:"p",h:"Esecuzione",txt:it.esecuzione},
    {t:"dl",h:"Errori frequenti e la loro causa",voci:it.errori},
    {t:"dl",h:"Regressioni e progressioni",voci:[["Più facile",it.regressioni],["Più difficile",it.progressioni]]},
    {t:"p",h:"Chi deve fare attenzione",txt:it.attenzione},
    {t:"segreto",txt:it.segreto}
  ];
};
const _collegamenti_conEsercizi = collegamenti;
collegamenti = function(kind,it){
  const box=(titolo,html)=>'<section><div class="seg" style="margin-bottom:8px">'+titolo+'</div>'+html+'</section>';
  if(kind==="esercizio"){
    let h=box("Muscoli primari",pills(it.primari))+box("Muscoli secondari",pills(it.secondari))+box("Articolazioni",pills(it.articolazioni));
    if(it.problemi&&it.problemi.length) h+=box("Problemi in cui conta",pills(it.problemi.filter(x=>anyById(x))));
    const T=DB.test.filter(q=>(q.schede||[]).some(s=>(it.articolazioni||[]).includes(s))).map(q=>q.id).slice(0,6);
    if(T.length) h+=box("Test utili prima di caricare",pills(T));
    const altri=DB.esercizi_schede.filter(e=>e.id!==it.id&&e.cat===it.cat).map(e=>e.id);
    if(altri.length) h+=box("Altri esercizi · "+it.cat,pills(altri));
    return h;
  }
  let h=_collegamenti_conEsercizi(kind,it);
  if(kind==="muscolo"){ const E=DB.esercizi_schede.filter(e=>(e.primari||[]).includes(it.id)).map(e=>e.id); const E2=DB.esercizi_schede.filter(e=>(e.secondari||[]).includes(it.id)).map(e=>e.id);
    if(E.length) h=box("Esercizi in cui è protagonista",pills(E))+h; if(E2.length) h+=box("Esercizi in cui aiuta",pills(E2)); }
  if(kind==="problema"){ const E=DB.esercizi_schede.filter(e=>(e.problemi||[]).includes(it.id)).map(e=>e.id); if(E.length) h=box("Esercizi collegati",pills(E))+h; }
  if(kind==="articolazione"){ const E=DB.esercizi_schede.filter(e=>(e.articolazioni||[]).includes(it.id)).map(e=>e.id); if(E.length) h+=box("Esercizi che la caricano",pills(E)); }
  return h;
};
/* lista raggruppata per categoria */
const _vistaLista_conEsercizi = vistaLista;
vistaLista = function(k){
  if(k!=="esercizio") return _vistaLista_conEsercizi(k);
  const ordine=["Gambe e anca","Spinta","Tirata","Braccia","Core"]; const gruppi={};
  DB.esercizi_schede.forEach(e=>{ (gruppi[e.cat]=gruppi[e.cat]||[]).push(e); });
  const card=e=>'<button class="card" data-go="esercizio/'+e.id+'" style="gap:3px"><span class="eyebrow">'+esc(e.attrezzo.split(",")[0])+'</span><h3 style="font-size:15.5px">'+esc(e.nome)+'</h3><p style="font-size:12.8px">'+esc((e.primari||[]).map(nomeOf).join(", "))+'</p></button>';
  return crumbs([["Home","home/"],["Dagli esercizi",null]])+
   '<h1 style="font-size:clamp(23px,5vw,32px);margin-bottom:6px">Dagli esercizi</h1>'+
   '<p style="margin:0 0 14px;color:var(--muted);max-width:66ch">Per ogni esercizio: quali muscoli lavorano (cliccabili), quali articolazioni e quanti gradi servono, come si esegue, gli errori frequenti con la loro causa, come renderlo più facile o più difficile, e chi deve fare attenzione.</p>'+
   '<div class="pills" style="margin-bottom:6px">'+pills(["z-ipertrofia-forza","z-sistemi-energetici","z-recupero","z-riscaldamento-mobilita","z-carico-progressivo"].filter(x=>anyById(x)))+'</div>'+
   ordine.filter(c=>gruppi[c]).map(c=>'<div class="seg" style="margin:18px 0 10px">'+esc(c)+' · '+gruppi[c].length+'</div><div class="grid g3">'+gruppi[c].map(card).join("")+'</div>').join("");
};
</script>
