import { ApiService } from "../api";
import { capitalizeWord, getFromEnvFile } from "../utils";
import configuration from "../api/data/configuration.json";
import { IContractCreateResponseResult } from "../interfaces/integration/contract/contract.create.response.interface";
import { IMessengerServiceWelcomeRequest } from "../interfaces/messengerservice/messengerservice.welcome.request.interface";
import { IMessengerServiceWelcomeResponse } from "../interfaces/messengerservice/messengerservice.welcome.response.interface";
import { IPersonFindResponseResult } from "../interfaces/integration/person/person.find.response.interface";
import { FlowManagerService } from "./flowManagerService";

const { welcome, baseUrlKey, timeout } = configuration.messengerService;
const baseUrl = getFromEnvFile(baseUrlKey);
const url = `${baseUrl}${welcome}`;

export const MessengerServiceService = {
  emailWelcomeAsync,
};

async function emailWelcomeAsync(
  contract: IContractCreateResponseResult,
  person: IPersonFindResponseResult,
  trackingId: string
) {
  let response: IMessengerServiceWelcomeResponse = {
    success: false,
    result: undefined,
    error: undefined,
    targetUrl: "",
    unAuthorizedRequest: false,
  };

  if (!contract) {
    return;
  }

  await FlowManagerService.startMessengerServiceAsync(trackingId);

  const name = `${capitalizeWord(person.firstName)} ${capitalizeWord(
    person.middleName
  )} ${capitalizeWord(person.surname)} ${capitalizeWord(person.maidenSurname)}`;
  const data: IMessengerServiceWelcomeRequest = {
    emailsAddress: [
      {
        email: person.email,
        name,
      },
    ],
    name,
    codeTemplate: configuration.messengerService.template,
    attachedFileUrl: contract.documentUrl,
    attachedFileName: contract.documentName,
  };

  try {
    const responseMessngerService = await ApiService.postData<IMessengerServiceWelcomeResponse>(
        url,
        data,
        timeout
      );
    if (responseMessngerService.result) {
      response = responseMessngerService;
      await FlowManagerService.endMessengerServiceAsync(trackingId);
      await FlowManagerService.endProcessAsync(trackingId);
    } else {
      response.error = {
        code: `${responseMessngerService.error?.code}`,
        message: `${responseMessngerService.error?.message}`,
        details: `${responseMessngerService.error?.details}`,
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
