import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from 'src/app/empleado';
import { EmpleadoService } from 'src/app/empleado.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-colaboracion',
  templateUrl: './registrar-colaboracion.component.html',
  styleUrls: ['./registrar-colaboracion.component.css']
})
export class RegistrarColaboracionComponent implements OnInit {

  empleado: Empleado = new Empleado();
  constructor(private empleadoServicio:EmpleadoService, private router:Router) { }

  ngOnInit(): void {
  }

  guardarEmpleado(){
    this.empleadoServicio.registrarEmpleado(this.empleado).subscribe(dato =>{
      console.log(dato);
      this.volverListaEmpleados();
    }, error =>console.log(error))
  }

  volverListaEmpleados(){
    this.router.navigate(['/inicio']);
  }

  onSubmit(){
    this.guardarEmpleado();
  }

}
