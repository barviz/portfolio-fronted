import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  public experiencias: Experiencia[] = [];

  constructor(public experienciaService: ExperienciaService) { }

  ngOnInit(): void {
    this.listarExperiencia();
  }

  public listarExperiencia():void{
    this.experienciaService.listarExperiencia().subscribe({
       next:(Response: Experiencia[]) =>{
      this.experiencias=Response;
    } })
  }

}
