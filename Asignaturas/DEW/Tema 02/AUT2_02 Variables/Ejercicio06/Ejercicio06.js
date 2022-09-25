
function ejercicio6() {
    event.preventDefault();
    let natural = Number(document.getElementById("v06").value);
    let tope= natural+5
    let suma5=((tope - natural + 1)*(tope + natural))/2;
    console.log("La suma de "+natural+" y sus 5 números siguientes es : "+suma5); 
    document.getElementById("resultado6").innerHTML = "¡Terminado! Observa la consola del navegador";

}





