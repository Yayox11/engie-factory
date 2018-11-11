import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AutosService} from '../services/autos.service';
import {Cliente} from '../structures/cliente';
import {Autos} from '../structures/autos';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  createform = new FormGroup({
    nombre: new FormControl(''),
    rut: new FormControl(''),
    auto: new FormControl('')
  });
  clientes: Cliente[];
  Autos: Autos[];
  id: any;

  cliente: Cliente = new Cliente();

  constructor(private autosService: AutosService) { }

  ngOnInit() {
    this.autosService.getClientes().subscribe(rows => {
      this.clientes = rows;
      console.log(this.clientes);
    });
    this.autosService.getAutos().subscribe(rows => {
      this.Autos = rows;
    });
  }
  onSubmit() {
    const res = this.createform.controls['auto'].value;
    const split = res.split(' ');
    this.autosService.getAutoId(split[0], split[1]).subscribe(id_auto => {
      this.id = id_auto['id_auto'];
      this.cliente.nombre = this.createform.controls['nombre'].value;
      this.cliente.rut = this.createform.controls['rut'].value;
      this.cliente.auto_id = this.id;
      this.autosService.createCliente(this.cliente).subscribe(
        data => console.log(data),
        error => console.log(error));
      this.cliente = new Cliente();
      window.location.reload();
    });
  }

  onDelete(event, cliente) {
    this.autosService.deleteCliente(cliente).subscribe(
      data => {
        console.log(data);
      },
      error => console.log(error));
    window.location.reload();
  }

}
