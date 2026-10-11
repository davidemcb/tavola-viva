<script>
/* Test clinici — parte 2: anca, ginocchio, caviglia e piede, generali. Più registrazione del tipo. */
DB.test = DB.test.concat([
 {id:"q-versione-bacino",nome:"Valutazione dell'antiversione e della retroversione del bacino",alias:["test dell'antiversione","test della retroversione","inclinazione del bacino test","inclinometro pelvico","SIAS-SIPS","basculamento del bacino test","tilt pelvico"],regione:"Bacino",cerca:"Se il bacino è inclinato in avanti (antiversione: lordosi aumentata, pancia in fuori, glutei indietro) o indietro (retroversione: lordosi piatta, glutei «sotto», bacino avanti), e soprattutto se questa posizione è rigida o solo un'abitudine.",
  posizione:"In piedi, scalzo, nella posizione abituale (non «in posa»), poi supino e prono sul lettino.",esecuzione:"1) Osservazione di profilo: la linea che unisce la spina iliaca antero-superiore (SIAS) e la postero-superiore (SIPS) è normalmente inclinata di 10–15° con la SIAS più bassa (uomini 10°, donne fino a 15°). Si misura mettendo pollice e indice sulle due spine, o con un inclinometro pelvico: oltre 15–20° è antiversione, sotto 5° o SIAS più alta della SIPS è retroversione. 2) Prova della mano: in piedi contro il muro, la mano passa fra lombare e muro? Se passa tutta la mano o di più: lordosi aumentata (antiversione); se non passa nemmeno la mano: lombare piatta (retroversione). 3) Controllo attivo: il cliente, in piedi o a quattro zampe, porta il bacino in avanti e indietro al massimo (basculamento). Si guarda se sa farlo, se lo fa con il bacino o con le ginocchia, e se riesce a tornare nel mezzo: chi è rigido in antiversione non riesce a retrovertere, e viceversa. 4) Test di Thomas: coscia pendente che si solleva = ileopsoas corto (tira il bacino in antiversione); ginocchio che si estende = retto femorale corto. 5) Flessibilità degli ischiocrurali (sollevamento della gamba tesa senza dolore nervoso, o angolo popliteo): corti = tirano il bacino in retroversione. 6) Forza di glutei e addominali: ponte su una gamba (gluteo), sollevamento delle gambe con la lombare che resta appoggiata (addominali); se cedono, il bacino cade in antiversione per mancanza di chi lo tiene. 7) Prono: si osserva la lordosi a riposo e si prova a correggerla con una pressione sul sacro: se si corregge è un atteggiamento, se resta è strutturale (anca, colonna).",
  positivo:"Antiversione: angolo SIAS-SIPS oltre 15–20°, mano che passa abbondante dietro la lombare, Thomas positivo, addominali e glutei deboli, lombare che si scava appena il cliente sta in piedi. Retroversione: SIAS alla stessa altezza o più alta della SIPS, lombare piatta contro il muro, ischiocrurali corti, grande gluteo e addominali che tengono il bacino «sotto», spesso con ginocchia in iperestensione (sway back). In entrambi i casi conta soprattutto se il basculamento attivo è libero o bloccato.",
  significa:"L'antiversione da sola non è una malattia: 10–15° sono normali e in gravidanza aumentano. È un problema quando è rigida (il cliente non sa retrovertere), quando c'è dolore lombare in estensione (stare in piedi, camminare a lungo) e quando le faccette lombari e L5–S1 sono sovraccaricate. In questi casi si allungano ileopsoas e retto femorale, si risvegliano grande gluteo e addominali profondi, si insegna il basculamento. La retroversione rigida sovraccarica i dischi (seduti a lungo, chinarsi) e toglie all'anca l'estensione: si allungano gli ischiocrurali, si mobilizza l'anca in estensione e si recupera la lordosi con l'esercizio, non con il massaggio da solo. Il bacino che sta nel mezzo e sa muoversi in tutte e due le direzioni è l'obiettivo, non un angolo preciso.",
  affidabilita:"La misura SIAS-SIPS con le dita è grossolana (le spine sono difficili da trovare nei fianchi pieni, e l'asimmetria è frequente): vale come confronto nel tempo, non come numero assoluto. Il basculamento attivo e il test di Thomas sono i più utili in pratica.",attenzione:"Non si corregge un bacino in antiversione forzando la retroversione in chi ha un'ernia lombare in fase acuta o una spondilolistesi: prima la valutazione medica. In gravidanza l'antiversione è fisiologica.",
  schede:["mv-bacino","post-iperlordosi","post-crociata-inf","post-sway","post-bacino-ruotato","m-ileopsoas","m-gluteo-massimo","m-ischiocrurali","m-retto-addominale","m-erettori","a-lombo-sacrale","a-coxo-femorale","q-thomas","q-schober","z-flessione-rilassamento"]},
 {id:"q-fadir-faber",nome:"Test FADIR e FABER dell'anca",alias:["fadir","faber","test di Patrick","test del conflitto femoro-acetabolare","impingement dell'anca"],regione:"Anca",cerca:"Conflitto femoro-acetabolare e lesione del labbro (FADIR); artrosi, capsula e sacro-iliaca (FABER).",
  posizione:"Supino.",esecuzione:"FADIR: anca flessa a 90°, poi addotta e ruotata internamente. FABER (Patrick): tallone sul ginocchio opposto (flessione, abduzione, rotazione esterna) e leggera pressione sul ginocchio con l'altra mano sulla SIAS opposta.",
  positivo:"FADIR: dolore inguinale profondo, a volte scatto. FABER: dolore inguinale (anca) o posteriore (sacro-iliaca); ginocchio che resta alto rispetto all'altro lato (rigidità).",significa:"FADIR positivo con rotazione interna ridotta: conflitto o labbro, invio per valutazione. FABER: distingue anca (dolore davanti) da sacro-iliaca (dolore dietro).",
  affidabilita:"FADIR molto sensibile per il conflitto; FABER utile per orientare.",attenzione:"Non si forza in anche protesizzate.",
  schede:["a-coxo-femorale","g-labbro-acetabolare","mv-anca-ri","p-calzino","p-pubalgia"]},
 {id:"q-trendelenburg-test",nome:"Test di Trendelenburg e squat monopodalico",alias:["test di trendelenburg","single leg squat","squat su una gamba","step down test","valgo dinamico test"],regione:"Anca",cerca:"Forza e controllo del gluteo medio; valgo dinamico del ginocchio.",
  posizione:"In piedi, il terapista dietro con le mani sulle creste iliache.",esecuzione:"Trendelenburg: il cliente solleva una gamba e sta sull'altra per 30 secondi. Squat monopodalico: su una gamba, piega il ginocchio lentamente 5 volte davanti a uno specchio.",
  positivo:"Trendelenburg: il bacino cade dal lato della gamba sollevata (o il tronco si inclina verso l'appoggio per compensare). Squat: il ginocchio cade verso l'interno rispetto al secondo dito, il bacino cade, il tronco oscilla.",significa:"Gluteo medio debole o inibito: tutto l'arto inferiore (ginocchio, caviglia) e la lombare ne pagano il prezzo a ogni passo.",
  affidabilita:"Lo squat monopodalico è il test più informativo per il dolore anteriore di ginocchio.",attenzione:"Sostegno a portata di mano per chi ha equilibrio incerto.",
  schede:["m-gluteo-medio","z-trendelenburg","z-valgo-dinamico","p-ginocchio-scale","p-anca-laterale-notte","post-ginocchio"]},
 {id:"q-ober",nome:"Test di Ober",alias:["ober","test della bandelletta","test del tensore della fascia lata"],regione:"Anca",cerca:"Accorciamento di tensore della fascia lata e bandelletta ileotibiale.",
  posizione:"Decubito laterale sul lato sano, gamba sotto flessa, bacino stabilizzato dalla mano del terapista.",esecuzione:"La gamba superiore viene portata in estensione e leggera abduzione, poi lasciata scendere verso il lettino con il ginocchio a 90° (o teso, nella variante).",
  positivo:"La gamba resta sospesa sopra l'orizzontale e non scende verso il lettino.",significa:"TFL e bandelletta corti: tirano la rotula verso l'esterno e comprimono il trocantere.",
  affidabilita:"Moderata; serve stabilizzare bene il bacino.",attenzione:"Delicato nella sindrome dolorosa del trocantere (adduzione dolorosa).",
  schede:["m-tfl","f-lata","p-ginocchio-scale","p-anca-laterale-notte"]},
 {id:"q-lachman",nome:"Test di Lachman e cassetto anteriore/posteriore",alias:["lachman","cassetto anteriore","cassetto posteriore","test dei crociati","drawer test"],regione:"Ginocchio",cerca:"Lesione dei legamenti crociati.",
  posizione:"Supino. Lachman: ginocchio a 20–30°. Cassetto: ginocchio a 90°, piede fermo sul lettino.",esecuzione:"Lachman: una mano tiene il femore, l'altra tira la tibia in avanti. Cassetto anteriore: si tira la tibia in avanti con entrambe le mani; posteriore: si spinge indietro.",
  positivo:"Traslazione eccessiva rispetto all'altro lato e arresto molle invece che netto.",significa:"Crociato anteriore (traslazione in avanti) o posteriore (indietro) lesionati: invio ortopedico. Attenzione al falso cassetto anteriore nelle lesioni del posteriore (la tibia parte già indietro).",
  affidabilita:"Lachman è il più affidabile per il crociato anteriore.",attenzione:"Non si esegue nel ginocchio gonfio e doloroso acuto: prima l'imaging.",
  schede:["g-crociati","a-femoro-tibiale","p-ginocchio-cede","m-ischiocrurali"]},
 {id:"q-mcmurray",nome:"Test di McMurray e di Thessaly",alias:["mcmurray","thessaly","test dei menischi","test meniscale","apley"],regione:"Ginocchio",cerca:"Lesione meniscale.",
  posizione:"McMurray: supino. Thessaly: in piedi su una gamba, ginocchio a 20°.",esecuzione:"McMurray: ginocchio flesso al massimo, si estende lentamente ruotando la tibia esternamente (menisco mediale) o internamente (laterale) con una mano sulla rima articolare. Thessaly: il cliente ruota il corpo tre volte per lato sul ginocchio piegato, tenuto per le mani dal terapista.",
  positivo:"Scatto palpabile o dolore sulla rima articolare; nel Thessaly dolore sulla rima, blocco o sensazione di cedimento.",significa:"Menisco lesionato, più spesso il mediale. Un blocco in estensione è un frammento incastrato.",
  affidabilita:"Thessaly è il più affidabile; McMurray è specifico ma poco sensibile.",attenzione:"Non si esegue nel ginocchio bloccato o acutamente gonfio.",
  schede:["g-menischi","a-femoro-tibiale","p-ginocchio-cede","p-dietro-ginocchio","mv-ginocchio-rot"]},
 {id:"q-ballottamento",nome:"Ballottamento rotuleo e test dell'apprensione rotulea",alias:["ballottamento","ballottamento rotuleo","versamento del ginocchio","apprensione rotulea","test di scorrimento rotuleo"],regione:"Ginocchio",cerca:"Versamento articolare del ginocchio; instabilità della rotula.",
  posizione:"Supino, ginocchio esteso.",esecuzione:"Ballottamento: una mano spreme il liquido dalla tasca sovrarotulea verso il basso, l'altra preme la rotula contro il femore. Apprensione: con il ginocchio a 20–30°, si spinge la rotula verso l'esterno.",
  positivo:"Ballottamento: la rotula «rimbalza» sul femore (c'è liquido). Apprensione: il cliente contrae il quadricipite o si irrigidisce temendo che la rotula esca.",significa:"Versamento: qualcosa dentro l'articolazione è irritato o lesionato, e il quadricipite si inibisce; dopo un trauma, un versamento entro due ore è sangue (crociato, frattura). Apprensione: instabilità rotulea.",
  affidabilita:"Buona.",attenzione:"Versamento post-traumatico rapido: invio.",
  schede:["a-femoro-rotulea","z-inibizione-reciproca","m-vasto-mediale","p-ginocchio-cede","b-prepatellare"]},
 {id:"q-ginocchio-muro",nome:"Test del ginocchio al muro (dorsiflessione)",alias:["ginocchio al muro","knee to wall","lunge test","test di dorsiflessione","weight bearing lunge"],regione:"Caviglia",cerca:"Mobilità della caviglia in dorsiflessione in carico.",
  posizione:"In ginocchio o in piedi di fronte a un muro, il piede da esaminare avanti.",esecuzione:"Il cliente porta il ginocchio a toccare il muro senza staccare il tallone, allontanando progressivamente il piede; si misura la distanza fra alluce e muro quando il tallone inizia a staccarsi.",
  positivo:"Meno di 8–10 cm, o differenza fra i due lati oltre 2 cm.",significa:"Caviglia rigida: polpaccio corto o astragalo che non scivola indietro. Il corpo cercherà i gradi mancanti al ginocchio, all'anca o alla lombare.",
  affidabilita:"Molto buona e ripetibile: ideale per misurare i progressi.",attenzione:"Nessuna.",
  schede:["mv-caviglia-dorsi","a-tibio-tarsica","m-soleo","m-gastrocnemio","p-accovacciarsi","p-tallone","k-caviglia-lombare"]},
 {id:"q-cassetto-caviglia",nome:"Cassetto anteriore della caviglia e talar tilt",alias:["cassetto anteriore della caviglia","talar tilt","test dei legamenti della caviglia","regole di Ottawa"],regione:"Caviglia",cerca:"Lesione dei legamenti laterali della caviglia (peroneo-astragalico anteriore, peroneo-calcaneare); con le regole di Ottawa, necessità di radiografia.",
  posizione:"Seduto o supino, caviglia in leggera flessione plantare.",esecuzione:"Cassetto: una mano fissa la tibia, l'altra tira il calcagno in avanti. Talar tilt: si inclina il calcagno in inversione. Ottawa: dolore alla pressione sul margine posteriore dei malleoli, sulla base del quinto metatarso o sullo scafoide, o impossibilità a fare quattro passi.",
  positivo:"Traslazione o inclinazione eccessive rispetto all'altro lato, con arresto molle. Ottawa positive: radiografia.",significa:"Legamento peroneo-astragalico anteriore (cassetto) o calcaneare (tilt) lesionati o lassi: instabilità meccanica.",
  affidabilita:"Buona a 4–5 giorni dal trauma (in acuto il gonfiore maschera).",attenzione:"Se Ottawa positive, prima la radiografia.",
  schede:["g-laterali-caviglia","a-tibio-tarsica","p-caviglia-recidiva","m-peronei"]},
 {id:"q-thompson",nome:"Test di Thompson",alias:["thompson","test della rottura dell'Achille","squeeze del polpaccio"],regione:"Caviglia",cerca:"Rottura completa del tendine d'Achille.",
  posizione:"Prono, piedi fuori dal lettino.",esecuzione:"Il terapista stringe il polpaccio con la mano.",
  positivo:"Il piede non si flette plantarmente (normalmente si muove).",significa:"Il tendine d'Achille è rotto: urgenza ortopedica, nessun trattamento manuale.",
  affidabilita:"Molto alta.",attenzione:"Da fare sempre dopo una «frustata» al polpaccio.",
  schede:["d-achille","m-gastrocnemio","m-soleo","p-crampi-polpaccio"]},
 {id:"q-heel-raise",nome:"Single heel raise e segno delle troppe dita",alias:["single heel raise","sollevamento su una punta","troppe dita","too many toes","test del tibiale posteriore","navicular drop"],regione:"Piede",cerca:"Funzione del tibiale posteriore e cedimento dell'arco.",
  posizione:"In piedi, il terapista dietro.",esecuzione:"Troppe dita: osservare da dietro quante dita si vedono lateralmente al tallone (normale: 1–2). Heel raise: il cliente si solleva su una punta sola, dieci volte, osservando il tallone. Navicular drop: altezza dello scafoide da seduto e in piedi.",
  positivo:"Troppe dita (3 o più) da un lato; nel sollevamento il tallone non ruota verso l'interno o non si riesce a sollevarsi; navicular drop oltre 10 mm.",significa:"Tibiale posteriore che cede, arco che crolla: piede piatto dell'adulto in fase iniziale, quando è ancora recuperabile.",
  affidabilita:"Buona; il sollevamento su una punta è il test chiave.",attenzione:"Sostegno a portata di mano.",
  schede:["m-tibiale-post","d-tibiale-post","g-spring","post-piede","p-piede-piatto"]},
 {id:"q-argano",nome:"Test dell'argano (windlass) e test di Jack",alias:["test dell'argano","windlass test","jack test","estensione dell'alluce test"],regione:"Piede",cerca:"Funzione della fascia plantare e dell'arco nella spinta.",
  posizione:"In piedi, piede a terra.",esecuzione:"Il terapista estende passivamente l'alluce.",
  positivo:"L'arco non si solleva e il calcagno non ruota verso l'interno; oppure dolore al tallone durante l'estensione (fascite).",significa:"Meccanismo dell'argano inefficiente: fascia lassa, alluce rigido o arco crollato; il piede non diventa rigido per spingere.",
  affidabilita:"Buona per la fascite (dolore) e per la funzione dell'arco.",attenzione:"Nessuna.",
  schede:["z-argano","f-plantare","m-plantare","p-tallone","mv-alluce"]},
 {id:"q-homans-tvp",nome:"Valutazione della trombosi venosa profonda",alias:["homans","test di homans","trombosi test","TVP","score di Wells"],regione:"Arto inferiore",cerca:"Sospetto di trombosi venosa profonda: la controindicazione più importante del massaggio.",
  posizione:"Supino.",esecuzione:"Confronto delle circonferenze dei polpacci 10 cm sotto la tuberosità tibiale; osservazione di calore, rossore, vene superficiali dilatate; anamnesi (immobilità, viaggio lungo, intervento, gesso, pillola, tumore, gravidanza). Il test di Homans (dolore al polpaccio in dorsiflessione) è inaffidabile e non va usato per escludere.",
  positivo:"Polpaccio gonfio di oltre 2–3 cm rispetto all'altro, caldo, dolente, con fattori di rischio.",significa:"Trombosi finché non si dimostra il contrario: niente massaggio, invio medico lo stesso giorno (ecodoppler).",
  affidabilita:"La clinica e lo score di Wells sono moderati; conta l'invio tempestivo.",attenzione:"Mai massaggiare un polpaccio sospetto: un coagulo può staccarsi.",
  schede:["v-vene-profonde","p-crampi-polpaccio","p-gambe-gonfie","m-soleo"]},
 {id:"q-romberg-fukuda",nome:"Test di Romberg e di Fukuda",alias:["romberg","fukuda","unterberger","test dell'equilibrio","test posturale a occhi chiusi"],regione:"Postura",cerca:"Quale sistema sensoriale domina la postura: vista, vestibolo, propriocezione.",
  posizione:"In piedi, piedi uniti, braccia lungo i fianchi (Romberg) o avanti (Fukuda).",esecuzione:"Romberg: 30 secondi a occhi aperti, poi 30 a occhi chiusi; si osserva l'oscillazione. Fukuda: marcia sul posto a occhi chiusi, 50 passi, ginocchia alte, braccia avanti; si misura la rotazione e lo spostamento.",
  positivo:"Romberg: oscillazione o caduta solo a occhi chiusi. Fukuda: rotazione oltre 30° o spostamento oltre 1 metro.",significa:"Romberg positivo: il cliente si regge con la vista, la propriocezione o il vestibolo sono deficitari. Fukuda: rotazione verso il lato di un vestibolo ipofunzionante o di un'asimmetria del tono (cervicale, podalica).",
  affidabilita:"Orientativi; vanno ripetuti e combinati con il resto.",attenzione:"Stare vicino al cliente: può cadere.",
  schede:["post-recettori","post-catene-asc-disc","z-propriocezione","m-suboccipitali","p-cervicale-vertigini"]},
 {id:"q-isometrico",nome:"Contrazione isometrica: tendine o borsa?",alias:["contrazione isometrica","test isometrico","tendine o borsa","test di contrazione resistita"],regione:"Generale",cerca:"Distinguere un dolore tendineo da uno di borsa, capsula o legamento.",
  posizione:"Qualsiasi, con l'articolazione in posizione neutra e ferma.",esecuzione:"Il cliente contrae il muscolo contro la resistenza del terapista senza che l'articolazione si muova (isometrica), per 5 secondi; poi si preme sulla struttura dolente a muscolo rilassato.",
  positivo:"Dolore durante la contrazione = tendine o muscolo. Dolore alla pressione senza dolore alla contrazione = borsa, capsula, legamento o osso.",significa:"Il tendine fa male quando lavora; la borsa quando viene schiacciata. Cambia tutto il trattamento: frizioni e carico per il tendine, riposo dalla compressione per la borsa.",
  affidabilita:"Molto utile come primo filtro.",attenzione:"Nessuna.",
  schede:["d-generale","b-generale","z-tenosinovite","b-subacromiale","d-sovraspinato"]},
 {id:"q-sit-to-stand",nome:"Sit-to-stand e appoggio monopodalico (funzionalità e cadute)",alias:["sit to stand","alzarsi dalla sedia","test della sedia","appoggio monopodalico","single leg stance","test di equilibrio"],regione:"Generale",cerca:"Forza delle gambe (sarcopenia) e equilibrio; rischio di caduta nell'anziano.",
  posizione:"Seduto su una sedia senza braccioli; poi in piedi.",esecuzione:"Sit-to-stand: alzarsi e sedersi 5 volte senza usare le mani, cronometrando. Appoggio monopodalico: stare su una gamba sola a occhi aperti, cronometrando.",
  positivo:"Sit-to-stand oltre 15 secondi o impossibile senza mani; appoggio monopodalico sotto 10 secondi (sotto 5 negli anziani = rischio di caduta alto).",significa:"Forza e controllo insufficienti: la postura si chiude, le cadute aumentano, le anche e le ginocchia non sono protette. Il rimedio è l'esercizio di forza e di equilibrio, non il massaggio.",
  affidabilita:"Ottima, validata, ripetibile.",attenzione:"Vicino al cliente.",
  schede:["post-anziano","m-quadricipite","m-gluteo-massimo","p-alzarsi","z-propriocezione"]}
]);

