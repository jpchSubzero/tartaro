// import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // paises:any[] = [];

  // constructor(private http: HttpClient) { 
  //   this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe((data: any) => {
  //     console.log(data);
  //     this.paises = data;
  //   });
  // }

  newReleases:any[] = [];

  constructor(private spotifyService: SpotifyService) { 
    this.spotifyService.getNewReleases().subscribe((data1:any) => {
      console.log(data1.albums.items);
      this.newReleases = data1.albums.items;
    });
  }
  
  ngOnInit(): void {
  }

}
