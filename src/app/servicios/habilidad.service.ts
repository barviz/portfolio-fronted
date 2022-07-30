import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from '../model/habilidad.model';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {

  URL = 'http://localhost:8080/habilidad/'

  constructor(private httpClient: HttpClient) { }

  public crearHabilidad(habilidad: Habilidad): Observable<Habilidad>{
    return this.httpClient.post<Habilidad>(this.URL+ 'crear', habilidad);
  }

  public actualizarHabilidad(habilidad: Habilidad): Observable<Habilidad>{
    return this.httpClient.put<Habilidad>(this.URL+ 'actualizar', habilidad);
  }

  public eliminarHabilidad(id: number): Observable<void>{
    return this.httpClient.delete<void>(this.URL+ `eliminar/${id}`);
  }

  public listarHabilidad(): Observable<Habilidad[]>{
    return this.httpClient.get<Habilidad[]>(this.URL+ 'listar');
  }

  public buscarHabilidadPorId(id: number): Observable<Habilidad>{
    return this.httpClient.get<Habilidad>(this.URL+ `buscar/${id}`);
  }

}
