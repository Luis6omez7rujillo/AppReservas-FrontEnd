import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { IdentificacionComponent } from './identificacion/identificacion.component';
import { RestablecerClaveComponent } from './restablecer-clave/restablecer-clave.component';


@NgModule({
  declarations: [
    IdentificacionComponent,
    RestablecerClaveComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule
  ]
})
export class SeguridadModule { }
