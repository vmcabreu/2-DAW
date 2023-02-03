import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pelicula } from '../modelo/pelicula.model';
import { Observable } from 'rxjs';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Mock } from '../mock/mock.mock';

@Injectable({
  providedIn: 'root'
})
export class ApipeliculaService {
  public pelicula: Pelicula[] = [];
  public tamanio: number = 0;
  constructor(private http: HttpClient) {
  }



  /**
   * Obtiene la duración de la matriz de películas de la API, luego recorre la matriz e inserta cada
   * película en la matriz de películas en el servicio.
   * @returns una serie de objetos de Pelicula.
   */
  getPeliculas(): Observable<Pelicula[]> {

    return this.http.get<Pelicula[]>('https://www.qando.es/docs/films.php')
  }

  getDetalles(id : number): Observable<Pelicula[]>{
    return this.http.get<Pelicula[]>('https://www.qando.es/docs/films.php?id='+id)
  }


}

/*
validarPelicula(pelicula : Pelicula, listadoPeliculas: Pelicula[]){
  if (listadoPeliculas) {
    listadoPeliculas.push(pelicula);
  }
}
*/
/*
  mockPelicula(pelicula: Pelicula): void {
    this.mockPelicula
  }
*/

