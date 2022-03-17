import { IEvaResponse } from '../eva/eva.response.interface';

export interface ITrackingResponse extends IEvaResponse<ITrackingResponseResult> {
}

export interface ITrackingResponseResult {
    id:              string;
    flowID:          string;
    stepID:          string;
    stateID:         string;
    generalStateID:  string;
    channelCode:     string;
    start:           Date;
    end:             Date;
    abandon:         Date;
    changeState:     Date;
    failureLogs:     ITrackingResponseFailureLog[];
    extraProperties: ITrackingResponseExtraProperties;
}

export interface ITrackingResponseExtraProperties {
    additionalProp1: string;
    additionalProp2: string;
    additionalProp3: string;
}

export interface ITrackingResponseFailureLog {
    trackingID:   string;
    method:       string;
    error:        string;
    detail:       string;
    stateID:      string;
    registerTime: Date;
}
