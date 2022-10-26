<?php

declare(strict_types=1);
session_start();
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Perfil</title>
</head>

<body>
    <h1>Perfil</h1>
    <?php
    require_once("../../../Config/config.php");
    require_once("../../../Config/funciones.php");
    $BDatos = "/var/www/phpdata/BDusuario.txt";
    $fdbaseDatos = fopen($BDatos, "r");
    fseek($fdbaseDatos, 0);
    while ($linea = fgets($fdbaseDatos)) {
        if (verificarUsuarioJson($linea, $_SESSION['user'])) {
            $datosUsuario = json_decode($linea, true);
    ?>
            <ul>
                <li>Nombre: <?php echo "", $datosUsuario['nombre'] ?></li>
                <li>Apellidos: <?php echo $datosUsuario['ap1'], ' ', $datosUsuario['ap2'] ?></li>
                <li>Usuario: <?php echo "", $datosUsuario['user'] ?></li>
                <li>Email: <?php echo "", $datosUsuario['email'] ?></li>
            </ul>
            <a href="inicio.php">Volver al inicio</a>
    <?php
            exit;
        }
    }
    ?>
</body>

</html>