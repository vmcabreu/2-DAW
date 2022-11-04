<?php declare(strict_types=1); ?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" type="text/css" href="style.css" />
  <title>Calculadora</title>
</head>

<body>
  <h1>Calculadora - Nativa</h1>
  <form action="" method="post" enctype="multipart/form-data">
    <label for="valor1">Valor 1:</label>
    <input type="number" name="valor1" id="valor1"><br><br>
    <label for="valor2">Valor 2:</label>
    <input type="number" name="valor2" id="valor2"><br><br>
    <label for="operacion">Operación:</label>
    <select name="operacion" id="operacion"><br><br>
      <option value="suma">Suma</option>
      <option value="resta">Resta</option>
      <option value="multiplicacion">Multiplicacion</option>
      <option value="division">División</option>
    </select><br><br>
    <img src="img/calculadora.png" alt="calculadora"><br><br>
    <button name="calcular">Calcular</button>
  </form>
  <?php
  if (isset($_POST['calcular'])) {
    $valor1 = intval($_POST['valor1']);
    $valor2 = intval($_POST['valor2']);
    $operacion = $_POST['operacion'];
    $resultado = 0;
    switch ($operacion) {
      case 'suma':
        $resultado = $valor1 + $valor2;
         echo "<br><p>El resultado es: ".$resultado."</p>";
        break;

      case 'resta':
        if ($valor1 < $valor2) {
          $resultado = $valor2 - $valor1;
           echo "<br><p>El resultado es: ".$resultado."</p>";
        } else {
          $resultado = $valor1 - $valor2;
          echo "<br><p>El resultado es: ".$resultado."</p>";
        }
        break;

      case 'multiplicacion':
        $resultado = $valor1 * $valor2;
         echo "<br><p>El resultado es: ".$resultado."</p>";
        break;

      case 'division':
        $resultado = $valor1 / $valor2;
         echo "<br><p>El resultado es: ".$resultado."</p>";
        break;

      default;
    }
  }

  ?>
</body>

</html>