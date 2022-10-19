export class Asignatura {

    constructor(
        public nombre: string,
        public dificultad: Dificultad
    ){}
}

export enum Dificultad {
    alta = 'alta',
    media = 'media',
    baja = 'baja'

}

export namespace Dificultad {

    export function getDificultadIndex(enumerator: object, asignatura: Asignatura): number {
        return Object.keys(enumerator).indexOf(asignatura.dificultad)
    }
}