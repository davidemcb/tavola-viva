<script>
/* =========================================================
   OBIETTIVI per «Fai scheda» (scheda anche senza problemi) e lavoro generale per zona
   (per il problema scritto a mano dal trainer). Stesso formato di DB.programma: "e-id|serie" oppure "Testo|serie|m-id".
   ========================================================= */
DB.obiettivi = {
 forza:{n:"Forza",d:"Alzare più carico sui fondamentali, con tecnica pulita",
  nota:"La forza cresce con pochi esercizi grandi, carichi che salgono piano e recuperi lunghi (2–3 minuti). La tecnica viene prima del peso: un'alzata brutta non conta.",
  f1:["e-squat|3×8","e-stacco-rumeno|3×8","e-panca|3×8","e-rematore|3×8","e-plank|3×30 secondi","e-farmer-walk|3×30 metri"],
  f2:["e-squat|4×5","e-stacco|4×5","e-panca|4×5","e-trazioni|4×5","e-military-press|3×6","e-pallof-press|3×10 per lato"],
  f3:["e-squat|5×3","e-stacco|5×3","e-panca|5×3","e-trazioni|4×4","e-hip-thrust|3×6","e-hollow|3×20 secondi"]},
 massa:{n:"Massa muscolare",d:"Ipertrofia: volume, 8–12 ripetizioni, muscolo che lavora fino a quasi cedere",
  nota:"Il muscolo cresce con 10–20 serie a settimana per gruppo, vicine al cedimento ma non oltre, proteine sufficienti e sonno. Le ultime due ripetizioni devono costare.",
  f1:["e-squat|3×12","e-affondi|3×10 per gamba","e-panca|3×12","e-rematore|3×12","e-military-press|3×12","e-curl|2×15"],
  f2:["e-front-squat|4×10","e-stacco-rumeno|4×10","e-hip-thrust|3×12","e-panca|4×10","e-trazioni|4×8","e-alzate-laterali|3×15","e-leg-curl|3×12"],
  f3:["e-squat|4×8","e-leg-press|3×12","e-stacco-rumeno|4×8","e-dip|3×10","e-pullover|3×12","e-face-pull|3×15","e-calf-raise|4×15"]},
 dimagrimento:{n:"Dimagrimento e ricomposizione",d:"Perdere grasso tenendo il muscolo: pesi più cardio, non solo cardio",
  nota:"Il grasso si perde a tavola; la palestra serve a tenere il muscolo e ad alzare il consumo. Prima i pesi, poi il cardio. Niente digiuni prima della seduta.",
  f1:["e-squat|3×15","e-flessioni|3×10","e-rematore|3×12","e-step-up|3×10 per gamba","e-plank|3×30 secondi","Cardio a ritmo di conversazione (cammino veloce, bici, ellittica)|20–30 minuti"],
  f2:["e-kettlebell-swing|4×15","e-affondi|3×12 per gamba","e-panca|3×12","e-trazioni|3×8","e-farmer-walk|3×40 metri","Intervalli: 1 minuto forte, 2 minuti piano (bici, corsa, vogatore)|8 ripetizioni"],
  f3:["e-stacco|4×6","e-squat-bulgaro|3×10 per gamba","e-dip|3×10","e-rematore|4×10","e-hollow|3×20 secondi","Intervalli 30/30 (30 secondi forte, 30 piano)|10–12 ripetizioni"]},
 tono:{n:"Tonificazione generale",d:"Sentirsi più solidi dappertutto, senza cercare il massimale",
  nota:"Tonificare vuol dire fare forza con moderazione: 10–15 ripetizioni, tutto il corpo a ogni seduta, costanza per dodici settimane. Il muscolo «lungo e sottile» non esiste: esiste il muscolo allenato.",
  f1:["e-squat|3×12","e-hip-thrust|3×12","e-flessioni|3×8","e-rematore|3×12","e-dead-bug|3×8 per lato","e-plank|3×20 secondi"],
  f2:["e-sumo-squat|3×12","e-affondo-laterale|3×10 per lato","e-alzate-laterali|3×12","e-face-pull|3×15","e-crunch|3×15","e-calf-raise|3×15"],
  f3:["e-squat-bulgaro|3×10 per gamba","e-stacco-rumeno|3×10","e-military-press|3×10","e-trazioni|3×6","e-pallof-press|3×10 per lato","e-farmer-walk|3×30 metri"]},
 mobilita:{n:"Mobilità e postura",d:"Muoversi meglio, stare dritti senza sforzo, articolazioni che arrivano dove devono",
  nota:"La mobilità che resta è quella allenata con il carico: scendere in profondità con controllo vale più di dieci minuti di stretching. Ogni seduta finisce con due minuti di respiro con le mani sulle costole.",
  f1:["Cat-camel lento con il respiro|2×10|m-multifido","Basculamento del bacino in piedi e a quattro zampe|2×10|m-trasverso","Apertura toracica sul fianco (book opening)|2×8 per lato","e-good-morning|2×10","e-dead-bug|2×8 per lato","e-face-pull|2×15"],
  f2:["e-squat|3×8 profondo con pausa in basso","e-affondo-laterale|3×8 per lato","e-step-up|3×8 per gamba","e-pullover|3×12","e-hollow|3×15 secondi","Camminata con un manubrio sopra la testa (overhead carry)|3×20 metri per lato"],
  f3:["e-front-squat|3×8","e-stacco-rumeno|3×10","e-military-press|3×8","e-trazioni|3×6","e-pallof-press|3×10 per lato","Respirazione lenta con le mani sulle costole|2 minuti|m-diaframma"]},
 resistenza:{n:"Resistenza e fiato",d:"Fare più strada con meno fatica: cuore, gambe e un po' di forza",
  nota:"Il fiato si costruisce con tante uscite facili e poche dure: l'80 % a ritmo di conversazione, il 20 % forte. La forza due volte a settimana protegge tendini e ginocchia.",
  f1:["Cammino veloce o bici a ritmo di conversazione|25–30 minuti","e-squat|2×15","e-flessioni|2×10","e-plank|2×30 secondi","e-calf-raise|2×15"],
  f2:["Corsa lenta, bici o ellittica a ritmo di conversazione|30–40 minuti","Intervalli: 2 minuti forte, 2 minuti piano|6 ripetizioni","e-affondi|3×12 per gamba","e-rematore|3×12","e-hollow|3×20 secondi"],
  f3:["Uscita lunga a ritmo facile|45–60 minuti","Intervalli 4×4: 4 minuti forte, 3 minuti piano|4 ripetizioni","e-stacco-rumeno|3×8","e-step-up|3×12 per gamba","e-farmer-walk|3×40 metri"]},
 ripartenza:{n:"Rimettersi in moto",d:"Principiante assoluto, o dopo una lunga pausa: imparare i gesti senza farsi male",
  nota:"Le prime quattro settimane servono a imparare, non a faticare: carichi leggeri, tecnica, nessun dolore. La costanza batte l'intensità: tre sedute brevi valgono più di una lunga.",
  f1:["Cammino a passo svelto|20 minuti","e-squat|2×10 al box (sedersi e rialzarsi)","e-flessioni|2×8 al muro o con le mani sul tavolo","e-rematore|2×12 con elastico","e-dead-bug|2×6 per lato","e-calf-raise|2×12"],
  f2:["e-step-up|3×8 per gamba","e-hip-thrust|3×10","e-flessioni|3×8","e-rematore|3×12","e-plank|3×20 secondi","e-farmer-walk|3×20 metri"],
  f3:["e-squat|3×10","e-stacco-rumeno|3×8","e-panca|3×10","e-trazioni|3×5 con elastico di aiuto","e-pallof-press|3×10 per lato","Cammino veloce o bici|25 minuti"]},
 over60:{n:"Forza ed equilibrio dopo i 60",d:"Gambe forti, equilibrio sicuro, ossa protette: le cose che prevengono le cadute",
  nota:"Dopo i 60 la forza si perde in fretta e si riprende con il carico, non con la ginnastica dolce. A ogni seduta un esercizio di equilibrio e uno di potenza leggera (alzarsi veloce dalla sedia). Progressione lenta, recupero di 48 ore.",
  f1:["e-squat|3×8 al box, sedersi e rialzarsi senza mani","e-step-up|2×8 per gamba, gradino basso","Appoggio su una gamba con una mano al muro|3×20 secondi per lato|m-gluteo-medio","e-rematore|2×12 con elastico","e-calf-raise|2×12 con appoggio","Cammino|20 minuti"],
  f2:["e-squat|3×10","e-hip-thrust|3×10","e-farmer-walk|3×20 metri","e-military-press|2×10 con manubri leggeri","Passo laterale e cammino in tandem (un piede davanti all'altro)|3×10 metri|m-gluteo-medio","e-dead-bug|2×8 per lato"],
  f3:["e-stacco|3×6 con trap bar o kettlebell","e-affondi|3×8 per gamba con appoggio","e-trazioni|3×8 alla lat machine","e-face-pull|3×15","Alzarsi veloce dalla sedia (potenza)|3×6","e-plank|3×20 secondi"]},
 sport:{n:"Preparazione per uno sport",d:"Calcetto, corsa, padel, ciclismo, sci: forza e controllo per non farsi male e rendere di più",
  nota:"Lo sport si fa sul campo; in palestra si costruisce ciò che il campo consuma: forza delle gambe, stabilità del tronco, atterraggi morbidi. Mai la seduta pesante il giorno prima della partita.",
  f1:["e-squat|3×8","e-stacco-rumeno|3×8","e-affondo-laterale|3×8 per lato","e-flessioni|3×10","e-rematore|3×10","e-plank|3×30 secondi"],
  f2:["e-front-squat|4×6","e-squat-bulgaro|3×8 per gamba","e-kettlebell-swing|4×12","e-trazioni|3×6","e-pallof-press|3×10 per lato","Salti sul posto con atterraggio morbido e silenzioso|3×8"],
  f3:["e-stacco|4×4","e-hip-thrust|3×8","e-step-up|3×6 per gamba, veloce in salita","e-military-press|3×6","e-hollow|3×20 secondi","Sprint brevi in progressione (non al massimo)|6×20 metri"]}
};

