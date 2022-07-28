import { NgModule } from '@angular/core';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: PortfolioComponent },
  { path: 'inicio-sesion', component: InicioSesionComponent },
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
