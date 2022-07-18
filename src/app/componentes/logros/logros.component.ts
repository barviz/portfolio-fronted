import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto.model';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-logros',
  templateUrl: './logros.component.html',
  styleUrls: ['./logros.component.css']
})
export class LogrosComponent implements OnInit {

  public proyectos: Proyecto[] = [];


  constructor(public proyectoService: ProyectoService) { }

  ngOnInit(): void {
    this.listarProyecto();
  }

  public listarProyecto():void{
    this.proyectoService.listarProyecto().subscribe({
       next:(Response: Proyecto[]) =>{
      this.proyectos=Response;
    } })
  }

}
