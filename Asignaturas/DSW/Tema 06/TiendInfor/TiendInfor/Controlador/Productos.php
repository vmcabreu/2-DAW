<?php
require_once("../Modelo/DAOProducto.php");
require_once("../Modelo/Carro.php");
require_once("../../../miSmarty.php");
session_start();


if (isset($_SESSION['user'])) {
    $smarty = new miSmarty("TiendaInformatica");
    $pag = 1;
    $tamPag = 10;
    $familiaSeleccionada = "";
    if (isset($_GET['pag'])) {
        $pag = intval($_GET['pag']);
    }
    if (isset($_GET['tamPag'])) {
        $tamPag = intval($_GET['tamPag']);
    }

    $numPaginas = DAOProducto::numPags($tamPag);
    if ($pag > $numPaginas) {
        $pag = $numPaginas;
    }

    $paginaProductos = DAOProducto::getPaginaProducto($pag, $tamPag);
    $siguienteProducto = DAOProducto::maxNumProducto() + 1;
    $listadoFamilias = DAOProducto::getFamilias();

    if (isset($_GET['familia'])) {
        $familiaSeleccionada = $_GET['familia'];
        $paginaProductos = DAOProducto::getProductosPorFamilia($pag, $tamPag, $familiaSeleccionada);
    }

    if (isset($_SESSION['carro'])) {
        $carro = $_SESSION['carro'];

        if (isset($_POST['aniadir'])) {
            $productoSeleccionado = DAOProducto::buscarProducto($_POST['aniadir']);
            $carro->aniadir($productoSeleccionado);
        }


        if (isset($_POST['restar'])) {
            $productoSeleccionado = DAOProducto::buscarProducto($_POST['restar']);
            $carro->restar($productoSeleccionado, 1);
        }


        if (isset($_POST['eliminar'])) {
            $productoSeleccionado = DAOProducto::buscarProducto($_POST['eliminar']);
            $carro->borrar($productoSeleccionado);
        }
    } else {
        $_SESSION['carro'] = new Carro();
    }

    $smarty->assign('pag', $pag);
    $smarty->assign('tamPag', $tamPag);
    $smarty->assign('numPaginas', $numPaginas);
    $smarty->assign('paginaProductos', $paginaProductos);
    $smarty->assign('listadoFamilias', $listadoFamilias);
    $smarty->assign('siguienteProducto', $siguienteProducto);
    $smarty->assign('familiaSeleccionada', $familiaSeleccionada);
    $smarty->assign('carro', $_SESSION['carro']);
    $smarty->assign('usuario', $_SESSION['user']);

    $smarty->display("../Vista/catalogoProductos.tpl");
} else {
    header("Location: Login.php");
}
