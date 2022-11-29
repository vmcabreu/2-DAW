<?php
class BaseDAO
{

    /**
     * Se conecta a la base de datos.
     * 
     * @return La conexión a la base de datos.
     */
    public static function getConexion()
    {
        $conexion = new MySQLi("localhost", "productos", "productos2022", "producto");
        if ($conexion->errno != null) {
            throw new Exception("Error conectando con la base de datos: " . $conexion->error);
            die("saliendo");
        }
        return $conexion;
    }

    /**
     * Se conecta a la base de datos y ejecuta la consulta.
     * 
     * @param string sql La consulta SQL a ejecutar.
     * 
     * @return bool|mysqli_result El resultado de la consulta.
     */
    public static function consulta(string $sql): bool|MySQLi_result
    {
        $conexion = self::getConexion();
        $resultado = $conexion->query($sql);
        $lastAffectedRows = $conexion->affected_rows;
        $conexion->close();
        if ($lastAffectedRows > 0) {
            return $resultado;
        }
    }

}
