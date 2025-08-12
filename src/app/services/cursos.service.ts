import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Curso } from '../models/curso.model';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  private cursos: Curso[] = [
    {
      id: 1,
      nombre: 'Angular Básico',
      descripcion: 'Curso introductorio a Angular',
      instructor: 'Juan Pérez',
      duracion: 40,
      nivel: 'Principiante',
      precio: 299.99,
      categoria: 'Desarrollo Web'
    },
    {
      id: 2,
      nombre: 'React Avanzado',
      descripcion: 'Patrones avanzados en React',
      instructor: 'María García',
      duracion: 60,
      nivel: 'Avanzado',
      precio: 399.99,
      categoria: 'Desarrollo Web'
    }
  ];

  constructor() {}

  getCursos(): Observable<Curso[]> {
    return of(this.cursos);
  }

  agregarCurso(curso: Curso): Observable<Curso> {
    const nuevoCurso = {
      ...curso,
      id: this.cursos.length > 0 ? Math.max(...this.cursos.map(c => c.id || 0)) + 1 : 1
    };
    this.cursos.push(nuevoCurso);
    return of(nuevoCurso);
  }
}
