import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contacto } from 'src/app/entitys/contacto';
import swal from 'sweetalert2';
import { TrabajoEstablecidoService } from '../services/trabajo-establecido.service';

@Component({
  selector: 'app-listado-trabajos-establecidos',
  templateUrl: './listado-trabajos-establecidos.component.html',
  styleUrls: ['./listado-trabajos-establecidos.component.css']
})
export class ListadoTrabajosEstablecidosComponent implements OnInit {

  contactos:Contacto[];

  constructor(private contactoServicio:TrabajoEstablecidoService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerContacto();
  }

  private obtenerContacto(){
    this.contactoServicio.obtenerListaDeContactos().subscribe(dato =>{
      this.contactos = dato;
    })
  }

  public actualizarContacto(id:number){
    this.router.navigate(['actualizar-trabajos', id]);
  }

  eliminarContacto(id:number){
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar al contacto",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si , elimínalo',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) => {
      if(result.value){
        this.contactoServicio.eliminarContacto(id).subscribe(dato => {
          console.log(dato);
          this.obtenerContacto();
          swal(
            'contacto eliminado',
            'El contacto ha sido eliminado con exito',
            'success'
          )
        })
      }
    })
  }

  verDetalles(id:number){
    this.router.navigate(['detalles-trabajos', id]);

  }

}
