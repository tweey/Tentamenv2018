//Elementer fra HTML
var feltEl = document.getElementById("felt");
var handlekurvEl = document.getElementById("handlekurv");

//Lager en objekt array for varene
var vareArr = [
  {navn: "Gulrot", pris:14.90, bilde:"mat_19", antall:0 },
  {navn: "Rødløk", pris:8.30, bilde:"mat_01", antall:0 },
  {navn: "Agurk", pris:12.90, bilde:"mat_14", antall:0 },
  {navn: "Paprika", pris:13.30, bilde:"mat_05", antall:0 },
  {navn: "Potet", pris:3.90, bilde:"mat_13", antall:0 },
  {navn: "Tomat", pris:4.90, bilde:"mat_08", antall:0 },
  {navn: "Sukkererter", pris:21.90, bilde:"mat_11", antall:0 },
  {navn: "Mais", pris:13.90, bilde:"mat_10", antall:0 },
  {navn: "Kål", pris:9.90, bilde:"mat_21", antall:0 },
  {navn: "Rødbet", pris:6.50, bilde:"mat_06", antall:0 },
];

//for loop som går gjennom varene
for (var i = 0; i < vareArr.length; i++) {
  //lager en div for antall elementer i array, med forhåndsdefinert design fra CSS
  var nyDiv = document.createElement("div");
  nyDiv.className = "fruktdiv";
  feltEl.appendChild(nyDiv);

//Legger til overskrift for varen utfra obj arr
  nyDiv.innerHTML += "<h1>" + vareArr[i].navn + "</h1>";

// Lager img element og legger til src utfra obj arr og appender den til diven
  var fruktBilde = document.createElement("img");
  fruktBilde.src = "img/" +vareArr[i].bilde+".png";
  nyDiv.appendChild(fruktBilde);

// Finner fruktpris utfra obj arr appender til websiten
  var fruktPris = document.createElement("p");
  fruktPris.innerHTML ="pris: "+ vareArr[i].pris + " kr";
  nyDiv.appendChild(fruktPris)

// Lager en knapp til alle varene, gir den tekst + value og appender
  var fruktKnapp = document.createElement("button");
  fruktKnapp.className = "knapp";
  fruktKnapp.innerHTML = "Legg til i handlekurv"
  fruktKnapp.value = i;
  nyDiv.appendChild(fruktKnapp)
}

//Funksjonen som starter når en av knappene blir trykt
function tilHandlevogn(e) {
  //resetter array, hadde jeg ikke gjort dette ville vi fått feil tall
  var varePris = 0;
  var totPris = 0;
  //Resetter HTMl for å unngå at ting blir lagt til flere ganger enn de skal
  handlekurvEl.innerHTML = "";
  //Finner ut hvem frukt som er valgt ved hjelp av e.target.value
  var valgtFrukt = e.target.value;
  //Øker antall i obj arrayen hvis knappen blir trykt
  vareArr[valgtFrukt].antall++;;
  //starter en ny for loop som sjekker gjennom elementer som har flere enn 0 antall
  for (var i = 0; i < vareArr.length; i++) {
    if (vareArr[i].antall > 0) {
      //lager et li element
      var nyLi = document.createElement("li");
      //Regner ut varepris med antall * pris
      varePris = vareArr[i].antall*vareArr[i].pris;
      //Regner ut totalpris ved å summere alle tall
      totPris = totPris + varePris;
      //Legger inn antall, pris og vare og appender dette
      nyLi.innerHTML = vareArr[i].antall + " x " + vareArr[i].navn + " ("+varePris.toFixed(2)+" kr)";
      handlekurvEl.appendChild(nyLi);
    }
  }
  //Lager en lang strek for å skille varer og tot pris
  handlekurvEl.innerHTML += "--------------------------<br>";
  //Skriver inn totalpris
  handlekurvEl.innerHTML += "Totalpris: "+totPris.toFixed(2)+"<br>";
  //Lager en gå til kassen knapp og appender denne
  var betalKn = document.createElement("button");
  betalKn.innerHTML = "Gå til kassen";
  betalKn.className = "gronnKnapp";
  handlekurvEl.appendChild(betalKn)
}
//for loop for alle knappene og sjekker hvis de blir trykt for å starte tilHandlevogn
var knappNr = document.querySelectorAll(".knapp");
for (var i = 0; i < knappNr.length; i++) {
  knappNr[i].addEventListener("click", tilHandlevogn)
}
