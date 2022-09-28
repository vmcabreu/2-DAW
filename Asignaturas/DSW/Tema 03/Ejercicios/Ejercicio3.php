<?php

declare(strict_types=1);
##Ejercicio 3 - Programa que genere un número aleatorio de 5 cifras y lo muestre con imágenes.
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 03</title>
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
        }
        img {
            width: 50px;
        }
    </style>
</head>

<body>
    <h1>Ejercicio 03</h1>
    <?php
    $numeros = [];
    for ($i = 0; $i < 5; $i++) {
        $numeros[$i]= '<img src="imagenes/'.random_int(1, 9).'.png">';

    }
    echo "<table>\n";
    echo "<tr>";
    echo "<td>Numeros:</td>";
    for ($i = 0; $i < 5; $i++) {
        echo "<td>";
        echo $numeros[$i];
        echo "</td>";
    }
    echo "</tr>";
    echo "</table>\n";
    ?>
</body>

</html>