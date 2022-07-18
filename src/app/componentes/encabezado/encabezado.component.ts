import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  persona: Persona = new Persona("", "", "", "", "", "", "");

  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {

    this.personaService.getPersona().subscribe(data => { this.persona = data })

  }

}
