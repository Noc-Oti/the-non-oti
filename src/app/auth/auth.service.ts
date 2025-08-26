import { Injectable } from '@angular/core';

export interface User {
  email: string;
  password: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  // Liste locale d'utilisateurs (à remplacer par une vraie base plus tard)
  private users: User[] = [
    { email: 'admin@site.com', password: 'admin' },
    { email: 'user1@site.com', password: 'user1pass' },
    { email: 'user2@site.com', password: 'user2pass' }
  ];

  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  login(email: string, password: string): boolean {
    // Autorise toute combinaison non vide
    if (email && password) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', email);
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
  }
}
