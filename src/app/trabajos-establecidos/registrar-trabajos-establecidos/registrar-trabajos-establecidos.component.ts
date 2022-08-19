import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contacto } from 'src/app/entitys/contacto';
import { TrabajoEstablecidoService } from '../services/trabajo-establecido.service';

@Component({
  selector: 'app-registrar-trabajos-establecidos',
  templateUrl: './registrar-trabajos-establecidos.component.html',
  styleUrls: ['./registrar-trabajos-establecidos.component.css']
})
export class RegistrarTrabajosEstablecidosComponent implements OnInit {

  contacto: Contacto = new Contacto();
  constructor(private contactoServicio:TrabajoEstablecidoService, private router:Router) { }

  ngOnInit(): void {
  }

  guardarContacto(){
    this.contactoServicio.registrarContacto(this.contacto).subscribe(dato =>{
      console.log(dato);
      this.volverListaContactos();
    }, error =>console.log(error))
  }

  volverListaContactos(){
    this.router.navigate(['/listado-trabajos']);
  }

  onSubmit(){
    this.guardarContacto();
  }

}
