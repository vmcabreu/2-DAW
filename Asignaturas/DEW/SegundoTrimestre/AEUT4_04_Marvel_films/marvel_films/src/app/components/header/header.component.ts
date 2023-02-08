import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  headerImg: string = "https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg";
  marvelIMgChulona: string = "https://www.citypng.com/public/uploads/small/11662677356hflyfbdzgjg1clzl2ywgdxok3m06tpialatusjhplxnayelxbnxe9uy1ah9dowegxllxc2lgpezl0qle9ny480m8n9dyiiqsegge.png;"


  reiniciarStorage(){
      localStorage.clear();
      window.location.reload();
  }
}

