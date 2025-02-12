import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './app.routes';  // Importar las rutas definidas

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Usar el array de rutas importado
  exports: [RouterModule]
})
export class AppRoutingModule { }
