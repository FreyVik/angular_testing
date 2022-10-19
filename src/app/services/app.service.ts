import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AppService {

    getEnumIndex(enumerator: object, value: string): number {
        return Object.keys(enumerator).indexOf(value)
    }
}