// Lager variabler utfra elementer i HTML
var skrivInnEl = document.getElementById("skrivInn");
var mengdeEl = document.getElementById("mengde");
var enhetEl = document.getElementById("enhet");
var knappEl = document.getElementById("button");
var gangeTall = 0;
var total = 0;

//Lager array for enhetene
var enheter = ["cup", "pint", "ounce"];

//legger inn arrayen i select elementet
for (var i = 0; i < enheter.length; i++) {
  var nyOpt = document.createElement("option");
  nyOpt.innerHTML = enheter[i];
  enhetEl.appendChild(nyOpt);
}

//
function beregn() {
  // Får verdiene vi har skrevet inn
  var valgtEnhet = enhetEl.value;
  var mengde = mengdeEl.value;

  //If-statements som bruker arrayen til å finne ut hvilken enhet som er valgt, gangeTall er en variabel som konverterer fra den enheten til dL
  if (valgtEnhet === enheter[0]) {
    gangeTall = 2.5;
  }
  if (valgtEnhet === enheter[1]) {
    gangeTall = 5.7;
  }
  if (valgtEnhet === enheter[2]){
    gangeTall = 0.28
  }
  //Sjekker at alle felter er fylt inn
  if (gangeTall > 0 && mengde > 0) {
    //Total sum er gangeTallet vi fikk * mengden vi fant tidligere
    total = gangeTall*mengde;
    //Fyller inn i HTML
    skrivInnEl.innerHTML = mengde + " " + valgtEnhet + "'s tilsvarer " + total.toFixed(2) + " dL";
  }
  // Alert hvis felter ikke er innfylt
  else {
    alert("Venneligst fyll inn alle felter");
  }
}

//starter en funksjonen "beregn" når du trykker på knappen
knappEl.addEventListener("click", beregn);
