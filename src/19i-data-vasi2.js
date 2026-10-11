<script>
/* Vasi — parte 2: vene e arterie che mancavano. */
DB.arterie = DB.arterie.concat([
 {id:"v-vene-profonde",nome:"Vene profonde degli arti e vena cava",lat:"Vv. profundae, v. cava inferior",regione:"Tutto il corpo",
  alias:["vene profonde","vena cava","vena femorale","vena poplitea","trombosi venosa profonda","TVP","trombosi"],
  origine:"Dalle vene plantari e del polpaccio (tibiali, peroniere) alla poplitea, alla femorale, all'iliaca e alla cava inferiore, che risale fino al cuore destro.",
  decorso:"Accompagnano le arterie omonime dentro le logge muscolari, con valvole che permettono al sangue di salire solo verso il cuore. Il polpaccio è la pompa: ogni contrazione del soleo spreme le vene profonde verso l'alto.",
  territorio:"Raccolgono il 90% del sangue venoso degli arti inferiori.",
  polso:"Non palpabili. Si valuta indirettamente: gonfiore, dolore e calore del polpaccio, differenza di circonferenza fra i due lati.",
  nota:"La trombosi venosa profonda è la controindicazione assoluta più importante del massaggio: un coagulo nella vena del polpaccio può staccarsi e arrivare al polmone.",
  segreto:"Polpaccio gonfio, caldo, dolente, più grosso dell'altro di oltre 2 cm, in una persona che ha fatto un viaggio lungo, un intervento, un gesso, o prende la pillola: non è una contrattura e non si massaggia. Si manda dal medico lo stesso giorno. Il test di Homans è inaffidabile: conta il confronto fra i due polpacci e la storia."},

 {id:"v-safena",nome:"Vena grande safena e sistema venoso superficiale",lat:"V. saphena magna, v. saphena parva",regione:"Arto inferiore",
  alias:["safena","grande safena","piccola safena","vene superficiali","vene varicose","varici","insufficienza venosa"],
  origine:"La grande safena nasce dal dorso del piede, davanti al malleolo mediale; la piccola safena dietro il malleolo laterale.",
  decorso:"La grande safena risale lungo la faccia mediale di gamba e coscia, accompagnata dal nervo safeno, e si getta nella femorale all'inguine (crosse). La piccola safena risale dietro il polpaccio e si getta nella poplitea.",
  territorio:"Raccolgono il sangue della pelle e del sottocute; lo versano nel sistema profondo attraverso le perforanti.",
  polso:"Visibili e palpabili quando dilatate (varici): cordoni tortuosi bluastri lungo la gamba interna.",
  nota:"Le valvole delle perforanti, quando cedono, lasciano il sangue refluire verso la pelle: gambe pesanti la sera, gonfiore alla caviglia, varici, macchie brune alla caviglia.",
  segreto:"Sulle varici non si fanno manovre profonde né frizioni: si lavora intorno, dal basso verso l'alto, a piatto, e si solleva la gamba. Il consiglio che vale più di tutto: venti sollevamenti sui talloni ogni ora di lavoro in piedi, perché il soleo è la pompa che la safena non ha."},

 {id:"v-temporale",nome:"Arteria temporale superficiale e arteria mascellare",lat:"A. temporalis superficialis, a. maxillaris",regione:"Testa",
  alias:["temporale superficiale","polso temporale","mascellare","arterite temporale"],
  origine:"I due rami terminali della carotide esterna, dentro la parotide.",
  decorso:"La temporale superficiale sale davanti all'orecchio sopra l'arcata zigomatica e si divide sulla tempia; la mascellare entra in profondità dietro il collo della mandibola, fra gli pterigoidei, e irrora masticatori, denti, naso e meningi (arteria meningea media).",
  territorio:"Cuoio capelluto, tempia, viso profondo, muscoli masticatori, denti, meningi.",
  polso:"Davanti al trago, sopra l'arcata zigomatica: è il polso temporale, facile da sentire.",
  nota:"Un'arteria temporale dura, dolente, con cefalea nuova in una persona oltre i 50 anni e dolore masticando può essere un'arterite temporale: urgenza medica, rischio per la vista.",
  segreto:"Nel massaggio della tempia la sentirai pulsare sotto le dita: lavora leggero. E se un cliente anziano ha una tempia dolente al tocco, mascella che si stanca a masticare e vede «annebbiato», non è un trigger del temporale: è da mandare dal medico oggi."},

 {id:"v-glutee",nome:"Arterie glutee superiore e inferiore",lat:"Aa. gluteae superior et inferior",regione:"Bacino",
  alias:["glutea superiore","glutea inferiore","arterie glutee"],
  origine:"Dall'arteria iliaca interna.",
  decorso:"La superiore esce dal grande forame ischiatico sopra il piriforme (con il nervo gluteo superiore) e irrora gluteo medio e minimo; l'inferiore esce sotto il piriforme (con il nervo ischiatico e il gluteo inferiore) e irrora il grande gluteo e la coscia posteriore alta.",
  territorio:"Tutti i glutei, i rotatori profondi, la parte alta della coscia posteriore.",
  polso:"Non palpabili.",
  nota:"Il forame sopra-piriforme e sotto-piriforme sono i due «passaggi» del gluteo: ognuno con un'arteria e un nervo.",
  segreto:"Sotto il piriforme passano insieme arteria glutea inferiore, nervo ischiatico, nervo gluteo inferiore e nervo pudendo: quattro strutture nobili in due centimetri. È il motivo per cui si lavora il gluteo profondo con l'avambraccio e mai con il gomito a punta."},

 {id:"v-circolo-coronarico",nome:"Cuore e grandi vasi: cosa deve sapere il massaggiatore",lat:"Cor, aorta, vv. cavae",regione:"Torace",
  alias:["cuore","aorta toracica","coronarie","dolore cardiaco","angina","infarto"],
  origine:"Il ventricolo sinistro pompa nell'aorta; il destro nei polmoni; le cave riportano il sangue venoso.",
  decorso:"L'aorta sale, forma l'arco (da cui nascono i vasi per testa e braccia) e scende lungo la colonna toracica a sinistra; attraversa il diaframma a T12.",
  territorio:"Tutto il corpo.",
  polso:"Polso carotideo, radiale, femorale: frequenza normale a riposo 60–100.",
  nota:"Il dolore cardiaco può imitare il dolore muscolare: oppressione al petto, dolore al braccio sinistro, alla mandibola, fra le scapole, con sudore e affanno.",
  segreto:"Pettorale e scaleni danno dolore «al petto e al braccio sinistro» identico a quello cardiaco. La differenza: il dolore muscolare si riproduce premendo e cambia con il movimento del braccio; quello cardiaco no, e compare con lo sforzo o l'emozione. Nel dubbio, non si tratta: si chiama il 118. Un massaggiatore che sa dire «questo non è mio» salva vite."}
]);
</script>
