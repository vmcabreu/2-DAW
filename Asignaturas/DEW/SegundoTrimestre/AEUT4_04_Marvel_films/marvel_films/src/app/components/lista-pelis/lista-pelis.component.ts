import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Pelicula } from 'src/app/modelo/pelicula.model';
import { ApipeliculaService } from 'src/app/services/apipelicula.service';
import { DetallesPeliService } from 'src/app/services/detalles-peli.service';
import { CoreccionTituloPipe } from 'src/app/pipes/coreccion-titulo.pipe';
import { Mock } from 'src/app/mock/mock.mock';
@Component({
  selector: 'app-lista-pelis',
  templateUrl: './lista-pelis.component.html',
  styleUrls: ['./lista-pelis.component.css']
})

export class ListaPelisComponent implements OnInit {
  peliculas: Pelicula[] = [];
  aux: Pelicula[] = this.peliculas;
  private detalleService: DetallesPeliService;
  private peliculaService: ApipeliculaService;
  constructor(private peliculasService: ApipeliculaService, private detallesService: DetallesPeliService) {
    this.peliculaService = peliculasService;
    this.detalleService = detallesService;
  }
  /** MOCK */
  ngOnInit() {
    this.peliculas = Mock;
    console.log(this.peliculas);
  }

  eliminarPelicula(pelicula: Pelicula) {
    if (this.peliculas.length != 0) {
      let peliculasNew: Pelicula[] = [];
      this.peliculas.forEach(element => {
        if (element.id != pelicula.id) {
          peliculasNew.push(element)
        }
      });
      this.peliculas = peliculasNew;
      this.reescribirMock(peliculasNew)
      }
  }

  reescribirMock(peliculas: Pelicula[]){
    Mock.splice(0,Mock.length);
    for (let i = 0; i < peliculas.length; i++) {
      Mock.push(peliculas[i])
    }
  }

  /** API */

  /**
   * Verificamos si hay datos en localStorage, si no los hay, obtenemos los datos de la API y los
   * almacenamos en localStorage, luego recargamos la página

  ngOnInit() {
    let data = localStorage.getItem('peliculas')
    if (data == null || data == "null") {
      this.peliculasService.getPeliculas().subscribe((peliculasAPI: Pelicula[]) => this.inicializarPelis(peliculasAPI));
      //window.location.reload()
    } else {
      this.peliculas = JSON.parse(data);
    }
  }


   * Toma una matriz de objetos de Pelicula, la convierte en una cadena JSON y la almacena en
   * localStorage
   * @param {Pelicula[]} peliculas - Película[]

  inicializarPelis(peliculas: Pelicula[]) {
    localStorage.setItem('peliculas', JSON.stringify(peliculas))
    this.peliculas = peliculas
  }


   * Creamos una nueva matriz, iteramos a través de la matriz anterior, y si la identificación del
   * elemento no es igual a la identificación del elemento que queremos eliminar, lo insertamos en la
   * nueva matriz
   * @param {Pelicula} pelicula - Película

  eliminarPelicula(pelicula: Pelicula) {
    if (this.peliculas.length != 0) {
      let peliculasNew: Pelicula[] = [];
      this.peliculas.forEach(element => {
        if (element.id != pelicula.id) {
          peliculasNew.push(element)
        }
      });
      localStorage.setItem('peliculas', JSON.stringify(peliculasNew))
      this.peliculas = peliculasNew;
    } else {
      alert("Se ha borrado todas las peliculas, se reiniciará la lista a su estado inicial")
      localStorage.clear();
    }
  }
*/


}


