function ejercicio09() {
    let valor = Number(document.getElementById("valor").value);

    if (valor == 0) {
        alert("Este es muy fácil... ¡prueba otro");
    } else if (valor%2 == 0){
        alert("El número es par");
    }else if(valor%2 == 1){
        alert("El número es impar");
    } else {
        alert("¡¡Sólo sé contar de 0 a 6!!");
    }
    document.getElementById("resultado9") = "El número es par";
}







