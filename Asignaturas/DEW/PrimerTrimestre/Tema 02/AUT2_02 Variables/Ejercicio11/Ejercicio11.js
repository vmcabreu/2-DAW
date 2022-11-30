function FarenheitToCelsius(farenheit) {
    let celsius = Math.round((farenheit - 32) * 5 / 9);
    return celsius
}

function resultado() {
    event.preventDefault();
    document.getElementById("resultado1").innerHTML = "La conversión de 32ºF a Celsius son: " + FarenheitToCelsius(32) + "ºC";
    document.getElementById("resultado2").innerHTML = "La conversión de 75.2ºF a Celsius son: " + FarenheitToCelsius(75, 2) + "ºC";

}







