function atteloHTML() {
  testaJautajumi();
  /* Funkcija paņem nolasīto jautājumu un 4 atbildes
   * un ieliek to HTML īstajās vietās,
   * izmantojot flexbox */

  // pagaidu variants - piešķīru vērtības kā objektam ar atbilžu masīvu, lai var turpināt pārējās funkcijas (Juris)
  let testaJaut = [
    {'jautajums': "Kāda jūra apskalo Latvijas krastu?", 'pareiza': "Baltijas jūra", 'atbildes': ["Rīgas jūra", "Ziemeļu jūra","Melnā jūra", "Baltijas jūra"]},
    {'jautajums': "Kura pilsēta ir Latvijas galvaspilsēta?", 'pareiza': "Rīga", 'atbildes': ["Rīga", "Daugavpils", "Ventspils", "Ogre"]},
    {'jautajums': "Kurā Latvijas novadā atrodas Atpūtas ciems?", 'pareiza': "Zemgalē", 'atbildes': ["Latgalē", "Zemgalē","Kurzemē", "Vidzemē"]}
    ];
  // Pagaidu variants: vienkārši piešķīru vērtības
    /*
  let jautaajums = "Mans jautājums";
  let pareiza = "Tīmekļa lapas satura un struktūras aprakstam";
  let atbildes = [
    "Tīmekļa lapas noformējuma aprakstam",
    "Tīmekļa lapas satura drošai pārsūtīšanai tīklā",
    "Tīmekļa lapas programmēšanai",
    "Tīmekļa lapas satura un struktūras aprakstam"
  ];
*/

  // Nomaina jautājumu
  let j=0; // pagaidu mainīgais testa tekošā jautājuma definēšanai, pagaidām ir 3 jautājumi 0,1,2
  document.getElementById("jaut").innerText = testaJaut[j].jautajums;  
  // Nomaina atbilžu pogas
  let atbilzuTeksti = document.getElementsByClassName("atb");
  for (let i = 0; i < testaJaut[j].atbildes.length; i++) {
    atbilzuTeksti[i].value = testaJaut[j].atbildes[i];
  }
}
function nakamais() {
  // Pēc atbildes nospiešanas uztaisa pauzi, parāda infomatīvu logu, ka atbilde pieņemta
}

function testaJautajumi() {
  const url = "https://in24.github.io/zinasanuParbaudesTests/dati/tests.csv";
  Papa.parse(url, {
    download: true,
    header: true,
    dynamicTyping: true,
    delimiter: ";",
    complete: function(results) {
      tests = results;
    }
  });
  console.log("CSV fails nolasīts");
}
