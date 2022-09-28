Ejercicio 1 - Programa que reciba por "GET" número de filas (f) y número de columnas (c) y
muestre formulario para pedir 2 matrices de fxc y que al enviar los datos muestre la suma de ambas
(ampliar para el producto de matrices).
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title></title>
    </head>
    <body>
        <h1></h1>
        <?php
        $filas=intval($_GET['f']);
        $columnas=intval($_GET["c"]);
        function ponerMatriz($nombreArray,$filas,$columnas){
            for ($f=0; $f < $filas ; $f++) { 
                echo "<tr>\n";
                for ($c=0; $c < $columnas ; $c++) { 
                    echo "<td>";
                    echo "<input type='number' name='$nombreArray[$f][]' size='5'></input>";
                    echo "</td>\n";
                }
                echo "</tr>\n";
            }

        }
        ?>
        <form method="post" action="sumaMatrices.php" enctype="multipart/form-data">
            <table>
                <tr>
                    <td>
                        <table border="1">
                            <caption>A</caption>
                            <?php
                                ponerMatriz('a',$filas,$columnas);
                            ?>
                        </table>
                    </td>
                    <td>
                        <table border="1">
                            <caption>B</caption>
                            <?php
                                ponerMatriz('b',$filas,$columnas);
                            ?>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td><input type="submit" value="Enviar"></td>
                    <td><input type="reset" value="Borrar Form"></td>
                </tr>
            </table>
        </form>
    </body>
</html>