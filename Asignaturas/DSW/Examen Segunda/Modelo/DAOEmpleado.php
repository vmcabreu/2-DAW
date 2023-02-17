<?php

declare(strict_types=1);
require_once("BasePDO.php");
require_once("Empleado.php");
require_once("Tarea.php");

class DAOEmpleado
{
    /**
     * Ejecuta una consulta y devuelve el resultado.
     * 
     * @param string sql La consulta SQL a ejecutar.
     * 
     * @return PDOStatement | int Declaración PDOS | tú
     */
    public static function consulta(string $sql): PDOStatement | int
    {
        return BasePDO::consulta($sql, "gestemp", "mysql", "gestemp", "gestemp2023");
    }

    public static function getPaginaEmpleado(int $numPag, int $tamPag = 10): array
    {
        $listaEmpleados = [];
        $indice = $tamPag * ($numPag - 1);
        $sql = "SELECT * FROM empleados ORDER BY ap1 LIMIT $indice, $tamPag";
        $resultado = self::consulta($sql);
        while (($empleado = $resultado->fetchObject()) != null) {
            $listaEmpleados[$empleado->id] = Empleado::getEmpleadoFromStd($empleado);
        }
        return $listaEmpleados;
    }

    public static function getEmpleadosFromTarea(int $idTarea){
        $listaTareas = [];
        $sql = "SELECT * FROM empleados LEFT JOIN empleados_tareas ON id=id_empleado WHERE id_tarea=$idTarea ORDER
        BY ap1";
        $resultado = self::consulta($sql);
        while (($tarea = $resultado->fetchObject()) != null) {
            $listaTareas[$tarea->id] = Empleado::getEmpleadoFromStd($tarea);
        }
        return $listaTareas;
    }

    public static function getNombreEmpleado(int $idEmpleado)
    {
        $resultado = self::consulta("SELECT CONCAT(ap1,' ',ap2,', ',nombre) AS nombre_completo FROM empleados WHERE id=$idEmpleado");
        return $resultado->fetchObject()->nombre_completo;
    }


    public static function numEmpleados(): int
    {
        $resultado = self::consulta("SELECT count(*) as numEmpleados FROM empleados");
        return intval($resultado->fetchObject()->numEmpleados);
    }


    public static function numPags(int $tamPag)
    {
        return ceil(self::numEmpleados() / $tamPag);
    }



    public static function maxNumEmpleados(): int
    {
        $resultado = self::consulta("SELECT max(id) as max FROM empleados");
        return intval($resultado->fetchObject()->max);
    }
}
