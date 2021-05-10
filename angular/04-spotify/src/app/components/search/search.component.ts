import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private spotify:SpotifyService) { }

  artists:any[] = [];

  search(artist:string) {
    console.log(artist);
    this.spotify.getArtist(artist).subscribe((data:any) => {
      console.log(data.artists.items);
      this.artists = data.artists.items;
    });
  }

  ngOnInit(): void {
  }

}
