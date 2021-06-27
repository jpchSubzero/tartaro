import { Component, OnInit } from '@angular/core';
import { YoutubePlayListResponse } from 'src/app/models/youtube-playlist-response';
import { YoutubeService } from '../../services/youtube.service';
import { Video } from '../../models/youtube-playlist-response';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  videos:Video[] = [];

  constructor(private youtubeService:YoutubeService) { }

  ngOnInit(): void {
    this.obtenerListaVideos();
  }

  obtenerListaVideos() {
    this.youtubeService.obtenerListaVideos().subscribe((response:Video[]) => {
      // console.log(response);
      this.videos.push(...response);
    });
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
