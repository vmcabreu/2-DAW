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
import { SinopsisPipe } from './pipes/sinopsis.pipe';
import { AniadirpeliculaComponent } from './components/aniadirpelicula/aniadirpelicula.component';
import { ModificarpeliculaComponent } from './components/modificarpelicula/modificarpelicula.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FaseMarvelDirective } from './directivas/fase-marvel.directive';
import { MarvelinfoComponent } from './components/marvelinfo/marvelinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPelisComponent,
    CoreccionTituloPipe,
    FaseMarvelPipe,
    DetallesPelisComponent,
    HeaderComponent,
    FooterComponent,
    SinopsisPipe,
    AniadirpeliculaComponent,
    ModificarpeliculaComponent,
    FaseMarvelDirective,
    MarvelinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
