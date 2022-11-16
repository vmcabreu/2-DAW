<?php
require_once("./BaseDAO.php");
require_once("./Producto.php");

/* Es una clase que contiene los métodos que interactúan con una base de datos. */
class DAOProducto
{

    /**
     * Lee datos de una base de datos.
     */
    public static function buscarProducto(int $id):?Producto
    {
        $busqueda=BaseDAO::consulta("SELECT * FROM producto WHERE id='$id'");
        if ($busqueda->num_rows==0) {
            return null;
        }
        return Producto::arrayProducto($busqueda->fetch_assoc());
    }

    /**
     * Agrega un producto a la base de datos.
     * 
     * @param Producto producto es el nombre de la mesa
     */
    public static function agregarProducto(Producto $producto): bool
    {
        if ($producto->id == 0) {
            $id = "null";
        } else {
            $id = $producto->id;
        }
        $sql = "INSERT INTO producto VALUES($id,$producto->descripcion,$producto->nombre,$producto->precio,$producto->imagen)";
        return BaseDAO::consulta($sql);
    }

    /**
     * Elimina un producto de la base de datos.
     * 
     * @param int id El id del producto que se va a eliminar.
     * 
     * @return bool un valor booleano.
     */

    public static function borrarProducto(int $id): bool
    {
        $sql = "DELETE FROM producto WHERE id='$id'";
        return BaseDAO::consulta($sql);
    }

    /**
     * Actualiza la tabla de productos con los valores del objeto Producto pasados como parámetro
     * 
     * @param Producto producto es el objeto que contiene los datos a actualizar.
     * 
     * @return bool El resultado de la consulta.
     */
    public static function editarProducto(Producto $producto): bool
    {
        $sql = "UPDATE producto SET descripcion='$producto->descripcion',nombre='$producto->nombre',precio='$producto->precio',imagen='$producto->imagen' WHERE id=$producto->id";
        return BaseDAO::consulta($sql);
    }


    
    /**
     * Devuelve una matriz de objetos Producto, cada uno de los cuales se crea a partir de una fila en
     * la base de datos.
     * 
     * @param numPag El número de página que desea obtener.
     * @param tamPag El número de elementos por página.
     * 
     * @return array La gama de productos.
     */
    public static function getPaginaProducto($numPag, $tamPag = 10):array
    {
        $lista = [];
        $indice = $tamPag * ($numPag - 1);
        $sql = "SELECT * FROM producto LIMIT $indice,$tamPag";
        $resultado = BaseDAO::consulta($sql);
        while (($producto = $resultado->fetch_assoc()) != null) {
            $lista[$producto['id']] = Producto::arrayProducto($producto);
        }
        return $lista;
    }

    /**
     * Devuelve el número de productos en la base de datos.
     * 
     * @return int El número de productos en la base de datos.
     */
    public static function numProductos():int {
        $resultado=BaseDAO::consulta("SELECT count(*) AS numProds FROM producto");
        return intval($resultado->fetch_assoc()['numProds']);
    }

    public static function numPaginas(int $tamPag):int{
        return ceil(DAOProducto::numProductos()/$tamPag);
    }
}
