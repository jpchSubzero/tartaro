import { IEvaResponse } from "../../eva/eva.response.interface";

export interface ICreateOtpResponse extends IEvaResponse<ICreateOtpResponseResult> {
}

export interface ICreateOtpResponseResult {
    referenceId:  string;
    otpReference: string;
    expiration: Date;
}
