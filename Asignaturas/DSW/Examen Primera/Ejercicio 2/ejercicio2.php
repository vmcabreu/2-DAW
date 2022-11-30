<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 2</title>
</head>
<body>
    <?php
    $formulario = json_decode(file_get_contents('form.json'), true);
    echo "<form action='",$formulario['action'],"' method='",$formulario['method'],"' id='",$formulario['id'],"' enctype='",$formulario['enctype'],"'>";
    foreach ($formulario['campos'] as $campo) {
        if ($campo['elemento'] == "input" ) {
            echo "<label>",$campo['label'],"</label>\n";
            echo "<",$campo['elemento']," type='",$campo['type'],"' maxlength='",$campo['maxlength'],"' size='",$campo['size'],"' name='",$campo['name'],"' id='",$campo['id'],"'"; 
            if ($campo['id'] != "ap2") {
             echo "required='",$campo['required'],"'";
            }
            if ($campo['id'] == "dni" || $campo['id'] == "telef") {
                echo "pattern='",$campo['pattern'],"'";
            }
            
            echo ">\n<br>";
        }else if ($campo['elemento'] == "select") {
            echo "<label>",$campo['label'],"</label>\n",
            "<",$campo['elemento']," type='",$campo['type'],"' name='",$campo['name'],"' id='",$campo['id'],"'>\n";
            for ($i=0; $i < count($campo['opciones']); $i++) { 
                echo "<option value='",$campo['opciones'][$i],"'>",$campo['opciones'][$i],"</option>";
            }
            echo "</",$campo['elemento'],"><br>\n"; 
        }elseif ($campo['elemento'] == "textarea") {
            echo "<label>",$campo['label'],"</label>\n";
            echo "<",$campo['elemento']," name='",$campo['name'],"' id='",$campo['id'],"'  rows='",$campo['rows'],"'  cols='",$campo['cols'],"'></textarea><br>\n"; 
        }
    
    }
    foreach ($formulario['botones'] as $botones){
        echo "<button type='",$botones['type'],"' name='",$botones['name'],"' id='",$botones['id'],"'>",$botones['content'],"</button>";
    }
    echo "</form>";
    ?>
    
</body>
</html>