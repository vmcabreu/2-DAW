<?php
require_once("../model/DAOProducto.php")
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href=" ">
    <title>Document</title>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous" defer></script>
</head>

<body>
    <h1>Gestisimal</h1>
    <table>
        <tr>
            <th>Código</th>
            <th>Descripción</th>
            <th>Precio Compra</th>
            <th>Precio Venta</th>
            <th>Stock</th>
        </tr>
        <?php
        DAOProducto::imprimirLista();
        ?>
    </table>
</body>

</html>