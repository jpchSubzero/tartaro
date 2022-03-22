import { IActionReducer } from '../interfaces/actions/action.reducer.interface'
import { IProductResponseResultValue } from '../interfaces/products/product.response.interface';
import { TypesAction } from '../types/types.action'

export const getProductsAction = (products:IProductResponseResultValue[] | undefined):IActionReducer<IProductResponseResultValue[]> => {
  if (!products) {
    return undefined!;
  }
  const action:IActionReducer<IProductResponseResultValue[]> = {
    type: TypesAction.GET_PRODUCTS,
    payload: products
  }
  return action;
}
