<?php
class BaseDAO
{
    public static function getConexion()
    {
        $conexion = new MySQLi("localhost", "productos", "productos2022", "producto");
        if ($conexion->errno != null) {
            throw new Exception("Error conectando con la base de datos: ".$conexion->error);
            die("saliendo");
        }
        return $conexion;
    }

    public static function consulta(string $sql)
    {
        $conexion = self::getConexion();
        $resultado = $conexion->query($sql);
        $conexion->close();
        return $resultado;
    }
}
