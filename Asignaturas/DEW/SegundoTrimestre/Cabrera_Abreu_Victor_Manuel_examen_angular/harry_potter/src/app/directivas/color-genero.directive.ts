import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColorGenero]'
})
export class ColorGeneroDirective {

  @Input('genero') genero: string;
  constructor(private el: ElementRef,private renderer:Renderer2) {
  }

/**
 * La función ngOnInit() si el genero el es "male" el color de fondo cambia a lighblue
 * en caso contrario el color sería "red"
 */
  ngOnInit() {
    if (this.genero == "male") {
      this.el.nativeElement.style.background = "lightblue"
    }else{
      this.el.nativeElement.style.background = "red"
    }
  }

/* Escuchar el evento mouseenter y cuando sucede, establece el peso de la fuente en negrita */
  @HostListener('mouseenter') mouseover(){
    this.renderer.setStyle(this.el.nativeElement,'font-weight','bold')
  }

/* Escuchar el evento mouseleave y cuando sucede establece el peso de la fuente en 400 */
  @HostListener('mouseleave') mouseleave(){
    this.renderer.setStyle(this.el.nativeElement,'font-weight','400')
  }

}
