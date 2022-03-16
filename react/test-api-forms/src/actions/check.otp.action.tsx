import { IActionReducer } from '../interfaces/actions/action.reducer.interface'
import { ICheckOtpResponseResult } from '../interfaces/integration/otp/check.otp.response.interface';
import { TypesAction } from '../types/types.action'

export const checkOtpAction = (otp:ICheckOtpResponseResult | undefined):IActionReducer<ICheckOtpResponseResult> => {
  if (!otp) {
    return undefined!;
  }
  const action:IActionReducer<ICheckOtpResponseResult> = {
    type: TypesAction.CHECK_OTP,
    payload: otp
  }
  return action;
}
