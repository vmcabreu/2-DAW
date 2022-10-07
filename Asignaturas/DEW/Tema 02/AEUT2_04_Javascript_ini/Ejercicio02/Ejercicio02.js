/**
 * Toma dos números y devuelve una matriz de todos los números impares entre ellos
 * @param {integer} numero1 - el número mínimo del rango
 * @param {integer} numero2 - el número máximo del rango
 * @returns {Array} una matriz de todos los números impares entre los parámetros min y max.
 */
function impar(numero1, numero2) {
    if (numero1>numero2) {
        [numero1,numero2] = [numero2,numero1]
    }
    let impares = [];
    for (; numero1 < numero2; numero1++) {
        if (numero1 % 2 != 0) {
            impares.push(numero1);
        }
    }
    return impares;
}



/**
 * Toma dos números y devuelve una cadena de todos los números impares entre ellos
 */
function EJ02() {
    event.preventDefault();
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let impares = impar(n1, n2);
    document.getElementById("EJ02").innerHTML = impares;
}