function EJ08A() {
    event.preventDefault();
    let fechaA =new Date("02/04/2015");
    console.log(fechaA);
    document.getElementById("EJ08A").innerHTML = "Se obtiene solo la fecha de forma larga pero tanto la hora como zona con un valor por defecto";
}
function EJ08B() {
    event.preventDefault();
    let fechaB =new Date("2015-04-02");
    console.log(fechaB);
    document.getElementById("EJ08B").innerHTML = "Se obtiene la fecha de forma larga junto con la hora con un valor por defecto y la zona horaria en hora de verano";
}

function EJ08C() {
    event.preventDefault();
    let fechaC =new Date("April 02, 2015");
    console.log(fechaC);
    document.getElementById("EJ08C").innerHTML = "Añadiendo el texto a la creación del objeto Date(\"April 02, 2015\") lo cual luego lo mostrará como los apartados anteriores";
}