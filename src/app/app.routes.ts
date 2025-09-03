import { Routes } from '@angular/router';
import { EventsListWrapperComponentComponent } from './events-list-wrapper-component/events-list-wrapper-component.component';
import { LoginComponent } from './auth/login.component';
import { AuthGuard } from './auth/auth.guard';
import { DashboardComponent } from './dashboard.component';
import { UsersComponent } from './users.component';
import { SettingsComponent } from './settings.component';

import { AdminLoginComponent } from './auth/admin-login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'home',
    component: EventsListWrapperComponentComponent,
    canActivate: [AuthGuard]
  },
  { path: 'users', component: UsersComponent },
 
  { path: 'settings', component: SettingsComponent },
  { path: 'ajout-outil', loadComponent: () => import('./ajout-outil.component').then(m => m.AjoutOutilComponent) },
  { path: 'admin-login', component: AdminLoginComponent },
];
