import { IEvaResponse } from "../eva/eva.response.interface";

export interface ISaleRegisterResponse extends IEvaResponse<IResultISaleRegisterResponse> {
}

export interface IResultISaleRegisterResponse {
    trackingId:             string;
    productId:              string;
    planId:                 string;
    cotizationId:           null;
    subscriptionId:         string;
    wayId:                  string;
    contractorId:           null;
    insuredId:              string;
    contracterId:           string;
    payerId:                string;
    sellerId:               null;
    confirmPayDate:         null;
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
    payId:                  null;
    stateId:                string;
    externalSaleId:         null;
    novaSaleId:             null;
    saleCode:               null;
    paymentStatus:          null;
    saleEvaluation:         null;
    accounts:               any[];
    cardDetail:             ICardDetailSaleRegisterResponse;
    externalSellerCode:     null;
    recurrentDebitAccepted: null;
    channelCode:            string;
    externalBrokerCode:     null;
    id:                     string;
}

export interface ICardDetailSaleRegisterResponse {
    cardNumber:          string;
    dateExpiry:          Date;
    payDate:             Date;
    authorizationNumber: string;
    cardBrand:           string;
    saleId:              string;
    id:                  string;
}
