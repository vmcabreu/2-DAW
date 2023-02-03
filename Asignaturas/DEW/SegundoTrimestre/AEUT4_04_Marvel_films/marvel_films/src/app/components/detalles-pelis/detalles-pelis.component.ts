import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/modelo/pelicula.model';
import { ApipeliculaService } from 'src/app/services/apipelicula.service';
import { CoreccionTituloPipe } from 'src/app/pipes/coreccion-titulo.pipe';
import { Mock } from 'src/app/mock/mock.mock';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-detalles-pelis',
  templateUrl: './detalles-pelis.component.html',
  styleUrls: ['./detalles-pelis.component.css']
})
export class DetallesPelisComponent implements OnInit {
  detallesPeli: Pelicula[] = [];
  private peliculaService: ApipeliculaService;
  constructor(private peliculasService: ApipeliculaService, private router: Router) {
    this.peliculaService = peliculasService;
  }
  ngOnInit() {
    this.peliculasService.getDetalles(Number(this.router.url.split('/')[1])).subscribe((peliculasAPI: Pelicula[]) => this.detallesPeli = peliculasAPI);
    console.log(this.detallesPeli);

  }
}

