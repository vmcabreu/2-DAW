let natural = Number(document.getElementById("respuesta06").value);
function ejercicio6() {
    let tope= natural+5
    let suma5=((tope - natural + 1)*(tope + natural))/2;
    console.log("La suma de "+natural+" y sus 5 números siguientes es : "+suma5); 
    alert("Observa la consola del navegador");

}

function ejercicio6R() {
    for (let index = 0; index < 5; index++) {
        
        let naturalAleatorio = parseInt(1 + Math.random() * 10);
        let tope= naturalAleatorio+5
        let suma5r=((tope - naturalAleatorio + 1)*(tope + naturalAleatorio))/2;
        console.log("La suma de "+naturalAleatorio+" y sus 5 números siguientes es : "+suma5r); 
    }

    alert("¡Terminado! Observa la consola del navegador");

}





