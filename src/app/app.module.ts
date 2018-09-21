import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PortalPagoComponent } from './componentes/portal-pago/portal-pago.component';
import { routing } from './app.routing';
import { RouterModule, Routes } from '@angular/router';
import { FacturasComponent } from './componentes/facturas/facturas.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PortalPagoComponent,
    FacturasComponent
  ],
  imports: [
    BrowserModule,
    routing,
    RouterModule,
    HttpModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
