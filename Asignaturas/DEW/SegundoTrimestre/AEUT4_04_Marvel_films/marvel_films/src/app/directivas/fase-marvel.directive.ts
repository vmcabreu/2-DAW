import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appFaseMarvel]'
})
export class FaseMarvelDirective {
  @Input('fecha') fecha: string;
  constructor(private el: ElementRef) {
  }
  /**
   * La función toma la fecha del componente y la divide en una matriz de cadenas, luego toma el año y el
   * mes de la matriz y los asigna a las variables, luego compara el año y el mes con los años y meses de
   * las fases y asigna la fase a una variable, luego asigna la fase al texto interno del elemento
   */
  ngOnInit() {
    let anio: number = Number(this.fecha.split("/")[2]);
    let mes: number = Number(this.fecha.split("/")[1]);
    let fase = "";
    if (anio >= 2008 && anio <= 2012) {
      fase = this.fecha + " (Fase 1)";
    } else if (anio >= 2013 && anio <= 2015) {
      fase = this.fecha + " (Fase 2)";
    } else if (anio >= 2016 && anio <= 2019) {
      fase = this.fecha + " (Fase 3)";
    } else if (anio >= 2021 && anio <= 2023) {
      fase = this.fecha + " (Fase 4)";
    } else if ((anio >= 2023 && mes <= 9) && (anio <= 2024 && mes <= 5)) {
      fase = this.fecha + " (Fase 5)";
    } else if ((anio >= 2024 && mes >= 11) && anio <= 2026) {
      fase = this.fecha + " (Fase 6)";
    } else {
      fase = this.fecha + " (Fase Futura)";
    }
    this.el.nativeElement.innerText = "Fecha de estreno: "+fase;
  }

}
