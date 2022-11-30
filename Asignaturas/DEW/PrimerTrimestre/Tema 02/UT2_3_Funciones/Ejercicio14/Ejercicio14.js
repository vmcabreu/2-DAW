
function EJ14() {
    event.preventDefault();
    let resultado;
    let fraseInput =""+document.getElementById("frase").value;
    let arrayFrase = fraseInput.split("");
    let fraseVolteo = arrayFrase.reverse();
    let fraseReves = arrayFrase.join();
    let frase = arrayFrase.join();
    if (frase == fraseReves) {
        resultado = 'La frase "'+fraseInput+'" es palíndroma';
    }else{
        resultado = 'La frase "'+fraseInput+'" no es palíndroma';
    }

    document.getElementById("EJ14").innerHTML = resultado;
}







