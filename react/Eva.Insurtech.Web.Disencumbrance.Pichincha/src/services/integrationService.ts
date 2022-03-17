import { ApiService } from "../api";
import { getFromEnvFile, stringFormat } from "../utils";
import configuration from "../api/data/configuration.json";
import { IPersonFindResponse, IPersonFindResponseResult } from "../interfaces/integration/person/person.find.response.interface";
import { ISubscriptionResponseResult } from "../interfaces/subscription/subscription.response.interface";
import { TypesOtp } from "../types/types.otp";
import { ICreateOtpRequest } from "../interfaces/integration/otp/create.otp.request.interface";
import { ICreateOtpResponse, ICreateOtpResponseResult } from "../interfaces/integration/otp/create.otp.response.interface";
import { ICheckOtpRequest } from "../interfaces/integration/otp/check.otp.request.interface";
import { ICheckOtpResponse } from "../interfaces/integration/otp/check.otp.response.interface";
import { IContractCreateRequest } from "../interfaces/integration/contract/contract.create.request.interface";
import { IContractCreateResponse } from "../interfaces/integration/contract/contract.create.response.interface";
import { FlowManagerService } from "./flowManagerService";

const { 
  createContract,
  findPerson,
  baseUrlKey,
  createOtp,
  checkOtp,
  validTime,
  maxNumberAttemptsCheckOtp,
  maxNumberAttemptsCreateContract,
  timeout
} = configuration.integration;
const baseUrl = getFromEnvFile(baseUrlKey);
const urlCreateContract = `${baseUrl}${createContract}`;
const urlFindPerson = `${baseUrl}${findPerson}`;
const urlCreateOtp = `${baseUrl}${createOtp}`;
const urlCheckOtp = `${baseUrl}${checkOtp}`;

export const IntegrationService = {
  getPersonAsync,
  createOtpAsync,
  checkOtpAsync,
  createContractAsync
}

async function getPersonAsync(idCard:string) {
  return ApiService.getData<IPersonFindResponse>(stringFormat(urlFindPerson, [idCard]), timeout);
}

async function createOtpAsync(person: IPersonFindResponseResult, subscription: ISubscriptionResponseResult) {
  if (person && subscription.trackingId) {
    const data:ICreateOtpRequest = {
      identification: person.identification,
      mobilePhone: person.mobilePhone,
      email: person.email,
      channel: TypesOtp.CHANNEL_SMS,
      referenceID: subscription.trackingId,
      validTime,
      maxNumberAttempts: maxNumberAttemptsCheckOtp,
      typeCode: TypesOtp.TYPE_CODE,
      systemCode: TypesOtp.SYSTEM_CODE
    }

    return ApiService.postData<ICreateOtpResponse>(urlCreateOtp, data, timeout);
  }
}

async function checkOtpAsync(otpInput: string, otp: ICreateOtpResponseResult, person: IPersonFindResponseResult, subscription: ISubscriptionResponseResult) {
  if (otp && person && subscription.trackingId) {
    const data:ICheckOtpRequest = {
      identification: person.identification,
      referenceId: subscription.trackingId,
      otpReference: otp.otpReference,
      otpNumber: otpInput
    }

    return ApiService.postData<ICheckOtpResponse>(urlCheckOtp, data, timeout);
  }
}

async function createContractAsync(novaSaleId:string, trackingId:string) {
  let response: IContractCreateResponse = {
    success: false,
    result: undefined,
    error: undefined,
    targetUrl: "",
    unAuthorizedRequest: false
  };

  await FlowManagerService.startContractAsync(trackingId);

  const data:IContractCreateRequest = {
    referenceId: novaSaleId
  }
  let attemptsCreateContract = maxNumberAttemptsCreateContract;

  
  while (attemptsCreateContract > 0) {
    const responseContract = await ApiService.postData<IContractCreateResponse>(stringFormat(urlCreateContract, [data.referenceId]), null, timeout);
    attemptsCreateContract--;
    if (responseContract?.result) {
      response = responseContract;
      await FlowManagerService.endContractAsync(trackingId);
      return response;
    } else {
      if (responseContract.error) {
        response.error = {
          code: `${responseContract.error?.code}`,
          message: `${responseContract.error?.message}`,
          details: `${responseContract.error?.details}`,
        };
      }
    }
  }

  response.error = {
    code: configuration.errorsCode.connectionAborted.code,
    message: configuration.errorsCode.connectionAborted.message,
    details: configuration.errorsCode.connectionAborted.message
  };

  return response;
}


