function ejercicio8() {
    event.preventDefault();
    let vector1 = Number(document.getElementById("v1").value);
    let vector2 = Number(document.getElementById("v2").value);
    let vector3 = Number(document.getElementById("v2").value);
    let sumaVectores = vector1 + vector2 + vector3;

    if (vector1 < 0 || vector2 < 0 || vector3 < 0) {
        alert("¡Error!\n\n Uno de los valores es menor que 0");
        document.getElementById("resultado8").innerHTML = "¡Error!\n\n Uno de los valores es menor que 0";
    } else {
        console.log("Prueba A: Aprobada");
    }

    if (vector1 == 0 && vector2 == 0 && vector3 == 0) {
        alert("¡Error!\n\n Todos los valores son 0");
        document.getElementById("resultado8").innerHTML = "¡Error!\n\n Todos los valores son 0";
    } else {
        console.log("Prueba B: Aprobada");
    }
    
    if (sumaVectores > 10 && (vector1 != vector2 || vector1 != vector3 || vector2 != vector3)) {
        alert("¡Error!\n\n Las suma de las 3 variables es mayor que 10 y las tres variables son diferentes");
        document.getElementById("resultado8").innerHTML = "¡Error!\n\n Las suma de las 3 variables es mayor que 10 y las tres variables son diferentes";
    } else {
        console.log("Prueba C: Aprobada");
    }

}







