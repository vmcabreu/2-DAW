import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pelicula } from 'src/app/modelo/pelicula.model';
import { DetallesPelisComponent } from '../detalles-pelis/detalles-pelis.component';

@Component({
  selector: 'app-modificarpelicula',
  templateUrl: './modificarpelicula.component.html',
  styleUrls: ['./modificarpelicula.component.css']
})
export class ModificarpeliculaComponent {

  public id: number = Number(this.router.url.replace("/", "")[2]);
  public pelicula: Pelicula = this.conseguirDatos(this.id)
  constructor(private router: Router, private detallesPelis: DetallesPelisComponent) {
  }
  conseguirDatos(id: number) {
    let storageLocal = localStorage.getItem('peliculas');
    if (storageLocal != null) {
      let listaPeliculas: Pelicula[] = JSON.parse(storageLocal);
      let posicion = this.detallesPelis.buscarID(listaPeliculas, this.id);
      this.pelicula = listaPeliculas[posicion];
    }
    return this.pelicula;

  }

  modifyPelicula(id: number) {
    let titulo: string = (<HTMLInputElement>document.getElementById("titulo")).value;
    let poster: string = (<HTMLInputElement>document.getElementById("poster")).value;
    let estreno: string = (<HTMLInputElement>document.getElementById("estreno")).value;
    let sinopsis: string = (<HTMLInputElement>document.getElementById("sinopsis")).value;
    let storageLocal = localStorage.getItem('peliculas');
    if (storageLocal != null) {
      let listaPeliculas: Pelicula[] = JSON.parse(storageLocal);
      let posicion = this.detallesPelis.buscarID(listaPeliculas, this.id);
      localStorage.setItem('peliculas', JSON.stringify(listaPeliculas));
      this.router.navigate(['']);
    }
  }

}


