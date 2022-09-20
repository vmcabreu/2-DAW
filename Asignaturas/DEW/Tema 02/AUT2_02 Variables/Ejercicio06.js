
let numero = Number(prompt("Ejercicio 06: \n\n : Introduce un número: "));

for (let repeticiones = 0; repeticiones < 6; repeticiones) {
    let suma ;
    for (let index = 1; index < 6; index++) {
        suma = numero + (numero+index);  
    }
    console.log("La suma de "+n1+" y sus 5 números siguientes es : "+suma);  
}




document.getElementById("resultado6").innerHTML = "Las sumas se han realizado en la consola del navegador. ";