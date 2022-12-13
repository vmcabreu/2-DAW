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
    <style>
        div {
            display: inline-flex;
        }
        img{
            width: 192px;
            height: 308px;
        }
    </style>
</head>
<body>
    <form method="post" action="#" enctype="multipart/form-data">
        <label for="nParejas">Introduce el número de parejas:</label><br>
        <input type="text" name="numParejas" id="nParejas" />
        <button type="submit">Crear Mesa</button>
    </form>
    <div id="mesa" style="display: block !important;">
    <?php
    if (isset($_POST["numParejas"])) {
        $nParejas = intval($_POST["numParejas"]);
        $baraja = new Baraja();
        $baraja->crearBaraja($nParejas);
        $baraja->crearMesa();
    }
    ?>
    </div>
    <script>
        document.addEventListener("click", function(div){ 
            div.target.src = `http://localhost/DSW/ProyectoCartas/imagenesBaraja/${div.target.name.replace(/\d+/,"")}/${div.target.name}.png`;
            const mesa = document.getElementById("mesa");
            for (const child of mesa.children) {
                console.log(child.childNodes[0]);
            }
        })
    </script>
</body>

</html>