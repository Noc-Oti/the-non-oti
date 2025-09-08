
import { Component, OnInit } from '@angular/core';
import { WelcomeBannerComponent } from './welcome-banner/welcome-banner.component';
import { RouterOutlet, RouterModule, Router } from '@angular/router';
import { EventFilterToggleComponent } from './event-filter-toggle/event-filter-toggle.component';
import { CommonModule } from '@angular/common';
// Removed duplicate import of Component

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
  
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'OTI Tools';

  constructor(private router: Router) {
    const darkMode = localStorage.getItem('darkMode');
    const root = document.documentElement;
    if (darkMode === 'true') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }

  isDarkMode(): boolean {
    return localStorage.getItem('darkMode') === 'true';
  }
  isLoginPage(): boolean {
    return this.router.url === '/login';
  }

  toggleDarkMode() {
    const root = document.documentElement;
    if (root.classList.contains('dark')) {
      root.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    } else {
      root.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    }
  }
  
}
