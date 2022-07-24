import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersonaDatos } from '../model/persona-datos.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaDatosService {

  URL = 'http://localhost:8080/persona-datos/'

  constructor(private httpClient: HttpClient) { }

  /*public getPersona(): Observable<Persona>{
    return this.httpC.get<Persona>(this.URL+ '1')
  }*/

  public crearPersonaDatos(personaDatos: PersonaDatos): Observable<PersonaDatos>{
    return this.httpClient.post<PersonaDatos>(this.URL+ 'crear', personaDatos);
  }

  public actualizarPersonaDatos(personaDatos: PersonaDatos): Observable<PersonaDatos>{
    return this.httpClient.put<PersonaDatos>(this.URL+ 'actualizar', personaDatos);
  }

  public eliminarPersonaDatos(id: number): Observable<void>{
    return this.httpClient.delete<void>(this.URL+ `eliminar/${id}`);
  }

  public listarPersonaDatos(): Observable<PersonaDatos>{
    return this.httpClient.get<PersonaDatos>(this.URL+ 'listar');
  }

  public buscarPersonaDatosPorId(id: number): Observable<PersonaDatos>{
    return this.httpClient.get<PersonaDatos>(this.URL+ `buscar/1`);
  }
}
