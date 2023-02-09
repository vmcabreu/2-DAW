import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pelicula } from 'src/app/modelo/pelicula.model';

@Component({
  selector: 'app-modificarpelicula',
  templateUrl: './modificarpelicula.component.html',
  styleUrls: ['./modificarpelicula.component.css']
})
export class ModificarpeliculaComponent {

  public id: number = Number(this.router.url.split("/")[2]);
  public pelicula: Pelicula = this.conseguirDatos(this.id)
  constructor(private router: Router) {
  }
  conseguirDatos(id: number) {
    let storageLocal = localStorage.getItem('peliculas');
    if (storageLocal != null) {
      let listaPeliculas: Pelicula[] = JSON.parse(storageLocal);
      let posicion = this.buscarID(listaPeliculas, this.id);
      this.pelicula = listaPeliculas[posicion];
    }
    return this.pelicula;

  }

  modificarPelicula(pelicula: Pelicula, nombre: string, poster: string, releaseDate: string, description: string):Pelicula{
    pelicula.name = nombre;
    pelicula.poster = poster;
    pelicula.releaseDate = releaseDate;
    pelicula.description =description;
    return pelicula;
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

  modifyPelicula(id: number) {
    let titulo: string = (<HTMLInputElement>document.getElementById("titulo")).value;
    let poster: string = (<HTMLInputElement>document.getElementById("poster")).value;
    let estreno: string = (<HTMLInputElement>document.getElementById("estreno")).value;
    let sinopsis: string = (<HTMLInputElement>document.getElementById("sinopsis")).value;
    let storageLocal = localStorage.getItem('peliculas');
    if (storageLocal != null) {
      let listaPeliculas: Pelicula[] = JSON.parse(storageLocal);
      let posicion = this.buscarID(listaPeliculas, id);
      listaPeliculas[posicion] = this.modificarPelicula(listaPeliculas[posicion],titulo,poster,estreno,sinopsis)
      localStorage.setItem('peliculas', JSON.stringify(listaPeliculas));
      this.router.navigate(['/'+id]);
    }
  }

}


