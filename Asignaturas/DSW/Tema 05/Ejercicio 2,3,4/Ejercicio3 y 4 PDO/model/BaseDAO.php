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
        [$host, $usuario, $passwd, $bd] = ['localhost', 'gestisimal', 'gestisimal2021', 'gestisimal'];
        $conexion = new PDO("mysql:host=$host;dbname=$bd;charset=utf8", $usuario, $passwd);
        return $conexion;
    }


    /**
     * Se conecta a la base de datos y ejecuta la consulta.
     * 
     * @param string sql La consulta SQL a ejecutar.
     * 
     * @return bool | mysqli_result El resultado de la consulta.
     */
    public static function consulta(string $sql): bool | PDOStatement
    {
        $conexion = self::getConexion();
        $resultado = $conexion->query($sql);
        unset($conexion);
        return $resultado;
    }

    public static function modificacion(string $sql)
    {
        $conexion = self::getConexion();
            $conexion->beginTransaction();
            $resultado = $conexion->exec($sql);
            if ($resultado != 0) {
                $conexion->commit();
            } else {
                $conexion->rollback();
            }
            unset($conexion);
        
        
        

        return $resultado;
    }
}
