//Apartado 1 - Mostrar nombre,apellido,dni y correo en el campo con id="datos" de los usuarios
function apartado1() {
    document.forms[0].elements[1].value += recorrerUsuarios() + "\n";
    document.forms.elements
}
function recorrerUsuarios() {
    let usuarios = [];
    for (let i = 4; i < document.forms.length; i++) {
        for (let j = 0; j < (document.forms[i].elements.length) - 1; j++) {
            usuarios.push(document.forms[i].elements[j].value);
        }
        usuarios.push("\n");
    }
    return usuarios;
}
/**
 * Apartado 2:
 * Cambiar los nombres de Usuario 1 y 2, el dni de Usuario 3 y 2. 
 * Muestra el resultado en el campo con id="cambio"
 */
function intercambiarNombre(Usuario1, Usuario2) {
    let nombreUsr1 = Usuario1.elements[1].value;
    let nombreUsr2 = Usuario2.elements[1].value;

    Usuario1.elements[1].value = nombreUsr2;
    Usuario2.elements[1].value = nombreUsr1;

}

function intercambiarDni(Usuario1, Usuario2) {
    let dniUsr1 = Usuario1.elements[3].value;
    let dniUsr2 = Usuario2.elements[3].value;

    Usuario1.elements[3].value = dniUsr1;
    Usuario2.elements[3].value = dniUsr2;

}

function apartado2() {
    intercambiarNombre(document.forms[4], document.forms[5]);
    intercambiarDni(document.forms[6], document.forms[5]);
    document.forms[0].elements[3].value += recorrerUsuarios() + "\n";
}
/**
 * Apartado 3:
 * Mostrar los movimientos bancarios en id="movimientos" y realizar dichos movimientos:
 * - Añadir 200€ a Usuario 2
 * - Usuario 3 hace una transferencia de 450€ a Usuario 1
 * - Usuario 1 retiró 500€
 */

let movimientos = "";

function ingresar() {
    let usuario = document.forms[1].elements[0].value;
    let ingreso = parseInt(document.forms[1].elements[1].value);
    for (let i = 4; i < document.forms.length; i++) {
        if (document.forms[i].elements[0].value == usuario) {
            let saldo = parseInt(document.forms[i].elements[5].value);
            document.forms[i].elements[5].value = ingreso + saldo;
            movimientos += usuario + " ha ingresado: " + ingreso + " € \n";
        }

    }
    console.log(movimientos);
}

function retirar() {
    let usuario = document.forms[2].elements[0].value;
    let retirada = parseInt(document.forms[2].elements[1].value);
    for (let i = 4; i < document.forms.length; i++) {
        if (document.forms[i].elements[0].value == usuario) {
            let saldo = parseInt(document.forms[i].elements[5].value);
            if (retirada > saldo) {
                movimientos += "La cantidad que desea retirar es superior a su saldo \n";
            }
            document.forms[i].elements[5].value = saldo - retirada;
            movimientos += usuario + " ha retirado: " + retirada + " € \n";
        }

    }
    console.log(movimientos);
}


function transferencia() {
    let benefactor = document.forms[3].elements[0].value;
    let beneficiado = document.forms[3].elements[1].value;
    let transferencia = parseInt(document.forms[3].elements[2].value)
    for (let i = 4; i < document.forms.length; i++) {
        if (document.forms[i].elements[0].value == benefactor) {
            let saldoBenefactor = parseInt(document.forms[i].elements[5].value);
            if (transferencia > saldoBenefactor) {
                movimientos += "La cantidad que desea transferir es superior a su saldo \n";
            } else {
                for (let j = 4; j < document.forms.length; j++) {
                    let saldoBeneficiado = parseInt(document.forms[j].elements[5].value);
                    if (document.forms[j].elements[0].value == beneficiado) {
                        document.forms[j].elements[5].value = saldoBeneficiado + transferencia;
                        document.forms[i].elements[5].value = saldoBenefactor - transferencia;
                        movimientos += benefactor + " ha transferido a " + beneficiado + " la cantidad de: " + transferencia + " € \n";
                    }
                }

            }
        }

    }
    console.log(movimientos);
}

function apartado3() {
    document.forms[0].elements[5].value += movimientos;
}




