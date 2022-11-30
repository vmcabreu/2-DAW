<?php
class Equipo
{
    private $atributos = ['id' => 0, 'nombre' => "", 'puntos' => 0];

    /**
     * La función __construct() es un método mágico que se llama cuando se instancia un objeto
     * 
     * @param int id La identificación del producto.
     * @param string nombre El nombre del producto.
     * @param string descripcion La descripción del producto.
     * @param float precio El precio del producto.
     * @param string imagen La imagen del producto.
     */
    public function __construct(int $id, string $nombre, int $puntos)
    {
        $this->id = $id;
        $this->nombre = $nombre;
        $this->puntos = $puntos;
    }

    /**
     * La función __set() es un método mágico que se llama cuando intenta establecer un valor para una
     * propiedad que no existe
     * 
     * @param string atributo El nombre del atributo que desea establecer.
     * @param mixed valor El valor para establecer el atributo.
     */
    public function __set(string $atributo, mixed $valor)
    {
        if ($atributo=="id" && $valor<0) {
            throw new InvalidArgumentException("Error valor no válido para el id");
        }
        $this->atributos[$atributo]=$valor;
    }

    /**
     * Devuelve el valor del atributo.
     * 
     * @param string atributo El nombre del atributo que desea obtener.
     * 
     * @return mixed El valor del atributo.
     */
    public function __get(string $atributo){
        return $this->atributos[$atributo];
    }

    static function arrayEquipo(Array $equipo){
        $id = intval($equipo['id']);
        $nombre=$equipo['nombre'];
        return new Equipo($id,$nombre,0);
    }

    public function __toString()
    {
        return json_encode($this->atributos, JSON_UNESCAPED_UNICODE);
    }
}
?>
