<?php
    require_once(__DIR__."/BaseDAO.php");
    require_once(__DIR__."/Producto.php");

    class DAOProducto {
        /**
         * Elimina un producto de la base de datos.
         * 
         * @param int id El id del producto que se va a eliminar.
         */
        public static function borrarProducto(int $id) : bool {
            $sql = "DELETE FROM producto WHERE id = '$id'";
            return BaseDAO::consulta($sql) == 1;
        }

        /**
         * Funcion que inserta un producto
         * @param Producto $prod Datos del producto
         * @return bool Si la función se ha ejecutado bien o no
         */
        public static function insertarProducto(Producto $prod) : bool {
            if ($prod->id == 0) {
                $id = "null";
            } else {
                $id = $prod->id;
            }
            $sql = "INSERT INTO producto VALUES ($id, '$prod->descripcion', '$prod->nombre', $prod->precio, '$prod->imagen')";
            return BaseDAO::consulta($sql) == 1; // devuelvo un boolean, no toco definicion del metodo
            // esta insercion inserta solo un producto, por lo tanto lo comparamos si eso es igual a 1
        }

        /**
         * Funcion que modifica un producto
         * @param Producto $prod Datos del producto
         * @return bool Si la función se ha ejecutado bien o no
         */
        public static function modificarProducto(Producto $prod) : bool {
            $sql = "UPDATE producto SET descripcion = '$prod->descripcion', nombre='$prod->nombre', precio=$prod->precio, imagen='$prod->imagen' WHERE id=$prod->id";
            return BaseDAO::consulta($sql) == 1;
            // igual, recibo uno y actualizare uno. Llama al exec(que devuelve numFilas)
        }

        /**
         * Funcion que busca un producto
         * @param int $id id del producto
         * @return ?Producto Devuelve null o un objeto de la clase Producto
         */
        public static function buscarProducto(int $id) : ?Producto { // con la ? le decimos que puede ser null o de la clase producto lo que va a devolver
            $resultado = BaseDAO::consulta("SELECT * FROM producto WHERE id='$id'");
            if ($resultado->rowCount() == 0) {
                return null;
            }
            return Producto::getProducto($resultado->fetch(PDO::FETCH_ASSOC));
        }

        /**
         * Funcion que busca un producto por su nombre
         * @param string $nombre nombre del producto
         * @return ?Producto Devuelve null o un objeto de la clase Producto
         */
        public static function buscarProductoNombre(string $nombre) : ?Producto { // o null o un objeto de la clase producto
            $resultado = BaseDAO::consulta("SELECT * FROM producto WHERE nombre='$nombre'");
            if ($resultado->rowCount() == 0) {
                return null;
            }
            // devuelvo 
            return Producto::getProdStd($resultado->fetchObject());
        }

        /**
         * Funcion que obtiene la página de un producto
         * @param int $numPag numero de página
         * @param int $tamPag tamaño de página
         * @return array Devuelve un array con los productos de dicha pagina
         */
        public static function getPaginaProducto(int $numPag, int $tamPag = 10) : array {
            // lista será asociativa 
            $listaProductos = [];
            $indice = $tamPag * ($numPag - 1);
            $sql = "SELECT * FROM producto LIMIT $indice, $tamPag";
            $resultado = BaseDAO::consulta($sql);
            //while(($prod = $resultado -> fetch(PDO::FETCH_ASSOC)) != null) { tambien sirve esto
            while(($prod = $resultado -> fetchObject()) != null) { 
                $listaProductos[$prod->id] = Producto::getProdStd($prod);
            }
            return $listaProductos;
        }

        /**
         * Funcion que devuelve el numero de productos
         * @return int Numero de productos
         */
        public static function numProductos() : int {
            $resultado = BaseDAO::consulta("SELECT count(*) as numProds FROM producto");
             //return intval($resultado->fetch(PDO::FETCH_ASSOC)['numProds']); tambien sirve
            return intval($resultado->fetchObject()->numProds);
        }

        /**
         * Funcion que devuelve el numero de páginas
         * @param int $tamPag tamaño de página
         * @return int número de páginas
         */
        public static function numPags(int $tamPag) : int {
            return ceil(DAOProducto::numProductos() / $tamPag); // devuelve el entero por encima
        }

        /**
         * Funcion que devuelve el máximo número de productos
         * @return int Numero de productos
         */
        public static function maxNumProducto() : int {
            $resultado = BaseDAO::consulta("SELECT max(id) as max FROM producto");
            return intval($resultado->fetchObject()->max);
        }
    }
    /* $lista = DAOProducto::getPaginaProducto(2,7);
    foreach ($lista as $p) {
        echo $p."<br/>\n";
    }
    echo DAOProducto::numProductos();
    echo DAOProducto::numPags(7);
    echo DAOProducto::buscarProducto(1);
    */
?>