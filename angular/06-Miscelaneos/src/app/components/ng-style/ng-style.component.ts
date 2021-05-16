import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [ngStyle]="{'font-size': '15px'}">
      ngStyle con valor fijo <code>&lt;p&gt;.</code>
    </p>
    <p [ngStyle]="{'font-size': fontSize + 'px'}">
      ngStyle concatenacion de valor <code>&lt;p&gt;.</code>
    </p>
    <p [style.fontSize]="'40px'">
      style.&lt;propiedad&gt; con valor fijo <code>&lt;p&gt;.</code>
    </p>
    <p [style.fontSize.px]="fontSize">
      style.&lt;propiedad&gt;.&lt;unidad&gt; concatenacion de valor <code>&lt;p&gt;.</code>
    </p>
    <p [ngStyle]="{'font-size': fontSize + 'px', 'color': colors[index]}">
      ngStyle varios atributos concatenacion de valor <code>&lt;p&gt;.</code>
    </p>
    <button class="btn btn-primary" (click)="fontSize = fontSize + 5"><i class="fa fa-plus"></i></button>
    <button class="btn btn-primary" (click)="fontSize = fontSize - 5"><i class="fa fa-minus"></i></button>
    <button [ngStyle]="{'background-color': colors[index]}" class="btn btn-primary" (click)="getRandomColor()">Cambiar color</button>
  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {

  fontSize:number = 25;
  colors:string[] = ['black', 'silver', 'gray', 'white', 'maroon', 'red', 'purple', 'fuchsia', 'green', 'lime', 'olive', 'yellow', 'navy', 'blue', 'teal', 'aqua'];
  index:number = 0;

  constructor() { }

  getRandomColor() {
    this.index = Math.round(Math.random() * (this.colors.length - 1));
    console.log(this.index);
  }

  ngOnInit(): void {
  }

}
