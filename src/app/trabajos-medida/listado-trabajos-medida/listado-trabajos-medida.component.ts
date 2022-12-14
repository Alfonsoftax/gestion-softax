import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/empleado';
import { EmpleadoService } from 'src/app/empleado.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-listado-trabajos-medida',
  templateUrl: './listado-trabajos-medida.component.html',
  styleUrls: ['./listado-trabajos-medida.component.css']
})
export class ListadoTrabajosMedidaComponent implements OnInit {

  empleados:Empleado[];

  constructor(private empleadoServicio:EmpleadoService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerEmpleado();
  }

  private obtenerEmpleado(){
    this.empleadoServicio.obtenerListaDeEmpleados().subscribe(dato =>{
      this.empleados = dato;
    })
  }

  public actualizarEmpleado(id:number){
    this.router.navigate(['actualizar', id]);
  }

  eliminarEmpleado(id:number){
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar al empleado",
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
        this.empleadoServicio.eliminarEmpleado(id).subscribe(dato => {
          console.log(dato);
          this.obtenerEmpleado();
          swal(
            'Empleado eliminado',
            'El empleado ha sido eliminado con exito',
            'success'
          )
        })
      }
    })
  }

  verDetalles(id:number){
    this.router.navigate(['detalles', id]);

  }

}
