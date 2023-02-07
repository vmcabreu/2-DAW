import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/modelo/pelicula.model';
import { DetallesPeliService } from 'src/app/services/detalles-peli.service';
import { CoreccionTituloPipe } from 'src/app/pipes/coreccion-titulo.pipe';
import { SinopsisPipe } from 'src/app/pipes/sinopsis.pipe';
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
    let id: number = Number(this.router.url.replace("/", ""))
    this.peliculasService.getDetalles(id).subscribe((peliculaAPI: Pelicula) => this.expandirDetalles(peliculaAPI, id));
  }

  expandirDetalles(pelicula: Pelicula, id: number) {
    const storageLocal = localStorage.getItem('peliculas')
    if (storageLocal != null) {
      let peliculas: Pelicula[] = JSON.parse(storageLocal);
      peliculas[id - 1].releaseDate = pelicula.releaseDate;
      peliculas[id - 1].sinopsis = ""+pelicula.sinopsis;
      localStorage.setItem('peliculas', JSON.stringify(peliculas));
    }
    this.detallesPeli = pelicula;
  }

  expandirSinopsis() {
    const descripcion = <HTMLElement>document.getElementById("description");
    descripcion.innerText = this.detallesPeli.description;
  }
}

