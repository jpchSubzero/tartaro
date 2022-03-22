import { TypesAction } from "../types/types.action";
import { IActionReducer } from "../interfaces/actions/action.reducer.interface";
import { IError } from "../interfaces/eva/eva.error.interface";

const initialState:IError = {
    code: "",
    message: "",
    details: ""
}

export const errorReducer = (state:IError = initialState, action:IActionReducer<IError>) => {
    switch (action.type) {
        case TypesAction.ERROR_REGISTER:
            return action.payload;
        default:
            return state;
    }
}
