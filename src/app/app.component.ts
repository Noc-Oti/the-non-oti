
import { Component } from '@angular/core';
import { WelcomeBannerComponent } from './welcome-banner/welcome-banner.component';
import { RouterOutlet, RouterModule, Router } from '@angular/router';
import { EventFilterToggleComponent } from './event-filter-toggle/event-filter-toggle.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    WelcomeBannerComponent,
    EventFilterToggleComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'EventManager';

  constructor(private router: Router) {}

  isLoginPage(): boolean {
    return this.router.url === '/login';
  }
}
