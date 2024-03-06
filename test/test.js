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
    Racisme.innerHTML = golmon.racisme;
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
        let i=0;
        let ziuegbziu=true;
        while ((i<nbGolmons) && (ziuegbziu)){
            if (dropdown[i]==i){
                ajouterGolmon(tableau[i].golnom);
                comparaison(tableau[i]);
                document.getElementById("entree").value = "";
                lireInput(document.getElementById("entree").value);
                tableau.splice(i,1);
                nbGolmons--;
                ziuegbziu = false;
            }
            i++;
        }
    }
}

function lireInput(valeurEntree){
    let dropdownVisible = new Array(nbGolmons);
    let section = new Array(nbGolmons);
    for (i=0;i<nbGolmons;i++){
        section[i]=tableau[i].golnom.slice(0,valeurEntree.length);
        if (section[i].includes(valeurEntree) && valeurEntree != ""){
            affDropdown(tableau[i].golnom);
            dropdownVisible[i]=i;
        }
        else {
            Naff(tableau[i].golnom);
        }
    }
    return dropdownVisible;
}

function caca(){
    var prout = new Audio('../content/prout.mp3');
    prout.play();
}

function changerCouleur(index, couleur){
    let ligne=document.getElementsByTagName("tr");
    let attribut=ligne[1].getElementsByTagName("td");
    attribut[index].style.backgroundColor = couleur;
}

function comparaison(golmon){
    if (golmon.golnom===golmonDuJour.golnom){
        changerCouleur(0,'blue');
    }
}

function test(){
    console.log(tableau);
}