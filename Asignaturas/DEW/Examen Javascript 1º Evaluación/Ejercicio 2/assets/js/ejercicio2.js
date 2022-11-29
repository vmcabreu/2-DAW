
const listaPersonas = document.getElementById("listaPersonas")
/* Crear una lista de 10 personas al azar con su nombre, correo electrónico, dirección y foto. */
  const xhttp = new XMLHttpRequest();
  /** 
   *  Hasta que no reciba los datos mostrará un mensaje de Cargando... 
   *  En caso contrario leera el contenido de la respuesta y creará elementos "div" y "p"
   *  para luego añadir los datos a esos elementos para finalmente añadirlo al elemento
   *  listaPersonas*/
  xhttp.onreadystatechange = function() {
    if (this.readyState != 4 && this.status != 200) {
      document.getElementById("cargando").innerHTML =
      "Cargando...";
    }else{
        document.getElementById("cargando").innerHTML = "";
        let listaRecibida = JSON.parse(this.responseText);
        console.log(listaRecibida.results);
        for (let i = 0; i < listaRecibida.results.length; i++) {
            const persona = document.createElement("div");
            persona.id= "persona"+i;
            const parrafoNombre = document.createElement("p");
            const nombreApellido = document.createTextNode(listaRecibida.results[i].name.first+" "+listaRecibida.results[i].name.last);
            parrafoNombre.appendChild(nombreApellido);
            const parrafoEmail = document.createElement("p");
            const email = document.createTextNode(listaRecibida.results[i].email);
            parrafoEmail.appendChild(email);
            const parrafoDireccion = document.createElement("p");
            const direccion = document.createTextNode(listaRecibida.results[i].location.street.number+" "+listaRecibida.results[i].location.street.name+", ("+ listaRecibida.results[i].location.state+")");
            parrafoDireccion.appendChild(direccion);
            const imgPersona = document.createElement("img");
            imgPersona.src= listaRecibida.results[i].picture.large;

            persona.appendChild(imgPersona);
            persona.appendChild(parrafoNombre);
            persona.appendChild(parrafoEmail);
            persona.appendChild(parrafoDireccion);
            

            const botonCambio = document.createElement("button");
            botonCambio.innerText= "Cambiar"
            persona.appendChild(botonCambio);
            botonCambio.onclick = function(){
                xhttp.onload = function() {
                const casilla = document.getElementById("persona"+i);
                const nuevaPersona = document.createElement("div");
                nuevaPersona.id = "persona"+i;
                nuevaPersona.appendChild(imgPersona);
                nuevaPersona.appendChild(parrafoNombre);
                nuevaPersona.appendChild(parrafoEmail);
                nuevaPersona.appendChild(parrafoDireccion);
                listaPersonas.removeChild(casilla)
                listaPersonas.replaceChild(nuevaPersona,casilla);
                }
                xhttp.open("GET", "https://randomuser.me/api/");
                xhttp.send();
            }
            if (i%2==0) {
                persona.style.backgroundColor = "lightgrey"
            }else{
                persona.style.backgroundColor = "white"
            }
            listaPersonas.appendChild(persona);
        }
        
    }
  };
  xhttp.open("GET", "https://randomuser.me/api/?results=10");
  xhttp.send(); 

