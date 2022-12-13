<?php

declare(strict_types=1);
require_once("Baraja.php");
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Juego de Parejas</title>
</head>

<body>
    <form method="post" action="#" enctype="multipart/form-data">
        <label for="nParejas">Introduce el número de parejas:</label><br>
        <input type="text" name="numParejas" id="nParejas" />
        <button type="submit">Crear Mesa</button>
    </form>
        <?php
        if (isset($_POST["numParejas"])) {
            $nParejas = intval($_POST["numParejas"]);
            $baraja = new Baraja();
            $baraja->crearBaraja($nParejas);
            $baraja->crearMesa();
        }
        ?>
</body>

</html>