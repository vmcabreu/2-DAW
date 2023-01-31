import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'coreccionTitulo'
})
export class CoreccionTituloPipe implements PipeTransform {
  
  transform(nombre: string): unknown {
    return null;
  }

}
