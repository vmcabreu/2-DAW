<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Iniciar sesión</title>
    <link rel="stylesheet" href="../assets/css/bootstrap.min.css">
</head>
<body class="bg-secondary bg-opacity-50">
    <div class="container">
        <div class="row justify-content-center mx-auto mt-5">
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <h2>Iniciar sesión</h2>
                        <form action="" method="post" enctype="multipart/form-data">
                            <div class="mb-3">
                                <label for="user" class="form-label">Nombre de usuario:</label>
                                <input type="text" class="form-control" id="user" name="user" required="required">
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Contraseña:</label>
                                <input type="password" class="form-control" id="password" name="password" required="required">
                            </div>
                            <button type="submit" id="entrar" name="entrar" class="btn btn-success w-100">Entrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>