<?php
require_once("../Modelo/DAOProducto.php");
require_once("../../../miSmarty.php");
session_start();
$smarty = new miSmarty("TiendaInformatica");
if (isset($_POST['user'])) {
    if (DAOProducto::comprobarUsuario($_POST['user'], $_POST['password'])) {
        $_SESSION['user'] = $_POST['user'];
        header('Location: ../Controlador/Productos.php');
    } else {
        echo "
            <div class='container'>
                <div class='row justify-content-center mx-auto mt-5'>
                    <div class='col-4'>
                        <div class='alert alert-danger' role='alert'>
                            Nombre de usuario o contraseña incorrectos.
                        </div>
                    </div>
                </div>
            </div>";
    }
}

$smarty->display("../Vista/login.tpl");
