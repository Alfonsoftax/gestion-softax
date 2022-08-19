import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/empleado';
import { EmpleadoService } from 'src/app/empleado.service';

@Component({
  selector: 'app-registrar-trabajos-medida',
  templateUrl: './registrar-trabajos-medida.component.html',
  styleUrls: ['./registrar-trabajos-medida.component.css']
})
export class RegistrarTrabajosMedidaComponent implements OnInit {

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
