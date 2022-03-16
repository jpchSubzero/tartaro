import { TypesAction } from "../types/types.action";
import { IActionReducer } from "../interfaces/actions/action.reducer.interface";
import { ICreateOtpResponseResult } from "../interfaces/integration/otp/create.otp.response.interface";

const initialState:ICreateOtpResponseResult = {
    referenceId: "",
    otpReference: "",
    expiration: undefined!
}

export const otpReducer = (state:ICreateOtpResponseResult = initialState, action:IActionReducer<ICreateOtpResponseResult>) => {
    switch (action.type) {
        case TypesAction.CREATE_OTP:
            return action.payload;
        default:
            return state;
    }
}
