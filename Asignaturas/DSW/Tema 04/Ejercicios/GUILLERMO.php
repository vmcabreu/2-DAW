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
        <table>
            <tr>
                <td><label for="nombre">Nombre: </label><input type="text" id="nombre" name="nombre" /> </td>
                <td><label for="ap1">Apellidos: </label><input type="text" id="ap1" name="ap1" /> </td>
                <td><input type="text" id="ap2" name="ap2" /> </td>
            </tr>
            <tr>
                <td><label for="user">Usuario: </label><input type="text" id="user" name="user" /> </td>
                <td><label for="email">Email: </label><input type="text" id="email" name="email" /> </td>
            </tr>
            <tr>
                <td><label for="pass">Contraseña: </label><input type="password" id="pass" name="pass" /> </td>
                <td><label for="passConfirm">Confirmar contraseña: </label><input type="password" id="passConfirm" name="passConfirm" /> </td>
                <td><button type="submit" value="Enviar" name="enviar">Enviar</button></td>
            </tr>
        </table>
    </form>
    <?php
    function verifyExistingUser(string $usuariojson, array $registro){
        $usuariof = (array)json_decode($usuariojson);
        $test1= $usuariof['user']." ".$registro['user'];
        echo $test1;
        return ($usuariof['user'] == $registro['user']);
    }

    if (isset($_POST["enviar"])) {
        $nombre = $_POST['nombre'];
        $ap1 = $_POST['ap1'];
        $ap2 = $_POST['ap2'];
        $user = $_POST['user'];
        $pass = $_POST['pass'];
        $passConfirm = $_POST['passConfirm'];
        $email = $_POST['email'];

        if ($pass != $passConfirm) {
            echo "<script> alert('Error01:  \\n\\n Las contraseñas no coinciden.'); </script>";
            exit;
        } 

            $usuario = [
                "nombre" => $nombre, "ap1" => $ap1, "ap2" => $ap2,
                "user" => $user, "pass" => $pass, "email" => $email
            ];
            $bbdd = "/var/www/phpdata/BDusuario.txt";
            $fdbaseDatos = fopen($bbdd, "c+");
            $header = fgets($fdbaseDatos);
            $usuarioJson = json_encode($usuario, JSON_UNESCAPED_UNICODE);

            if ($header == null) {
                fwrite($fdbaseDatos, $usuarioJson . "\n");
                echo "<script> alert('Se ha registrado con éxito'); </script>";
            } else {
                while ($linea = fgets($fdbaseDatos)) {
                    if (verifyExistingUser($linea, $usuario)) {
                        echo "<script> alert('Error02: \\n\\n Este usuario ya está registrado.'); </script>";
                        exit;
                    }
                }
                fwrite($fdbaseDatos, $usuarioJson . "\n");
                echo "<script> alert('Se ha registrado con éxito'); </script>";
            }
        }
    ?>
</body>

</html>