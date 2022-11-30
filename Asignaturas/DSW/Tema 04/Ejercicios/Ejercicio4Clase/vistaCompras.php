<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Estilográfica</title>
    <style>
        body{
            display: grid;
            grid-template-rows: 10vh 85vh 5vh;
            grid-template-columns: 1fr;
        }
        main{
            display: grid;
            grid-template-columns: 75% 25%;
            justify-items: center;
        }
        h1{
            text-align:center;
            line-height: 10vh;
            color: green;
        }
        div#catalogo, div#carro{
            overflow:auto;
            scrollbar-width
        }
        .producto{
            display:flex;
            flex-direction:column;
            justify-items:center;
        }
        .producto *{
            max-width:100%;

        }
        .producto div{
            width: 70%;
            text-align:justify;
        }

    </style>
</head>
<body>
    <header>
        <h1>La Estilográfica</h1>
    </header>
    <main>
        <div id="catalogo">
            <h2>Productos</h2>
            <?php
                require_once("vistaCatalogo.php"); 
            ?>
        </div>
        <div id="carro">
            <h2>Carrito</h2>
            <?php        
                require_once("vistaCarrito.php"); 
            ?>
        </div>
    </main>
    <footer>
        La Estilográfica, S.A <br>
        Carretera del Precipicio, número cualquiera. <br>
        Telefono: No tenemos.
    </footer>
</body>
</html>