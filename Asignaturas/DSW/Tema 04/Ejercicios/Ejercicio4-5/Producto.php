<?php
class Producto
{
    private $id, $nombre, $precio, $img, $detalles;
    private $atributos = ["id" => 0, "nombre" => "", "precio" => 0, "descripcion" => "", "imagen" => ""];
    function __construct(int $id, string $nombre, int $precio, string $detalles, string $img)
    {
        $this->id = $id;
        $this->nombre = $nombre;
        $this->precio = $precio;
        $this->img = $img;
        $this->detalles = $detalles;
    }
    //Setter & Getter
    //Setter
    //Ej: $p->id=2
    function __set(string $propiedad, $valor)
    {
        if ($propiedad == "id" && $valor < 1) {
            throw new Exception("El id no es válido");
        }
        $this->atributos[$propiedad] = $valor;
    }
    //Getter
    function __get($propiedad)
    {
        return $this->atributos[$propiedad];
    }

    //ToString
    function __toString()
    {
        $nombre = $this->nombre;
        return "<input type='hidden' value='$this->id'><p>$nombre</p><img src='$this->img'/><p>$this->nombre</p>
        <p>Precio: $this->precio € </p><p id='detalles_$this->id' class='oculto'>$this->detalles</p>
        <button id=comprar name=compra value=$this->id>Comprar</button>
        <button id='btn_$this->id' name=detalle onclick='mostrarDetalles($this->id)'>Detalles</button>";
    }
}

function recorrerProductos()
{
    require_once("Producto.php");
    $BDatos = "/var/www/phpdata/BDproducto.txt";
    $fdbaseDatos = fopen($BDatos, "r");
    $productos = [];
    fseek($fdbaseDatos, 0);
    while ($linea = fgets($fdbaseDatos)) {
        $producto = json_decode($linea, true);
        $p = new Producto($producto['id'], $producto['nombre'], $producto['precio'], $producto['descripcion'], $producto['imagen']);
        array_push($productos, $p);
    }
    return $productos;
}
