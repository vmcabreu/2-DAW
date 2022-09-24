function FarenheitToCelsius(farenheit){
    let celsius = Math.round((farenheit - 32) * 5/9);
    return celsius
}

function check() {
    document.getElementById("tick").checked = true;
}

function uncheck() {
    document.getElementById("tick").checked = false;
}

if (document.getElementById("tick").checked == true) {
    document.getElementById("resultado1").innerHTML = "La conversión de 32ºF a Celsius son: "+FarenheitToCelsius(32)+"ºC";
document.getElementById("resultado2").innerHTML = "La conversión de 75.2ºF a Celsius son: "+FarenheitToCelsius(75,2)+"ºC";

} else {
    document.getElementById("resultado1").innerHTML = "La conversión de 32ºF a Celsius son: "+FarenheitToCelsius(32);
document.getElementById("resultado2").innerHTML = "La conversión de 75.2ºF a Celsius son: "+FarenheitToCelsius(75,2);

}

