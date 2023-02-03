import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPelisComponent } from './components/lista-pelis/lista-pelis.component';
import { DetallesPelisComponent } from './components/detalles-pelis/detalles-pelis.component';

const routes: Routes = [
  { path: "", component: ListaPelisComponent },
  { path: ":id", component: DetallesPelisComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
