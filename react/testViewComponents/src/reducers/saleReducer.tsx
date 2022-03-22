import { TypesAction } from "../types/types.action";
import { IActionReducer } from "../interfaces/actions/action.reducer.interface";
import { IFinalizeSaleResponseResult } from "../interfaces/sale/finalize.sale.response.interface";

const initialState:IFinalizeSaleResponseResult = {
    trackingId: "",
    productId: "",
    planId: "",
    cotizationId: "",
    subscriptionId: "",
    wayId: "",
    contractorId: "",
    insuredId: "",
    contracterId: "",
    payerId: "",
    sellerId: "",
    confirmPayDate: undefined!,
    startVigencyDate: undefined!,
    endVigencyDate: undefined!,
    cancelationDate: undefined!,
    renovationDate: undefined!,
    subTotal0: 0,
    subTotal12: 0,
    tax: 0,
    totatlPrice: 0,
    termAndConditionId: "",
    paymentMethodId: "",
    paymentPeriodicityId: "",
    payId: "",
    stateId: "",
    externalSaleId: "",
    novaSaleId: "",
    saleCode: "",
    paymentStatus: "",
    saleEvaluation: "",
    accounts: undefined!,
    cardDetail: undefined!,
    externalSellerCode: "",
    recurrentDebitAccepted: "",
    channelCode: "",
    externalBrokerCode: "",
    id: ""
}

export const saleReducer = (state:IFinalizeSaleResponseResult = initialState, action:IActionReducer<IFinalizeSaleResponseResult>) => {
    switch (action.type) {
        case TypesAction.FINALIZE_SALE:
            return action.payload;
        default:
            return state;
    }
}
