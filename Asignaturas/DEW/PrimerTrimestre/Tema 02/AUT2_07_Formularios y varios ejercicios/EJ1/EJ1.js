/**
 1.Recorrer arrays:

Tenemos dos listas de asistentes a dos cursos: html y css. 

Queremos obtener una lista de los asistentes a ambos cursos.
Por ejemplo:
 html = ["Kevin", "Pablo", "Viti", "Tomás"]
 css = ["Pablo", "Guillermo", "Viti"] 

El resultado debería ser: ['Pablo', 'Viti'].
 */

let html = ["Kevin", "Pablo", "Viti", "Tomás"];
let css = ["Pablo", "Guillermo", "Viti"];
let repeticiones = [];

for (let i = 0; i < html.length; i++) {
    for (let j = 0; j < css.length; j++) {
        if (html[i]==css[j]) {
            repeticiones.push(css[j]);
        }
    }
}

alert ("El resultado debería ser: "+repeticiones);