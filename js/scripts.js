/* Funkcija paņem nolasīto jautājumu un 4 atbildes
   * un ieliek to HTML īstajās vietās,
   * izmantojot flexbox */
var testaJautajumi;

function pienemAtbildi(){
  parbaudaAtbildi();
  rezultataUzskaite();

}

function rezultataUzskaite(){

}

function parbaudaAtbildi(){

}


function atteloHTML() {  
// pagaidu variants - piešķīru vērtības kā objektam ar atbilžu masīvu, lai var turpināt pārējās funkcijas (Juris)
/*let testaJautajumi = [
  {'jautajums': "Kāda jūra apskalo Latvijas krastu?", 'pareiza': "Baltijas jūra", 'atbildes': ["Rīgas jūra", "Ziemeļu jūra","Melnā jūra", "Baltijas jūra"]},
  {'jautajums': "Kura pilsēta ir Latvijas galvaspilsēta?", 'pareiza': "Rīga", 'atbildes': ["Rīga", "Daugavpils", "Ventspils", "Ogre"]},
  {'jautajums': "Kurā Latvijas novadā atrodas Atpūtas ciems?", 'pareiza': "Zemgalē", 'atbildes': ["Latgalē", "Zemgalē","Kurzemē", "Vidzemē"]}
  ];

// Pagaidu variants: vienkārši piešķīru vērtības (Indra)  
let jautaajums = "Mans jautājums";
let pareiza = "Tīmekļa lapas satura un struktūras aprakstam";
let atbildes = [
  "Tīmekļa lapas noformējuma aprakstam",
  "Tīmekļa lapas satura drošai pārsūtīšanai tīklā",
  "Tīmekļa lapas programmēšanai",
  "Tīmekļa lapas satura un struktūras aprakstam"
];
*/ 

testaJautajumiNoCSV(function(results){
 testaJautajumi=results.data.map(function(csvJautajums) {
      return {
        'jautajums': csvJautajums.jautajums,
        'pareiza': csvJautajums.pareiza,
        'atbildes': [csvJautajums.atbilde1, csvJautajums.atbilde2, csvJautajums.atbilde3, csvJautajums.atbilde4]
      }
    });
testaJautajumi=shuffle(testaJautajumi);
console.log(testaJautajumi);
nomainitJautajumu(testaJautajumi);
});

}

function shuffle(mas) {
    var j, x, i;
    for (i = mas.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = mas[i];
        mas[i] = mas[j];
        mas[j] = x;
    }
    return mas;
}

function nomainitJautajumu(testaJautajumi){
  // Nomaina jautājumu
  let j=5; // pagaidu mainīgais testa tekošā jautājuma definēšanai, pagaidām ir 6 jautājumi 0,1, .., 5. Vēlāk šis mainīsies automātiski kad būs programmēta pāreja pie nākamā jautājuma.
  testaJautajumi[j].atbildes=shuffle(testaJautajumi[j].atbildes);
  document.getElementById("jaut").innerText = testaJautajumi[j].jautajums;  
  // Nomaina atbilžu pogas
  let atbilzuTeksti = document.getElementsByClassName("atb");
  for (let i = 0; i < testaJautajumi[j].atbildes.length; i++) {
    atbilzuTeksti[i].value = testaJautajumi[j].atbildes[i];
  }
}

function nakamais() {
  // Pēc atbildes nospiešanas uztaisa pauzi, parāda infomatīvu logu, ka atbilde pieņemta
}

function testaJautajumiNoCSV(callback) {
  const url = "https://in24.github.io/zinasanuParbaudesTests/dati/tests.csv";
  Papa.parse(url, {
    download: true,
    header: true,
    dynamicTyping: true,
    delimiter: ";",
    complete: function(results) {
      callback(results);
    }
  });
  console.log("CSV fails nolasīts");
}
