import { Component } from '@angular/core';
import { OutilsService } from '../services/outils.service';

@Component({
  selector: 'app-tools',
  template: '', // À remplacer par le template HTML ou templateUrl
  styleUrls: [] // À remplacer par le chemin du fichier CSS si besoin
})
export class DashboardComponent {
  outils: any[] = [];
  token: string = 'TON_TOKEN_JWT'; // récupéré après login

  constructor(private outilsService: OutilsService) {}

  ngOnInit() {
    this.outilsService.getOutils().subscribe(data => {
      this.outils = data;
    });
  }

  // Pour ajouter, modifier, supprimer, utilise les méthodes du service avec le token admin
}
