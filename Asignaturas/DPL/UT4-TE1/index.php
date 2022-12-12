<?php
require_once("/home/victor/config.php");
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TravelRoad</title>
</head>

<body>
    <?php
    function conseguirLista($visitado)
    {
        $conexDB = pg_connect("host=".HOSTDB." port=".PORT_DB." dbname=".DATABASE ." user=".DB_USER." password=".DB_PASS);
        return pg_query($conexDB, "SELECT * FROM places WHERE visited='$visitado'");
    }


    function mostrarLista($visitado)
    {
        $consulta = conseguirLista($visitado);
        while(($linea= pg_fetch_assoc($consulta))!=null){
            echo "<li>",$linea['name'],"</li>";
        }
    }

    ?>
    <h1>My Travel Bucket List</h1>
    <h2>Places I'd Like to Visit</h2>
    <ul>
        <?php 
            mostrarLista("f");
        ?>
    </ul>

    <h2>Places I've Already Been To</h2>

    <ul>
    <?php 
            mostrarLista("t");
    ?>
    </ul>
</body>

</html>