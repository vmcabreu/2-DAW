<?php
require_once("./BaseDAO.php");
require_once("./Equipo.php");
require_once("./Partido.php");

/* Es una clase que contiene los métodos que interactúan con una base de datos. */
class DAOEquipos
{

    /**
     * Lee datos de una base de datos.
     */
    public static function buscarEquipo(int $id):?Equipo
    {
        $busqueda=BaseDAO::consulta("SELECT * FROM equipos WHERE id='$id'");
        if ($busqueda->num_rows==0) {
            return null;
        }
        return Equipo::arrayEquipo($busqueda->fetch_assoc());
    }

    public static function buscarPartido(int $id):?Partido
    {
        $busqueda=BaseDAO::consulta("SELECT * FROM partidos WHERE id='$id'");
        if ($busqueda->num_rows==0) {
            return null;
        }
        return Partido::arrayPartido($busqueda->fetch_assoc());
    }




    public static function numEquipos():int {
        $resultado=BaseDAO::consulta("SELECT count(*) AS numEquipos FROM equipos");
        return intval($resultado->fetch_assoc()['numEquipos']);
    }

    public static function numPartidos():int {
        $resultado=BaseDAO::consulta("SELECT count(*) AS numPartidos FROM partidos");
        return intval($resultado->fetch_assoc()['numPartidos']);
    }
}
