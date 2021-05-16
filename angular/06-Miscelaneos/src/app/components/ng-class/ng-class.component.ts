import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styles: [
  ]
})
export class NgClassComponent implements OnInit {

  index:number = 0;

  alerts:string[] = ['alert alert-primary','alert alert-secondary','alert alert-success','alert alert-danger','alert alert-warning','alert alert-info','alert alert-light','alert alert-dark'];

  loading:boolean = false;

  propertiesObject = {
    danger: false
  }

  constructor() { }

  ngOnInit(): void {
  }

  getRandomAlert() {
    this.index = Math.round(Math.random() * (this.alerts.length - 1));
    this.propertiesObject.danger = this.index ===3 ? true : false;
  }  

  execute() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 5000);
  }
}
