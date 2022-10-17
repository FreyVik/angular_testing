import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VideojuegoComponent } from './components/videojuego/videojuego.component';
import { ZapatillaComponent } from './components/zapatilla/zapatilla.component';
import { CursosComponent } from './components/curso/curso.component';

@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    ZapatillaComponent,
    CursosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
