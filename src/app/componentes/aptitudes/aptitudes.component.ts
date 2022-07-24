import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tecnologia } from 'src/app/model/tecnologia.model';
import { TecnologiaService } from 'src/app/servicios/tecnologia.service';

@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.css']
})
export class AptitudesComponent implements OnInit {

  public tecnologias: Tecnologia[] = [];
  public editTecnologia: Tecnologia | undefined;
  public deleteTecnologia: Tecnologia | undefined;

  constructor(public tecnologiaService: TecnologiaService) { }

  ngOnInit(): void {
    this.getTecnologia();
  }

  getTecnologia(): void {
    this.tecnologiaService.listarTecnologia().subscribe({
      next: (response: Tecnologia[]) => {
        this.tecnologias = response;
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
  }
  public onOpenModal(mode: String, tecnologia?: Tecnologia): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addTecnologiaModal');
    } else if (mode === 'delete') {
      this.deleteTecnologia = tecnologia;
      button.setAttribute('data-target', '#deleteTecnologiaModal');
    } else if (mode === 'edit') {
      this.editTecnologia = tecnologia;
      button.setAttribute('data-target', '#editTecnologiaModal');
    }

    container?.appendChild(button);
    button.click();
  }

  public onAddTecnologia(addForm: NgForm) {
    document.getElementById('add-tecnologia-form')?.click();
    this.tecnologiaService.crearTecnologia(addForm.value).subscribe({
      next: (response: Tecnologia) => {
        console.log(response);
        this.getTecnologia();
        addForm.reset();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      },
    });
  }

  public onUpdateTecnologia(tecnologia: Tecnologia): void {
    this.editTecnologia = tecnologia;
    document.getElementById('edit-tecnologia-form')?.click();
    this.tecnologiaService.actualizarTecnologia(tecnologia).subscribe({
      next: (response: Tecnologia) => {
        console.log(response);
        this.getTecnologia();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  public onDeleteTecnologia(idTecnologia: number): void {
    this.tecnologiaService.eliminarTecnologia(idTecnologia).subscribe({
      next: (response: void) => {
        console.log(response);
        this.getTecnologia();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }
}
