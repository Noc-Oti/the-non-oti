import { Injectable } from '@angular/core';
import { IEvenement } from '../models/event.interface';

@Injectable({ providedIn: 'root' })
export class EvenementService {
  
  public listsEvents: IEvenement[] = [
    {
      titre: "Web Mail OTI ",
      description: "Outils de méssagerie",
      image: 'assets/Roundcube-Logo-Icon-2048x2048.webp',
      lien: 'https://mail.otitelecom.com/'
    },
    {
      titre: "GLPI",
      description: "Outils de gestion des tickets",
      image: 'assets/GLPI_Logo-color.webp',
      lien: 'https://gestion.otitelecom.com/'
    },
    {
      description: "Outil de supervision et monitoring",
      titre: "Zabbix",
      image: '/assets/zabbix.webp',
      lien: 'https://supervision.otitelecom.com/'
    },
    {
      description: "Outil de gestion des wifi",
      titre: "Omada",
      image: 'assets/omada-removebg-preview.png',
      lien: 'https://omada.otitelecom.com/'
    },
    {
      description: "Outil d'authentification",
      titre: "Radius manager",
      image: 'assets/radius-removebg-preview.png',
      lien: 'https://3a.otitelecom.com/'
    },
    {

      description: "Site web de OTI.",
      titre: "otitelecom.com",
      image: '/assets/cropped-favicon-1-300x300-1-150x150.png',
      lien: 'https://otitelecom.com/'
    },
    {
      description: "Outils de Wifi géré",
      titre: "Cloud spot",
      image: '/assets/cloudspot_wifi-removebg-preview.png',
      lien: 'https://wifi.lc'
    },
    {
      description: "Outil de gestion des projets",
      titre: "Redmine",
      image: "/assets/re3601r2f2-redmine-logo-redmine-boss-insights.png",
      lien: 'https://redmine.otitelecom.com/'
    },
    {
      description: "Outil de gestion des mots de passe",
      titre: "OPNsense",
      image: "/assets/bitwarden-logo.png",
      lien: 'https://vault.otitelecom.com/'
    }
    
  ];

  //faire une copie pour éviter de modifier accidentenllement nos données pendant la manipulation ou
  //les operations de filtrage (deep copy/shallow copy)
  private eventsCopy: IEvenement[] = [...this.listsEvents];

  /*getCategories(): string[] {
    const categories = this.eventsCopy.map((ev) => ev.categorie);
    //on doit retourner les categories sans doublons
    return Array.from(new Set(categories));
  }

  filterByCategorie(categorie: string): void {
    if (categorie === 'Tous') this.listsEvents = [...this.eventsCopy];
    else
      this.listsEvents = this.eventsCopy.filter(
        //(event) => event.categorie === categorie
      );
  }*/

  handleEventResearch(searchQuery: string): void{
    if (searchQuery === '') this.listsEvents = [...this.eventsCopy];
    else
      this.listsEvents = this.eventsCopy.filter(
        (event) =>
          event.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
  }

  /*reserveEvent(eventId: number, nombrePlacesReservees:number) {
    this.listsEvents = this.eventsCopy.map((event) => {
      if(event.id === eventId) {
        event.participants = event.participants + nombrePlacesReservees;
        return event;
      }
      return event;
    })
  }


  filterEventByDate(date:string):IEvenement[]{
    return this.eventsCopy.filter((ev) => ev.date === date);
  }
*/
  
}
