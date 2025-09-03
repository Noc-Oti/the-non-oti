import { Component, Input } from '@angular/core';
import { IEvenement } from '../models/event.interface';
import { CommonModule,  } from '@angular/common';
//import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-event-card-component',
  imports: [CommonModule, ],
  templateUrl: './event-card-component.component.html',
  styleUrl: './event-card-component.component.css',
})
export class EventCardComponentComponent {
  @Input() evenement!: IEvenement;

  //onstructor(private modalService: ModalService) {}

  
  /*openModal() {
    this.modalService.openModal(this.evenement);
  }*/
}
