
let precio = Number(Math.round(Math.random() * 2000)) + "€";
document.getElementById("precio").innerHTML = precio;



function ejercicio13() {
    let precioCalc = Number(precio);
    let pago = Number(document.getElementById("v1").value);
    let cambioEuro = pago - precio;
    let billetes = [500, 200, 100, 50, 20, 10, 5, 2, 1];
    let cambio = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (let index = 0; index < cambio.length; index++) {

    }

    alert("El cambio es: " + cambioEuro);
}







