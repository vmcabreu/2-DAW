/* La función constructora es una función especial que se llama cuando se crea un nuevo objeto. */
class Usuario {
  /**
   * La función constructora se utiliza para crear nuevos objetos.
   * @param usuario - nombre de usuario
   * @param nombre - nombre del usuario
   * @param email - dirección de correo electrónico
   * @param passwd - clave
   * @param [ganadas=0] - número de juegos ganados
   * @param [perdidas=0] - número de juegos perdidos
   */
  constructor(usuario, nombre, email, passwd) {
    this.usuario = usuario;
    this.nombre = nombre;
    this.email = email;
    this.passwd = passwd;
    this.ganadas = 0;
    this.perdidas = 0;
  }
}

/* Una clase es un modelo para crear objetos con propiedades y métodos predefinidos. */
class Pelicula {
  /**
   * La función constructora es una función que se llama cuando se crea un objeto a partir de una
   * clase.
   * @param titulo - Título de la película
   * @param lanzamiento - fecha de lanzamiento
   * @param duracion - duración
   * @param genero - género
   * @param director - "Christopher Nolan"
   * @param sinopsis - sinopsis
   * @param poster - La URL del cartel de la película.
   */
  constructor(
    titulo,
    lanzamiento,
    duracion,
    genero,
    director,
    sinopsis,
    poster
  ) {
    this.titulo = titulo;
    this.lanzamiento = lanzamiento;
    this.duracion = duracion;
    this.genero = genero;
    this.director = director;
    this.sinopsis = sinopsis;
    this.poster = poster;
  }
}

/* Cargando el archivo JSON y almacenándolo en el almacenamiento local. */
const xhttp = new XMLHttpRequest();
xhttp.onload = function () {
  let x = JSON.parse(this.responseText);
  let listaPeliculas = [];
  for (let i = 0; i < x.listaPeliculas.length; i++) {
    let pelicula = new Pelicula(
      x.listaPeliculas[i].titulo,
      x.listaPeliculas[i].lanzamiento,
      x.listaPeliculas[i].duracion,
      x.listaPeliculas[i].genero,
      x.listaPeliculas[i].director,
      x.listaPeliculas[i].sinopsis,
      x.listaPeliculas[i].imagen
    );
    listaPeliculas.push(pelicula);
  }
  localStorage.setItem("peliculasJSON", JSON.stringify(listaPeliculas));
};
xhttp.open("GET", "./peliculas.json", true);
xhttp.send();


/**
 * Variables usadas
 */
let peliculas = JSON.parse(localStorage.getItem("peliculasJSON"));
let numAleatorio = parseInt(Math.random() * peliculas.length);
let peliculaElegida = peliculas[numAleatorio].titulo;
let palabra = peliculas[numAleatorio].titulo;
let incognita = [];
let letras = [];
let numVidas = Number(document.getElementById("vidas").textContent.charAt(7));
let pista = palabra.replaceAll(/\w/g, "_");
let imgAhorcado = [
  "imgs/ahorcado1.png",
  "imgs/ahorcado2.png",
  "imgs/ahorcado3.png",
  "imgs/ahorcado4.png",
  "imgs/ahorcado5.png",
  "imgs/ahorcado6.png",
];
const loginBtn = document.getElementById("loginbtn");
console.log(palabra);

/**
 * Elimina la clase fadeIn del div de inicio de sesión, le agrega la clase fadeOut, elimina la clase
 * ocultar del div de registro, elimina la clase fadeOut y le agrega la clase fadeIn
 */
