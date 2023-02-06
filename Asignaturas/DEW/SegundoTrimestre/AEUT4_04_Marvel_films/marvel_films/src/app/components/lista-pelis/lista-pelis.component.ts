import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Pelicula } from 'src/app/modelo/pelicula.model';
import { ApipeliculaService } from 'src/app/services/apipelicula.service';
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

  private peliculaService: ApipeliculaService;
  constructor(private peliculasService: ApipeliculaService) {
    this.peliculaService = peliculasService;
  }


/**
 * Verificamos si hay datos en localStorage, si no los hay, obtenemos los datos de la API y los
 * almacenamos en localStorage, luego recargamos la página
 */
  ngOnInit() {
    let data = localStorage.getItem('peliculas')
    if (data == null) {
      this.peliculasService.getPeliculas().subscribe((peliculasAPI: Pelicula[]) => localStorage.setItem('peliculas', JSON.stringify(peliculasAPI)));
      window.location.reload()
    }else{
      this.peliculas = JSON.parse(data);
    }

  }

/**
 * Creamos una nueva matriz, iteramos a través de la matriz anterior, y si la identificación del
 * elemento no es igual a la identificación del elemento que queremos eliminar, lo insertamos en la
 * nueva matriz
 * @param {Pelicula} pelicula - Película
 */
  eliminarPelicula(pelicula: Pelicula) {
    let peliculasNew: Pelicula[] = [];
    this.peliculas.forEach(element => {
      if (element.id != pelicula.id) {
        peliculasNew.push(element)
      }
    });
    localStorage.setItem('peliculas', JSON.stringify(peliculasNew))
    this.peliculas = peliculasNew;
  }

}
