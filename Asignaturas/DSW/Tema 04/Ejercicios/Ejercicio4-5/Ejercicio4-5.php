<?php

declare(strict_types=1);
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>Tienda de Estilografía</h1>
    <h2>Productos</h2>
    <form action="" method="post">
        <?php
        require_once("Producto.php");
        require_once("Carrito.php");
        $tablaProductos = recorrerProductos();
        for ($i = 0; $i < count($tablaProductos); $i++) {
            echo $tablaProductos[$i];
        }
        ?>
    </form>
    <h2>Carrito</h2>
    <form action="" method="post">
    <?php
    $carro = new Carrito();
    if (isset($_POST['compra'])) {
        foreach ($tablaProductos as $producto) {
            if ($_POST['compra'] == $producto->id) {
                $carro->aniadir($producto);
            }
        }
    }

    if (isset($_POST['detalles'])) {
            if ($_POST['compra'] == $producto->id) {
                ?>
                <script>
                    document.getElementById($_POST['compra']).style.visibility = "visible";

                </script>
                <?php
            }
    }
    echo $carro;
    echo "Total: " . $carro->getCosteTotal();
    ?>
    </form>
</body>
</html>