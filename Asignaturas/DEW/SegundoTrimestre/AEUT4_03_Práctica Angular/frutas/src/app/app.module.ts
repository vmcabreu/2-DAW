import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyfrutasComponent } from './bodyfrutas/bodyfrutas.component';
import { FooterfrutasComponent } from './footerfrutas/footerfrutas.component';
import { CartafrutaComponent } from './cartafruta/cartafruta.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyfrutasComponent,
    FooterfrutasComponent,
    CartafrutaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
