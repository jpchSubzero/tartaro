import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { saleReducer } from '../reducers/saleReducer';
import { productsReducer } from '../reducers/productsReducer';
import { subscriptionReducer } from '../reducers/subscriptionReducer';
import { integrationReducer } from '../reducers/integrationReducer';
import { messengerServiceReducer } from '../reducers/messengerServiceReducer';
import { personReducer } from '../reducers/personReducer';
import { otpReducer } from '../reducers/otpReducer';
import { saleRegisterReducer } from '../reducers/saleRegisterReducer';
import { errorReducer } from '../reducers/errorReducer';
import IRootState from '../interfaces/store/store.root.state.interface';

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

