import { Component, OnInit } from '@angular/core';
import { Tecnologia } from 'src/app/model/tecnologia.model';
import { TecnologiaService } from 'src/app/servicios/tecnologia.service';

@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.css']
})
export class AptitudesComponent implements OnInit {

  public tecnologias: Tecnologia[] = [];

  constructor(public tecnologiaService: TecnologiaService) { }

  ngOnInit(): void {
    this.listarTecnologia();
  }

  public listarTecnologia():void{
    this.tecnologiaService.listarTecnologia().subscribe({
       next:(Response: Tecnologia[]) =>{
      this.tecnologias=Response;
    } })
  }
}
