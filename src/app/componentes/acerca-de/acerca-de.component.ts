import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PersonaResumen } from 'src/app/model/persona-resumen.model';
import { PersonaResumenService } from 'src/app/servicios/persona-resumen.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  personaResumen: PersonaResumen = new PersonaResumen(1,"");
  //public persona: Persona | undefined;
  public editPersonaResumen: PersonaResumen | undefined;
  public deletePersonaResumen: PersonaResumen | undefined;

  constructor(public personaResumenService: PersonaResumenService) { }

  ngOnInit(): void {
    this.getPersonaResumen();  }

  getPersonaResumen(): void {
    this.personaResumenService.buscarPersonaResumenPorId(1).subscribe(data => { this.personaResumen = data })
  }

  public onOpenModal(mode: String, personaResumen?: PersonaResumen): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    //button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'edit') {
      this.editPersonaResumen = personaResumen;
      button.setAttribute('data-target', '#editPersonaResumenModal');
    }

    container?.appendChild(button);
    button.click();
  }



  public onUpdatePersonaResumen(personaResumen: PersonaResumen): void {
    this.editPersonaResumen = personaResumen;
    document.getElementById('edit-personaResumen-form')?.click();
    this.personaResumenService.actualizarPersonaResumen(personaResumen).subscribe({
      next: (response: PersonaResumen) => {
        console.log(response);
        this.getPersonaResumen();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }



}









/*


  public onAddPersona(addForm: NgForm) {
    document.getElementById('add-persona-form')?.click();
    this.personaService.crearPersona (addForm.value).subscribe({
      next: (response: Persona) => {
        console.log(response);
        this.getPersona();
        addForm.reset();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      },
    });
  }

  public onDeletePersona(idPersona: number): void {
    this.personaService.eliminarPersona(idPersona).subscribe({
      next: (response: void) => {
        console.log(response);
        this.getPersona();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

*/
