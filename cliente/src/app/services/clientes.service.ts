import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../environments/environment'
import { headers } from '../models/Header';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }
  list(){
    
    return this.http.get(`${environment.API_URI}/clientes/`, {headers: headers});
  }
  insertar(cliente:any){
    return this.http.post(`${environment.API_URI}/clientes/`,cliente);

  }

  listOne(id:any){
    return this.http.get(`${environment.API_URI}/clientes/`+id);

  }
  update(cliente:any){
    return this.http.put(`${environment.API_URI}/clientes/`+cliente.id,cliente);

  }
  eliminar(id: any) {

    return this.http.delete(`${environment.API_URI}/clientes/` + id);
  }
}
