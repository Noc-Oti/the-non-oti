
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
    // Simple login logic (à remplacer par un vrai service plus tard)
    if (this.email && this.password) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', this.email);
      this.router.navigate(['/home']);
    } else {
      this.error = 'Identifiants invalides';
    }
  }
}
