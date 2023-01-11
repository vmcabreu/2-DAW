interface Habitaciones {
    habitacion: string;
    acciones: string[];
}

const salon: Habitaciones = {
    habitacion: "Salón",
    acciones: ["Ver la tele", "Leer un libro", "Jugar a videojuegos", "Navegar por internet"]
}

const cocina: Habitaciones = {
    habitacion: "Cocina",
    acciones: ["Comer algo rápido", "Preparar comida", "Beber alguna bebida"]
}

const banio: Habitaciones = {
    habitacion: "Baño",
    acciones: ["Lavarse las manos", "Ducharse", "Usar el retrete", "Lavarse los dientes"]
}

const dormitorio: Habitaciones = {
    habitacion: "Dormitorio",
    acciones: ["Siesta", "Dormir", "Leer en la cama",]
}

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

function getHora(): string {
    let horario: string[] = new Date().toLocaleString().split(" ");
    return horario[1].substring(0, horario[1].length - 3);
}

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
        btnHabitaciones?.appendChild(boton);
    }

    for (let i = 0; i < casa.habitantes.length; i++) {
        const opcion = document.createElement("option");
        const habitante = document.createTextNode(casa.habitantes[i]);
        opcion.appendChild(habitante);
        convivientes?.appendChild(opcion);

    }
}



function mostrarAcciones(boton: string | null): void {
    const paletaAcciones = document.getElementById("acciones");
    switch (boton) {
        case "Salón":
            for (let i = 0; i < casa.habitaciones[0].acciones.length; i++) {
                const boton = document.createElement("button");
                const accion = document.createTextNode(casa.habitaciones[0].acciones[i]);
                boton.appendChild(accion);
                boton.onclick = function () {
                    mostrarAcciones(boton.textContent);
                }
                boton.style.height = "5vh";
                paletaAcciones?.appendChild(boton);
                
            }
            break;

        default:
            break;
    }
}

function crearTablaAcciones(habitacion: string): void{
    switch (habitacion) {
        case "Salón":
                
            break;

        default:
            break;
    }
}





mostrarDatos();