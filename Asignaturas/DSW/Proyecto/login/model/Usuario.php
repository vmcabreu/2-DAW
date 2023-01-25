<?php

/* Es una clase que representa a un usuario. */
class Usuario
{
    private $atributos = ['id' => null, 'usuario' => "", 'passwd' => "", 'email' => ""];

    /**
     * Esta función es un constructor de la clase Usuario. Toma cuatro parámetros, un número entero, dos
     * cadenas y un correo electrónico. Luego establece las variables de clase a los parámetros.
     * @param {int} id - La identificación del usuario.
     * @param {string} usuario - El nombre de usuario del usuario.
     * @param {string} passwd - La contraseña del usuario.
     * @param {string} email - La dirección de correo electrónico del usuario.
     */
    public function __construct(int $id, string $usuario, string $passwd, string $email)
    {
        $this->id = $id;
        $this->usuario = $usuario;
        $this->passwd = $passwd;
        $this->email = $email;
    }


    /**
     * Toma dos argumentos, una cadena y un valor mixto, y establece el valor del atributo con el nombre
     * dado al valor dado
     * @param {string} atributo - El nombre del atributo que desea establecer.
     * @param {mixed} valor - El valor para establecer el atributo.
     */
    public function __set(string $atributo, mixed $valor)
    {
        if ($atributo == "id" && $valor < 0) {
            throw new InvalidArgumentException("Error valor no válido para el id");
        }
        $this->atributos[$atributo] = $valor;
    }


    /**
     * Devuelve el valor del atributo que se pasa como parámetro
     * @param {string} atributo - El nombre del atributo que desea obtener.
     * @returns El valor del atributo.
     */
    public function __get(string $atributo)
    {
        return $this->atributos[$atributo];
    }

    /**
     * Toma una matriz de datos y devuelve un nuevo objeto Usuario.
     * @param {array} datosProducto - una matriz con las siguientes claves:
     * @returns Una nueva instancia de la clase Usuario.
     */

    public static function crearUsuario(array $datosProducto): Usuario
    {
        $id = intval($datosProducto['id']);
        $usuario = $datosProducto['usuario'];
        $passwd = $datosProducto['passwd'];
        $email = $datosProducto['email'];
        return new Usuario($id, $usuario, $passwd, $email);
    }

    /**
     * Devuelve una representación JSON de los atributos del objeto.
     * @returns La representación JSON del objeto.
     */
    public function __toString()
    {
        return json_encode($this->atributos, JSON_UNESCAPED_UNICODE);
    }
}
