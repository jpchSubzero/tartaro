export interface ICreateOtpRequest {
    identification:    string;
    mobilePhone:       string;
    email:             string;
    channel:           string;
    referenceID:       string;
    validTime:         number;
    maxNumberAttempts: number;
    typeCode:          string;
    systemCode:        string;
}
