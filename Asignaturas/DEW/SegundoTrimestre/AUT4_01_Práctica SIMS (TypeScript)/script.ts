interface Habitaciones {
    habitacion: string;
    acciones: string[];
}

const salon: Habitaciones = {
    habitacion: "Salón",
    acciones: ["ve la tele", "lee un libro", "juega a videojuegos", "navega por internet"]
}

const cocina: Habitaciones = {
    habitacion: "Cocina",
    acciones: ["come alguna golosina", "se prepara la comida", "bebe alguna bebida de la nevera"]
}

const banio: Habitaciones = {
    habitacion: "Baño",
    acciones: ["se lava las manos", "empieza a ducharse", "usa el retrete", "se lava los dientes"]
}

const dormitorio: Habitaciones = {
    habitacion: "Dormitorio",
    acciones: ["se hecha una siesta", "intenta dormir", "se pone a leer en la cama",]
}

/* La clase Casa la cual contiene un array de cadenas de habitantes y un array de objetos Habitaciones de habitaciones */
class Casa {
    habitantes: string[];
    habitaciones: Habitaciones[];

    public constructor(habitantes: string[], habitaciones: Habitaciones[]) {
        this.habitaciones = habitaciones;
        this.habitantes = habitantes;
    }
}

const nombres: string[] = ["Carlos", "Gonzalo", "Luisa", "Fernando", "Amacio", "Carolina"];
const habitaciones: Habitaciones[] = [salon, cocina, banio, dormitorio];
const casa = new Casa(nombres, habitaciones);

/**
 * Devuelve la hora actual en el formato HH:MM:SS
 * @returns La hora actual en el formato HH:MM:SS
 */
function getHora(): string {
    let horario: string[] = new Date().toLocaleString().split(" ");
    return horario[1].substring(0, horario[1].length - 3);
}



/**
 * Crea botones para cada habitación de la casa y opciones para cada persona de la casa.
 */
function mostrarDatos() {
    const convivientes = document.getElementById("convivientes");
    const btnHabitaciones = document.getElementById("habitaciones");
    for (let i = 0; i < casa.habitaciones.length; i++) {
        const boton = document.createElement("button");
        const habitacion = document.createTextNode(casa.habitaciones[i].habitacion);
        boton.appendChild(habitacion);
        boton.onclick = function () {
            mostrarAcciones(boton.textContent);
        }
        boton.style.height = "5vh";
        boton.classList.add("btn", "btn-primary");
        btnHabitaciones?.appendChild(boton);
    }

    for (let i = 0; i < casa.habitantes.length; i++) {
        const opcion = document.createElement("option");
        const habitante = document.createTextNode(casa.habitantes[i]);
        opcion.appendChild(habitante);
        convivientes?.appendChild(opcion);

    }
}



/**
 * Toma una cadena como parámetro y, según el valor de esa cadena, creará un elemento de párrafo y le
 * agregará un nodo de texto, que será el nombre de una persona, una acción aleatoria de la matriz de
 * acciones de la habitación y la hora actual
 * @param {string | null} boton - cadena | nulo
 */
function mostrarAcciones(boton: string | null): void {
    const log = document.getElementById("accioneslog");
    const habitantes = (document.getElementById("convivientes")) as HTMLSelectElement;
    switch (boton) {
        case "Salón":
            for (let i = 0; i < habitantes.selectedOptions.length; i++) {
                const parg = document.createElement("p");
                const accion = document.createTextNode(habitantes.selectedOptions[i].value + " " + casa.habitaciones[0].acciones[Math.floor(Math.random() * (casa.habitaciones[0].acciones.length - 1))] + " desde las " + getHora());
                parg?.appendChild(accion);
                log?.appendChild(parg);
            }
            break;

        case "Cocina":
            for (let i = 0; i < habitantes.selectedOptions.length; i++) {
                const parg = document.createElement("p");
                const accion = document.createTextNode(habitantes.selectedOptions[i].value + " " + casa.habitaciones[1].acciones[Math.floor(Math.random() * (casa.habitaciones[0].acciones.length - 1))] + " desde las " + getHora());
                parg?.appendChild(accion);
                log?.appendChild(parg);
            }
            break;

        case "Baño":
            for (let i = 0; i < habitantes.selectedOptions.length; i++) {
                const parg = document.createElement("p");
                const accion = document.createTextNode(habitantes.selectedOptions[i].value + " " + casa.habitaciones[2].acciones[Math.floor(Math.random() * (casa.habitaciones[0].acciones.length - 1))] + " desde las " + getHora());
                parg?.appendChild(accion);
                log?.appendChild(parg);
            }
            break;

        case "Dormitorio":
            for (let i = 0; i < habitantes.selectedOptions.length; i++) {
                const parg = document.createElement("p");
                const accion = document.createTextNode(habitantes.selectedOptions[i].value + " " + casa.habitaciones[3].acciones[Math.floor(Math.random() * (casa.habitaciones[0].acciones.length - 1))] + " desde las " + getHora());
                parg?.appendChild(accion);
                log?.appendChild(parg);
            }
            break;

        default:
            break;
    }
}






mostrarDatos();