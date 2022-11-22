let palabra = "Parque Jurasico";
let incognita = [];
let letras = [];
let numVidas = Number(document.getElementById("vidas").textContent.charAt(7));
let pista = palabra.replaceAll(/\w/g, "_");
let imgAhorcado = ["imgs/ahorcado1.png","imgs/ahorcado2.png","imgs/ahorcado3.png","imgs/ahorcado4.png","imgs/ahorcado5.png","imgs/ahorcado6.png"]
let peliculas;
console.log(peliculas);
const xhttp = new XMLHttpRequest();

xhttp.onload = function(){
    let x = JSON.parse(this.responseText);
    document.getElementById("lecturaJSON").innerHTML = x.listaPeliculas[5].Titulo;
}
xhttp.open('GET', './peliculas.json',true);
xhttp.send();

/* La función constructora es una función especial que se llama cuando se crea un nuevo objeto. */
class Usuario{
  /**
   * La función constructora es una función especial que se llama cuando se crea un nuevo objeto.
   * @param usuario - El nombre de usuario del usuario.
   * @param nombre - El nombre del usuario.
   * @param email - La dirección de correo electrónico del usuario.
   * @param passwd - La contraseña para el usuario.
   */
  constructor(usuario,nombre,email,passwd){
    this.usuario=usuario;
    this.nombre=nombre;
    this.email=email;
    this.passwd=passwd;
  }
}

/* Una clase es un modelo para crear objetos con propiedades y métodos predefinidos. */
class Pelicula{

  constructor(titulo,lanzamiento,duracion,genero,director,sinopsis,poster){
    this.titulo=titulo;
    this.lanzamiento=lanzamiento;
    this.duracion=duracion;
    this.genero=genero;
    this.director=director;
    this.sinopsis=sinopsis;
    this.poster=poster;
  }

}






/**
 * Elimina la clase fadeIn del div de inicio de sesión, le agrega la clase fadeOut, elimina la clase
 * ocultar del div de registro, elimina la clase fadeOut y le agrega la clase fadeIn
 */
function menuRegistrarse(){
  document.getElementById("login").classList.add("ocultar");
  document.getElementById("login").classList.remove("fadeIn");
  document.getElementById("login").classList.add("fadeOut");
  document.getElementById("register").classList.remove("ocultar");
  document.getElementById("register").classList.remove("fadeOut");
  document.getElementById("register").classList.add("fadeIn");
}   


/**
 * Elimina la clase "ocultar" del elemento con id "login", elimina la clase "fadeOut" del elemento con
 * id "login", agrega la clase "fadeIn" al elemento con id "login", agrega la clase "ocultar" al
 * elemento con id "registrar", quita la clase "fadeIn" del elemento con id "registrar", y añade la
 * clase "fadeOut" al elemento con id "registrar"
 */
function menuLogin(){
  document.getElementById("login").classList.remove("ocultar");
  document.getElementById("login").classList.remove("fadeOut")
  document.getElementById("login").classList.add("fadeIn");
  document.getElementById("register").classList.add("ocultar");
  document.getElementById("register").classList.remove("fadeIn");
  document.getElementById("register").classList.add("fadeOut");
}

function registro(){
    let usuario = document.getElementById("usuario").value;
    let nombre = document.getElementById("nombre").value;
    let mail = document.getElementById("email").value;
    let passwd = document.getElementById("password").value;
    let repPass = document.getElementById("repeatPass").value;
    if (passwd == repPass) {
        let nuevouser=new Usuario(usuario,nombre,mail,passwd);
        localStorage.setItem(""+usuario, JSON.stringify(nuevouser));
        alert("Registro realizado con éxito");
        menuLogin();
    }else{
      alert("Los campos no coinciden");
    }
}

function login(){
  let usuario = document.getElementById("logUser").value;
  let passwd = document.getElementById("logPasswd").value;
  if(localStorage.getItem(usuario) != null){
    let datosUsuarios = JSON.parse(localStorage.getItem(usuario));
    if (datosUsuarios.passwd == passwd) {
      alert("Bienvenido, "+usuario);
      document.getElementById("ahoracadoMenu").classList.remove("ocultar");
      //document.getElementById("registroLogin").classList.add("fadeOut");
      document.getElementById("registroLogin").classList.add("ocultar");
    }else{
      alert("Los Usuario/Contraseña Incorrecto");
    }

  }
}

/**
 * Si el botón de radio con la identificación de 2J está marcado, haga lo siguiente:
 * 
 * 1. Crea la incógnita
 * 2. Mostrar la palabra
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
    document.getElementById("vidasJ1").classList.remove("ocultar");
    document.getElementById("vidasJ2").classList.remove("ocultar");
    document.getElementById("ahorcado").classList.remove("ocultar");
  }else{
    crearIncognita();
    mostrarLetra();
    document.getElementById("empezar").classList.add("ocultar");
    document.getElementById("jugadores").classList.add("ocultar");
    document.getElementById("teclado1").classList.remove("ocultar");
    document.getElementById("teclado1").classList.add("centro");

    document.getElementById("ahorcado").classList.remove("ocultar");
  }
}

/**
 * Toma las palabras de la matriz palabras y crea una matriz de guiones bajos de la misma longitud que
 * las palabras de palabras.
 */
function crearIncognita(){
  incognita=pista.split("");
  letras = palabra.toUpperCase().split("");
}

/**
 * Toma la matriz de letras y las coloca en una cadena, luego coloca esa cadena en el elemento HTML con
 * el id "palabra".
 */
function mostrarLetra() {

  let incogResulta= incognita.join("");
  pista = incogResulta;
  document.getElementById("palabra").innerHTML = incogResulta;
  document.getElementById("palabra").classList.add("fadeIn");
  comprobarVictoria();
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
          comprobarVictoria();
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
  
}

/**
 * Comprueba si la palabra adivinada por el usuario es la misma que la palabra a adivinar. Si es así,
 * muestra un mensaje que dice que el usuario ha ganado y muestra el botón para reiniciar el juego.
 */
function comprobarVictoria() {
  if (pista == palabra) {
    document.getElementById("victoria").innerHTML = "Has ganado";
    document.getElementById("reiniciar").classList.remove("ocultar");
    document.getElementById("reiniciar").classList.add("fadeIn");
    document.getElementById("teclado1").classList.add("fadeOut");
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

