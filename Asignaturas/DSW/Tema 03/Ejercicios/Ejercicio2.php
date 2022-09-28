<?php

declare(strict_types=1);
##Ejercicio 2 - Programa que muestre en una <table> los seis números ordenados de un sorteo de la
##primitiva (números aleatorios entre [1,49]). Mostrar la fecha y la hora del sorteo.
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 2</title>
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
    </style>
</head>

<body>
    <h1>Ejercicio 02</h1>
    <?php
      $primitiva = [];
    do {
        $rando = rand(1, 49);
        in_array($rando, $primitiva) ? : array_push($primitiva,$rando) ;
    } while (count($primitiva) < 6);

    sort($primitiva);
    $fechaH = date("d/m/Y:H:i:s");
    echo "<table>\n";
    echo "<tr>";
    echo "<td>Sorteo del dia: $fechaH</td>";
    for ($i = 0; $i < 6; $i++) {
        echo "<td>";
        echo "Número " . ($i + 1) . ": $primitiva[$i]";
        echo "</td>";
    }
    echo "</tr>";
    echo "</table>\n";
    ?>
</body>

</html>