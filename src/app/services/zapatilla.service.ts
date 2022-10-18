import { Injectable } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";

@Injectable()
export class ZapatillaService {
    public zapatillas: Array<Zapatilla>

    constructor() {        
        this.zapatillas = [
            new Zapatilla('Jordan', 80, 'Nike', 'Chicago', true),
            new Zapatilla('Air Force', 60, 'Nike', 'Blanco', false),
            new Zapatilla('Yeezys', 180, 'Adidas', 'Zebra', true),
            new Zapatilla('AirMax 90', 150, 'Nike', 'Terrance', true),
            new Zapatilla('Spartan', 150, 'Reebok', 'Negro', false)
        ];
    }

    getZapatillas(): Array<Zapatilla> {
        return this.zapatillas;
    }
}