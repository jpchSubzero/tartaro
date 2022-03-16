import { useEffect, useState } from 'react';
import { environment } from '../environments/environment';
import { capitalizeWord, getFromEnvFile } from '../services/UtilitiesService';
import { useApi } from './useApi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { IMessengerServiceWelcomeResponse } from '../interfaces/messengerservice/messengerservice.welcome.response.interface';
import { IMessengerServiceWelcomeRequest } from '../interfaces/messengerservice/messengerservice.welcome.request.interface';
import { emailWelcomeAction } from '../actions/email.welcome.action';
import { IContractCreateResponseResult } from '../interfaces/integration/contract/contract.create.response.interface';
import IRootState from '../store/store';
import { TypesRoutes } from '../types/types.routes';
import { errorRegisterAction } from '../actions/error.register.action';
import { IError } from '../interfaces/eva/eva.error.interface';

export const useMessengerService = () => {
  const [messengerService, setMessengerService] = useState<IMessengerServiceWelcomeResponse>();
  const [loading, setLoading] = useState(false);
  const { post } = useApi();
  const { 
    welcome,
    baseUrlKey,
    timeout
  } = environment.messengerService;
	const baseUrl = getFromEnvFile(baseUrlKey);
  const url = `${baseUrl}${welcome}`;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { person } = useSelector((state:IRootState) => state );

  useEffect(() => {
    if (messengerService?.success) {
      navigate(TypesRoutes.ROUTE_THANKS);
    } 
    if (messengerService?.error) {
      navigate(TypesRoutes.ROUTE_ERROR);
    }
  }, [messengerService])
  

  const emailWelcometHandler = async (contract:IContractCreateResponseResult | undefined) => {
    if (!contract) {
      let errorRegister:IError = {
        code: "ERROR002",
        message: "Contract Error",
        details: "Unable to create contract"
      }      
      dispatch(errorRegisterAction(errorRegister));
      setLoading(false);
      navigate(TypesRoutes.ROUTE_ERROR);       
        return;
    }
    const name = `${capitalizeWord(person.firstName)} ${capitalizeWord(person.middleName)} ${capitalizeWord(person.surname)} ${capitalizeWord(person.maidenSurname)}`;
    const data:IMessengerServiceWelcomeRequest = {
      emailsAddress: [
        {
          email: person.email,
          name,
        }
      ],
      name,
      codeTemplate: environment.messengerService.template,
      attachedFileUrl: contract.documentUrl,
      attachedFileName: contract.documentName
    }
    setLoading(true);
    await emailWelcomeAsync(data);
  }

  const emailWelcomeAsync = async (data:IMessengerServiceWelcomeRequest) => {
    try {
      setLoading(true);
      const response = await post<IMessengerServiceWelcomeResponse>(url, data, timeout);
      dispatch(emailWelcomeAction(response));
      setMessengerService(response);
      setLoading(false);
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
    messengerService,
    emailWelcometHandler,
    loading,
    setMessengerService
  };
}


