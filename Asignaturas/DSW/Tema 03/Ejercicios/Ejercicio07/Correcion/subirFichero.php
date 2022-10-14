<style>
    table,
    td {
        border: 1px solid black;
    }
</style>
<?php

function lineaCsvToTR(string $linea, string $tipoCelda = "td", string $separador = ";"): string
{
    $res = "";
    $campos = explode($separador, $linea);
    $res .= "<tr>\n";
    foreach ($campos as $campo) {
        $res .= "<$tipoCelda>$campo</$tipoCelda>";
    }
    $res .= "<tr>\n";
    return $res;
}


if (isset($_POST['btnFicheroCsv'])) {
    $fichero = $_FILES['ficheroCsv'];
    $fdCsv = fopen($fichero['tmp_name'], "r");
    echo "<table>\n";
    echo lineaCsvToTR(fgets($fdCsv), "th");
    while (($linea = fgets($fdCsv))) {
        echo lineaCsvToTR($linea);
    }
    echo "</table>\n";
} else if (isset($_POST['btnTextoCsv'])) {
    $texto = $_POST['input'];
    $lineas = explode("\n",$texto);
    echo "<table>\n";
    echo "<thead>\n";
    lineaCsvToTR($lineas[0],"th");
    echo "</thead>\n";
    echo "<tbody>\n";
    for ($i=1; $i < count($lineas); $i++) { 
        $linea = preg_split("/;/",$linea[$i]);
        foreach($linea as $l){
            lineaCsvToTR($l);
        }
    }
    echo "</tbody>\n";
    echo "</table>\n";
} else {
}
/**
        $fichero = $_FILES['input'];
        $destination = "/var/www/phpdata/".$fichero['name'];
        if (file_exists($destination)) {
            echo "El fichero ".$fichero['name']." ya existe. ";
        }else{
            move_uploaded_file($fichero['tmp_name'],$destination);
            $archivo = fopen($destination,"r");
            $pointer = 0;
            echo "<table>";
            
            do{
                $linea = fgets($archivo);
                $pointer += strlen($linea);
                $lineaArray = preg_split("/;/",$linea);
                echo "<tr>";
                for ($i=0; $i < count($lineaArray); $i++) { 
                    echo "<td>";
                    echo "$lineaArray[$i]";
                    echo "</td>";
                }
                echo "</tr>";
                fseek($archivo, $pointer+1);


            }while ($linea == true);

            echo "</table>";

        }
 */
?>