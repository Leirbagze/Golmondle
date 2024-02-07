function cacherLigne(golnom) {
    let ligneACacher = document.getElementById(golnom);
    ligneACacher.style.display = "none";
}

function afficherLigne(golnom) {
    let ligneAVisible = document.getElementById(golnom);
    ligneAVisible.style.display = "table-row";
}

function verifierTouche(event) {
    if (event.key === "Enter") {
        let valeurEntree = document.getElementById("entree").value;
        let tableauNoms = Array.from(document.getElementsByTagName("tr"));
        let nomTrouve = tableauNoms.some(function(balise) {
            return balise.id === valeurEntree;
        });
        if (nomTrouve){
            afficherLigne(valeurEntree);
            document.getElementById("entree").value = "";
        }
    }
}
