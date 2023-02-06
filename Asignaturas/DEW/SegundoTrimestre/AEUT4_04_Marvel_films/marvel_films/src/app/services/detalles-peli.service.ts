import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pelicula } from '../modelo/pelicula.model';
import { Observable } from 'rxjs';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Mock } from '../mock/mock.mock';

@Injectable({
  providedIn: 'root'
})
export class DetallesPeliService {
  constructor(private http: HttpClient) {
  }



  getDetalles(id: string): Observable<Pelicula> {
    return this.http.get<Pelicula>('https://www.qando.es/docs/films.php?id=' + id)
  }
}
