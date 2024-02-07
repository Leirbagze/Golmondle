function cacherLigne(golnom) {
    let ligneACacher = document.getElementById(golnom);
    ligneACacher.style.display = "none";
}

function afficherLigne(golnom) {
    let ligneAVisible = document.getElementById(golnom);
    ligneAVisible.style.display = "table-row";
}

function verifierTouche(event) {
    let valeurEntree = document.getElementById("entree").value;
    let tableauGolmons = Array.from(document.getElementsByClassName("golmon"));
    let i=valeurEntree.length;
    let test=false;
    for (let k=0;k<10;k++){
        if ((event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 97 && event.keyCode <= 122)) {
            if (event.key===tableauGolmons[k].id[i]){
                test=true;
                alert("test");
            }
        }
    }
    if (event.key === "Enter") {
        let nomTrouve = tableauGolmons.some(function(balise) {
            return balise.id === valeurEntree;
        });
        if (nomTrouve){
            afficherLigne(valeurEntree);
            document.getElementById("entree").value = "";
        }
    }
}
