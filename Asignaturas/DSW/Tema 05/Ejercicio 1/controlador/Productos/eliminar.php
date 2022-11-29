<?php
require_once("../../modelo/DAOProductos.php");
$id=$_POST['id'];
$resultado = (DAOProducto::borrarProducto($id));
?>