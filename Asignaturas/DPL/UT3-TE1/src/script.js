const tamanio = document.getElementById("tamaño");
const anchoBorde = document.getElementById("borderWidth");
const color = document.getElementById("borderColor");
const enfoqueSigma = document.getElementById('enfoqueSigma');
const enfoqueRadio = document.getElementById('enfoque');
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
}


function editarImagen(){
    for (let i = 1; i <= 20; i++) {
        let img = document.createElement('img');
        if (i < 10) {
            img.src = "../imgs/image0" + i + ".jpg?dw="+tamanio+"&dh="+tamanio+"&bw="+anchoBorde+"&bc="+color+"&sharpen="+enfoqueRadio+","+enfoqueSigma+"&blur="+desenfoqueRadio+","+desenfoqueSigma;
            img.classList.add("col-3");
            contenedorImgs.appendChild(img);
    
        } else {
            img.src = "../imgs/image" + i + ".jpg?dw="+tamanio+"&dh="+tamanio+"&bw="+anchoBorde+"&bc="+color+"&sharpen="+enfoqueRadio+","+enfoqueSigma+"&blur="+desenfoqueRadio+","+desenfoqueSigma;
            img.classList.add("col-3");
            contenedorImgs.replaceChild(img);
        }
}

}
