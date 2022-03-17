import { ApiService } from "../api";
import { dateIncreaseYearsToDate, getFromEnvFile } from "../utils";
import configuration from "../api/data/configuration.json";
import { ISaleRegisterRequest } from "../interfaces/sale/sale.register.request.interface";
import { ISaleRegisterInput } from "../interfaces/sale/sale.register.input.interface";
import { IConfirmPaymentRequest } from "../interfaces/sale/confirm.payment.request.interface";
import { IConfirmPaymentResponse } from "../interfaces/sale/confirm.payment.response.interface";
import { IFinalizeSaleRequest } from "../interfaces/sale/finalize.sale.request.interface";
import { IFinalizeSaleResponse } from "../interfaces/sale/finalize.sale.response.interface";
import { ISaleRegisterResponse } from "../interfaces/sale/sale.register.response.interface";

const {
  registerSale,
  confirmPayment,
  finalizeSale,
  baseUrlKey,
  timeout,
  vigencyTimeInYears,
} = configuration.sale;
const {
  channelCodeKey,
  paymentMethodCodeKey,
  paymentPeriodicityCodeKey,
  planCodeKey,
  wayCodeKey,
} = configuration.product;
const baseUrl = getFromEnvFile(baseUrlKey);
const channelCode = getFromEnvFile(channelCodeKey);
const wayCode = getFromEnvFile(wayCodeKey);
const planCode = getFromEnvFile(planCodeKey);
const paymentMethodCode = getFromEnvFile(paymentMethodCodeKey);
const paymentPeriodicityCode = getFromEnvFile(paymentPeriodicityCodeKey);
const urlRegisterSale = `${baseUrl}${registerSale}`;
const urlConfirmPayment = `${baseUrl}${confirmPayment}`;
const urlFinalizeSale = `${baseUrl}${finalizeSale}`;

export const SaleService = {
  handleSaleAsync,
};

async function handleSaleAsync(input: ISaleRegisterInput) {
  let response: IFinalizeSaleResponse = {
    success: false,
    result: undefined,
    error: undefined,
    targetUrl: "",
    unAuthorizedRequest: false
  };

  const registerSaleResponse = await registerSaleAsync(input);
  if (registerSaleResponse.result) {
    const confirmPaymentResponse = await confirmPaymentAsync(input.trackingId);
    if (confirmPaymentResponse.result) {
      const finalizeSaleResponse = await finalizeSaleAsync(input.trackingId);
      if (finalizeSaleResponse.result) {
        response = finalizeSaleResponse;
      } else {
        response.error = {
          code: `${finalizeSaleResponse.error?.code}`,
          message: `${finalizeSaleResponse.error?.message}`,
          details: `${finalizeSaleResponse.error?.details}`,
        };
      }
    } else {
      response.error = {
        code: `${confirmPaymentResponse.error?.code}`,
        message: `${confirmPaymentResponse.error?.message}`,
        details: `${confirmPaymentResponse.error?.details}`,
      };
    }
  } else {
    response.error = {
      code: `${registerSaleResponse.error?.code}`,
      message: `${registerSaleResponse.error?.message}`,
      details: `${registerSaleResponse.error?.details}`,
    };
  }
  return response;
}

async function registerSaleAsync(input: ISaleRegisterInput) {
  const data: ISaleRegisterRequest = {
    trackingId: input.trackingId,
    data: {
      planCode,
      channelCode,
      paymentPeriodicityCode,
      wayCode,
      paymentMethodCode,
      city: "Loja",
      cardDetail: {
        cardNumber: input.cardNumber,
        cardBrand: input.cardBrand,
      },
    },
  };

  return postSaleRequest<ISaleRegisterResponse>(urlRegisterSale, data);
}

const confirmPaymentAsync = async (trackingId: string) => {
  const data: IConfirmPaymentRequest = {
    trackingId: trackingId,
    confirmPayDate: new Date(),
  };
  return postSaleRequest<IConfirmPaymentResponse>(urlConfirmPayment, data);
};

const finalizeSaleAsync = async (trackingId: string) => {
  const now = new Date();
  const data: IFinalizeSaleRequest = {
    trackingId: trackingId,
    data: {
      startVigencyDate: now,
      endVigencyDate: dateIncreaseYearsToDate(now, vigencyTimeInYears),
    },
  };
  return postSaleRequest<IFinalizeSaleResponse>(urlFinalizeSale, data);
};

async function postSaleRequest<T>(url: string, data: any) {
  return ApiService.postData<T>(url, data, timeout);
}
