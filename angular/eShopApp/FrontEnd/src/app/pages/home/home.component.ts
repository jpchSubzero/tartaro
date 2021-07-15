import { Component, OnInit } from '@angular/core';
import { EshopService } from '../../services/eshop.service';
import { ProductResponse } from '../../interfaces/product-response';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { environment } from 'src/environments/environment';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  quantity: number = 0;
  
  constructor(
    public eshopService:EshopService,
    private router:Router,
    private storage:LocalStorageService,
    private cart:CartService
  ) { 
    if (!this.eshopService.products || this.eshopService.products.length == 0) {
      this.eshopService.getProducts().subscribe((response:ProductResponse[]) => {
        this.eshopService.products = response.sort((a,b) => 0 - (a > b ? -1 : 1));
      });        
    }
    try {
      console.log(JSON.parse(this.storage.readStorage(environment.storageCart)));
      
    } catch (error) {
      
    }
  }

  getProductById(product:ProductResponse):void {
      this.router.navigate(['/product', product.id]);
  }

  addProductToCart(product:ProductResponse):void {
    this.cart.addProductToCart(product);
  }

  ngOnInit(): void {
  }
}
