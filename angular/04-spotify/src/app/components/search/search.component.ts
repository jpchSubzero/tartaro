import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private spotify:SpotifyService) { 
    this.loading = false;
  }

  artists:any[] = [];
  loading:boolean;


  search(artist:string) {
    this.loading = true;

    console.log(artist);
    console.log(this.loading);

    this.spotify.getArtists(artist).subscribe((data:any) => {
      console.log(data);
      this.artists = data;
      this.loading = false;
    });
  }

  ngOnInit(): void {
  }

}
