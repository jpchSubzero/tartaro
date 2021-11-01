import { AfterContentInit, AfterViewInit } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import Swiper from 'swiper';
import { Movie } from '../../interfaces/cartelera-response';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit {

  @Input() movies: Movie[] = [];
  swiper: Swiper = new Swiper('', {});
  urlImg:string = environment.urlImg;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.swiper = new Swiper('.swiper-container', {
      loop: true
    });
  }

  onSlideNext() {
    this.swiper.slideNext();
  }
  onSlidePrev() {
    this.swiper.slidePrev();
  }
}
