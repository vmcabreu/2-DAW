<?php
class Partido
{
    private $atributos = ['id' => 0, 'local' => 0, 'visitante' => 0, 'resultado' => ""];

    /**
     * La función __construct() es un método mágico que se llama cuando se instancia un objeto
     * 
     * @param int id La identificación del producto.
     * @param string nombre El nombre del producto.
     * @param string descripcion La descripción del producto.
     * @param float precio El precio del producto.
     * @param string imagen La imagen del producto.
     */
    public function __construct(int $id, int $local, int $visitante, string $resultado)
    {
        $this->id = $id;
        $this->local = $local;
        $this->visitante = $visitante;
        $this->resultado = $resultado;
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

    static function arrayPartido(Array $partido){
        $id = intval($partido['id']);
        $local=intval($partido['local']);
        $visitante=intval($partido['visitante']);
        $resultado=$partido['resultado'];
        return new Partido($id,$local,$visitante,$resultado);
    }

    public function __toString()
    {
        return json_encode($this->atributos, JSON_UNESCAPED_UNICODE);
    }
}
?>
