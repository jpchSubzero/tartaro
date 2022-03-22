import { IActionReducer } from '../interfaces/actions/action.reducer.interface'
import { IContractCreateResponseResult } from '../interfaces/integration/contract/contract.create.response.interface'
import { TypesAction } from '../types/types.action'

export const createContractAction = (integration:IContractCreateResponseResult | undefined):IActionReducer<IContractCreateResponseResult> => {
  if (!integration) {
    return undefined!;
  }
  const action:IActionReducer<IContractCreateResponseResult> = {
    type: TypesAction.CREATE_CONTRACT,
    payload: integration
  }
  return action;
}
