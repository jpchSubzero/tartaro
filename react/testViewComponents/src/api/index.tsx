import axios, { AxiosResponse } from "axios";
import { IError } from "../interfaces/eva/eva.error.interface";
import configuration from "./data/configuration.json";

export const ApiService = {
	getData,
	postData,
	putData
};

/**
 * GET request
 * @param {string} url Url to request
 * @param {number} timeout Timeout for request
 * @returns {object} result or exception of request
 */
 async function getData<T>(url:string, timeout:number):Promise<T> {
	try {
		const response = await axios.get(url, { timeout });
		return processResponse<T>(response);
	} catch (error:any) {
		throw processError(error)
	}
}

/**
 * POST request
 * @param {string} url Url to request
 * @param {*} data Request Data
 * @param {number} timeout Timeout for request
 * @returns {object} result or exception of request
 */
 async function postData<T>(url:string, data:any, timeout:number):Promise<T> {
	try {
		const response = await axios.post(url, data, { timeout });
		return processResponse<T>(response);
	} catch (error:any) {
		throw processError(error);
	}
}

/**
 * PUT request
 * @param {string} url Url to request
 * @param {*} data Request Data
 * @param {number} timeout Timeout for request
 * @returns {object} result or exception of request
 */
 async function putData<T>(url:string, data:any, timeout:number):Promise<T> {
	try {
		const response = await axios.put(url, data, { timeout });
		return processResponse(response.data);
	}
	catch (error:any) {
		throw processError(error)
	}
}

function processResponse<T>(response:AxiosResponse):T {
	if (response.data) {
		console.log(response.data)
		return response.data;
	} else {
		throw processError(response.data.error?.error);
	}
}

function processError(payload:IError | null | undefined) {
	const errors = configuration.errorsCode;

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