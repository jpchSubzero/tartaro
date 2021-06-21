import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Movie } from '../../interfaces/cartelera-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public movies: Movie[] = [];
  public moviesInfinitas: Movie[] = [];

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const posicion = (document.documentElement.scrollTop || document.body.scrollTop);
    const altoScroll = (document.documentElement.scrollHeight || document.body.scrollHeight);

    if (posicion > (altoScroll * 0.6)) {
      if (!this.peliculasService.cargando) {
        this.peliculasService.getNowPlaying().subscribe(response => {
          this.moviesInfinitas.push(...response);
        });          
      }
    }
  }

  constructor(
    private peliculasService: PeliculasService
  ) {
  }

  ngOnDestroy(): void {
    this.peliculasService.resetPages();
  }

  ngOnInit(): void {
    this.peliculasService.getNowPlaying().subscribe(response => {
      this.movies = response;
      this.moviesInfinitas = response;
    });
  }

}