/* lavoro generale per zona: usato quando il trainer scrive un problema che non è in elenco */
DB.programmaZona = {
 "Collo":{f1:["Retrazione del mento (chin tuck)|2×10","Rotazioni lente del collo a occhi aperti|2×8 per lato","e-face-pull|2×15"],f2:["e-rematore|3×12","Isometrie del collo contro la mano, nelle quattro direzioni|2×5 secondi × 5","e-dead-bug|3×8 per lato"],f3:["e-trazioni|3×6","e-farmer-walk|3×30 metri","e-military-press|3×8 leggero"]},
 "Spalla":{f1:["Scivolamento delle scapole al muro (wall slide)|2×10","Rotazione esterna con elastico, gomito al fianco|2×15","e-face-pull|2×15"],f2:["e-rematore|3×12","e-flessioni|3×8 sul tavolo o al muro","e-pullover|2×12 leggero"],f3:["e-trazioni|3×6","e-military-press|3×8","e-panca|3×8"]},
 "Arto superiore":{f1:["Apertura e chiusura delle mani, polso in flessione ed estensione|2×15","Rotazione esterna con elastico|2×15","e-face-pull|2×12"],f2:["e-rematore|3×12","e-curl|2×12","e-flessioni|3×8"],f3:["e-farmer-walk|3×30 metri","e-trazioni|3×6","e-dip|3×8 su panca"]},
 "Colonna":{f1:["Cat-camel lento|2×10|m-multifido","e-dead-bug|2×8 per lato","e-good-morning|2×10 senza peso"],f2:["e-hip-thrust|3×10","e-pallof-press|3×10 per lato","e-rematore|3×12"],f3:["e-stacco-rumeno|3×8","e-farmer-walk|3×30 metri","e-front-squat|3×6"]},
 "Lombare":{f1:["e-dead-bug|2×8 per lato|m-trasverso","Cat-camel lento|2×10|m-multifido","e-hip-thrust|2×12"],f2:["e-good-morning|3×10 leggero","e-pallof-press|3×10 per lato","e-step-up|3×8 per gamba"],f3:["e-stacco-rumeno|3×8","e-farmer-walk|3×30 metri","e-squat|3×8 al box"]},
 "Anca":{f1:["90/90 dell'anca, seduti a terra|2×8 per lato|m-gluteo-medio","e-hip-thrust|2×12","Appoggio su una gamba con una mano al muro|3×20 secondi per lato|m-gluteo-medio"],f2:["e-squat|3×8 al box","e-affondo-laterale|3×8 per lato","e-step-up|3×8 per gamba"],f3:["e-stacco-rumeno|3×8","e-squat-bulgaro|3×8 per gamba","e-sumo-squat|3×10"]},
 "Ginocchio":{f1:["Contrazione del quadricipite con asciugamano sotto il ginocchio|2×10 × 5 secondi","e-leg-extension|2×12 leggero","e-calf-raise|2×12"],f2:["e-squat|3×8 al box","e-step-up|3×8 per gamba, gradino basso","e-leg-curl|3×10"],f3:["e-affondi|3×8 per gamba","e-leg-press|3×10","e-squat-bulgaro|3×6 per gamba"]},
 "Arto inferiore":{f1:["e-calf-raise|2×12","e-hip-thrust|2×12","Appoggio su una gamba|3×20 secondi per lato|m-gluteo-medio"],f2:["e-squat|3×8","e-step-up|3×8 per gamba","e-leg-curl|3×10"],f3:["e-stacco-rumeno|3×8","e-affondi|3×8 per gamba","e-farmer-walk|3×30 metri"]},
 "Piede":{f1:["Arricciare un asciugamano con le dita del piede|2×10","e-calf-raise|2×12 lento","Appoggio su una gamba a piedi nudi|3×20 secondi per lato|m-gluteo-medio"],f2:["e-calf-raise|3×12 su gradino","e-step-up|3×8 per gamba","Cammino sulle punte e sui talloni|3×10 metri"],f3:["e-affondi|3×8 per gamba","e-farmer-walk|3×30 metri","Saltelli sul posto a piedi uniti, atterraggio morbido|3×10"]},
 "Postura":{f1:["Retrazione del mento (chin tuck)|2×10","Scivolamento delle scapole al muro (wall slide)|2×10","e-dead-bug|2×8 per lato|m-trasverso"],f2:["e-face-pull|3×15","e-rematore|3×12","e-hip-thrust|3×10"],f3:["e-trazioni|3×6","e-stacco-rumeno|3×8","e-farmer-walk|3×30 metri"]},
 "Altro":{f1:["Cammino a passo svelto|20 minuti","e-squat|2×10 al box","e-dead-bug|2×8 per lato"],f2:["e-rematore|3×12","e-hip-thrust|3×10","e-plank|3×20 secondi"],f3:["e-stacco-rumeno|3×8","e-flessioni|3×8","e-farmer-walk|3×30 metri"]}
};
</script>
