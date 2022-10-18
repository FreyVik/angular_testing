import { ModuleWithProviders } from "@angular/core";
import { Routes, Router, RouterModule } from "@angular/router";

// Componentes
import { ZapatillaComponent } from "./components/zapatilla/zapatilla.component";
import { CursosComponent } from "./components/curso/curso.component";
import { VideojuegoComponent } from "./components/videojuego/videojuego.component"; 

// Array de rutas
const appRoutes: Routes = [
    {path: '', component: CursosComponent},
    {path: 'videojuego', component: VideojuegoComponent},
    {path: 'cursos', component: CursosComponent},
    {path: '**', component: ZapatillaComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);