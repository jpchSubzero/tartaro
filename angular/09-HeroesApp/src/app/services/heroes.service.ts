import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeroeModel } from '../models/heroe.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  url:string = 'https://udemycrud-cb066-default-rtdb.firebaseio.com/';

  constructor(
    private http: HttpClient
  ) { }

  createHeroe(heroe: HeroeModel) {
    return this.http.post(`${this.url}heroes.json`, heroe)
      .pipe(
      map((response: any) => {
        heroe.id = response.name;
        return heroe;
      })
    );
  }

  updateHeroe(heroe: HeroeModel) {
    const { ['id']: id, ...heroeNoId } = heroe; //Eliminar id del modelo para que no se repita
    return this.http.put(`${this.url}heroes/${heroe.id}.json`, heroeNoId);
  }

}
