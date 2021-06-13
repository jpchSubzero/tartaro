import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { HeroeModel } from '../../models/heroe.model';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: HeroeModel[] = [];
  loading: boolean = true;

  constructor(
    private heroesService: HeroesService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.getHeroes();    
  }

  deleteHeroe(heroe: HeroeModel, idx: number) {
    Swal.fire({
      title: `¿Seguro borrar ${heroe.nombre}?`,
      showDenyButton: true,
      confirmButtonText: `Si`,
      denyButtonText: `No`,
      customClass: {
        confirmButton: 'btn btn-danger',
        denyButton: 'btn btn-success',
      }
    }).then((result) => {
      if (result.isConfirmed) {
        this.heroesService.deleteHeroe(heroe.id).subscribe(response => {
          Swal.fire({
            title: heroe.nombre,
            text: 'Eliminado exitosamente',
            icon: 'error'
          });
          this.heroes.splice(idx, 1);
          console.log(response);
        });
      }
    })

  }

  getHeroes() {
    this.heroesService.getHeroes().subscribe(response => {
      this.heroes = response;
      this.loading = false;
    });
  }


}
