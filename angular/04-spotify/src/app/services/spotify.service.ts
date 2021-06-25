import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  token:string = 'Bearer BQDhDnD7p08ZM9aexQsCaCzSo6ztqjYZOgLbOUen88j-BLldGY-kaFYhd86uYuz9JZEQJR_g_Tqnz_llOqg';

  constructor(private http: HttpClient) { }

  getQuery(query:string) {

    this.getToken().subscribe((data:any) => {
      console.log(`${data.token_type} ${data.access_token}`);
      this.token = `${data.token_type} ${data.access_token}`;
    });

    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': this.token
    });
    return this.http.get(url, { headers});
  }

  getNewReleases():any {
    return this.getQuery('browse/new-releases?limit=20')
      .pipe(map((data:any) => data.albums.items
    ));
  }

  getArtists(artist:string) {
    return this.getQuery(`search?q=${artist}&type=artist&limit=20`)
      .pipe(map((data:any) => data.artists.items
    ));
  }

  getArtistById(id:string) {
    return this.getQuery(`artists/${id}`)
      .pipe(map((data:any) => data
    ));
  }

  getTopTracks(id:string) {
    return this.getQuery(`artists/${id}/top-tracks?market=ES`)
      .pipe(map((data:any) => data.tracks
    ));
  }

  getToken():any {
    let body = new URLSearchParams();
    body.set('grant_type', 'client_credentials');
    body.set('client_id', 'ffe33dff2b264f9c8e10d7d5096319c3');
    body.set('client_secret', '99c4cdd8692443f6b6b95db0ee26c436');
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };    

    return this.http.post<any[]>('https://accounts.spotify.com/api/token', body.toString(), options);

  }
}
