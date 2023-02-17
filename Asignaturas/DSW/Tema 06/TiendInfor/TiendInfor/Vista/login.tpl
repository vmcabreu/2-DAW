<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tienda Informática - Login</title>
    <link rel="stylesheet" href="../assets/css/bootstrap.min.css">+
    <style>
        body {
            height: 100vh;
            margin: 0;
            padding: 0;
            background-image: linear-gradient(0deg, #000000b2 0%, #000000b2 100%), url("https://comojuega.files.wordpress.com/2013/11/hd-desktop-wallpaper-hd-dark-black-wallpapers-dark-black-wallpaper-dark-background-dark-wallpaper-23-1-1600x10001.jpg?w=810");
            background-position: right;
            background-repeat: no-repeat;
            background-size: cover;
            background-attachment: fixed;


        }

        .whiteColor {
            color: aliceblue !important;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="row justify-content-center mx-auto mt-5">
            <h1 class="col-12 d-flex justify-content-center whiteColor">Tienda Informática <svg
                    xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
                    class="bi bi-pc-display-horizontal" viewBox="0 0 16 16">
                    <path
                        d="M1.5 0A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10H6v1H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5v-1h4.5A1.5 1.5 0 0 0 16 8.5v-7A1.5 1.5 0 0 0 14.5 0h-13Zm0 1h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5ZM12 12.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0ZM1.5 12h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1ZM1 14.25a.25.25 0 0 1 .25-.25h5.5a.25.25 0 1 1 0 .5h-5.5a.25.25 0 0 1-.25-.25Z" />
                </svg></h1>
            <div class="col-4">
                <div class="card">
                    <div class="card-body ">
                        <h2>Iniciar sesión</h2>
                        <form action="" method="post" enctype="multipart/form-data">
                            <div class="mb-3">
                                <label for="user" class="form-label">Usuario:</label>
                                <input type="text" class="form-control" id="user" name="user" required="required">
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Contraseña:</label>
                                <input type="password" class="form-control" id="password" name="password"
                                    required="required">
                            </div>
                            <button type="submit" id="entrar" name="entrar"
                                class="btn btn-primary w-100">Entrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>