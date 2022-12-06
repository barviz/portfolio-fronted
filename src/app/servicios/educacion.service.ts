import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  private URL = 'https://portfolio-blv-bar25lo.koyeb.app';
  //private URL = 'https://portfolio-blv.herokuapp.com'

  constructor(private httpClient: HttpClient) { }

  public crearEducacion(educacion: Educacion): Observable<Educacion>{
    return this.httpClient.post<Educacion>(this.URL+ '/educacion/crear', educacion);
  }

  public actualizarEducacion(educacion: Educacion): Observable<Educacion>{
    return this.httpClient.put<Educacion>(this.URL+ '/educacion/actualizar', educacion);
  }

  public eliminarEducacion(id: number): Observable<void>{
    return this.httpClient.delete<void>(this.URL+ `/educacion/eliminar/${id}`);
  }

  public listarEducacion(): Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.URL+ '/educacion/listar');
  }

  public buscarEducacionPorId(id: number): Observable<Educacion>{
    return this.httpClient.get<Educacion>(this.URL+ `/educacion/buscar/${id}`);
  }

}
