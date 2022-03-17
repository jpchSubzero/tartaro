import { IEvaResponse } from "../eva/eva.response.interface";

export interface IFinalizeSaleResponse extends IEvaResponse<IFinalizeSaleResponseResult> {
}

export interface IFinalizeSaleResponseResult {
    trackingId:             string;
    productId:              string;
    planId:                 string;
    cotizationId:           string;
    subscriptionId:         string;
    wayId:                  string;
    contractorId:           string;
    insuredId:              string;
    contracterId:           string;
    payerId:                string;
    sellerId:               string;
    confirmPayDate:         Date;
    startVigencyDate:       Date;
    endVigencyDate:         Date;
    cancelationDate:        Date;
    renovationDate:         Date;
    subTotal0:              number;
    subTotal12:             number;
    tax:                    number;
    totatlPrice:            number;
    termAndConditionId:     string;
    paymentMethodId:        string;
    paymentPeriodicityId:   string;
    payId:                  string;
    stateId:                string;
    externalSaleId:         string;
    novaSaleId:             string;
    saleCode:               string;
    paymentStatus:          string;
    saleEvaluation:         string;
    accounts:               any[];
    cardDetail:             null;
    externalSellerCode:     string;
    recurrentDebitAccepted: string;
    channelCode:            string;
    externalBrokerCode:     string;
    id:                     string;
}
