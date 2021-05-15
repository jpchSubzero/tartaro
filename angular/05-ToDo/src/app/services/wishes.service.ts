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
    }
  }

  addList(title:string):number {
    let newList:List = new List(title);
    this.lists.push(newList);
    this.saveStorage();
    return newList.id;
  }

  removeList(list:List) {
    this.lists = this.lists.filter(x => x.id !== list.id);
    this.saveStorage();
  }

  editList(list:List, title:string) {
    list.title = title;
    this.saveStorage();
  }

  getList(id:string | number):List {
    id = Number(id);
    return this.lists.find(x => x.id === id);
  }

  saveStorage() {
    localStorage.setItem('data', JSON.stringify(this.lists))
  }

  loadStogare() {
    this.lists = JSON.parse(localStorage.getItem('data'));
  }  
}
