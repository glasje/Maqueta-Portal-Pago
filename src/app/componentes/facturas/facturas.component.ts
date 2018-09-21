import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FacturasService } from '../../servicios/facturas.service';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements  OnInit {
  //variables
  public VistaFacturas;
  items : any;
  constructor(private _facturaServices: FacturasService ) { 
    this.VistaFacturas = true;
  }

  //Metodos
  ngOnInit() {
    console.log("en construccion");
    this.CambiarVista(this.VistaFacturas);
  }
 
  CambiarVista(value){
    if(value){
      this.VistaFacturas=value;
      this._facturaServices.Datos().subscribe(
        result=>{
          console.log(result);
          this.items = result;
        },
        error=>{
          console.log(error);
        }
      );

    }else{
      this.VistaFacturas=value;
      console.log('en construccion');
    }
    
    
     
  }
  
}