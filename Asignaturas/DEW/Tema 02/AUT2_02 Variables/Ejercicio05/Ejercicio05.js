function ejercicio5() {
    for (let index = 0; index < 5; index++) {
        let n1=Number(prompt("Ejercicio 05: \n\n Bucle "+index+" : Introduce el primer número: "));
        let n2=Number(prompt("Ejercicio 05: \n\n Bucle "+index+" : Introduce el segundo número: "));
        let suma = n1 + n2;
        console.log("La suma de "+n1+" + "+n2+" es: "+suma);
    
        
    }
    
    
    
    document.getElementById("resultado5").innerHTML = "Las sumas se han realizado en la consola del navegador. ";  
}
