import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProductoServices {

  constructor(private http: HttpClient) { }
  list(){
    
    return this.http.get(`${environment.API_URI}/productos/`);
  }
  insertar(producto:any){
    return this.http.post(`${environment.API_URI}/productos/`,producto);

  }

  listOne(id:any){
    return this.http.get(`${environment.API_URI}/productos/`+id);

  }
  update(producto:any){
    return this.http.put(`${environment.API_URI}/productos/update/`+producto.id,producto);

  }
  eliminar(id: any) {

    return this.http.delete(`${environment.API_URI}/productos/delete/` + id);
  }
}
