import { TypesAction } from "../types/types.action";
import { IActionReducer } from "../interfaces/actions/action.reducer.interface";
import { ISaleRegisterInput } from "../hooks/useSale";

const initialState:ISaleRegisterInput = {
    cardNumber: "",
    cardBrand: ""
}

export const saleRegisterReducer = (state:ISaleRegisterInput = initialState, action:IActionReducer<ISaleRegisterInput>) => {
    switch (action.type) {
        case TypesAction.SALE_REGISTER:
            return action.payload;
        default:
            return state;
    }
}
