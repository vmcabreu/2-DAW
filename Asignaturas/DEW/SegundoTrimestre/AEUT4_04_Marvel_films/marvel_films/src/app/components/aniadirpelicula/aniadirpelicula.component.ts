import { Component } from '@angular/core';
import { Pelicula } from 'src/app/modelo/pelicula.model';
import { Router } from '@angular/router';
import { Mock } from 'src/app/mock/mock.mock';

@Component({
  selector: 'app-aniadirpelicula',
  templateUrl: './aniadirpelicula.component.html',
  styleUrls: ['./aniadirpelicula.component.css']
})
export class AniadirpeliculaComponent {
  constructor(private router: Router) {

  }

  /**
 * Crea un nuevo objeto Pelicula con los parámetros dados y lo devuelve
 * @param {string} nombre - cadena
 * @param {string} poster - cadena, fecha de publicación: cadena, descripción: cadena
 * @param {string} releaseDate - cadena
 * @param {string} description - cadena,
 * @returns Un nuevo objeto de Pelicula con los parámetros pasados.
 */
  crearPelicula(nombre: string, poster: string, releaseDate: string, description: string) {
    return new Pelicula(this.crearID(), nombre, poster, releaseDate, description)
  }


  //MOCK

  /**
   * Crea una nueva ID para una nueva película.
   * @returns la variable newId.
   */
  /**
      crearID(): number {
        let newId = 0;
          let listaPeliculas: Pelicula[] = Mock;
          newId = listaPeliculas.length + 1
          for (let i = 1; i <= listaPeliculas.length; i++) {
            if (listaPeliculas[i-1].id != i) {
              newId = i;
              break;
            }
          }
        return newId
      }
       */


  /**
   * Toma los valores del formulario y crea un nuevo objeto de película, luego lo empuja a la matriz
   * simulada y navega a la página de inicio
   */
  /**
    addPelicula() {
      let titulo: string = (<HTMLInputElement>document.getElementById("titulo")).value;
      let poster: string = (<HTMLInputElement>document.getElementById("poster")).value;
      let estreno: string = (<HTMLInputElement>document.getElementById("estreno")).value;
      let sinopsis: string = (<HTMLInputElement>document.getElementById("sinopsis")).value;
        let newPelicula: Pelicula = this.crearPelicula(titulo, poster, estreno, sinopsis)
        Mock.push(newPelicula);
        this.router.navigate(['']);
    }
   */
  //

  //API


 /**
  * Toma la lista actual de películas del almacenamiento local, verifica si la lista está vacía y, si
  * no lo está, verifica si la identificación de la última película en la lista es igual a la longitud
  * de la lista. Si no es así, devuelve el id de la última película de la lista. Si es así, devuelve la
  * longitud de la lista.
  * @returns la identificación de la nueva película.
  */
  crearID(): number {
    const storageLocal = localStorage.getItem('peliculas');
    let newId = 0;
    if (storageLocal != null) {
      let listaPeliculas: Pelicula[] = JSON.parse(storageLocal);
      newId = listaPeliculas.length + 1
      for (let i = 1; i <= listaPeliculas.length; i++) {
        if (listaPeliculas[i-1].id != i) {
          newId = i;
          break;
        }
      }
    }
    return newId
  }

  /**
   * Agrega una nueva película al almacenamiento local.
   */
  addPelicula() {
    let titulo: string = (<HTMLInputElement>document.getElementById("titulo")).value;
    let poster: string = (<HTMLInputElement>document.getElementById("poster")).value;
    let estreno: string = (<HTMLInputElement>document.getElementById("estreno")).value;
    let sinopsis: string = (<HTMLInputElement>document.getElementById("sinopsis")).value;
    let storageLocal = localStorage.getItem('peliculas');
    console.log(storageLocal);
    if (storageLocal != null) {
      let listaPeliculas: Pelicula[] = JSON.parse(storageLocal);
      let newPelicula: Pelicula = this.crearPelicula(titulo, poster, estreno, sinopsis)
      listaPeliculas.push(newPelicula);
      localStorage.setItem('peliculas', JSON.stringify(listaPeliculas));
      this.router.navigate(['']);
    }
  }
  //

}
