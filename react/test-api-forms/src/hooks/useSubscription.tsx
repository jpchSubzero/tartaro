import { useState } from 'react';
import { environment } from '../environments/environment';
import { ISubscriptionResponse } from '../interfaces/subscription/subscription.response.interface';
import { getFromEnvFile } from '../services/UtilitiesService';
import { useApi } from './useApi';
import { ISubscriptionRequest } from '../interfaces/subscription/subscription.request.interface';
import { useDispatch } from 'react-redux';
import { createSubscriptionAction } from '../actions/create.subscription.action';
import { useNavigate } from "react-router-dom";
import { errorRegisterAction } from '../actions/error.register.action';
import { TypesRoutes } from '../types/types.routes';
import { ISubscriptionInput, useIntegration } from './useIntegration';

export const useSubscription = () => {
  const [subscription, setSubscription] = useState<ISubscriptionResponse>();
  const [loading, setLoading] = useState(false);
  const { post } = useApi();
  const { 
		baseUrlKey,
		createComplete,
		timeout
   } = environment.subscription;
  const { 
    channelCodeKey,
    productCodeKey,
    planCodeKey
  } = environment.product;
	const baseUrl = getFromEnvFile(baseUrlKey);
	const channelCode = getFromEnvFile(channelCodeKey);
	const productCode = getFromEnvFile(productCodeKey);
	const planCode = getFromEnvFile(planCodeKey);
  const url = `${baseUrl}${createComplete}`;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { findPersonHandler } = useIntegration();

  const createSubscription = async ({identification, identificationType, email }:ISubscriptionInput) => {
    const data:ISubscriptionRequest = {
      productCode,
      planCode,
      channelCode,
      insured: {
        identification,
        identificationType,
        email 
      }
    }
    setLoading(true);
    await findPersonHandler(identification);
    await createSubscriptionAsync(data);
  }

  const createSubscriptionAsync = async (data:ISubscriptionRequest) => {
    try {
      setLoading(true);
      const response = await post<ISubscriptionResponse>(url, data, timeout);
      setLoading(false);
      resolveResponse(response);
    } catch (error) {
      navigate(TypesRoutes.ROUTE_ERROR, { replace: true, state: error })
      console.error(error)
    }
  }

  const resolveResponse = (response:ISubscriptionResponse) => {
    if (response?.result) {
      setSubscription(response);
      dispatch(createSubscriptionAction(response.result));
      navigate(TypesRoutes.ROUTE_SALE);
    } 
    if (response?.error) {
      dispatch(errorRegisterAction(response.error));
      setLoading(false);
      navigate(TypesRoutes.ROUTE_ERROR);
    } 
  }

  return { 
    subscription,
    loading,
    createSubscription
  };
}
