
var genera = document.getElementById("genera");
var annulla = document.getElementById("annulla");


genera.addEventListener("click", function(){
    //faccio vedere il biglietto
    var biglietto = document.getElementById("biglietto");
    biglietto.style.display = "block";
    
    //carico i dati sul biglietto
    var nomeCognome = document.getElementById("nomeCognome").value;
    document.getElementById("userName").innerHTML = nomeCognome;
    var chilometri = document.getElementById("chilometri").value;
    var costoBase = chilometri * 0.21;
    var range = document.getElementById("range").value;

    //if costo e offerta biglietto
    if (range == "minorenne"){
        var costoMinori = costoBase - ((costoBase * 20) / 100);
        document.getElementById("costo").innerHTML = costoMinori.toFixed(2);
        document.getElementById("offerta").innerHTML = "Sconto minorenni";
    }else if (range == "over 65"){
        var costoAnziani = costoBase - ((costoBase * 40) / 100);
        document.getElementById("costo").innerHTML = costoAnziani.toFixed(2);
        document.getElementById("offerta").innerHTML = "Sconto anziani";
    }else{
        document.getElementById("costo").innerHTML = costoBase.toFixed(2);
        document.getElementById("offerta").innerHTML = "Nessuno sconto";
    }

    //carrozza
    var carrozza = Math.floor(Math.random() * 9) + 1;
    document.getElementById("carrozza").innerHTML = carrozza;

    //codice cp
    var cp = Math.random() * (100000 - 90000) + 90000;
    document.getElementById("codiceCp").innerHTML = cp.toFixed(0);
})

annulla.addEventListener("click", function(){
    biglietto.style.display = "none";
})