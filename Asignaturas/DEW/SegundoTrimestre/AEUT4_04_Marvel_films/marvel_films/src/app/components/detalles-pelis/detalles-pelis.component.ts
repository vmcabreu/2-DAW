import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/modelo/pelicula.model';
import { DetallesPeliService } from 'src/app/services/detalles-peli.service';
import { CoreccionTituloPipe } from 'src/app/pipes/coreccion-titulo.pipe';
import { FaseMarvelPipe } from 'src/app/pipes/fase-marvel.pipe';
import { Mock } from 'src/app/mock/mock.mock';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-detalles-pelis',
  templateUrl: './detalles-pelis.component.html',
  styleUrls: ['./detalles-pelis.component.css']
})
export class DetallesPelisComponent implements OnInit {
  detallesPeli: any = null;
  private peliculaService: DetallesPeliService;
  constructor(private peliculasService: DetallesPeliService, private router: Router) {
    this.peliculaService = peliculasService;
  }
  ngOnInit() {
    console.log(this.router.url.replace("/",""));

    this.peliculasService.getDetalles(this.router.url.replace("/","")).subscribe((peliculasAPI: Pelicula) => this.detallesPeli = peliculasAPI);
    console.log(this.detallesPeli);
  }
}

