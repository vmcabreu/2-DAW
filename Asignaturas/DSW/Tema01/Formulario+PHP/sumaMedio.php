<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Formulario</title>
    </head>
    <body>
        <?php
        $n1=$_REQUEST['n1'];
        $n2=$_REQUEST['n2'];
        $suma=0;
        for ($i=$n1; $i<=$n2 ; $i++) { 
            $suma+=$i;
        }
        echo "Las suma vale: $suma.\n<br/>";
        echo "La media es: ", $suma/($n2-$n1+1);
        ?>
        
    </body>
</html>