<script>
/* Esercizi — parte 3: gamba e piede, testa e collo profondo, torace. Più il rendering nella scheda muscolo. */
Object.assign(DB.esercizi,{
 "m-gastrocnemio":{allunga:"In piedi contro il muro, gamba dietro tesa con il tallone a terra e il piede dritto (non in fuori), si piega il ginocchio davanti; 45 secondi, 3 volte. Sul gradino con il tallone che scende, ginocchio teso.",
  rinforza:"Sollevamenti sulle punte a ginocchio teso, lenti (3 secondi su, 3 giù), 3 serie da 15; poi su una gamba; poi dal gradino. Nella tendinopatia dell'Achille: eccentrici dal gradino (su con due gambe, giù con una) 3×15, due volte al giorno, 12 settimane.",
  casa:"Rullo sul polpaccio con l'altra gamba sopra per il peso, 2 minuti. Chi porta i tacchi tutto il giorno lo accorcia: allungamento ogni sera. Il polpaccio corto si vede nel test del ginocchio al muro: meno di 8 cm, caviglia da liberare."},
 "m-soleo":{allunga:"Come il gastrocnemio ma con il ginocchio della gamba dietro piegato: si sente più in basso, vicino al tendine; 45 secondi. È l'allungamento più importante per la dorsiflessione in accovacciata.",
  rinforza:"Sollevamenti sulle punte da seduti con un peso sulle ginocchia, o in piedi con le ginocchia piegate; 3 serie da 15–20. Il soleo regge 6–8 volte il peso del corpo nella corsa: è lui che si affatica per primo (il polpaccio «pesante» del corridore).",
  casa:"Pressione con i pollici nella parte profonda del polpaccio, a ginocchio piegato: 2 minuti. Crampi notturni: allungamento del soleo prima di dormire, idratazione, magnesio se carente. Mai massaggiare un polpaccio gonfio, caldo e dolente da un lato solo: prima escludere la trombosi."},
 "m-plantare-gracile":{allunga:"Come il gastrocnemio.",
  rinforza:"Non serve; lavora con il gastrocnemio.",
  casa:"Il «sasso nel polpaccio» (tennis leg) è spesso la rottura del gastrocnemio mediale, non del plantare: ghiaccio, cammino con il tallone rialzato, non massaggio nei primi giorni."},
 "m-tibiale-ant":{allunga:"In ginocchio seduti sui talloni con i piedi in flessione plantare (i dorsi a terra), 30–45 secondi. In piedi, dorso del piede appoggiato dietro a terra, ginocchio che avanza.",
  rinforza:"Camminata sui talloni, 30 secondi, 3 volte; dorsiflessione contro elastico da seduti, 3 serie da 15; da in piedi con la schiena al muro, si sollevano le punte lentamente. Nel dolore anteriore della gamba (shin splints): eccentrici lenti, 12 settimane.",
  casa:"Pressione lungo il bordo esterno della tibia, dal ginocchio alla caviglia, con il piede che si muove: 2 minuti. Chi inciampa sulla punta, soprattutto l'anziano: tibiale anteriore debole, camminata sui talloni ogni giorno."},
 "m-tibiale-post":{allunga:"Come il soleo, con il piede leggermente in eversione (verso l'esterno), e con il peso sul bordo interno. Raramente è corto: più spesso è debole.",
  rinforza:"Sollevamento su una punta sola con il tallone che va verso l'interno, lento, 3 serie da 12; inversione contro elastico da seduti con il piede in flessione plantare; «short foot» (accorciare il piede avvicinando le teste metatarsali al tallone senza arricciare le dita), 10 secondi per 10. È l'esercizio del piede piatto dell'adulto.",
  casa:"Pressione dietro e sotto il malleolo mediale, lungo il tendine, con il piede che inverte: 1 minuto. Scarpe con sostegno e, se il tendine è gonfio, plantare temporaneo; progressione del carico lenta (il tendine è povero di sangue dietro il malleolo). Sollevamento su una punta sola indolore prima di tornare a correre."},
 "m-peronei":{allunga:"Seduti, caviglia sul ginocchio opposto, si porta il piede in inversione (pianta verso l'alto e verso l'interno) con la mano, 30 secondi.",
  rinforza:"Eversione contro elastico da seduti, 3 serie da 15; sollevamento sulle punte con il peso sull'alluce (il peroneo lungo abbassa il primo raggio); equilibrio su una gamba a occhi aperti poi chiusi, 30 secondi, poi su un cuscino. Dopo una distorsione: 6 settimane di propriocezione ogni giorno.",
  casa:"Pressione lungo la faccia esterna della gamba, dalla testa del perone in giù, 2 minuti; pallina sotto il cuboide. Caviglia che «gira» spesso: peronei e equilibrio, ogni giorno, e scarpe con il tacco basso e largo."},
 "m-plantare":{allunga:"Dita del piede estese contro il muro con il tallone a terra, si avvicina il ginocchio al muro; 30 secondi. Rotolare una bottiglia d'acqua ghiacciata sotto la pianta, 5 minuti, nella fascite.",
  rinforza:"Short foot; raccogliere un asciugamano con le dita; sollevamento sulle punte con le dita estese su un asciugamano arrotolato (carica la fascia: è il protocollo della fascite), 3×12 lenti, a giorni alterni, 12 settimane.",
  casa:"Pallina sotto la pianta, dal tallone alle dita, 2–3 minuti al mattino prima di alzarsi; allungamento del polpaccio ogni giorno; scarpe con un po' di tacco e sostegno nella fase acuta, non scalzi su pavimenti duri. Il primo passo del mattino: muovere la caviglia nel letto prima di scendere."},
 "m-estensori-dita-piede":{allunga:"Come il tibiale anteriore, con le dita flesse: in ginocchio sui talloni.",
  rinforza:"Estensione delle dita contro un elastico; camminata sui talloni; sollevare solo le dita da terra tenendo l'avampiede giù.",
  casa:"Pressione sul dorso della gamba laterale alla tibia, 1 minuto. Dita a griffe con gli estensori lunghi che tirano: scarpe più larghe e alte in punta, intrinseci da risvegliare."},
 "m-flessori-dita-piede":{allunga:"Dita estese contro il muro o con la mano, caviglia in dorsiflessione; 30 secondi. Chi ha le dita a martello: ogni giorno.",
  rinforza:"Raccogliere biglie o un asciugamano; flessione delle dita contro elastico; sollevamento sulle punte con spinta finale delle dita. Flessore lungo dell'alluce: sollevamento su una punta con il peso sull'alluce (ballerini).",
  casa:"Pallina sotto l'arco e dietro il malleolo mediale, 2 minuti. Dolore dietro il malleolo interno nei ballerini e nei corridori in salita: flessore lungo dell'alluce, non Achille."},
 "m-intrinseci-piede":{allunga:"Dita allargate con le mani, ciascuna separata dalle altre, 30 secondi; dita estese contro il muro.",
  rinforza:"Short foot (accorciare il piede senza arricciare le dita), 10 secondi per 10, da seduti poi in piedi poi su una gamba; allargare le dita a ventaglio («toe spread»); sollevare l'alluce con le altre dita giù e viceversa; camminare scalzi su superfici diverse. Gli intrinseci forti sono il miglior plantare.",
  casa:"Pallina sotto la pianta, 2 minuti; separatori di dita in silicone la sera. Scarpe con la punta larga e la suola flessibile; un'ora al giorno scalzi in casa. Dita a martello riducibili: esercizi degli intrinseci ogni giorno per 3 mesi."},
 "m-massetere":{allunga:"Bocca aperta lentamente al massimo senza dolore, 10 secondi, 10 volte; apertura con la lingua sul palato (apre senza protrudere); pugno sotto il mento che oppone una leggera resistenza all'apertura.",
  rinforza:"Non si rinforza: è il muscolo più forte del corpo per unità di superficie. Si rinforzano l'apertura controllata e la consapevolezza: «labbra chiuse, denti separati, lingua sul palato» tutto il giorno.",
  casa:"Massaggio circolare con tre dita sull'angolo della mandibola, bocca socchiusa, 2 minuti; dall'interno con il pollice (guanto) sui punti dolenti. Niente chewing-gum, unghie, mordersi le labbra; bite notturno se c'è bruxismo; calore umido sulla guancia la sera. Controllare il serramento ogni ora: i denti non devono toccarsi."},
 "m-temporale":{allunga:"Come il massetere: apertura lenta e completa, lingua sul palato.",
  rinforza:"Non serve.",
  casa:"Massaggio con i polpastrelli sulla tempia, dalla parte sopra l'orecchio verso la fronte, bocca socchiusa, 2 minuti; la sera con calore. Cefalea temporale al risveglio = bruxismo: bite e abitudini. Occhiali con le stanghette troppo strette lo irritano."},
 "m-pterigoidei":{allunga:"Movimenti di lateralità della mandibola, lenti, 10 per lato; protrusione e retrazione con la lingua sul palato; apertura con una leggera resistenza laterale della mano.",
  rinforza:"Lateralità contro una lieve resistenza del dito, 10 per lato; apertura controllata senza deviazione davanti allo specchio.",
  casa:"Pterigoideo laterale: pressione intraorale dietro i molari superiori, verso l'alto e indietro, con delicatezza, 30 secondi. Mediale: dall'interno sulla faccia interna dell'angolo della mandibola. Click della mandibola che si apre storta: apertura davanti allo specchio tenendo il mento dritto, 10 volte, 3 volte al giorno."},
 "m-splenio":{allunga:"Seduto, testa flessa e ruotata dal lato opposto, mano che accompagna la nuca; 30 secondi.",
  rinforza:"Estensione con rotazione contro la lieve resistenza della mano, isometrica, 10 secondi per 10.",
  casa:"Pressione fra trapezio e sternocleidomastoideo, alla base del collo, mentre la testa ruota: 1 minuto. Dolore al vertice della testa e dietro l'occhio: trigger dello splenio del capo, più che «sinusite»."},
 "m-semispinale":{allunga:"Mento al petto con le mani intrecciate dietro la nuca che lasciano cadere il peso delle braccia (senza tirare); 30 secondi.",
  rinforza:"Estensione del collo da prono con il mento in dentro, sollevando la fronte di pochi centimetri, 10 secondi per 10. Il semispinale forte protegge dalla testa in avanti.",
  casa:"Due dita ai lati della nuca, sotto l'occipite, premendo in alto mentre il mento si retrae: 1 minuto. Dove passa il nervo grande occipitale: la cefalea «dalla nuca all'occhio» si tratta qui con delicatezza."},
 "m-lungo-collo":{allunga:"Non si allunga: è quasi sempre debole e inibito.",
  rinforza:"Retrazione del mento da supino (doppio mento) senza sollevare la testa, 10 secondi per 10, senza che lo sternocleidomastoideo scatti; poi sollevare la testa di un centimetro mantenendo la retrazione, 5 secondi; poi da seduti contro la gravità. Progressione in 6–8 settimane: è il trattamento della cervicalgia cronica e del colpo di frusta.",
  casa:"Il test: supino, retrai il mento e tieni 10 secondi, con le dita che palpano lo sternocleidomastoideo: se scatta, i flessori profondi non lavorano. Ogni ora al computer: 5 retrazioni. Cuscino che tenga la nuca e non la testa."},
 "m-lungo-capo":{allunga:"Non si allunga.",
  rinforza:"Come il lungo del collo: retrazione del mento (annuire piccolo) con la testa che non si solleva, 10 per 10 secondi.",
  casa:"Il «sì» piccolo e lento di cinque gradi, 10 volte, è l'esercizio della cefalea cervicogenica."},
 "m-platisma":{allunga:"Testa estesa e ruotata, labbra chiuse, si abbassa l'angolo della bocca; 20 secondi.",
  rinforza:"Non serve.",
  casa:"Carezze lente dal mento alle clavicole, 1 minuto. Chi tiene il collo «tirato» dallo stress e sente la pelle del collo tesa: respirare, abbassare le spalle, sciogliere le labbra."},
 "m-sopraioidei":{allunga:"Bocca chiusa, testa estesa dolcemente, lingua che spinge sul palato; 20 secondi. Sbadiglio con la testa in estensione.",
  rinforza:"Deglutizione con la lingua sul palato e i denti separati, 10 volte; apertura della bocca contro la resistenza della mano sotto il mento, isometrica, 5 secondi per 10.",
  casa:"Pressione sotto il mento con i pollici, dal mento verso l'osso ioide, con la bocca socchiusa: 1 minuto. Testa in avanti = sopraioidei che tirano la mandibola indietro = bocca che si serra: correggere la postura della testa aiuta la mandibola."},
 "m-sottoioidei":{allunga:"Testa in estensione con la lingua sul palato, 20 secondi; deglutire in estensione.",
  rinforza:"Deglutizione consapevole; non serve forza.",
  casa:"Scorrimento laterale dell'osso ioide fra pollice e indice, delicato, 30 secondi. «Nodo in gola» senza cause mediche (dopo esclusione): ioide bloccato, respiro alto, sottoioidei e sopraioidei tesi."},
 "m-mimici":{allunga:"Smorfie lente al massimo in ogni direzione, 10 volte, davanti allo specchio.",
  rinforza:"Nella paralisi facciale: esercizi mirati davanti allo specchio (sorriso simmetrico, chiusura dell'occhio, fischio), poche ripetizioni ben fatte, mai esagerate: l'eccesso crea sincinesie.",
  casa:"Automassaggio del viso dal centro verso l'esterno, 2 minuti, con calore nella paralisi. Fronte corrugata e occhi strizzati dallo stress: rilasciare consapevolmente, soprattutto fra le sopracciglia."},
 "m-succlavio":{allunga:"Come il pettorale piccolo: supino con l'asciugamano lungo la colonna, braccia aperte.",
  rinforza:"Non serve.",
  casa:"Pressione sotto la clavicola, nella sua parte media, con il braccio che si solleva: 1 minuto. Dolore sotto la clavicola in chi ha la spalla «chiusa» in avanti."},
 "m-intercostali":{allunga:"Braccio in alto e inclinazione laterale con inspirazione profonda nel lato che si apre; 30 secondi. Respiro nelle costole con le mani sui fianchi che sentono aprirsi.",
  rinforza:"Espirazione contro resistenza (soffiare in una bottiglia d'acqua con una cannuccia), 10 respiri; respiri lenti e profondi con le mani che guidano.",
  casa:"Dita negli spazi intercostali, dal dorso verso lo sterno, con il respiro, 2 minuti. Dopo una tosse lunga o una costola incrinata: respirare a fondo 10 volte ogni ora per non chiudere il torace."},
 "m-dentato-post":{allunga:"Superiore: come i romboidi (abbracciarsi). Inferiore: inclinazione laterale con rotazione e inspirazione profonda.",
  rinforza:"Non serve.",
  casa:"Pallina sul dorso, sotto la scapola (superiore) o sulle ultime coste (inferiore), 2 minuti. Il dolore «sotto la scapola, profondo» che non va via con i romboidi: dentato posteriore superiore."},
 "m-trasverso-torace":{allunga:"Braccia in alto, inspirazione profonda, apertura del petto; 20 secondi.",
  rinforza:"Espirazione completa con le costole che si chiudono.",
  casa:"Pressione ai lati dello sterno, negli spazi fra le cartilagini, 1 minuto. Dolore dietro lo sterno «da ansia» dopo esclusione cardiaca: respiro e questo muscolo."},
 "m-popliteo":{allunga:"Seduti con la gamba tesa, si ruota la tibia verso l'esterno con la mano sul piede, 30 secondi.",
  rinforza:"Rotazione interna della tibia contro elastico da seduti con il ginocchio a 90°, 3 serie da 15; squat lento con le ginocchia leggermente piegate.",
  casa:"Pressione nel cavo popliteo, sotto l'interlinea, con il ginocchio piegato: 1 minuto. Ginocchio che non si sblocca in estensione e dolore dietro il ginocchio in discesa: popliteo."}
});

/* ---- rendering nella scheda muscolo ---- */
const _blocchi_conEsercizi = blocchi;
blocchi = function(kind,it){
  const B=_blocchi_conEsercizi(kind,it);
  if(kind!=="muscolo") return B;
  const E=DB.esercizi[it.id]; if(!E) return B;
  const ins=[
    {t:"p",h:"Come si allunga",txt:E.allunga},
    {t:"p",h:"Come si rinforza",txt:E.rinforza},
    {t:"p",h:"Da fare a casa",txt:E.casa}
  ];
  const k=B.findIndex(b=>b.t==="segreto");
  return k<0?B.concat(ins):B.slice(0,k).concat(ins,B.slice(k));
};
</script>
