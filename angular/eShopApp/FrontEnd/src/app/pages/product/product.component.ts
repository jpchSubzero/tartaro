import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductResponse } from 'src/app/interfaces/product-response';
import { CartService } from 'src/app/services/cart.service';
import { EshopService } from 'src/app/services/eshop.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, AfterViewInit {

  product:ProductResponse = undefined!;

  constructor(
    public eshopService:EshopService,
    private activatedRoute: ActivatedRoute,
    private cart:CartService
  ) { 
  }

  addProductToCart(product:ProductResponse):void {
    this.cart.addProductToCart(product);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    console.log(this.eshopService.products);
    this.eshopService.getProductById(id).subscribe((response:ProductResponse) => {
      this.product = response;
    });
  }
}
