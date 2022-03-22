import { ApiService } from "../api";
import { getFromEnvFile } from "../utils";
import configuration from "../api/data/configuration.json";
import { ISubscriptionInput } from '../interfaces/subscription/subscription.input.interface';
import { ISubscriptionRequest } from '../interfaces/subscription/subscription.request.interface';
import { ISubscriptionResponse } from '../interfaces/subscription/subscription.response.interface';
import { FlowManagerService } from "./flowManagerService";

const { 
      baseUrlKey,
      createComplete,
      timeout
 } = configuration.subscription;
const { 
  channelCodeKey,
  productCodeKey,
  planCodeKey
} = configuration.product;
  const baseUrl = getFromEnvFile(baseUrlKey);
  const channelCode = getFromEnvFile(channelCodeKey);
  const productCode = getFromEnvFile(productCodeKey);
  const planCode = getFromEnvFile(planCodeKey);
const url = `${baseUrl}${createComplete}`;

export const SubscriptionService = {
    createSubscriptionAsync
}

async function createSubscriptionAsync({identification, identificationType, email }:ISubscriptionInput) {
  let response: ISubscriptionResponse = {
    success: false,
    result: undefined,
    error: undefined,
    targetUrl: "",
    unAuthorizedRequest: false
  };
  
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
  try {
    const responseSubscription = await ApiService.postData<ISubscriptionResponse>(url, data, timeout);
    if (responseSubscription.result) {
      response = responseSubscription;
      await FlowManagerService.endSubscriptionAsync(responseSubscription.result.trackingId);
    } else {
      response.error = {
        code: `${responseSubscription.error?.code}`,
        message: `${responseSubscription.error?.message}`,
        details: `${responseSubscription.error?.details}`,
      };
    }
  } catch(error:any) {
    response.error = {
      code: `${error.code}`,
      message: `${error.message}`,
      details: `${error.details}`,
    };    
  }
  return response;
}


