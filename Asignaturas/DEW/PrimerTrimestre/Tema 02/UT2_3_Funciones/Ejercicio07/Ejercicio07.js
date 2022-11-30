function conseguirFecha(){
    let fecha =new Date();
    const options = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      }
    let fechaActual=new Intl.DateTimeFormat('en-US', options).format(fecha);
    return fechaActual;
}

function conseguirHora(){
    let fecha =new Date();
    return horaActual= fecha.toLocaleTimeString();
}

function conseguirZona(){
    let fecha = new Date();
    let fechaSplit = fecha.toString().split(" ");
    return fechaSplit[5];
}

function EJ07() {
    event.preventDefault();
    let fecha = conseguirFecha();
    let hora = conseguirHora();
    let zona = conseguirZona();
    document.getElementById("EJ07").innerHTML = fecha+" "+hora+" "+zona;
}
