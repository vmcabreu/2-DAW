<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de productos</title>
    <link rel="stylesheet" href="../assets/css/bootstrap.min.css">

    <script>
    {literal}
        function recargarPagina() {
            var pag = document.querySelector("#pag").value;
            var tamPag = document.querySelector("#tamPag").value;
            document.location="?pag="+pag+"&tamPag="+tamPag;
        }

        function filtrarFamilia() {
            var seleccion = document.getElementById("familia").value;
            document.location="?familia="+seleccion;
        }
    {/literal}
    </script>
</head>
<body>
    <nav class="navbar navbar-light bg-info">
        <div class="container-fluid">
            <span class="navbar-brand mb-0 h1">Lista de productos</span>
            <div>
                <span class="navbar-brand mb-0 h3">Usuario: {$usuario}</span>
                <button class="btn btn-secondary btn-sm" type="submit" onclick="location.href='Logout.php'">Cerrar sesión</button>
            </div>
        </div>
    </nav>
    <div class="container-fluid mt-4">
        <div class="row">
            <div class="col-3">
                <span class="h5">Filtrar por familia</span>
                <hr>
                <select class="form-select" name="familia" id="familia" onchange="filtrarFamilia()">
                    <option selected value=''>Mostrar todas</option>
                    {foreach $listadoFamilias as $familia}
                        {if $familia@key == $familiaSeleccionada}
                            <option selected='selected' value="{$familia@key}">{$familia}</option>
                        {else}
                            <option value="{$familia@key}">{$familia}</option>
                        {/if}
                        
                    {/foreach}
                </select>
            </div>
            <div class="col-6">
                <table class="table table-striped mt-3">
                    <tr>
                        <th>Acción</th>
                        <th>Producto</th>
                        <th>Precio</th>
                    </tr>
                    {foreach $paginaProductos as $producto}
                        <form action="" method="post" enctype="multipart/form-data">
                        {if $producto->familia == "ORDENA"}
                            <tr id='producto_{$producto->cod}'>
                                <td><button type='submit' class="btn btn-primary btn-sm" name="aniadir" value="{$producto->cod}">Añadir</button></td>
                                <td><span><a href="Detalles.php?cod={$producto->cod}" >{$producto->nombre_corto}</a></td>
                                <td><span>{$producto->PVP} €</td>
                            </tr>
                        {else}
                            <tr id='producto_{$producto->cod}'>
                                <td><button type='submit' class="btn btn-primary btn-sm" name="aniadir" value="{$producto->cod}">Añadir</button></td>
                                <td><span>{$producto->nombre_corto}</td>
                                <td><span>{$producto->PVP} €</td>
                            </tr>
                        {/if}
                        </form>
                    {/foreach}
                </table>
                <div class="text-center d-flex justify-content-between">
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
            </div>
            <div class="col-3">
                <span class="h5">Cesta:</span>
                <hr>
                {foreach $carro -> getListaProductos() as $articuloCarro}
                    <form action="" method="post" enctype="multipart/form-data">
                        <div class="card mb-2 text-end">
                            <div class="card-body">
                                <h5 class="card-title">{$articuloCarro->nombre_corto}</h5>
                                <p class="card-text">Cantidad: {$articuloCarro->cantidad}</p>
                                <p class="card-text">Precio: {$articuloCarro->PVP} €</p>
                                <button type="submit" class="btn btn-danger btn-sm" name="eliminar" value="{$articuloCarro->cod}">Eliminar</button>
                                <button type="submit" class="btn btn-secondary btn-sm" name="restar" value="{$articuloCarro->cod}">-</button>
                                <button type="submit" class="btn btn-secondary btn-sm" name="aniadir" value="{$articuloCarro->cod}">+</button>
                            </div>
                        </div>
                    </form>
                {/foreach}
                <hr>
                <p class="h5 text-end"><strong>TOTAL</strong>: {$carro -> getCosteTotal()} €</p>
                <hr>
            </div>
        </div>
    </div>

</body>
</html>