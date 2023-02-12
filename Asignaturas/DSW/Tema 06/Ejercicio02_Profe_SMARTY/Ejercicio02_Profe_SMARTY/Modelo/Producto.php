<?php

use Producto as GlobalProducto;

    class Producto {
        private $atributos = ["id" => 0, "nombre" => "", "precio" => 0.0, "descripcion" => "", "imagen" => ""];

        function __construct(int $id, string $descripcion = "", string $nombre, float $precio, string $imagen = "") {
            $this -> id = $id;
            $this -> descripcion = $descripcion;
            $this -> nombre = $nombre;
            $this -> precio = $precio;
            $this -> imagen = $imagen;
        }

        function __get(string $propiedad) {
            return $this-> atributos[$propiedad];
        }

        function __set($propiedad, $valor) {
            if ($propiedad == "id" && $valor < 0) {  // Locambiamos a cero, y si lo ponemos asi significa que yo le pongo numero que quiero
                throw new Exception("Error, valor no válido para el ID.");
            }
            $this -> atributos[$propiedad] = $valor; 
        }

        // Construye un objeto pasandoselo al constructor y nos devuelve un 
        // objeto de la clase
        static function getProducto($datosProd) : Producto {
            $id = intval($datosProd['id']);
            $descripcion = $datosProd['descripcion'];
            $nombre = $datosProd['nombre'];
            $precio = floatval($datosProd['precio']);
            $imagen = $datosProd['imagen'];
            return new Producto($id, $descripcion, $nombre, $precio, $imagen);
        }

        static function getProdStd(stdClass $stdProd) : Producto {
            return new Producto($stdProd->id, $stdProd->descripcion, $stdProd->nombre, floatval($stdProd->precio), $stdProd->imagen);
        }

        function __toString() {
            return json_encode($this->atributos, JSON_UNESCAPED_UNICODE);
        }
    }
?>