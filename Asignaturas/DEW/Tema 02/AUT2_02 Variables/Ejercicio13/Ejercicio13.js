
let importe = Number(Math.round(Math.random() * 2000));
document.getElementById("precio").innerHTML = importe;




function ejercicio13() {
    event.preventDefault();
    let pago = Math.round(Number(document.getElementById("v1").value));
    var cambioEuro = pago - importe;
    var vuelto = cambioEuro;
    var billetes = [500, 200, 100, 50, 20, 10, 5, 2, 1];
    var cambio = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (let i = 0; i < cambio.length; i++) {
        if (vuelto >= billetes[i]) {
            cambio[i] = parseInt(vuelto / billetes[i]);
            vuelto = (vuelto - (cambio[i] * billetes[i])).toFixed(2);
        }
    }

    document.getElementById("resultado13").innerHTML = "El cambio es " + cambioEuro + " y el dinero devuelto es el siguiente: <br> Billetes de 500: " + cambio[0] + "  <br> Billetes de 200: " + cambio[1] + " <br>  Billetes de 100: " + cambio[2] + " <br>  Billetes de 50: " + cambio[3] + " <br>  Billetes de 20: " + cambio[4] + " <br> Billetes de 10: " + cambio[5] + " <br>  Billetes de 5: " + cambio[6] + " <br>  Monedas de 2: " + cambio[7] + " <br>  Moneda de 1: " + cambio[8]  ;
}



//let importe = Number(prompt("El precio es "+precioRandom+"€ \n\n ¿Cuanto quieres pagar?"));





