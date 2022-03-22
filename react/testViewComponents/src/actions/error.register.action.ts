import { IActionReducer } from '../interfaces/actions/action.reducer.interface';
import { IError } from '../interfaces/eva/eva.error.interface';
import { TypesAction } from '../types/types.action';

export const errorRegisterAction = (error:IError  | undefined):IActionReducer<IError> => {
  if (!error) {
    return undefined!;
  }
  const action:IActionReducer<IError > = {
    type: TypesAction.ERROR_REGISTER,
    payload: error
  }
  return action;
}
