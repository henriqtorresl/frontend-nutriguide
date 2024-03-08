import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import UsuarioNutricionista from 'src/app/interfaces/UsuarioNutricionista';
import { Constantes } from 'src/app/shared/constantes/constantes';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient
  ) { }

  login(usuario: any): Observable<any> {
    return this.httpClient.post(`${Constantes.nutriguideApi}/login`, usuario)
    .pipe(take(1));
  }

  cadastro(usuario: UsuarioNutricionista): Observable<any> {
    return this.httpClient.post(`${Constantes.nutriguideApi}/cadastro`, usuario)
    .pipe(take(1));
  }

}