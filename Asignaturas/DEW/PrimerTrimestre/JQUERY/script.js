
let productos = $.getJSON("productos.json", function () {

  $("#loading").fadeIn(400).delay(3500).fadeOut(500).delay(500);
  $("#titulo").css("display", "none").delay(4000).fadeIn(400);
  $("#articulos").css("display", "none").delay(4000).fadeIn(400);
})
  .done(function (datos) {
    let i = 0;
    $.each(datos, function (clave, valor) {
      $("<div>")
      .attr("class","form-check")
        .append(
          $("<input>")
            .attr("type", "checkbox")
            .attr("class", "form-check-input")
            .attr("id", "articulo" + i)

        )
        .append(
          " <span id=" +
            valor.abrev +
            ">" +
            valor.nombre +
            "<span id=precio" +
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
  });

  let igictotal;
  let importeTotal= 0;
/**
 * Es una función que refresca la lista de productos
*/
  $("#refrescarLista").click(function() {
    $("#listaArticulos").empty();
    let listaNueva = $.getJSON("productosActualizados.json", function () {
      $("#articulos").css("display", "none").fadeOut(450);
      $("#loading").fadeIn(400).delay(3000).fadeOut(450);
      $("#titulo").css("display", "none").delay(4000).fadeIn(400);
      $("#articulos").css("display", "none").delay(4000).fadeIn(450);
    })
      .done(function (datos) {
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
                "<span id=precio" +
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
    
      });
  }
  );

/**
 * Añade los artículos seleccionados al carrito de la compra.
 */
  $("#agregarCarrito").click(function() {
   $.each($("input:checked"),function(clave, valor){
    let articulo = $(valor).next().text();
    let datos = articulo.split("-");
    let precio = Number(datos[1].substring(1,datos[1].length - 2))
    let articuloigic = precio - ((precio * 1.07) - precio)
    importeTotal += articuloigic;
    igictotal = (importeTotal * 1.07) - importeTotal;
    $("<div>")
        .append(
          $("<p>")
          .append(
            datos[0] + " - " + articuloigic.toFixed(2) + " €"
          )
        ).appendTo("#cesta")
   })
   $("#igic").replaceWith("<span id='igic'>"+igictotal.toFixed(2)+"</span>")
   $("#total").replaceWith("<span id='total'>"+importeTotal.toFixed(2)+"</span>")
    
  })


