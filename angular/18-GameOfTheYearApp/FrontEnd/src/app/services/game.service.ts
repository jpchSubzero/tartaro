import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Juego } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class GameService {

  juegos:Juego[] = [];

  constructor(private http: HttpClient) {  }

  getNominados() {
    if (this.juegos.length > 0) {
      return of(this.juegos);      
    }
    return this.http.get<Juego[]>(`${environment.url}/api/goty`)
      .pipe(
        tap((response:Juego[]) => this.juegos = response)
      );
  }

  votar(id:string) {
    return this.http.post<{status:boolean, message:string}>(`${environment.url}/api/goty/${id}`, {})
    .pipe(
      catchError(error => {
        return of(error.error);      
      })
    );
  }
}
