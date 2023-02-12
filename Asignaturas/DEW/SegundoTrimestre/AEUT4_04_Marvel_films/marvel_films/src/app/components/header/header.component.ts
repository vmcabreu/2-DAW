import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  headerImg: string = "https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg";
  /**
   * Mock
  
  reiniciarStorage(){
    window.location.reload();
}
 */

/**
 * Borra el localStorage y recarga la página
 */
  reiniciarStorage(){
      localStorage.clear();
      window.location.reload();
  }
}

