<?php
require_once("./BaseDAO.php");
require_once("./Producto.php");
class DAOProducto{

/**
 * > Esta función lee los datos de la base de datos
 */
    function leerDatos(){
        $sql="SELECT * FROM producto";
        $conexion=BaseDAO::getConexion();
        $resultado=$conexion->query($sql);
    }

/**
 * Agrega un producto a la base de datos.
 * 
 * @param Producto producto es el nombre de la mesa
 */
    public static function agregarProducto(Producto $producto):bool{
        if ($producto->id==0) {
           $id="null";
        }else{
            $id=$producto->id;
        }
        $sql="INSERT INTO producto VALUES($id,$producto->descripcion,$producto->nombre,$producto->precio,$producto->imagen)";
        return BaseDAO::consulta($sql);

    }

/**
 * Elimina un producto de la base de datos.
 * 
 * @param int id El id del producto que se va a eliminar.
 * 
 * @return bool un valor booleano.
 */

    public static function borrarProducto(int $id):bool{
        $sql="DELETE FROM producto WHERE id='$id'";
        return BaseDAO::consulta($sql);
    }

/**
 * Actualiza la tabla de productos con los valores del objeto Producto pasados como parámetro
 * 
 * @param Producto producto es el objeto que contiene los datos a actualizar.
 * 
 * @return bool El resultado de la consulta.
 */
    public static function editarProducto(Producto $producto):bool{
        $sql="UPDATE producto SET descripcion='$producto->descripcion',nombre='$producto->nombre',precio='$producto->precio',imagen='$producto->imagen' WHERE id=$producto->id";
        return BaseDAO::consulta($sql);
    }

    public static function getPaginaProducto($numPag,$tamPag=10){
        $sql="SELECT * FROM producto LIMIT $numPag*10,$tamPag";
    }

}



