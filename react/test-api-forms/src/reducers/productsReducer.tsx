import { TypesAction } from "../types/types.action";
import { IActionReducer } from "../interfaces/actions/action.reducer.interface";
import { IProductResponseResultValue } from "../interfaces/products/product.response.interface";

const initialState:IProductResponseResultValue[] = [{
    $id: "",
    code: "",
    externalCode: "",
    name: "",
    description: "",
    issuesPolicyMother: false,
    insuranceTypeId: "",
    insuranceCarrierId: "",
    contractTypeId: "",
    isActive: false,
    linkTC: "",
    exclusions: undefined!,
    benefits: undefined!,
    deductibles: undefined!,
    coverages: undefined!,
    requirements: undefined!,
    periodicityPayments: undefined!,
    paymentModes: undefined!,
    assistances: undefined!,
    channels: undefined!,
    id: ""
}]

export const productsReducer = (state:IProductResponseResultValue[] = initialState, action:IActionReducer<IProductResponseResultValue[]>) => {
    switch (action.type) {
        case TypesAction.GET_PRODUCTS:
            return action.payload;
        default:
            return state;
    }
}
