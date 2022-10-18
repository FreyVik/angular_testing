import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public identificado: boolean

  constructor() {
    this.identificado = false;
  }

  ngOnInit(): void {
  }

  identificarse() {
    this.identificado = true;
  }

  desIdentificarse() {
    this.identificado = false;
  }
}
