function chiffre(id){
    let x=document.getElementById(id).value;
    let valeur = document.getElementById('resultat').value;
    document.getElementById('resultat').value=valeur+x;
}

function suppr(){
    let valeur=document.getElementById("resultat").value;
    var long= valeur.length;
    var fin= long-1;
    valeur=valeur.substring(0,fin);
    document.getElementById("resultat").value=valeur;
}

function c(){
    document.getElementById('resultat').value="";
}

function equal(){
    let x=document.getElementById('resultat').value;
    let resultatFinal= eval(x);
    document.getElementById("resultat").value= resultatFinal;
}