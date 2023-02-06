<?php

declare(strict_types=1);
require_once("Smarty.class.php");
class BasePDO
{
    private static $lastAffectedRows;

    /**
     * Devuelve un objeto PDO que representa una conexión a una base de datos.
     * @param dbname - El nombre de la base de datos a la que desea conectarse.
     * @param driver - El controlador de la base de datos que desea utilizar.
     * @param [user] - El nombre de usuario para conectarse a la base de datos.
     * @param [passwd] - La contraseña para el usuario de la base de datos.
     * @returns La conexión a la base de datos.
     */
    public static function getConexion($dbname, $driver, $user, $passwd)
    {
        try {
            $dsn = "";
            if ($driver == "mysql") {
                $conexion = new PDO("$driver:host=localhost;charset=utf8;dbname=$dbname,$user,$passwd");
            } else if ($driver == "sqlite") {
                $conexion = new PDO("$driver:$dbname");
            } else {
            }
            $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $conexion) {
            die("Error estableciendo conexión con la base de datos");
        }
        return $conexion;
    }

    /**
     * Se conecta a una base de datos, ejecuta una consulta y devuelve el resultado.
     * 
     * @param string sql La consulta SQL a ejecutar.
     * @param string dbname El nombre de la base de datos a la que conectarse.
     * @param string driver El controlador de la base de datos a utilizar.
     * @param string usuario El nombre de usuario para conectarse a la base de datos.
     * @param string passwd Contraseña para la base de datos.
     * 
     * @return bool | PDOStatement Un objeto PDOStatement o un valor booleano.
     */
    public static function consulta(string $sql, string $dbname, string $driver, string $usuario = null, string $passwd = null): bool | PDOStatement
    {
        try {
            $conexion = self::getConexion($dbname, $driver, $usuario, $passwd);
            if (str_starts_with(strtolower(trim($sql)), "select")) {
                $resultado = $conexion->query($sql);
            } else {
                $resultado = $conexion->exec($sql);
            }
            unset($conexion);
            return $resultado;
        } catch (PDOException $ex) {
            die("Error en consulta: " . $ex->getMessage());
        }
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
