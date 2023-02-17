<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista Empleados</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous">
    </script>
    <script>
        {literal}
            function recargarPagina() {
                var pag = document.querySelector("#pag").value;
                var tamPag = document.querySelector("#tamPag").value;
                document.location = "?pag=" + pag + "&tamPag=" + tamPag;
            }
        {/literal}
    </script>

</head>

<body>
<h1>Lista Empleados</h1>
    <div class="container-fluid mt-4">
        <div class="row">
            <div class="col-12 p-3 text-center d-flex gap-4 justify-content-center">
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
            <div class="col-12 w-100 table table-light text-center d-flex justify-content-center">
                <table class="w-100">
                    <tr>
                        <th>ID</th>
                        <th>Nombre y Apellidos del Empleado</th>
                        <th>Email</th>
                    </tr>
                    {foreach $paginaEmpleados as $empleado}
                        <tr id='empleado_{$empleado->id}'>
                            <td>{$empleado->id}</td>
                            <!--<td><span><a href="Detalles.php?cod={$empleado->cod}">{$empleado->nombre_corto}</a></td>-->
                            <td><a href="tareasEmpleado.php?id={$empleado->id}">{$empleado->ap1} {$empleado->ap2}, {$empleado->nombre}</a></td>
                            <td>{$empleado->email}</td>
                        </tr>
                    {/foreach}
                </table>
            </div>
        </div>
    </div>
</body>

</html>