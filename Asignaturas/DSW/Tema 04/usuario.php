<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
            if (isset($_POST['usuario']) && isset($_POST['pass'])) {
            $usuario=$_POST['usuario'];
            $pass=$_POST['pass'];
            if ($usuario=='Juan' && $pass='123') {
                echo "Bienvenido";
            }else{
                echo "Error";
            }
        }
    ?>
    <form action="" method="POST" enctype="multipart/form-data">
        <label for="usuario">Usuario:</label>
        <input type="text" id="usuario" name="usuario">
        <label for="pass">Contraseña:</label>
        <input type="password" id="pass" name="pass">
        <button type="submit">Iniciar sesion</button>
    </form>
</body>
</html>