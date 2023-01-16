<?php
session_start();
require_once("Carta.php");
$mesa = $_SESSION['mesa'];

function rehacerMesa(array $mesa)
{
    for ($i = 0; $i < count($mesa); $i++) {
        echo $mesa[$i];
    }
}

$mesaNueva = [];
if (isset($_SESSION['cartasGiradas'])) {
    $cartaGirada = $_SESSION['cartasGiradas'];
} else {
    $_SESSION['cartasGiradas'] = 0;
    $cartaGirada = 0;
}

if (!isset($_SESSION['mesaActual'])) {
    $_SESSION['mesaActual'] = $mesa;
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



function actualizarMesa(array $mesa, string $nombreCarta, string $posicion)
{
    for ($i = 0; $i < count($mesa); $i++) {
        if (str_contains($mesa[$i], "id=" . $posicion . "'>")) {
            $carta = $mesa[$i];
            $ruta = preg_split("/\d+/", $nombreCarta);
            $carta = str_replace("bocaabajo.png", $ruta[0] . "/" . $nombreCarta . ".png", $carta);
            $carta = str_replace("<a ", "<a class=disabled", $carta);
            $mesa[$i] = $carta;
        }
    }
    return $mesa;
}







if ($_GET) {
    //echo preg_replace("/\d+/","",$_SESSION['carta2name']);
    if ($cartaGirada == 0) {
        if (!isset($_SESSION['carta1name'])) {
            $_SESSION['carta1pos'] = $_GET['id'];
            $_SESSION['carta1name'] = $_GET['name'];
            $mesaNueva = actualizarMesa($mesa, $_SESSION['carta1name'], $_SESSION['carta1pos']);
        } else {
            echo "entra";
            $mesaNueva = actualizarMesa($mesa, $_SESSION['carta1name'], $_SESSION['carta1pos']);
        }
        $cartaGirada++;
        $_SESSION['cartasGiradas'] =  $cartaGirada;
        $_SESSION['mesa'] =  $mesaNueva;
    } else if ($cartaGirada == 1) {

        if (!isset($_SESSION['carta2name'])) {
            $_SESSION['carta2pos'] = $_GET['id'];
            $_SESSION['carta2name'] = $_GET['name'];
            $mesaNueva = actualizarMesa($mesa, $_SESSION['carta2name'], $_SESSION['carta2pos']);
        } else {
            $mesaNueva = actualizarMesa($mesa, $_SESSION['carta2name'], $_SESSION['carta2pos']);
        }
        $cartaGirada++;
        $_SESSION['cartasGiradas'] =  $cartaGirada;
        $_SESSION['mesa'] =  $mesaNueva;
    }else{
        if (isset($_SESSION['carta1name']) && isset($_SESSION['carta2name'])) {

            if ($_SESSION['carta1name'] == $_SESSION['carta2name']) {
                ++$movimientos;
                ++$parejas;
                unset($_SESSION['carta1name']);
                unset($_SESSION['carta2name']);
                unset($_SESSION['carta1pos']);
                unset($_SESSION['carta2pos']);
                $_SESSION['mesaActual'] = $_SESSION['mesa'];
                $_SESSION['cartasGiradas'] = 0;
                $_SESSION['movimientos'] = $movimientos;
                $_SESSION['parejas'] = $parejas;
            } else {
                $movimientos++;
                unset($_SESSION['carta1name']);
                unset($_SESSION['carta2name']);
                unset($_SESSION['carta1pos']);
                unset($_SESSION['carta2pos']);
                $_SESSION['mesa'] = $_SESSION['mesaActual'];
                $_SESSION['cartasGiradas'] = 0;
                $_SESSION['movimientos'] = $movimientos;
                
            }
        }
    }



    
}

if (isset($_SESSION['nParejas'])) {
    $numParejas = intval($_SESSION['nParejas']);
    if ($numParejas == intval($_SESSION['parejas'])) {
        echo "Movimientos: ".$movimientos."  Parejas Encontradas: ".$parejas;
        echo "Has ganado! Felicidades";
        echo rehacerMesa($mesa);
    }
}


echo $cartaGirada;


header("Location: ./index.php");
