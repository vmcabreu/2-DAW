// Numero de enlaces de la pagina
let enlaces = document.links;
const nEnlaces = document.createTextNode("Número de enlaces: "+enlaces.length+" ||");
// Direccion del penultimo enlace
const penultimo = document.createTextNode("\n Dirección del penúltimo enlace: "+enlaces[enlaces.length-2]+" ||"); 

// Numero de enlaces que apuntan a http://prueba
let contador = 0;
for (let index = 0; index < enlaces.length; index++) {
    if (enlaces[index] == "http://prueba/") {
        contador++;
    }
}
const pruebaEnlaces = document.createTextNode("Número de enlaces de http://prueba: "+contador+" || ");

// Numero de enlaces del tercer párrafo
let parrafos = document.getElementsByTagName("p");
const tercerParrafo = document.createTextNode("Número de enlaces en el tercer párrafo: "+parrafos[2].getElementsByTagName('a').length);

// Añadiendo a la sección informacion
const informacion = document.getElementById("informacion");
informacion.appendChild(nEnlaces);
informacion.appendChild(penultimo);
informacion.appendChild(pruebaEnlaces);
informacion.appendChild(tercerParrafo);