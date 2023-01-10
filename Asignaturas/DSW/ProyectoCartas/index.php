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

        img {
            width: 192px;
            height: 308px;
        }
    </style>
</head>

<body>
    <form method="post" action="#" enctype="multipart/form-data">
        <label for="nParejas">Introduce el número de parejas:</label><br>
        <input type="text" name="numParejas" id="nParejas" />
        <button type="submit" name="crearMesa">Crear Mesa</button>
    </form>
    <?php
        $movimientos = 0;
        $parejas = 0;
    ?>
    <p>Movimientos: <?=$movimientos?></p>
    <p>Parejas Encontradas: <?=$parejas?></p>
    <div id="mesa" style="display: block !important;">
        <?php
        if (isset($_POST["crearMesa"])) {
            if (isset($_POST["numParejas"])) {
                $nParejas = intval($_POST["numParejas"]);
                $_SESSION['parejas'] = $nParejas;
                $baraja = new Baraja();
                $baraja->crearBaraja($nParejas);
                $baraja->crearMesa();
                $_SESSION['mesa'] =  $baraja->crearMesa();
            }
            if (isset($_POST[$_COOKIE['carta1']]) && isset($_POST[$_COOKIE['carta2']])) {
                echo $_COOKIE['carta1'] . " " . $_COOKIE['carta2'];
                if ($_COOKIE['carta1']==$_COOKIE['carta2']) {
                    $movimientos++;
                    $parejas++;
                    foreach ($_SESSION['mesa'] as $carta) {
                        if (str_contains($carta,$_COOKIE['carta1'])) {
                            str_replace("bocabajo.png",substr($_COOKIE['carta1'],0,(strlen($_COOKIE['carta1'])-1)),$carta);
                        }
                    }
                    $_COOKIE['carta1']="";
                    $_COOKIE['carta2']="";
                    $_COOKIE['pair']="true";
                
                }else{
                    $movimientos++;
                    $_COOKIE['carta1']="";
                    $_COOKIE['carta2']="";
                    $_COOKIE['pair']="false";
                }
            }
        }
        ?>
    </div>
    <script>
        function getCookie(cookie) {
            let name = cookie + "=";
            let decodedCookie = decodeURIComponent(document.cookie);
            let ca = decodedCookie.split(";");
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == " ") {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }


        document.addEventListener("click", (div) => {
            let carta1 = getCookie("carta1");
            let carta2 = getCookie("carta2");
            if (carta1 == "" || carta1 == "numParejas") {
                document.cookie = "carta1=" + div.target.name
            }
            if (carta2 == "" || carta2 == "numParejas") {
                document.cookie = "carta2=" + div.target.name
            }      
            console.log(div.target)
            console.log(div.target.src)
            let ruta = div.target.src.replace("bocaabajo.png",`${div.target.name.replace(/\d+/,"")}/${div.target.name}.png`)
            //div.target.src = `http://localhost/DSW/ProyectoCartas/imagenesBaraja/${div.target.name.replace(/\d+/,"")}/${div.target.name}.png`;
            div.target.src = ruta
            console.log(div.target.src)
            const mesa = document.getElementById("mesa");

        })
    </script>
</body>

</html>