<?php
        $fichero = $_FILES['input']['tmp_name'];
        $base64= base64_encode(file_get_contents($fichero));
        echo '<img src="data:',$_FILES['input']['type'],';base64,',$base64,'"/>\n';

?>