import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Pelicula } from 'src/app/modelo/pelicula.model';
import { Mock } from 'src/app/mock/mock.mock';

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
  //MOCK
  /**
    conseguirDatos(id: number) {
        let listaPeliculas: Pelicula[] = Mock;
        let posicion = this.buscarID(listaPeliculas, this.id);
        this.pelicula = listaPeliculas[posicion];
        return this.pelicula;
      }

      modifyPelicula(id: number) {
        let titulo: string = (<HTMLInputElement>document.getElementById("titulo")).value;
        let poster: string = (<HTMLInputElement>document.getElementById("poster")).value;
        let estreno: string = (<HTMLInputElement>document.getElementById("estreno")).value;
        let sinopsis: string = (<HTMLInputElement>document.getElementById("sinopsis")).value;
        let posicion = this.buscarID(Mock, id);
          Mock[posicion] = this.modificarPelicula(this.pelicula, titulo, poster, estreno, sinopsis);
          this.router.navigate(['/' + id]);
      }
       */
  //



  // API

  /**
   * Obtiene los datos del almacenamiento local y luego busca la identificación de la película y luego
   * devuelve la película
   * @param {number} id - número: la identificación de la película que desea obtener.
   * @returns La película está siendo devuelta.
*/
  conseguirDatos(id: number) {
    let storageLocal = localStorage.getItem('peliculas');
    if (storageLocal != null) {
      let listaPeliculas: Pelicula[] = JSON.parse(storageLocal);
      let posicion = this.buscarID(listaPeliculas, id);
      this.pelicula = listaPeliculas[posicion];
    }
    return this.pelicula;
  }


  /**
   * Toma el id de la película a modificar, obtiene los valores de las entradas, obtiene la lista de
   * películas de localStorage, busca la película a modificar, la modifica y guarda la lista de
   * películas en localStorage
   * @param {number} id - número: la identificación de la película que se va a modificar.
*/
  modifyPeliculas(id: number) {
    let titulo: string = (<HTMLInputElement>document.getElementById("titulo")).value;
    let poster: string = (<HTMLInputElement>document.getElementById("poster")).value;
    let estreno: string = (<HTMLInputElement>document.getElementById("estreno")).value;
    let sinopsis: string = (<HTMLInputElement>document.getElementById("sinopsis")).value;
    let storageLocal = localStorage.getItem('peliculas');
    if (storageLocal != null) {
      let listaPeliculas: Pelicula[] = JSON.parse(storageLocal);
      let posicion = this.buscarID(listaPeliculas, id);
      listaPeliculas[posicion] = this.modificarPelicula(listaPeliculas[posicion], titulo, poster, estreno, sinopsis)
      localStorage.setItem('peliculas', JSON.stringify(listaPeliculas));
      this.router.navigate(['/' + id]);
    }
  }

  //

  /**
   * Toma un objeto Pelicula y cuatro cadenas y devuelve un objeto Pelicula
   * @param {Pelicula} pelicula - Pelicula - El objeto de Pelicula que queremos modificar.
   * @param {string} nombre - cadena, póster: cadena, fecha de publicación: cadena, descripción: cadena
   * @param {string} poster - cadena, fecha de publicación: cadena, descripción: cadena
   * @param {string} releaseDate - cadena
   * @param {string} description - cadena
   * @returns La película modificada.
   */
  modificarPelicula(pelicula: Pelicula, nombre: string, poster: string, releaseDate: string, description: string): Pelicula {
    pelicula.name = nombre;
    pelicula.poster = poster;
    pelicula.releaseDate = releaseDate;
    pelicula.description = description;
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

/**
 * Valida el formato de fecha y si no es correcto muestra un mensaje de error y deshabilita el botón
 */
  validarFecha(){
    let fecha = <HTMLInputElement>document.getElementById("estreno");
    let error = document.getElementById("errorFecha");
    let btneditar = <HTMLButtonElement>document.getElementById("btneditar");
    const regExp = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/2(\d{3})$/
    if (!regExp.test(fecha.value)) {
      fecha.classList.add("error");
      error.innerText = "¡Error! Debe ser formato dd/mm/yyyy"
      btneditar.disabled = true;
    }else{
      fecha.classList.remove("error");
      error.innerText = ""
      btneditar.disabled = false;
    }
  }


}




