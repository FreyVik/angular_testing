import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Asignatura, Dificultad } from 'src/app/models/asignatura';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursosComponent implements OnInit {
  public nombre: string = "";
  public asignaturas: Array<Asignatura> = [];
  public asignaturaFavorita!: Asignatura;
  public _getEnumIndex: Function;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _appService: AppService
  ) {
    this._getEnumIndex = this._appService.getEnumIndex;
  }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this.nombre = JSON.parse(JSON.stringify(params)).nombre;
      console.log(params);
      console.log(this.nombre);
    })

    this.asignaturas = [
      new Asignatura('Matematicas', Dificultad.media),
      new Asignatura('Fisica', Dificultad.alta),
      new Asignatura('Biologia', Dificultad.baja),
    ]

    this.sortAsignaturas()
  }

  redirigir() {
    this._router.navigate(['/zapatillas'])
  }

  sortAsignaturas() {
    this.asignaturas.forEach((val, i) => {
      console.log(`${Object.keys(Dificultad).indexOf(val.dificultad)}: ${val.dificultad}`);
      
    })
  
    this.asignaturas.sort((a: Asignatura, b: Asignatura) => (this._getEnumIndex(Dificultad, a.dificultad) < this._getEnumIndex(Dificultad, b.dificultad) ? -1 : 1) )
  }

  mostrarFavorita(event: any) {
    this.asignaturaFavorita = event.asignatura;
  }
}
