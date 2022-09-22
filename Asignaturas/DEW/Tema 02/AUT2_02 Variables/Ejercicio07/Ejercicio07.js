function ejercicio7() {
 let resultado07="Lo siento ha fallado";
let intentos=3;
let letras=1;
const paises=["Madrid","París","Venezuela","Londres","Viena","Berlin","Caracas","Buenos Aires","Brasilia","Mexico"]
const respuesta= paises[parseInt(Math.random() * 11)];
do{
    let capital = prompt("Ejercicio 07:  \n\n Adivina la capital del país \n\n Intentos: "+intentos+" \n\n Pista: "+ respuesta.substring(0,4-intentos)+"\n\n Introduce tu respuesta: ");
    if (capital==respuesta) {
        alert("¡Felicidades!\n\n¡Lo has conseguido!");
        resultado07 = "¡Felicidades!¡Lo has conseguido!"
        break;
    } else {
        intentos--;
        alert("Has fallado. Sigue intentandolo\n\nIntentos:"+intentos);
        
    }


} while(intentos!=0)
if (intentos==0) {
    alert("Has fallado. La respuesta era: "+respuesta);
}

  
}
