import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  URL = 'http://localhost:8080/educacion/'

  constructor(private httpClient: HttpClient) { }

  public crearEducacion(educacion: Educacion): Observable<Educacion>{
    return this.httpClient.post<Educacion>(this.URL+ '', educacion);
  }

  public actualizarEducacion(educacion: Educacion): Observable<Educacion>{
    return this.httpClient.put<Educacion>(this.URL+ '', educacion);
  }

  public eliminarEducacion(id: number): Observable<void>{
    return this.httpClient.delete<void>(this.URL+ `/${id}`);
  }

  public listarEducacion(): Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.URL+ 'lista');
  }

  public buscarEducacionPorId(id: number): Observable<Educacion>{
    return this.httpClient.get<Educacion>(this.URL+ `/${id}`);
  }

}
