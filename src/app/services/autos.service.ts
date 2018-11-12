import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/internal/operators';
import {Cliente} from '../structures/cliente';
import {Autos} from '../structures/autos';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AutosService {

  constructor(private http: HttpClient) {}

  // Obtener Autos
  getAutos(): Observable<Autos[]> {
    return this.http.get<Autos[]>('/api/v1/autos');
  }
  // Borrar Autos
  deleteAutos(id: number) {
    console.log('/api/v1/d_autos/' + id);
    return this.http.delete('/api/v1/d_autos/' + id);
  }
  // Crear Autos
  createAutos(auto: Object) {
    return this.http.post('api/v1/crear_autos', auto);
  }
  // Obtener Clientes
  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>('/api/v1/clientes');
  }
  // Borrar Clientes
  deleteCliente(id: number) {
    console.log('/api/v1/d_cliente/' + id);
    return this.http.delete('/api/v1/d_cliente/' + id);
  }
  // Crear Clientes
  createCliente(cliente: Object) {
    return this.http.post('api/v1/crear_cliente', cliente);
  }
  // Obtener Id del auto
  getAutoId(marca: string, modelo: string) {
    return this.http.get('api/v1/autos_form/' + marca + '/' + modelo);
  }
}
