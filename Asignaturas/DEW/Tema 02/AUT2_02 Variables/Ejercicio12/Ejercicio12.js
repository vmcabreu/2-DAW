let interruptor = false;
function FarenheitToCelsius(farenheit) {
    let celsius = Math.round((farenheit - 32) * 5 / 9);
    return celsius;
}

function activacion() {
    interruptor = interruptor? false : true;
    
}

function desactivar() {
    interruptor = !interruptor;
}

function resultado() {
    let resultado = "";
    if (interruptor == true) {
     resultado += "La conversión de 32ºF a Celsius son: " + FarenheitToCelsius(32) + "ºC <br> La conversión de 75.2ºF a Celsius son: " + FarenheitToCelsius(75, 2) + "ºC";    
    } else {
     resultado += "La conversión de 32ºF a Celsius son: " + FarenheitToCelsius(32) + " <br> La conversión de 75.2ºF a Celsius son: " + FarenheitToCelsius(75, 2);
    }

    return resultado ;
    
}

document.getElementById("resultado").innerHTML = resultado();


