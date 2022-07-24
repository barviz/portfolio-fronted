import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  public educaciones: Educacion[] = [];
  public editEducacion: Educacion | undefined;
  public deleteEducacion: Educacion | undefined;

  constructor(
    private educacionService: EducacionService
  ) { }

  ngOnInit(): void {
    this.getEducacion();
  }

  getEducacion(): void {
    this.educacionService.listarEducacion().subscribe({
      next: (response: Educacion[]) => {
        this.educaciones = response;
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
  }
  public onOpenModal(mode: String, educacion?: Educacion): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addEducacionModal');
    } else if (mode === 'delete') {
      this.deleteEducacion = educacion;
      button.setAttribute('data-target', '#deleteEducacionModal');
    } else if (mode === 'edit') {
      this.editEducacion = educacion;
      button.setAttribute('data-target', '#editEducacionModal');
    }

    container?.appendChild(button);
    button.click();
  }

  public onAddEducacion(addForm: NgForm) {
    document.getElementById('add-educacion-form')?.click();
    this.educacionService.crearEducacion(addForm.value).subscribe({
      next: (response: Educacion) => {
        console.log(response);
        this.getEducacion();
        addForm.reset();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      },
    });
  }

  public onUpdateEducacion(educacion: Educacion): void {
    this.editEducacion = educacion;
    document.getElementById('edit-educacion-form')?.click();
    this.educacionService.actualizarEducacion(educacion).subscribe({
      next: (response: Educacion) => {
        console.log(response);
        this.getEducacion();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  public onDeleteEducacion(idEducacion: number): void {
    this.educacionService.eliminarEducacion(idEducacion).subscribe({
      next: (response: void) => {
        console.log(response);
        this.getEducacion();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }
}
