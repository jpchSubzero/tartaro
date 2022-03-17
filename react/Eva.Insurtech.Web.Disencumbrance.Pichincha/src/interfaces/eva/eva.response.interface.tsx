import { IError } from "./eva.error.interface";

export interface IEvaResponse<T> {
    success:             boolean;
    result?:              T;
    error?:               IError;
    targetUrl:           string;
    unAuthorizedRequest: boolean;
}