<?php declare(strict_types=1); ?>
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            table, td {
                border: 1px solid black;
            }
            td {
                display: grid;
                padding: 5px;
                margin: 5px;
                text-align: right;
            }
        </style>
    </head>
    <body>
        <?php 
        function mostrarMatrizBid($a,$caption) {
            echo "<table>\n";
            echo "<caption>$caption</caption>\n";
            foreach ($a as $filas) {
                echo "<tr>";
                foreach ($filas as $celda) {
                    echo "<td>$celda</td>";
                }
                echo "</tr>\n";
            }
            echo "</table>";
        }
        $a=$_POST['a'];
        $b=$_POST['b'];
        for ($i=0; $i < sizeof($a); $i++) { 
           for ($j=0; $j < sizeof($a[$i]) ; $j++) { 
            $c[$i][$j]=intval($a[$i][$j])+intval($b[$i][$j]);
           }
        }
        ?>
    <table>
                <tr>
                    <td>
                            <?php
                                mostrarMatrizBid($a,"A");
                            ?>
                    </td>
                    <td>
                        <table border="1">
                            <caption>B</caption>
                            <?php
                                mostrarMatrizBid($b,"B");
                            ?>
                        </table>
                    </td>
                    <td>
                        <table border="1">
                            <caption>C</caption>
                            <?php
                                mostrarMatrizBid($c,"C");
                            ?>
                        </table>
                    </td>
                </tr>
            </table>
    </body>
</html>