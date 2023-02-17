<?php

declare(strict_types=1);

class Carro
{
    private $listaProductos = [];

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


    function borrar(Ordenador | Producto $p): bool
    {
        if (isset($this->listaProductos[$p->cod])) {
            unset($this->listaProductos[$p->cod]);
            return true;
        }
        return false;
    }


    function restar(Ordenador | Producto $p, $cantidad): bool
    {
        if (isset($this->listaProductos[$p->cod])) {
            $producto = $this->listaProductos[$p->cod];
            if ($cantidad >= $producto->cantidad) {
                $this->borrar($p);
            } else { // la cantidad es menor que la cantidad del producto
                $producto->cantidad -= $cantidad;
            }
            return true;
        }
        return false;
    }

    /**
     * Función que obtiene el coste total de la cesta
     */
    function getCosteTotal(): float
    {
        $total = 0;

        // Recorro cada producto del carro
        foreach ($this->listaProductos as $cod => $producto) {
            $total += $producto->PVP * $producto->cantidad;
        }
        return $total;
    }

    /**
     * Función que devuelve la lista de productos
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
