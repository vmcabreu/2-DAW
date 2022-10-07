/**
 * Ejercicio 3.- Realiza un programa que pida números por teclado hasta que nos introduzcan un número menor que 1 o mayor que 50, momento en el que se invertirán los elementos dentro del array. 
 * Mostrar el array invertido. Se valorará el uso de 1 solo array para todo el programa.
 */


/**
 * Le pide al usuario que ingrese un número entre 1 y 50, y luego imprime los números en orden inverso
 */
function EJ03() {
    event.preventDefault();
    let respuesta;
    let numeros = [];
    do {
        respuesta = prompt("Introduce un numero:");
        numeros.push(respuesta);
    } while (respuesta >= 1 && respuesta <= 50);
    document.getElementById("EJ03").innerHTML = numeros.reverse();
}

