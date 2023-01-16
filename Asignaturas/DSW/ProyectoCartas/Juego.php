<?php
require_once("Carta.php");

class Juego
{
    private static $palos =  ["bastos", "copas", "espadas", "oros"];
    private static $numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    private static $baraja;
    private static $mesaBarajada;
    private static $carta1;
    private static $carta2;

    public function __construct(array $baraja = [])
    {
        $this->baraja = $baraja;
    }

    public static function crearBaraja(int $numParejas)
    {
        $nuevaBaraja = [];
        if ($numParejas <= 48) {
            for ($i = 0; $i < $numParejas; $i++) {
                $paloCarta = self::$palos[random_int(0, 3)];
                $numCarta = self::$numeros[random_int(0, 11)];
                $imgCarta = "$paloCarta$numCarta.png";
                $carta = new Carta($paloCarta, $numCarta, $imgCarta);
                if (!in_array($carta, $nuevaBaraja)) {
                    array_push($nuevaBaraja, $carta, $carta);
                } else {
                    $i--;
                }
            }
            shuffle($nuevaBaraja);
            self::$baraja = $nuevaBaraja;
            $_SESSION['baraja'] = $nuevaBaraja;
        } else {
            echo "El número de parejas debe ser menor a 48";
        }
    }

    public static function crearMesa()
    {
        $mesa = [];
        $index = 0;

        if (count(self::$baraja) > 0) {
            
            foreach (self::$baraja as $carta) {
                $name = $carta->palo . $carta->numero;
                array_push($mesa, "<div class='col-1'><a href='cartasave.php?name=$name&id=pos$index'><img src='$carta->bocabajo' id=carta$index></a></div>");
                echo "<div class='col-1'><a href='cartasave.php?name=$name&id=pos$index'><img src='$carta->bocabajo' id=carta$index></a></div>";
                $index++;
            }
        }
        $_SESSION['mesa'] = $mesa;
        self::$mesaBarajada = $mesa;
    }


}
