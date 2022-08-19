import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contacto } from 'src/app/entitys/contacto';
import swal from 'sweetalert2';
import { TrabajoEstablecidoService } from '../services/trabajo-establecido.service';

@Component({
  selector: 'app-actualizar-trabajos-establecidos',
  templateUrl: './actualizar-trabajos-establecidos.component.html',
  styleUrls: ['./actualizar-trabajos-establecidos.component.css']
})
export class ActualizarTrabajosEstablecidosComponent implements OnInit {

  id:number;
  contacto:Contacto = new Contacto();
  constructor(private contactoService:TrabajoEstablecidoService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.contactoService.obtenerContactoPorId(this.id).subscribe(dato =>{
      this.contacto = dato;
    },error => console.log(error));
  }

  irAlaListaDeContactos(){
    this.router.navigate(['/listado-trabajos']);
    swal('Empleado actualizado',`El empleado ${this.contacto.nombre} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    this.contactoService.actualizarContacto(this.id,this.contacto).subscribe(dato => {
      this.irAlaListaDeContactos();
    },error => console.log(error));
  }

}
