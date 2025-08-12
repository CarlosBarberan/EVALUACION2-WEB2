import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  private platformId = inject(PLATFORM_ID);

  constructor() {
    // Verificar si hay un token guardado solo en el navegador
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        this.isAuthenticatedSubject.next(true);
      }
    }
  }

  login(username: string, password: string): boolean {
    // Simulación simple de login
    if (username === 'admin' && password === 'admin') {
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem('authToken', 'fake-token');
      }
      this.isAuthenticatedSubject.next(true);
      return true;
    }
    return false;
  }

  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('authToken');
    }
    this.isAuthenticatedSubject.next(false);
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }
}
