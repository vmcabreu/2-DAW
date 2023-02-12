<?php
    require_once("../Modelo/DAOProducto.php"); // esto no debe existir aqui en la vista. 
    // requerimos mismarty
    require_once("../../../miSmarty.php");

    // Instanciamos un objeto, esto crea ya las carpetas y demas
    $smarty = new miSmarty("TiendaProductos");


    // Pongo estas variables por defecto
    $pag = 1;
    $tamPag = 10;

    // Si me envian pagina o tamaño de página
    if (isset($_GET['pag'])) {
        $pag = intval($_GET['pag']); // le hacemos la conversion a int porque lo recibimos como string
    }
    if (isset($_GET['tamPag'])) {
        $tamPag = intval($_GET['tamPag']);
    }

    $numPaginas = DAOProducto::numPags($tamPag);
    if ($pag > $numPaginas) {
        $pag = $numPaginas;
    }

    // Le pido al modelo la pagina de productos con los valores recibidos
    $paginaProductos = DAOProducto::getPaginaProducto($pag, $tamPag);
    $siguienteProducto = DAOProducto::maxNumProducto() + 1;
    
    $smarty->assign('pag', $pag); // marca error pero funciona
    $smarty->assign('tamPag', $tamPag);
    $smarty->assign('numPaginas', $numPaginas);
    $smarty->assign('paginaProductos', $paginaProductos);
    $smarty->assign('siguienteProducto', $siguienteProducto);

    // Lo ultimo que hará será cargar la vista
    //require_once("../Vista/catalogoProductos.php");
    $smarty->display("../Vista/catalogoProductos.tpl");
?>