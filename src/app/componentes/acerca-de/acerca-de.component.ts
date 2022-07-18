import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  persona: Persona = new Persona("","","","","","","");

  constructor(public personaServce: PersonaService) { }

  ngOnInit(): void {
    this.personaServce.getPersona().subscribe(data => {this.persona = data})
  }



}
