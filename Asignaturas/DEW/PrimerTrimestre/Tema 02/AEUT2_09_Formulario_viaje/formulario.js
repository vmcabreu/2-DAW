/**
 * Script que valida los campos del formulario del viaje en barco
 * @author Víctor Manuel Cabrera Abreu 2ºDAW
 * @version 1.0
 */

/* Obtener el valor de los campos de entrada. */
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
const interruptorVehiculoT = document.getElementById("vehiculoTrue");
const interruptorVehiculoF = document.getElementById("vehiculoFalse");
const matricula = document.getElementById("matricula");
const ip = document.getElementById("suip");
const motivo = document.getElementById("motivos");
/* Agregar un detector de eventos al campo de entrada motivo. */
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
interruptorVehiculoT.addEventListener('input', mostrarDetalles);
interruptorVehiculoF.addEventListener('input', mostrarDetalles);
matricula.addEventListener('input', validarMatricula);
ip.addEventListener('input', validarIP);
motivo.addEventListener('input', validarMotivo);

/* Es una clase que representa a un viajero. */
class Viajero {
    /**
     * La función constructora es una función especial que se utiliza para crear e inicializar un
     * objeto creado dentro de una clase.
     * @param nombre - Nombre de la persona que va a ser el conductor.
     * @param apellido - Apellido
     * @param dni - Número de DNI
     * @param codigoPostal - código postal
     * @param tlfFijo - número de teléfono
     * @param tlfMovil - Número de teléfono móvil
     * @param fechaIda - fecha de salida
     * @param email - Dirección de correo electrónico del usuario
     * @param matricula - La placa del auto
     * @param motivo - El motivo de la visita.
     */
    constructor(nombre, apellido, dni, codigoPostal, tlfFijo, tlfMovil, fechaIda, email, matricula, motivo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.codigoPostal = codigoPostal;
        this.tlfFijo = tlfFijo;
        this.tlfMovil = tlfMovil;
        this.fechaIda = fechaIda;
        this.email = email;
        this.matricula = matricula;
        this.motivo = motivo;
    }

    /**
     * Devuelve una cadena con la información del objeto.
     * @returns El método toString() está devolviendo un String con la información del objeto.
     */
    toString() {
        return "Nombre: " + this.nombre + "\n Apellido: " + this.apellido + "\n DNI: " + this.dni + "\n Código Postal: " + this.codigoPostal + "\n Teléfono Fijo: " + this.tlfFijo + "\n Teléfono Móvil: " + this.tlfMovil + "\n Fecha Ida: " + this.fechaIda + "\n Email: " + this.email + "\n Matricula del Vehículo: " + this.matricula + "\n Motivo: " + this.motivo;
    }
}


/** Motivo */
let motivoObj;
/**
 * Comprueba si la primera letra está en mayúscula, si hay espacios al principio o al final de la
 * cadena, si hay una fecha en la cadena y si hay más de 10 palabras en la cadena.
 */
