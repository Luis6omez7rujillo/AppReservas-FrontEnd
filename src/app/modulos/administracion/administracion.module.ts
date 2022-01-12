import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { BuscarUsuarioComponent } from './usuarios/buscar-usuario/buscar-usuario.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuarios/eliminar-usuario/eliminar-usuario.component';
import { CrearEscenarioComponent } from './escenarios/crear-escenario/crear-escenario.component';
import { BuscarEscenarioComponent } from './escenarios/buscar-escenario/buscar-escenario.component';
import { EditarEscenarioComponent } from './escenarios/editar-escenario/editar-escenario.component';
import { EliminarEscenarioComponent } from './escenarios/eliminar-escenario/eliminar-escenario.component';


@NgModule({
  declarations: [
    CrearUsuarioComponent,
    BuscarUsuarioComponent,
    EditarUsuarioComponent,
    EliminarUsuarioComponent,
    CrearEscenarioComponent,
    BuscarEscenarioComponent,
    EditarEscenarioComponent,
    EliminarEscenarioComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
