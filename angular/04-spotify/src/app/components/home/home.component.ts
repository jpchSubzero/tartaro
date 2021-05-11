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
  loading:boolean;
  error:boolean = false;
  errorMessage:string = 'false';

  constructor(private spotifyService: SpotifyService) { 
    this.loading = true;
    this.spotifyService.getNewReleases().subscribe((data:any) => {
      console.log(data);
      this.newReleases = data;
      this.loading = false;
    }, (errorServicio:any) => {
      this.loading = false;
      this.error = true;
      console.error(errorServicio.error.error.message);
      this.errorMessage = errorServicio.error.error.message;
    }
    );
  }
  
  ngOnInit(): void {
  }

}
