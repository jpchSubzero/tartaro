import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poster'
})
export class PosterPipe implements PipeTransform {

  baseUrl: string = 'https://image.tmdb.org/t/p/w500';
  transform(poster: string | null): string {
    if (poster) {
      return `${this.baseUrl}${poster}`
    }
    return 'assets/images/no-image.jpg';
  }

}
