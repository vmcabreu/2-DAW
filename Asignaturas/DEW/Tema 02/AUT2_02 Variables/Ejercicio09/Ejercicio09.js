function ejercicio() {
    let vector1 = Number(document.getElementById("v1").value);
    let vector2 = Number(document.getElementById("v2").value);
    let vector3 = Number(document.getElementById("v2").value);
    let sumavectores = vector1 + vector2 + vector3;

    if (vector1 < 0 || vector2 < 0 || vector3 < 0) {
        alert("¡Error!\n\n Uno de los valores es menor que 0");
    } else {
        console.log("Prueba A: Aprobada")
    }

    if (vector1 == 0 && vector2 == 0 && vector3 == 0) {
        alert("¡Error!\n\n Todos los valores son 0");
    } else {
        console.log("Prueba B: Aprobada");
    }
    
    if (sumavectores > 10 && vector1 != vector2 || vector1 != vector3 || vector2 != vector3) {
        alert("¡Error!\n\n Las sumas de las 3 variables es mayor que 10("+sumavectores+") y las tres variables son diferentes");
    } else {
        console.log("Prueba C: Aprobada");
    }

    document.getElementById("resultado8").innerHTML = "¡Perfecto!";
}







