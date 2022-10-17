import { Component } from '@angular/core';
import { Config } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'angular_testing';
  public description: string;
  public config = Config;
  public showVideojuego: boolean = true

  constructor() {
    this.title = Config.titulo;
    this.description = Config.description
  }

  hideVideojuego(): void {
    this.showVideojuego ? this.showVideojuego = false : this.showVideojuego = true;
  }
}
