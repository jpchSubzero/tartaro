import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { HeroeModel } from 'src/app/models/heroe.model';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe = new HeroeModel();

  constructor(
    private heroesService: HeroesService
  ) { }

  ngOnInit(): void {
  }

  saveHeroe(heroeForm: NgForm) {
    if (!heroeForm.valid) {
      console.log('Formulario inválido');    
      return;  
    }

    if (this.heroe.id) {
      this.heroesService.updateHeroe(this.heroe).subscribe(response => {
        console.log(response);
      });  
    } else {
      console.log('Crear');
      this.heroesService.createHeroe(this.heroe).subscribe(response => {
        console.log(response);
      });  
    }
    console.log(heroeForm);
    console.log(this.heroe);
  }  
}
