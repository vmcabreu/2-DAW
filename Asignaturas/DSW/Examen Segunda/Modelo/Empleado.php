<?php

declare(strict_types=1);
class Empleado
{
    private $atributos = ['id' => 0, 'nombre' => '', 'ap1' => '', 'ap2' => '', 'email' => ''];

    function __construct(int $id = null, string $nombre = "", string $ap1 = "", string $ap2 = "", string $email = "")
    {
        $this->id = $id;
        $this->nombre = $nombre;
        $this->ap1 = $ap1;
        $this->ap2 = $ap2;
        $this->email = $email;
    }

    public function __set(string $atributo, string | float | null $valor)
    {
        $this->atributos[$atributo] = $valor;
    }

    public function __get(string $atributo)
    {
        return $this->atributos[$atributo];
    }

    public static function getEmpleadoFromAssoc(array $datosEmpleado): Empleado
    {
        $p = new Empleado();
        foreach ($datosEmpleado as $atributo => $valor) {
            $p->$atributo = $valor;
        }
        return $p;
    }

    public static function getEmpleadoFromStd(stdClass $p): Empleado
    {
        return new Empleado($p->id, $p->nombre, $p->ap1, $p->ap2, $p->email);
    }

    public function __toString()
    {
        return json_encode($this->atributos, JSON_UNESCAPED_UNICODE);
    }
}
