const tamanio = document.getElementById("borderColor");
const anchoBorde = document.getElementById("imagenes");

const color = document.getElementById("borderColor");
const enfoque = document.getElementById('form');
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
            img.src = "../imgs/image0" + i + ".jpg?dw="+ancho+"&dh="+alto+"&";
            img.classList.add("col-3");
            contenedorImgs.appendChild(img);
    
        } else {
            img.src = "../imgs/image" + i + ".jpg";
            img.classList.add("col-3");
            contenedorImgs.appendChild(img);
        }
}

}
