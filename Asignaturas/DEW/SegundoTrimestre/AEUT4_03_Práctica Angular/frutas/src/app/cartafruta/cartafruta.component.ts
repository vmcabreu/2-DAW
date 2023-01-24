import { Component } from '@angular/core';

@Component({
  selector: 'app-cartafruta',
  templateUrl: './cartafruta.component.html',
  styleUrls: ['./cartafruta.component.css']
})

export class CartafrutaComponent {
  imgfrutas = ['../assets/img/coconut.png','../assets/img/cherry.png','../assets/img/banana.png'];
  frutas=[this.imgfrutas[0],this.imgfrutas[0],this.imgfrutas[0]];
  coconut = (this.imgfrutas[0].split("/")[3].split(".")[0].toUpperCase());
  cherry = (this.imgfrutas[1].split("/")[3].split(".")[0].toUpperCase());
  banana = (this.imgfrutas[2].split("/")[3].split(".")[0].toUpperCase());

}
