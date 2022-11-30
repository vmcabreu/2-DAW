<?php
    require_once("./Producto.php");
    class Carrito{
        private $listaProductos=[];

        /**
         * Si el producto ya está en la lista, aumente la cantidad, de lo contrario, agréguelo a la
         * lista
         * 
         * @param Producto prod El producto a añadir al carrito.
         * @param int cantidad La cantidad de producto a agregar.
         */
        function aniadirProducto(Producto $prod, int $cantidad=1){
            if(isset($this->listaProductos[$prod->id])){
                // Incrementar la cantidad del que teníamos guardado en la lista.
                $productoBuscado=$this->listaProductos[$prod->id];
                $productoBuscado->cantidad+=$cantidad;
            } else{
                $prod->cantidad=$cantidad;
                $this->listaProductos[$prod->id]=$prod;
            }
        }

        /**
         * Esta función elimina un producto de la lista de productos
         * 
         * @param Producto prod
         */
        function borrarProducto(Producto $prod):bool{
            if(isset($this->listaProductos[$prod->id])){
                unset($this->listaProductos[$prod->id]);
                return true;
            }
            return false;
        }
        
        /**
         * Decrementa la cantidad de un producto en el carrito.
         * 
         * @param Producto prod Objeto del producto
         * @param int cantidad La cantidad de producto a agregar o quitar.
         */
        function decrementarProducto(Producto $prod, int $cantidad):bool{
            if(isset($this->listaProductos[$prod->id])){
                $producto=$this->listaProductos[$prod->id];
                if($cantidad >= $producto->cantidad){
                    $this->borrarProducto($prod);
                } else{
                    $producto->cantidad-=$cantidad;
                }
                return true;
            }
            return false;
        }

        
        /**
         * Calcula el precio total de los productos en el carrito de compras.
         * 
         * @return float El total de los productos en el carrito.
         */
        function totalCarro():float{
            $total=0;
            foreach($this->listaProductos as $id=>$producto){
                $total += $producto->precio * $producto->cantidad;
            }
            return $total;
        }

        function getListaProductos(){
            return $this->listaProductos;
        }

        function _toString(){
            return "Carro: ".json_encode();
            /*ob_start();
            print_r($this->listaProductos);
            $content=ob_get_contents();
            ob_end_clean();
            return $content;*/
        }
    }
?>