function ejercicio09() {
    event.preventDefault();
    let valor = Number(document.getElementById("valor").value);
    var respuesta;

    if (valor == 0) {
        respuesta = "Este es muy fácil... ¡prueba otro";
    } else if (valor%2 == 0){
        respuesta = "El número es par";
    }else if(valor%2 == 1){
        respuesta = "El número es impar";
    } else {
        alert("¡¡Sólo sé contar de 0 a 6!!");
        respuesta = "Vuelve a intentarlo."
    }
    document.getElementById("resultado9").innerHTML = respuesta;
}







