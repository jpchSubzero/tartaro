import { IActionReducer } from '../interfaces/actions/action.reducer.interface'
import { TypesAction } from '../types/types.action'
import { IMessengerServiceWelcomeResponse } from '../interfaces/messengerservice/messengerservice.welcome.response.interface';

export const emailWelcomeAction = (welcome:IMessengerServiceWelcomeResponse | undefined):IActionReducer<IMessengerServiceWelcomeResponse> => {
  if (!welcome) {
    return undefined!;
  }
  const action:IActionReducer<IMessengerServiceWelcomeResponse> = {
    type: TypesAction.EMAIL_WELCOME,
    payload: welcome
  }
  return action;
}
