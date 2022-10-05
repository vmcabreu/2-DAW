<?php

declare(strict_types=1);
# Ejercicio 11 - Realiza un programa que escoja al azar 10 cartas de la baraja española y que diga
# cuántos puntos suman según el juego de la brisca. Asegúrate de que no se repite ninguna carta, igual
# que si las hubieras cogido de una baraja de verdad. Deberás mostrar las imágenes de las cartas
# obtenidas al azar y la puntuación que suman. El valor de cada carta es el que sigue: As (11 puntos),
# Tres (10 puntos), Rey (4 puntos), Caballo (3 puntos) y Sota (2 puntos). El resto de cartas no tienen
# valor puntuable. El número total de puntos que suman las cartas de la baraja es 120.


?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 11</title>
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
            width: 130px;
            height: 200px;

        }
    </style>
</head>

<body>
    <h1>Ejercicio 11</h1>
    <?php

function calcularPuntuaje(array $puntuaje){
    $suma = 0;
    for ($i=0; $i < count($puntuaje); $i++) { 
        if ($puntuaje[$i] == 1) {
            $suma= $suma + 11;
        } elseif ($puntuaje[$i] == 3) {
            $suma+= 10;
        } elseif ($puntuaje[$i] == 10) {
            $suma+= 2;
        } elseif ($puntuaje[$i] == 11) {
            $suma+= 3;
        } elseif ($puntuaje[$i] == 12) {
            $suma+= 4;
        } else {
            $suma+=0;
        }
    }
    return $suma;
}

    $palo = ["bastos", "copas", "espadas", "oros"];
    $paloRand = [];
    $puntuacion = [];
    $baraja = [];
    do {
        $paloAleatorio = $palo[random_int(0, 3)];
        $numAleatorio = random_int(1, 12);
        $cartaAleatoria = $paloAleatorio . $numAleatorio;
        in_array($cartaAleatoria, $baraja) ?: array_push($baraja, $cartaAleatoria) && array_push($paloRand, $paloAleatorio) && array_push($puntuacion, $numAleatorio);
    } while (count($baraja) < 10);

    echo "<table>\n";
    echo "<tr>\n";
    echo '<td style="font-size: 35px">Juego la Brisca</td>';
    echo "</tr>\n";
    echo "<tr>\n";
    for ($i = 0; $i < count($baraja); $i++) {
        echo "<td>";
        echo '<img src="imagenesBaraja/', $paloRand[$i], '/', $baraja[$i], '.png"/>';
        echo "</td>";
    }
    echo "</tr>\n";
    echo "<tr>\n";
    echo '<td style="font-size: 35px">Puntuación final:'.calcularPuntuaje($puntuacion).'</td>';
    echo "</tr>\n";
    echo "</table>\n";
    ?>
</body>

</html>