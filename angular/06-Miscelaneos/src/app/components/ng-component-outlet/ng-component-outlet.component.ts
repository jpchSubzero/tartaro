import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clase-interna',
  template: `
    <p>
      Texto de la clase interna
    </p>
  `,
  styles: [
  `
  p {
    color: red;
    font-size: 20px;
  }
  `
  ]
})
export class ClaseInternaComponent {
}

@Component({
  selector: 'app-ng-component-outlet',
  templateUrl: './ng-component-outlet.component.html',
  styleUrls: ['./ng-component-outlet.component.css']
})
export class NgComponentOutletComponent implements OnInit {

  ClaseInternaComponent = ClaseInternaComponent;
  
  constructor() { }

  ngOnInit(): void {
  }

}
