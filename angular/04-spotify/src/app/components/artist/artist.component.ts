import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  loading:boolean = false;
  artist:any = {};
  topTracks:any = {};

  constructor(private route:ActivatedRoute, private spotifyService:SpotifyService) { 
    this.loading = true;
    this.route.params.subscribe(params => {
      console.log(params.id);
      this.getArtist(params.id);
      this.getTopTracks(params.id);
    });
  }

  getArtist(id:string) {
    this.loading = true;
    this.spotifyService.getArtistById(id).subscribe((artist:any) => {
      console.log(artist);
      this.artist = artist;
      this.loading = false;
    });      
  }

  getTopTracks(id:string) {
    this.loading = true;
    this.spotifyService.getTopTracks(id).subscribe((topTracks:any) => {
      console.log(topTracks);
      this.topTracks = topTracks;
      this.loading = false;
    });      
  }

  ngOnInit(): void {
  }


}
