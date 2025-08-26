import { Routes } from '@angular/router';
import { EventsListWrapperComponentComponent } from './events-list-wrapper-component/events-list-wrapper-component.component';
import { LoginComponent } from './auth/login.component';
import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: EventsListWrapperComponentComponent,
    canActivate: [AuthGuard]
  },
  // Ajoute ici d'autres routes si besoin
];
