<?php
declare(strict_types=1);
require_once("Producto.php");
require_once("Carrito.php");
session_start();
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="style.css">
    <title>Tienda de Estilografía</title>
    <style>
        .oculto{
    display: none;
}
    </style>
</head>
<body>
    <h1>Tienda de Estilografía</h1>
    <main>
    <div id="productos">
    <h2>Productos</h2>
    <form action="" method="post">
        <?php
        $tablaProductos = recorrerProductos();
        for ($i = 0; $i < count($tablaProductos); $i++) {
            echo $tablaProductos[$i];
        }
        ?>
    </form>
    </div>
    <div id="carro">
    <h2>Carrito</h2>
    <form action="" method="post">
    <?php
    if (isset($_SESSION['carrito'])) {
        $carrito = $_SESSION['carrito'];
    }else{
        $carro = new Carrito();
    }
    $productosCarrito = $carro->getListaProductos();
    if (isset($_POST['compra'])) {
        foreach ($tablaProductos as $producto) {
            if ($_POST['compra'] == $producto->id) {
                $carro->aniadir($producto);
            }
        }
    }

    foreach ($productosCarrito as $producto) {
        echo $producto;
    }
    echo "Total: " . $carro->getCosteTotal();
    ?>
    </form>
    </div>
    </main>
    <script src="detalles.js">
        
    </script>
</body>
</html>