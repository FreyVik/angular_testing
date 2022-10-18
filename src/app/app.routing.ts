import { ModuleWithProviders } from "@angular/core";
import { Routes, Router, RouterModule } from "@angular/router";

// Componentes
import { ZapatillaComponent } from "./components/zapatilla/zapatilla.component";
import { CursosComponent } from "./components/curso/curso.component";
import { VideojuegoComponent } from "./components/videojuego/videojuego.component"; 
import { HomeComponent } from "./components/home/home.component";
import { ExternoComponent } from "./components/externo/externo.component";
import { ContactoComponent } from "./components/contacto/contacto.component";

// Array de rutas
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'videojuego', component: VideojuegoComponent},
    {path: 'cursos', component: CursosComponent},
    {path: 'cursos/:nombre', component: CursosComponent},
    {path: 'externo', component: ExternoComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: '**', component: ZapatillaComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);