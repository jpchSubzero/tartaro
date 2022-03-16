import { IActionReducer } from '../interfaces/actions/action.reducer.interface'
import { ICreateOtpResponseResult } from '../interfaces/integration/otp/create.otp.response.interface';
import { TypesAction } from '../types/types.action'

export const createOtpAction = (otp:ICreateOtpResponseResult | undefined):IActionReducer<ICreateOtpResponseResult> => {
  if (!otp) {
    return undefined!;
  }
  const action:IActionReducer<ICreateOtpResponseResult> = {
    type: TypesAction.CREATE_OTP,
    payload: otp
  }
  return action;
}
