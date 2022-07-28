import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  isLogged = false;
  roles!: string[];
  isAdmin = false;

  public experiencias: Experiencia[] = [];
  public editExperiencia: Experiencia | undefined;
  public deleteExperiencia: Experiencia | undefined;

  constructor(public experienciaService: ExperienciaService, private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {

    this.getExperiencia();

    this.isLogged = this.tokenService.isLogged();

    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });

  }

  getExperiencia(): void {
    this.experienciaService.listarExperiencia().subscribe({
      next: (response: Experiencia[]) => {
        this.experiencias = response;
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
  }
  public onOpenModal(mode: String, experiencia?: Experiencia): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addExperienciaModal');
    } else if (mode === 'delete') {
      this.deleteExperiencia = experiencia;
      button.setAttribute('data-target', '#deleteExperienciaModal');
    } else if (mode === 'edit') {
      this.editExperiencia = experiencia;
      button.setAttribute('data-target', '#editExperienciaModal');
    }

    container?.appendChild(button);
    button.click();
  }

  public onAddExperiencia(addForm: NgForm) {
    document.getElementById('add-experiencia-form')?.click();
    this.experienciaService.crearExperiencia(addForm.value).subscribe({
      next: (response: Experiencia) => {
        console.log(response);
        this.getExperiencia();
        addForm.reset();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      },
    });
  }

  public onUpdateExperiencia(experiencia: Experiencia): void {
    this.editExperiencia = experiencia;
    document.getElementById('edit-experiencia-form')?.click();
    this.experienciaService.actualizarExperiencia(experiencia).subscribe({
      next: (response: Experiencia) => {
        console.log(response);
        this.getExperiencia();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  public onDeleteExperiencia(idExperiencia: number): void {
    this.experienciaService.eliminarExperiencia(idExperiencia).subscribe({
      next: (response: void) => {
        console.log(response);
        this.getExperiencia();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }
}
