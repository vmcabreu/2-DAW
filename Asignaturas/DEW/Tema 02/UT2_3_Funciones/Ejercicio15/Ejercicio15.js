function EJ15() {
    event.preventDefault();
    let frase =""+document.getElementById("frase").value;
    frase.toLowerCase;
    let letras=["a","e","i","o","u"];
    let contador=[0,0,0,0,0];
    for (let i = 0; i < frase.length; i++) {
        let char = frase.substr(i,1);
        for (let j = 0; j < 5; j++) {
            if (char == letras[j] ) {
                contador[j]+=1;
            }
        }
        
    }
    document.getElementById("EJ15").innerHTML = "Número de vocales:</br>\n A's = "+contador[0]+"</br>\n E's = "+contador[1]+"</br>\n I's = "+contador[2]+"</br>\n O's  = "+contador[3]+"</br>\n U's = "+contador[4]+"</br>\n";
}
