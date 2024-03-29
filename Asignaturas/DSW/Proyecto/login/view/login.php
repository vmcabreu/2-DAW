<?php

declare(strict_types=1);
require_once("../model/DAOUsuario.php");
session_start();
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <link rel="stylesheet" href="../../styles/login.css">
    <title>Login</title>
    <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
</head>

<body>
    <div class="d-flex p-3 m-3  flex-column justify-content-center align-items-center">
        <h1>Log in</h1>
        <form action="../controller/logger.php" method="post" enctype="multipart/form-data">
            <div class="mb-3">
                <label for="usuario" class="form-label">Usuario:</label>
                <input type="text" class="form-control" id="usuario" aria-describedby="usuarioHelp">
                <div id="usuarioHelp"></div>
            </div>
            <div class="mb-3">
                <label for="passwd" class="form-label">Contraseña:</label>
                <input type="password" class="form-control" id="passwd">
            </div>
            <button type="submit" class="btn btn-primary w-100">Acceder</button>
            <?php
            if (isset($_SESSION['logged'])) {
                if ($_SESSION['logged'][2] == false) {
                    echo '<p class="error">Error de usuario/contraseña</p>';
                }
            }

            ?>
        </form>
        <a href="./register.php" class="p-3">¿No tienes una cuenta? Registrate.</a>
    </div>
</body>

</html>