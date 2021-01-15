import { Component, OnInit } from '@angular/core';
import { Personas } from '../../Modelos/personas'
@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.css']
})
export class EjemploComponent implements OnInit {
  
  public per = new Personas("Dulce Jazmin","Antunez Rios",19,"Femenino")

constructor() {
  }
  ngOnInit(): void {
  }

}
