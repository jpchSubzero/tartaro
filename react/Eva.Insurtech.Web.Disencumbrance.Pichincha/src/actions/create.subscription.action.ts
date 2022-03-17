import { IActionReducer } from '../interfaces/actions/action.reducer.interface'
import { ISubscriptionResponseResult } from '../interfaces/subscription/subscription.response.interface'
import { TypesAction } from '../types/types.action'

export const createSubscriptionAction = (subscription:ISubscriptionResponseResult | undefined):IActionReducer<ISubscriptionResponseResult> => {
  if (!subscription) {
    return undefined!;
  }
  const action:IActionReducer<ISubscriptionResponseResult> = {
    type: TypesAction.CREATE_SUBSCRIPTION,
    payload: subscription
  }
  return action;
}
