export interface ISubscriptionRequest {
    productCode:         string;
    planCode:            string;
    channelCode:         string;
    insured:             ISubscriptionRequestInsured;
}

export interface ISubscriptionRequestInsured {
    identification:               string;
    identificationType:           string;
    email:                        string;
}
