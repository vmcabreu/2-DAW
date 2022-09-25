
let importe = Number(Math.round(Math.random() * 2000));
document.getElementById("precio").innerHTML = importe;




function ejercicio13() {
    let pago = Math.round(Number(document.getElementById("v1").value));
    let cambioEuro = pago - importe;
    let vuelto = cambioEuro;
    let billetes = [500, 200, 100, 50, 20, 10, 5, 2, 1];
    let cambio = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (let i = 0; i < cambio.length; i++) {
        if (vuelto >= billetes[i]) {
            cambio[i] = parseInt(vuelto / billetes[i]);
            vuelto = (vuelto - (cambio[i] * billetes[i])).toFixed(2);
        }
    }


    alert("El cambio es: " + cambioEuro + " y el dinero devuelto es el siguiente: \n\n Billetes de 500: " + cambio[0] + "\n\n Billetes de 200: " + cambio[1] + "\n\n Billetes de 100: " + cambio[2] + "\n\n Billetes de 50: " + cambio[3] + "\n\n Billetes de 20: " + cambio[4] + "\n\n Billetes de 10: " + cambio[5] + "\n\n Billetes de 5: " + cambio[6] + "\n\n billetes de 2: " + cambio[7] + "\n\n Moneda de 1: " + cambio[8]);
}

//let importe = Number(prompt("El precio es "+precioRandom+"€ \n\n ¿Cuanto quieres pagar?"));





