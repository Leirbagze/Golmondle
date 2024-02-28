const N = 20;


import data from './data.json' assert { type: 'json' };

console.log(data);

function cacherLigne(golnom) {
    let ligne = document.getElementById(golnom);
    if (ligne != null){
        ligne.style.display = "none";
    }
}

function afficherLigne(golnom) {
    let ligne = document.getElementById(golnom);
    if (ligne != null){
        ligne.style.display = "table-row";
    }
}

function afficherBloc(golnom) {
    let bloc = document.getElementById(golnom);
    if (bloc != null){
        bloc.style.display = "block";
    }
}

function supprimerBloc(golnom){
    bloc = document.getElementById(golnom);
    if (bloc != null){
        bloc.remove();
    }
}

let test="";
function verifierTouche(event) {
    let valeurEntree = document.getElementById("entree").value;
    console.log(valeurEntree);
    let tableauGolmons = Array.from(document.getElementsByClassName("golmon"));
    let nlettre=event.keyCode;
    let entreeLettre=(nlettre >= 65 && nlettre <= 90) || (nlettre >= 97 && nlettre <= 122);
    let entreeModif = entreeLettre || (nlettre == 8);
    if (entreeModif){
        test=lireInput(valeurEntree,tableauGolmons,test);
    }
    if (event.key === "Enter") {
        let nomTrouve = tableauGolmons.some(function(balise) {
            return balise.id.includes(valeurEntree);
        });
        if (nomTrouve){
            afficherLigne(test);
            supprimerBloc("D" + test);
            document.getElementById("entree").value = "";
            test="";
        }
    }
}

function lireInput(valeurEntree,tableauGolmons,test) {
    console.log(valeurEntree);
    for (k=0;k<10;k++){
        if ((tableauGolmons[k].id.includes(valeurEntree)) && valeurEntree!=""){
            if (test===""){
                test=tableauGolmons[k].id;
                console.log("test : "+test);
            }
            afficherBloc("D" + tableauGolmons[k].id);
        }
        else {
            cacherLigne("D" + tableauGolmons[k].id);
        }
    }
    return test;
}

function completer(golmon){
    let tableauGolmons = Array.from(document.getElementsByClassName("golmon"));
    let nomTrouve = tableauGolmons.some(function(balise) {
        return balise.id === golmon;
    });
    if (nomTrouve){
        afficherLigne(golmon);
        supprimerLigne("D" + golmon);
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
