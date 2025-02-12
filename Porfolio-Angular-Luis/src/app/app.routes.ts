import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';  // Asegúrate de que IndexComponent esté importado
import { SkillsComponent } from './skills/skills.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';

export const routes: Routes = [
  { path: '', component: IndexComponent },  // Ruta para la página de inicio
  { path: 'skills', component: SkillsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'work', component: WorkComponent }
];

