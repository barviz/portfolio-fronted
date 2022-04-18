import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AptitudesComponent } from './componentes/aptitudes/aptitudes.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { LogrosComponent } from './componentes/logros/logros.component';
import { ExperienciaYEducacionComponent } from './componentes/experiencia-y-educacion/experiencia-y-educacion.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AptitudesComponent,
    AcercaDeComponent,
    LogrosComponent,
    ExperienciaYEducacionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
