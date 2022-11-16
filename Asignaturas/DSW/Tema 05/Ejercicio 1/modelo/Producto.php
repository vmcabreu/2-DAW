<?php
    class Producto{
        private $atributos=['id'=>0,'descripcion'=>"",'nombre'=>"",'precio'=>0,'imagen'=>""];
    
    function __construct(int $id,string $descripcion,string $nombre,int $precio,string $imagen)
    {
        $this->id = $id ;
        $this->descripcion=$descripcion;
        $this->nombre=$nombre;
        $this->precio=$precio;
        $this->imagen=$imagen;
    }
    
    function __set(string $atributo,mixed $valor)
    {
        if ($atributo=="id" && $valor<0) {
            throw new Exception("Error id no válido");
        }
        $this->atributos[$atributo]=$valor;
    }

    function __get($name)
    {
       return $this->atributos[$name];
    }

    static function arrayProducto(Array $producto){
        $id = intval($producto['id']);
        $descripcion=$producto['descripcion'];
        $nombre=$producto['nombre'];
        $precio=floatval($producto['precio']);
        $imagen=$producto['imagen'];
        return new Producto($id,$descripcion,$nombre,$precio,$imagen);
    }


    function __toString()
    {
        return "<input type='number' name='producto$this->id' readonly>$this->id</input>\n
        <input type='text' name='nombre$this->id' readonly>$this->nombre</input>\n
        <input type='text' name='descripcion$this->id' readonly>$this->descripcion</input>\n
        <input type='text' name='precio$this->id' readonly>$this->precio</input>\n;
        <label><img src='img/$this->imagen'</label><button name='btnBorrar'>Borrar</button>
        <button name='btnEditar'>Editar</button>";
    }


    }
?>