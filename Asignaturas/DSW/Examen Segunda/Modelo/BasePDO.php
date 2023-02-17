<?php
    declare(strict_types=1);
    class BasePDO {
        private static $lastAffectedRows;
        public static function getConexion(string $dbname, string $driver, string $user=null, string $pass=null) : PDO {
            try {
                if ($driver == "mysql") {
                    $conexion = new PDO("mysql:host=localhost;charset=utf8;dbname=$dbname",$user,$pass);
                } else if ($driver == "sqlite") {
                    $conexion = new PDO("sqlite:$dbname");
                } else {
                    die("Error: Driver de bases de datos desconocido: $driver");
                }
                $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            } catch(PDOException $ex) {
                die("Error estableciendo conexión con el servidor de base de datos.");
            }
            return $conexion;
        }


        public static function consulta(string $sql, $dbname, $driver, $user=null, $pass=null) : PDOStatement | int {
            try {                
                $conexion = self::getConexion($dbname, $driver, $user, $pass); 
                if (str_starts_with(strtolower(trim($sql)), "select")) {
                    $resultado = $conexion->query($sql);
                } else {
                    $resultado = $conexion->exec($sql); 
                }
                unset($conexion);
                return $resultado;
            } catch (Exception $ex) {
                die("Error en la consulta. ".$ex->getMessage());
            }
        }

        public static function getLastAffectedRows() : int {
            return self::$lastAffectedRows;
        }
    }