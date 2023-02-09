import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinopsis'
})
export class SinopsisPipe implements PipeTransform {

  transform(sinopsis: string) {
    let resumen = "";
    if (sinopsis.length > 300) {
      resumen = sinopsis.substring(0,300)+"...";
    }else{
      resumen = sinopsis;
    }
    return resumen;
  }

}
