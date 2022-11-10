const nombre = document.getElementById("nombre");
const apellido = document.getElementById("surname");
const dni = document.getElementById("dni");
const seleccionCP = document.getElementById("codigop");
const otroCP = document.getElementById("cptext");
const fechaida = document.getElementById("fechaida");
const numerop = document.getElementById("numerop");
const tlffijo = document.getElementById("tlffijo");
const tlfmovil = document.getElementById("tlfmovil");
const email = document.getElementById("mail");
const twitter = document.getElementById("twitter");
const instagram = document.getElementById("instagram");
const interruptorVehiculo = document.getElementById("vehiculoTrue");
const matricula = document.getElementById("matricula");
const ip = document.getElementById("suip");
nombre.addEventListener('input', validarNombreApellido);
apellido.addEventListener('input', validarNombreApellido);
dni.addEventListener('input', validarDNI);
seleccionCP.addEventListener('input', validarSeleccionCP);
otroCP.addEventListener('input', validarOtroCP);
fechaida.addEventListener('input', validarFecha);
numerop.addEventListener('input', validarNumerop);
tlffijo.addEventListener('input', validarTlffijo);
tlfmovil.addEventListener('input', validarTlfmovil);
email.addEventListener('input', validarMail);
twitter.addEventListener('input', validarTw);
instagram.addEventListener('input', validarInsta);
interruptorVehiculo.addEventListener('input', mostrarDetalles);
matricula.addEventListener('input', validarMatricula);
ip.addEventListener('input', validarIP);

/** IP */
function validarIP() {
    const regExp= /((^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$)|(^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$))/;    
    if (regExp.test(ip.value)) {
        document.getElementById("suipError").innerHTML = "";
        ip.style.borderColor = 'green';
        ip.style.color = 'green';
        ip.style.border = '3px solid';
    } else {
        document.getElementById("suipError").innerHTML = "Error. IP inválida";
        ip.style.borderColor = 'red';
        ip.style.color = 'red';
    }
}

/** Opcion de vehiculo */
function mostrarDetalles() {
    if (interruptorVehiculo.checked) {
        document.getElementById("caractCoche").classList.remove("oculto");
        document.getElementById("caractCoche").classList.add("detallesCoche");
        validarMatricula();
    } else {
        document.getElementById("caractCoche").classList.remove("detallesCoche");
        document.getElementById("caractCoche").classList.add("oculto");

    }
}

function validarMatricula() {
    const regExp = /^\d{4}-\w{3}$/
    if (regExp.test(matricula.value)) {
        document.getElementById("matriculaVehiculoError").innerHTML = "";
        matricula.style.borderColor = 'green';
        matricula.style.color = 'green';
        matricula.style.border = '3px solid';
    } else {
        document.getElementById("matriculaVehiculoError").innerHTML = "Error. Matricula no válida";
        matricula.style.borderColor = 'red';
        matricula.style.color = 'red';
    }
}

/** Redes sociales */

function validarTw() {
    const regExp = /^\@[\w_-]{1,15}$/;
    if (regExp.test(twitter.value)) {
        document.getElementById("twitterError").innerHTML = "";
        twitter.style.borderColor = 'green';
        twitter.style.color = 'green';
        twitter.style.border = '3px solid';
    } else {
        document.getElementById("twitterError").innerHTML = "Error. Carácter no válido";
        twitter.style.borderColor = 'red';
        twitter.style.color = 'red';
    }

}

function validarInsta() {
    const regExp = /^\@[\w_-]{1,15}$/;
    if (regExp.test(instagram.value)) {
        document.getElementById("instagramError").innerHTML = "";
        instagram.style.borderColor = 'green';
        instagram.style.color = 'green';
        instagram.style.border = '3px solid';
    } else {
        document.getElementById("instagramError").innerHTML = "Error. Carácter no válido";
        instagram.style.borderColor = 'red';
        instagram.style.color = 'red';
    }
}




/** Email */

