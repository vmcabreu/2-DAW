<?php

declare(strict_types=1);
/* La clase Producto tiene una matriz privada de atributos y un constructor que establece los atributos */
class Producto
{
    private $atributos = ['cod' => "", 'nombre' => "", 'nombre_corto' => "", 'descripcion' => "", 'pvp' => 0, 'familia' => ""];


    public function __construct(string $cod = "", string $nombre = "", string $nombre_corto = "", string $descripcion = "", float $pvp = 0, string $familia = "")
    {
        $this->cod = $cod;
        $this->nombre = $nombre;
        $this->nombre_corto = $nombre_corto;
        $this->descripcion = $descripcion;
        $this->pvp = $pvp;
        $this->familia = $familia;
    }

    /**
     * Toma dos argumentos, el primero es el nombre del atributo, el segundo es el valor del atributo
     * @param atributo - El nombre del atributo que desea establecer.
     * @param valor - El valor a establecer.
     */
    public function __set(string $atributo, string | float $valor)
    {
        $this->atributos[$atributo] = $valor;
    }

    /**
     * Devuelve el valor del atributo que le pasas
     * @param atributo - El nombre del atributo que desea obtener.
     * @returns El valor del atributo.
     */
    public function __get(string $atributo)
    {
        return $this->atributos[$atributo];
    }


    public static function getProductoFromAssoc(array $datosProducto): Producto
    {
        $producto = new Producto();
        foreach ($datosProducto as $atributo => $valor) {
            $producto->$atributo = $valor;
        }
        return $producto;
    }

    public static function getProductoFromStd(stdClass $prodObj): Producto
    {
       return new Producto($prodObj->cod,$prodObj->nombre,$prodObj->nombre_corto);
    }
}
