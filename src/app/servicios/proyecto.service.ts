import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  URL = 'http://localhost:8080/proyecto/'

  constructor(private httpClient: HttpClient) { }

  public crearProyecto(proyecto: Proyecto): Observable<Proyecto>{
    return this.httpClient.post<Proyecto>(this.URL+ 'crear', proyecto);
  }

  public actualizarProyecto(proyecto: Proyecto): Observable<Proyecto>{
    return this.httpClient.put<Proyecto>(this.URL+ 'actualizar', proyecto);
  }

  public eliminarProyecto(id: number): Observable<void>{
    return this.httpClient.delete<void>(this.URL+ `eliminar/${id}`);
  }

  public listarProyecto(): Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.URL+ 'listar');
  }

  public buscarProyectoPorId(id: number): Observable<Proyecto>{
    return this.httpClient.get<Proyecto>(this.URL+ `buscar/${id}`);
  }

}
