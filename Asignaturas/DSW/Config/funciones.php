<?php
function verificarUsuarioJson(string $usuariojson, string $usuario):bool
    {
        $usuariof = json_decode($usuariojson,true);
        return ($usuariof['user'] == $usuario);
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

    function modificarDatosUsuario(array $modificaciones){
        $usuario = $modificaciones[4];
        $BDatos = "/var/www/phpdata/BDusuario.txt";
        $fdbaseDatos = fopen($BDatos, "r");
        fseek($fdbaseDatos,0);
        while ($linea = fgets($fdbaseDatos)) {
            
            if (verificarUsuarioJson($linea, $usuario)) {
                $usuarioJson = json_decode($linea,true);
                unset($linea);
                $datosUsuario = [$usuarioJson['nombre'],$usuarioJson['ap1'],$usuarioJson['ap2'],$usuarioJson['user'],$usuarioJson['email']];
                return $datosUsuario;
            }
        }
        return null;
    }

?>