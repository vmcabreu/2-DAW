import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'faseMarvel'
})
export class FaseMarvelPipe implements PipeTransform {

  transform(nombre: string): unknown {
    return null;
  }

}
