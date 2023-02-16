import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaMagosComponent } from './componentes/lista-magos/lista-magos.component';
import { DetallesMagosComponent } from './componentes/detalles-magos/detalles-magos.component';

const routes: Routes = [
  { path: "", component: ListaMagosComponent },
  { path: "detalles/:id", component: DetallesMagosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
