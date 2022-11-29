const ps5 = document.getElementById("ps5");
const tv = document.getElementById("tv");
const nevera = document.getElementById("nevera");
const lavadora = document.getElementById("lavadora");
const xbox = document.getElementById("xbox");
/* Creando una matriz de los elementos con los ids ps5, tv, nevera, lavadora y xbox. */
let articulos = [ps5, tv, nevera, lavadora, xbox];

/* Crear una matriz de los nombres de los productos. */
let nombres = [
  document.getElementById("nombrePS5").textContent,
  document.getElementById("nombreTV").textContent,
  document.getElementById("nombreNevera").textContent,
  document.getElementById("nombreLavadora").textContent,
  document.getElementById("nombreXBOX").textContent,
];

/* Crear una matriz de los precios de los artículos. */
let precios = [
  document.getElementById("precioPS5").textContent,
  document.getElementById("precioTV").textContent,
  document.getElementById("precioNevera").textContent,
  document.getElementById("precioLavadora").textContent,
  document.getElementById("precioXBOX").textContent,
];

const cesta = document.getElementById("cesta");
const importes = document.getElementById("importes");
let importeTotal = 0;
let igic;


/**
 * Crea un nuevo elemento div, luego recorre la matriz de casillas de verificación y, si la casilla de
 * verificación está marcada, crea un nuevo elemento de párrafo, calcula el precio del artículo con
 * IGIC y agrega el nombre y el precio del artículo al párrafo. elemento. Luego agrega el elemento de
 * párrafo al elemento div
 */
function agregarCesta(){
  const listaArticulos = document.createElement("div");
  listaArticulos.id= "listaArticulos"
  for (let i = 0; i < articulos.length; i++) {
    if (articulos[i].checked) {
        const articulo = document.createElement("p");
        let precioIgic = (precios[i] - ((precios[i] * 1.07) - precios[i])).toFixed(2);
        const detallesArticulo = document.createTextNode(nombres[i]+" - "+precioIgic+" €");
        articulo.appendChild(detallesArticulo);
        listaArticulos.appendChild(articulo);

        igic = (importeTotal * 1.07) - importeTotal;
        importeTotal+= Number(precios[i]);
    }
  }

  cesta.insertBefore(listaArticulos,importes);
  document.getElementById("total").innerHTML = (importeTotal-igic).toFixed(2);
  document.getElementById("igic").innerHTML = igic.toFixed(2);
}

