import { Injectable } from '@angular/core';
import { StorageService } from 'factor-utils';
import { ShoppingCartRequest } from '../interfaces/shopping-cart-request-interface';
import { environment } from '../../environments/environment';
import { ShoppingCartResponse } from '../interfaces/shopping-cart-response-interface';
import { CartItem } from '../interfaces/cart-item';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(
    private storage:StorageService
  ) { }

  saveStorage(key: string, value:string):void {
    this.storage.set(key, value);
  }

  readStorage(key: string): string {
    return this.storage.get(key);
  }

  deleteStorage(key: string): void {
    this.storage.delete(key);
  }

  saveCartOnStorage(itemToCart:CartItem):number {
    const itemsInCartString:string = this.readStorage(environment.storageCart);
    let quantity:number = 1;
    let itemsInCart:CartItem[] = [];
    let cart:ShoppingCartResponse = undefined!;
    if (itemsInCartString) {
      cart = JSON.parse(itemsInCartString);
      itemsInCart = cart.cartItems;
      let itemWithProduct:CartItem | undefined = itemsInCart.find(x => x.product.id == itemToCart.product.id);
      if (itemWithProduct) {
        itemWithProduct.quantity++;
        itemWithProduct.lineItemTotal = itemWithProduct.product.currentPrice * itemWithProduct.quantity;
        quantity = itemWithProduct.quantity;
      } else {
        cart.cartItems.push(itemToCart);
      }
    } else {
      itemsInCart.push(itemToCart);
      cart = {
        customer: {
          id: -1,
          firstName: '',
          lastName: '',
          email: ''
        },
        cartItems: itemsInCart
      };
    }
    this.saveStorage(environment.storageCart, JSON.stringify(cart));
    return quantity;
  }


}
