import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AutosService} from '../services/autos.service';
import {Autos} from '../structures/autos';


@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.css']
})
export class AutosComponent implements OnInit {
  createform = new FormGroup({
    marca: new FormControl(''),
    modelo: new FormControl(''),
    anio: new FormControl(''),
  });
  autos: Autos[];

  auto: Autos = new Autos();

  constructor(private autosService: AutosService) { }

  ngOnInit() {
    this.autosService.getAutos().subscribe(rows => {
      this.autos = rows;
      console.log(this.autos);
    });
  }

  onSubmit() {
    this.auto.marca = this.createform.controls['marca'].value;
    this.auto.modelo = this.createform.controls['modelo'].value;
    this.auto.anio = this.createform.controls['anio'].value;
    this.autosService.createAutos(this.auto).subscribe(
      data => console.log(data),
      error => console.log(error));
    this.auto = new Autos();
    window.location.reload();
  }

  onDelete(event, auto) {
    console.log(auto);
    this.autosService.deleteAutos(auto).subscribe(
      data => {
        console.log(data);
      },
      error => console.log(error));
    window.location.reload();
  }

}
