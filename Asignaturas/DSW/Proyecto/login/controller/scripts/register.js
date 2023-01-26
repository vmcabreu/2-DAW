/* Obtener el valor de los campos de entrada. */
const usuario = document.getElementById("usuario");
const email = document.getElementById("mail");
const passwd = document.getElementById("passwd");
const confPasswd = document.getElementById("confpasswd");

/* Agregar un detector de eventos al campo de entrada motivo. */
nombre.addEventListener('input', validarUsuario);
email.addEventListener('input', validarMail);
passwd.addEventListener('input', validarPasswd);

function validarUsuario() {
    const regExp = /@_'\?¿¡!#\+-*\/.&%\$"ªº\[\]\{\}/;
    if (regExp.test(nombre.value) || regExp.test(apellido.value)) {
        document.getElementById("usuarioHelp").innerHTML = "Error. El nombre/apellidos no puede contener dígitos";
        nombre.style.borderColor = 'red';
        nombre.style.color = 'red';
        apellido.style.borderColor = 'red';
        apellido.style.color = 'red';
        return false;
    } else {
        document.getElementById("usuarioHelp").innerHTML = "";
        nombre.style.borderColor = 'green';
        nombre.style.color = 'green';
        nombre.style.border = '3px solid';
        apellido.style.borderColor = 'green';
        apellido.style.color = 'green';
        apellido.style.border = '3px solid';
        return true;
    }
}

function validarPasswd() {

}

function validarMail() {
    const regExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (regExp.test(email.value)) {
        document.getElementById("emailHelp").innerHTML = "";
        email.style.borderColor = 'green';
        email.style.color = 'green';
        email.style.border = '3px solid';
        return true;
    } else {
        document.getElementById("emailHelp").innerHTML = "Error. Email no válido";
        email.style.borderColor = 'red';
        email.style.color = 'red';
        return false;
    }
}
