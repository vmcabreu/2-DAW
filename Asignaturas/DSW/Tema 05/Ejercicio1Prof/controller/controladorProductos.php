<?php
    require_once("../model/DAOProducto.php");
    
    $pag = 1;
    $tamPag = 10;
    if (isset($_GET["pag"])) {
        $pag = intval($_GET["pag"]);
    }
    if (isset($_GET["tamPag"])) {
        $tamPag = intval($_GET["tamPag"]);
    }
    $paginaProductos = DAOProducto::getPaginaProducto($pag,$tamPag);
    require_once("../view/index.php");




?>