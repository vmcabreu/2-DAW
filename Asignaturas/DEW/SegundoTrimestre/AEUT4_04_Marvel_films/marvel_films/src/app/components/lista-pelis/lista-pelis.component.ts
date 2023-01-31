import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/modelo/pelicula.model';
import { ApipeliculaService } from 'src/app/services/apipelicula.service';

@Component({
  selector: 'app-lista-pelis',
  templateUrl: './lista-pelis.component.html',
  styleUrls: ['./lista-pelis.component.css']
})
export class ListaPelisComponent implements OnInit {
  peliculas: Pelicula[] = [];
  peliAvanzado: Pelicula[] = [];
  constructor(private peliculasService: ApipeliculaService) { }
  ngOnInit() {
    this.peliculas = this.peliculasService.getPeliculas()

  }


}
