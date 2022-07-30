import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersonaDatos } from '../model/persona-datos.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaDatosService {

  URL = 'http://localhost:8080'

  constructor(private httpClient: HttpClient) { }

  /*public getPersona(): Observable<Persona>{
    return this.httpC.get<Persona>(this.URL+ '1')
  }*/

  public crearPersonaDatos(personaDatos: PersonaDatos): Observable<PersonaDatos>{
    return this.httpClient.post<PersonaDatos>(this.URL+ '/persona-datos/crear', personaDatos);
  }

  public actualizarPersonaDatos(personaDatos: PersonaDatos): Observable<PersonaDatos>{
    return this.httpClient.put<PersonaDatos>(this.URL+ '/persona-datos/actualizar', personaDatos);
  }

  public eliminarPersonaDatos(id: number): Observable<void>{
    return this.httpClient.delete<void>(this.URL+ `/persona-datos/eliminar/${id}`);
  }

  public listarPersonaDatos(): Observable<PersonaDatos>{
    return this.httpClient.get<PersonaDatos>(this.URL+ '/persona-datos/listar');
  }

  public buscarPersonaDatosPorId(id: number): Observable<PersonaDatos>{
    return this.httpClient.get<PersonaDatos>(this.URL+ `/persona-datos/buscar/1`);
  }
}
