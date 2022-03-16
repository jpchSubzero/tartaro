import { TypesAction } from "../types/types.action";
import { IActionReducer } from "../interfaces/actions/action.reducer.interface";
import { ISubscriptionResponseResult } from "../interfaces/subscription/subscription.response.interface";

const initialState:ISubscriptionResponseResult = {
    id: "",
    trackingId: "",
    proformId: "",
    productId: "",
    planId: "",
    insuredId: "",
    contractorId: "",
    payerId: "",
    state: ""
}

export const subscriptionReducer = (state:ISubscriptionResponseResult = initialState, action:IActionReducer<ISubscriptionResponseResult>) => {
    switch (action.type) {
        case TypesAction.CREATE_SUBSCRIPTION:
            return action.payload;
        default:
            return state;
    }
}
