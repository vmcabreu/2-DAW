<?php

declare(strict_types=1);

require_once("../Modelo/BasePDO.php");
require_once("../Modelo/Producto.php");
require_once("../Modelo/Ordenador.php");

class DAOProducto
{


    /**
     * Ejecuta una consulta y devuelve el resultado.
     * 
     * @param string sql La consulta SQL a ejecutar.
     * 
     * @return PDOStatement | int Declaración PDOS | tú
     */
    public static function consulta(string $sql): PDOStatement | int
    {
        return BasePDO::consulta($sql, "tiendinfor", "mysql", "tiendinfor", "tiendinfor2023");
    }

    /**
     * Obtiene una página de productos de la base de datos.
     * 
     * @param int numPag el numero de pagina
     * @param int tamPag el número de productos por página
     * 
     * @return array Una gama de productos.
     */
    public static function getPaginaProducto(int $numPag, int $tamPag = 10): array
    {
        $listaProductos = [];
        $indice = $tamPag * ($numPag - 1);
        $sql = "SELECT * FROM producto LEFT JOIN ordenador ON cod=codProd LIMIT $indice, $tamPag";
        $resultado = self::consulta($sql);
        while (($prod = $resultado->fetchObject()) != null) {
            if ($prod->codProd == null) {
                $listaProductos[$prod->cod] = Producto::getProdFromStd($prod);
            } else {
                $listaProductos[$prod->cod] = Ordenador::getProdFromStd($prod);
            }
        }
        return $listaProductos;
    }

    /**
     * Devuelve una matriz de todas las familias en la base de datos.
     * 
     * @return array Una matriz de objetos.
     */
    public static function getFamilias(): array
    {
        $listaFamilias = [];
        $sql = "SELECT * FROM familia";
        $resultado = self::consulta($sql);
        while (($familia = $resultado->fetchObject()) != null) {
            $listaFamilias[$familia->cod] = $familia->nombre;
        }
        return $listaFamilias;
    }

    /**
     * Obtiene los detalles de un producto de la base de datos.
     * 
     * @param string codProducto El código del producto.
     * 
     * @return array Una matriz de objetos de tipo Ordenador.
     */
    public static function getDetallesProducto(string $codProducto): array
    {
        $listaDetalles = [];
        $sql = "SELECT * FROM producto LEFT JOIN ordenador ON cod=codProd WHERE codProd = '$codProducto'";
        $resultado = self::consulta($sql);
        if (($detalles = $resultado->fetchObject()) != null) {
            $listaDetalles[$detalles->cod] = Ordenador::getProdFromStd($detalles);
        }
        return $listaDetalles;
    }

    /**
     * Obtiene una lista de productos de la base de datos y, si el producto es una instancia de la clase
     * Computadora, obtiene el producto de la base de datos como una instancia de la clase Computadora.
     * 
     * @param int numPag el numero de pagina
     * @param int tamPag número de productos por página
     * @param string familia la familia del producto
     * 
     * @return array Una gama de productos.
     */
    public static function getProductosPorFamilia(int $numPag = 1, int $tamPag = 10, string $familia): array
    {
        $listaProductos = [];
        $indice = $tamPag * ($numPag - 1);
        if ($familia != null) {
            $sql = "SELECT * FROM producto LEFT JOIN ordenador ON cod=codProd WHERE familia = '$familia' LIMIT $indice, $tamPag";
            $resultado = self::consulta($sql);
            while (($prod = $resultado->fetchObject()) != null) {
                if ($prod->codProd == null) {
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
     * Devuelve un producto o un equipo, o nulo si no existe
     * 
     * @param string cod El código del producto a buscar.
     * 
     * @return Producto | Ordenador | null un objeto Producto o Ordenador o nulo si no se encuentra el
     * producto.
     */
    public static function buscarProducto(string $cod): Producto | Ordenador | null
    {
        $resultado = self::consulta("SELECT * FROM producto LEFT JOIN ordenador ON cod=codProd WHERE cod = '$cod'");
        if ($resultado->rowCount() == 0) {
            echo "a";
            return null;
        }
        if (($prod = $resultado->fetchObject()) != null) {
            if ($prod->codProd == null) {
                return Producto::getProdFromStd($prod);
            } else {
                return Ordenador::getProdFromStd($prod);
            }
        }
    }

    /**
     * Toma un nombre de usuario y una contraseña, y devuelve verdadero si el nombre de usuario existe y
     * la contraseña es correcta, y falso en caso contrario.
     * 
     * @param string usuario El nombre de usuario del usuario que desea comprobar.
     * @param string password La contraseña del usuario.
     * 
     * @return bool un valor booleano.
     */
    public static function comprobarUsuario(string $usuario, string $password): bool
    {
        $resultado = self::consulta("SELECT * FROM usuarios WHERE usuario = '$usuario'");
        if (($datos = $resultado->fetchObject()) != null) { // si existe
            if (password_verify($password, $datos->contrasena)) {
                return true;
            }
        }
        return false;
    }


    /**
     * Devuelve el número de productos en la base de datos.
     * 
     * @return int El número de productos en la base de datos.
     */
    public static function numProductos(): int
    {
        $resultado = self::consulta("SELECT count(*) as numProds FROM producto");
        return intval($resultado->fetchObject()->numProds);
    }


    /**
     * Devuelve el número de páginas necesarias para mostrar todos los productos en la base de datos.
     * 
     * @param int tamPag El número de productos por página.
     * 
     * @return El número de páginas que se necesitarán para mostrar todos los productos.
     */
    public static function numPags(int $tamPag)
    {
        return ceil(self::numProductos() / $tamPag);
    }

    /**
     * Devuelve el valor máximo de la clave primaria de la tabla producto.
     * 
     * @return int El número máximo de productos en la base de datos.
     */

    public static function maxNumProducto(): int
    {
        $resultado = self::consulta("SELECT max(cod) as max FROM producto");
        return intval($resultado->fetchObject()->max);
    }
}
