import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pelicula } from '../modelo/pelicula.model';
@Injectable()
export class Mock {
  constructor(private http: HttpClient) { }

  getPosts(): Observable<Object> {
    return this.http.get('https://www.qando.es/docs/films.php');
  }
}

