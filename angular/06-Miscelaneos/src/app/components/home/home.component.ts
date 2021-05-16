import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-ng-style></app-ng-style>
    <hr>
    <app-css></app-css>
    <p>
        Texto sin estilo con alcance (scope) de componente
    </p>
    <hr>
    <app-ng-class></app-ng-class>

    <hr>

    <h3>Directivas personalizadas</h3>

    <p appHighlight>Texto con directiva personalizada</p>
    <p>Texto sin directiva personalizada</p>
    <p>
        <strong [appHighlight]="'orange'">Texto con directiva personalizada</strong>
    </p>
    <p>
        <strong>Texto sin directiva personalizada</strong>
    </p>

    <button appHighlight class="btn btn-primary">Botón</button>

    <hr>

    <h3>ngSwitch</h3>

    <app-ng-switch></app-ng-switch>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
