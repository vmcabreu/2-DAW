<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 1</title>
</head>
<style>
    .tablaTemperatura tr:nth-child(even) {
        background-color: skyblue;
    }

    .tablaTemperatura tr:nth-child(odd) {
        background-color: lightgrey;
    }
</style>

<body>
    <table class="tablaTemperatura">
        <tr>
            <th>Mes</th>
            <th>Temperatura Mínima</th>
            <th>Temperatura Máxima</th>
            <th>Temperatura Media</th>
        </tr>
        <?php
        $meses = json_decode(file_get_contents('temperaturas.json'), true);
        $tempMinAnio =  $tempMaxAnio = $meses[0]['datos'][0];
        $tempMediaAnio = 0;
        foreach ($meses as $m) {
            $temperaturaMin = min($m['datos']);
            $temperaturaMax = max($m['datos']);
            $temperaturaMedia = 0;
            $numDias = 0;
            $numDias += count($m['datos']);
            for ($i = 0; $i < count($m['datos']); $i++) {
                $temperaturaMedia += $m['datos'][$i];
            }
            $tempMediaAnio += ($temperaturaMedia / count($m['datos']));

            if ($temperaturaMin < $tempMinAnio) {
                $tempMinAnio = $temperaturaMin;
            }
            if ($temperaturaMax > $tempMaxAnio) {
                $tempMaxAnio = $temperaturaMax;
            }

            echo "<tr>", "<td>", $m['mes'], "</td>",
            "<td>", $temperaturaMin, "</td>",
            "<td>", $temperaturaMax, "</td>",
            "<td>", round(($temperaturaMedia / count($m['datos'])), 2), "</td>",
            "</tr>";
        }
        echo "<tr>", "<td>Año completo</td>",
        "<td>", $tempMinAnio, "</td>",
        "<td>", $tempMaxAnio, "</td>",
        "<td>", round(($tempMediaAnio / 12), 2), "</td>",
        "</tr>";
        ?>
    </table>

</body>

</html>