function menuRegistrarse() {
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
function menuLogin() {
  document.getElementById("login").classList.remove("ocultar");
  document.getElementById("login").classList.remove("fadeOut");
  document.getElementById("login").classList.add("fadeIn");
  document.getElementById("register").classList.add("ocultar");
  document.getElementById("register").classList.remove("fadeIn");
  document.getElementById("register").classList.add("fadeOut");
}

/**
 * Obtiene los valores del formulario, obtiene la lista de usuarios del almacenamiento local y, si la
 * lista está vacía, crea una nueva lista y llama a la función validarRegistro; de lo contrario, llama
 * a la función validarRegistro.
 */
function registro() {
  let usuario = document.getElementById("usuario").value;
  let nombre = document.getElementById("nombre").value;
  let mail = document.getElementById("email").value;
  let passwd = document.getElementById("password").value;
  let repPass = document.getElementById("repeatPass").value;
  let listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios"));
  if (listaUsuarios == null) {
    listaUsuarios = [];
    validarRegistro(usuario, nombre, mail, passwd, repPass, listaUsuarios);
  } else {
    validarRegistro(usuario, nombre, mail, passwd, repPass, listaUsuarios);
  }
}

/**
 * Toma los valores del formulario y crea un nuevo objeto de usuario, luego inserta el nuevo objeto de
 * usuario en una matriz y almacena la matriz en el almacenamiento local.
 * @param usuario - nombre de usuario
 * @param nombre - nombre
 * @param mail - "ejemplo@ejemplo.com"
 * @param passwd - "12345"
 * @param repPass - la contraseña que el usuario tiene que repetir
 * @param [listaUsuarios] - es un arreglo de objetos de la clase Usuario.
 */
function validarRegistro(
  usuario,
  nombre,
  mail,
  passwd,
  repPass,
  listaUsuarios = []
) {
  if (passwd == repPass) {
    let nuevouser = new Usuario(usuario, nombre, mail, passwd);
    listaUsuarios.push(nuevouser);
    localStorage.setItem("" + usuario, JSON.stringify(nuevouser));
    localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios));
    alert("Registro realizado con éxito");
    menuLogin();
  } else {
    alert("Los campos no coinciden");
  }
}

/**
 * Toma dos parámetros, un nombre de usuario y una contraseña, y verifica si el nombre de usuario y la
 * contraseña están en el almacenamiento local. Si lo son, establece la cookie y muestra el menú. Si no
 * lo son, alerta al usuario que el nombre de usuario y la contraseña son incorrectos.
 * @param usuario - nombre de usuario
 * @param passwd - la contraseña del usuario
 */
function login(usuario, passwd) {
  let flag = false;
  if (localStorage.getItem("listaUsuarios") != null) {
    let datosUsuarios = JSON.parse(localStorage.getItem("listaUsuarios"));
    datosUsuarios.forEach((element) => {
      if (element.passwd == passwd && element.usuario == usuario) {
        document.getElementById("ahoracadoMenu").classList.remove("ocultar");
        document.getElementById("ahoracadoMenu").classList.add("fadeIn");
        document.getElementById("registroLogin").classList.add("fadeOut");
        document.getElementById("docFooter").classList.remove("ocultar");
        document.getElementById("docFooter").classList.remove("fadeIn");
        document.getElementById("cookieUsuario").innerHTML = usuario;
        document.getElementById("registroLogin").classList.add("ocultar");
        document.cookie = "username=" + usuario + ";";
        document.cookie = "passwd=" + passwd + ";";
        flag = true;
      }
    });
    if (!flag) {
      alert("Los Usuario/Contraseña Incorrecto");
    }
  }
}

/**
 * Toma el nombre de una cookie como parámetro y devuelve el valor de la cookie con ese nombre.
 * @param loginCookie - El nombre de la cookie que desea obtener.
 * @returns El valor de la cookie.
 */
