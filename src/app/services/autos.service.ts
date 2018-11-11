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

  getAutos(): Observable<Autos[]> {
    return this.http.get<Autos[]>('/api/v1/autos');
  }

  deleteAutos(id: number) {
    console.log('/api/v1/d_autos/' + id);
    return this.http.delete('/api/v1/d_autos/' + id);
  }

  createAutos(auto: Object) {
    return this.http.post('api/v1/crear_autos', auto);
  }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>('/api/v1/clientes');
  }

  deleteCliente(id: number) {
    console.log('/api/v1/d_cliente/' + id);
    return this.http.delete('/api/v1/d_cliente/' + id);
  }

  createCliente(cliente: Object) {
    return this.http.post('api/v1/crear_cliente', cliente);
  }

  getAutoId(marca: string, modelo: string) {
    return this.http.get('api/v1/autos_form/' + marca + '/' + modelo);
  }
}
