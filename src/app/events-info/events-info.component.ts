import { Component } from '@angular/core';
import { EvenementService } from '../services/evenement.service';
import { IEvenement } from '../models/event.interface';
import { CommonModule } from '@angular/common';
//import { Iinfo } from '../models/info.interface';
//import { ReservationService } from '../services/reservation-service';

@Component({
  selector: 'app-events-info',
  imports: [CommonModule,],
  templateUrl: './events-info.component.html',
  styleUrl: './events-info.component.css',
})
export class EventsInfoComponent {
  constructor(
    private evenement: EvenementService,
  ) {}
  public listItems: IEvenement[] = [];
  //public eventsInfo: Iinfo[] = [];

  /*getFonctionnairesList(): number {
    if(this.evenement.listsEvents.length > 0){
    return this.evenement.listsEvents 
      .map((ev) => ev.participants)
      .reduce((acc, val) => acc + val); 
    }

    return 0;
  }*/

  getServicesDisponibles() {
    return this.evenement.listsEvents.length;
  }

}
