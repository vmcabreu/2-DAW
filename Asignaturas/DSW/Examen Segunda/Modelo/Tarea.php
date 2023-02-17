<?php
declare(strict_types=1);
    class Tarea{
        private $atributos = ['id'=>0,'descripcion'=>'','fecha_limite'=>'','completada'=>0];

        function __construct(int $id = null,string $descripcion = "",string $fecha_limite = "",int $completada = 0)
        {
            $this->id = $id;
            $this->descripcion = $descripcion;
            $this->fecha_limite =$fecha_limite;
            $this->completada = $completada;
        }

        public function __set(string $atributo, string | float | null $valor)  {
            $this->atributos[$atributo] = $valor;
        }
    
        public function __get(string $atributo) {
            return $this->atributos[$atributo];
        }

        public static function getTareaFromAssoc(array $datosTarea) : Tarea {
            $p = new Tarea();
            foreach ($datosTarea as $atributo => $valor) {
                $p->$atributo = $valor;
            }
            return $p;
        }

        public static function getTareaFromStd(stdClass $p) : Tarea {
            return new Tarea($p->id, $p->descripcion, $p->fecha_limite, $p->completada);
        }

        public function __toString()
        {
            return json_encode($this->atributos, JSON_UNESCAPED_UNICODE);
        }
    }
