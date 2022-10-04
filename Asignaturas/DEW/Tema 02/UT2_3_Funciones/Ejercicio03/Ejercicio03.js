function EJ0301() {
    event.preventDefault();
    document.getElementById("EJ0301").innerHTML = "Devuelve 15. Ya que pasa un String a Integer";
}

function EJ0302() {
    event.preventDefault();
    document.getElementById("EJ0302").innerHTML = "Devuelve 15. Ya que pasa un String a Integer pero este al pasarlo a tipo Number es Float entonces al hacer parseInt() elimina el decimal";
}

function EJ0303() {
    event.preventDefault();
    document.getElementById("EJ0303").innerHTML = "Devuelve 15. Ya que pasa un Float a Integer";
}

function EJ0304() {
    event.preventDefault();
    document.getElementById("EJ0304").innerHTML = "Devuelve NaN, ya que el valor que se le pasa es un String no numérico ";
}

function EJ0305() {
    event.preventDefault();
    document.getElementById("EJ0305").innerHTML = "Devuelve NaN, ya que el valor que se le pasa es un Boolean";
}