function getCookie(loginCookie) {
  let name = loginCookie + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

/**
 * Si las cookies de nombre de usuario y contraseña no están vacías, inicie sesión con los valores de
 * las cookies.
 */
function checkCookies() {
  let cookieUser = getCookie("username");
  let cookiePass = getCookie("passwd");
  if (cookieUser != "" && cookiePass != "") {
    login(cookieUser, cookiePass);
  }
}

/**
 * Toma una cadena como argumento y devuelve un objeto si la cadena se encuentra en la matriz de
 * objetos en localStorage.
 * @param usuario - el nombre de usuario
 * @returns El resultado de la función es el último elemento de la matriz.
 */
function buscarUsuario(usuario) {
  let datosUsuarios = JSON.parse(localStorage.getItem("listaUsuarios"));
  let resultado;
  datosUsuarios.forEach((element) => {
    if (element.usuario == usuario) {
      resultado = element;
    }
  });
  return resultado;
}

/**
 * Toma un objeto de usuario, encuentra al usuario en el almacenamiento local, reemplaza al usuario en
 * el almacenamiento local con el nuevo objeto de usuario y luego guarda el almacenamiento local.
 * @param Usuario - es un objeto de la clase Usuario
 */
function reemplazarUsuario(Usuario) {
  const datosUsuarios = JSON.parse(localStorage.getItem("listaUsuarios"));
  const index = datosUsuarios.findIndex(
    (obj) => obj.usuario === getCookie("username")
  );
  datosUsuarios[index] = Usuario;
  localStorage.setItem("listaUsuarios", JSON.stringify(datosUsuarios));
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
    document.getElementById("puntuaciones").classList.add("ocultar");
    document.getElementById("showPoints").classList.add("ocultar");
  } else {
    crearIncognita();
    mostrarLetra();
    document.getElementById("empezar").classList.add("ocultar");
    document.getElementById("jugadores").classList.add("ocultar");
    document.getElementById("teclado1").classList.remove("ocultar");
    document.getElementById("teclado1").classList.add("centro");
    document.getElementById("showPoints").classList.add("ocultar");
    document.getElementById("ahorcado").classList.remove("ocultar");
  }
}

/**
 * Toma las palabras de la matriz palabras y crea una matriz de guiones bajos de la misma longitud que
 * las palabras de palabras.
 */
function crearIncognita() {
  incognita = pista.split("");
  letras = palabra.toUpperCase().split("");
}

/**
 * Toma la matriz de letras y las coloca en una cadena, luego coloca esa cadena en el elemento HTML con
 * el id "palabra".
 */
