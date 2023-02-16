import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaMagosComponent } from './componentes/lista-magos/lista-magos.component';
import { DetallesMagosComponent } from './componentes/detalles-magos/detalles-magos.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ColorGeneroDirective } from './directivas/color-genero.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListaMagosComponent,
    DetallesMagosComponent,
    ColorGeneroDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
