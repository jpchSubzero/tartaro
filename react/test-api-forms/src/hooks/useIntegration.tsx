import { useEffect, useState } from 'react';
import { environment } from '../environments/environment';
import { dateIncreaseYearsToDate, getFromEnvFile, stringFormat } from '../services/UtilitiesService';
import { useApi } from './useApi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { IContractCreateResponse } from '../interfaces/integration/contract/contract.create.response.interface';
import { createContractAction } from '../actions/create.contract.action';
import { useMessengerService } from './useMessengerService';
import { IContractCreateRequest } from '../interfaces/integration/contract/contract.create.request.interface';
import { IPersonFindResponse } from '../interfaces/integration/person/person.find.response.interface';
import { IPersonFindRequest } from '../interfaces/integration/person/person.find.request.interface';
import { findPersonAction } from '../actions/person.find.action';
import { ICreateOtpRequest } from '../interfaces/integration/otp/create.otp.request.interface';
import IRootState from '../store/store';
import { TypesOtp } from '../types/types.otp';
import { ICreateOtpResponse, ICreateOtpResponseResult } from '../interfaces/integration/otp/create.otp.response.interface';
import { createOtpAction } from '../actions/create.otp.action';
import { ICheckOtpRequest } from '../interfaces/integration/otp/check.otp.request.interface';
import { ICheckOtpResponse } from '../interfaces/integration/otp/check.otp.response.interface';
import { errorRegisterAction } from '../actions/error.register.action';
import { TypesRoutes } from '../types/types.routes';
import { IError } from '../interfaces/eva/eva.error.interface';

export interface ISubscriptionInput {
  identification: string;
  identificationType: string;
  email: string;
}

export const useIntegration = () => {
  const [integration, setIntegration] = useState<IContractCreateResponse>();
  const [person, setPerson] = useState<IPersonFindResponse>();
  const [otpValidated, setOtpValidated] = useState(false);
  const [otpGenerated, setOtpGenerated] = useState(false);
  const [loading, setLoading] = useState(false);
  const { get, post } = useApi();
  const { subscription, otp, person:personStorage } = useSelector((state:IRootState) => state);

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
  } = environment.integration;

	const baseUrl = getFromEnvFile(baseUrlKey);
  const urlCreateContract = `${baseUrl}${createContract}`;
  const urlFindPerson = `${baseUrl}${findPerson}`;
  const urlCreateOtp = `${baseUrl}${createOtp}`;
  const urlCheckOtp = `${baseUrl}${checkOtp}`;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading:loadingMessengerService, emailWelcometHandler, messengerService } = useMessengerService();
  const [attemptsCreateContract, setAttemptsCreateContract] = useState(maxNumberAttemptsCreateContract);

  useEffect(() => {
    emailWelcomeAsync();
  }, [integration]);
  
  useEffect(() => {
    if (!loadingMessengerService) {
      setLoading(false);
    }
  }, [messengerService]);
  
  const emailWelcomeAsync = async () => {
    if (integration) {
      await emailWelcometHandler(integration.result);
    }
  }

  const createContractHandler = async (novaSaleId:string) => {
    const data:IContractCreateRequest = {
      referenceId: novaSaleId
    }
    setLoading(true);
    await createContractAsync(data);
  }

  const createContractAsync = async (data:IContractCreateRequest) => {
    try {
      setLoading(true);
      while (attemptsCreateContract > 0) {
        const response = await post<IContractCreateResponse>(stringFormat(urlCreateContract, [data.referenceId]), null, timeout);
        setAttemptsCreateContract(attemptsCreateContract - 1);
        if (response?.result) {
          setIntegration(response);
          dispatch(createContractAction(response.result));
          return;  
        }
      }
    } catch (error) {
      processUnknownError(error);
    }
  }

  const findPersonHandler = async (idCard:string) => {
    const data:IPersonFindRequest = {
      idCard
    }
    setLoading(true);
    await findPersonAsync(data);
  }

  const findPersonAsync = async (data:IPersonFindRequest) => {
    try {
      setLoading(true);
      const response = await get<IPersonFindResponse>(stringFormat(urlFindPerson, [data.idCard]), timeout);
      setPerson(response);
      dispatch(findPersonAction(response.result));
      setLoading(false);
    } catch (error) {
      processUnknownError(error);
    }
  }

  const createOtpHandler = async () => {
    setOtpGenerated(false);
    if (personStorage && subscription.trackingId) {
      const data:ICreateOtpRequest = {
        identification: personStorage.identification,
        mobilePhone: personStorage.mobilePhone,
        email: personStorage.email,
        channel: TypesOtp.CHANNEL_SMS,
        referenceID: subscription.trackingId,
        validTime,
        maxNumberAttempts: maxNumberAttemptsCheckOtp,
        typeCode: TypesOtp.TYPE_CODE,
        systemCode: TypesOtp.SYSTEM_CODE
      }
      setLoading(true);
      await createOtpAsync(data);
    }
  }

  const createOtpAsync = async (data:ICreateOtpRequest) => {
    try {
      setLoading(true);
      const response = await post<ICreateOtpResponse>(urlCreateOtp, data, timeout);
      if (response?.result) {
        const result: ICreateOtpResponseResult = {
          referenceId:  response.result.referenceId,
          otpReference: response.result.otpReference,
          expiration: dateIncreaseYearsToDate(new Date, validTime)
        }
        dispatch(createOtpAction(result));
        setOtpGenerated(true);
      } else {
        dispatch(errorRegisterAction(response.error));
        setLoading(false);
        navigate(TypesRoutes.ROUTE_ERROR);      
      }
      setLoading(false);
    } catch (error) {
      processUnknownError(error);
    }
  }

  const checkOtpHandler = async (otpInput:string) => {
    setOtpValidated(false);
    if (otp && personStorage && subscription.trackingId) {
      const data:ICheckOtpRequest = {
        identification: personStorage.identification,
        referenceId: subscription.trackingId,
        otpReference: otp.otpReference,
        otpNumber: otpInput
      }
      setLoading(true);
      await checkOtpAsync(data);
    }
  }

  const checkOtpAsync = async (data:ICheckOtpRequest) => {
    try {
      setLoading(true);
      const response = await post<ICheckOtpResponse>(urlCheckOtp, data, timeout);
      if (response?.result) {
        if (response.result?.attempts > maxNumberAttemptsCheckOtp) {
          let errorRegister:IError = {
            code: "ERROR001",
            message: "Too many retries",
            details: "Too many retries"
          }      
          dispatch(errorRegisterAction(errorRegister));
          navigate(TypesRoutes.ROUTE_SALE);
        }
        if (response.result?.state === TypesOtp.VERIFIED) {
          setOtpValidated(true);
        } else {
          setOtpValidated(false);
        }
        setLoading(false);
      } 
      if (response.error) {
        dispatch(errorRegisterAction(response.error));
        setLoading(false);
        navigate(TypesRoutes.ROUTE_ERROR);
      } 
    } catch (error) {
      processUnknownError(error);
    }
  }

  const processUnknownError = (error:any) => {
    let errorRegister:IError = {
      code: "UNDEFINED",
      message: "UNDEFINED",
      details: "UNDEFINED"
    }      
    dispatch(errorRegisterAction(errorRegister));
    setLoading(false);
    navigate(TypesRoutes.ROUTE_ERROR);       
  }

  return { 
    integration,
    person,
    createContractHandler,
    findPersonHandler,
    createOtpHandler,
    checkOtpHandler,
    otpValidated,
    otpGenerated,
    loading,
    setLoading
  };
}
