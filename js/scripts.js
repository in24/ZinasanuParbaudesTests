var testaJautajumi;
var preloader;
var jautajums = 0;
var rezultats = 0;

function pienemAtbildi() {
  parbaudaAtbildi();
  rezultataUzskaite();
}

function rezultataUzskaite() {
  if (document.activeElement.value == testaJautajumi[jautajums].pareiza) {
    rezultats++;
  }
}

function parbaudaAtbildi() {}

function beidzSpeli() {
  console.log(jautajums);
  // pasleepj jautaajumus
  // paraada rezultaatu
  //varbuut paraada atkal "sakt speeli" pogu
}

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
    testaJautajumi = shuffle(testaJautajumi);
    console.log(testaJautajumi);
    nomainitJautajumu(jautajums);
  });
}

function nomainitJautajumu(j) {
  // Nomaina jautājumu
  testaJautajumi[j].atbildes = shuffle(testaJautajumi[j].atbildes);
  document.getElementById("jaut").innerText = testaJautajumi[j].jautajums;
  // Nomaina atbilžu pogas
  let atbilzuTeksti = document.getElementsByClassName("atb");
  for (let i = 0; i < testaJautajumi[j].atbildes.length; i++) {
    atbilzuTeksti[i].value = testaJautajumi[j].atbildes[i];
  }
}

function nakamais() {
  // Pēc atbildes nospiešanas uztaisa pauzi, parāda infomatīvu logu, ka atbilde pieņemta
  preloader = document.querySelector(".preloader");
  preloader.style.opacity = 1;
  preloader.classList.remove("behind");
  preloader.classList.add("front");
  pienemAtbildi();
  fadeEffect();
  // nomainaam tekstu kad ir vistumshaakais :)
  setTimeout(function() {
    if (jautajums < testaJautajumi.length - 1) {
      // liekam jaunu (naakamo) bildi iekshaa
      jautajums += 1;
      nomainitJautajumu(jautajums);
    } else {
      // jautajumi beigushies!
      beidzSpeli();
    }
  }, 1000);
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

// Fisher–Yates sajaukšanas algoritms masīvam
//https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
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
