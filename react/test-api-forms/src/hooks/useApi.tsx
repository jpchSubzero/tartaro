import axios, { AxiosResponse } from 'axios';
import { environment } from '../environments/environment';
import { IError } from '../interfaces/eva/eva.error.interface';

export const useApi = () => {
    async function getAsync<T>(url:string, timeout:number):Promise<T> {
        try {
            const response = await axios.get(url, { timeout });
            return processResponse<T>(response);
        } catch (error:any) {
            throw processApiError(error)
        }
    }

    async function postAsync<T>(url:string, data:any, timeout:number):Promise<T> {
        try {
            const response = await axios.post(url, data, { timeout });
            return processResponse<T>(response);
        } catch (error:any) {
            throw processApiError(error)
        }
    }

    function processResponse<T>(response:AxiosResponse):T {
        if (response.data) {
            console.log(response.data)
            return response.data;
        } else {
            throw processApiError(response.data.error?.error);
        }
    }
    
    function processApiError(payload:IError | null | undefined) {
        const errors = environment.errorsCode;

        let error:IError = {
            code: "UNDEFINED",
            message: "",
            details: ""
        }

        if (payload?.message === errors.networkError.code) {
            error.code = errors.networkError.code;
            error.message = errors.networkError.message;
        } else if (payload?.code) {
            error.code = payload.code;
            if (payload.code === errors.connectionAborted.code) {
                error.message = errors.connectionAborted.message
            } else {
                error.message = payload.message;
                error.details = payload.details;
            }
        } else {
            error.message = `${payload?.message}`;
        }
        return error;
    }

    return {
        get: getAsync,
        post: postAsync
    }
}




