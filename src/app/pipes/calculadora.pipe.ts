import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'calculadora'
})
export class CalculadoraPipe implements PipeTransform {
    // dato | calculadora: otroDato
    transform(value: any, args: any) {
        let operaciones = `
            Suma: ${value + args} -
            Resta: ${value - args} -
            Multiplicacion: ${value * args} -
            Division: ${value / args}
        `;

        return operaciones;
    }
}