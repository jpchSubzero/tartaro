import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productName'
})
export class ProductNamePipe implements PipeTransform {

  transform(name: string, limit: number = 50): string {
    if (name.length > limit) {
      return `${name.slice(0, limit)}...`;
    }
    return name;
  }

}
