export interface IFinalizeSaleRequest {
    trackingId: string;
    data:       IDataFinalizeSaleRequest;
}

export interface IDataFinalizeSaleRequest {
    startVigencyDate: Date;
    endVigencyDate:   Date;
}
