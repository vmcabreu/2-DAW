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
    <form action="" method="post" enctype="multipart/form-data">
        <label for="nombre">Nombre: </label><br>
        <input type="text" id="nombre" name="nombre" /><br>
        <label for="ap1">Apellidos 1: </label><br>
        <input type="text" id="ap1" name="ap1" /> <br>
        <label for="ap1">Apellidos 2: </label><br>
        <input type="text" id="ap2" name="ap2" /> <br>
        <label for="user">Usuario: </label><br>
        <input type="text" id="user" name="user" /> <br>
        <label for="email">Email: </label><br>
        <input type="text" id="email" name="email" /> <br>
        <label for="pass">Contraseña: </label><br>
        <input type="password" id="pass" name="pass" /> <br>
        <label for="passConfirm">Confirmar contraseña: </label><br>
        <input type="password" id="passConfirm" name="passConfirm" /> <br>
        <button type="submit" value="Enviar" name="enviar">Registrarse</button><br><br>
        <a href="login.php">Ir al Login</a>
    </form>
    <?php

    function verifyExistingUser(string $usuariojson, array $registro)
    {
        $usuariof = (array)json_decode($usuariojson);
        return ($usuariof['user'] == $registro['user']);
    }

    if (isset($_POST["enviar"])) {
        $passConfirm = $_POST['passConfirm'];
        $usuario = [
            "nombre" => $_POST['nombre'], "ap1" => $_POST['ap1'], "ap2" => $_POST['ap2'],
            "user" => $_POST['user'], "pass" => $_POST['pass'], "email" => $_POST['email']
        ];

        if ($usuario['pass'] != $passConfirm) {
            echo "Las contraseñas no coinciden.";
            exit;
        }

        $bbdd = "/var/www/phpdata/BDusuario.txt";
        $fdbaseDatos = fopen($bbdd, "c+");
        $header = fgets($fdbaseDatos);
        $usuarioJson = json_encode($usuario, JSON_UNESCAPED_UNICODE);

        if ($header == null) {
            fwrite($fdbaseDatos, $usuarioJson . "\n");
            echo "Se ha registrado con éxito.";
        } else {
            while ($linea = fgets($fdbaseDatos)) {
                if (verifyExistingUser($linea, $usuario)) {
                    echo "Este usuario ya está registrado.";
                    exit;
                }
            }
            fwrite($fdbaseDatos, $usuarioJson . "\n");
            echo "<script> alert('Se ha registrado con éxito.') </script>";
            header('Location: login.php');
        }
    }

    ?>
</body>

</html>