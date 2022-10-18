import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PeticioneService {
  public url: string

  constructor(
    private _http: HttpClient
  ) {
    this.url = 'https://reqres.in'
  }

  getUser(id: number) {
    return this._http.get(`${this.url}/api/users/${id}`);
  }
}
