import { Component } from '@angular/core';
import { EvenementService } from '../services/evenement.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-event-filter-toggle',
  imports: [CommonModule, RouterModule],
  templateUrl: './event-filter-toggle.component.html',
  styleUrl: './event-filter-toggle.component.css',
})
export class EventFilterToggleComponent {
  public categories: string[] = [];
  public currentCategory: string = 'Tous';
  public showFilter: boolean = true;

  constructor(private evenementService: EvenementService) {
    //this.categories = this.evenementService.getCategories();
    //on ajoute la catégorie 'Tous' au tableau de catégorie pour pouvoir permettre au user de reset le filtre
    //unshift l'ajoute en début de tableau
    this.categories.unshift('Tous');
  }

  handleCategoryChange(category: string): void {
    this.currentCategory = category;
   //this.evenementService.filterByCategorie(category);
  }

  //lorque l'utilisateur effectue une recherche on récupere le contenu du champ de saisi grâce
  //au e.target.value
  setSearch(e: Event) {
    //par défaut on ne peut pas directement accédé au contenu du input avec e.target.value possible en js natif
    //parceque il y a des soucis de typage en ts donc on force la conversion du e.target en tag input
    const searchQuery = (e.target as HTMLInputElement).value;
    this.evenementService.handleEventResearch(searchQuery);
  }

}
