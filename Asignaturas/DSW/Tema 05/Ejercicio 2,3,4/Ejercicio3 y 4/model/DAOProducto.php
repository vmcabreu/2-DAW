<?php
require_once("BaseDAO.php");
require_once("Producto.php");

class DAOProducto
{
    /**
     * Elimina un producto de la base de datos.
     * 
     * @param int id El id del producto que se va a eliminar.
     * 
     * @return bool El retorno es un valor booleano.
     */
    public static function borrarProducto(int $id)
    {
        $sql = "DELETE FROM producto WHERE codigo = '$id'";
        return BaseDAO::modificacion($sql);
    }

    /**
     * Actualiza el producto en la base de datos.
     * 
     * @param Producto producto
     * 
     * @return bool La consulta está siendo devuelta.
     */
    public static function modificarProducto(Producto $producto)
    {
        $sql = "UPDATE producto SET descripcion = '$producto->descripcion',pcompra = '$producto->pcompra',
        pventa = $producto->pventa,stock = '$producto->stock' WHERE codigo = $producto->codigo";
        return BaseDAO::modificacion($sql);
    }

    /**
     * Esta función inserta un producto en la base de datos.
     * 
     * @param Producto producto es el nombre de la mesa
     * 
     * @return bool El resultado de la consulta.
     */
    public static function insertarProducto(Producto $producto)
    {
        if ($producto->id == 0) {
            $codigo = "null";
        } else {
            $codigo = $producto->codigo;
        }
        $sql = "INSERT INTO producto VALUES ('$codigo','$producto->descripcion','$producto->pventa',
        $producto->pcompra,$producto->stock)";
        BaseDAO::modificacion($sql);
    }

    public static function buscarProducto(int $codigo): ?Producto
    {
        $resultado = BaseDAO::consulta("SELECT * FROM producto WHERE codigo='$codigo'");
        if ($resultado->num_rows == 0) {
            return null;
        }
        return Producto::getProducto($resultado->fetch_assoc());
    }

    /**
     * Devuelve una matriz de objetos Producto, cada uno de los cuales se crea a partir de una fila en
     * la base de datos.
     * 
     * @param numPag El número de página que desea obtener.
     * @param tamPag El número de elementos por página.
     */
    public static function getPaginaProducto($numPag, $tamPag = 10): array
    {
        $listaProductos = [];
        $indice = $tamPag * ($numPag - 1);
        $sql = "SELECT * FROM producto LIMIT $indice,$tamPag";
        $resultado = BaseDAO::consulta($sql);


        while (($producto = $resultado->fetch_assoc()) != null) {
            $listaProductos[$listaProductos['id']] = Producto::getProducto($producto);
        }

        return  $listaProductos;
    }

    /**
     * Devuelve el número de productos en la base de datos.
     * 
     * @return int El número de productos en la base de datos.
     */
    public static function numProductos(): int
    {
        $resultado = BaseDAO::consulta("SELECT COUNT(*) AS numProductos FROM producto");
        return intval($resultado->fetch_assoc()['numProductos']);
    }

    public static function numPags(int $tamPag): int
    {
        return ceil(DAOProducto::numProductos() / $tamPag);
    }

    public static function imprimirProducto(Producto $producto)
    {
        echo "<tr><td>", $producto['codigo'], "</td><td>", $producto['descripcion'], "</td><td>", $producto['pcompra'], "</td><td>", $producto['pventa'], "</td><td>", $producto['stock'], "</td></tr>";
    }

    public static function generarListaProducto()
    {
        $sql = "SELECT * FROM producto";
        $conexion = BaseDAO::getConexion();
        $consulta = $conexion->prepare($sql);
        $consulta->execute();
        while (($producto = $consulta->fetch(PDO::FETCH_ASSOC)) != null) {
            self::imprimirProducto(Producto::createProducto($producto));
        }
    }
}
