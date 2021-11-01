import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: NbMenuItem[] = [
    {
      title: 'Usuarios',
      icon: 'person-outline',  
      link: '/users'
    },
    {
      title: 'Posts',
      icon: 'bookmark-outline',  
      link: '/posts'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
