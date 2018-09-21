import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PortalPagoComponent } from './componentes/portal-pago/portal-pago.component';
import { FacturasComponent } from './componentes/facturas/facturas.component';

const appRoutes: Routes = [
    { path: '', component: PortalPagoComponent },
    { path: 'PortalPago', component: PortalPagoComponent },
    {path: 'Facturas', component: FacturasComponent},


    { path: '**', component: PortalPagoComponent }

];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);