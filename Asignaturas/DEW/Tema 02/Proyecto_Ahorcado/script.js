let palabra = "Parque Jurasico";
let palabras = palabra.toUpperCase().split(" ");
let incognita = [];
let letras = [];
let vidas = 3;
let pista = palabra.replaceAll(/\w\d/g, "_");

const pistas = document.getElementById("palabra");
pistas.addEventListener("input", mostrarLetra);
/*
const victoria = document.getElementById("victoria");
pistas.addEventListener("input", comprobarVictoria);
*/
/**
 * Toma las palabras en la matriz y las divide en letras, luego muestra las letras en el HTML.
 * También muestra el teclado interactivo para poder jugar al juego.
 */
function desglosePalabra() {
  for (let i = 0; i < palabras.length; i++) {
    for (let j = 0; j < palabras[i].length; j++) {
      letras.push(palabras[i].charAt(j));
      incognita.push("_");
    }
    incognita.push(" ");
    letras.push(" ");
  }
  mostrarLetra();
  document.getElementById("empezar").classList.add("ocultar");
  document.getElementById("teclado").classList.remove("ocultar");
}

function mostrarLetra() {
  pista = "";
  incognita.forEach((element) => {
    pista += element;
    document.getElementById("palabra").innerHTML = pista;
    comprobarVictoria();
    comprobarDerrota();
  });
}

/**
 * Comprueba si la letra en la que hizo clic está en la palabra y, si lo está, la agrega a la palabra.
 * Si no está el jugador pierde una vida
 * @param letra - la letra en la que el usuario ha hecho clic
 */
function comprobarLetra(letra) {
  for (let i = 0; i < letras.length; i++) {
    if (letra == letras[i]) {
      if (letras[i - 1] == " " || i == 0) {
        incognita[i] = letra.toUpperCase();
        mostrarLetra();
      } else {
        incognita[i] = letra.toLowerCase();
        mostrarLetra();
      }
      document.getElementById(letra).classList.add("transparente");
      document.getElementById(letra);
    } else {
      vidas--;
    }
  }
}

/**
 * Comprueba si la palabra que has adivinado es la misma que la palabra que intentas adivinar
 */
function comprobarVictoria() {
  if (pistas.textContent == palabra) {
    document.getElementById("victoria").innerHTML = "Has ganado";
  }
}

/**
 * Comprueba si el jugador ha perdido el juego.
 */
function comprobarDerrota() {
  if (vidas <= 0) {
    document.getElementById("victoria").innerHTML =
      "Has perdido. La palabra era: " + palabra;
  }
}
