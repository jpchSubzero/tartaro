import { ProductResponse } from "./product-response";

export interface CartItem {
    id:            number;
    quantity:      number;
    lineItemTotal: number;
    product:       ProductResponse;
}