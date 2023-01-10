<?php
require_once("Carta.php");

class Baraja
{
    private $palos =  ["bastos", "copas", "espadas", "oros"];
    private $numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    private $baraja = [];

    public function __construct(array $baraja = [])
    {
        $this->baraja = $baraja;
    }

    public function crearBaraja(int $numParejas)
    {
        if ($numParejas <= 48) {
            for ($i = 0; $i < $numParejas; $i++) {
                $paloCarta = $this->palos[random_int(0, 3)];
                $numCarta = $this->numeros[random_int(0, 11)];
                $imgCarta = "$paloCarta$numCarta.png";
                $carta = new Carta($paloCarta, $numCarta, $imgCarta);
                if (!in_array($carta, $this->baraja)) {
                    array_push($this->baraja, $carta, $carta);
                } else {
                    $i--;
                }
            }
            shuffle($this->baraja);
        } else {
            echo "El número de parejas debe ser menor a 48";
        }
    }

    public function crearMesa()
    {
        $mesa = [];
        if (count($this->baraja) > 0) {
            foreach ($this->baraja as $carta) {
                $name = $carta->palo . $carta->numero;
                array_push($mesa, "<div><img src='$carta->bocabajo' name='$name'>/div>");
                echo "<div><img src='$carta->bocabajo' name='$name'></div>";
            }
        }
        return $mesa;
    }
}