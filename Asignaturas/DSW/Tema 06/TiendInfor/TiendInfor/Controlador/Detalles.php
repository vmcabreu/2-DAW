<?php
    require_once("../Modelo/DAOProducto.php");
    require_once("../../../../../../miSmarty.php");
    session_start();


if (isset($_SESSION['user'])) {
    if (isset($_GET["cod"])) {
        $codProducto = $_GET["cod"];
        $detallesProducto = DAOProducto::getDetallesProducto($codProducto);
        
        $smarty = new miSmarty("TiendaInformatica");

        $smarty->assign('codProducto', $codProducto);
        $smarty->assign('detallesProducto', $detallesProducto);
        $smarty->assign('usuario', $_SESSION['user']);

        $smarty->display("../Vista/detalles.tpl");
    } else {
        header("Location: Productos.php");
    }
} else {
    header('Location: Login.php');
}

