import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Empleado } from 'src/app/empleado';
import { EmpleadoService } from 'src/app/empleado.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-trabajos-medida',
  templateUrl: './detalle-trabajos-medida.component.html',
  styleUrls: ['./detalle-trabajos-medida.component.css']
})
export class DetalleTrabajosMedidaComponent implements OnInit {

  id:number;
  empleado:Empleado;
  constructor(private route:ActivatedRoute,private empleadoServicio:EmpleadoService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.empleado = new Empleado();
    this.empleadoServicio.obtenerEmpleadoPorId(this.id).subscribe(dato => {
      this.empleado = dato;
      swal(`Detalles del empleado ${this.empleado.nombre}`);
    });
  }

}
