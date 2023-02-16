import { Component, OnInit } from '@angular/core';
import { Mago } from 'src/app/modelos/mago.model';
import { GetMagosService } from 'src/app/servicios/get-magos.service';
import { Mock } from 'src/app/mock/mock.mock';


@Component({
  selector: 'app-lista-magos',
  templateUrl: './lista-magos.component.html',
  styleUrls: ['./lista-magos.component.css']
})
export class ListaMagosComponent implements OnInit {
  public listaMagos: Mago[];


  constructor(private magosService: GetMagosService) {
  }
  //Mock
  /**
   * La función se llama cuando el componente se inicializa y añade el
   * Mock a listaMagos
   */
  /**
  ngOnInit(): void {
    this.listaMagos = Mock;
  }
  */
  //


  //API

/**
 * Estamos comprobando si hay datos en localStorage, si no los hay, estamos llamando a la API y
 * guardando los datos en localStorage
 */
  ngOnInit(): void {
    let datosMagos = localStorage.getItem('magos');
    if (datosMagos == null) {
      this.magosService.getMagos().subscribe((magosAPI: Mago[]) => this.addMagos(magosAPI))
    }else{
      this.listaMagos = JSON.parse(datosMagos);
    }

  }

/**
 * Toma una matriz de objetos Mago, la asigna a la propiedad listaMagos y luego la guarda en
 * localStorage
 * @param {Mago[]} magos - Mango[]
 */
  addMagos(magos: Mago[]){
    this.listaMagos = magos;
    localStorage.setItem("magos",JSON.stringify(magos))
  }

  //

}
