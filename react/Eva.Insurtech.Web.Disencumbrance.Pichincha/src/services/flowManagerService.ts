import { ApiService } from "../api";
import { getFromEnvFile, stringFormat } from "../utils";
import configuration from "../api/data/configuration.json";
import { ITrackingResponse } from "../interfaces/flowmanager/tracking.response.interface";

const {
  endSubscription,
  startContract,
  endContract,
  startMessengerService,
  endMessengerService,
  endProcess,
  getFlow,
  baseUrlKey,
  timeout,
} = configuration.flowManager;
const baseUrl = getFromEnvFile(baseUrlKey);

export const FlowManagerService = {
  endSubscriptionAsync,
  startContractAsync,
  endContractAsync,
  startMessengerServiceAsync,
  endMessengerServiceAsync,
  endProcessAsync,
  getFlowAsync,
};

async function endSubscriptionAsync(trackingId: string) {
  return executeAsync(`${baseUrl}${endSubscription}`, trackingId);
}

async function startContractAsync(trackingId: string) {
  return executeAsync(`${baseUrl}${startContract}`, trackingId);
}

async function endContractAsync(trackingId: string) {
  return executeAsync(`${baseUrl}${endContract}`, trackingId);
}

async function startMessengerServiceAsync(trackingId: string) {
  return executeAsync(`${baseUrl}${startMessengerService}`, trackingId);
}

async function endMessengerServiceAsync(trackingId: string) {
  return executeAsync(`${baseUrl}${endMessengerService}`, trackingId);
}

async function endProcessAsync(trackingId: string) {
  return executeAsync(`${baseUrl}${endProcess}`, trackingId);
}

async function getFlowAsync(trackingId: string) {
  return executeAsync(`${baseUrl}${getFlow}`, trackingId);
}

async function executeAsync(url: string, trackingId: string) {
  const urlEndSubscription = stringFormat(url, [trackingId]);
  const response = await ApiService.postData<ITrackingResponse>(
    urlEndSubscription,
    null,
    timeout
  );
  return resolveResponse(response);
}

function resolveResponse(responseFlowManger: ITrackingResponse) {
  let response: ITrackingResponse = {
    success: false,
    result: undefined,
    error: undefined,
    targetUrl: "",
    unAuthorizedRequest: false,
  };
  if (responseFlowManger.result) {
    response = responseFlowManger;
  } else {
    response.error = {
      code: `${responseFlowManger.error?.code}`,
      message: `${responseFlowManger.error?.message}`,
      details: `${responseFlowManger.error?.details}`,
    };
  }

  return response;
}
