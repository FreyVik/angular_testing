import { Component, Input, OnInit } from '@angular/core';
import { Asignatura, Dificultad } from 'src/app/models/asignatura';

@Component({
  selector: 'asignatura',
  templateUrl: './asignatura.component.html',
  styleUrls: ['./asignatura.component.scss']
})
export class AsignaturaComponent implements OnInit {

  @Input() asignatura!: Asignatura
  @Input() isDarkTheme: boolean

  constructor() {
    this.isDarkTheme = false
  }

  ngOnInit(): void {
  }

}
