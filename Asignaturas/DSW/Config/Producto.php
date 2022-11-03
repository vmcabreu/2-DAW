<?php 
    class Producto {
        private $id,$nombre,$precio,$img,$detalles;
        private $atributos=["id"=>0,"nombre"=>"","precio"=>0,"descripcion"=>"","imagen"=>""];
        function __construct($id,$nombre,$precio,$img,$detalles)
        {
            $this->id=$id;
            $this->nombre=$nombre;
            $this->precio=$precio;
            $this->img=$img;
            $this->detalles=$detalles;
        }
        //Setter & Getter
        //Setter
        //Ej: $p->id=2
        function __set($propiedad, $valor)
        {
            if ($propiedad=="id" && $valor<1) {
                throw new Exception("El id no es válido");
            }
            $this->atributos[$propiedad]=$valor;
        }
        //Getter
        function __get($propiedad)
        {
            return $this->atributos[$propiedad];
        }

        //ToString
        function __toString()
        {
            return "<tr><td>Producto: $this->id</td><td>Nombre: $this->nombre</td><td>Precio: $this->precio</td><td>Detalles: $this->detalles</td><td>Imagen: $this->img</td></tr>";
        }
    
    }