function mostrarLetra() {
  let incogResulta = incognita.join("");
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
function comprobarLetra(letra, id) {
  let letrasmayus = palabra.toUpperCase();
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
    document.getElementById("ahorcado").src =
      imgAhorcado[imgAhorcado.length - numVidas];
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
  let usuario = buscarUsuario(getCookie("username"));
  if (pista.toUpperCase() == palabra.toUpperCase()) {
    document.getElementById("victoria").innerHTML = "Has ganado";
    document.getElementById("reiniciar").classList.remove("ocultar");
    document.getElementById("reiniciar").classList.add("fadeIn");
    document.getElementById("teclado1").classList.add("fadeOut");
    document.getElementById("teclado1").classList.add("ocultar");
    usuario.ganadas++;
    reemplazarUsuario(usuario);
    mostrarDetallesPelicula();
  }
}

/**
 * Comprueba si el número de vidas es 0 y, de ser así, oculta el teclado, muestra el botón de reinicio
 * y muestra la palabra que el jugador estaba tratando de adivinar.
 */
function comprobarDerrota() {
  let usuario = buscarUsuario(getCookie("username"));
  if (numVidas == 0) {
    document.getElementById("teclado1").classList.add("ocultar");
    document.getElementById("reiniciar").classList.remove("ocultar");
    document.getElementById("victoria").innerHTML =
      "Has perdido. La palabra era: " + palabra;
    usuario.perdidas++;
    reemplazarUsuario(usuario);
  }
}

/**
 * Toma una cadena como argumento y devuelve un objeto de una matriz de objetos en localStorage.
 * @param pelicula - es el nombre de la película que quiero buscar.
 * @returns El objeto que coincide con el título de la película.
 */
function buscarPelicula(pelicula) {
  let datosUsuarios = JSON.parse(localStorage.getItem("peliculasJSON"));
  let resultado;
  datosUsuarios.forEach((element) => {
    if (element.titulo == pelicula) {
      resultado = element;
    }
  });
  return resultado;
}

/**
 * Crea una tabla con los detalles de la película y una imagen del cartel de la película.
 */
function mostrarDetallesPelicula() {
  const tabla = document.getElementById("detallesPelicula");
  let detallesPeli = buscarPelicula(peliculaElegida);
  let titulosDatos = [
    "Titulo",
    "Lanzamiento",
    "Duracion",
    "Género",
    "Director",
    "Sinopsis",
  ];
  let peliDatos = [
    detallesPeli.titulo,
    detallesPeli.lanzamiento,
    detallesPeli.duracion,
    detallesPeli.genero,
    detallesPeli.director,
    detallesPeli.sinopsis,
    detallesPeli.poster,
  ];
  for (let index = 0; index < peliDatos.length; index++) {
    if (index == peliDatos.length - 1) {
      const div = document.getElementById("victoriaContainer");
      const img = document.createElement("img");
      img.src = peliDatos[index];
      img.classList.add("col-6");
      div.appendChild(img);
    } else {
      let tr = document.createElement("tr");
      let thtitulo = document.createElement("th");
      let tdDatos = document.createElement("td");
      let tdNull = document.createElement("td");
      let titulo = document.createTextNode(titulosDatos[index]);
      let dato = document.createTextNode(peliDatos[index]);
      thtitulo.appendChild(titulo);
      tdDatos.appendChild(dato);
      tr.appendChild(thtitulo);
      tr.appendChild(tdDatos);
      tr.appendChild(tdNull);
      tabla.appendChild(tr);
    }
  }
}

/**
 * Obtiene la tabla del HTML, crea una nueva fila y dos nuevas celdas, agrega el texto a las celdas y
 * luego agrega las celdas a la fila y la fila a la tabla.
 */
function mostrarPuntuaciones() {
  const tablaPuntuaciones = document.getElementById("puntuaciones");
  const tabla = document.getElementById("tablaPuntuaciones");
  tabla.innerHTML = "<tr><th>Jugador</th><th>Puntuacion</th></tr>";
  let datosUsuarios = JSON.parse(localStorage.getItem("listaUsuarios"));
  datosUsuarios.forEach((element) => {
    let tr = document.createElement("tr");
    let tdUser = document.createElement("td");
    let tdPuntuacion = document.createElement("td");
    let user = document.createTextNode(element.usuario);
    let puntuacion = document.createTextNode(
      "Ganadas: " + element.ganadas + " Perdidas: " + element.perdidas
    );
    tdUser.appendChild(user);
    tdPuntuacion.appendChild(puntuacion);
    tr.appendChild(tdUser);
    tr.appendChild(tdPuntuacion);
    tabla.appendChild(tr);
  });
  tablaPuntuaciones.classList.remove("fadeOut");
  tablaPuntuaciones.classList.remove("ocultar");
  tablaPuntuaciones.classList.add("fadeIn");
  document.getElementById("empezar").classList.remove("fadeIn");
  document.getElementById("showPoints").classList.remove("fadeIn");
  document.getElementById("empezar").classList.add("fadeOut");
  document.getElementById("showPoints").classList.add("fadeOut");
}

/**
 * Elimina la clase fadeIn del elemento con id de calculada, agrega la clase fadeOut al elemento con id
 * de calculada, agrega la clase ocultar al elemento con id de calculada, elimina la clase fadeOut del
 * elemento con id de empezar, elimina la clase fadeOut del elemento con el id de showPoints, agrega la
 * clase fadeIn al elemento con el id de empezar, y agrega la clase fadeIn al elemento con el id de
 * showPoints.
 * </código>
 */
function cerrarPuntuaciones() {
  document.getElementById("puntuaciones").classList.remove("fadeIn");
  document.getElementById("puntuaciones").classList.add("fadeOut");
  document.getElementById("puntuaciones").classList.add("ocultar");
  document.getElementById("empezar").classList.remove("fadeOut");
  document.getElementById("showPoints").classList.remove("fadeOut");
  document.getElementById("empezar").classList.add("fadeIn");
  document.getElementById("showPoints").classList.add("fadeIn");
}

/**
 * Cuando se hace clic en el botón, vuelve a cargar la página.
 */
function reiniciarPartida() {
  window.location.reload();
}

/**
 * Borra las cookies y recarga la página.
 */
function cerrarSesion() {
  document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
  document.cookie = "passwd=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
  window.location.reload();
}
