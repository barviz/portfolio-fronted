import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersonaResumen } from '../model/persona-resumen.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaResumenService {

  URL = 'https://portfolio-blv-bar25lo.koyeb.app';
  //URL = 'https://portfolio-blv.herokuapp.com'

  constructor(private httpClient: HttpClient) { }

  public crearPersonaResumen(personaResumen: PersonaResumen): Observable<PersonaResumen>{
    return this.httpClient.post<PersonaResumen>(this.URL+ '/persona-resumen/crear', personaResumen);
  }

  public actualizarPersonaResumen(personaResumen: PersonaResumen): Observable<PersonaResumen>{
    return this.httpClient.put<PersonaResumen>(this.URL+ '/persona-resumen/actualizar', personaResumen);
  }

  public eliminarPersonaResumen(id: number): Observable<void>{
    return this.httpClient.delete<void>(this.URL+ `/persona-resumen/eliminar/${id}`);
  }

  public listarPersonaResumen(): Observable<PersonaResumen>{
    return this.httpClient.get<PersonaResumen>(this.URL+ '/persona-resumen/listar');
  }

  public buscarPersonaResumenPorId(id: number): Observable<PersonaResumen>{
    return this.httpClient.get<PersonaResumen>(this.URL+ `/persona-resumen/buscar/1`);
  }
}
