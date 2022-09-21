
let nnatural = Number(prompt("Ejercicio 06: \n\n : Introduce un número: "));
for (let repeticiones = 0; repeticiones < 6; repeticiones++) {
    let suma5=nnatural;
    for (let index = 1; index < 6; index++) {
        suma5+= index;
    }
    console.log("La suma de "+nnatural+" y sus 5 números siguientes es : "+Number(suma5-1)); 

}
document.getElementById("resultado6").innerHTML = "Las sumas se han realizado en la consola del navegador. ";