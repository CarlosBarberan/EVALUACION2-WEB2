import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CursosService } from '../../services/cursos.service';
import { Curso } from '../../models/curso.model';

@Component({
  selector: 'app-crear-curso',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './crear-curso.component.html'
})
export class CrearCursoComponent {
  cursoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private cursosService: CursosService,
    private router: Router
  ) {
    this.cursoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      descripcion: ['', [Validators.required, Validators.minLength(10)]],
      instructor: ['', Validators.required],
      duracion: ['', [Validators.required, Validators.min(1), Validators.max(200)]],
      nivel: ['', Validators.required],
      precio: ['', [Validators.required, Validators.min(0)]],
      categoria: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.cursoForm.valid) {
      const nuevoCurso: Curso = this.cursoForm.value;
      this.cursosService.agregarCurso(nuevoCurso).subscribe(() => {
        this.router.navigate(['/cursos']);
      });
    }
  }

  cancelar() {
    this.router.navigate(['/cursos']);
  }
}
