<?php
declare(strict_types=1);
 require_once("../Modelo/DAOEmpleado.php") ;
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

 $numPaginas = DAOEmpleado::numPags($tamPag);
 if ($pag > $numPaginas) {
     $pag = $numPaginas;
 }

 $paginaEmpleados = DAOEmpleado::getPaginaEmpleado($pag, $tamPag);
 $siguienteEmpleado = DAOEmpleado::maxNumEmpleados() + 1;

 $smarty->assign('pag', $pag);
 $smarty->assign('tamPag', $tamPag);
 $smarty->assign('numPaginas', $numPaginas);
 $smarty->assign('paginaEmpleados', $paginaEmpleados);
 $smarty->assign('siguienteEmpleado', $siguienteEmpleado);

 $smarty->display("../Vista/listaEmpleados.tpl");
?>  