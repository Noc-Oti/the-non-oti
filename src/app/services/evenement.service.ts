import { Injectable } from '@angular/core';
import { IEvenement } from '../models/event.interface';

@Injectable({ providedIn: 'root' })
export class EvenementService {
  
  public listsEvents: IEvenement[] = [
    {
      
      description: "outils de méssagerie",
      image: '/assets/roundcube.png',
      lien: 'https://mail.otitelecom.com/'
    },
    {
      description: "outil de gestion des tickets incidents",
      image: '/assets/logo2.png',
      lien: 'https://gestion.otitelecom.com/'
    },
    {
      description: "Outil de supervision et de monitoring",
      image: '/assets/zabbix-integration.png',
      lien: 'https://supervision.otitelecom.com/'
    },
    {
      description: "Outil de gestion des wifi",
      image: '/assets/omada.png',
      lien: 'https://omada.otitelecom.com/'
    },
    {
      description: "Outils d'authentification",
      image: '/assets/radius.png',
      lien: 'https://3a.otitelecom.com/'
    },
    {
     
      description: "Site web de OTI.",
      image: '/assets/cropped-favicon-1-300x300-1-150x150.png',
      lien: 'https://redmine.otitelecom.com/'
    },
    {
      description: "Cloud spot",
      image: '/assets/reseau-sans-fil-icone-wifi_153097-201.avif',
      lien: 'https://wifi.lc'
    },

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
