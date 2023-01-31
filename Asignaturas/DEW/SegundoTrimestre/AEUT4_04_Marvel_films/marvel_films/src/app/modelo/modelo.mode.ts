import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  template: ''
})
export class Modelo implements OnInit{
    public peliculas: any[] = [];
    public titulos:any[] = [];
    constructor(){
    }

    guardarPeliculas(peliculaBD: any[]){

      this.peliculas.push(peliculaBD)
    }

/**
 * Devuelve una matriz de los títulos de las películas.
 */
    getTitulos(){

      for (let i = 0; i < this.peliculas.length; i++) {
         this.titulos.push(this.peliculas[0][i]);

      }
    }
    // este metodo es llamado al inicializarse el componente
    ngOnInit() {
      const url = 'https://www.qando.es/docs/films.php';
      // obtengo datos utilizando fetch
      fetch(url).then(response => response.json()).then(data => {

        this.guardarPeliculas(data); // <-- asigno los valores a la propiedad del componente


      });
      this.peliculas.pop();
      console.log(this.peliculas);

    }


}
