function ejercicio5() {
    for (let index = 0; index < 5; index++) {
        let n1=Number(document.getElementById("n1").value);
        let n2=Number(document.getElementById("n2").value);
        let suma = n1 + n2;
        console.log("La suma de "+n1+" + "+n2+" es: "+suma);
        return suma
        
    }
    
    
    
    
}

document.getElementById("resultado5").innerHTML = "Las sumas se realizarán en la consola del navegador. ";  
