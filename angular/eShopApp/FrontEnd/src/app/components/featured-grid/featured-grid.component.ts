import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swiper, { Autoplay } from 'swiper';
import { ProductResponse } from '../../interfaces/product-response';

@Component({
  selector: 'app-featured-grid',
  templateUrl: './featured-grid.component.html',
  styleUrls: ['./featured-grid.component.css']
})
export class FeaturedGridComponent implements OnInit, AfterViewInit {
  @Input() productsFeatured: ProductResponse[] = [];
  swiper: Swiper = undefined!;

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.swiper = new Swiper('.swiper-container', {
      pagination: 
      {
        el: '.swiper-pagination',
        dynamicBullets: true,
      },
      slidesPerView: 8.3,
      freeMode: true,
      spaceBetween: 15,
      loop: true,
      autoplay: {
        delay: 2000,
        pauseOnMouseEnter: true
      },
      speed:1000,
      breakpoints: {
        // when window width is >= value
        320: {
          slidesPerView: 2.3,
          spaceBetween: 15
        },
        480: {
          slidesPerView: 3.3,
          spaceBetween: 15
        },
        640: {
          slidesPerView: 5.3,
          spaceBetween: 15
        },
        1024: {
          slidesPerView: 6.3,
          spaceBetween: 15
        },
        1200: {
          slidesPerView: 8.3,
          spaceBetween: 15
        }
      }      
    });
  }

  getProductById(product:ProductResponse) {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>this.router.navigate(['/product', product.id]));
  }

  onSlideNext() {
    this.swiper.slideNext();
  }
  onSlidePrev() {
    this.swiper.slidePrev();
  }  
}
