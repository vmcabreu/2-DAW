/**
 * Queremos crear un objeto llamado bola que guarde: 

    Coordenadas x  e  y: las coordenadas horizontal y vertical donde comienza la bola en la pantalla. Esto puede oscilar entre 0 (esquina superior izquierda) y el ancho y alto de la ventana del navegador (esquina inferior derecha)- 600.
    velocidad horizontal y vertical (velX y velY): a cada bola se le asigna una velocidad horizontal y vertical; en términos reales, estos valores se agregan regularmente a los valores de las coordenadas x / y cuando animamos las bolas, para moverlas tanto en cada cuadro.
    color: cada bola tiene un color.
    tamaño: cada bola tiene un tamaño: este es su radio, en píxeles.

Esta 'bola' tendrá un método 'dibuja' donde vamos a mostrar las coordenadas de la bola, y otro método 'mover', donde la bola va a avanzar y tomará la nueva posición ( x e y ) de x+velX.
*/
function bola() {
    class bola {
        constructor(x = 0, y = 0, velx = 0, vely = 0, color = "blanco", tamanio = 6) {
            this.x = x;
            this.y = y;
            this.velx = velx;
            this.vely = vely;
            this.color = color;
            this.tamanio = tamanio;
        }

        dibuja() {
            return "Bola:" + this.color + ". <br> x= " + this.x + " y= " + this.y+"<br>";
        }

        mover(velx = this.velx,vely = this.vely) {
            this.x += velx;
            this.y += vely;
        }

    }

    const bolax = new bola(4, 9);
    document.getElementById("resultado").innerHTML = bolax.dibuja();
    bolax.mover(5);
    document.getElementById("resultado").innerHTML += "<br>"+bolax.dibuja();

}