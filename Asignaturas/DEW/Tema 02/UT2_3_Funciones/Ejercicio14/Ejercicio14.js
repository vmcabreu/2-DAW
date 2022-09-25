
function ejercicio14() {
    event.preventDefault();
    var fechaInput = document.getElementById("fecha").value;
    var formato = document.getElementById("Resultado").value;
    var fechaActual = new Date();
    let fechaNacimiento = new Date(fechaInput);
    if (fechaInput.substr(4, 1) == "-") {
        let diffTiempo = (fechaActual.getTime() - fechaNacimiento.getTime()) / 1000;
        switch (formato) {
            case "d":
                document.getElementById("resultado14").innerHTML = "Han pasado "+ parseInt(diffTiempo / (60 * 60 * 24)) +" días desde que nacíste.";
                break;
            case "h":
                document.getElementById("resultado14").innerHTML = "Han pasado "+ parseInt(diffTiempo / (60 * 60)) +" horas desde que nacíste.";
                break;
            case "m":
                document.getElementById("resultado14").innerHTML = "Han pasado "+ parseInt(diffTiempo / 60) +" minutos desde que nacíste.";
                break;
            case "s":
                document.getElementById("resultado14").innerHTML = "Han pasado "+ parseInt(diffTiempo) +" segundos desde que nacíste.";
                break;

            default:
                break;
        }
    } else {
        alert("El formato de la fecha no es el adecuado (yyyy-mm-dd)")
    }

    
}







