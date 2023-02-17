<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Tareas del empleado {$nombreEmpleado}</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous">
    </script>
</head>

<body>
<h1>Lista de Tareas del empleado {$nombreEmpleado}</h1>
    <div class="container-fluid mt-4">
        <div class="row">
            <div class="col-12 w-100 table table-light text-center d-flex justify-content-center">
                <table class="w-75">
                    <tr>
                        <th>ID</th>
                        <th>Tarea</th>
                        <th>Fecha Límite</th>
                        <th>Completada</th>
                    </tr>
                    {foreach $listaTareasEmpleado as $tarea}
                        <tr id='tarea_{$tarea->id}'>
                            <td>{$tarea->id}</td>
                            <td>{$tarea->descripcion}</td>
                            <td>{$tarea->fecha_limite}</td>
                            <td>{$tarea->completada}</td>
                        </tr>
                    {/foreach}
                </table>
            </div>
        </div>
    </div>
</body>

</html>