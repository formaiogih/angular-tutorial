import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pagina1Component } from './pagina1/pagina1.component'; // Importando o componente

const routes: Routes = [
  { path: '/pagina1', component: Pagina1Component }, // Rota para a Página 1

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }