import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EvenementService } from './services/evenement.service';
import { EventFilterToggleComponent } from './event-filter-toggle/event-filter-toggle.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  userRole: string = localStorage.getItem('userRole') || 'Utilisateur';
  supprimerUtilisateur(user: any) {
    const confirmation = confirm(`Voulez-vous vraiment supprimer l'utilisateur ${user.nom} ?`);
    if (confirmation) {
      this.users = this.users.filter(u => u !== user);
    }
  }
  ajouterOutil() {
    if (this.userRole === 'Admin') {
      this.router.navigate(['/ajout-outil']);
    } else {
      localStorage.setItem('actionAdmin', 'ajout');
      this.router.navigate(['/admin-login']);
    }
  }
  // Action : Modifier un outil
  modifierOutil(outil: any, index: number) {
    // Stocke l’outil à modifier pour le formulaire
    localStorage.setItem('outilAModifier', JSON.stringify({ ...outil, index }));
    if (this.userRole === 'Admin') {
      this.router.navigate(['/ajout-outil']);
    } else {
      localStorage.setItem('actionAdmin', 'modif');
      this.router.navigate(['/admin-login']);
    }
  }

  // Action : Supprimer un outil
  supprimerOutil(outil: any, index: number) {
    // 8 = nombre d'outils du service
    const outilsServiceLength = 8;
    if (index < outilsServiceLength) {
      alert("Impossible de supprimer les outils par défaut.");
      return;
    }
    const confirmation = confirm(`Voulez-vous vraiment supprimer l'outil "${outil.titre}" ?`);
    if (confirmation) {
      const outils = JSON.parse(localStorage.getItem('nouveauxOutils') || '[]');
      const localIndex = index - outilsServiceLength;
      outils.splice(localIndex, 1);
      localStorage.setItem('nouveauxOutils', JSON.stringify(outils));
      // Forcer le refresh de la vue
      this.selectedSection = 'tools';
    }
  }
  // Liste des langues disponibles
  langues = [
    { code: 'fr', label: 'Français' },
    { code: 'en', label: 'Anglais' },
    { code: 'es', label: 'Espagnol' }

  ];
  langueSelectionnee = localStorage.getItem('langue') || 'fr';
  menuLangueOuvert = false;

  toggleMenuLangue() {
    this.menuLangueOuvert = !this.menuLangueOuvert;
  }

  changerLangue(code: string) {
    this.langueSelectionnee = code;
    localStorage.setItem('langue', code);
    this.menuLangueOuvert = false;
    // Ajoute ici la logique i18n si besoin
  }

  getLangueLabel(): string {
    const langue = this.langues.find(l => l.code === this.langueSelectionnee);
    return langue ? langue.label : '';
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
  isDarkMode(): boolean {
    return localStorage.getItem('darkMode') === 'true';
  }
  // Mode sombre désactivé
  users = [
    {
      nom: 'HESIOUI',
      prenom: 'Fouzia',
      email: 'gf.email@gmail.com',
      date: '2024-05-09 09:09',
      role: 'Admin'
    },
    {
      nom: 'Martin',
      prenom: 'Marie',
      email: 'marie.martin@email.com',
      date: '2024-05-10 10:10',
      role: 'Utilisateur'
    }
    // Ajoute ici dynamiquement les utilisateurs connectés
  ];

  ajouterUtilisateur() {
    // Logique d'ajout à compléter
    alert('Fonction Ajouter utilisateur à implémenter');
  }
  sidebarCollapsed = false;
  search = '';
  userAvatar = '';
  selectedSection: 'dashboard' | 'tools' | 'users' | 'settings' = 'dashboard';

  ngOnInit() {
    // Synchronise le mode sombre avec le localStorage
    const darkMode = localStorage.getItem('darkMode');
    const root = document.documentElement;
    if (darkMode === 'true') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    const email = localStorage.getItem('userEmail');
    if (email) {
      this.userAvatar = `https://ui-avatars.com/api/?name=${email.charAt(0).toUpperCase()}&background=0D8ABC&color=fff`;
    } else {
      this.userAvatar = 'https://randomuser.me/api/portraits/men/1.jpg';
    }
  }
  constructor(public evenementService: EvenementService, private router: Router) {}

  get outilsFiltres() {
    const s = this.search.toLowerCase();
    // Récupère les outils du service
    const outilsService = this.evenementService.listsEvents;
    // Récupère les outils ajoutés dynamiquement
    const outilsLocal = JSON.parse(localStorage.getItem('nouveauxOutils') || '[]');
    // Fusionne les deux listes
    const tousOutils = [...outilsService, ...outilsLocal];
    // Filtre selon la recherche
    return tousOutils.filter(outil =>
      outil.titre?.toLowerCase().includes(s) ||
      outil.description?.toLowerCase().includes(s)
    );
  }

  navigateTo(page: 'dashboard' | 'tools' | 'users' | 'settings') {
    this.selectedSection = page;
  }

  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    this.router.navigate(['/login']);
  }
}
