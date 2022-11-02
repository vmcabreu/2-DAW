/* Crea una clase llamada producto con las variables por defecto de nombre = "manzana", categoria ="frutas", precio = 2.00 */
class producto {
    constructor(nombre = "manzana", categoria = "frutas", precio = 2.00) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
    }


    /**
     * Agrega una categoría a la matriz.
     * @param {String} categoria - Este es el nombre de la categoría.
     */
    agregarCategoria(categoria) {
        this.categoria.push(categoria);
    }


    /**
     * Elimina el producto de la lista.
     * @param {String} nombreProducto - El nombre del producto a eliminar.
     */
    borrarProducto(nombreProducto) {
        if (existeProducto(nombreProducto)) {
            delete this.nombreProducto;
        } else {
            alert("No existe producto")
        }
    }

    /**
     * La función `existeProducto` toma una cadena como argumento y devuelve un booleano
     * @param {String} nombreProducto - El nombre del producto a buscar.
     * @returns {Boolean} - Si coincide el nombre del producto
     */
    existeProducto(nombreProducto) {
        let coincide = false;
        if (this.nombre == nombreProducto) {
            return coincide = true;
        }
        return coincide;
    }
}

    /**
    * Crea un nuevo elemento HTML y lo agrega al elemento principal
    * @param {String} etiquetaPadre - La etiqueta principal.
    * @param {String} nombreEtiqueta - El nombre de la etiqueta que desea crear.
    * @param {String} valorEtiqueta - El texto que se mostrará en la etiqueta.
    * @param [tipo=null] - El tipo del elemento que se va a crear.
    * @param [name=null] - El nombre del elemento que se va a crear.
    * @param [identificador=null] - El id del elemento
    * @returns parentTags.appendChild(nombreTags)
    */
    function crearEtiqueta(etiquetaPadre, nombreEtiqueta, valorEtiqueta, tipo = null, name = null, identificador = null) {
        var parentTags = etiquetaPadre;
        var nombreTags = document.createElement(nombreEtiqueta);
        if (tipo == null || tipo == "") { } else {
            nombreTags.setAttribute("type", tipo);
        }
        if (identificador == null || identificador == "") { } else {
            nombreTags.setAttribute("id", identificador);
        }
        if (name == null || name == "") { } else {
            nombreTags.setAttribute("name", name);
        }
        nombreTags.textContent = valorEtiqueta;
        return parentTags.appendChild(nombreTags);
    }
