export interface IValidationInputErrors {
    value:   Value;
    errors:  string[];
    inner:   Inner[];
    name:    string;
    message: string;
}

export interface Inner {
    value:   string;
    path:    string;
    type:    string;
    errors:  string[];
    params:  Params;
    inner:   any[];
    name:    string;
    message: string;
}

export interface Params {
    value:         string;
    originalValue: string;
    path:          string;
}

export interface Value {
    identification:     string;
    identificationType: string;
    email:              string;
}
