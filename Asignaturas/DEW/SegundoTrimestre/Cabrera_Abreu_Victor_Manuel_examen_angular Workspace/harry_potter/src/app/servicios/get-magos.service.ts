import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mago } from '../modelos/mago.model';

@Injectable({
  providedIn: 'root'
})
export class GetMagosService {
  constructor(private http: HttpClient) {
  }

/**
 * Devuelve un Observable de una matriz de objetos Mago.
 * @returns Un Observable de una matriz de objetos Mago.
 */
  getMagos(): Observable<Mago[]> {
    return this.http.get<Mago[]>('https://hp-api.onrender.com/api/characters')
  }
}
