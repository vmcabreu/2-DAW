import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mock } from 'src/app/mock/mock.mock';
import { Mago } from 'src/app/modelos/mago.model';

@Component({
  selector: 'app-detalles-magos',
  templateUrl: './detalles-magos.component.html',
  styleUrls: ['./detalles-magos.component.css']
})
export class DetallesMagosComponent implements OnInit{
  public id: string = this.router.url.split("/")[2]
  public mago: Mago;
  constructor(private router: Router) {

  }
  //MOCK
/**
 * Un enlace de ciclo de vida que se llama después de inicializar las propiedades enlazadas a datos de
 * una directiva.
 */
/*
  ngOnInit(): void {
    this.mago = this.buscarMagoMock(this.id)
  }

/**
 * Busca un Mago en la matriz simulada y lo devuelve.
 * @param {string} id - cadena
 * @returns el objeto del tipo Mago.
 */
/*
  buscarMagoMock(id: string): Mago{
    let mago: Mago;
    Mock.forEach(element => {
      if(element.id == id){
        mago = element;
      }
    });
    return mago;
  }

*/
  //MOCK END


  //API

/**
 * Estamos comprobando si hay datos en localStorage, si los hay, a la variable this.mago
 * se le pasa el método buscarMagoAPI() el cual busca el mago mediante id y lo retorna
 */
  ngOnInit(): void {
    let datosMagos = localStorage.getItem('magos');
    if (datosMagos != null) {
      let listaMagos: Mago[] = JSON.parse(datosMagos);
      this.mago = this.buscarMagoAPI(this.id,listaMagos);
    }
  }
/**
 * Toma una identificación y una lista de objetos Mago, y devuelve el objeto Mago con la identificación
 * dada
 * @param {string} id - la identificación del asistente que desea encontrar
 * @param {Mago[]} listaMagos - Mago[] es la lista de asistentes que tenemos en nuestra base de datos.
 * @returns el objeto del tipo Mago que tiene el id que se está pasando como parámetro.
 */

  buscarMagoAPI(id: string,listaMagos: Mago[]): Mago{
    let mago: Mago;
    listaMagos.forEach(element => {
      if(element.id == id){
        mago = element;
      }
    });
    return mago;
  }
  //
}
