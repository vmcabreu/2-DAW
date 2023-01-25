<?php
session_start();
require_once("../model/DAOUsuario.php");

if ($_POST) {
    DAOUsuario::loginUsuario($_POST['nombre'], $_POST['passwd']);
}
