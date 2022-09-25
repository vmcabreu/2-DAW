var interruptor = false;

function FarenheitToCelsius(farenheit) {
    let celsius = Math.round((farenheit - 32) * 5 / 9);
    return celsius;
}

function resultado() {
    var txt;
    if (interruptor) {
     alert( "La conversión de 32ºF a Celsius son: " + FarenheitToCelsius(32) + "ºC \n\n La conversión de 75.2ºF a Celsius son: " + FarenheitToCelsius(75, 2) + "ºC");    
    } else {
     alert("La conversión de 32ºF a Celsius son: " + FarenheitToCelsius(32) + " \n\n La conversión de 75.2ºF a Celsius son: " + FarenheitToCelsius(75, 2));
    }

    
}



