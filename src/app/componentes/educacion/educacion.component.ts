import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  public educaciones: Educacion[] = [];

  constructor(public educacionService: EducacionService) { }

  ngOnInit(): void {
    this.listarEducacion();
  }

  public listarEducacion():void{
    this.educacionService.listarEducacion().subscribe({
       next:(Response: Educacion[]) =>{
      this.educaciones=Response;
    } })
  }

}
