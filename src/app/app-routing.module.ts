import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoTrabajosEstablecidosComponent } from './trabajos-establecidos/listado-trabajos-establecidos/listado-trabajos-establecidos.component';
import { ActualizarTrabajosEstablecidosComponent } from './trabajos-establecidos/actualizar-trabajos-establecidos/actualizar-trabajos-establecidos.component';
import { DetallesTrabajosEstablecidosComponent } from './trabajos-establecidos/detalles-trabajos-establecidos/detalles-trabajos-establecidos.component';
import { RegistrarTrabajosEstablecidosComponent } from './trabajos-establecidos/registrar-trabajos-establecidos/registrar-trabajos-establecidos.component';
import { ActualizarColaboracionComponent } from './trabajos-colaboraciones/actualizar-colaboracion/actualizar-colaboracion.component';
import { DetalleColaboracionComponent } from './trabajos-colaboraciones/detalle-colaboracion/detalle-colaboracion.component';
import { ListadoColaboracionComponent } from './trabajos-colaboraciones/listado-colaboracion/listado-colaboracion.component';
import { ActualizarTrabajosMedidaComponent } from './trabajos-medida/actualizar-trabajos-medida/actualizar-trabajos-medida.component';
import { ListadoTrabajosMedidaComponent } from './trabajos-medida/listado-trabajos-medida/listado-trabajos-medida.component';
import { DetalleTrabajosMedidaComponent } from './trabajos-medida/detalle-trabajos-medida/detalle-trabajos-medida.component';
import { RegistrarTrabajosMedidaComponent } from './trabajos-medida/registrar-trabajos-medida/registrar-trabajos-medida.component';
import { RegistrarColaboracionComponent } from './trabajos-colaboraciones/registrar-colaboracion/registrar-colaboracion.component';

const routes: Routes = [

{  path : 'actualizar-trabajos/:id', component: ActualizarTrabajosEstablecidosComponent},
{  path : 'listado-trabajos', component: ListadoTrabajosEstablecidosComponent},
{  path : 'detalles-trabajos/:id', component: DetallesTrabajosEstablecidosComponent},
{  path : 'listado-trabajos/registrar-trabajos', component: RegistrarTrabajosEstablecidosComponent},

{  path : 'actualizar-colaboraciones/:id', component: ActualizarColaboracionComponent},
{  path : 'listado-colaboraciones', component: ListadoColaboracionComponent},
{  path : 'detalles-colaboraciones/:id', component: DetalleColaboracionComponent},
{  path : 'registrar-colaboraciones', component: RegistrarColaboracionComponent},

{  path : 'actualizar-a-medida/:id', component: ActualizarTrabajosMedidaComponent},
{  path : 'listado-a-medida', component: ListadoTrabajosMedidaComponent},
{  path : 'detalles-a-medida/:id', component: DetalleTrabajosMedidaComponent},
{  path : 'registrar-a-medida', component: RegistrarTrabajosMedidaComponent},

{  path : '', redirectTo: 'inicio', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
