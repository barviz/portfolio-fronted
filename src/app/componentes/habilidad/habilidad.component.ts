import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Habilidad } from 'src/app/model/habilidad.model';
import { HabilidadService } from 'src/app/servicios/habilidad.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-habilidad',
  templateUrl: './habilidad.component.html',
  styleUrls: ['./habilidad.component.css']
})
export class HabilidadComponent implements OnInit {

  isLogged = false;
  roles!: string[];
  isAdmin = false;

  public habilidades: Habilidad[] = [];
  public editHabilidad: Habilidad | undefined;
  public deleteHabilidad: Habilidad | undefined;

  constructor(public habilidadService: HabilidadService, private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {

    this.getHabilidad();

    this.isLogged = this.tokenService.isLogged();

    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });

  }

  getHabilidad(): void {
    this.habilidadService.listarHabilidad().subscribe({
      next: (response: Habilidad[]) => {
        this.habilidades = response;
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
  }
  public onOpenModal(mode: String, habilidad?: Habilidad): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addHabilidadModal');
    } else if (mode === 'delete') {
      this.deleteHabilidad = habilidad;
      button.setAttribute('data-target', '#deleteHabilidadModal');
    } else if (mode === 'edit') {
      this.editHabilidad = habilidad;
      button.setAttribute('data-target', '#editHabilidadModal');
    }

    container?.appendChild(button);
    button.click();
  }

  public onAddHabilidad(addForm: NgForm) {
    document.getElementById('add-habilidad-form')?.click();
    this.habilidadService.crearHabilidad(addForm.value).subscribe({
      next: (response: Habilidad) => {
        console.log(response);
        this.getHabilidad();
        addForm.reset();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      },
    });
  }

  public onUpdateHabilidad(habilidad: Habilidad): void {
    this.editHabilidad = habilidad;
    document.getElementById('edit-habilidad-form')?.click();
    this.habilidadService.actualizarHabilidad(habilidad).subscribe({
      next: (response: Habilidad) => {
        console.log(response);
        this.getHabilidad();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  public onDeleteHabilidad(idHabilidad: number): void {
    this.habilidadService.eliminarHabilidad(idHabilidad).subscribe({
      next: (response: void) => {
        console.log(response);
        this.getHabilidad();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

}
