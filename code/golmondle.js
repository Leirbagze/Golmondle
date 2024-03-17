var nbGolmons=11;

function ajouterLigne(golmon) {
    let tableau = document.getElementById("tableau").getElementsByTagName('tbody')[0];
    let newRow = tableau.insertBefore(document.createElement('tr'),tableau.rows[0]);

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
    Racisme.innerHTML = golmon.racisme + '%';
    Rank.innerHTML = golmon.rank_babyfoot;
    Humour.innerHTML = golmon.humour;
    DC.innerHTML = golmon.DC;
}

function ajouterGolmon(golnom){
    for (let i=0;i<nbGolmons;i++){
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
    }
}

var dropdown=new Array(nbGolmons);
function verifierTouche(event) {
    let valeurEntree = document.getElementById("entree").value;
    let nlettre=event.keyCode;
    let entreeLettre=(nlettre >= 65 && nlettre <= 90) || (nlettre >= 97 && nlettre <= 122);
    let entreeModif = entreeLettre || (nlettre == 8);
    if (entreeModif){
        dropdown=lireInput(valeurEntree);
    }
    else if (event.key === "Enter"){
        completer();
    }
}

function lireInput(valeurEntree){
    let dropdownVisible = new Array(nbGolmons);
    let section = new Array(nbGolmons);
    for (i=0;i<nbGolmons;i++){
        section[i]=tableau[i].golnom.slice(0,valeurEntree.length);
        if (section[i].toLowerCase().includes(valeurEntree.toLowerCase()) && valeurEntree != ""){
            affDropdown(tableau[i].golnom);
            dropdownVisible[i]=i;
        }
        else {
            Naff(tableau[i].golnom);
        }
    }
    return dropdownVisible;
}

function completer(){
    let i=0;
    let ziuegbziu=true;
    let test;
    while ((i<nbGolmons) && (ziuegbziu)){
        if (dropdown[i] == i){
            ajouterGolmon(tableau[i].golnom);
            document.getElementById("entree").value = "";
            lireInput(document.getElementById("entree").value); //update dropdown
            test=comparaison(tableau[i]);
            tableau.splice(i,1);
            nbGolmons--;
            ziuegbziu = false;
        }
        i++;
    }
    if (test){
        fin();
    }
}

function caca(){
    var prout = new Audio('content/prout.mp3');
    prout.play();
}

function changerCouleur(index, couleur){
    let ligne=document.getElementsByTagName("tr");
    let attribut=ligne[1].getElementsByTagName("td");
    attribut[index].classList.add(couleur);
}

function comparaison(golmon){
    let fin = new Array(7);
    for (k=0;k<7;k++) fin[k]=false;

    if (golmon.golnom === golmonDuJour.golnom){
        changerCouleur(0,'juste');
        fin[0] = true;
    }

    if (golmon.sexe === golmonDuJour.sexe){
        changerCouleur(1,'juste');
        fin[1] = true;
    }

    if (golmon.QI < golmonDuJour.QI){
        changerCouleur(2,'moins');
    }
    else if (golmon.QI > golmonDuJour.QI){
        changerCouleur(2,'plus');
    }
    else {
        changerCouleur(2,'juste');
        fin[2] = true;
    }

    if (golmon.racisme < golmonDuJour.racisme){
        changerCouleur(3,'moins');
    }
    else if (golmon.racisme > golmonDuJour.racisme){
        changerCouleur(3,'plus');
    }
    else {
        changerCouleur(3,'juste');
        fin[3] = true;
    }

    if (golmon.rank_babyfoot > golmonDuJour.rank_babyfoot){
        changerCouleur(4,'moins');
    }
    else if (golmon.rank_babyfoot < golmonDuJour.rank_babyfoot){
        changerCouleur(4,'plus');
    }
    else {
        changerCouleur(4,'juste');
        fin[4] = true;
    }

    if (golmon.humour === golmonDuJour.humour){
        changerCouleur(5,'juste');
        fin[5] = true;
    }
    else if (golmonDuJour.humour.includes(golmon.humour) || golmon.humour.includes(golmonDuJour.humour)){
        changerCouleur(5,'partiel');
    }

    if (golmon.DC < golmonDuJour.DC){
        changerCouleur(6,'moins');
    }
    else if (golmon.DC > golmonDuJour.DC){
        changerCouleur(6,'plus');
    }
    else {
        changerCouleur(6,'juste');
        fin[6] = true;
    }

    for (k=0;k<7;k++){
        if (!fin[k]){
            return false;
        }
        else {
            return true;
        }
    }
}

function fin(){
    let entree = document.getElementsByTagName("entree");
    entree[0].remove();
    let victoire = document.getElementsByTagName("victoire");
    victoire[0].style.display = 'block';
    countdown();
}

const init = new Date().getTime() / (1000*60*60*24); // Date de lancement du programme (jour)
function countdown() {
    let targetDate = Math.ceil(init)*(1000*60*60*24); // Date cible (convertie en s)
    let now = new Date().getTime(); // Date actuelle
    let difference = (targetDate-1000*60*60) - now; // Calculer la différence entre la date cible et la date actuelle
  
    // Calculer les jours, heures, minutes et secondes restantes
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    if (hours < 10){
        hours = '0' + hours;
    }
    if (minutes < 10){
        minutes = '0' + minutes;
    }
    if (seconds < 10){
        seconds = '0' + seconds;
    }
  
    // Afficher le compte à rebours sur la page web
    document.getElementById('countdown').innerHTML = `${hours}:${minutes}:${seconds}`;
  
    // Actualiser le compte à rebours toutes les secondes
    setTimeout(countdown, 1000);
}


function test(){
    // FAIRE MODE DALTONIEN
}
