import { Component, OnInit } from '@angular/core';
import { Juego } from 'src/app/interfaces/interfaces';
import Swal from 'sweetalert2';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  juegos:Juego[] = [];

  constructor(private gameServicio: GameService) { }

  ngOnInit(): void {
    this.gameServicio.getNominados().subscribe((response:Juego[]) => {
      this.juegos = response;
    });
  }

  votar(id:string) {
    this.gameServicio.votar(id).subscribe(response => {
      if (response.status) {
        Swal.fire({
          title: 'Gracias',
          text: response.message,
          icon: 'success',
          confirmButtonText: 'Aceptar'
        })
      } else {
        Swal.fire({
          title: 'Error',
          text: response.message,
          icon: 'error',
          confirmButtonText: 'Aceptar'
        })
      }
      });
  }
}
