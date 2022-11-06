<?php 
    require_once("Producto.php");
    class Carrito{
        private $listaProductos=[];

/**
 * > Añade un producto al carrito
 * 
 * @param Producto p
 * @param int cantidad La cantidad del producto.
 */
        function aniadir(Producto $p,int $cantidad=1){
            if (isset($this->listaProductos[$p->id])) {
                $producto = $this->listaProductos[$p->id];
                $producto->cantidad+=$cantidad;
            }else{
                $p->cantidad=$cantidad;
                array_push($this->listaProductos[$p->id],$p);
            }
        }

/**
 * > La función `delete` toma un objeto `Product` como parámetro y lo elimina de la matriz
 * `listProducts`
 * 
 * @param Producto p El objeto Producto que se eliminará.
 */
        function borrar(Producto $p){
            if (isset($this->listaProductos[$p->id])) {
                unset($this->listaProductos[$p->id]);
                return true;
            }
            return false;
        }
            

/**
 * Decrementa la cantidad de un producto en el carrito
 * 
 * @param Producto p
 * @param int cantidad La cantidad de producto a agregar.
 */
        function decrementarProducto(Producto $p,int $cantidad=1){
            if (isset($this->listaProductos[$p->id])) {
                $producto = $this->listaProductos[$p->id];
                if ($cantidad<0) {
                    $this->borrar($producto);
                }else{
                    $producto->cantidad-=$cantidad;
                }
                return true;
            }
            return false;
        }


/**
 * Devuelve el coste total de todos los productos del carrito de la compra
 * 
 * @return Int costo total de todos los productos en el carrito.
 */
        function getCosteTotal() {
            $total = 0;
            foreach ($this->listaProductos as $producto) {
                $total+=$producto->precio*$producto->cantidad;
            }
            return $total;
        }


        function __toString(){
            $resultado="";
            foreach($this->listaProductos as $producto){
                $resultado =  "<img src='$producto->img'/><p>$producto->nombre</p><p>Precio: $producto->precio € </p><p>Unidades: $producto->cantidad</p><button id=aniadir name=aniadir value=$producto->id>Añadir</button><button id=quitar name=quitar value=$producto->id>Quitar</button>";
            }
            return $resultado;
        }
    }
?>