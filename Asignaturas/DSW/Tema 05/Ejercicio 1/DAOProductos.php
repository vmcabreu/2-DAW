<?php
    $conexion = new MySQLi("localhost","productos","productos2022","producto");
    if ($conexion->errno != null) {
        echo "No se pudo establecer la conexión";
        die("saliendo");
    }

    function agregarProducto(){
        
    }
?>