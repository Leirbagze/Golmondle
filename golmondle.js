function verifierTouche(event) {
    if (event.key === "Enter") {
        var valeurEntree = document.getElementById('entree').value;
        alert("La valeur de l'input est : " + valeurEntree);
    }
}

function cacherLigne() {
    var ligneACacher = document.getElementsByClassName('cacher')[0];
    ligneACacher.style.display = 'none';
}

function afficherLigne() {
    var ligneAVisible = document.getElementsByClassName('visible')[0];
    ligneAVisible.style.display = 'table-row';
}