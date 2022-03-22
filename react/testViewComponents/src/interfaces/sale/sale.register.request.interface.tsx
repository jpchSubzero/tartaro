export interface ISaleRegisterRequest {
    trackingId: string;
    data:       IDataSaleRegisterRequest;
}

export interface IDataSaleRegisterRequest {
    planCode:               string;
    channelCode:            string;
    paymentPeriodicityCode: string;
    wayCode:                string;
    paymentMethodCode:      string;
    city:                   string;
    cardDetail:             ICardDetailSaleRegisterRequest;
}

export interface ICardDetailSaleRegisterRequest {
    cardNumber: string;
    cardBrand:  string;
}
