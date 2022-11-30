/**
Crea una clase que se llame Animal(), con las siguientes propiedades:

- nombre (string)

- tipoAnimal (string)

- raza (string)

- edad (int)

- sexo (boolean)

- altura (float)

- color (string)

- peso (float)  

Validar todos los tipos de propiedades con funciones y mostrar la clase por consola:

     - Las propiedades string (como nombre, tipoAnimal, etc.) siempre sean una cadena.

     - La edad, la altura y el peso no pueden ser negativos ni nulos.

- Si alguna de las propiedades contiene error, se mostrará un alert en el que no es válido
 */

function validarString(param){
    return (param == typeof stringValue) 
}

function validarNumber(param){
    return (param == typeof numericalValue) 
}

function validarBoolean(param){
    return (param == typeof booleanValue) 
}

class Animal {
    nombre;
    tipoAnimal;
    raza;
    edad;
    sexo;
    altura;
    color;
    peso;

    constructor(nombre, tipoAnimal, raza, edad, sexo, altura, color, peso) {
        if (validarString(nombre)) {
            this.nombre = nombre;
        }
        if (validarString(tipoAnimal)) {
            this.tipoAnimal = tipoAnimal;
        }
        if (validarString(raza)) {
            this.raza = raza;
        }
        if (validarNumber(edad)) {
            this.edad = edad;
        }
        if (validarBoolean(sexo)) {
            this.sexo = sexo;
        }
        if (validarNumber(altura)) {
            this.altura = altura;
        }
        if (validarString(color)) {
            this.color = color;
        }
        if (validarNumber(peso)) {
            this.peso = peso;
        }        
    }



}