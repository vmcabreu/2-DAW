<?php
class Carta
{
    private $palo;
    private $numero;
    private $carta;
    private $bocabajo;


    public function __construct(string $paloCarta, int $numeroCarta,string $imgCarta, string $imgAbajo = "./imagenesBaraja/bocaabajo.png")
    {
        $this->palo = $paloCarta;
        $this->numero = $numeroCarta;
        $this->carta = $imgCarta;
        $this->bocabajo = $imgAbajo;
    }


    public function __set(string $atributo, mixed $valor)
    {
        if ($atributo=="id" && $valor<0) {
            throw new InvalidArgumentException("Error valor no válido para el id");
        }
        $this->atributos[$atributo]=$valor;
    }

    public function __get(string $atributo){
        return $this->$atributo;
    }

    public function __toString()
    {
        return json_encode($this->atributos, JSON_UNESCAPED_UNICODE);
    }
}
?>
