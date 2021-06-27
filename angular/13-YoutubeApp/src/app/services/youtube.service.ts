import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { YoutubePlayListResponse, Video } from '../models/youtube-playlist-response';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  API_KEY:string = 'AIzaSyCDWnmvyzYxO4emawDfArfU8JlXS19k4fk';
  CHANNERL_ID:string = 'UCeyPVK1HTNjwurYn1_cfhJw';
  UPLOADS:string = 'UUeyPVK1HTNjwurYn1_cfhJw';
  URL_BASE:string = 'https://www.googleapis.com/youtube/v3/';
  nextPageToken:string = '';

  constructor(private http:HttpClient) { }

  obtenerListaVideos() {
    const params = new HttpParams()
    .set('part', 'snippet')
    .set('maxResults', '10')
    .set('playlistId', this.UPLOADS)
    .set('pageToken', this.nextPageToken)
    .set('key', this.API_KEY);
    return this.http.get<YoutubePlayListResponse>(`${this.URL_BASE}playlistItems`, { params })
    .pipe(
      map(response => {
        this.nextPageToken = response.nextPageToken;
        return response.items
      }),
      map(items => {
        return items.map(x => x.snippet);
      })
    );
  }

  embeberVideo(video:Video):string {
    return `<iframe width="100%" height="315" src="https://www.youtube.com/embed/${video.resourceId.videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  }
}
