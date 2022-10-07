<?php
    if ($_POST) {
        $fichero = $_FILES['fichero'];
        $destination = "/var/www/phpdata/".$fichero['name'];
        if (file_exists($destination)) {
            echo "El fichero ".$fichero['name']." ya existe. ";
        }else{
            move_uploaded_file($fichero['tmp_name'],$destination);
        }

    }else {

    }
?>