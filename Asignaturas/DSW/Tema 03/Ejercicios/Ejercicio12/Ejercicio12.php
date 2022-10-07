<?php
declare(strict_types=1);
# Ejercicio 12 - Programa en PHP que muestre un tablero de ajedrez, de 64 casillas, columnas de la a-h y filas de la 1-8. Cuando el usuario haga "click" sobre una casilla, se le enviará información al
# programa de las coordenadas de la casilla y el programa devolverá un nuevo tablero, coloreando las casillas a las cuales podría saltar un alfil, desde la casilla indicada.
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="ej12.css">
    <title>Ejercicio 12</title>
</head>

<body>
    <h1>Ejercicio 12</h1>
    <table cellspacing="0px" cellpadding="0px">
        <?php
        function crearTablero(){
            $casilla = "";
            for ($filas=0; $filas < 8; $filas++) { 
                $casilla = $casilla."<tr>";
                for ($columnas=0; $columnas < 8; $columnas++) {                
                    if(($filas+$columnas)%2 ==0){
                        $casilla = $casilla.'<td><button name="f'.($filas+1).'c'.($columnas+1).'" class="blanco" style="width: 100%; height: 100%;" onclick="alfilMovimiento();" class="blanco"></button></td>';
                    }else{
                        $casilla = $casilla.'<td><button name="f'.($filas+1).'c'.($columnas+1).'" class="negro" style="width: 100%; height: 100%;" onclick="alfilMovimiento();"></button></td>';
                    }
                }
                $casilla = $casilla."</tr>";
            }
            return $casilla;
        }
        function alfilMovimiento(){
            $casilla = $_GET('id');
            echo $casilla;
        }
        echo crearTablero();
    ?>
    </table>
</body>
</html>