import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CarteleraResponse, Movie } from '../interfaces/cartelera-response';
import { catchError, map, tap } from 'rxjs/operators';
import { MovieResponse } from '../interfaces/movie-response';
import { CreditsResponse, Cast } from '../interfaces/credits-response';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  // private baseUrl: string = 'https://api.themoviedb.org/3';
  private baseUrl: string = environment.url;
  private carteleraPage: number = 1;
  public cargando: boolean = false;
  

  constructor(
    private http: HttpClient
  ) { }

  get params() {
    return {
      // api_key: 'a587cc29b53bb0322a0301ef205f47d1',
      api_key: environment.apiKey,
      language: 'es-ES',
      page: this.carteleraPage.toString(),
      query: ''
    }
  }

  getNowPlaying(): Observable<Movie[]> {
    if (this.cargando) {
      return of ([]);
    }
    this.cargando = true;
    return this.http.get<CarteleraResponse>(`${this.baseUrl}/movie/now_playing?`, {params: this.params})
    .pipe(
      map(response => {
        return response.results
      }),
      tap(() => {
        this.carteleraPage++;
        this.cargando = false;
      })
    );
  }

  search(valor: string): Observable<Movie[]> {
    const searchParams = {...this.params, page: '1', query: valor};
    return this.http.get<CarteleraResponse>(`${this.baseUrl}/search/movie?`, {params: searchParams})
    .pipe(
      map(response => {
        return response.results
      })
    );
  }

  detallesPelicula(valor: string): Observable<MovieResponse | null> {
    const searchParams = {...this.params, page: '1', query: valor};
    return this.http.get<MovieResponse>(`${this.baseUrl}/movie/${valor}`, {params: searchParams})
    .pipe(
      catchError(err => of(null))
    );
  }

  detallesCreditos(valor: string): Observable<Cast[] | null> {
    const searchParams = {...this.params, page: '1', query: valor};
    return this.http.get<CreditsResponse>(`${this.baseUrl}/movie/${valor}/credits?`, {params: searchParams})
    .pipe(
      map(response => response.cast),
      catchError(err => of([]))
    );
  }

  resetPages() {
    this.carteleraPage = 1;
  }
}
