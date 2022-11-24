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
class Producto {
  /**
   * La función constructora es una función que se llama cuando se crea un objeto a partir de una
   * clase.
   * @param titulo - Título de la película
   * @param lanzamiento - fecha de lanzamiento
   * @param duracion - duración
   * @param genero - género
   * @param director - director de la película
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
    let pelicula = new Producto(
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
let vidasJ1 = Number(document.getElementById("vidasJ1").textContent.charAt(7));
let vidasJ2 = Number(document.getElementById("vidasJ2").textContent.charAt(7));

const turnoText = document.getElementById("turnoActual");
turnoText.addEventListener('input',indicadorTurno);
let pista = palabra.replaceAll(/\w/g, "_");
//Flags
let jugadores2 = false;
//turno= false -> Jugador1 | turno= true -> Jugador2
let turno = false;
let victoria = false;
let load = false;
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
        document.cookie = "retry=false;";
        localStorage.setItem(load, "false");
        flag = true;
      }
    });
    if (!flag) {
      alert("Los Usuario/Contraseña Incorrecto");
    }
  }
  return flag;
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
  let cookieRetry = getCookie("retry");
  let loadFlag = localStorage.getItem("load");
  if (loadFlag=="false") {
    localStorage.setItem(load, "true");
    window.location.reload();
  }
  if (cookieUser != "" && cookiePass != "" && cookieRetry=="false") {
    login(cookieUser, cookiePass);
  }else if(cookieUser != "" && cookiePass != "" && cookieRetry=="true"){
    login(cookieUser, cookiePass);
    empezarPartida();
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
function actualizarUsuarios(Usuario) {
  const datosUsuarios = JSON.parse(localStorage.getItem("listaUsuarios"));
  const index = datosUsuarios.findIndex(
    (obj) => obj.usuario === getCookie("username")
  );
  datosUsuarios[index] = Usuario;
  localStorage.setItem("listaUsuarios", JSON.stringify(datosUsuarios));
}

/**
 * Si el usuario selecciona la opción de dos jugadores, el juego comenzará con dos jugadores; de lo
 * contrario, comenzará con un jugador.
 */
function empezarPartida() {
  if (document.getElementById("2J").checked) {
    jugadores2 = true;
    crearIncognita();
    mostrarLetra();
    dibujarBase();
    indicadorTurno();
    turnoText.classList.remove("ocultar");
    document.getElementById("empezar").classList.add("ocultar");
    document.getElementById("jugadores").classList.add("ocultar");
    document.getElementById("cartelJ1").classList.remove("ocultar");
    document.getElementById("cartelJ2").classList.remove("ocultar");
    document.getElementById("teclado1").classList.remove("ocultar");
    document.getElementById("teclado2").classList.remove("ocultar");
    document.getElementById("vidasJ1").classList.remove("ocultar");
    document.getElementById("vidasJ2").classList.remove("ocultar");
    document.getElementById("ahorcadoj1").classList.remove("ocultar");
    document.getElementById("ahorcadoj2").classList.remove("ocultar");
    document.getElementById("puntuaciones").classList.add("ocultar");
    document.getElementById("showPoints").classList.add("ocultar");
  } else {
    crearIncognita();
    mostrarLetra();
    dibujarBase();
    document.getElementById("empezar").classList.add("ocultar");
    document.getElementById("jugadores").classList.add("ocultar");
    document.getElementById("teclado1").classList.remove("ocultar");
    document.getElementById("teclado1").classList.add("centro");
    document.getElementById("showPoints").classList.add("ocultar");
    document.getElementById("ahorcadoj1").classList.remove("ocultar");
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

function indicadorTurno(){
  turno = turno ? turnoText.innerHTML = "Turno de Jugador 1" : turnoText.innerHTML = "Turno de Jugador 2";
}

/**
 * Toma una letra y una identificación, verifica si la letra está en la palabra y, si lo está,
 * reemplaza el guión bajo con la letra. Si no es así, resta una vida.
 * @param letra - la letra en la que el usuario hace clic
 * @param id - la identificación del botón en el que se hizo clic
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
        if (turno) {
          turno = false;
          indicadorTurno();
        }else{
          turno = true;
          indicadorTurno();
        }
      }
    }
  } else {
    if (!jugadores2) {
      numVidas--;
      dibujarMachango();
      document.getElementById(id).classList.add("fadeOut");
      document.getElementById(id).disabled = true;
      document.getElementById("vidas").innerHTML = "Vidas: " + numVidas;
      comprobarDerrota();
    } else {
      if (turno) {
        vidasJ2--;
        document.getElementById("vidasJ2").innerHTML = "Vidas: " + vidasJ2;
        dibujarMachango();
        turno = false;
        indicadorTurno();
      } else {
        vidasJ1--;
        document.getElementById("vidasJ1").innerHTML = "Vidas: " + vidasJ1;
        dibujarMachango();
        turno = true;
        indicadorTurno();
      }
      document.getElementById(id).classList.add("fadeOut");
      document.getElementById(id).disabled = true;
      comprobarDerrota();
    }
  }
}

/**
 * Si el usuario ha adivinado la palabra, muestra los detalles de la película y muestra el botón
 * "reiniciar".
 */
function comprobarVictoria() {
  if (!jugadores2) {
    let usuario = buscarUsuario(getCookie("username"));
    if (pista.toUpperCase() == palabra.toUpperCase()) {
      document.getElementById("victoria").innerHTML = "Has ganado";
      document.getElementById("reiniciar").classList.remove("ocultar");
      document.getElementById("reiniciar").classList.add("fadeIn");
      document.getElementById("volverMenu").classList.remove("ocultar");
      document.getElementById("volverMenu").classList.add("fadeIn");
      document.getElementById("teclado1").classList.add("fadeOut");
      document.getElementById("teclado1").classList.add("ocultar");
      usuario.ganadas++;
      actualizarUsuarios(usuario);
      mostrarDetallesPelicula();
      victoria = true;
    }
  }else{
    if (pista.toUpperCase() == palabra.toUpperCase()) {
      victoria = true;
      turno = turno ? false : true;
      document.getElementById("reiniciar").classList.remove("ocultar");
      document.getElementById("reiniciar").classList.add("fadeIn");
      document.getElementById("volverMenu").classList.remove("ocultar");
      document.getElementById("volverMenu").classList.add("fadeIn");
      document.getElementById("teclado1").classList.add("fadeOut");
      document.getElementById("teclado1").classList.add("ocultar");
      mostrarDetallesPelicula();
      document.getElementById("victoria").innerHTML = comprobacionesMultijugador();
    }
  }
}

/**
 * Comprueba si el jugador ha perdido el juego, de ser así, oculta el teclado, muestra el botón de reinicio
 * y muestra la palabra que el jugador estaba tratando de adivinar.
 */
function comprobarDerrota() {
  let usuario = buscarUsuario(getCookie("username"));
  if (!jugadores2) {
    if (numVidas == 0) {
      document.getElementById("teclado1").classList.add("ocultar");
      document.getElementById("reiniciar").classList.remove("ocultar");
      document.getElementById("victoria").innerHTML =
        "Has perdido. La palabra era: " + palabra;
      usuario.perdidas++;
      actualizarUsuarios(usuario);
    }
  } else {
    document.getElementById("victoria").innerHTML = comprobacionesMultijugador();
  }
}

/**
 * Si el jugador 1 no tiene vidas y el jugador 2 ha ganado, entonces el jugador 1 ha perdido y el
 * jugador 2 ha ganado.
 * 
 * Si el jugador 2 no tiene vidas y el jugador 1 ha ganado, entonces el jugador 2 ha perdido y el
 * jugador 1 ha ganado.
 * 
 * Si ambos jugadores no tienen vidas y el no han ganado, entonces es un empate.
 * 
 * Si nada de lo anterior es cierto, entonces el juego queda en empate.
 * @returns El resultado de la función es el resultado de la última sentencia ejecutada.
 */
function comprobacionesMultijugador(){
  let resultado;
  if (vidasJ1 == 0 && turno==true && victoria == true || turno==true && victoria == true)  {
    document.getElementById("teclado1").classList.add("ocultar");
    document.getElementById("reiniciar").classList.remove("ocultar");
    document.getElementById("victoria").classList.remove("ocultar");
    resultado = "El Jugador 1 ha perdido. Gana el Jugador 2.";
  } else if (vidasJ2 == 0 && turno==false && victoria == true ||  turno==false && victoria == true) {
    document.getElementById("teclado1").classList.add("ocultar");
    document.getElementById("reiniciar").classList.remove("ocultar");
    document.getElementById("victoria").classList.remove("ocultar");
    resultado = "El Jugador 2 ha perdido. Gana el Jugador 1.";
  }else if(vidasJ2 == 0 && vidasJ1 == 0 &&  victoria == false || vidasJ2 == 6 && vidasJ1 == 6 &&  victoria == true){
    document.getElementById("teclado1").classList.add("ocultar");
    document.getElementById("reiniciar").classList.remove("ocultar");
    document.getElementById("victoria").classList.remove("ocultar");
    resultado = "Empate. La palabra era "+palabra;
  }
  return resultado;
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
 * Crea una tabla con los detalles de la película.
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
      img.classList.add("imagenPelicula");
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
 * Obtiene el elemento de la tabla, crea una nueva fila y dos nuevas celdas, agrega el texto a las
 * celdas, agrega las celdas a la fila, agrega la fila a la tabla y luego elimina la clase fadeIn de la
 * tabla y agrega la clase fadeOut a los botones. R: Puede usar <code>localStorage.setItem()</code>
 * para almacenar los datos en el almacenamiento local.
 * <code>localStorage.setItem(&quot;listaUsuarios&quot;, JSON.stringify(listaUsuarios));</code> Y luego
 * puede usar <code>localStorage.getItem()</code> para obtener los datos del almacenamiento local.
 * <code>let datosUsuarios = JSON.parse(localStorage.getItem(&quot;listaUsuarios&quot;));</code>
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
 * Obtiene la lista de usuarios del almacenamiento local, recorre cada usuario, establece sus ganancias
 * y pérdidas en 0 y luego guarda la lista actualizada de usuarios en el almacenamiento local.
 */
function borrarPuntuaciones() {
  let listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios"));
  listaUsuarios.forEach((element) => {
    element.ganadas = 0;
    element.perdidas = 0;
  });
  localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios));
  mostrarPuntuaciones();
}


/**
 * Establece una cookie llamada "reintentar" en el valor "verdadero" y luego vuelve a cargar la página
 */
function reiniciarPartida() {
  document.cookie = "retry=true";
  window.location.reload();
}


/**
 * Cuando se hace clic en el botón, vuelve a cargar la página.
 */
function volverMenu(){
  window.location.reload();
}


/**
 * Borra las cookies y recarga la página.
 */
function cerrarSesion() {
  document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
  document.cookie = "passwd=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
  document.cookie = "retry=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
  localStorage.setItem(load, "false");
  window.location.reload();
}

/**
 * Si hay dos jugadores, dibuja el verdugo en el lienzo del jugador al que le toca.
 */
function dibujarMachango() {
  if (jugadores2 == false) {
    const canvas = document.querySelector("#ahorcadoj1");
    const ctx = canvas.getContext("2d");
    switch (numVidas) {
      case 5:
        ctx.beginPath(); // cabeza
        ctx.arc(200, 117, 20, Math.PI * 2, false);
        ctx.stroke();
        ctx.closePath();
        break;
      case 4:
        ctx.beginPath(); // cuerpo
        ctx.lineWidth = 4;
        ctx.moveTo(200, 135);
        ctx.lineTo(200, 230);
        ctx.stroke();
        ctx.closePath();
        break;
      case 3:
        ctx.beginPath(); // brazo izq
        ctx.moveTo(200, 155);
        ctx.lineTo(150, 185);
        ctx.stroke();
        ctx.closePath();
        break;
      case 2:
        ctx.beginPath(); // brazo der
        ctx.moveTo(200, 155);
        ctx.lineTo(250, 185);
        ctx.stroke();
        ctx.closePath();
        break;
      case 1:
        ctx.beginPath(); // pierna izq
        ctx.lineWidth = 4;
        ctx.moveTo(200, 230);
        ctx.lineTo(230, 295);
        ctx.stroke();
        ctx.closePath();
        break;
      case 0:
        ctx.beginPath(); // pierna der
        ctx.lineWidth = 4;
        ctx.moveTo(200, 230);
        ctx.lineTo(170, 295);
        ctx.stroke();
        ctx.closePath();
        break;
    }
  } else {
    const canvasJ1 = document.querySelector("#ahorcadoj1");
    const ctxJ1 = canvasJ1.getContext("2d");
    const canvasJ2 = document.querySelector("#ahorcadoj2");
    const ctxJ2 = canvasJ2.getContext("2d");
    if (!turno) {
      switch (vidasJ1) {
        case 5:
          ctxJ1.beginPath(); // cabeza
          ctxJ1.arc(200, 117, 20, Math.PI * 2, false);
          ctxJ1.stroke();
          ctxJ1.closePath();
          break;
        case 4:
          ctxJ1.beginPath(); // cuerpo
          ctxJ1.lineWidth = 4;
          ctxJ1.moveTo(200, 135);
          ctxJ1.lineTo(200, 230);
          ctxJ1.stroke();
          ctxJ1.closePath();
          break;
        case 3:
          ctxJ1.beginPath(); // brazo izq
          ctxJ1.moveTo(200, 155);
          ctxJ1.lineTo(150, 185);
          ctxJ1.stroke();
          ctxJ1.closePath();
          break;
        case 2:
          ctxJ1.beginPath(); // brazo der
          ctxJ1.moveTo(200, 155);
          ctxJ1.lineTo(250, 185);
          ctxJ1.stroke();
          ctxJ1.closePath();
          break;
        case 1:
          ctxJ1.beginPath(); // pierna izq
          ctxJ1.lineWidth = 4;
          ctxJ1.moveTo(200, 230);
          ctxJ1.lineTo(230, 295);
          ctxJ1.stroke();
          ctxJ1.closePath();
          break;
        case 0:
          ctxJ1.beginPath(); // pierna der
          ctxJ1.lineWidth = 4;
          ctxJ1.moveTo(200, 230);
          ctxJ1.lineTo(170, 295);
          ctxJ1.stroke();
          ctxJ1.closePath();
          break;
      }
    }else{
      switch (vidasJ2) {
        case 5:
          ctxJ2.beginPath(); // cabeza
          ctxJ2.arc(200, 117, 20, Math.PI * 2, false);
          ctxJ2.stroke();
          ctxJ2.closePath();
          break;
        case 4:
          ctxJ2.beginPath(); // cuerpo
          ctxJ2.lineWidth = 4;
          ctxJ2.moveTo(200, 135);
          ctxJ2.lineTo(200, 230);
          ctxJ2.stroke();
          ctxJ2.closePath();
          break;
        case 3:
          ctxJ2.beginPath(); // brazo izq
          ctxJ2.moveTo(200, 155);
          ctxJ2.lineTo(150, 185);
          ctxJ2.stroke();
          ctxJ2.closePath();
          break;
        case 2:
          ctxJ2.beginPath(); // brazo der
          ctxJ2.moveTo(200, 155);
          ctxJ2.lineTo(250, 185);
          ctxJ2.stroke();
          ctxJ2.closePath();
          break;
        case 1:
          ctxJ2.beginPath(); // pierna izq
          ctxJ2.lineWidth = 4;
          ctxJ2.moveTo(200, 230);
          ctxJ2.lineTo(230, 295);
          ctxJ2.stroke();
          ctxJ2.closePath();
          break;
        case 0:
          ctxJ2.beginPath(); // pierna der
          ctxJ2.lineWidth = 4;
          ctxJ2.moveTo(200, 230);
          ctxJ2.lineTo(170, 295);
          ctxJ2.stroke();
          ctxJ2.closePath();
          break;
      }
    }
  }
}

/**
 * Dibuja la base del juego del ahorcado.
 */
function dibujarBase() {
  if (jugadores2 == false) {
    const canvasJ1 = document.querySelector("#ahorcadoj1");
    const ctxJ1 = canvasJ1.getContext("2d");

    canvasJ1.height = 400;
    canvasJ1.width = 400;

    ctxJ1.strokeStyle = "#E9E9E9";
    ctxJ1.lineWidth = 4;

    ctxJ1.beginPath(); // base
    ctxJ1.moveTo(7, 375);
    ctxJ1.lineTo(393, 375);
    ctxJ1.stroke();
    ctxJ1.closePath();
    ctxJ1.beginPath(); // palo vertical parte de fuera
    ctxJ1.moveTo(55, 55);
    ctxJ1.lineTo(55, 375);
    ctxJ1.stroke();
    ctxJ1.closePath();
    ctxJ1.beginPath(); // palo vertical parte de dentro
    ctxJ1.moveTo(65, 65);
    ctxJ1.lineTo(65, 375);
    ctxJ1.stroke();
    ctxJ1.closePath();
    ctxJ1.beginPath(); // palo horizontal parte de fuera
    ctxJ1.moveTo(53, 55);
    ctxJ1.lineTo(220, 55);
    ctxJ1.stroke();
    ctxJ1.closePath();
    ctxJ1.beginPath(); // palo horizontal parte de dentro y union
    ctxJ1.moveTo(63, 65);
    ctxJ1.lineTo(220, 65);
    ctxJ1.stroke();
    ctxJ1.moveTo(218, 55);
    ctxJ1.lineTo(218, 65);
    ctxJ1.stroke();
    ctxJ1.closePath();
    ctxJ1.beginPath(); // diagonales
    ctxJ1.moveTo(65, 115);
    ctxJ1.lineTo(115, 65);
    ctxJ1.stroke();
    ctxJ1.moveTo(65, 119);
    ctxJ1.lineTo(119, 65);
    ctxJ1.stroke();
    ctxJ1.moveTo(15, 375);
    ctxJ1.lineTo(55, 325);
    ctxJ1.stroke();
    ctxJ1.moveTo(19, 375);
    ctxJ1.lineTo(55, 329);
    ctxJ1.stroke();
    ctxJ1.closePath();
    ctxJ1.beginPath(); // cuerda
    ctxJ1.moveTo(200, 65);
    ctxJ1.lineTo(200, 95);
    ctxJ1.stroke();
    ctxJ1.closePath();
  } else {
    const canvasJ1 = document.querySelector("#ahorcadoj1");
    const ctxJ1 = canvasJ1.getContext("2d");
    const canvasJ2 = document.querySelector("#ahorcadoj2");
    const ctxJ2 = canvasJ2.getContext("2d");

    canvasJ1.height = 400;
    canvasJ1.width = 400;
    canvasJ2.height = 400;
    canvasJ2.width = 400;

    ctxJ1.strokeStyle = "#E9E9E9";
    ctxJ1.lineWidth = 4;
    ctxJ2.strokeStyle = "#E9E9E9";
    ctxJ2.lineWidth = 4;
      ctxJ1.beginPath(); // base
      ctxJ1.moveTo(7, 375);
      ctxJ1.lineTo(393, 375);
      ctxJ1.stroke();
      ctxJ1.closePath();
      ctxJ1.beginPath(); // palo vertical parte de fuera
      ctxJ1.moveTo(55, 55);
      ctxJ1.lineTo(55, 375);
      ctxJ1.stroke();
      ctxJ1.closePath();
      ctxJ1.beginPath(); // palo vertical parte de dentro
      ctxJ1.moveTo(65, 65);
      ctxJ1.lineTo(65, 375);
      ctxJ1.stroke();
      ctxJ1.closePath();
      ctxJ1.beginPath(); // palo horizontal parte de fuera
      ctxJ1.moveTo(53, 55);
      ctxJ1.lineTo(220, 55);
      ctxJ1.stroke();
      ctxJ1.closePath();
      ctxJ1.beginPath(); // palo horizontal parte de dentro y union
      ctxJ1.moveTo(63, 65);
      ctxJ1.lineTo(220, 65);
      ctxJ1.stroke();
      ctxJ1.moveTo(218, 55);
      ctxJ1.lineTo(218, 65);
      ctxJ1.stroke();
      ctxJ1.closePath();
      ctxJ1.beginPath(); // diagonales
      ctxJ1.moveTo(65, 115);
      ctxJ1.lineTo(115, 65);
      ctxJ1.stroke();
      ctxJ1.moveTo(65, 119);
      ctxJ1.lineTo(119, 65);
      ctxJ1.stroke();
      ctxJ1.moveTo(15, 375);
      ctxJ1.lineTo(55, 325);
      ctxJ1.stroke();
      ctxJ1.moveTo(19, 375);
      ctxJ1.lineTo(55, 329);
      ctxJ1.stroke();
      ctxJ1.closePath();
      ctxJ1.beginPath(); // cuerda
      ctxJ1.moveTo(200, 65);
      ctxJ1.lineTo(200, 95);
      ctxJ1.stroke();
      ctxJ1.closePath();

      ctxJ2.beginPath(); // base
      ctxJ2.moveTo(7, 375);
      ctxJ2.lineTo(393, 375);
      ctxJ2.stroke();
      ctxJ2.closePath();
      ctxJ2.beginPath(); // palo vertical parte de fuera
      ctxJ2.moveTo(55, 55);
      ctxJ2.lineTo(55, 375);
      ctxJ2.stroke();
      ctxJ2.closePath();
      ctxJ2.beginPath(); // palo vertical parte de dentro
      ctxJ2.moveTo(65, 65);
      ctxJ2.lineTo(65, 375);
      ctxJ2.stroke();
      ctxJ2.closePath();
      ctxJ2.beginPath(); // palo horizontal parte de fuera
      ctxJ2.moveTo(53, 55);
      ctxJ2.lineTo(220, 55);
      ctxJ2.stroke();
      ctxJ2.closePath();
      ctxJ2.beginPath(); // palo horizontal parte de dentro y union
      ctxJ2.moveTo(63, 65);
      ctxJ2.lineTo(220, 65);
      ctxJ2.stroke();
      ctxJ2.moveTo(218, 55);
      ctxJ2.lineTo(218, 65);
      ctxJ2.stroke();
      ctxJ2.closePath();
      ctxJ2.beginPath(); // diagonales
      ctxJ2.moveTo(65, 115);
      ctxJ2.lineTo(115, 65);
      ctxJ2.stroke();
      ctxJ2.moveTo(65, 119);
      ctxJ2.lineTo(119, 65);
      ctxJ2.stroke();
      ctxJ2.moveTo(15, 375);
      ctxJ2.lineTo(55, 325);
      ctxJ2.stroke();
      ctxJ2.moveTo(19, 375);
      ctxJ2.lineTo(55, 329);
      ctxJ2.stroke();
      ctxJ2.closePath();
      ctxJ2.beginPath(); // cuerda
      ctxJ2.moveTo(200, 65);
      ctxJ2.lineTo(200, 95);
      ctxJ2.stroke();
      ctxJ2.closePath();
    }
  }