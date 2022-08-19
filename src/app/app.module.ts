import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { RegistrarEmpleadoComponent } from './registrar-empleado/registrar-empleado.component';
import { FormsModule } from '@angular/forms';
import { ActualizarEmpleadoComponent } from './actualizar-empleado/actualizar-empleado.component';
import { EmpleadoDetallesComponent } from './empleado-detalles/empleado-detalles.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListadoColaboracionComponent } from './trabajos-colaboraciones/listado-colaboracion/listado-colaboracion.component';
import { DetalleColaboracionComponent } from './trabajos-colaboraciones/detalle-colaboracion/detalle-colaboracion.component';
import { DetallesTrabajosEstablecidosComponent } from './trabajos-establecidos/detalles-trabajos-establecidos/detalles-trabajos-establecidos.component';
import { ActualizarTrabajosEstablecidosComponent } from './trabajos-establecidos/actualizar-trabajos-establecidos/actualizar-trabajos-establecidos.component';
import { ListadoTrabajosEstablecidosComponent } from './trabajos-establecidos/listado-trabajos-establecidos/listado-trabajos-establecidos.component';
import { RegistrarTrabajosEstablecidosComponent } from './trabajos-establecidos/registrar-trabajos-establecidos/registrar-trabajos-establecidos.component';
import { RegistrarTrabajosMedidaComponent } from './trabajos-medida/registrar-trabajos-medida/registrar-trabajos-medida.component';
import { DetalleTrabajosMedidaComponent } from './trabajos-medida/detalle-trabajos-medida/detalle-trabajos-medida.component';
import { ListadoTrabajosMedidaComponent } from './trabajos-medida/listado-trabajos-medida/listado-trabajos-medida.component';
import { ActualizarTrabajosMedidaComponent } from './trabajos-medida/actualizar-trabajos-medida/actualizar-trabajos-medida.component';
import { ActualizarColaboracionComponent } from './trabajos-colaboraciones/actualizar-colaboracion/actualizar-colaboracion.component';
import { RegistrarColaboracionComponent } from './trabajos-colaboraciones/registrar-colaboracion/registrar-colaboracion.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaEmpleadosComponent,
    RegistrarEmpleadoComponent,
    ActualizarEmpleadoComponent,
    EmpleadoDetallesComponent,
    ListadoColaboracionComponent,
    DetalleColaboracionComponent,
    DetallesTrabajosEstablecidosComponent,
    ActualizarTrabajosEstablecidosComponent,
    ListadoTrabajosEstablecidosComponent,
    RegistrarTrabajosEstablecidosComponent,
    RegistrarTrabajosMedidaComponent,
    DetalleTrabajosMedidaComponent,
    ListadoTrabajosMedidaComponent,
    ActualizarTrabajosMedidaComponent,
    ActualizarColaboracionComponent,
    RegistrarColaboracionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
