import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface User {
  nom: string;
  email: string;
  role: string;
}

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  template: `<h2 class="text-xl font-bold mb-4">Liste des utilisateurs connectés</h2>
  <table class="min-w-full bg-white border">
    <thead>
      <tr>
        <th class="py-2 px-4 border-b">Nom</th>
        <th class="py-2 px-4 border-b">Email</th>
        <th class="py-2 px-4 border-b">Rôle</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let user of users">
        <td class="py-2 px-4 border-b">{{ user.nom }}</td>
        <td class="py-2 px-4 border-b">{{ user.email }}</td>
        <td class="py-2 px-4 border-b">{{ user.role }}</td>
      </tr>
    </tbody>
  </table>`,
  styles: [``]
})
export class UsersComponent {
  users: User[] = [];
}
