<?php
    require_once("../Modelo/DAOProducto.php");
    require_once("../../../../../../miSmarty.php");
    session_start();

    
        // Instanciamos un objeto, esto crea ya las carpetas y demas
        $smarty = new miSmarty("TiendaInformatica");
    $smarty->assign('hola', $hola);
        $smarty->display("../Vista/carro.tpl");
    
?>