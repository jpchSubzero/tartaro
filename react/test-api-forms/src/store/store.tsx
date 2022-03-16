import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { saleReducer } from '../reducers/saleReducer';
import { productsReducer } from '../reducers/productsReducer';
import { subscriptionReducer } from '../reducers/subscriptionReducer';
import { ISubscriptionResponseResult } from '../interfaces/subscription/subscription.response.interface';
import { IProductResponseResultValue } from '../interfaces/products/product.response.interface';
import { IFinalizeSaleResponseResult } from '../interfaces/sale/finalize.sale.response.interface';
import { IContractCreateResponseResult } from '../interfaces/integration/contract/contract.create.response.interface';
import { integrationReducer } from '../reducers/integrationReducer';
import { messengerServiceReducer } from '../reducers/messengerServiceReducer';
import { IMessengerServiceWelcomeResponse } from '../interfaces/messengerservice/messengerservice.welcome.response.interface';
import { IPersonFindResponseResult } from '../interfaces/integration/person/person.find.response.interface';
import { personReducer } from '../reducers/personReducer';
import { otpReducer } from '../reducers/otpReducer';
import { ICreateOtpResponseResult } from '../interfaces/integration/otp/create.otp.response.interface';
import { saleRegisterReducer } from '../reducers/saleRegisterReducer';
import { ISaleRegisterInput } from '../hooks/useSale';
import { IError } from '../interfaces/eva/eva.error.interface';
import { errorReducer } from '../reducers/errorReducer';

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

const reducers = combineReducers<IRootState>({
    subscription: subscriptionReducer,
    products: productsReducer,
    sale: saleReducer,
    integration: integrationReducer,
    messengerService: messengerServiceReducer,
    person: personReducer,
    otp: otpReducer,
    saleRegister: saleRegisterReducer,
    errorRegister: errorReducer
});

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    reducers, 
    composeEnhancers(applyMiddleware(thunk))
    // applyMiddleware(thunk))
);


