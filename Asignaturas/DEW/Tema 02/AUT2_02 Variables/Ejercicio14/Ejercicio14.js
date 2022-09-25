
function ejercicio14() {
    var fechaInput = document.getElementById("fecha");
    var resultado = document.getElementById("Resultado");
    let date = new Date(`${fechaInput}T00:00.000Z`);
    alert(fechaInput);
    if (fecha == fechaConvertida.toISOString()) {
        alert("Test");
    } else {
        alert("El formato de la fecha no es el adecuado (yyyy-mm-dd)")
    }

    document.getElementById("resultado14").innerHTML = "¡Perfecto!";
}







