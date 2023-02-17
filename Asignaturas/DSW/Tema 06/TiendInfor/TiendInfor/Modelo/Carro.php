<?php

declare(strict_types=1);

class Carro
{
    private $listaProductos = [];

    /**
     * Añade un producto al carrito de la compra.
     * 
     * @param Ordenador p El producto a añadir al carrito.
     * @param int cantidad La cantidad de producto a añadir.
     */
    function aniadir(Ordenador | Producto $p, int $cantidad = 1)
    {
        if (isset($this->listaProductos[$p->cod])) {
            $productoBuscado = $this->listaProductos[$p->cod];
            $productoBuscado->cantidad += $cantidad;
        } else {
            $p->cantidad = $cantidad;
            $this->listaProductos[$p->cod] = $p;
        }
    }


    /**
     * Toma un objeto de tipo `Ordenador` o `Producto` y devuelve un booleano
     * 
     * @param Ordenador p Este es el parámetro que estamos pasando a la función.
     */
    function borrar(Ordenador | Producto $p): bool
    {
        if (isset($this->listaProductos[$p->cod])) {
            unset($this->listaProductos[$p->cod]);
            return true;
        }
        return false;
    }


    /**
     * > La función `restar` toma un objeto de tipo `Ordenador` o `Producto` y un entero como parámetros y
     * devuelve un booleano
     * 
     * @param Ordenador p El producto que se va a agregar o quitar.
     * @param cantidad La cantidad del producto a añadir o restar.
     */
    function restar(Ordenador | Producto $p, $cantidad): bool
    {
        if (isset($this->listaProductos[$p->cod])) {
            $producto = $this->listaProductos[$p->cod];
            if ($cantidad >= $producto->cantidad) {
                $this->borrar($p);
            } else {
                $producto->cantidad -= $cantidad;
            }
            return true;
        }
        return false;
    }

    /**
     * Devuelve el coste total de todos los productos del carrito de la compra
     * 
     * @return float El costo total de todos los productos en el carrito.
     */
    function getCosteTotal(): float
    {
        $total = 0;
        foreach ($this->listaProductos as $cod => $producto) {
            $total += $producto->PVP * $producto->cantidad;
        }
        return $total;
    }


    /**
     * Devuelve la lista de productos.
     * 
     * @return La lista de productos.
     */
    function getListaProductos()
    {
        return $this->listaProductos;
    }

    public function __toString()
    {
        return json_encode($this->listaProductos, JSON_UNESCAPED_UNICODE);
    }
}
