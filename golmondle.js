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


var test = new Array(10);
for (k=0;k<10;k++){test[k]=true;}

function verifierTouche(event) {
    let valeurEntree = document.getElementById("entree").value;
    let tableauGolmons = Array.from(document.getElementsByClassName("golmon"));
    for (k=0;k<10;k++){
        console.log("debut for");
        let i=valeurEntree.length;
        if (test[k]){
            console.log(k);
            console.log(i);
            if ((event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 97 && event.keyCode <= 122)) {
                if (event.key===tableauGolmons[k].id[i]){
                    test[k]=true;
                    afficherBloc("D" + tableauGolmons[k].id);
                }
                else {
                    test[k]=false;
                }
            }
            console.log(test[k]);
        }
        else {
                cacherLigne("D" + tableauGolmons[k].id);
        }
    }
    console.log("fin");
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