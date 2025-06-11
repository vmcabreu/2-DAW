/* Obtener los elementos del archivo HTML. */
const imgSize = document.getElementById("size");
const anchoBorde = document.getElementById("borderWidth");
const colorBorde = document.getElementById("borderColor");
const enfoqueSigma = document.getElementById('enfoqueSigma');
const enfoqueRadio = document.getElementById('enfoqueRadio');
const desenfoqueSigma = document.getElementById('desenfoqueSigma');
const desenfoqueRadio = document.getElementById('desenfoqueRadio');
const contenedorImgs = document.getElementById("imagenes");
const form = document.getElementById('form');

/* Impedir que se envíe el formulario. */
form.addEventListener('submit', (e) => e.preventDefault());

/* Crear 20 imágenes y agregarlas al div con id="imagenes" */
for (let i = 1; i <= 20; i++) {
    let img = document.createElement('img');
        img.src = "../imgs/image" + ('0'+i).slice(-2) + ".jpg";
        img.classList.add("col-3");
        contenedorImgs.appendChild(img);
}

/**
 * Crea 20 imágenes, cada una con los atributos insertados en el formulario, y las agrega a un div.
 */
function editarImagen() {
    let color = colorBorde.value.replace("#", "");
    for (let i = 1; i <= 20; i++) {
        let img = document.createElement('img');
       
            img.src = "../imgs/image" + ('0'+i).slice(-2) + ".jpg?dw=" + imgSize.value + "&dh=" + imgSize.value + "&bw=" + anchoBorde.value + "&bh=" + anchoBorde.value + "&bc=" + color + "&sharpen=" + enfoqueRadio.value + "x" + enfoqueSigma.value + "&blur=" + desenfoqueRadio.value + "x" + desenfoqueSigma.value;
            img.classList.add("col-3");
            contenedorImgs.appendChild(img);
    }

}

/**
 * Limpia el contenedor de imágenes y luego llama a la función editarImagen()
 */
 function generarImagen() {
    contenedorImgs.innerHTML = ' ';
    editarImagen();
}
