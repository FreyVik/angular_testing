import { Component, DoCheck, OnInit } from "@angular/core";
import { Zapatilla } from "src/app/models/zapatilla";
import { ZapatillaService } from "src/app/services/zapatilla.service";

@Component({
    selector: 'zapatilla',
    templateUrl: './zapatilla.component.html',
    providers: [ZapatillaService]
})
export class ZapatillaComponent implements OnInit, DoCheck {
    public titulo: string = "Componente de zapatilla";
    public zapatillas: Array<Zapatilla> = [];
    public marcas: string[];
    public color: string;
    public miMarca: string;

    constructor(
        private _zapatillaService: ZapatillaService
    ) {
        console.log('Zapatillas construido');
        this.color = 'yellow';
        this.miMarca = 'Fila';
        this.marcas = new Array();

        this.zapatillas = this._zapatillaService.getZapatillas()

        this.chargeMarcas();
    }

    chargeMarcas() {
        this.zapatillas.forEach((zapatilla, index) => {
            if (!this.existsMarca(zapatilla.marca))
                this.marcas.push(zapatilla.marca)
        })

        console.log(this.marcas);
        
    }

    alertMarca() {
        alert(this.miMarca);
    }

    addMarca() {
        if (!this.existsMarca(this.miMarca))
            this.marcas.push(this.miMarca);
    }

    deleteMarca(index: number) {
        // delete this.marcas[index]
        this.marcas.splice(index, 1)
    }
    
    existsMarca(marca: string): boolean {
        return this.marcas.indexOf(marca) == -1 ? false : true;
    }

    onBlur() {
        console.log('Saliste del input');
    }

    showWord() {
        alert(this.miMarca)
    }

    ngOnInit(): void {
        console.log(this.zapatillas);
    }

    ngDoCheck(): void {
        console.info('DoCheck de zapatillas');
    }
}