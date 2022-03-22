import { IEvaResponse } from '../eva/eva.response.interface';

export interface IProductResponse extends IEvaResponse<IResultProductResponse> {
}

export interface IChannelsValue {
    $id:             string;
    code:            string;
    name:            string;
    description:     string;
    isActive:        boolean;
    countryId:       string;
    currencyId:      string;
    channelsWays:    IResultProductResponse;
    channelContacts: IResultProductResponse;
    products:        null;
    id:              string;
}

export interface IChannels {
    $id:     string;
    $values: IChannelsValue[];
}

export interface IProductResponseResultValue {
    $id:                 string;
    code:                string;
    externalCode:        string;
    name:                string;
    description:         string;
    issuesPolicyMother:  boolean;
    insuranceTypeId:     string;
    insuranceCarrierId:  string;
    contractTypeId:      string;
    isActive:            boolean;
    linkTC:              string;
    exclusions:          IDeductibles;
    benefits:            IResultProductResponse;
    deductibles:         IDeductibles;
    coverages:           ICoverages;
    requirements:        IResultProductResponse;
    periodicityPayments: IResultProductResponse;
    paymentModes:        IResultProductResponse;
    assistances:         IAssistances;
    channels:            IChannels;
    id:                  string;
}

export interface IResultProductResponse {
    $id:     string;
    $values: IProductResponseResultValue[];
}

export interface IAssistances {
    $id:     string;
    $values: IAssistancesValue[];
}

export interface IAssistancesValue {
    $id:         string;
    name:        string;
    description: string;
    code:        string;
    isActive:    boolean;
    minEvents:   number;
    maxEvents:   number;
    priority:    number;
    products:    IProducts;
    id:          string;
}

export interface IProducts {
    $id:     string;
    $values: IProductsValue[];
}

export interface IProductsValue {
    $ref: string;
}

export interface ICoverages {
    $id:     string;
    $values: ICoveragesValue[];
}

export interface ICoveragesValue {
    $id:           string;
    code:          string;
    name:          string;
    description:   string;
    limitValueMin: number;
    limitValueMax: number;
    limitEventMin: number;
    limitEventMax: number;
    priority:      number;
    isActive:      boolean;
    productId:     string;
}

export interface IDeductibles {
    $id:     string;
    $values: IDeductiblesValue[];
}

export interface IDeductiblesValue {
    $id:         string;
    code:        string;
    name:        string;
    description: string;
    isActive:    boolean;
    priority:    number;
    productId:   string;
    coverageId?: string;
    id?:         string;
}

