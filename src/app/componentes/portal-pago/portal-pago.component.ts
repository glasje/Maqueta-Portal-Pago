import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portal-pago',
  templateUrl: './portal-pago.component.html',
  styleUrls: ['./portal-pago.component.css']
})
export class PortalPagoComponent implements OnInit {
  fechaActual : any;
  constructor() { }

  ngOnInit() {
    this.ExtraerFecha();
  }
  ExtraerFecha(){
    this.fechaActual= Date.now();
    console.log(this.fechaActual);
    return this.fechaActual;
  }
}
