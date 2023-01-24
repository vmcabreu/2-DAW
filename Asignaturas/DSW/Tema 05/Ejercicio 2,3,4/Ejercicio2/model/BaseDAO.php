<?php
class BaseDAO
{
    private static $lastAffectedRows;
    /**
     * Crea un nuevo objeto MySQLi, que es una clase de PHP que representa una conexión a una base de
     * datos MySQL
     * 
     * @return La conexión a la base de datos.
     */
    public static function getConexion()
    {
        $conexion = new PDO("sqlite:/var/www/phpdata/productos.sqlite");
        
    
        return $conexion;
    }
    
    /**
     * Se conecta a la base de datos y ejecuta la consulta.
     * 
     * @param string sql La consulta SQL a ejecutar.
     * 
     * @return bool | mysqli_result El resultado de la consulta.
     */
    public static function consulta(string $sql):bool | PDOStatement
    {
    
            $conexion = self::getConexion();
            $resultado = $conexion->query($sql);
            unset($conexion);
            return $resultado;
    }

    /**
     * Devuelve el número de filas afectadas por la última consulta
     * 
     * @return int El número de filas afectadas por la última instrucción SQL.
     */
    public static function getLastAffectedRows()
    {
        return self::$lastAffectedRows;
    }
}