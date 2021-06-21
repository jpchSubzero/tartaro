import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';
import { MovieResponse } from '../../interfaces/movie-response';
import { Location } from '@angular/common';
import { Cast } from '../../interfaces/credits-response';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  public pelicula: MovieResponse = undefined!;
  public creditos: Cast[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private peliculasService: PeliculasService,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;

    combineLatest([
      this.peliculasService.detallesPelicula(id),
      this.peliculasService.detallesCreditos(id)
    ]).subscribe(([pelicula, creditos]) => {
      this.pelicula = undefined!;        
      this.creditos = undefined!;        
      if (!pelicula) {
        this.router.navigateByUrl('/home');
        return;
      }
      this.pelicula = pelicula;        

      if (!creditos) {
        this.router.navigateByUrl('/home');
        return;
      }
      this.creditos = creditos;

    });

    // this.peliculasService.detallesPelicula(id).subscribe(responsePelicula => {
    //   this.pelicula = undefined!;        
    //   if (!responsePelicula) {
    //     this.router.navigateByUrl('/home');
    //     return;
    //   }
    //   this.pelicula = responsePelicula;        
    // });
    // this.peliculasService.detallesCreditos(id).subscribe(responseCredits => {
    //   this.creditos = undefined!;        
    //   if (!responseCredits) {
    //     return;
    //   }
    //   this.creditos = responseCredits;
    // });


  }

  backHome() {
    this.location.back();
  }

}
