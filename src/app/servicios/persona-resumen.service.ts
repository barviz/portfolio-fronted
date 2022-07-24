import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersonaResumen } from '../model/persona-resumen.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaResumenService {

  URL = 'http://localhost:8080/persona-resumen/'

  constructor(private httpClient: HttpClient) { }

  public crearPersonaResumen(personaResumen: PersonaResumen): Observable<PersonaResumen>{
    return this.httpClient.post<PersonaResumen>(this.URL+ 'crear', personaResumen);
  }

  public actualizarPersonaResumen(personaResumen: PersonaResumen): Observable<PersonaResumen>{
    return this.httpClient.put<PersonaResumen>(this.URL+ 'actualizar', personaResumen);
  }

  public eliminarPersonaResumen(id: number): Observable<void>{
    return this.httpClient.delete<void>(this.URL+ `eliminar/${id}`);
  }

  public listarPersonaResumen(): Observable<PersonaResumen>{
    return this.httpClient.get<PersonaResumen>(this.URL+ 'listar');
  }

  public buscarPersonaResumenPorId(id: number): Observable<PersonaResumen>{
    return this.httpClient.get<PersonaResumen>(this.URL+ `buscar/1`);
  }
}
