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

function piedraPapelTijera() {
    class juego {
        constructor() {
            this.jugador1;
            this.jugador2 = "Jugador 2";
            this.opcion = ["Piedra", "Papel", "Tijera"];
            this.puntuacionJ1 = 0;
            this.puntuacionJ2 = 0;
        }

        preguntarNombre(nombre) {
            this.jugador1 = prompt("Introduzca su nombre: ");
        }

        numeroRandom() {
            return parseInt(Math.random * 3);
        }

        tiradaJugador() {
            return this.opcion[this.numeroRandom()];
        }

        evaluarTirada(tiradaJ1, tiradaJ2) {
            if (tiradaJ1 == this.opcion[0] && tiradaJ2 == this.opcion[1]) {
                this.puntuacionJ2 += 1;
                return "Jugador 2 gana";
            } else if (tiradaJ1 == this.opcion[0] && tiradaJ2 == this.opcion[2]) {
                this.puntuacionJ1 += 1;
                return "Jugador 1 gana";
            } else if (tiradaJ1 == this.opcion[1] && tiradaJ2 == this.opcion[0]) {
                this.puntuacionJ1 += 1;
                return "Jugador 1 gana";
            } else if (tiradaJ1 == this.opcion[1] && tiradaJ2 == this.opcion[2]) {
                this.puntuacionJ2 += 1;
                return "Jugador 2 gana";
            } else if (tiradaJ1 == this.opcion[2] && tiradaJ2 == this.opcion[0]) {
                this.puntuacionJ2 += 1;
                return "Jugador 2 gana";
            } else if (tiradaJ1 == this.opcion[2] && tiradaJ2 == this.opcion[1]) {
                this.puntuacionJ1 += 1;
                return "Jugador 1 gana";
            } else {
                return "Empate"
            }
        }

        imprimirResultados() {
            let tiradaJ1 = this.tiradaJugador();
            let tiradaJ2 = this.tiradaJugador();
            document.getElementById("resultado").innerHTML = "Jugador 1: " + tiradaJ1 + " <br> Jugador:2" + tiradaJ2;
            document.getElementById("resultado").innerHTML += "<br>" + this.evaluarTirada(tiradaJ1,tiradaJ2);
            document.getElementById("resultado").innerHTML += "<br> Puntuacion: <br>Jugador 1: "+this.puntuacionJ1+"<br>Jugador 2: "+this.puntuacionJ2+"<br>";

        }

    }

    const partida = new juego();
    juego.preguntarNombre();
    let puntuacionJ1 = juego.puntuacionJ1;
    let puntuacionJ2 = juego.puntuacionJ2;
    while(puntuacionJ1 <= 3 || puntuacionJ2 <=3){
        juego.imprimirResultados();
    }

}