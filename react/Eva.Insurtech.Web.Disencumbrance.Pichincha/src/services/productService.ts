import { IProductResponse } from '../interfaces/products/product.response.interface';
import { ApiService } from "../api";
import { getFromEnvFile, stringFormat } from "../utils";
import configuration from "../api/data/configuration.json";

const { 
getByAdvanceFiltersCodes,
    baseUrlKey,
    channelCodeKey,
    insuranceTypeCodeKey,
    insuranceCarrierCodeKey,
    contractTypeCodeKey,
    timeout
} = configuration.product;
const baseUrl = getFromEnvFile(baseUrlKey);
const channelCode = getFromEnvFile(channelCodeKey);
const insuranceTypeCode = getFromEnvFile(insuranceTypeCodeKey);
const insuranceCarrierCode = getFromEnvFile(insuranceCarrierCodeKey);
const contractTypeCode = getFromEnvFile(contractTypeCodeKey);
const url = stringFormat(`${baseUrl}${getByAdvanceFiltersCodes}`, [channelCode,insuranceTypeCode,insuranceCarrierCode,contractTypeCode]);

export const ProductService = {
    getProductByConfiguredFiltersCodeAsync
}

async function getProductByConfiguredFiltersCodeAsync() {
    let response: IProductResponse = {
        success: false,
        result: undefined,
        error: undefined,
        targetUrl: "",
        unAuthorizedRequest: false
    };

    const responseProducts = await ApiService.getData<IProductResponse>(url, timeout);
    if (responseProducts.result) {
        response = responseProducts;
    } else {
    response.error = {
        code: `${responseProducts.error?.code}`,
        message: `${responseProducts.error?.message}`,
        details: `${responseProducts.error?.details}`,
    };
    }
    return response;    
}

