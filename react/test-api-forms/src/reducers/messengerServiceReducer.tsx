import { TypesAction } from "../types/types.action";
import { IActionReducer } from "../interfaces/actions/action.reducer.interface";
import { IMessengerServiceWelcomeResponse } from "../interfaces/messengerservice/messengerservice.welcome.response.interface";

const initialState:IMessengerServiceWelcomeResponse = {
    success: false,
    result: undefined!,
    error: undefined!,
    targetUrl: "",
    unAuthorizedRequest: false
}

export const messengerServiceReducer = (state:IMessengerServiceWelcomeResponse = initialState, action:IActionReducer<IMessengerServiceWelcomeResponse>) => {
    switch (action.type) {
        case TypesAction.EMAIL_WELCOME:
            return action.payload;
        default:
            return state;
    }
}
