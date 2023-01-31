import { Component } from '@angular/core';
import { Modelo } from './modelo/modelo.mode';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'marvel_films';
  modelo= new Modelo();
  bd = this.modelo.ngOnInit();
  titulos = this.modelo.getTitulos();
  posters = [];




}
