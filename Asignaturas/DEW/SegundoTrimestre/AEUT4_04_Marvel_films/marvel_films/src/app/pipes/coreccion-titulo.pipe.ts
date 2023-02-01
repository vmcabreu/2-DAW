import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'coreccionTitulo'
})
/* Toma una cadena, verifica si contiene dos puntos y, si los contiene, divide la cadena en dos partes
y devuelve la primera parte, seguida de la segunda parte entre paréntesis. */
export class CoreccionTituloPipe implements PipeTransform {

  transform(nombre: string): unknown {
    let nombreMod: string = nombre;
    if (nombreMod.includes(":")) {
      let nombreSplit: string[] = nombreMod.split(":");
      nombre = nombreSplit[0]+" ("+nombreSplit[1]+")";
    }
    return nombre;
  }

}
