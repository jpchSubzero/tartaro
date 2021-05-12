import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class WishesService {

  lists:List[] = [];

  constructor() { 
    this.loadStogare();

    if (this.lists == null) {
      this.lists = [];
      const list1 = new List('Lista 1');    
      const list2 = new List('Lista 2');    
      this.lists.push(list1, list2);        
    }
  }

  addList(title:string) {
    this.lists.push(new List(title));
    this.saveStorage();
  }


  saveStorage() {
    localStorage.setItem('data', JSON.stringify(this.lists))
  }

  loadStogare() {
    this.lists = JSON.parse(localStorage.getItem('data'));
  }  
}
