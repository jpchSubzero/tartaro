import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeroeModel } from '../models/heroe.model';
import { map, delay } from 'rxjs/operators';

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

  getHeroes() {
    return this.http.get(`${this.url}heroes.json`).pipe(
      // Sintaxis completa
      // map(response => this.mapperHeroes(response)
      // Sintaxis resumida, asume que debe llamar a esa función y enviar como parámetro response
      map(this.mapperHeroes), delay(3000)
    );
  }

  getHeroe(id: string) {
    return this.http.get(`${this.url}heroes/${id}.json`);
  }

  deleteHeroe(id: string) {
    return this.http.delete(`${this.url}heroes/${id}.json`);
  }

  private mapperHeroes(heroesObject: any):HeroeModel[] {
    const heroes: HeroeModel[] = [];
    //Validación de objeto vacío
    if (heroesObject === null) return [];
    Object.keys(heroesObject).forEach(key => {
      const heroe: HeroeModel = heroesObject[key];
      heroe.id = key;
      heroes.push(heroe);
    });
    return heroes;
  }
}


