import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Proyecto } from 'src/app/model/proyecto.model';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-logros',
  templateUrl: './logros.component.html',
  styleUrls: ['./logros.component.css']
})
export class LogrosComponent implements OnInit {

  public proyectos: Proyecto[] = [];
  public editProyecto: Proyecto | undefined;
  public deleteProyecto: Proyecto | undefined;

  constructor(public proyectoService: ProyectoService) { }

  ngOnInit(): void {
    this.getProyecto();
  }

  getProyecto(): void {
    this.proyectoService.listarProyecto().subscribe({
      next: (response: Proyecto[]) => {
        this.proyectos = response;
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
  }
  public onOpenModal(mode: String, proyecto?: Proyecto): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addProyectoModal');
    } else if (mode === 'delete') {
      this.deleteProyecto = proyecto;
      button.setAttribute('data-target', '#deleteProyectoModal');
    } else if (mode === 'edit') {
      this.editProyecto = proyecto;
      button.setAttribute('data-target', '#editProyectoModal');
    }

    container?.appendChild(button);
    button.click();
  }

  public onAddProyecto(addForm: NgForm) {
    document.getElementById('add-proyecto-form')?.click();
    this.proyectoService.crearProyecto(addForm.value).subscribe({
      next: (response: Proyecto) => {
        console.log(response);
        this.getProyecto();
        addForm.reset();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      },
    });
  }

  public onUpdateProyecto(proyecto: Proyecto): void {
    this.editProyecto = proyecto;
    document.getElementById('edit-proyecto-form')?.click();
    this.proyectoService.actualizarProyecto(proyecto).subscribe({
      next: (response: Proyecto) => {
        console.log(response);
        this.getProyecto();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  public onDeleteProyecto(idProyecto: number): void {
    this.proyectoService.eliminarProyecto(idProyecto).subscribe({
      next: (response: void) => {
        console.log(response);
        this.getProyecto();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }
}
