/*import { Injectable } from '@angular/core'
import { EvenementService } from './evenement.service';

@Injectable({ providedIn: 'root' })
export class ReservationService {
  constructor(public evenementService: EvenementService) {}

  //public reservationsLists: IReservation[] = [];

  public getTotalReservations(): number {
    if(this.reservationsLists.length > 0 ) 
      return this.reservationsLists
        .map((reservation) => reservation.nombrePlacesReservees)
        .reduce((acc, val) => acc + val);

        return 0;
  }

  public addReservation(reservation: IReservation): void {
    this.reservationsLists.push(reservation);
  
  }
}*/
