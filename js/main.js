var template = '<div id="nome-passeggero"></div><div id="sconto"></div><div id="carrozza"></div><div id="codice-cp"></div><div id="ticket-price"></div>';

var btnGenera = document.getElementById('btn-genera');
var btnAnnulla = document.getElementById('btn-annulla');

// evento genera biglietto
btnGenera.addEventListener("click", function () {
    document.getElementById('biglietto').innerHTML = template;

    var offer = document.getElementById('offer');
    // Genera Ticket
    console.log("Genera il Ticket");

    // Selezionare valore degli input
    var fullNameInput = document.getElementById('full-name');
    var kmInput = document.getElementById('km');
    var fasciaInput = document.getElementById('fascia');

    // Seleziona i valori
    var fullName = fullNameInput.value;
    var km = kmInput.value;
    var fascia = fasciaInput.value;

    console.log(fullName, km, fascia);

    // Calcolo biglietto Treno
    var costPerKm = 0.21;
    var ticketPrice = costPerKm * km;
    console.log(ticketPrice);

    if(fascia == "minorenne"){
      console.log("Applica 20% di sconto");
      offer = "Sconto Minorenni";
    }else if (fascia == "over65") {
      console.log("Applica 40% di sconto");
      offer = "Sconto Silver";
    }

    // Inserire dati nel BIGLIETTO
    var elName = document.getElementById('nome-passeggero');
    var elSconto = document.getElementById('sconto');
    var elCarrozza = document.getElementById('carrozza');
    var elCodice = document.getElementById('codice-cp');
    var elTicket = document.getElementById('ticket-price');

    // Genera numero Carrozza
    var numberCarrozza = Math.floor(Math.random() * 9) + 1 ;
    var codiceCp = Math.floor(Math.random() * (100000 - 90000)) + 90000 ;

    // Inserire dati nel BIGLIETTO
    elName.innerHTML = fullName;
    elSconto.innerHTML = offer;
    elTicket.innerHTML = "€" + ticketPrice.toFixed(2);
    elCarrozza.innerHTML = numberCarrozza;
    elCodice.innerHTML = codiceCp;
})

// evento annulla biglietto
btnAnnulla.addEventListener("click", function () {
    // Annulla
    console.log("Annula operazione");
    document.getElementById('biglietto').innerHTML = "";

    var fullNameInput = document.getElementById('full-name');
    var kmInput = document.getElementById('km');
    var fasciaInput = document.getElementById('fascia');

    fullNameInput.value = "";
    kmInput.value = "";
    //fasciaInput.value = "";
})
