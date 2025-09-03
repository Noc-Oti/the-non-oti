import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ajout-outil',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-white-600 to-indigo-700 dark:from-gray-900 dark:to-gray-800 dark:text-white relative overflow-hidden">
      <!-- Effets décoratifs modernisés -->
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute w-40 h-40 bg-red-500 rounded-full opacity-10 animate-pulse top-10 left-10 dark:bg-gray-700"></div>
        <div class="absolute w-56 h-56 bg-red-500 rounded-full opacity-10 animate-pulse top-20 right-20 dark:bg-gray-700"></div>
        <div class="absolute w-72 h-72 bg-red-500 rounded-full opacity-5 animate-pulse bottom-0 left-20 dark:bg-gray-700"></div>
      </div>
      <div class="relative z-10 w-full max-w-md">
        <div class="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 w-full max-w-md border border-gray-200 dark:border-gray-700">
          <div class="flex flex-col items-center mb-6 gap-2">
            <div *ngIf="logo" class="mb-2 flex justify-center">
              <img [src]="logo" alt="logo preview" class="h-16 w-16 object-contain rounded shadow border border-gray-200 dark:border-gray-700 bg-white" />
            </div>
            <h2 class="text-3xl font-bold text-gray-800 dark:text-white">{{ indexAModifier !== null ? 'Modifier un outil' : 'Ajouter un outil' }}</h2>
            <span class="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">Formulaire sécurisé</span>
          </div>
          <form (ngSubmit)="enregistrer()" class="space-y-4">
            <div>
              <label class="block font-semibold mb-1">Logo <span class="text-xs text-gray-400">(URL ou chemin)</span></label>
              <input type="text" [(ngModel)]="logo" name="logo" class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white" placeholder="Ex: /assets/monlogo.png" />
              
            </div>
            <div>
              <label class="block font-semibold mb-1">Nom de l'outil <span class="text-red-500">*</span></label>
              <input type="text" [(ngModel)]="nom" name="nom" required class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white" placeholder="Nom de l’outil" />
            </div>
            <div>
              <label class="block font-semibold mb-1">Description <span class="text-red-500">*</span></label>
              <textarea [(ngModel)]="description" name="description" required rows="2" class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white" placeholder="Décris l’outil"></textarea>
            </div>
            <div>
              <label class="block font-semibold mb-1">Lien <span class="text-xs text-gray-400">(URL externe)</span></label>
              <input type="url" [(ngModel)]="lien" name="lien" class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white" placeholder="https://..." />
            </div>
            <div class="flex justify-center gap-4 mt-6">
              <button type="button" (click)="annuler()" class="bg-red-500 hover:bg-red-700 text-white font-bold px-6 py-2 rounded-lg shadow transition">Annuler</button>
              <button type="submit" class="bg-green-500 hover:bg-green-700 text-white font-bold px-6 py-2 rounded-lg shadow transition">{{ indexAModifier !== null ? 'Valider la modification' : 'Enregistrer' }}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `,
  styleUrls: []
})
export class AjoutOutilComponent {
  annuler() {
    window.location.href = '/dashboard';
  }
  indexAModifier: number | null = null;
  isLocalOutil: boolean = false;
  ngOnInit() {
    // Si on veut modifier un outil, on pré-remplit le formulaire
    const outilAModifier = localStorage.getItem('outilAModifier');
    if (outilAModifier) {
      const outil = JSON.parse(outilAModifier);
      this.logo = outil.image || '';
      this.nom = outil.titre || '';
      this.description = outil.description || '';
      this.lien = outil.lien || '';
      this.indexAModifier = outil.index;
      // 8 = nombre d’outils du service (à adapter si tu en ajoutes)
  this.isLocalOutil = (this.indexAModifier !== null && this.indexAModifier >= 8);
      localStorage.removeItem('outilAModifier');
    }
  }
  logo = '';
  nom = '';
  description = '';
  lien = '';

  enregistrer() {
    const nouvelOutil = {
      titre: this.nom,
      description: this.description,
      image: this.logo,
      lien: this.lien
    };
    const outilsServiceLength = 8; // Nombre d'outils du service
    const outils = JSON.parse(localStorage.getItem('nouveauxOutils') || '[]');
    if (this.indexAModifier !== null && this.indexAModifier !== undefined) {
      if (this.isLocalOutil) {
        // Modifie dans le localStorage
        const localIndex = this.indexAModifier - outilsServiceLength;
        outils[localIndex] = nouvelOutil;
      } else {
        // Modifie un outil du service : on le copie dans le localStorage à la même position
        const localIndex = this.indexAModifier;
        // Si l'index n'existe pas dans le localStorage, on l'ajoute à la fin
        if (outils[localIndex - outilsServiceLength] === undefined) {
          outils.push(nouvelOutil);
        } else {
          outils[localIndex - outilsServiceLength] = nouvelOutil;
        }
      }
    } else {
      // Ajout
      outils.push(nouvelOutil);
    }
    localStorage.setItem('nouveauxOutils', JSON.stringify(outils));
    alert('Outil enregistré !');
    window.location.href = '/dashboard';
  }

  
}
