import { NgModule } from '@angular/core';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';
import { RouterModule, Routes } from '@angular/router';
import { GuardService as guard } from './servicios/guard.service';
import { RegistroComponent } from './componentes/registro/registro.component';

const routes: Routes = [
  { path: '', component: PortfolioComponent, canActivate: [guard], data: { expect:  ['admin', 'user']} },
  { path: 'inicio-sesion', component: InicioSesionComponent },
  { path: 'registro', component: RegistroComponent },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
