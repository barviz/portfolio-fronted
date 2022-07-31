import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from '../model/habilidad.model';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {

  URL = 'https://portfolio-blv.herokuapp.com'

  constructor(private httpClient: HttpClient) { }

  public crearHabilidad(habilidad: Habilidad): Observable<Habilidad>{
    return this.httpClient.post<Habilidad>(this.URL+ '/habilidad/crear', habilidad);
  }

  public actualizarHabilidad(habilidad: Habilidad): Observable<Habilidad>{
    return this.httpClient.put<Habilidad>(this.URL+ '/habilidad/actualizar', habilidad);
  }

  public eliminarHabilidad(id: number): Observable<void>{
    return this.httpClient.delete<void>(this.URL+ `/habilidad/eliminar/${id}`);
  }

  public listarHabilidad(): Observable<Habilidad[]>{
    return this.httpClient.get<Habilidad[]>(this.URL+ '/habilidad/listar');
  }

  public buscarHabilidadPorId(id: number): Observable<Habilidad>{
    return this.httpClient.get<Habilidad>(this.URL+ `/habilidad/buscar/${id}`);
  }

}
