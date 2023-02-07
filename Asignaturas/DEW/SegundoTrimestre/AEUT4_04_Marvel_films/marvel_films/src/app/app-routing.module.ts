import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPelisComponent } from './components/lista-pelis/lista-pelis.component';
import { DetallesPelisComponent } from './components/detalles-pelis/detalles-pelis.component';
import { AddPeliculasComponent } from './components/add-peliculas/add-peliculas.component';
import { ModifyPeliculasComponent } from './components/modify-peliculas/modify-peliculas.component';

const routes: Routes = [
  { path: "", component: ListaPelisComponent },
  { path: "add", component: AddPeliculasComponent},
  { path: "modify/:id", component: ModifyPeliculasComponent },
  { path: ":id", component: DetallesPelisComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
