<?php

declare(strict_types=1);
session_start();
require_once("Juego.php");
function rehacerMesa(array $mesa)
{
    for ($i = 0; $i < count($mesa); $i++) {
        echo $mesa[$i];
    }
}

if (isset($_SESSION['movimientos']) &&  isset($_SESSION['parejas'])) {
    $movimientos = intval($_SESSION['movimientos']);
    $parejas = intval($_SESSION['parejas']);
} else {
    $_SESSION['movimientos'] = 0;
    $_SESSION['parejas'] = 0;
    $movimientos = intval($_SESSION['movimientos']);
    $parejas = intval($_SESSION['parejas']);
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
    <title>Juego de Parejas</title>
    <style>
        div {
            display: inline-flex;
        }

        img {
            width: 100px;
            height: 166px;
        }

        a.disabled {
            pointer-events: none;
            cursor: default;
        }

        .mesaJuego {
            height: 50% !important;
        }
    </style>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous" defer></script>
</head>

<body>
    <div class="container">
        <div class="row h-50 ">
            <div class="col-8 w-75">
                <form method="post" action="#" enctype="multipart/form-data">
                    <div class=" p-3 d-flex gap-4 ">
                        <label for="nParejas" class="form-label">Introduce el número de parejas:</label>
                        <input type="text" class="form-control w-25" name="numParejas" id="nParejas" />
                        <button name="resetear" class="btn btn-primary">Volver a empezar</button>
                        <button type="submit" name="crearMesa" class="btn btn-primary">Crear Mesa</button>
                    </div>
                </form>
            </div>
            <div class="col-4 w-25">
                <p>Movimientos: <?= $_SESSION['movimientos'] ?> <br> Parejas Encontradas: <?= $_SESSION['parejas'] ?></p>
            </div>
            <div class="col-12">
                <?php

                ?>
            </div>
        </div>
    </div>
    <div class="container">
        <div id="mesa" class="row">
            <?php
            if (isset($_POST['resetear'])) {
                unset($_SESSION['mesa']);
                $_SESSION['movimientos'] = 0;
                $_SESSION['parejas'] = 0;
                $_SESSION['cartasGiradas'] = 0;
                unset($_SESSION['carta1name']);
                unset($_SESSION['carta2name']);
                unset($_SESSION['carta1pos']);
                unset($_SESSION['carta2pos']);
                unset($_SESSION['mesaActual']);
                unset($_SESSION['nParejas']);
            };

            if (isset($_SESSION['mesa'])) {
                rehacerMesa($_SESSION['mesa']);
            } else {
                if (isset($_POST["numParejas"])) {
                    $nParejas = intval($_POST["numParejas"]);
                    if (!isset($_SESSION['nParejas'])) {
                        $_SESSION['nParejas'] = $nParejas;
                    }
                    Juego::crearBaraja($nParejas);
                    Juego::crearMesa();
                }
            };


            ?>
        </div>
    </div>
</body>

</html>