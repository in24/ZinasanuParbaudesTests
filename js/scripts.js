function atteloHTML() {
  testaJautajumi();
  /* Funkcija paņem nolasīto jautājumu un 4 atbildes
   * un ieliek to HTML īstajās vietās,
   * izmantojot flexbox */
  // Pagaidu variants: vienkārši piešķīru vērtības
  let jautajums = "Kāda uzdevuma veikšanai paredzēta HTML valoda?";
  let pareiza = "Tīmekļa lapas satura un struktūras aprakstam";
  let atbildes = [
    "Tīmekļa lapas noformējuma aprakstam",
    "Tīmekļa lapas satura drošai pārsūtīšanai tīklā",
    "Tīmekļa lapas programmēšanai",
    "Tīmekļa lapas satura un struktūras aprakstam"
  ];
}
function nakamais() {
  // Pēc atbildes nospiešanas uztaisa pauzi, parāda infomatīvu logu, ka atbilde pieņemta
}

function testaJautajumi(){    
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
  console.log('CSV fails nolasīts');   
}
