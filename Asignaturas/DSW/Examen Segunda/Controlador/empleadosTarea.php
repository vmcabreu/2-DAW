<?php
declare(strict_types=1);
require_once("../Modelo/DAOTarea.php") ;
require_once("../Modelo/DAOEmpleado.php") ;
require_once("../../../../miSmarty.php");

$smarty = new miSmarty("TareasEmpleados");
if(isset($_GET['id'])){

$tareaId = intval($_GET['id']);
$nombreTarea = DAOTarea::getNombreTarea($tareaId);
$listaEmpleadosTarea = DAOEmpleado::getEmpleadosFromTarea($tareaId);

$smarty->assign('nombreTarea', $nombreTarea);
$smarty->assign('listaEmpleadosTarea', $listaEmpleadosTarea);

$smarty->display("../Vista/listaEmpleadosTarea.tpl");
}