function validarMotivo() {
    let motivotxt = motivo.value;
    const regExpPrincipio = /^[A-Z]/;
    const regExpEspacios = /^\s+\w+\s$/;
    const regExpFecha = /(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/2(\d{3})/

    if (regExpPrincipio.test(motivo.value)) {
        document.getElementById("motivosError").innerHTML = "";
        motivo.style.borderColor = 'green';
        motivo.style.color = 'green';
        motivo.style.border = '3px solid';

    } else {
        document.getElementById("motivosError").innerHTML = "Motivo no empieza con mayúscula";
        motivo.style.borderColor = 'red';
        motivo.style.color = 'red';
    }
    if (regExpEspacios.test(motivo.value)) {
        motivotxt.trim();
        motivotxt.replace(/\s+/, " ");
    }
    if (regExpFecha.test(motivo.value)) {
        console.log(regExpFecha.exec(motivo.value))
    }
    let palabras = motivotxt.match(/\S+/g).length;
    console.log("Número de palabras: " + palabras);
    motivoObj = motivotxt;
}

/** IP */
/**
 * Comprueba si el valor del campo de entrada es una dirección IPv4 o IPv6 válida.
 * @returns un valor booleano.
 */
function validarIP() {
    const regExp = /((^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$)|(^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$))/;
    if (regExp.test(ip.value)) {
        document.getElementById("suipError").innerHTML = "";
        ip.style.borderColor = 'green';
        ip.style.color = 'green';
        ip.style.border = '3px solid';
        return true;
    } else {
        document.getElementById("suipError").innerHTML = "Error. IP inválida. Debe ser IPv4 o IPv6";
        ip.style.borderColor = 'red';
        ip.style.color = 'red';
        return false;
    }
}

/** Opcion de vehiculo */

let matriculaCoche = "";
/**
 * Si la casilla de verificación está marcada, elimine la clase "oculto" y agregue la clase
 * "detallesCoche" al div con el id "caractCoche".
 * Si la casilla de verificación no está marcada, elimine la clase "detallesCoche" y agregue la clase
 * "oculto" al div con el id "caractCoche".
 */
function mostrarDetalles() {
    if (interruptorVehiculoT.checked) {
        document.getElementById("caractCoche").classList.remove("oculto");
        document.getElementById("caractCoche").classList.add("detallesCoche");
        matricula.value = "";
        validarMatricula();
    } else if (interruptorVehiculoF.checked) {
        document.getElementById("caractCoche").classList.remove("detallesCoche");
        document.getElementById("caractCoche").classList.add("oculto");
        matricula.value = "0000-XXX"
    }
}


/**
 * Si el valor de la matricula coincide con la expresión regular, se elimina el mensaje de error,
 * el color del borde cambia a verde, el color del texto cambia a verde, el borde cambia a 3px sólido y
 * el valor de la matricula se asigna a la variable matriculaCoche. Si el valor del campo de
 * entrada no coincide con la expresión regular, se muestra el mensaje de error, el color del borde
 * cambia a rojo y el color del texto cambia a rojo.
 * @returns un valor booleano.
 */
function validarMatricula() {
    const regExp = /^\d{4}-\w{3}$/
    if (regExp.test(matricula.value)) {
        document.getElementById("matriculaVehiculoError").innerHTML = "";
        matricula.style.borderColor = 'green';
        matricula.style.color = 'green';
        matricula.style.border = '3px solid';
        matriculaCoche = matricula.value;
        return true;
    } else {
        document.getElementById("matriculaVehiculoError").innerHTML = "Error. Matricula no válida";
        matricula.style.borderColor = 'red';
        matricula.style.color = 'red';
        return false;
    }
}

/** Redes sociales */

/**
 * Si el valor de entrada coincide con la expresión regular, se elimina el mensaje de error, el color
 * del borde cambia a verde y la función devuelve verdadero. Si el valor de entrada no coincide con la
 * expresión regular, se muestra el mensaje de error, el color del borde cambia a rojo y la función
 * devuelve falso.
 * @returns un valor booleano.
 */
function validarTw() {
    const regExp = /^\@[\w_-]{1,15}$/;
    if (regExp.test(twitter.value)) {
        document.getElementById("twitterError").innerHTML = "";
        twitter.style.borderColor = 'green';
        twitter.style.color = 'green';
        twitter.style.border = '3px solid';
        return true;
    } else {
        document.getElementById("twitterError").innerHTML = "Error. Carácter no válido";
        twitter.style.borderColor = 'red';
        twitter.style.color = 'red';
        return false;
    }

}


/**
 * Si el valor de entrada coincide con la expresión regular, se elimina el mensaje de error, el color
 * del borde cambia a verde y la función devuelve verdadero. Si el valor de entrada no coincide con la
 * expresión regular, se muestra el mensaje de error, el color del borde cambia a rojo y la función
 * devuelve falso.
 * @returns un valor booleano.
 */
function validarInsta() {
    const regExp = /^\@[\w_-]{1,15}$/;
    if (regExp.test(instagram.value)) {
        document.getElementById("instagramError").innerHTML = "";
        instagram.style.borderColor = 'green';
        instagram.style.color = 'green';
        instagram.style.border = '3px solid';
        return true;
    } else {
        document.getElementById("instagramError").innerHTML = "Error. Carácter no válido";
        instagram.style.borderColor = 'red';
        instagram.style.color = 'red';
        return false;
    }
}




/** Email */

/**
 * Si la dirección de correo electrónico es válida, el borde del campo de entrada será verde; de lo
 * contrario, será rojo.
 * @returns un valor booleano.
 */
function validarMail() {
    const regExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (regExp.test(email.value)) {
        document.getElementById("mailError").innerHTML = "";
        email.style.borderColor = 'green';
        email.style.color = 'green';
        email.style.border = '3px solid';
        return true;
    } else {
        document.getElementById("mailError").innerHTML = "Error. Email no válido";
        email.style.borderColor = 'red';
        email.style.color = 'red';
        return false;
    }
}


/** Telefono fijo y movil */
/**
 * Si el valor del teléfono fijo coincide con la expresión regular, la función devuelve verdadero;
 * de lo contrario, devuelve falso.
 * @returns un valor booleano.
 */
function validarTlffijo() {
    const regExp = /^(?:9[2-9]{2}\d{6}|91\d{7})$/
    if (regExp.test(tlffijo.value)) {
        document.getElementById("tlffijoError").innerHTML = "";
        tlffijo.style.borderColor = 'green';
        tlffijo.style.color = 'green';
        tlffijo.style.border = '3px solid';
        return true;
    } else {
        document.getElementById("tlffijoError").innerHTML = "Error. Teléfono fijo no válido";
        tlffijo.style.borderColor = 'red';
        tlffijo.style.color = 'red';
        return false;
    }

}


/**
 * Si el valor del teléfono móvil coincide con la expresión regular, la función devuelve verdadero;
 * de lo contrario, devuelve falso.
 * @returns un valor booleano.
 */
function validarTlfmovil() {
    const regExp = /^(?:\+34\s[6-8]\d{8}|0034\s[6-8]\d{8}|[0-9]{4}\s[0-9]{9})$/
    if (regExp.test(tlfmovil.value)) {
        document.getElementById("tlfmovilError").innerHTML = "";
        tlfmovil.style.borderColor = 'green';
        tlfmovil.style.color = 'green';
        tlfmovil.style.border = '3px solid';
        return true;
    } else {
        document.getElementById("tlfmovilError").innerHTML = "Error. Teléfono móvil no válido";
        tlfmovil.style.borderColor = 'red';
        tlfmovil.style.color = 'red';
        return false;
    }

}

/** Código Postal */
/**
 * Elimina la clase "oculto" del elemento con id "cptext" si el valor del elemento con id "seleccionCP"
 * es "Otro", y agrega la clase "oculto" al elemento con id "cptext" si el valor del elemento con el id
 * "seleccionCP" no es "Otro"
 */
let cpValido = seleccionCP.value;
function validarSeleccionCP() {
    let otherCP = document.getElementById("cptext");
    if (seleccionCP.value == "Otro") {
        otherCP.classList.remove("oculto");
    } else {
        otherCP.classList.add("oculto");
        document.getElementById("cptextError").innerHTML = "";

    }

}

/**
 * Si el valor del código postal coincide con la expresión regular, la función devuelve verdadero;
 * de lo contrario, devuelve falso.
 * @returns un valor booleano.
 */
function validarOtroCP() {
    const regExp = /^(?:0[1-9]\d{3}|[1-4]\d{4}|5[0-2]\d{3})$/;
    if (regExp.test(otroCP.value)) {
        document.getElementById("cptextError").innerHTML = "";
        otroCP.style.borderColor = 'green';
        otroCP.style.color = 'green';
        otroCP.style.border = '3px solid';
        cpValido = otroCP.value;
        return true;
    } else {
        document.getElementById("cptextError").innerHTML = "Error. Código Postal inválido";
        otroCP.style.borderColor = 'red';
        otroCP.style.color = 'red';
        return false;
    }
}

/** Número de personas */
/**
 * Si el valor de entrada contiene caracteres que no son dígitos, muestra un mensaje de error y
 * devuelve falso. De lo contrario, borre el mensaje de error y devuelva verdadero.
 * @returns un valor booleano.
 */
function validarNumerop() {
    const regularExp = /\D|0/;
    if (regularExp.test(numerop.value)) {
        document.getElementById("nPersonasError").innerHTML = "Error. El número debe ser mayor a 0";
        numerop.style.borderColor = 'red';
        numerop.style.color = 'red';
        return false;
    } else {
        document.getElementById("nPersonasError").innerHTML = "";
        numerop.style.borderColor = 'green';
        numerop.style.color = 'green';
        numerop.style.border = '3px solid';
        return true;
    }
}

/** Nombre y Apellido */

/**
 * Si el valor de entrada contiene un dígito, muestra un mensaje de error y cambia el color del borde a
 * rojo. De lo contrario, elimine el mensaje de error y cambie el color del borde a verde.
 * @returns un valor booleano.
 */
function validarNombreApellido() {
    const regExp = /\d/;
    if (regExp.test(nombre.value) || regExp.test(apellido.value)) {
        document.getElementById("nombreError").innerHTML = "Error. El nombre/apellidos no puede contener dígitos";
        nombre.style.borderColor = 'red';
        nombre.style.color = 'red';
        apellido.style.borderColor = 'red';
        apellido.style.color = 'red';
        return false;
    } else {
        document.getElementById("nombreError").innerHTML = "";
        nombre.style.borderColor = 'green';
        nombre.style.color = 'green';
        nombre.style.border = '3px solid';
        apellido.style.borderColor = 'green';
        apellido.style.color = 'green';
        apellido.style.border = '3px solid';
        return true;
    }
}

/** DNI */

/**
 * Comprueba si el DNI/NIE es válido. Si el valor del DNI o NIE coincide con la expresión regular, se elimina el mensaje de error,
 * el color del borde cambia a verde y la función devuelve verdadero. De lo contrario, se muestra el
 * mensaje de error, el color del borde cambia a rojo y la función devuelve falso.
 * @returns verdadero o falso.
 */
function validarDNI() {
    const regExpDNI = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]$/i
    const regExpNIE = /^[XYZ][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKET]$/i
    if (validarNumeroDNINIE("dni") || validarNumeroDNINIE("nie")) {
        document.getElementById("dniError").innerHTML = "";
        dni.style.borderColor = 'green';
        dni.style.color = 'green';
        dni.style.border = '3px solid';
        return true;
    } else {
        document.getElementById("dniError").innerHTML = "Error. DNI/NIE está erróneo";
        dni.style.borderColor = 'red';
        dni.style.color = 'red';
        return false;
    }
}

