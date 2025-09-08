import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class OutilsService {
  private apiUrl = 'http://localhost:4000/outils';

  constructor(private http: HttpClient) {}

  // Liste des outils (accessible à tous)
  getOutils(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Ajouter un outil (admin)
  addOutil(outil: any, token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(this.apiUrl, outil, { headers });
  }

  // Modifier un outil (admin)
  updateOutil(id: number, outil: any, token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put(`${this.apiUrl}/${id}`, outil, { headers });
  }

  // Supprimer un outil (admin)
  deleteOutil(id: number, token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(`${this.apiUrl}/${id}`, { headers });
  }
  
}