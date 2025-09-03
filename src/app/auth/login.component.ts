
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';

  constructor(private router: Router) {}

  login() {
      const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
      if (!gmailRegex.test(this.email)) {
        this.error = "L'adresse email doit être 'votregmail@gmail.com'";
        return;
      }
      const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
      if (!passwordRegex.test(this.password)) {
        this.error = "Le mot de passe doit contenir au moins 8 caractères, des lettres, des chiffres et un caractère spécial.";
        return;
      }
      if (this.email && this.password) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', this.email);
        this.router.navigate(['/dashboard']);
      } else {
        this.error = 'Identifiants invalides';
      }
  }
}
