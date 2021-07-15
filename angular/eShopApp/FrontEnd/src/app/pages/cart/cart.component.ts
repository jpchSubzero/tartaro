import { Component, OnInit } from '@angular/core';
import { ShoppingCartResponse } from 'src/app/interfaces/shopping-cart-response-interface';
import { EshopService } from 'src/app/services/eshop.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { environment } from 'src/environments/environment';
import { ShoppingCartRequest } from '../../interfaces/shopping-cart-request-interface';
import { CartItem } from '../../interfaces/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart:ShoppingCartResponse = undefined!;
  totalToOrder:number = 0;
  totalItems:number = 0;


  constructor(
    private eshopService:EshopService,
    private storage:LocalStorageService
  ) { 
    const cartString = this.storage.readStorage(environment.storageCart);
    if (cartString) {
      this.cart= JSON.parse(cartString);
      this.updateCart();
    }

  }

  placeOrder() {

  }

  lessProduct(item:CartItem) {
    item.quantity--;
    item.lineItemTotal = item.quantity * item.product.currentPrice;
    if (item.quantity == 0) {
      for (let i = 0; i < this.cart.cartItems.length; i++) {
        if (this.cart.cartItems[i].product.id === item.product.id) {
          this.cart.cartItems.splice(i, 1);
          break;
        }
      }
    }
    if (this.eshopService.customer) {
      this.eshopService.removeCartItem({customerId:this.eshopService.customer.id, productId:item.product.id, quantity:1}).subscribe(response => {
        console.log(response);
      });      
    }

    this.updateCart();
  }

  moreProduct(item:CartItem) {
    item.quantity++;
    item.lineItemTotal = item.quantity * item.product.currentPrice;
    if (this.eshopService.customer) {
      this.eshopService.saveCartItem({customerId:this.eshopService.customer.id, productId:item.product.id, quantity:1}).subscribe(response => {
        console.log(response);
      });      
    }
    this.updateCart();
  }

  updateCart() {
    this.totalToOrder = Math.round((this.cart.cartItems.reduce((sum, current) => sum + current.lineItemTotal, 0) + Number.EPSILON) * 100) / 100;
    this.totalItems = this.cart.cartItems.reduce((sum, current) => sum + current.quantity, 0);
    this.storage.saveStorage(environment.storageCart, JSON.stringify(this.cart));
  }

  ngOnInit(): void {
  }

}
