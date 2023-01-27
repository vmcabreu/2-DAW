import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  template: ''
})
export class Modelo implements OnInit{
    public peliculas: any[] = [];
    
    constructor(){
    }
  
    guardarPeliculas(peliculaBD: any[]){
      
      this.peliculas.push(peliculaBD)
    }

    getTitulos(){
      let titulos = [];
      for (let i = 0; i < this.peliculas.length; i++) {
         titulos.push(this.peliculas[0][i]);
        
      }
      return titulos;
    }
    // este metodo es llamado al inicializarse el componente
    ngOnInit() {
      const url = 'https://www.qando.es/docs/films.php';
      // obtengo datos utilizando fetch
      fetch(url).then(response => response.json()).then(data => {
        
        this.guardarPeliculas(data); // <-- asigno los valores a la propiedad del componente
        
        
      });
      this.peliculas.pop()
      console.log(this.peliculas);
    }
    

}
