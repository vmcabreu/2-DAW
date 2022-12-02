let productos = $.getJSON("productos.json", function () {

  $("#loading").fadeIn(400).delay(3500).fadeOut(500).delay(500);
  $("#articulos").css("display", "none").delay(4000).fadeIn(400);
})
  .done(function (datos) {
    console.log("second success");
    let i = 0;
    $.each(datos, function (clave, valor) {
      $("<div>")
        .append(
          $("<input>")
            .attr("type", "checkbox")
            .attr("id", "articulo" + i)
        )
        .append(
          " <span id=" +
            valor.abrev +
            ">" +
            valor.nombre +
            " <span id=precio" +
            valor.abrev +
            "> - " +
            valor.precio +
            " €</span></span>"
        )
        .appendTo("#listaArticulos");
      i++;
    });
  })
  .fail(function () {
    console.log("error");
  })
  .always(function () {
    console.log("complete");
  });

  function agregarCesta(){
   console.log($("input:checked"));
    
  }