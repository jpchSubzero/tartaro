import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CartItem } from '../interfaces/cart-item';
import { CustomerResponse } from '../interfaces/customers-response';
import { ProductResponse } from '../interfaces/product-response';
import { ShoppingCartRequest } from '../interfaces/shopping-cart-request-interface';
import { ShoppingCartResponse } from '../interfaces/shopping-cart-response-interface';
import { EshopService } from './eshop.service';
import { LocalStorageService } from './local-storage.service';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    public eshopService:EshopService,
    private storage:LocalStorageService,
    private notification:NotificationService    
  ) { }

  addProductToCart(product:ProductResponse):void {
    let itemToCart:ShoppingCartRequest = {
      customerId: -1,
      productId: product.id,
      quantity: 1
    }

    if (this.eshopService.customer) {
      itemToCart.customerId = this.eshopService.customer.id;
      this.eshopService.saveCartItem(itemToCart).subscribe((response:ShoppingCartResponse) => {
        this.notification.showAutoCloseAlert('Se ha agregado al carrito', product.name);
      });
    } else {
      const cart:CartItem = {
            id: -1,
            quantity: 1,
            lineItemTotal: product.currentPrice,
            product:product
      }
      this.storage.saveCartOnStorage(cart);
      this.notification.showAutoCloseAlert('Se ha agregado al carrito', product.name);
      // console.log(JSON.parse(this.storage.readStorage(environment.storageCart)));
    }
  }  

  getCartOfCustomer(customer:CustomerResponse) {
    this.eshopService.getCartByCustomer(customer).subscribe((response:ShoppingCartResponse) => {
      this.storage.saveStorage(environment.storageCart, JSON.stringify(response));
      // console.log(response);
    });
  }

  getTotalItemsInCart():number {
    const cartString:string = this.storage.readStorage(environment.storageCart);
    // console.log(cartString);
    if (cartString) {
      const cart:ShoppingCartResponse = JSON.parse(this.storage.readStorage(environment.storageCart));
      return cart.cartItems.reduce((sum, current) => sum + current.quantity, 0);        
    }
    return 0;
  }
}
