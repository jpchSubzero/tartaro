import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { HeroeModel } from 'src/app/models/heroe.model';
import { HeroesService } from '../../services/heroes.service';

import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: HeroeModel = new HeroeModel();

  constructor(
    private heroesService: HeroesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id !== 'nuevo') {
      this.heroesService.getHeroe(id === null ? '' : id).subscribe((response: any) => {
        this.heroe = response as HeroeModel;
        this.heroe.id = id === null ? '' : id;
      });
    }
  }

  saveHeroe(heroeForm: NgForm) {
    if (!heroeForm.valid) {
      console.log('Formulario inválido');    
      return;  
    }

    Swal.fire({
      title: 'Espere',
      text: 'Guardando información',
      icon: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();

    let request: Observable<any>;

    if (this.heroe.id) {
      // Guardando el observable para procesar después
      request = this.heroesService.updateHeroe(this.heroe);

      // Específicando dentro del subscribe el detener loading
      // this.heroesService.updateHeroe(this.heroe).subscribe(response => {
      //   console.log(response);
      //   Swal.hideLoading();
      // });  
    } else {
      // Guardando el observable para procesar después
      request = this.heroesService.createHeroe(this.heroe);

      // Específicando dentro del subscribe el detener loading
      // console.log('Crear');
      // this.heroesService.createHeroe(this.heroe).subscribe(response => {
      //   console.log(response);
      //   Swal.hideLoading();
      // });  
    }

    // Procesar el subscribe independientemente del método
    request.subscribe(response => {
      Swal.fire({
        title: this.heroe.nombre,
        text: 'Información guardada exitosamente',
        icon: 'success'
      });
      console.log(response);      
    });  
      console.log(heroeForm);
    console.log(this.heroe);
  }  
}
