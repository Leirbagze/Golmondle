const N = 20;

function cacherLigne(golnom) {
    let ligneACacher = document.getElementById(golnom);
    ligneACacher.style.display = "none";
}

function afficherLigne(golnom) {
    let ligne = document.getElementById(golnom);
    ligne.style.display = "table-row";
}

function afficherBloc(golnom) {
    let ligne = document.getElementById(golnom);
    ligne.style.display = "block";
}

let valeurEntree = "";
function verifierTouche(event) {
    valeurEntree = document.getElementById("entree").value;
    console.log(valeurEntree);
    let i=valeurEntree.length;
    let tableauGolmons = Array.from(document.getElementsByClassName("golmon"));
    let nlettre=event.keyCode;
    let entreeLettre=(nlettre >= 65 && nlettre <= 90) || (nlettre >= 97 && nlettre <= 122);
    let entreeModif = entreeLettre || (nlettre == 8);
    if (entreeModif){
        lireInput(valeurEntree,tableauGolmons);
    }
    if (event.key === "Enter") {
        let nomTrouve = tableauGolmons.some(function(balise) {
            return balise.id === valeurEntree;
        });
        if (nomTrouve){
            afficherLigne(valeurEntree);
            cacherLigne("D" + valeurEntree);
            document.getElementById("entree").value = "";
        }
    }
}

function uidhuisnfsi(event){
    let entreeLettre=(event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 97 && event.keyCode <= 122);
    console.log(entreeLettre || (event.keyCode == 8));
    console.log(event.key);
}

function lireInput(valeurEntree,tableauGolmons) {
    console.log(valeurEntree);
    for (k=0;k<10;k++){
        if ((tableauGolmons[k].id.includes(valeurEntree)) && valeurEntree!=""){
            afficherBloc("D" + tableauGolmons[k].id);
        }
        else {
            cacherLigne("D" + tableauGolmons[k].id);
        }
    }
}

function completer(golmon){
    let tableauGolmons = Array.from(document.getElementsByClassName("golmon"));
    let nomTrouve = tableauGolmons.some(function(balise) {
        return balise.id === golmon;
    });
    if (nomTrouve){
        afficherLigne(golmon);
        cacherLigne("D" + golmon);
        document.getElementById("entree").value = "";
    }
}

function changerCouleur(){
    var prout = new Audio('content/prout.mp3');
    prout.play();


    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    let nom = document.getElementById("Yan");
    let cells = nom.getElementsByTagName("td");
    var randomCellIndex = Math.floor(Math.random() * cells.length);
    cells[randomCellIndex].style.backgroundColor = randomColor;
}
