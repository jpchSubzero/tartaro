import { CartItem } from './cart-item';
import { CustomerResponse } from './customers-response';

export interface ShoppingCartResponse {
    customer:  CustomerResponse;
    cartItems: CartItem[];
}




