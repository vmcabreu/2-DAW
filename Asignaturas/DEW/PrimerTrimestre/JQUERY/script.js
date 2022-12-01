let productos = $.getJSON( "productos.json", function() {
    console.log( "success" );
  })
    .done(function(datos) {
      console.log( "second success" );
      let i=0;
      $.each( datos, function( clave, valor ) {
        $( "<div>" ).append("<p>"+valor.nombre+"</p>").appendTo( "#listaArticulos" );
        i++;
        });
    })
    .fail(function() {
      console.log( "error" );
    })
    .always(function() {
      console.log( "complete" );
    });
