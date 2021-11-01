import { Component, OnInit } from '@angular/core';
import { YoutubePlayListResponse } from 'src/app/models/youtube-playlist-response';
import { YoutubeService } from '../../services/youtube.service';
import { Video } from '../../models/youtube-playlist-response';
import Swal from 'sweetalert2'
import { ErrorResponse } from 'src/app/interfaces/error-http.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  videos:Video[] = [];
  error:ErrorResponse = undefined!;

  constructor(private youtubeService:YoutubeService) { }

  ngOnInit(): void {
    this.obtenerListaVideos();
  }

  obtenerListaVideos() {
    this.youtubeService.obtenerListaVideos().subscribe((response:Video[]) => {
      // console.log(response);
      this.videos.push(...response);
    },
    
    (error:ErrorResponse) => { 
        this.error = error; 
        Swal.fire({
          title: `Error ${error.status}`,
          icon: 'error',
          html: `<p>${error.error.error.message}</p>`,
          showCloseButton: true,
          confirmButtonText:
            'Cerrar'
        });
      }    
    );
  }

  mostrarVideo(video:Video) {
    Swal.fire({
      title: video.title,
      html: this.youtubeService.embeberVideo(video),
      showCloseButton: true,
      confirmButtonText:
        'Cerrar'
    });
  }
}
