function ejercicio7() {
    event.preventDefault();
    let resultado07 = "Lo siento ha fallado";
    let intentos = 3;
    let letras = 1;
    const paises = ["Madrid", "París", "Londres", "Viena", "Berlin", "Caracas", "Buenos Aires", "Brasilia", "Montevideo"]
    const respuesta = paises[parseInt(Math.random() * 11)];
    do {
        let capital = prompt("Ejercicio 07:  \n\n Adivina la capital del país \n\n Intentos: " + intentos + " \n\n Pista: " + respuesta.substring(0, 4 - intentos) + "\n\n Introduce tu respuesta: ");
        if (capital == respuesta) {
            document.getElementById("resultado7").innerHTML = "¡Felicidades! Lo conseguistes";
            break;
        } else {
            intentos--;
            alert("Has fallado. Sigue intentandolo\n\nIntentos:" + intentos);

        }


    } while (intentos != 0)
    if (intentos == 0) {
        document.getElementById("resultado7").innerHTML = "Has fallado. La respuesta era: " + respuesta;
    }


}
