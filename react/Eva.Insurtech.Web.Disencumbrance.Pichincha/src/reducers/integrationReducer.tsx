import { TypesAction } from "../types/types.action";
import { IActionReducer } from "../interfaces/actions/action.reducer.interface";
import { IContractCreateResponseResult } from "../interfaces/integration/contract/contract.create.response.interface";

const initialState:IContractCreateResponseResult = {
    message: "",
    referenceId: "",
    documentUrl: "",
    documentPath: "",
    documentName: ""
}

export const integrationReducer = (state:IContractCreateResponseResult = initialState, action:IActionReducer<IContractCreateResponseResult>) => {
    switch (action.type) {
        case TypesAction.CREATE_CONTRACT:
            return action.payload;
        default:
            return state;
    }
}
