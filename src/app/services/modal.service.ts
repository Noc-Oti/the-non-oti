import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IEvenement } from '../models/event.interface';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private isOpenSubject = new BehaviorSubject<boolean>(false);
  private eventDataSubject = new BehaviorSubject<IEvenement | null>(null);

  /**
   * Pour la gestion de notre modal, nous avons utilisés des observables,
   * dont le but est d'émettre lorqu'un état change. Dans ce cas, quand le modal passe de open à close
   */

  /**La variable isOpen$ est un observable et représente l'état de notre modal */
  isOpen$ = this.isOpenSubject.asObservable();

  /**eventData désigne l'evenement qui est vu, c-à-dire, celui sur lequel le user à cliquer */
  eventData$ = this.eventDataSubject.asObservable();

  /**Cette méthode définit l'etat du modal à true et passe l'évenement qui a subit le click en params */
  openModal(event: IEvenement) {
    this.eventDataSubject.next(event);
    this.isOpenSubject.next(true);
  }

  /*Remet isOpen$ à false*/
  closeModal() {
    this.isOpenSubject.next(false);
    this.eventDataSubject.next(null);
  }
}
