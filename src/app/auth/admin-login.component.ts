import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  email = '';
  password = '';
  error = '';

  constructor(private router: Router) {}

  login() {
    // Vérification : email doit être sous la forme @otitelecom.com
    const emailAdminRegex = /^[a-zA-Z0-9._%+-]+@otitelecom\.com$/;
    if (!emailAdminRegex.test(this.email)) {
      this.error = "email incorrect.";
      return;
    }
    if (this.password.length < 8) {
      this.error = "Le mot de passe doit contenir au moins 8 caractères.";
      return;
    }
    localStorage.setItem('userRole', 'Admin');
    localStorage.setItem('userEmail', this.email);
    // Vérifie si l’action admin est demandée
    const actionAdmin = localStorage.getItem('actionAdmin');
  // Après connexion, redirige toujours vers la page d’ajout d’outil
  localStorage.removeItem('actionAdmin');
  this.router.navigate(['/ajout-outil']);
  }
}
