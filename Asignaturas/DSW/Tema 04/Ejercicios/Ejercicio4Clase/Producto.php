<?php
    class Producto{
        //private $id,$nombre,$precio,$descripcion,$urlImagen,$stock;
        private $atributos=["id"=>0,"nombre"=>"","precio"=>0,"descripcion"=>"","imagen"=>"","stock"=>0];

        function __construct(int $id, string $nombre, float $precio, string $descripcion, string $imagen, int $stock){
            $this->id=$id;
            $this->nombre=$nombre;
            $this->precio=$precio;
            $this->descripcion=$descripcion;
            $this->imagen=$imagen;
            $this->stock=$stock;
        }

        function __set(string $propiedad, mixed $valor){
            if($propiedad=='id' && $valor<1){
                throw new Exception("El id no es válido.");
            }
            //$this->$propiedad=$valor;
            $this->atributos[$propiedad]=$valor;
        }

        function __get(string $propiedad){
            //return $this->$propiedad;
            return $this->atributos[$propiedad];
        }

        function __toString(){
            //return "Producto:  $this->id, Nombre: $this->nombre, Precio: $this->precio, Descripcion: $this->descripcion, UrlImagen: $this->urlImagen, Stock: $this->stock";
            return "Producto: ".json_encode($this->atributos,JSON_UNESCAPED_UNICODE);
        }
    }
?>