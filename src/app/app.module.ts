import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { VideojuegoComponent } from './components/videojuego/videojuego.component';
import { ZapatillaComponent } from './components/zapatilla/zapatilla.component';
import { CursosComponent } from './components/curso/curso.component';
import { HomeComponent } from './components/home/home.component';
import { ExternoComponent } from './components/externo/externo.component';

import { CalculadoraPipe } from './pipes/calculadora.pipe';
import { ContactoComponent } from './components/contacto/contacto.component';
import { AsignaturaComponent } from './components/asignatura/asignatura.component';

@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    ZapatillaComponent,
    CursosComponent,
    appRoutingProviders,
    HomeComponent,
    ExternoComponent,
    CalculadoraPipe,
    ContactoComponent,
    AsignaturaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
