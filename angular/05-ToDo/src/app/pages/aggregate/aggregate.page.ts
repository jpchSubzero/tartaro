import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListItem } from 'src/app/models/list-item.model';
import { List } from 'src/app/models/list.model';
import { WishesService } from '../../services/wishes.service';

@Component({
  selector: 'app-aggregate',
  templateUrl: './aggregate.page.html',
  styleUrls: ['./aggregate.page.scss'],
})
export class AggregatePage implements OnInit {

  list:List;
  itemName:string = '';

  constructor(
    private wishesService:WishesService,
    private route:ActivatedRoute
  ) { 
    this.list = this.wishesService.getList(this.route.snapshot.paramMap.get('idList'));
  }

  addItem() {
    if (this.itemName.length > 0) {
      this.list.items.push(new ListItem(this.itemName));      
      this.wishesService.saveStorage();
      this.itemName = '';
    }
  }

  removeItem(item:number) {
    this.list.items.splice(item, 1);
    this.wishesService.saveStorage();
  }

  itemChecked(item:ListItem) {
    if (this.list.items.filter(x => !x.done).length > 0) {
      this.list.done = false;
      this.list.doneAt = new Date();
    } else {
      this.list.done = true;
      this.list.doneAt = null;
    }
    this.wishesService.saveStorage();
  }

  ngOnInit() {
  }

}
