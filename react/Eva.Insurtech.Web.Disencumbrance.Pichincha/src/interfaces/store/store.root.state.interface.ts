import { IError } from "../eva/eva.error.interface";
import { IContractCreateResponseResult } from "../integration/contract/contract.create.response.interface";
import { ICreateOtpResponseResult } from "../integration/otp/create.otp.response.interface";
import { IPersonFindResponseResult } from "../integration/person/person.find.response.interface";
import { IMessengerServiceWelcomeResponse } from "../messengerservice/messengerservice.welcome.response.interface";
import { IProductResponseResultValue } from "../products/product.response.interface";
import { IFinalizeSaleResponseResult } from "../sale/finalize.sale.response.interface";
import { ISaleRegisterInput } from "../sale/sale.register.input.interface";
import { ISubscriptionResponseResult } from "../subscription/subscription.response.interface";

export default interface IRootState {
    subscription: ISubscriptionResponseResult,
    products: IProductResponseResultValue[],
    sale: IFinalizeSaleResponseResult,
    integration: IContractCreateResponseResult,
    messengerService: IMessengerServiceWelcomeResponse,
    person: IPersonFindResponseResult,
    otp: ICreateOtpResponseResult,
    saleRegister: ISaleRegisterInput,
    errorRegister: IError
}