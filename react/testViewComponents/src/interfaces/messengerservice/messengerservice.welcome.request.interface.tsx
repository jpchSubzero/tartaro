export interface IMessengerServiceWelcomeRequest {
    emailsAddress:    IMessengerServiceWelcomeRequestEmailsAddress[];
    name:             string;
    codeTemplate:     string;
    attachedFileUrl:  string;
    attachedFileName: string;
}

export interface IMessengerServiceWelcomeRequestEmailsAddress {
    email: string;
    name:  string;
}
