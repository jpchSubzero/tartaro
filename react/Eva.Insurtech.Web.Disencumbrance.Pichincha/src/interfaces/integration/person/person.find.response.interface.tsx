import { IEvaResponse } from "../../eva/eva.response.interface";

export interface IPersonFindResponse extends IEvaResponse<IPersonFindResponseResult> {
}

export interface IPersonFindResponseResult {
    surname:               string;
    maidenSurname:         string;
    workTitle:             string;
    identification:        string;
    mobilePhone:           string;
    citizenStatus:         string;
    consortIdentification: string;
    addresses:             string;
    email:                 string;
    workCompany:           string;
    maritalStatus:         string;
    startWorkDate:         string;
    birthDate:             string;
    gender:                string;
    instruction:           string;
    birthPlace:            string;
    nationality:           string;
    fullName:              string;
    firstName:             string;
    middleName:            string;
    consortName:           string;
    profession:            string;
    incomeRange:           string;
    ruc:                   string;
    phones:                string;
    homeTown:              string;
}
