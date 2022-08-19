import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Empleado } from 'src/app/empleado';
import { EmpleadoService } from 'src/app/empleado.service';
import { Contacto } from 'src/app/entitys/contacto';
import swal from 'sweetalert2';
import { TrabajoEstablecidoService } from '../services/trabajo-establecido.service';

@Component({
  selector: 'app-detalles-trabajos-establecidos',
  templateUrl: './detalles-trabajos-establecidos.component.html',
  styleUrls: ['./detalles-trabajos-establecidos.component.css']
})
export class DetallesTrabajosEstablecidosComponent implements OnInit {

  id:number;
  contacto:Contacto;
  constructor(private route:ActivatedRoute,private contactoServicio:TrabajoEstablecidoService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.contacto = new Empleado();
    this.contactoServicio.obtenerContactoPorId(this.id).subscribe(dato => {
      this.contacto = dato;
      swal(`Detalles del trabajo establecido ${this.contacto.nombre}`);
    });
  }

}
