/**
 * 4.Programa que pide una frase y devuelve cuantas veces aparece de cada una de las 4 primeras letras del abcedario (nº de a’s, de b’s, etc.). 
 * Prueba con “Cuenta la leyenda que los dioses castigaron a algunos hombres convirtiéndolos en águilas.“ 
 */

/**
 * Cuenta el número de veces que aparece cada letra en una cadena
 */
function EJ04() {
    event.preventDefault();
    let frase = document.getElementById("frase").value;
    let abecedario4 = [["a", "á", "A", "Á"], ["b", "B"], ["c", "C"], ["d", "D"]];
    let contador = [0, 0, 0, 0];
    let respuesta = "";
    for (let i = 0; i < frase.length; i++) {
        for (let j = 0; j < abecedario4.length; j++) {
            let aux = 0;
            while (aux <= abecedario4[j].length) {
                if (frase.charAt(i) == abecedario4[j][aux]) {
                    contador[j] += 1;
                }
                aux++;
            }
        }

    }
    for (let i = 0; i < contador.length; i++) {
        respuesta += "La letra " + abecedario4[i][0] + " aparece " + contador[i] + " veces.<br>";
    }
    document.getElementById("EJ04").innerHTML = respuesta;
}
