import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/cartelera-response';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  public movies: Movie[] = [];
  public valor: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private peliculasService: PeliculasService
  ) { 

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.peliculasService.search(params.text).subscribe(response => {
        this.valor = params.text;
        this.movies = response;
      });
    });
  }
}
