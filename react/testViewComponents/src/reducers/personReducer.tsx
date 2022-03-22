import { TypesAction } from "../types/types.action";
import { IActionReducer } from "../interfaces/actions/action.reducer.interface";
import { IPersonFindResponseResult } from "../interfaces/integration/person/person.find.response.interface";

const initialState:IPersonFindResponseResult = {
    surname: "",
    maidenSurname: "",
    workTitle: "",
    identification: "",
    mobilePhone: "",
    citizenStatus: "",
    consortIdentification: "",
    addresses: "",
    email: "",
    workCompany: "",
    maritalStatus: "",
    startWorkDate: "",
    birthDate: "",
    gender: "",
    instruction: "",
    birthPlace: "",
    nationality: "",
    fullName: "",
    firstName: "",
    middleName: "",
    consortName: "",
    profession: "",
    incomeRange: "",
    ruc: "",
    phones: "",
    homeTown: ""
}

export const personReducer = (state:IPersonFindResponseResult = initialState, action:IActionReducer<IPersonFindResponseResult>) => {
 switch (action.type) {
    case TypesAction.FIND_PERSON:
    return action.payload;
 default:
     return state;
 }
}
