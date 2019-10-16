/* Funkcija paņem nolasīto jautājumu un 4 atbildes
 * un ieliek to HTML īstajās vietās,
 * izmantojot flexbox */
var testaJautajumi;
var preloader;

function atteloHTML() {
  testaJautajumiNoCSV(function(results) {
    testaJautajumi = results.data.map(function(csvJautajums) {
      return {
        jautajums: csvJautajums.jautajums,
        pareiza: csvJautajums.pareiza,
        atbildes: [
          csvJautajums.atbilde1,
          csvJautajums.atbilde2,
          csvJautajums.atbilde3,
          csvJautajums.atbilde4
        ]
      };
    });
    console.log(testaJautajumi);
    nomainitJautajumu(testaJautajumi);
  });
}

function nomainitJautajumu(testaJautajumi) {
  // Nomaina jautājumu
  let j = 0; // pagaidu mainīgais testa tekošā jautājuma definēšanai, pagaidām ir 6 jautājumi 0,1, .., 5. Vēlāk šis mainīsies automātiski kad būs programmēta pāreja pie nākamā jautājuma.
  document.getElementById("jaut").innerText = testaJautajumi[j].jautajums;
  // Nomaina atbilžu pogas
  let atbilzuTeksti = document.getElementsByClassName("atb");
  for (let i = 0; i < testaJautajumi[j].atbildes.length; i++) {
    atbilzuTeksti[i].value = testaJautajumi[j].atbildes[i];
  }
}

function nakamais() {
  preloader = document.querySelector(".preloader");
  preloader.style.opacity = 1;
  preloader.classList.remove("behind");
  preloader.classList.add("front");
  fadeEffect();
  //preloader.classList.replace("front", "behind");
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

function fadeEffect() {
  preloader.classList.replace("behind", "front");
  // saakas transition no opacity 0->1, 1 sekundi ilga
  preloader.style.opacity = 1;
  // taapeec uzliekam timeout uz 1000ms, kad saakam transition 1->0
  setTimeout(function() {
    preloader.style.opacity = 0;
  }, 1000);
  // otraa transition beidzas peec 2s, aizvaacam, lai netraucee spiest pogas
  setTimeout(function() {
    preloader.classList.replace("front", "behind");
  }, 2000);
}
