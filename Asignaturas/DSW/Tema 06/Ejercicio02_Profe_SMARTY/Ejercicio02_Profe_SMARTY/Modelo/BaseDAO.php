<?php

    class BaseDAO {
        private static $lastAffectedRows;
        /**
         * Crea un nuevo objeto MySQLi, que es una clase de PHP que representa una conexión a una base de datos
         * MySQL
         * 
         * @return PDO La conexión a la base de datos.
         */
        public static function getConexion() : PDO {
            try {
                $conexion = new PDO("mysql:host=localhost;charset=utf8;dbname=productos","productos","productos2021");
                $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            } catch(PDOException $ex) {
                die("Error conectando con el servidor de base de datos.");
            }
            return $conexion;
        }

        /**
         * Función que conecta a la base de datos y ejecuta la consulta.
         * 
         * @param string sql La consulta SQL a ejecutar. Los datos dentro de la consulta deben escaparse
         * correctamente.
         * @return int | PDOStatement El resultado de la consulta.
         */
        public static function consulta(string $sql) : PDOStatement | int {
            // Para evitar el error de "duplicate entry", generamos un try-catch
            try {                
                //Comprobamos si la sql pasada por parametro contiene la palabra "SELECT"
                $conexion = self::getConexion();

                if (str_starts_with(strtolower(trim($sql)), "select")) {
                    $resultado = $conexion->query($sql);      
                } else {
                    // En caso contrario, ejecutamos un exec
                    $resultado = $conexion->exec($sql);
                }
                // Cerramos la conexión y devolvemos
                unset($conexion); // Cerrar la conexion
                return $resultado;
            } catch (Exception $ex) {
                // throw new Exception("Error en la consulta.");
                die("Error en la consulta. ".$ex->getMessage());
            }
        }

        /**
         * Devuelve el número de filas afectadas por la última consulta
         * @return int El número de filas afectadas por la última instrucción SQL.
         */
        public static function getLastAffectedRows() : int {
            return self::$lastAffectedRows;
        }
    }

    //BaseDAO::consulta("INSERT INTO producto VALUES (1000, 'Producto 1000', 'P1001', 1000.5, 'p1000.png')");
?>