import { IEvaResponse } from "../../eva/eva.response.interface";

export interface ICheckOtpResponse extends IEvaResponse<ICheckOtpResponseResult> {
}

export interface ICheckOtpResponseResult {
    otpReference:  string;
    state:         string;
    attempts:      number;
    timeRemaining: string;
}
