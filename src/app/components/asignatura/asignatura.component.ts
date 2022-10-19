import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Asignatura } from 'src/app/models/asignatura';

@Component({
  selector: 'asignatura',
  templateUrl: './asignatura.component.html',
  styleUrls: ['./asignatura.component.scss']
})
export class AsignaturaComponent implements OnInit {

  @Input() asignatura!: Asignatura
  @Input() isDarkTheme: boolean
  @Output() AsignaturaFavorita = new EventEmitter();

  constructor() {
    this.isDarkTheme = false
  }

  ngOnInit(): void {
  }

  seleccionar(event: any, asignatura: Asignatura) {
    this.AsignaturaFavorita.emit({
      asignatura
    })
  }

}
