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
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre">
        <label for="apellido1">Apellido 1:</label>
        <input type="text" id="apellido1" name="apellido1">
        <label for="apellido2">Apellido 2:</label>
        <input type="text" id="apellido2" name="apellido2">
        <label for="usuario">Usuario:</label>
        <input type="text" id="usuario" name="usuario">
        <label for="pass">Contraseña:</label>
        <input type="password" id="pass" name="pass">
        <label for="mail">E-mail:</label>
        <input type="text" id="mail" name="mail">
        <button type="submit" name="access">Acceder</button>
    </form>
    <?php 
    function comprobarUsuario(string $usuariojson,array $registro){
        $usuariof = json_decode($usuariojson);
        if ($usuariof['usuario'] != $registro.['usuario']) {
            return true;
        }else{
            return false;
        }
    }


    if (isset($_POST['access'])) {
        $baseDatos = "/var/www/phpdata/usuarios.txt";
        $fdbaseDatos = fopen($baseDatos, "c+");
        while($linea = fgets($fdbaseDatos)){
            $usuario=["nombre"=>$_POST['nombre'],"apellido1"=>$_POST['apellido1'],"apellido2"=>$_POST['apellido2'],"usuario"=>$_POST['usuario'],"pass"=>$_POST['pass'],"mail"=>$_POST['mail']];
            if (comprobarUsuario($linea,$usuario) ) {
                $usuarioJson= json_encode($usuario,JSON_UNESCAPED_UNICODE);
                fputs($fdbaseDatos,$usuarioJson);
            }else{
                echo "Error. Este usuario ya esta registrado"
            }
        }



    }
    ?>
</body>
</html>