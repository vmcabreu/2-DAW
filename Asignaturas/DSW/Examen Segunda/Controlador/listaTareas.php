<?php
declare(strict_types=1);
require_once("../Modelo/DAOTarea.php");
require_once("../../../../miSmarty.php");

$smarty = new miSmarty("TareasEmpleados");

$pag = 1;
$tamPag = 10;
if (isset($_GET['pag'])) {
    $pag = intval($_GET['pag']);
}
if (isset($_GET['tamPag'])) {
    $tamPag = intval($_GET['tamPag']);
}

$numPaginas = DAOTarea::numPags($tamPag);
if ($pag > $numPaginas) {
    $pag = $numPaginas;
}

$paginaTareas = DAOTarea::getPaginaTarea($pag, $tamPag);
$siguienteTarea = DAOTarea::maxNumTareas() + 1;

$smarty->assign('pag', $pag);
$smarty->assign('tamPag', $tamPag);
$smarty->assign('numPaginas', $numPaginas);
$smarty->assign('paginaTareas', $paginaTareas);
$smarty->assign('siguienteTarea', $siguienteTarea);

$smarty->display("../Vista/listaTareas.tpl"); 
?>