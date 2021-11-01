import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'poster'
})
export class PosterPipe implements PipeTransform {

  // baseUrl: string = 'https://image.tmdb.org/t/p/w500';
  baseUrl: string = environment.urlImg;

  transform(poster: string | null): string {
    if (poster) {
      return `${this.baseUrl}${poster}`
    }
    return 'assets/images/no-image.jpg';
  }

}
