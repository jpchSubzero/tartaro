import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../models/list.model';

@Pipe({
  name: 'doneFilter',
  pure: false
})
export class DoneFilterPipe implements PipeTransform {

  transform(lists:List[], done:boolean = true):List[] {
    console.log(lists.filter(x => x.done === done));
    return lists.filter(x => x.done === done);
  }
}
