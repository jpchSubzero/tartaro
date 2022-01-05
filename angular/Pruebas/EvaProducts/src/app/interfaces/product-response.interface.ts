export interface ProductResponse {
    $id:                 string;
    success:             boolean;
    result:              Result;
    error:               null;
    targetUrl:           string;
    unAuthorizedRequest: boolean;
}

export interface ChannelsValue {
    $id:             string;
    code:            string;
    name:            string;
    description:     string;
    isActive:        boolean;
    countryId:       string;
    currencyId:      string;
    channelsWays:    Result;
    channelContacts: Result;
    products:        null;
    id:              string;
}

export interface Channels {
    $id:     string;
    $values: ChannelsValue[];
}

export interface ResultValue {
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
    exclusions:          Deductibles;
    benefits:            Result;
    deductibles:         Deductibles;
    coverages:           Coverages;
    requirements:        Result;
    periodicityPayments: Result;
    paymentModes:        Result;
    assistances:         Assistances;
    channels:            Channels;
    id:                  string;
}

export interface Result {
    $id:     string;
    $values: ResultValue[];
}

export interface Assistances {
    $id:     string;
    $values: AssistancesValue[];
}

export interface AssistancesValue {
    $id:         string;
    name:        string;
    description: string;
    code:        string;
    isActive:    boolean;
    minEvents:   number;
    maxEvents:   number;
    priority:    number;
    products:    Products;
    id:          string;
}

export interface Products {
    $id:     string;
    $values: ProductsValue[];
}

export interface ProductsValue {
    $ref: string;
}

export interface Coverages {
    $id:     string;
    $values: CoveragesValue[];
}

export interface CoveragesValue {
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

export interface Deductibles {
    $id:     string;
    $values: DeductiblesValue[];
}

export interface DeductiblesValue {
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
