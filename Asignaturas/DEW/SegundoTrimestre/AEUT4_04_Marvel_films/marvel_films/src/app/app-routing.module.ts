import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Modelo } from './modelo/modelo.mode';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
