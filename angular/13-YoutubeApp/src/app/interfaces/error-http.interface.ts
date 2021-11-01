export interface ErrorResponse {
    headers:    Headers;
    status:     number;
    statusText: string;
    url:        string;
    ok:         boolean;
    name:       string;
    message:    string;
    error:      ErrorResponseError;
}

export interface ErrorResponseError {
    error: PurpleError;
}

export interface PurpleError {
    code:    number;
    message: string;
    errors:  ErrorElement[];
}

export interface ErrorElement {
    message:      string;
    domain:       string;
    reason:       string;
    location:     string;
    locationType: string;
}

export interface Headers {
    normalizedNames: NormalizedNames;
    lazyUpdate:      null;
}

export interface NormalizedNames {
}