/**
 * Valida el DNI y NIE y los números.
 * @param campo - El campo a validar.
 * @returns Un valor booleano.
 */
function validarNumeroDNINIE(campo) {
    const regExpLetra = "TRWAGMYFPDXBNJZSQVHLCKET";
    const regExpDNI = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]$/i;
    const regExpNIE = /^[XYZ][0-9]{7}[A-Z]$/i;
    if (campo == "dni" || campo == "DNI") {
        if (regExpDNI.test(dni.value)) {
            let letra = dni.value.substr(-1);
            let numero = Number(dni.value.substr(0, 8));
            let charInd = numero % 23;
            let calcularLetra = regExpLetra.charAt(charInd);
            return (letra == calcularLetra);
        }
    } else if (campo == "nie" || campo == "NIE") {
        /*NIE de prueba Y8275444N*/
        if (regExpNIE.test(dni.value)) {
            let nie = dni.value.substr(0, 8);
            let letra = dni.value.substr(-1);
            nie = nie.replace("X", 0).replace("Y", 1).replace("Z", 2);
            let numero = Number(nie);
            let charInd = numero % 23;
            let calcularLetra = regExpLetra.charAt(charInd);
            return (letra == calcularLetra);
        }
    }
}


/**
 * Si el valor de la fecha coincide con la expresión regular, la función devuelve verdadero;
 * de lo contrario, devuelve falso.
 * @returns un valor booleano.
 */
