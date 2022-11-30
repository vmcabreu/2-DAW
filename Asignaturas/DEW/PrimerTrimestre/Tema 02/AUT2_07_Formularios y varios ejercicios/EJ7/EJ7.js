/**
Dado el siguiente fichero html, 
desarrollar la función calcularLinks() en javascript. La función debe calcular la cantidad de links (etiquetas <a>) 
dentro del div contenedor con id=”container”. Imprimir el resultado en el div con id=”resultado”. ¡NO SE PERMITE MODIFICAR EL HTML!
 */

function contarLinks(){
    let nEtiquetas = document.getElementsByTagName("a").length;
    console.log(document.getElementsByTagName("a"));
    document.getElementById("resultado").innerHTML= nEtiquetas;
}