/**
Vamos a crear un juego básico de Piedra, Papel y Tijera, donde se realizaran 'tiradas' entre dos jugadores y gana la partida el que gane 3 tiradas:

Primero vamos ha hacer que el juego sea random, es decir que la tirada de cada jugador sea aleatoria (por la maquina) para comprobar que todo es correcto y se escriben los resultados correctos.

Crearemos un objeto juego, que tenga como características las opciones ( en este caso: Piedra, papel y tijera), los nombre de los jugadores, y los puntos que tiene cada jugador.

Y tendremos las siguientes funciones:

preguntarNombre() - Preguntaremos el nombre del jugador/A

numeroRandom() - Escogeremos una opción ( p, p, t) random

tiradaJugador() - mostraremos el valor de una tirada de un jugador

imprimirResultados(jugador1, jugador2) – Devuelve que jugador ha ganado

evaluaTirada( tiradajugador1, tiradajugador2) – Devuelve cual de los dos jugadores ha ganado la tirada ( piedra gana tijera, tijeras gana papel y papel gana piedra) y le da un punto al jugador ganador.

juego() - Primero pedimos los nombres de los jugadores, y jugamos al mejor de 3.
*/

class juego {
    constructor(jugador1 = "Jugador 1", jugador2 = "Jugador 2") {
        this.jugador1 = jugador1;
        this.jugador2 = jugador2;
        this.opcion = ["piedra", "papel", "tijera"];
        this.puntuacionJ1 = 0;
        this.puntuacionJ2 = 0;
        this.ronda = 0;
    }

    preguntarNombre() {
        let nombrejugador1 = prompt("Introduzca el nombre del Jugador 1: ");
        let nombrejugador2 = prompt("Introduzca el nombre del Jugador 2: ");
        if (nombrejugador1 == "") {
            return this.jugador1, this.jugador2;
        } else {
            document.getElementById("lj1").innerHTML = nombrejugador1 + " :";
            document.getElementById("lj2").innerHTML = nombrejugador2 + " :";
            return this.jugador1 = nombrejugador1, this.jugador2 = nombrejugador2;
        }
    }


    numeroRandom() {
        return parseInt(Math.random() * 3);
    }

    tiradaJugador() {
        return this.opcion[this.numeroRandom()];
    }

    evaluarTirada(tiradaJ1, tiradaJ2) {
        if (tiradaJ1 == this.opcion[0] && tiradaJ2 == this.opcion[1]) {
            this.puntuacionJ2++;
            return this.jugador2 + " gana &#127881";
            //J1: Piedra J2: Tijera
        } else if (tiradaJ1 == this.opcion[0] && tiradaJ2 == this.opcion[2]) {
            this.puntuacionJ1++;
            return this.jugador1 + " gana &#127881";
            //J1: Piedra J2: Papel
        } else if (tiradaJ1 == this.opcion[0] && tiradaJ2 == this.opcion[1]) {
            this.puntuacionJ1++;
            return this.jugador2 + " gana &#127881";
            //J1: Papel J2: Piedra
        } else if (tiradaJ1 == this.opcion[1] && tiradaJ2 == this.opcion[0]) {
            this.puntuacionJ1++;
            return this.jugador1 + " gana &#127881";
            //J1: Papel J2: Tijera
        } else if (tiradaJ1 == this.opcion[1] && tiradaJ2 == this.opcion[2]) {
            this.puntuacionJ2++;
            return this.jugador2 + " gana &#127881";
            //J1: Tijera J2: Piedra
        } else if (tiradaJ1 == this.opcion[2] && tiradaJ2 == this.opcion[0]) {
            this.puntuacionJ2++;
            return this.jugador2 + " gana &#127881";
            //J1: Tijera J2: Papel
        } else if (tiradaJ1 == this.opcion[2] && tiradaJ2 == this.opcion[1]) {
            this.puntuacionJ1++;
            return this.jugador1 + " gana &#127881";
        } else {
            return "Empate";
        }
    }

    imprimirResultados() {
        let tiradaJ1 = document.getElementById("j1").value;
        let tiradaJ2 = document.getElementById("j2").value;
        if (this.opcion.includes(tiradaJ1) && this.opcion.includes(tiradaJ2)) {
            document.getElementById("resultado").innerHTML += "<br> Ronda " + this.ronda;
            document.getElementById("resultado").innerHTML += "<br> " + this.jugador1 + ": " + tiradaJ1 + " <br> " + this.jugador2 + ": " + tiradaJ2;
            document.getElementById("resultado").innerHTML += "<br>" + this.evaluarTirada(tiradaJ1, tiradaJ2);
            document.getElementById("resultado").innerHTML += "<br> Puntuacion: <br>" + this.jugador1 + ": " + this.puntuacionJ1 + "<br>" + this.jugador2 + ": " + this.puntuacionJ2 + "<br>";
            this.ronda++;
        } else {
            alert("Error \n Han introducido un valor incorrecto. Vuelve a intentarlo \n Revisen sus jugadas: "+tiradaJ1+" "+tiradaJ2);
        }
    }
}

const partida = new juego();
partida.preguntarNombre();

function piedraPapelTijera() {

    partida.imprimirResultados();
    console.log(partida.j1);
    console.log(partida.puntuacionJ1);
    console.log(partida.puntuacionJ2);

}