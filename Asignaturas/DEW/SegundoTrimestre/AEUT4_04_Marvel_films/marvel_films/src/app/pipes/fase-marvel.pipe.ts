import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'faseMarvel'
})
export class FaseMarvelPipe implements PipeTransform {

  transform(fecha: string): any {
    let anio = Number(fecha.split("/")[2]);
    if (anio > 2008 || anio < 2012) {
       return fecha+" (Fase 1)";
    }else if(anio > 2013 || anio < 2015){
      return fecha+" (Fase 2)";
    }
  }

}
