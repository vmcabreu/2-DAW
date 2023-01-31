import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPelisComponent } from './components/lista-pelis/lista-pelis.component';

const routes: Routes = [
  {path:"",component:ListaPelisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
