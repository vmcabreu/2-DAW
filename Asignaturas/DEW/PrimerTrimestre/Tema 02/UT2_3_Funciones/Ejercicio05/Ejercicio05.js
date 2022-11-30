let letrasDNI = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];

function EJ05() {
    event.preventDefault();
    let numero = Number(document.getElementById("dni").value);
    let calcularLetra = letrasDNI[numero%23];
    document.getElementById("EJ05").innerHTML = "Este es su DNI: "+numero+calcularLetra;

}

