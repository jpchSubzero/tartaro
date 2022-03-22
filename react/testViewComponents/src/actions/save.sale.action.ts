import { IActionReducer } from '../interfaces/actions/action.reducer.interface'
import { ISaleRegisterInput } from '../interfaces/sale/sale.register.input.interface';
import { TypesAction } from '../types/types.action'

export const saveSaleAction = (input:ISaleRegisterInput  | undefined):IActionReducer<ISaleRegisterInput> => {
  if (!input) {
    return undefined!;
  }
  const action:IActionReducer<ISaleRegisterInput > = {
    type: TypesAction.SALE_REGISTER,
    payload: input
  }
  return action;
}
