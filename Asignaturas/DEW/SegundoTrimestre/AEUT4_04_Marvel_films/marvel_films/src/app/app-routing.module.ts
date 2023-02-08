import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPelisComponent } from './components/lista-pelis/lista-pelis.component';
import { DetallesPelisComponent } from './components/detalles-pelis/detalles-pelis.component';
import { AniadirpeliculaComponent } from './components/aniadirpelicula/aniadirpelicula.component';
import { ModificarpeliculaComponent } from './components/modificarpelicula/modificarpelicula.component';

const routes: Routes = [
  { path: "", component: ListaPelisComponent },
  { path: "add", component: AniadirpeliculaComponent},
  { path: "modify/:id", component: ModificarpeliculaComponent },
  { path: ":id", component: DetallesPelisComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
