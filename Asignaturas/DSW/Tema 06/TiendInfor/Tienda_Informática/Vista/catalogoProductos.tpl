<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tienda de Informática - Productos</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">

    
    <style>
        .carroLayer {
            max-height: 80vh;
            text-align: center;
            overflow: auto;
            color: black !important;
        }

        .headerColor {
            background-image: linear-gradient(0deg, #421c1cb2 0%, #f50000b2 100%);
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
            color: aliceblue;
        }

        th {
            color: aliceblue !important;
        }


        select {
            color: black;
        }
    </style>
        <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    <script>
        {literal}
            function recargarPagina() {
                var pag = document.querySelector("#pag").value;
                var tamPag = document.querySelector("#tamPag").value;
                document.location = "?pag=" + pag + "&tamPag=" + tamPag;
            }

            function filtrarFamilia() {
                var seleccion = document.getElementById("familia").value;
                document.location = "?familia=" + seleccion;
            }
        {/literal}
    </script>

</head>

<body>
    <nav class="navbar navbar-light headerColor">
        <div class="container-fluid">
            <span class="navbar-brand mb-0 h1">Tienda de Informática - Productos</span>
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
    <div class="container-fluid mt-4">
        <div class="row">
            <div class="col-12">
                <span class="h5">Filtro</span>
                <hr>
                <select class="form-select" name="familia" id="familia" onchange="filtrarFamilia()">
                    <option selected value=''>Todo</option>
                    {foreach $listadoFamilias as $familia}
                        {if $familia@key == $familiaSeleccionada}
                            <option selected='selected' value="{$familia@key}">{$familia}</option>
                        {else}
                            <option value="{$familia@key}">{$familia}</option>
                        {/if}

                    {/foreach}
                </select>
            </div>
            <div class="col-12 p-3 text-center d-flex gap-4 justify-content-start">
                <div>
                    <label for='tamPag'>Tamaño de página:</label>
                    <select onchange="recargarPagina()" name="tamPag" id="tamPag" value="">
                        {for $i=10 to 50 step 5}
                            {if $i == $tamPag}
                                <option selected='selected'>{$i}</option>
                            {else}
                                <option>{$i}</option>
                            {/if}
                        {/for}
                    </select>
                </div>
                <div>
                    <label for='pag'>Pág:</label>
                    <select onchange="recargarPagina()" name="pag" id="pag">
                        {for $i = 1 to $numPaginas}
                            {if $i == $pag}
                                <option selected='selected'>{$i}</option>
                            {else}
                                <option>{$i}</option>
                            {/if}
                        {/for}
                    </select>
                    de {$numPaginas}
                </div>
            </div>
            <div class="col-9">
                <table class="table table-dark table-hover mt-3">
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Acción</th>
                    </tr>
                    {foreach $paginaProductos as $producto}
                        <form action="" method="post" enctype="multipart/form-data">
                            {if $producto->familia == "ORDENA"}
                                <tr id='producto_{$producto->cod}'>
                                    <td><span><a href="Detalles.php?cod={$producto->cod}">{$producto->nombre_corto}</a></td>
                                    <td><span>{$producto->PVP} €</td>
                                    <td><button type='submit' class="btn btn-primary btn-sm" name="aniadir"
                                            value="{$producto->cod}">Añadir</button></td>
                                </tr>
                            {else}
                                <tr id='producto_{$producto->cod}'>
                                    <td><span>{$producto->nombre_corto}</td>
                                    <td><span>{$producto->PVP} €</td>
                                    <td><button type='submit' class="btn btn-primary btn-sm" name="aniadir"
                                            value="{$producto->cod}">Añadir</button></td>
                                </tr>
                            {/if}
                        </form>
                    {/foreach}
                </table>
            </div>
            <div class="col-3">
                <span class="h5">Cesta:</span>
                <hr class="text-end">
                <div class="carroLayer">
                    {foreach $carro -> getListaProductos() as $articuloCarro}
                        <form action="" method="post" enctype="multipart/form-data">
                            <div class="card mb-2">
                                <div class="card-body text-bg-dark">
                                    <h5 class="card-title">{$articuloCarro->nombre_corto}</h5>
                                    <p class="card-text">Cantidad: {$articuloCarro->cantidad}</p>
                                    <p class="card-text">Precio: {$articuloCarro->PVP} €</p>
                                    <button type="submit" class="btn btn-danger btn-sm" name="eliminar"
                                        value="{$articuloCarro->cod}">Eliminar</button>
                                    <button type="submit" class="btn btn-secondary btn-sm" name="restar"
                                        value="{$articuloCarro->cod}">-</button>
                                    <button type="submit" class="btn btn-success btn-sm" name="aniadir"
                                        value="{$articuloCarro->cod}">+</button>
                                </div>
                            </div>
                        </form>
                    {/foreach}
                </div>
                <hr>
                <p class="h5 text-end"><strong>TOTAL</strong>: {$carro -> getCosteTotal()} €</p>
                <hr>
            </div>
        </div>
    </div>

</body>

</html>