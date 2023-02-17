<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tienda Informática - {$codProducto}</title>
    <link rel="stylesheet" href="../assets/css/bootstrap.min.css">
    <style>
        .headerColor {
            background-image: linear-gradient(0deg, #1c4142b2 0%, #00e5f5b2 100%);
        }

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

        * {
            color: aliceblue !important;
        }
    </style>
    <script>
        function volverAtras() {
            window.location.href = "Productos.php"
        }
    </script>

</head>

<body>
    <nav class="navbar navbar-dark headerColor">
        <div class="container-fluid">
            <span class="navbar-brand mb-0 h1">Detalles</span>
            <div>
                <span class="navbar-brand mb-0 h3">Usuario: {$usuario}</span>
                <button class="btn btn-dark btn-sm" type="submit" onclick="location.href='Logout.php'"><svg
                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                        <path fill-rule="evenodd"
                            d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                    </svg></button>
            </div>
        </div>
    </nav>
    <div class="container mt-4">
        <div class="row">
            <div class="col-12">
                <h1 class="h1"> {$codProducto}</h1>
            </div>
            <div class="col-12">
                <table class="table table-dark table-hover">
                    {foreach $detallesProducto as $detalles}
                        <tr>
                            <td><strong>Nombre</strong></td>
                            <td>{$detalles->nombre_corto}</td>
                        </tr>
                        <tr>
                            <td><strong>Código</strong></td>
                            <td>{$detalles->cod}</td>
                        </tr>
                        <tr>
                            <td><strong>Procesador</strong></td>
                            <td>{$detalles->procesador}</td>
                        </tr>
                        <tr>
                            <td><strong>RAM</strong></td>
                            <td>{$detalles->RAM} GB</td>
                        </tr>
                        <tr>
                            <td><strong>Tarjeta gráfica</strong></td>
                            <td>{$detalles->grafica}</td>
                        </tr>
                        <tr>
                            <td><strong>Unidad óptica</strong></td>
                            <td>{$detalles->unidadoptica}</td>
                        </tr>
                        <tr>
                            <td><strong>Sistema Operativo</strong></td>
                            <td>{$detalles->SO}</td>
                        </tr>
                        <tr>
                            <td><strong>Otros</strong></td>
                            <td>{$detalles->otros}</td>
                        </tr>
                        <tr>
                            <td><strong>PVP</strong></td>
                            <td>{$detalles->PVP} €</td>
                        </tr>
                        <tr>
                            <td><strong>Descripción</strong></td>
                            <td>{$detalles->descripcion}</td>
                        </tr>
                    {/foreach}
                </table>
                <button class="btn btn-primary btn-sm w-100" onclick="volverAtras()">Volver atrás</button>
            </div>
        </div>
    </div>


</body>

</html>