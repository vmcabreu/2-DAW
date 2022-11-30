/**
Crear un objeto persona con varios tipos de datos y recorrerlo con los diferentes métodos explicados con anterioridad:
 */
let persona={
    nombre: 'María',
    apellido: 'Perez',
    dni: '12345678Z',
    edad: 17,
    mayorDeEdad: null,
    contacto: [659483268, 'mariaperez@correo.es']
}

function esMayor(edad){
    return edad>18;
}

persona.mayorDeEdad=esMayor(persona.edad);

let clave = Object.keys(persona);
for (let i = 0; i<clave.length;i++) {
    console.log(persona[clave[i]]);

}