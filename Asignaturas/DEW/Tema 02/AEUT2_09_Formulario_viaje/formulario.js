const nombre = document.getElementById("nombre");
const apellido = document.getElementById("surname");
const dni = document.getElementById("dni");
nombre.addEventListener('input', validarNombreApellido);
apellido.addEventListener('input', validarNombreApellido);
dni.addEventListener('input', validarDNI);


function validarNombreApellido() {
    const regExp = /\d/;

    if (regExp.test(nombre.value)) {
        document.getElementById("nombreError").innerHTML = "Error. El nombre no puede contener dígitos";
        nombre.style.borderColor = 'red'
        nombre.style.color = 'red'
    } else {
        document.getElementById("nombreError").innerHTML = "";
        nombre.style.borderColor = 'green'
        nombre.style.color = 'green'
    }

    if (
        regExp.test(apellido.value)) {
        document.getElementById("apellidoError").innerHTML = "Error. El apellido no puede contener dígitos";
        apellido.style.borderColor = 'red'
        apellido.style.color = 'red'
    } else {
        document.getElementById("apellidoError").innerHTML = "";
        apellido.style.borderColor = 'green'
        apellido.style.color = 'green'
    }


}

function validarDNI() {
    const regExpDNI = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]$/i
    const regExpNIE = /^[XYZ][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKET]$/i
    if (regExpDNI.test(dni.value) || regExpNIE.test(dni.value)) {
        document.getElementById("dniError").innerHTML = "";
        dni.style.borderColor = 'green'
        dni.style.color = 'green'
    } else {
        document.getElementById("dniError").innerHTML = "Error. DNI/NIE está erróneo";
        dni.style.borderColor = 'red'
        dni.style.color = 'red'
    }
}


function validarForm() {
    validarNombreApellido();
}
