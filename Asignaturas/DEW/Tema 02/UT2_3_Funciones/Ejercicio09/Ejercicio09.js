function hdec2hms(decimal) {
    event.preventDefault();
    decimal = decimal * 3600;
    let horas = formatoHora(Math.floor(decimal / (3600)));
    decimal = decimal - (horas * 3600);
    let min = formatoHora( Math.floor(decimal / 60));
    decimal = decimal - (min * 60);
    let seg = formatoHora(Math.floor(decimal));
    document.getElementById("EJ09A").innerHTML = horas + ":" + min + ":" + seg;
}

function hms2hdec(horas, minutos, segundos) {
    event.preventDefault();
    let seg = parseInt(segundos);
    let min = parseInt(minutos);
    let hora = parseInt(horas);

    hora = hora + (min / 60) + (seg / 3600);
    document.getElementById("EJ09B").innerHTML = ""+horas+":"+minutos+":"+segundos+" son: "+hora+" h.";
}

function formatoHora(valor) {
    event.preventDefault();
    if (valor < 10) {
        return "0" + valor;
    } else {
        return valor;
    }
}