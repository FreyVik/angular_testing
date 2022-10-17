import { Component, DoCheck } from "@angular/core";

@Component({
    selector: 'zapatilla',
    templateUrl: './zapatilla.component.html'
})
export class ZapatillaComponent implements DoCheck {
    public titulo: string = "Componente de zapatilla"

    constructor() {
        console.log('Zapatillas construido');
    }

    ngDoCheck(): void {
        console.info('DoCheck de zapatillas');
    }
}