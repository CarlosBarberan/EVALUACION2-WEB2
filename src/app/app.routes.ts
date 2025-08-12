import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { CrearCursoComponent } from './components/crear-curso/crear-curso.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'cursos', component: ListaCursosComponent, canActivate: [AuthGuard] },
  { path: 'crear-curso', component: CrearCursoComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/login' }
];
