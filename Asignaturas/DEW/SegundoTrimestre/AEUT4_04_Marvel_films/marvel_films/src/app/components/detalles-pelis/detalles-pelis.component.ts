import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/modelo/pelicula.model';
import { DetallesPeliService } from 'src/app/services/detalles-peli.service';
import { FaseMarvelDirective } from 'src/app/directivas/fase-marvel.directive';
import { CoreccionTituloPipe } from 'src/app/pipes/coreccion-titulo.pipe';
import { SinopsisPipe } from 'src/app/pipes/sinopsis.pipe';
import { FaseMarvelPipe } from 'src/app/pipes/fase-marvel.pipe';
import { Mock } from 'src/app/mock/mock.mock';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-detalles-pelis',
  templateUrl: './detalles-pelis.component.html',
  styleUrls: ['./detalles-pelis.component.css']
})

export class DetallesPelisComponent implements OnInit {
  id: number = Number(this.router.url.replace("/", ""))
  detallesPeli: any = null;
  private peliculaService: DetallesPeliService;
  constructor(private peliculasService: DetallesPeliService, private router: Router) {
    this.peliculaService = peliculasService;
  }

  // Mock
  /**
  ngOnInit() {
    let peliculas = Mock;
    let pelicula = peliculas[this.buscarID(peliculas, this.id)]
    if (pelicula.releaseDate == undefined || pelicula.description == undefined) {
      this.peliculasService.getDetalles(this.id).subscribe((peliculaAPI: Pelicula) => this.expandirDetalles(peliculaAPI, this.id));
    } else {
      this.detallesPeli = pelicula
    }
    this.leerMasFlag(this.detallesPeli.description)
  }
 */
  // API

  /**
   * Si el almacenamiento local no está vacío, verificamos si la película tiene una fecha de
   * lanzamiento y una descripción. Si no es así, llamamos a la API para obtener los detalles. Si es
   * así, solo obtenemos los detalles del almacenamiento local.
*/
  ngOnInit() {
    const storageLocal = localStorage.getItem('peliculas')
    if (storageLocal != null) {
      let peliculas = JSON.parse(storageLocal);
      let pelicula = peliculas[this.buscarID(peliculas, this.id)]
      if (pelicula.releaseDate == undefined || pelicula.description == undefined) {
        this.peliculasService.getDetalles(this.id).subscribe((peliculaAPI: Pelicula) => this.expandirDetalles(peliculaAPI, this.id));
      } else {
        this.detallesPeli = pelicula

      }
    }
    this.leerMasFlag(this.detallesPeli.description)
  }

  // API
  /**
   * Toma una película y una identificación como parámetros, y luego establece la fecha de lanzamiento y
   * la descripción de la película en el almacenamiento local a la fecha de lanzamiento y la descripción
   * de la película que se pasó como parámetro.
   * @param {Pelicula} pelicula - Pelicula, id: numero
   * @param {number} id - número: la identificación de la película que se está expandiendo.
  */
  expandirDetalles(pelicula: Pelicula, id: number) {
    const storageLocal = localStorage.getItem('peliculas')
    if (storageLocal != null) {
      let peliculas: Pelicula[] = JSON.parse(storageLocal);
      let posicion: number = this.buscarID(peliculas, this.id);
      peliculas[posicion].releaseDate = pelicula.releaseDate;
      peliculas[posicion].description = "" + pelicula.description;
      localStorage.setItem('peliculas', JSON.stringify(peliculas));
      this.detallesPeli = peliculas[posicion];
      this.leerMasFlag(this.detallesPeli.description)
    }

  }

  /**
   * Comprueba si la longitud de la sinopsis es mayor a 300 caracteres, si lo es, elimina la clase
   * "invisible" del elemento con id "leermas", si no lo es, agrega la clase "invisible" al elemento con
   * el id "leermas"
   * @param {string} sinopsis - cadena
  */
  leerMasFlag(sinopsis: string) {
    let leermas: HTMLElement = <HTMLElement>document.getElementById("leermas");
    if (sinopsis.length > 300) {
      leermas.classList.remove("invisible")
    } else {
      leermas.classList.add("invisible")
    }
  }

  /**
   * Obtiene el elemento con el id "descripción" y cambia su texto interno a la descripción de la
   * película.
*/
  expandirSinopsis() {
    const descripcion = <HTMLElement>document.getElementById("description");
    descripcion.innerText = this.detallesPeli.description;
  }


  /**
   * Toma una lista de películas y un número de ID, y devuelve la posición de la película con ese número
   * de ID en la lista
   * @param {Pelicula[]} listaPeliculas - Pelicula[] - La lista de películas
   * @param {number} id - número: la identificación de la película que desea encontrar.
   * @returns La posición del elemento en la matriz.
*/
  buscarID(listaPeliculas: Pelicula[], id: number): number {
    let posicion: number = 0;
    listaPeliculas.forEach(element => {
      if (id == element.id) {
        posicion = listaPeliculas.indexOf(element);
      }
    });
    return posicion;
  }

}

