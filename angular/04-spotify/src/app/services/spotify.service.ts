import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases():any {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQB6hLOfz3KG2tQeNox0kKpU95xYRyUkFw4-c9Y3EaEHNbf8ZELnyDi4i8n6I9Sqdy4Hp0oe1fvdvSlBydY'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers});
    this.getToken().subscribe((data:any) => {
      console.log(data.access_token);
      return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers});
    });
  }

  getArtist(artist:string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQB6hLOfz3KG2tQeNox0kKpU95xYRyUkFw4-c9Y3EaEHNbf8ZELnyDi4i8n6I9Sqdy4Hp0oe1fvdvSlBydY'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${artist}&type=artist&limit=20`, { headers});
  }

  getToken():any {
    let body = new URLSearchParams();
    body.set('grant_type', 'client_credentials');
    body.set('client_id', 'ffe33dff2b264f9c8e10d7d5096319c3');
    body.set('client_secret', '99c4cdd8692443f6b6b95db0ee26c436');
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };    

    return this.http.post('https://accounts.spotify.com/api/token', body.toString(), options);
  }
}
