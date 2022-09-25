function ejercicio5() {
    event.preventDefault();
    for (let index = 0; index < 5; index++) {
        let n1=Number(document.getElementById("n1").value);
        let n2=Number(document.getElementById("n2").value);
        let suma = n1 + n2;
        console.log("La suma de "+n1+" + "+n2+" es: "+suma);
        
        
    }
    
    document.getElementById("resultado5").innerHTML = "¡Terminado! Observa la consola del navegador";
    
    
}

function ejercicio5Alt() {
    event.preventDefault();
    for (let index = 0; index < 5; index++) {
        
        let n1Alt = prompt("Introduzca un primer numero: \n\n Bucle "+index);
        let n2Alt = prompt("Introduzca un segundo numero: \n\n Bucle "+index);
        let suma= n1Alt+n2Alt;
        console.log("La suma de "+n1Alt+" y "+n2Alt+" es : "+suma); 
    }
    document.getElementById("resultado5").innerHTML = "¡Terminado! Observa la consola del navegador";

}

