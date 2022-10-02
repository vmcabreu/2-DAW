<?php

declare(strict_types=1);
## Ejercicio 5 - Realiza un programa que muestre la fecha y hora actual usando las imágenes del Ejercicio 2.

?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 05</title>
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
    <h1>Ejercicio 05</h1>
    <?php
    ## '<img src="imagenes/'.random_int(1, 9).'.png">';
    $fechaActual = [];
    $fechaH = date("d/m/Y:H:i:s");
    for ($i=0; $i < strlen($fechaH); $i++) { 
        if (substr($fechaH,$i,1) == ":" ) {
            $fechaActual[$i] = ":";
        } elseif (substr($fechaH,$i,1) == "/") {
            $fechaActual[$i] = "/";
        } else {
            $fechaActual[$i] = '<img src="imagenes/'.substr($fechaH,$i,1).'.png" >';
        }
    }
    echo "<table>\n";
    echo "<tr>";
    echo '<td style="font-size: 35px">Fecha</td>';
    echo "</tr>";
    echo "<tr>";
            echo "<td>";
            for ($i=0; $i < count($fechaActual); $i++) { 
                echo "$fechaActual[$i]";
            }
            echo "</td>";
    echo "</tr>";
    echo "</table>\n";
    ?>
</body>
</html>