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
var tmp = new Array(10);
var uesjbgkusgs = new Array(10);
for (k=0;k<10;k++){uesjbgkusgs[k]=0;}
for (k=0;k<10;k++){test[k]=true; tmp[k]=false;}

function verifierTouche(event) {
    let valeurEntree = document.getElementById("entree").value;
    let tableauGolmons = Array.from(document.getElementsByClassName("golmon"));
    let entreeLettre=(event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 97 && event.keyCode <= 122);
    for (k=0;k<10;k++){
        if (test[k]){
            if (entreeLettre || (event.keyCode == 8)){
                let i=valeurEntree.length;
                console.log(event.keyCode);
                if (entreeLettre) {
                    if (event.key===tableauGolmons[k].id[i]){
                        test[k]=true;
                        afficherBloc("D" + tableauGolmons[k].id);
                    }
                    else {
                        tmp[k]=true;
                        test[k]=false;
                        uesjbgkusgs+=1;
                    }
                }
                else { //si backspace (et entree non vide)
                    if (test[k]=false){
                        if (tmp[k]=true){
                            test[k]=true;
                        }
                    }
                }
            }
        }
        else {
            cacherLigne("D" + tableauGolmons[k].id);
        }
    }
    for (kqegfq=0;kqegfq<10;kqegfq++){if (uesjbgkusgs[kqegfq]>0){tmp[kqegfq]=false;}}
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

function changerCouleur(){
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    let nom = document.getElementById("Yan");
    let cells = nom.getElementsByTagName("td");
    var randomCellIndex = Math.floor(Math.random() * cells.length);
    cells[randomCellIndex].style.backgroundColor = randomColor;
}