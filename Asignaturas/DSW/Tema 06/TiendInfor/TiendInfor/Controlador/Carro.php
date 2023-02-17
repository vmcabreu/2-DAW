<?php
    require_once("../Modelo/DAOProducto.php");
    require_once("../../../../../../miSmarty.php");
    session_start();

$smarty = new miSmarty("TiendaInformatica");
$smarty->assign('hola', $hola);
$smarty->display("../Vista/carro.tpl");
