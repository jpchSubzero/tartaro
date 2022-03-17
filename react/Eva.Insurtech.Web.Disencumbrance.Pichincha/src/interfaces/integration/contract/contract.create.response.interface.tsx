import { IEvaResponse } from "../../eva/eva.response.interface";

export interface IContractCreateResponse extends IEvaResponse<IContractCreateResponseResult> {
}

export interface IContractCreateResponseResult {
    message:      string;
    referenceId:  string;
    documentUrl:  string;
    documentPath: string;
    documentName: string;
}
