import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Juego } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {


  results:any[] = [];

  constructor(private db:AngularFirestore) { }

  ngOnInit(): void {
    this.db.collection('goty').valueChanges()
      .pipe(
        map((resp:any) => {
          return resp.map((juego:Juego) => {
            return {
              name: juego.name,
              value: juego.votes
            }
          })
        })
      )
      .subscribe(response => {
        this.results = response;
      });
  }

}
