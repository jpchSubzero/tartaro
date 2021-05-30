import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { 

  }

  getCountries() {
    return this.http.get('https://restcountries.eu/rest/v2/lang/es')
      .pipe(
        map((response: any) => { //map de rxjs para poder filtrar
          return response.map((x: any) => { //map para seleccionar información como select de linq
            return {
              name: x.name,
              code: x.alpha3Code
            }
          })
        })
      );
    }
}
