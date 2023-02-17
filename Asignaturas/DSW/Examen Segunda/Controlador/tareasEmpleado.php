<?php
declare(strict_types=1);
require_once("../Modelo/DAOTarea.php") ;
require_once("../Modelo/DAOEmpleado.php") ;
require_once("../../../../miSmarty.php");

$smarty = new miSmarty("TareasEmpleados");
if(isset($_GET['id'])){

$empleadoId = intval($_GET['id']);
$nombreEmpleado = DAOEmpleado::getNombreEmpleado($empleadoId);
$listaTareasEmpleado = DAOTarea::getTareasFromEmpleados($empleadoId);

$smarty->assign('nombreEmpleado', $nombreEmpleado);
$smarty->assign('listaTareasEmpleado', $listaTareasEmpleado);

$smarty->display("../Vista/listaTareasEmpleado.tpl");
}