/* ---- registrazione del tipo "test" ---- */
KINDS.test={label:"Test clinico",cls:"a",db:()=>DB.test};
const _anyById_conTest = anyById;
anyById = function(id){ if(id && id.indexOf("q-")===0){ const it=DB.test.find(x=>x.id===id); return it?{kind:"test",item:it}:null; } return _anyById_conTest(id); };
PORTE.push({k:"test",n:"Dai test clinici",d:"Ogni test: che cosa cerca, come si esegue, quando è positivo, che cosa significa e quanto ci si può fidare.",c:"var(--joint)",i:"porta-art"});
PRINCIPALI.push("test");
const _blocchi_conTest = blocchi;
blocchi = function(kind,it){
  if(kind!=="test") return _blocchi_conTest(kind,it);
  return [
    {t:"p",h:"Che cosa cerca",txt:it.cerca},
    {t:"dl",voci:[["Posizione",it.posizione],["Esecuzione",it.esecuzione],["È positivo se",it.positivo]]},
    {t:"p",h:"Che cosa significa",txt:it.significa},
    {t:"dl",voci:[["Quanto ci si può fidare",it.affidabilita],["Attenzione",it.attenzione]]}
  ];
};
const _collegamenti_conTest = collegamenti;
collegamenti = function(kind,it){
  if(kind!=="test") return _collegamenti_conTest(kind,it);
  const box=(titolo,html)=>'<section><div class="seg" style="margin-bottom:8px">'+titolo+'</div>'+html+'</section>';
  return box("Schede collegate",pills((it.schede||[]).filter(x=>anyById(x))))+box("Regione",'<span class="pill plain">'+esc(it.regione||"")+'</span>');
};
/* nelle schede di articolazioni, problemi, muscoli: i test che le riguardano */
const _collegamenti_testInversi = collegamenti;
collegamenti = function(kind,it){
  let h=_collegamenti_testInversi(kind,it);
  if(kind==="test") return h;
  const T=DB.test.filter(q=>(q.schede||[]).indexOf(it.id)>=0).map(q=>q.id);
  if(T.length) h+='<section><div class="seg" style="margin-bottom:8px">Test clinici</div>'+pills(T)+'</section>';
  return h;
};
</script>
