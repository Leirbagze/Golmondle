function ajouterLigne(golmon) {
    let tableau = document.getElementById("tableau").getElementsByTagName('tbody')[0];
    let newRow = tableau.insertRow();

    let Golnom = newRow.insertCell(0);
    let Sexe = newRow.insertCell(1);
    let QI = newRow.insertCell(2);
    let Racisme = newRow.insertCell(3);
    let Rank = newRow.insertCell(4);
    let Humour = newRow.insertCell(5);
    let DC = newRow.insertCell(6);

    Golnom.innerHTML = golmon.golnom;
    Sexe.innerHTML = golmon.sexe;
    QI.innerHTML = golmon.QI;
    Racisme.innerHTML = golmon.racisme;
    Rank.innerHTML = golmon.rank_babyfoot;
    Humour.innerHTML = golmon.humour;
    DC.innerHTML = golmon.DC;
}

function ajouterGolmon(golnom){
    for (let i=0;i<7;i++){
        if (tableau[i].golnom.includes(golnom)){
            ajouterLigne(tableau[i]);
        }
    }
}

function affDropdown(golnom) {
    let content = document.getElementById(golnom);
    content.style.display = "block";
}

function Naff(golnom) {
    let content = document.getElementById(golnom);
    if (content != null){
        content.style.display = "none";
        console.log("content null");
    }
}

function verifierTouche(event) {
    let valeurEntree = document.getElementById("entree").value;
    let nlettre=event.keyCode;
    let entreeLettre=(nlettre >= 65 && nlettre <= 90) || (nlettre >= 97 && nlettre <= 122);
    let entreeModif = entreeLettre || (nlettre == 8);
    if (entreeModif){
        lireInput(valeurEntree);
    }
}

function lireInput(valeurEntree){
    for (i=0;i<11;i++){
        console.log("itération : "+i);
        if (tableau[i].golnom.includes(valeurEntree) && valeurEntree != ""){
            affDropdown(tableau[i].golnom);
        }
        else {
            Naff(tableau[i].golnom);
        }
    }
}