const imgSize = document.getElementById("size");
const anchoBorde = document.getElementById("borderWidth");
const colorBorde = document.getElementById("borderColor");
const enfoqueSigma = document.getElementById('enfoqueSigma');
const enfoqueRadio = document.getElementById('enfoqueRadio');
const desenfoqueSigma = document.getElementById('desenfoqueSigma');
const desenfoqueRadio = document.getElementById('desenfoqueRadio');
const contenedorImgs = document.getElementById("imagenes");
const form = document.getElementById('form');

form.addEventListener('submit', (e) => e.preventDefault());
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


function generarImagen() {
    contenedorImgs.innerHTML = ' ';
    editarImagen();
}


function editarImagen() {
    let color = colorBorde.value.replace("#", "");
    for (let i = 1; i <= 20; i++) {
        let img = document.createElement('img');
        if (i < 10) {
            img.src = "../imgs/image0" + i + ".jpg?dw=" + imgSize.value + "&dh=" + imgSize.value + "&bw=" + anchoBorde.value + "&bh=" + anchoBorde.value + "&bc=" + color + "&sharpen=" + enfoqueRadio.value + "x" + enfoqueSigma.value + "&blur=" + desenfoqueRadio.value + "x" + desenfoqueSigma.value;
            img.classList.add("col-3");
            contenedorImgs.appendChild(img);

        } else {
            img.src = "../imgs/image" + i + ".jpg?dw=" + imgSize.value + "&dh=" + imgSize.value + "&bw=" + anchoBorde.value + "&bh=" + anchoBorde.value + "&bc=" + color + "&sharpen=" + enfoqueRadio.value + "x" + enfoqueSigma.value + "&blur=" + desenfoqueRadio.value + "x" + desenfoqueSigma.value;
            img.classList.add("col-3");
            contenedorImgs.appendChild(img);
        }
    }

}
