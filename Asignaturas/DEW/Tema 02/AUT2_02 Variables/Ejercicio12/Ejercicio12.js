//Interruptor funciona como un Boolean, al estar desactivado es false, si esta marcado es true.
var interruptor = document.getElementById("activar");

function FarenheitToCelsius(farenheit) {
    let celsius = Math.round((farenheit - 32) * 5 / 9);
    return celsius;
}

function activar(){
    interruptor = true;
}

function desactivar(){
    interruptor = false;
}

function resultado() {
    event.preventDefault();
    var txt;    
    if (interruptor.checked) {
        document.getElementById("resultado12").innerHTML = "La conversión de 32ºF a Celsius son: " + FarenheitToCelsius(32) + "ºC \n\n La conversión de 75.2ºF a Celsius son: " + FarenheitToCelsius(75, 2) + "ºC";    
    } else {
        document.getElementById("resultado12").innerHTML ="La conversión de 32ºF a Celsius son: " + FarenheitToCelsius(32) + " \n\n La conversión de 75.2ºF a Celsius son: " + FarenheitToCelsius(75, 2);
    }

    
}



