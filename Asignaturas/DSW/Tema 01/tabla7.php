<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <table>
        <?php 
            for ($i=1; $i < 10; $i++) { 
                echo "<tr><td>7</td><td>*</td><td>$i</td><td> = </td><td>",(7*$i),"</td></tr>\n";
            }
        ?>
        <br>
        <?php 
            for ($i=1; $i < 10; $i++) { 
                echo "<tr><td>8</td><td>*</td><td>$i</td><td> = </td><td>",(8*$i),"</td></tr>\n";
            }
        ?>
        
    </table>
    
</body>
</html>