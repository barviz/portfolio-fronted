import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tecnologia } from './../model/tecnologia.model';

@Injectable({
  providedIn: 'root'
})
export class TecnologiaService {

  URL = 'http://localhost:8080/tecnologia/'

  constructor(private httpClient: HttpClient) { }

  public crearTecnologia(tecnologia: Tecnologia): Observable<Tecnologia>{
    return this.httpClient.post<Tecnologia>(this.URL+ '', tecnologia);
  }

  public actualizarTecnologia(tecnologia: Tecnologia): Observable<Tecnologia>{
    return this.httpClient.put<Tecnologia>(this.URL+ '', tecnologia);
  }

  public eliminarTecnologia(id: number): Observable<void>{
    return this.httpClient.delete<void>(this.URL+ `/${id}`);
  }

  public listarTecnologia(): Observable<Tecnologia[]>{
    return this.httpClient.get<Tecnologia[]>(this.URL+ 'lista');
  }

  public buscarTecnologiaPorId(id: number): Observable<Tecnologia>{
    return this.httpClient.get<Tecnologia>(this.URL+ `/${id}`);
  }

}