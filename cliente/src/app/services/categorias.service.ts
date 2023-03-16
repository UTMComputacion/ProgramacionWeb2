import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) { }
  list() {

    return this.http.get(`${environment.API_URI}/categorias/`);
  }
  eliminar(id: any) {

    return this.http.delete(`${environment.API_URI}/categorias/` + id);
  }

  insertar(categoria: any) {
    return this.http.post(`${environment.API_URI}/categorias/`, categoria);

  }

  listOne(id: any) {
    return this.http.get(`${environment.API_URI}/categorias/` + id);

  }
  update(categoria: any) {
    return this.http.put(`${environment.API_URI}/categorias/` + categoria.id, categoria);

  }
}
