<?php

declare(strict_types=1);
require_once("BasePDO.php");
require_once("Empleado.php");
require_once("Tarea.php");

class DAOTarea
{


    public static function consulta(string $sql): PDOStatement | int
    {
        return BasePDO::consulta($sql, "gestemp", "mysql", "gestemp", "gestemp2023");
    }

    public static function getTareasFromEmpleados(int $codEmpleado){
        $listaTareas = [];
        $sql = "SELECT * FROM tareas LEFT JOIN empleados_tareas ON id=id_tarea WHERE id_empleado=$codEmpleado ORDER
        BY fecha_limite";
        $resultado = self::consulta($sql);
        while (($tarea = $resultado->fetchObject()) != null) {
            $listaTareas[$tarea->id] = Tarea::getTareaFromStd($tarea);
        }
        return $listaTareas;
    }

    public static function getNombreTarea(int $idTarea)
    {
        $resultado = self::consulta("SELECT CONCAT(id,' ',descripcion) AS nombre_tarea FROM tareas WHERE id=$idTarea");
        return $resultado->fetchObject()->nombre_tarea;
    }

    public static function getPaginaTarea(int $numPag, int $tamPag = 10): array
    {
        $listaTareas = [];
        $indice = $tamPag * ($numPag - 1);
        $sql = "SELECT * FROM tareas ORDER BY fecha_limite LIMIT $indice, $tamPag";
        $resultado = self::consulta($sql);
        while (($tarea = $resultado->fetchObject()) != null) {
            $listaTareas[$tarea->id] = Tarea::getTareaFromStd($tarea);
        }
        return $listaTareas;
    }


    public static function numTareas(): int
    {
        $resultado = self::consulta("SELECT count(*) as numTareas FROM tareas");
        return intval($resultado->fetchObject()->numTareas);
    }


    public static function numPags(int $tamPag)
    {
        return ceil(self::numTareas() / $tamPag);
    }



    public static function maxNumTareas(): int
    {
        $resultado = self::consulta("SELECT max(id) as max FROM tareas");
        return intval($resultado->fetchObject()->max);
    }
}
