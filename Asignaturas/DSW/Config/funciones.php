<?php
function verificarUsuarioJson(string $usuariojson, string $usuario):bool
    {
        $usuariof = json_decode($usuariojson,true);
        return ($usuariof['user'] == $usuario);
    }

    function verificarUsuario(string $usuario):bool{
        $BDUsuario = buscarDatosUsuarioEnBD($usuario);
        return ($usuario == $BDUsuario['user']);
    }

    function buscarDatosUsuarioEnBD(string $usuario)
    {
        $BDatos = "/var/www/phpdata/BDusuario.txt";
        $fdbaseDatos = fopen($BDatos, "r");
        fseek($fdbaseDatos,0);
        while ($linea = fgets($fdbaseDatos)) {
            if (verificarUsuarioJson($linea, $usuario)) {
                $usuarioJson = json_decode($linea,true);
                $datosUsuario = [$usuarioJson['nombre'],$usuarioJson['ap1'],$usuarioJson['ap2'],$usuarioJson['user'],$usuarioJson['email']];
                return $datosUsuario;
            }
        }
        return null;
    }

   //Ejercicio 4-5
   function recorrerProductos(){
    require_once("../Tema 04/Ejercicios/Ejercicio4-5/Producto.php");
    $BDatos = "/var/www/phpdata/BDproducto.txt";
    $fdbaseDatos = fopen($BDatos, "r");
    $productos=[];
    fseek($fdbaseDatos,0);
    while ($linea = fgets($fdbaseDatos)) {
        $producto= json_decode($linea,true);
        $p=new Producto($producto['id'],$producto['nombre'],$producto['precio'],$producto['img'],$producto['detalles']);
        array_push($productos,$p);
    }
    return $productos;
    }

    
?>