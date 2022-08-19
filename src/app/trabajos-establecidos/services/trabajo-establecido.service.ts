import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacto } from 'src/app/entitys/contacto';

@Injectable({
  providedIn: 'root'
})
export class TrabajoEstablecidoService {

  //URL que obtiene el listado de los contactos desde el backend
  private baseUrl ="http://localhost:8080/api/v1/contacto";

  constructor(private httpClient: HttpClient) {  }

  obtenerListaDeContactos(): Observable<Contacto[]>{
    return this.httpClient.get<Contacto[]>(`${this.baseUrl}`);
  }

  //Este método registra un contacto
  registrarContacto(contacto:Contacto): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,contacto);
  }

    //este metodo sirve para obtener o buscar un contacto
    obtenerContactoPorId(id:number):Observable<Contacto>{
      return this.httpClient.get<Contacto>(`${this.baseUrl}/${id}`);
    }

    //este metodo sirve para actualizar el contacto
    actualizarContacto(id:number,contacto:Contacto) : Observable<Object>{
      return this.httpClient.put(`${this.baseUrl}/${id}`,contacto);
    }

        //este metodo sirve para eliminar el contacto
    eliminarContacto(id:number) : Observable<Object>{
      return this.httpClient.delete(`${this.baseUrl}/${id}`);
    }

}
