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
<table id="tienda">
<?php
    require_once("../../../Config/funciones.php");
    $tablaProductos = recorrerProductos();
    for ($i=0; $i < count($tablaProductos); $i++) { 
       echo $tablaProductos[$i];
    }
?>
    </table>
</body>
</html>

