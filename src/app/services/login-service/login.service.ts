import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { Constantes } from 'src/app/shared/constantes/constantes';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpClient: HttpClient
  ) { }

  login(usuario: any): Observable<any> {
    return this.httpClient.post(`${Constantes.nutriguideApi}/login`, usuario)
    .pipe(take(1));
  }

}