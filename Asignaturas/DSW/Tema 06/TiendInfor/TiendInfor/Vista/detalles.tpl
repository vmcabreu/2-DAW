<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Detalles</title>
    <link rel="stylesheet" href="../assets/css/bootstrap.min.css">

</head>
<body>
    <nav class="navbar navbar-dark bg-success">
        <div class="container-fluid">
            <span class="navbar-brand mb-0 h1">Detalles del producto: {$codProducto}</span>
            <div>
                <span class="navbar-brand mb-0 h3">Usuario: {$usuario}</span>
                <button class="btn btn-secondary btn-sm" type="submit" onclick="location.href='Logout.php'">Cerrar sesión</button>
            </div>
        </div>
    </nav>
    <div class="container mt-4">
        <div class="row">
            <div class="col-12">
            <table class="table table-striped">
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
                <tr>
                    <td colspan="2" class="text-center"><button class="btn btn-primary btn-sm" onclick="volverAtras();">Volver atrás</button></td>
                </tr>
            </table>
            </div>
        </div>
    </div>

    
</body>
</html>