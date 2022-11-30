<?php
    foreach($listaProductosCarro as $prod){
        $ruta=ROOT_PATH."/DSW/Temas/Recursos/Imagenes/imgEstilografica/".$prod->imagen;
        echo "
            <div class='producto'>
                <p>$prod->nombre</p><br/>
                <img src='$ruta'/></p><br/>
                <p>Precio: ",$prod->precio,"€</p><br/>
                <p>Cantidad: $prod->cantidad</p><br/>
                <p>Coste Unidades: ",$prod->precio*$prod->cantidad,"€</p><br/>
                <form action='' method='post' enctype='multipart/form-data'>
                    <input type='hidden' id='idProd_$prod->id' name='idProd' value='$prod->id'/>
                    <input type='hidden' name='operacion' value='eliminar'/>
                    <button type='submit'>Eliminar</button>
                </form>
            </div>
            <hr/>
        ";
    }

    echo "<div class='total'>Coste total carro: ".$coteTotalCarro."€</div>";
?>