function eliminarArticulo(codigo) {
    var confirmar = confirm("¿Estás seguro de eliminar el artículo con código " + codigo + "?");
    if (confirmar) {
        // Lanzamos un fetch pero le enviamos por post el codigo articulo
        var form = document.createElement("form");
        form.setAttribute("action", "../controlador/Articulos/eliminar.php");
        form.setAttribute("method", "post");
        form.setAttribute("enctype", "multipart/form-data");
        let input = document.createElement("input");
        input.setAttribute("name", "codigo");
        input.setAttribute("value", codigo);
        form.appendChild(input);

        fetch(form.action, {
            // en el body habia que crear un formdata
                body: new FormData(form),
                method: "post"
                // obtenemos respuesta dle servidor 
            }).then(respuesta => respuesta.text()).then(
                // y con la respuesta un jsonparse
                respTxt => {
                    try {
                        var resultado = JSON.parse(respTxt).resultado;
                        // { "resultado" : true } accedo a este valor
                    } catch (e) {
                        console.log("Error en cadena JSON: " +respTxt);
                    }
                    if (resultado == true) {
                        alert("Artículo con código " + codigo + " eliminado correctamente.");
                    } else {
                        alert("Ha ocurrido un error eliminando el artículo con código " + codigo + ".");
                    }
                }
            )
        // recargo la pagina
        window.location.reload();
    }
}

/**
 * Función que recibe el codigo del artículo y modifica
 * @param {*} idProd 
 */
function modificarGuardarArticulo(codigoArticulo) {
    var tr = document.getElementById("articulo_" + codigoArticulo);
    var btn = tr.cells[tr.cells.length - 3].firstChild; // boton de modificar
    if (btn.textContent == " Modificar") {
        btn.setAttribute("class", "btn btn-success");
        btn.innerHTML = "<i class='bi bi-check-lg'></i> &nbsp;Guardar ";
        for(var i = 1; i < tr.cells.length - 4; i++) {
            tr.cells[i].firstChild.readOnly = false;
            tr.cells[i].firstChild.style.backgroundColor = "lightblue";
        }
    } else {
        var form = document.createElement("form");
        const nombreCampos = ['codigo', 'descripcion', 'precio_compra', 'precio_venta', 'margen', 'stock'];
        form.setAttribute("action", "../controlador/Articulos/modificacion.php");
        form.setAttribute("method", "post");
        form.setAttribute("enctype", "multipart/form-data");
        for(var i = 0; i < tr.cells.length - 4; i++) {
            let valor = tr.cells[i].firstChild.value;
            let input = document.createElement("input");
            input.setAttribute("name", nombreCampos[i]);
            input.setAttribute("value", valor);
            form.appendChild(input);
            tr.cells[i].firstChild.readOnly = true;
            tr.cells[i].firstChild.style.backgroundColor = "white";
        }
        btn.setAttribute("class", "btn btn-warning");
        btn.innerHTML = "<i class='bi bi-pencil'></i> Modificar";
        // Enviamos datos al servidor
        fetch(form.action, {
            // en el body habia que crear un formdata
                body: new FormData(form),
                method: "post"
                // obtenemos respuesta dle servidor 
            }).then(respuesta => respuesta.text()).then(
                // y con la respuesta un jsonparse
                respTxt => {
                    try {
                        var resultado = JSON.parse(respTxt).resultado
                    } catch (e) {
                        console.log("Error en cadena JSON: " +respTxt);
                    }
                    if (resultado == true) {
                        alert("Se han modificado los datos correctamente.");
                    } else {
                        alert("Ha ocurrido un error actualizando los datos.");
                    }
                }
            )
    }
}

/**
 * Función que redirige al usuario al número de página recibida por parámetro.
 * @param numeroPagina - El número de página hacia donde ir.
 */
function pagina(numeroPagina) {
    document.location="?pagina=" + numeroPagina;
}

/**
 * Funcion que comprueba que la página actual no es la primera página, 
 * y lo redirige a la página anterior.
 * @param paginaActual - El número de página actual.
 */
function paginaAnterior(paginaActual) {
    if (paginaActual != 1) {
        var pagina = paginaActual - 1;
        document.location="?pagina=" + pagina;
    }
}

/**
 * Funcion que comprueba que la página actual no es la última página, 
 * y lo redirige a la página siguiente.
 * @param paginaActual - El número de página actual.
 * @param numeroPaginas - El número de páginas total.
 */
function siguientePagina(paginaActual, numeroPaginas) {
    if (paginaActual != numeroPaginas) {
        var pagina = paginaActual + 1;
        document.location="?pagina=" + pagina;
    }
}

