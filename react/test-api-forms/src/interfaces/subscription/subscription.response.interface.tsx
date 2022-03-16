import { IEvaResponse } from "../eva/eva.response.interface";

export interface ISubscriptionResponse extends IEvaResponse<ISubscriptionResponseResult> {
}

export interface ISubscriptionResponseResult {
    id:           string;
    trackingId:   string;
    proformId?:    string;
    productId:    string;
    planId:       string;
    insuredId:    string;
    contractorId?: string;
    payerId:      string;
    state:        string;
}
