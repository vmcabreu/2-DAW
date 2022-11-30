/**
Crea una clase Usuario cuyas propiedades sean el nombre de usuario y la contraseña. 
La propiedad contraseña debe ser privada y debe tener los métodos get y set para poder acceder a ella. Una vez hecho esto muestra los datos por consola.
 */

class Usuario{
    usuario = "User";
    #password = 123456;

    get password(){
        return this.#password;
    }

    set password(password){
        this.#password = password
    }
}

let user=new Usuario();


console.log(user.password);
console.log(user.password = 258);

