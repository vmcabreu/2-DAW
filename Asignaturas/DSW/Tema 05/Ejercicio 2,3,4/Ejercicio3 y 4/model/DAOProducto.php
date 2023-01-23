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
    public static function borrarProducto(string $id)
    {
        $sql = "DELETE FROM producto WHERE codigo = '$id'";
        BaseDAO::modificacion($sql);
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
        return BaseDAO::modificacion($sql,false);
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
        $sql = "INSERT INTO producto VALUES ('$producto->codigo','$producto->descripcion','$producto->pventa',
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


    public static function generarListaProducto()
    {
        $sql = "SELECT * FROM producto";
        $conexion = BaseDAO::getConexion();
        $consulta = $conexion->prepare($sql);
        $consulta->execute();
        while (($producto = $consulta->fetch(PDO::FETCH_ASSOC)) != null) {
            self::imprimirLista(Producto::createProducto($producto));
        }
    }

    public static function imprimirLista(Producto $producto)
    {
        echo "<tr id='producto_$producto->codigo'>
            <td><input type='text' value='$producto->codigo' maxlength='6' size='6' readonly='readonly'/></td>
            <td><input type='text' value='$producto->descripcion' maxlength='512' size='50' readonly='readonly'/></td>
            <td><input type='number' value='$producto->pcompra' maxlength='40' size='30' readonly='readonly'/></td>
            <td><input type='number' value='$producto->pventa' maxlength='11' size='10' readonly='readonly'/></td>
            <td><input type='number' value='$producto->stock' maxlength='40' size='20' readonly='readonly'/></td>
            <td><button onclick='eliminarProducto(\"$producto->codigo\")'>Eliminar</button></td>
            <td><button onclick='modificarGuardarProducto(\"$producto->codigo\")'>Modificar</button></td>
        </tr>";
    }
}
