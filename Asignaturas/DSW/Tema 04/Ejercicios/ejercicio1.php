<?php

declare(strict_types=1);
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="" method="POST" enctype="multipart/form-data">
        <label for="nombre">Nombre:</label><br>
        <input type="text" id="nombre" name="nombre"><br>
        <label for="apellido1">Apellido 1:</label><br>
        <input type="text" id="apellido1" name="apellido1"><br>
        <label for="apellido2">Apellido 2:</label><br>
        <input type="text" id="apellido2" name="apellido2"><br>
        <label for="usuario">Usuario:</label><br>
        <input type="text" id="usuario" name="usuario"><br>
        <label for="pass">Contraseña:</label><br>
        <input type="password" id="pass" name="pass"><br>
        <label for="mail">E-mail:</label><br>
        <input type="text" id="mail" name="mail"><br>
        <button type="submit" name="access">Acceder</button>
    </form>
    <?php
    function comprobarUsuario(string $usuariojson, array $registro)
    {
        $usuariof = json_decode($usuariojson);
        if ($usuariof['usuario'] != $registro . ['usuario']) {
            return true;
        } else {
            return false;
        }
    }


    if (isset($_POST['access'])) {
        $usuario = ["nombre" => $_POST['nombre'], "apellido1" => $_POST['apellido1'], "apellido2" => $_POST['apellido2'], "usuario" => $_POST['usuario'], "pass" => $_POST['pass'], "mail" => $_POST['mail']];
        $baseDatos = "/var/www/phpdata/usuarios.txt";
        $fdbaseDatos = fopen($baseDatos, "c+");
        $header = fgets($fdbaseDatos);
        if ($header == null) {
            $usuarioJson = json_encode($usuario, JSON_UNESCAPED_UNICODE);
            fputs($fdbaseDatos, $usuarioJson);
            echo "<script> alert('Se ha registrado con exito') </script>";
            fseek($fdbaseDatos, 0);
        } else {
            while ($linea = fgets($fdbaseDatos)) {
                $contador = strlen($linea);
            }
            if (comprobarUsuario($linea, $usuario)) {
                $usuarioJson = json_encode($usuario, JSON_UNESCAPED_UNICODE);
                fseek($fdbaseDatos, $contador + 1);
                fputs($fdbaseDatos, $usuarioJson);
                echo "<script> alert('Se ha registrado con exito') </script>";
                fseek($fdbaseDatos, 0);
            } else {
                echo "Error. Este usuario ya esta registrado";
            }
        }
    }
    ?>
</body>

</html>