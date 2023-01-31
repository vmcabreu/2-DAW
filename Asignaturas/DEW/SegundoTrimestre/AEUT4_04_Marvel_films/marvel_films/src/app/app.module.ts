import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPelisComponent } from './components/lista-pelis/lista-pelis.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreccionTituloPipe } from './pipes/coreccion-titulo.pipe';
import { FaseMarvelPipe } from './pipes/fase-marvel.pipe';
import { DetallesPelisComponent } from './components/detalles-pelis/detalles-pelis.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPelisComponent,
    CoreccionTituloPipe,
    FaseMarvelPipe,
    DetallesPelisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
