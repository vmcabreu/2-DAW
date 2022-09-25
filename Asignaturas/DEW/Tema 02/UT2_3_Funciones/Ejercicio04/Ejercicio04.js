
function ejercicio4() {
    event.preventDefault();
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
    let n3 = Number(document.getElementById("n3").value);
    let n1posterior = n1 + 1;
    let n2posterior = n2 + 1;
    let n3posterior = n3 + 1;
    document.getElementById("resultado4").innerHTML = "Los numeros son " + n1 + "," + n2 + "," + n3 + " y sus numeros posteriores son " + n1posterior + "," + n2posterior + "," + n3posterior;
}   



/*
    var n1 = Number(document.getElementById("n1"));
    var n2 = Number(document.getElementById("n2"));
    var n3 = Number(document.getElementById("n3"));
var n1 = Number(prompt("Ejercicio 04:\n\n Introduce el primer número: "));
var n2 = Number(prompt("Ejercicio 04:\n\n Introduce el segundo número: "));
var n3 = Number(prompt("Ejercicio 04:\n\n Introduce el tercer número: "));*/