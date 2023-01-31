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
  constructor(private http: HttpClient) {
  }


  getPeliculas(): Pelicula[] {
    let tamanio: number = this.http.get<Pelicula[]>('https://www.qando.es/docs/films.php').subscribe.length;
    for (let i = 1; i <= tamanio; i++) {
      this.http.get<Pelicula>('https://www.qando.es/docs/films.php?id=' + i).subscribe(
        (peliculas: Pelicula) => this.pelicula.push(peliculas)

      )

    }
    return this.pelicula;

  }

  mockPelicula(pelicula: Pelicula): void {
    this.mockPelicula
   }

}
