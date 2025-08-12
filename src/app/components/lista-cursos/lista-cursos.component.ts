import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CursosService } from '../../services/cursos.service';
import { AuthService } from '../../services/auth.service';
import { Curso } from '../../models/curso.model';
import { HorasPipe } from '../../pipes/horas.pipe';

@Component({
  selector: 'app-lista-cursos',
  standalone: true,
  imports: [CommonModule, HorasPipe],
  templateUrl: './lista-cursos.component.html'
})
export class ListaCursosComponent implements OnInit {
  cursos: Curso[] = [];

  constructor(
    private cursosService: CursosService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.cargarCursos();
  }

  cargarCursos() {
    this.cursosService.getCursos().subscribe(cursos => {
      this.cursos = cursos;
    });
  }

  crearCurso() {
    this.router.navigate(['/crear-curso']);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
