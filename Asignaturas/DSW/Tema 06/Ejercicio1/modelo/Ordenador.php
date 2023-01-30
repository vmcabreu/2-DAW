<?php
require_once("./Producto.php");
class Ordenador extends Producto
{
    public function __construct(string $cod = "", string $nombre = "", string $nombre_corto = "", string $descripcion = "", float $pvp = 0, string $familia = "", string $procesador = "", int $RAM = 0, string $disco = "", string $grafica = "", string $unidadoptica = "", string $SO = "", string $otros = "")
    {
        if ($cod != null) {
            parent::__construct($cod, $nombre, $nombre_corto, $descripcion, $pvp, $familia);
            $this->procesador = $procesador;
            $this->RAM = $RAM;
            $this->disco = $disco;
            $this->grafica = $grafica;
            $this->unidadoptica = $unidadoptica;
            $this->SO = $SO;
            $this->otros = $otros;
        }
    }

    public static function getProductoFromAssoc(array $datosOrdenador): Ordenador
    {
        $ordenador = new Ordenador();
        foreach ($datosOrdenador as $atributo => $valor) {
            $ordenador->$atributo = $valor;
        }
        return $ordenador;
    }

    public static function getProductoFromSTD(stdClass $stdOrdenador): Ordenador
    {
        $ordenador = new Ordenador();
        foreach ($stdOrdenador as $atributo => $valor) {
            $ordenador->$atributo = $valor;
        }
        return $ordenador;
    }
}
