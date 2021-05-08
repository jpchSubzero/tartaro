import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from '../../services/heroes/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroesData: Heroe[] = [];

  constructor(
    private _heroesService: HeroesService, 
    private _router: Router
  ) { 
    console.log("Constructor");
  }

  ngOnInit(): void {
    console.log("ngOnInit");
    this.heroesData = this._heroesService.getHeroes();
    console.log(this.heroesData);
  }

  showHeroe(index: number) {
    this._router.navigate(['/heroe', index]);
  }
}
