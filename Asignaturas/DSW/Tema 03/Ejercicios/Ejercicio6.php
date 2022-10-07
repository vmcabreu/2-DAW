<?php

declare(strict_types=1);
## Ejercicio 6 - Implemtar un contador de visitas
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 06</title>
    <style>
        table,
        td {
            border: 1px solid black;
        }

        td {
            display: grid;
            padding: 5px;
            margin: 5px;
            text-align: center;
            display: inline-block;
            font-size: 75px;
            align-content: center;
        }

        img {

            width: 50px;
            height: 50px;

        }
    </style>
</head>

<body>
    <h1>Ejercicio 06</h1>
    <?php
    /*
    $fContador = "/var/www/php/contador.txt";
    if (file_exists($fContador)) {
        $descriptorContador = fopen($fContador,"r+");
        $contador = intval(fgets($descriptorContador));
        $contador ++;
        fseek($descriptorContador,0);
        fputs($descriptorContador,strval($contador));
    } else {
        $descriptorContador = fopen($fContador,"w");
        fputs($descriptorContador,"1");
        $contador=1;
    }
    fclose($descriptorContador);
    echo "Eres el visitante $contador";
*/
    //Con c+
    $fContador = "/var/www/php/contador.txt";
    $fdContador = fopen($fContador, "c+");
    $contador = fgets($fdContador);
    if ($contador == false) {
        $contador = 1;
    } else {
        $contador = intval($contador) + 1;
    }
    fseek($fdContador, 0);
    fputs($fdContador, strval($contador));
    fclose($fdContador);
    echo "Eres el visitante $contador";

    ?>
</body>

</html>