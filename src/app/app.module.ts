import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AptitudesComponent } from './componentes/aptitudes/aptitudes.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { LogrosComponent } from './componentes/logros/logros.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { MenuComponent } from './componentes/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AptitudesComponent,
    AcercaDeComponent,
    LogrosComponent,
    EducacionComponent,
    ExperienciaComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
