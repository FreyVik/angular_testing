import { Component, DoCheck, OnInit } from "@angular/core";
import { Zapatilla } from "src/app/models/zapatilla";

@Component({
    selector: 'zapatilla',
    templateUrl: './zapatilla.component.html'
})
export class ZapatillaComponent implements OnInit, DoCheck {
    public titulo: string = "Componente de zapatilla";
    public zapatillas: Array<Zapatilla>;

    constructor() {
        console.log('Zapatillas construido');

        this.zapatillas = [
            new Zapatilla('Jordan', 80, 'Nike', 'Chicago', true),
            new Zapatilla('Air Force', 60, 'Nike', 'Blanco', false),
            new Zapatilla('Yeezys', 180, 'Adidas', 'Zebra', true)
        ];
    }
    
    ngOnInit(): void {
        console.log(this.zapatillas);
    }

    ngDoCheck(): void {
        console.info('DoCheck de zapatillas');
    }
}