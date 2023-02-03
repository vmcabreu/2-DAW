import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/modelo/pelicula.model';
import { ApipeliculaService } from 'src/app/services/apipelicula.service';
import { CoreccionTituloPipe } from 'src/app/pipes/coreccion-titulo.pipe';
import { Mock } from 'src/app/mock/mock.mock';
@Component({
  selector: 'app-lista-pelis',
  templateUrl: './lista-pelis.component.html',
  styleUrls: ['./lista-pelis.component.css']
})
/* *|CURSOR_MARCADOR|* */
export class ListaPelisComponent implements OnInit {
  peliculas: Pelicula[] = [];
  private peliculaService: ApipeliculaService;
  constructor(private peliculasService: ApipeliculaService) {
    this.peliculaService = peliculasService;

  }

  /**
   * La función ngOnInit() es un enlace de ciclo de vida que se llama después de que Angular haya
   * inicializado todas las propiedades vinculadas a datos de una directiva
   */
/**
 * La función ngOnInit() es un enlace de ciclo de vida que se llama después de que Angular haya
 * inicializado todas las propiedades vinculadas a datos de una directiva
 */
  ngOnInit() {
    this.peliculasService.getPeliculas().subscribe((peliculasAPI : Pelicula[])=> this.peliculas=peliculasAPI);
  }



}
