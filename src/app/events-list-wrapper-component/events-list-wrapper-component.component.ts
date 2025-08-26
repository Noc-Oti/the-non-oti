import { Component } from '@angular/core';
import { IEvenement } from '../models/event.interface';
import { EvenementService } from '../services/evenement.service';
import { CommonModule } from '@angular/common';
import { EventCardComponentComponent } from '../event-card-component/event-card-component.component';

@Component({
  selector: 'app-events-list-wrapper-component',
  imports: [
    CommonModule,
    EventCardComponentComponent,
  ],
  templateUrl: './events-list-wrapper-component.component.html',
  styleUrl: './events-list-wrapper-component.component.css',
})
export class EventsListWrapperComponentComponent {
  public evenements: IEvenement[] = [];

  constructor(public evenementService: EvenementService) {
    this.evenements = this.evenementService.listsEvents;
  }
}
