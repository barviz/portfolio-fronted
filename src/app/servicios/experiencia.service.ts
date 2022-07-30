import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  URL = 'http://localhost:8080'

  constructor(private httpClient: HttpClient) { }

  public crearExperiencia(experiencia: Experiencia): Observable<Experiencia>{
    return this.httpClient.post<Experiencia>(this.URL+ '/experiencia/crear', experiencia);
  }

  public actualizarExperiencia(experiencia: Experiencia): Observable<Experiencia>{
    return this.httpClient.put<Experiencia>(this.URL+ '/experiencia/actualizar', experiencia);
  }

  public eliminarExperiencia(id: number): Observable<void>{
    return this.httpClient.delete<void>(this.URL+ `/experiencia/eliminar/${id}`);
  }

  public listarExperiencia(): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.URL+ '/experiencia/listar');
  }

  public buscarExperienciaPorId(id: number): Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.URL+ `/experiencia//buscar${id}`);
  }

}
