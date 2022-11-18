const color = document.getElementById("borderColor");
const contenedorImgs = document.getElementById("imagenes");

for (let i = 1; i <= 20; i++) {
    let img = document.createElement('img');
    if (i < 10) {
        img.src = "../imgs/image0" + i + ".jpg";
        img.classList.add("col-3");
        contenedorImgs.appendChild(img);

    } else {
        img.src = "../imgs/image" + i + ".jpg";
        img.classList.add("col-3");
        contenedorImgs.appendChild(img);
    }
}

/**
 * Comprueba si el valor del campo de entrada coincide con la expresión regular. Si es así, devuelve
 * verdadero, de lo contrario, devuelve falso
 * @returns un valor booleano.
 */
function validarHex() {
    const regExpHex = /^#([A-F0-9]{3}){1,2}/i;
    if (regExpHex.test(color.value)) {
        return true;
    } else {
        alert("Color no válido. Solo admite formato hexadecimal");
        return false;
    }
}

function generarImagen() {
    e.preventDefault();
    if (validarHex()) {
        contenedorImgs.innerHTML = ' ';
    }

}