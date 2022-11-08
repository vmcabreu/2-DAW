function mostrarDetalles(id) {
    event.preventDefault();
    let detalles = document.getElementById("detalles_"+id);
    let btnDetalle = document.getElementById("btn_" + id);
    if (btnDetalle.textContent == 'Detalles') {
        btnDetalle.textContent = 'Ocultar';
        detalles.classList.remove('oculto');
    }else{
        btnDetalle.textContent = 'Detalles';
        detalles.classList.add('oculto');
    }
    /*

    if (detalles.style.display === "none") {
        detalles.style.display === "block"
    } else {
        detalles.style.display === "none"
    }
    */
}