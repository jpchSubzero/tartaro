import { ISaleRegisterInput } from '../hooks/useSale'
import { IActionReducer } from '../interfaces/actions/action.reducer.interface'
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
