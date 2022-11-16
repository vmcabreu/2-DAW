let palabra = "Parque Jurasico";
let palabras = palabra.toUpperCase().split(" ");
let incognita = [];
let letras = [];
let numVidas = Number(document.getElementById("vidas").textContent.charAt(7));
let pista = palabra.replaceAll(/\w\d/g, "_");

console.log(numVidas);

const pistas = document.getElementById("palabra");
pistas.addEventListener("input", mostrarLetra);



/**
 * Toma las palabras de la matriz y las coloca en la matriz de incógnita, que es la que se mostrará en
 * la pantalla.
 */
function empezarPartida() {
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
  document.getElementById("jugadores").classList.add("ocultar");
  document.getElementById("teclado1").classList.remove("ocultar");
  document.getElementById("vidas").classList.remove("ocultar");
}


/**
 * Toma la matriz de letras y las coloca en una cadena, luego coloca esa cadena en el elemento HTML con
 * el id "palabra".
 */
function mostrarLetra() {
  pista = "";
  incognita.forEach((element) => {
    pista += element;
    document.getElementById("palabra").innerHTML = pista;
  });
  comprobarVictoria();
}

/**
 * Comprueba si la letra está en la palabra, si lo está, la suma a la palabra oculta, si no lo está, le
 * resta una vida
 * @param letra - la letra en la que el usuario ha hecho clic
 */
function comprobarLetra(letra) {
  let letrasmayus =palabra.toUpperCase();
  if (letrasmayus.includes(letra)) {
    for (let i = 0; i < letras.length; i++) {
      if (letra == letras[i]) {
        if (letras[i - 1] == " " || i == 0) {
          incognita[i] = letra.toUpperCase();
          mostrarLetra();
          document.getElementById(letra).classList.add("transparente");
          document.getElementById(letra).disabled = true;
        } else {
          incognita[i] = letra.toLowerCase();
          mostrarLetra();
          document.getElementById(letra).classList.add("transparente");
          document.getElementById(letra);
        }
      }
    }
  } else {
    numVidas--;
    document.getElementById("vidas").innerHTML = "Vidas: " + numVidas;
    comprobarDerrota();
  }
}

/**
 * Comprueba si la palabra adivinada por el usuario es la misma que la palabra a adivinar. Si es así,
 * muestra un mensaje que dice que el usuario ha ganado y muestra el botón para reiniciar el juego.
 */
function comprobarVictoria() {
  if (pistas.textContent == palabra) {
    document.getElementById("victoria").innerHTML = "Has ganado";
    document.getElementById("reiniciar").classList.remove("ocultar");
  }
}

/**
 * Comprueba si el número de vidas es 0 y, de ser así, oculta el teclado, muestra el botón de reinicio
 * y muestra la palabra que el jugador estaba tratando de adivinar.
 */
function comprobarDerrota() {
  if (numVidas == 0) {
    document.getElementById("teclado1").classList.add("ocultar");
    document.getElementById("reiniciar").classList.remove("ocultar");
    document.getElementById("victoria").innerHTML =
      "Has perdido. La palabra era: " + palabra;
  }
}

/**
 * Cuando se hace clic en el botón, vuelve a cargar la página.
 */
function reiniciarPartida() {
  window.location.reload();
}
