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
        function agregar(Producto $p,int $cantidad=1){
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

        function getListaProductos(){
            return $this->listaProductos;
        }

        function mostrarCarrito(){
            foreach ($this->listaProductos as $producto) {
               echo "<div>
               <p>",$producto->nombre,"</p>
               <img src=",$producto->img,"/>
               <p>",$producto->precio,"</p>
               <form action='' method='post' enctype='multipart/form-data'>
               <button type='submit' name='eliminar'>Eliminar</button>
               </form>
               </div>";
            }
        }
    }
?>