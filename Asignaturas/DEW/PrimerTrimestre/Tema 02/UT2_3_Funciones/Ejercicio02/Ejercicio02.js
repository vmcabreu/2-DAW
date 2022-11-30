function EJ02() {
    event.preventDefault();
    let notaAlumno = Number(document.getElementById("nota").value);
    if (Number.isInteger(notaAlumno)) {
        if (notaAlumno >= 0 && notaAlumno < 5) {
            document.getElementById("EJ02").innerHTML = "Suspenso";
        } else if (notaAlumno >= 5 && notaAlumno < 7) {
            document.getElementById("EJ02").innerHTML = "Aprobado";
        } else if (notaAlumno >= 7 && notaAlumno < 9) {
            document.getElementById("EJ02").innerHTML = "Notable";
        } else if (notaAlumno >= 9 && notaAlumno <= 10) {
            document.getElementById("EJ02").innerHTML = "Sobresaliente";
        } else {
            alert("ERROR! – Indique un número del rango 0 a 10");
        }

    } else {
        alert("ERROR! – Indique un número del rango 0 a 10");
    }

}