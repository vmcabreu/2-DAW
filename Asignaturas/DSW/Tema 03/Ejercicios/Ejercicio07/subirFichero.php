<style>
    table,
    td {
        border: 1px solid black;
    }
</style>
<?php
$fichero = $_FILES['input'];
$destination = "/var/www/phpdata/" . $fichero['name'];
if (file_exists($destination)) {
    echo "El fichero " . $fichero['name'] . " ya existe. ";
} else {
    move_uploaded_file($fichero['tmp_name'], $destination);
    $archivo = fopen($destination, "r");
    $pointer = 0;
    echo "<table>";

    do {
        $linea = fgets($archivo);
        $pointer += strlen($linea);
        $lineaArray = preg_split("/;/", $linea);
        echo "<tr>";
        foreach ($lineaArray as $campos) {
            echo "<td>$campos</td>";
        }
        echo "</tr>";
        //Mueve el cursor a la siguiente linea
        fseek($archivo, $pointer + 1);
    } while ($linea == true);
    echo "</table>";
    fseek($archivo, 0);
    fclose($archivo);
}
?>