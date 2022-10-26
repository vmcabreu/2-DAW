<?php
declare(strict_types=1);
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modificar Datos</title>
</head>
<body>
    <h1>Modificar Datos</h1>
    <p>Seleccione que datos desea modificar:</p>
    <form action="" method="post" enctype="multipart/form-data">
    <label>Nombre</label><br>
    <input type="text" name="nombre" id="nombre"> <br>
    <label >Apellidos:</label><br>
    <label for="apellido1">Primero</label>
    <input type="text" name="apellido1" id="apellido1"> 
    <label for="apellido2">Segundo</label>
    <input type="text" name="apellido2" id="apellido2"> <br>
    <label for="user">Usuario</label><br>
    <input type="text" name="user" id="user"> <br>
    <label for="mail">Email</label>  <br>
    <input type="text" name="mail" id="mail"> <br><br>
    <button name="btnMod">Modificar</button>
    </form>
    <?php 
        require_once("../../../Config/config.php");
        require_once("../../../Config/funciones.php");
    if (isset($_POST['btnMod'])) {
        $nombre = $_POST['nombre'];
        $apellido1 = $_POST['apellido1'];
        $apellido2 = $_POST['apellido'];
        $usuario = $_POST['user'];
        $email = $_POST['mail'];
        $modificaciones = [$nombre,$apellido1,$apellido2,$usuario,$email];
        $datosUsuario = buscarDatosUsuarioEnBD($usuario);
        for ($i=0; $i < count($modificaciones); $i++) { 
            if ($modificaciones[$i] != "") {
                unset($linea);
            }
        }
    }
    ?>
</body>
</html>