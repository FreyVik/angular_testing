import { Component, OnInit } from '@angular/core';
import { PeticioneService } from 'src/app/services/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.scss'],
  providers: [PeticioneService]
})
export class ExternoComponent implements OnInit {
  public user: any;
  public userId!: number;
  public fecha: any;

  constructor(
    private _peticionesServices: PeticioneService
  ){
    this.userId = 1;
  }

  chargeUser(): void {
    this.user = null;
    this._peticionesServices.getUser(this.userId).subscribe({
      next: (response: any) => {
        console.log(response.data);

        this.user = response.data
        this.userId = this.user.id
      },

      error: (error) => {
        console.error(<any>error);
      }
    })
  }

  ngOnInit(): void {
    this.chargeUser()

    this.fecha = new Date()
  }

}