function entrada(codigoArticulo) {
    var cantidad = prompt("Entrada de mercancía.\nIntroduce el número de unidades a entrar al almacén para el artículo " + codigoArticulo + ":");
    if (isNaN(cantidad) || cantidad % 1 != 0) {
        alert("Solo se pueden introducir números enteros.");
    } else {
        // Lanzamos un fetch pero le enviamos por post el codigo articulo
        var form = document.createElement("form");
        form.setAttribute("action", "../controlador/Articulos/entrada.php");
        form.setAttribute("method", "post");
        form.setAttribute("enctype", "multipart/form-data");

        let input = document.createElement("input");
        input.setAttribute("name", "codigoArticulo");
        input.setAttribute("value", codigoArticulo);
        form.appendChild(input);

        let inputCantidad = document.createElement("input");
        inputCantidad.setAttribute("name", "cantidad");
        inputCantidad.setAttribute("value", cantidad);
        form.appendChild(inputCantidad);

        fetch(form.action, {
            // en el body habia que crear un formdata
                body: new FormData(form),
                method: "post"
                // obtenemos respuesta dle servidor 
            }).then(respuesta => respuesta.text()).then(
                // y con la respuesta un jsonparse
                respTxt => {
                    try {
                        var resultado = JSON.parse(respTxt).resultado;
                        // { "resultado" : true } accedo a este valor
                        window.location.reload();
                    } catch (e) {
                        console.log("Error en cadena JSON: " +respTxt);
                    }
                    if (resultado == true) {
                        alert("Se han añadido correctamente " + cantidad + " unidades para el artículo con código " + codigoArticulo + ".");
                        // Alerto al usuario y tras confirmar, se recarga la pagina
                    } else {
                        alert("Ha ocurrido un error añadiendo la cantidad de unidades para el artículo con código " + codigoArticulo + ".");
                    }
                }
            )
        //

    }
}

function salida(codigoArticulo) {
    var cantidad = prompt("Salida de mercancía.\nIntroduce el número de unidades a sacar del almacén para el artículo " + codigoArticulo + ":");
    if (isNaN(cantidad) || cantidad % 1 != 0) {
        alert("Solo se pueden introducir números enteros.");
    } else {
        // Lanzamos un fetch pero le enviamos por post el codigo articulo
        var form = document.createElement("form");
        form.setAttribute("action", "../controlador/Articulos/salida.php");
        form.setAttribute("method", "post");
        form.setAttribute("enctype", "multipart/form-data");

        let input = document.createElement("input");
        input.setAttribute("name", "codigoArticulo");
        input.setAttribute("value", codigoArticulo);
        form.appendChild(input);

        let inputCantidad = document.createElement("input");
        inputCantidad.setAttribute("name", "cantidad");
        inputCantidad.setAttribute("value", cantidad);
        form.appendChild(inputCantidad);

        fetch(form.action, {
            // en el body habia que crear un formdata
                body: new FormData(form),
                method: "post"
                // obtenemos respuesta dle servidor 
            }).then(respuesta => respuesta.text()).then(
                // y con la respuesta un jsonparse
                respTxt => {
                    try {
                        var resultado = JSON.parse(respTxt).resultado;
                        // { "resultado" : true } accedo a este valor
                    } catch (e) {
                        console.log("Error en cadena JSON: " +respTxt);
                    }
                    if (resultado == true) {
                        alert("Se han retirado correctamente " + cantidad + " unidades para el artículo con código " + codigoArticulo + ".");
                        window.location.reload();
                    } else {
                        alert("Ha ocurrido un error retirando la cantidad de unidades para el artículo con código " + codigoArticulo + ".");
                    }
                }
            )
        // recargo la pagina
        
    }
}

// const codigoBuscadorArticulo = document.getElementById("codigoArticulo");

// codigoBuscadorArticulo.addEventListener('change', () => {
//         // Lanzamos un fetch pero le enviamos por post el codigo articulo
//         var form = document.createElement("form");
//         form.setAttribute("action", "../controlador/Articulos/buscar.php");
//         form.setAttribute("method", "post");
//         form.setAttribute("enctype", "multipart/form-data");

//         let input = document.createElement("input");
//         input.setAttribute("name", "codigoBuscadorArticulo");
//         input.setAttribute("value", codigoBuscadorArticulo);
//         form.appendChild(input);

//         fetch(form.action, {
//             // en el body habia que crear un formdata
//                 body: new FormData(form),
//                 method: "post"
//                 // obtenemos respuesta dle servidor 
//             }).then(respuesta => respuesta.text()).then(
//                 // y con la respuesta un jsonparse
//                 respTxt => {
//                     try {
//                         var resultado = JSON.parse(respTxt).resultado;
//                         // { "resultado" : true } accedo a este valor
//                     } catch (e) {
//                         console.log("Error en cadena JSON: " +respTxt);
//                     }
//                     if (resultado == true) {
//                         alert("Se han retirado correctamente " + cantidad + " unidades para el artículo con código " + codigoArticulo + ".");
//                         window.location.reload();
//                     } else {
//                         alert("Ha ocurrido un error retirando la cantidad de unidades para el artículo con código " + codigoArticulo + ".");
//                     }
//                 }
//             )
//         // recargo la pagina
        
//     }
// }
