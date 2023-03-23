import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { retry } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  //para acceder servicios http
  constructor(private http: HttpClient) { }
  VerificarUsuario(correo: any, password: any) {
    let usuario = {
      'correo': correo,
      'password': password
    }
    console.log(`${environment.API_URI}/usuarios/verificarUsuario`)
    return this.http.post(`${environment.API_URI}/usuarios/verificarUsuario`, usuario);
  }
  list() {

    return this.http.get(`${environment.API_URI}/usuarios/`);
  }
  insertar(usuario: any) {
    return this.http.post(`${environment.API_URI}/usuarios/`, usuario);

  }
  CambiarPassword(usuario: any) {
    return this.http.post(`${environment.API_URI}/usuarios/CambiarPassword`, usuario);

  }

  listOne(id: any) {
    return this.http.get(`${environment.API_URI}/usuarios/` + id);

  }
  update(usuario: any) {
    return this.http.put(`${environment.API_URI}/usuarios/` + usuario.id, usuario);

  }
}

