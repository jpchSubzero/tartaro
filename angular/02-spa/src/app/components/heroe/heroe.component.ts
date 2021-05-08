import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: any = {};

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService
  ) { 
    this._activatedRoute.params.subscribe(params => {
      console.log(params.id);
      this.heroe = _heroesService.getHeroe(params.id);
    });
  }

  ngOnInit(): void {
  }

}
