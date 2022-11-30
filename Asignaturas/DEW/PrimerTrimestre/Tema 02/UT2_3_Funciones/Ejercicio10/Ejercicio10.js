function EJ10(fechaInput) {
    event.preventDefault();
    let fecha = new Date(fechaInput);
    let anio = fecha.getFullYear();
    let mes = fecha.getMonth();
    if (mes < 3) {
        anio = fecha.getFullYear() - 1;
        mes = fecha.getMonth() + 12;
    }
    let fechaAux = fecha.getDate() + (fecha.getHours() / 24) + (fecha.getMinutes() / 1440) + (fecha.getSeconds() / 86400);
    let localYear = fecha.getFullYear() / 100;
    let anioAux = 2 - localYear + (localYear / 4);
    let diaJuliano = ((365.25 * (anio + 4716)) + (30.6001 * (mes + 1)) + fechaAux + anioAux - 1524.5).toFixed(2);

    document.getElementById("EJ10").innerHTML = "El día juliano de '" + fechaInput + "' es: " + diaJuliano;
}