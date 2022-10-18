import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursosComponent implements OnInit {
  public nombre: string = "";

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this.nombre = JSON.parse(JSON.stringify(params)).nombre;
      console.log(params);
      console.log(this.nombre);
    })
  }

  redirigir() {
    this._router.navigate(['/zapatillas'])
    
  }
}
