/**
 * Ejercicio 1.- Queremos generar una aplicación para simular un servidor DHCP muy ‘basto’, queremos que el programa genere una IP válida de 
 * uno de los grupos de IPs que nos solicite el usuario. El programa Pregunta al usuario que ‘clase de IP’ quiere y le devolverá una IP con 
 * números aleatorios de la clase solicitada. Debes dividir las acciones en funciones distintas ( mínimo 2)
 * Recordamos que podremos usar la siguiente tabla para determinarlo según el rango de la dirección IPv4
 */

/**
 * Crea una dirección IP aleatoria
 * @param {Integer} min - El valor mínimo del rango.
 * @param {Integer} max - El número máximo a devolver.
 * @returns {string} Una dirección IP aleatoria.
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

