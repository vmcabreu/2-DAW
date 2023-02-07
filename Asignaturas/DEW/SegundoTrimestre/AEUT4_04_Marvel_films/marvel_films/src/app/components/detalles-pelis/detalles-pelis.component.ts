import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/modelo/pelicula.model';
import { DetallesPeliService } from 'src/app/services/detalles-peli.service';
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
/**
 * Usamos el enrutador para obtener la identificación de la película que queremos mostrar, luego usamos
 * la identificación para obtener la película de la API y luego usamos la película para mostrar la
 * película.
 */
  ngOnInit() {
    const storageLocal = localStorage.getItem('peliculas')
    if (storageLocal != null) {
      let pelicula = JSON.parse(storageLocal);
      if (pelicula[this.id-1].releaseDate == "" || pelicula[this.id - 1].description == "") {
        this.peliculasService.getDetalles(this.id).subscribe((peliculaAPI: Pelicula) => this.expandirDetalles(peliculaAPI, this.id));
      }else{
        this.detallesPeli = pelicula[this.id-1];
      }

    }

  }

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
      peliculas[id - 1].releaseDate = pelicula.releaseDate;
      peliculas[id - 1].description = ""+pelicula.description;
      localStorage.setItem('peliculas', JSON.stringify(peliculas));
    }
    this.detallesPeli = pelicula;
  }

/**
 * Obtiene el elemento con el id "descripción" y cambia su texto interno a la descripción de la
 * película.
 */
  expandirSinopsis() {
    const descripcion = <HTMLElement>document.getElementById("description");
    descripcion.innerText = this.detallesPeli.description;
  }
}

