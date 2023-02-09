import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'faseMarvel'
})
export class FaseMarvelPipe implements PipeTransform {

  transform(fecha: string): any {
    let anio: number = Number(fecha.split("/")[2]);
    let mes: number = Number(fecha.split("/")[1])
    let fase = "";
    if (anio >= 2008 && anio <= 2012) {
       fase = fecha+" (Fase 1)";
    }else if(anio >= 2013 && anio <= 2015){
      fase = fecha+" (Fase 2)";
    }else if(anio >= 2016 && anio <= 2019){
      fase = fecha+" (Fase 3)";
    }else if(anio >= 2021 && anio <= 2023){
      fase = fecha+" (Fase 4)";
    }else if((anio >= 2023 && mes <= 9)&& (anio <= 2024 && mes <= 5)){
      fase = fecha+" (Fase 5)";
    }else if((anio >= 2024 && mes >= 11)&& anio <= 2026){
      fase = fecha+" (Fase 6)";
    }else{
      fase = fecha+" (Fase Futura)";
    }
    return fase;
  }

}
