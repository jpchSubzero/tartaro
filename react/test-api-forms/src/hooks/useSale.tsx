import { useEffect, useState } from 'react';
import { environment } from '../environments/environment';
import { dateIncreaseYearsToDate, getFromEnvFile } from '../services/UtilitiesService';
import { useApi } from './useApi';
import { ISaleRegisterRequest } from '../interfaces/sale/sale.register.request.interface';
import { ISaleRegisterResponse } from '../interfaces/sale/sale.register.response.interface';
import { IConfirmPaymentRequest } from '../interfaces/sale/confirm.payment.request.interface';
import { IFinalizeSaleRequest } from '../interfaces/sale/finalize.sale.request.interface';
import { IConfirmPaymentResponse } from '../interfaces/sale/confirm.payment.response.interface';
import { IFinalizeSaleResponse } from '../interfaces/sale/finalize.sale.response.interface';
import IRootState from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { finalizeSaleAction } from '../actions/finalize.sale.action';
import { useIntegration } from './useIntegration';
import { saveSaleAction } from '../actions/save.sale.action';
import { TypesRoutes } from '../types/types.routes';
import { errorRegisterAction } from '../actions/error.register.action';
import { IError } from '../interfaces/eva/eva.error.interface';

export interface ISaleRegisterInput {
  cardNumber: string;
  cardBrand: string;
}

export const useSale = () => {
  const [saleRegister, setSaleRegister] = useState<ISaleRegisterResponse>();
  const [saleConfirmPayment, setSaleConfirmPayment] = useState<IConfirmPaymentResponse>();
  const [saleFinalizeSale, setSaleFinalizeSale] = useState<IFinalizeSaleResponse>();
  const [loading, setLoading] = useState(false);
  const { post } = useApi();
  const { 
		registerSale,
		confirmPayment,
		finalizeSale,
		baseUrlKey,
		timeout,
    vigencyTimeInYears
   } = environment.sale;
  const { 
    channelCodeKey,
    paymentMethodCodeKey,
    paymentPeriodicityCodeKey,
    planCodeKey,
    wayCodeKey
  } = environment.product;
	const baseUrl = getFromEnvFile(baseUrlKey);
	const channelCode = getFromEnvFile(channelCodeKey);
	const wayCode = getFromEnvFile(wayCodeKey);
	const planCode = getFromEnvFile(planCodeKey);
	const paymentMethodCode = getFromEnvFile(paymentMethodCodeKey);
	const paymentPeriodicityCode = getFromEnvFile(paymentPeriodicityCodeKey);
  const urlRegisterSale = `${baseUrl}${registerSale}`;
  const urlConfirmPayment = `${baseUrl}${confirmPayment}`;
  const urlFinalizeSale = `${baseUrl}${finalizeSale}`;
  const subscription = useSelector((state:IRootState) => state.subscription );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { 
    createContractHandler, 
  } = useIntegration();  

  useEffect(() => {
    createContractAsync();
  }, [saleFinalizeSale])

  const registerSaleHandler = async (input:ISaleRegisterInput) => {
    const data:ISaleRegisterRequest = {
      trackingId: subscription.trackingId,
      data: {
        planCode,
        channelCode,
        paymentPeriodicityCode,
        wayCode,
        paymentMethodCode,
        city: "Loja",
        cardDetail: {
          cardNumber: input.cardNumber,
          cardBrand: input.cardBrand
        }
      }
    }
    const response = await postSaleRequest<ISaleRegisterResponse>(urlRegisterSale, data);
    resolveResponse(response, response?.error, setSaleRegister);
  }

  const confirmPaymentHandler = async () => {
    const data:IConfirmPaymentRequest = {
      trackingId: subscription.trackingId,
      confirmPayDate: new Date()
    }
    const response = await postSaleRequest<IConfirmPaymentResponse>(urlConfirmPayment, data);
    resolveResponse(response, response?.error, setSaleConfirmPayment);
  }

  const finalizeSaleHandler = async () => {
    const now = new Date();
    const data:IFinalizeSaleRequest = {
      trackingId: subscription.trackingId,
      data: {
        startVigencyDate: now,
        endVigencyDate: dateIncreaseYearsToDate(now, vigencyTimeInYears)
      }
    }
    const response = await postSaleRequest<IFinalizeSaleResponse>(urlFinalizeSale, data);
    resolveResponse(response, response?.error, setSaleFinalizeSale, finalizeSaleAction);
  }

  const createContractAsync = async () => {
    if (saleFinalizeSale?.result) {
      await createContractHandler(saleFinalizeSale.result.novaSaleId);
      setLoading(false); 
    }
  }

  async function postSaleRequest<T>(url:string, data:any) {
    try {
      setLoading(true);
      return await post<T>(url, data, timeout);
    } catch (error) {
      let errorRegister:IError = {
        code: "UNDEFINED",
        message: JSON.stringify(error),
        details: JSON.stringify(error)
      }      
      dispatch(errorRegisterAction(errorRegister));
      setLoading(false);
      navigate(TypesRoutes.ROUTE_ERROR);
    }
  }

  const saveSaleRequest = (input: ISaleRegisterInput) => {
    dispatch(saveSaleAction(input));        
  }

  function resolveResponse<T>(response:T | undefined, error:IError | undefined, action:(result:T) => void, dispatchAction?:(result:T) => void): void {
    if (response) {
      action(response);
      if (dispatchAction) {
        dispatch(dispatchAction(response));        
        navigate(TypesRoutes.ROUTE_OTP);
      } else {
        setLoading(false); 
      }
    } else {
      let errorRegister:IError = {
        code: "UNDEFINED",
        message: "UNDEFINED",
        details: "UNDEFINED"
      }      
      dispatch(errorRegisterAction(errorRegister));
      setLoading(false);
      navigate(TypesRoutes.ROUTE_ERROR);      
    }
    if (error) {
      dispatch(errorRegisterAction(error));
      setLoading(false);
      navigate(TypesRoutes.ROUTE_ERROR);
    } 
  }  

  return { 
    saleRegister,
    saleConfirmPayment,
    saleFinalizeSale,
    loading,
    registerSaleHandler,
    confirmPaymentHandler,
    finalizeSaleHandler,
    saveSaleRequest
  };
}