function validarFecha() {
    const regExp = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/2(\d{3})$/
    if (regExp.test(fechaida.value)) {
        document.getElementById("fechaidaError").innerHTML = "";
        fechaida.style.borderColor = 'green';
        fechaida.style.color = 'green';
        fechaida.style.border = '3px solid';
        return true;

    } else {
        document.getElementById("fechaidaError").innerHTML = "Error. Fecha inválida. Formato: dd/mm/yyyy";
        fechaida.style.borderColor = 'red';
        fechaida.style.color = 'red';
        return false;
    }
}

/**
 * Valida el formulario y crea un nuevo objeto de la clase Viajero si el formulario es válido. 
 * Si el usuario selecciona "Otro" en el elemento de selección, entonces la función valida el
 * formulario y crea un nuevo objeto con los datos ingresados por el usuario. Si el usuario selecciona
 * cualquier otra opción, entonces la función valida el formulario y crea un nuevo objeto con los datos
 * ingresados por el usuario.
 */
function validarForm() {

    if (seleccionCP.value == "Otro") {
        if (validarNombreApellido() && validarDNI() && validarFecha() && validarOtroCP() && validarTlffijo() && validarTlfmovil() && validarMail() && validarMatricula()) {
            const pasajero = new Viajero(nombre.value, apellido.value, dni.value, cpValido, tlffijo.value, tlfmovil.value, fechaida.value, email.value, matriculaCoche, motivoObj);
            console.log(pasajero);
            console.log(pasajero.toString());

        }
    } else {
        if (validarNombreApellido() && validarDNI() && validarFecha() && validarTlffijo() && validarTlfmovil() && validarMail() && validarMatricula()) {
            const pasajero = new Viajero(nombre.value, apellido.value, dni.value, cpValido, tlffijo.value, tlfmovil.value, fechaida.value, email.value, matriculaCoche, motivoObj);
            console.log(pasajero);
            console.log(pasajero.toString());
        }
    }
}
