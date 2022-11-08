const nombre = document.getElementById("nombre");
const apellido = document.getElementById("surname");
const dni = document.getElementById("dni");
const seleccionCP = document.getElementById("codigop");
const otroCP = document.getElementById("cptext");
const fechaida= document.getElementById("fechaida");
const numerop = document.getElementById("numerop");
nombre.addEventListener('input', validarNombreApellido);
apellido.addEventListener('input', validarNombreApellido);
dni.addEventListener('input', validarDNI);
seleccionCP.addEventListener('input', validarSeleccionCP);
otroCP.addEventListener('input',validarOtroCP);
fechaida.addEventListener('input', validarFecha);
numerop.addEventListener('input',validarNumerop);




/** Código Postal */
/** Para que al recargar la página no se muestre el campo oculto este fue la manera la cual lo enfoque */
if (seleccionCP.value == "Otro") {
    document.getElementById("cptext").style.display = 'block';
}else{
    document.getElementById("cptext").style.display = 'none';
    
}

function validarSeleccionCP(){
    let otherCP = document.getElementById("cptext");
    if (seleccionCP.value == "Otro") {
        otherCP.style.display = 'block';
    }else{
        otherCP.style.display = 'none';
        
    }

}

function validarOtroCP(){
    const regExp= /^(?:0[1-9]\d{3}|[1-4]\d{4}|5[0-2]\d{3})$/;
    if (regExp.test(otroCP.value)) {
        document.getElementById("cptextError").innerHTML = "";
        otroCP.style.borderColor = 'green';
        otroCP.style.color = 'green';
        otroCP.style.border = '3px solid';
    }else{
        document.getElementById("cptextError").innerHTML = "Error. Código Postal inválido";
        otroCP.style.borderColor = 'red';
        otroCP.style.color = 'red';
    }
}

/** Número de personas */

function validarNumerop(){
    const regularExp = /\D/;
    if (regularExp.test(numerop.value)) {
        document.getElementById("nPersonasError").innerHTML = "Error. El nombre no puede contener dígitos";
        numerop.style.borderColor = 'red';
        numerop.style.color = 'red';
    } else {
        document.getElementById("nPersonasError").innerHTML = "";
        numerop.style.borderColor = 'green';
        numerop.style.color = 'green';
        numerop.style.border = '3px solid';
    }
}

/** Nombre y Apellido */

function validarNombreApellido() {
    const regExp = /\d/;

    if (regExp.test(nombre.value)) {
        document.getElementById("nombreError").innerHTML = "Error. El nombre no puede contener dígitos";
        nombre.style.borderColor = 'red';
        nombre.style.color = 'red';
    } else {
        document.getElementById("nombreError").innerHTML = "";
        nombre.style.borderColor = 'green';
        nombre.style.color = 'green';
        numerop.style.border = '3px solid';
    }

    if (
        regExp.test(apellido.value)) {
        document.getElementById("apellidoError").innerHTML = "Error. El apellido no puede contener dígitos";
        apellido.style.borderColor = 'red';
        apellido.style.color = 'red';
    } else {
        document.getElementById("apellidoError").innerHTML = "";
        apellido.style.borderColor = 'green';
        apellido.style.color = 'green';
        numerop.style.border = '3px solid';
    }


}

/** DNI */
function validarDNI() {
    const regExpDNI = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]$/i
    const regExpNIE = /^[XYZ][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKET]$/i
    if (regExpDNI.test(dni.value) || regExpNIE.test(dni.value)) {
        document.getElementById("dniError").innerHTML = "";
        dni.style.borderColor = 'green';
        dni.style.color = 'green';
    } else {
        document.getElementById("dniError").innerHTML = "Error. DNI/NIE está erróneo";
        dni.style.borderColor = 'red';
        dni.style.color = 'red';
    }
}

/** Fecha */
function validarFecha(){
    const regExp = /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/
    if (regExp.test(fechaida.value)) {
        document.getElementById("fechaidaError").innerHTML = "";
        fechaida.style.borderColor = 'green';
        fechaida.style.color = 'green';

    } else {
        document.getElementById("fechaidaError").innerHTML = "Error. Fecha inválida. Formato: dd/mm/yyyy";
        fechaida.style.borderColor = 'red';
        fechaida.style.color = 'red';
    }
}

function validarForm() {
    validarNombreApellido();
}
