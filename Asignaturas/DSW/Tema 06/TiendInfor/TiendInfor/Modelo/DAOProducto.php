<?php
    declare(strict_types = 1);

    require_once("../Modelo/BasePDO.php");
    require_once("../Modelo/Producto.php");
    require_once("../Modelo/Ordenador.php");

    class DAOProducto {

        // Creamos esto para evitar estar poniendo constantemente toda la linea
        public static function consulta(string $sql) : PDOStatement | int {
            return BasePDO::consulta($sql, "tiendinfor", "mysql", "tiendinfor", "tiendinfor2023");
        }

        public static function getPaginaProducto(int $numPag, int $tamPag = 10) : array {
            // lista será asociativa 
            $listaProductos = [];
            $indice = $tamPag * ($numPag - 1);
            // la consulta cambio por la modificacion que se le hizo a la bbdd 01/02
            $sql = "SELECT * FROM producto LEFT JOIN ordenador ON cod=codProd LIMIT $indice, $tamPag";
            // llamo a la funcion de esta clase
            $resultado = self::consulta($sql);
            while(($prod = $resultado -> fetchObject()) != null) { 
                if ($prod->codProd == null) { //el producto no es un ordenador. Un ordenador tiene el codProd != null
                $listaProductos[$prod->cod] = Producto::getProdFromStd($prod);
                } else {
                $listaProductos[$prod->cod] = Ordenador::getProdFromStd($prod);
                }
            }
            return $listaProductos;
        }

        public static function getFamilias() : array {
            // lista será asociativa 
            $listaFamilias = [];
            $sql = "SELECT * FROM familia";
            $resultado = self::consulta($sql);
            while(($familia = $resultado -> fetchObject()) != null) { 
                $listaFamilias[$familia->cod] = $familia->nombre;
            }
            return $listaFamilias;
        }

        public static function getDetallesProducto(string $codProducto) : array {
            // lista será asociativa 
            $listaDetalles = [];
            $sql = "SELECT * FROM producto LEFT JOIN ordenador ON cod=codProd WHERE codProd = '$codProducto'";
            $resultado = self::consulta($sql);
            if(($detalles = $resultado -> fetchObject()) != null) { 
                $listaDetalles[$detalles->cod] = Ordenador::getProdFromStd($detalles);
            }
            return $listaDetalles;
        }

        public static function getProductosPorFamilia(int $numPag = 1, int $tamPag = 10, string $familia) : array {
            // lista será asociativa 
            $listaProductos = [];
            $indice = $tamPag * ($numPag - 1);
            if ($familia != null) {
                $sql = "SELECT * FROM producto LEFT JOIN ordenador ON cod=codProd WHERE familia = '$familia' LIMIT $indice, $tamPag";
                // llamo a la funcion de esta clase
                $resultado = self::consulta($sql);
                while(($prod = $resultado -> fetchObject()) != null) { 
                    if ($prod->codProd == null) { //el producto no es un ordenador. Un ordenador tiene el codProd != null
                    $listaProductos[$prod->cod] = Producto::getProdFromStd($prod);
                    } else {
                    $listaProductos[$prod->cod] = Ordenador::getProdFromStd($prod);
                    }
                }
                return $listaProductos;
            } else {
                return self::getPaginaProducto($numPag, $tamPag);
            }
        }

        /**
         * Funcion que busca un producto
         * @param int $id id del producto
         * @return ?Producto Devuelve null o un objeto de la clase Producto
         */
        public static function buscarProducto(string $cod) : Producto | Ordenador | null { // con la ? le decimos que puede ser null o de la clase producto lo que va a devolver
            $resultado = self::consulta("SELECT * FROM producto LEFT JOIN ordenador ON cod=codProd WHERE cod = '$cod'");
            if ($resultado->rowCount() == 0) {
                echo "a";
                return null;
            }
            if (($prod = $resultado -> fetchObject()) != null) {
                if ($prod->codProd == null) { //el producto no es un ordenador. Un ordenador tiene el codProd != null
                    //print_r(Producto::getProdFromStd($prod));
                    return Producto::getProdFromStd($prod);
                } else {
                    return Ordenador::getProdFromStd($prod);
                }
            }
        }

        public static function comprobarUsuario(string $usuario, string $password) : bool {
            $resultado = self::consulta("SELECT * FROM usuarios WHERE usuario = '$usuario'");
            if (($datos = $resultado ->fetchObject()) != null) { // si existe
                if (password_verify($password, $datos->contrasena)) {
                    return true;
                }
            }
            return false;
        }

        /**
         * Funcion que devuelve el numero de productos
         * @return int Numero de productos
         */
        public static function numProductos() : int {
            $resultado = self::consulta("SELECT count(*) as numProds FROM producto");
             //return intval($resultado->fetch(PDO::FETCH_ASSOC)['numProds']); tambien sirve
            return intval($resultado->fetchObject()->numProds);
        }

        /**
         * Funcion que devuelve el numero de páginas
         * @param int $tamPag tamaño de página
         * @return int número de páginas
         */
        public static function numPags(int $tamPag)  {
            return ceil(self::numProductos() / $tamPag); // devuelve el entero por encima
        }

        /**
         * Funcion que devuelve el máximo número de productos
         * @return int Numero de productos
         */
        public static function maxNumProducto() : int {
            $resultado = self::consulta("SELECT max(cod) as max FROM producto");
            return intval($resultado->fetchObject()->max);
        }
    }
    //DAOProducto::getPaginaProducto(1);
?>