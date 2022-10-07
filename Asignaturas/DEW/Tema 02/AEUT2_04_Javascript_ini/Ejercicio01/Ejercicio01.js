/**
 * Crea una dirección IP aleatoria
 * @param min - El valor mínimo del rango.
 * @param max - El número máximo a devolver.
 * @returns Una dirección IP aleatoria.
 */
function crearIP(min, max) {
    let respuesta = "";
    for (let i = 0; i < 4; i++) {
        if (i == 0) {
            respuesta += (Math.floor(Math.random() * (max-min)) + min);
        } else if (i == 3) {
            respuesta += "."+parseInt(Math.random() * 255);
        } else {
            respuesta += "."+parseInt(Math.random() * 255);
        }
    }
    return respuesta;
}


/**
 * Crea una dirección IP aleatoria basada en la clase de dirección IP seleccionada por el usuario
 */
function EJ0401() {
    event.preventDefault();
    let opcion = document.querySelector("#optionIP").value;
    let respuesta = "";
    switch (opcion) {
        case "classA":
            respuesta = crearIP(0, 127);
            document.getElementById("EJ0401").innerHTML = respuesta;
            break;
        case "classB":
            respuesta = crearIP(127, 192);
            document.getElementById("EJ0401").innerHTML = respuesta;
            break;
        case "classC":
            respuesta = crearIP(192, 224);
            document.getElementById("EJ0401").innerHTML = respuesta;
            break;
        case "classD":
            respuesta = crearIP(224, 240);
            document.getElementById("EJ0401").innerHTML = respuesta;
            break;
        case "classE":
            respuesta = crearIP(240, 256);
            document.getElementById("EJ0401").innerHTML = respuesta;
            break;

        default:
            break;
    }
}

