import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'videojuego',
  templateUrl: './videojuego.component.html'
})
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy {
  public titulo: string;
  public listado: string;

  constructor() {
    this.titulo = "Componente videojuego";
    this.listado = "Listado de juegos";

    console.log('Constructor videojuego');
  }

  ngOnInit(): void {
    console.log('OnInit videojuego');
    
  }

  ngDoCheck(): void {
    console.log('DoCheck videojuego');
  }

  ngOnDestroy(): void {
    console.log('Destroy videojuego');
  }

  changeTitle(): void {
    this.titulo = 'Mejores videojuegos'
    console.log('Titulo cambiado');
  }
}
