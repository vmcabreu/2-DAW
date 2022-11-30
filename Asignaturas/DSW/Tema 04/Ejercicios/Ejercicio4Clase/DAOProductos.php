<?php
    require_once("./Producto.php");
    function getListaPRoductos(){
        return [
            new Producto(1,"Pelikan Souveran M-100",140,"Pelikan Souveran M-100 posee punta de acero inoxidable pulido, barril laqueado de capas múltiples y clip de acero inoxidable.","pelikan.png",0),
            new Producto(2,"Parker Duofold",240,"Parker Duofold posee punta de acero inoxidable pulido, barril laqueado de capas múltiples y clip de acero inoxidable.","parker.png",0),
            new Producto(3,"Visconti Van Gogh",300,"Visconti Van Gogh posee punta de acero inoxidable pulido, barril laqueado de capas múltiples y clip de acero inoxidable.","visconti.png",0)
        ];
    }
?>