function validarMail() {
    const regExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (regExp.test(email.value)) {
        document.getElementById("mailError").innerHTML = "";
        email.style.borderColor = 'green';
        email.style.color = 'green';
        email.style.border = '3px solid';
    } else {
        document.getElementById("mailError").innerHTML = "Error. Teléfono fijo no válido";
        email.style.borderColor = 'red';
        email.style.color = 'red';
    }
}


/** Telefono fijo y movil */

function validarTlffijo() {
    const regExp = /^(?:9[2-9]{2}\d{6}|91\d{7})$/
    if (regExp.test(tlffijo.value)) {
        document.getElementById("tlffijoError").innerHTML = "";
        tlffijo.style.borderColor = 'green';
        tlffijo.style.color = 'green';
        tlffijo.style.border = '3px solid';
    } else {
        document.getElementById("tlffijoError").innerHTML = "Error. Teléfono fijo no válido";
        tlffijo.style.borderColor = 'red';
        tlffijo.style.color = 'red';
    }

}

function validarTlfmovil() {
    const regExp = /^(?:\+34\s[6-8]\d{8}|0034\s[6-8]\d{8}|[0-9]{4}\s[0-9]{9})$/
    if (regExp.test(tlfmovil.value)) {
        document.getElementById("tlfmovilError").innerHTML = "";
        tlfmovil.style.borderColor = 'green';
        tlfmovil.style.color = 'green';
        tlfmovil.style.border = '3px solid';
    } else {
        document.getElementById("tlfmovilError").innerHTML = "Error. Teléfono móvil no válido";
        tlfmovil.style.borderColor = 'red';
        tlfmovil.style.color = 'red';
    }

}

/** Código Postal */
/** Para que al recargar la página no se muestre el campo oculto este fue la manera la cual lo enfoque */

/**
 * Elimina la clase "oculto" del elemento con id "cptext" si el valor del elemento con id "seleccionCP"
 * es "Otro", y agrega la clase "oculto" al elemento con id "cptext" si el valor del elemento con el id
 * "seleccionCP" no es "Otro"
 */
function validarSeleccionCP() {
    let otherCP = document.getElementById("cptext");
    if (seleccionCP.value == "Otro") {
        otherCP.classList.remove("oculto");
    } else {
        otherCP.classList.add("oculto");
        document.getElementById("cptextError").innerHTML = "";

    }

}

function validarOtroCP() {
    const regExp = /^(?:0[1-9]\d{3}|[1-4]\d{4}|5[0-2]\d{3})$/;
    if (regExp.test(otroCP.value)) {
        document.getElementById("cptextError").innerHTML = "";
        otroCP.style.borderColor = 'green';
        otroCP.style.color = 'green';
        otroCP.style.border = '3px solid';
    } else {
        document.getElementById("cptextError").innerHTML = "Error. Código Postal inválido";
        otroCP.style.borderColor = 'red';
        otroCP.style.color = 'red';
    }
}

/** Número de personas */

function validarNumerop() {
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
        nombre.style.border = '3px solid';
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
        apellido.style.border = '3px solid';
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
        dni.style.border = '3px solid';
    } else {
        document.getElementById("dniError").innerHTML = "Error. DNI/NIE está erróneo";
        dni.style.borderColor = 'red';
        dni.style.color = 'red';
    }
}

/** Fecha */
function validarFecha() {
    const regExp = /^([0-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/2(\d{4})$/
    if (regExp.test(fechaida.value)) {
        document.getElementById("fechaidaError").innerHTML = "";
        fechaida.style.borderColor = 'green';
        fechaida.style.color = 'green';
        fechaida.style.border = '3px solid';

    } else {
        document.getElementById("fechaidaError").innerHTML = "Error. Fecha inválida. Formato: dd/mm/yyyy";
        fechaida.style.borderColor = 'red';
        fechaida.style.color = 'red';
    }
}

function validarForm() {
    validarNombreApellido();
}
