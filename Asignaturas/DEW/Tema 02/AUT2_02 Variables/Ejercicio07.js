
let resultado07="Lo siento ha fallado";
let intentos=3;
const respuesta="Santa Cruz de Tenerife";
do{
    let capital = prompt("Ejercicio 07:  \n\n Adivina la capital del país \n\n Introduce tu respuesta: ");
    if (capital==respuesta) {
        alert("¡Felicidades!\n\n¡Lo has conseguido!");
        resultado07 = "¡Felicidades!¡Lo has conseguido!"
        break;
    } else {
        intentos--;
        alert("Has fallado. Sigue intentandolo\n\nIntentos:"+intentos);
    }
} while(intentos!=0)


document.getElementById("resultado7").innerHTML = resultado07;