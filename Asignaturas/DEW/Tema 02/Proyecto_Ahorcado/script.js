let palabra = "Parque Jurasico";
let palabras = palabra.toUpperCase().split(" ");
let incognita = [];
let letras = [];
let numVidas = Number(document.getElementById("vidas").textContent.charAt(7));
let pista = palabra.replaceAll(/\w\d/g, "_");
let imgAhorcado = ["imgs/ahorcado1.png","imgs/ahorcado2.png","imgs/ahorcado3.png","imgs/ahorcado4.png","imgs/ahorcado5.png","imgs/ahorcado6.png"]
const pistas = document.getElementById("palabra");
pistas.addEventListener("input", mostrarLetra);




/**
 * Si el botón de radio con la identificación de 2J está marcado, haga lo siguiente:
 * 
 * 1. Crea la incógnita
 * 2. Mostrar la carta
 * 4. Agrega la clase de ocultar al elemento con la identificación de los jugadores
 * 3. Agrega la clase de ocultar al elemento con la identificación de empezar
 * 5. Elimina la clase de ocultar del elemento con el id de cartelJ1
 * 6. Elimina la clase de ocultar del elemento con el id de cartelJ2
 * 7. Quita la clase de ocultar del elemento con el id de teclado1
 * 8. Quita la clase de ocultar del elemento con el id de teclado2
 * 9. Elimina la clase de centro del elemento con el id de teclado1
 * 10. Quita la clase col-8 para añadir col-6
 * 11. Muestra el contador de las vidas para cada jugador eliminando la clase ocultar
 * 12. Muestra el dibujo del ahorcado para cada jugador eliminando la clase ocultar
 */
function empezarPartida() {
  if (document.getElementById("2J").checked) {
    crearIncognita();
    mostrarLetra();
    document.getElementById("empezar").classList.add("ocultar");
    document.getElementById("jugadores").classList.add("ocultar");
    document.getElementById("cartelJ1").classList.remove("ocultar");
    document.getElementById("cartelJ2").classList.remove("ocultar");
    document.getElementById("teclado1").classList.remove("ocultar");
    document.getElementById("teclado2").classList.remove("ocultar");
    document.getElementById("teclado1").classList.remove("centro");
    document.getElementById("teclado1").classList.remove("col-8");
    document.getElementById("teclado1").classList.add("col-6");
    document.getElementById("vidas").classList.remove("ocultar");
    document.getElementById("ahorcado").classList.remove("ocultar");
  }else{
    crearIncognita();
    mostrarLetra();
    document.getElementById("empezar").classList.add("ocultar");
    document.getElementById("jugadores").classList.add("ocultar");
    document.getElementById("teclado1").classList.remove("ocultar");
    document.getElementById("teclado1").classList.add("centro");
    document.getElementById("vidas").classList.remove("ocultar");
    document.getElementById("ahorcado").classList.remove("ocultar");
  }
}

/**
 * Toma las palabras de la matriz palabras y crea una matriz de guiones bajos de la misma longitud que
 * las palabras de palabras.
 */
function crearIncognita(){
  for (let i = 0; i < palabras.length; i++) {
    for (let j = 0; j < palabras[i].length; j++) {
      letras.push(palabras[i].charAt(j));
      incognita.push("_");
    }
    incognita.push(" ");
    letras.push(" ");
  }
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
  document.getElementById("palabra").classList.add("fadeIn");
  comprobarVictoria(pista);
}

/**
 * Comprueba si la letra está en la palabra, si lo está, la suma a la palabra oculta, si no lo está, le
 * resta una vida
 * @param letra - la letra en la que el usuario ha hecho clic
 */
function comprobarLetra(letra,id) {
  let letrasmayus =palabra.toUpperCase();
  if (letrasmayus.includes(letra)) {
    for (let i = 0; i < letras.length; i++) {
      if (letra == letras[i]) {
        if (letras[i - 1] == " " || i == 0) {
          incognita[i] = letra.toUpperCase();
          mostrarLetra();
          document.getElementById(id).classList.add("fadeOut");
          document.getElementById(id).disabled = true;
        } else {
          incognita[i] = letra.toLowerCase();
          mostrarLetra();
          document.getElementById(id).classList.add("fadeOut");
          document.getElementById(id).disabled = true;
        }
      }
    }
  } else {
    document.getElementById("ahorcado").src = imgAhorcado[imgAhorcado.length - numVidas];
    numVidas--;
    document.getElementById(id).classList.add("fadeOut"); 
    document.getElementById(id).disabled = true;
    document.getElementById("vidas").innerHTML = "Vidas: " + numVidas;
    comprobarDerrota();
  }
  comprobarVictoria();
}

/**
 * Comprueba si la palabra adivinada por el usuario es la misma que la palabra a adivinar. Si es así,
 * muestra un mensaje que dice que el usuario ha ganado y muestra el botón para reiniciar el juego.
 */
function comprobarVictoria(resultado) {
  if (resultado == palabra) {
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
