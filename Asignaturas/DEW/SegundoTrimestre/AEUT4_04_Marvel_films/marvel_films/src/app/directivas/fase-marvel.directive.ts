import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFaseMarvel]'
})
export class FaseMarvelDirective {

  constructor(private fecha: ElementRef) {
    let anio = Number(fecha.nativeElement.value.split("/")[2]);
    console.log(anio);
    //this.fecha.nativeElement.innerText
   }

}
