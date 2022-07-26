import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaDatos } from 'src/app/model/persona-datos.model';
import { PersonaDatosService } from 'src/app/servicios/persona-datos.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  personaDatos: PersonaDatos = new PersonaDatos(1,"", "", "", "", "", "");

  public editPersonaDatos: PersonaDatos | undefined;
  public deletePersonaDatos: PersonaDatos | undefined;

  constructor(public personaDatosService: PersonaDatosService, private router: Router) { }

  ngOnInit(): void {
    this.getPersonaDatos();  }

  getPersonaDatos(): void {
    this.personaDatosService.buscarPersonaDatosPorId(1).subscribe(data => { this.personaDatos = data })
  }

  public onOpenModal(mode: String, personaDatos?: PersonaDatos): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    //button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'edit') {
      this.editPersonaDatos = personaDatos;
      button.setAttribute('data-target', '#editPersonaDatosModal');
    }

    container?.appendChild(button);
    button.click();
  }



  public onUpdatePersonaDatos(personaDatos: PersonaDatos): void {
    this.editPersonaDatos = personaDatos;
    document.getElementById('edit-personaDatos-form')?.click();
    this.personaDatosService.actualizarPersonaDatos(personaDatos).subscribe({
      next: (response: PersonaDatos) => {
        console.log(response);
        this.getPersonaDatos();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  login(){
    this.router.navigate(['inicio-sesion']);
  }

}


