<?php

declare(strict_types=1);

require_once("../Modelo/BasePDO.php");
require_once("../Modelo/Producto.php");
require_once("../Modelo/Ordenador.php");

class DAOProducto
{


    public static function consulta(string $sql): PDOStatement | int
    {
        return BasePDO::consulta($sql, "tiendinfor", "mysql", "tiendinfor", "tiendinfor2023");
    }

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


    public static function numProductos(): int
    {
        $resultado = self::consulta("SELECT count(*) as numProds FROM producto");
        return intval($resultado->fetchObject()->numProds);
    }


    public static function numPags(int $tamPag)
    {
        return ceil(self::numProductos() / $tamPag); // devuelve el entero por encima
    }


    public static function maxNumProducto(): int
    {
        $resultado = self::consulta("SELECT max(cod) as max FROM producto");
        return intval($resultado->fetchObject()->max);
    }
}
