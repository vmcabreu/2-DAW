import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPelisComponent } from './components/lista-pelis/lista-pelis.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreccionTituloPipe } from './pipes/coreccion-titulo.pipe';
import { FaseMarvelPipe } from './pipes/fase-marvel.pipe';
import { DetallesPelisComponent } from './components/detalles-pelis/detalles-pelis.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddPeliculasComponent } from './components/add-peliculas/add-peliculas.component';
import { ModifyPeliculasComponent } from './components/modify-peliculas/modify-peliculas.component';
import { SinopsisPipe } from './pipes/sinopsis.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListaPelisComponent,
    CoreccionTituloPipe,
    FaseMarvelPipe,
    DetallesPelisComponent,
    HeaderComponent,
    FooterComponent,
    AddPeliculasComponent,
    ModifyPeliculasComponent,
    SinopsisPipe
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
