import { ISubscriptionInput } from "../../hooks/useIntegration";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const limits = {
    maxIdentification: 13,
    minIdentification: 10,
    minIdentificationType: 6
};

const getValidationShema = ({...formValues}:ISubscriptionInput) => {
    return yup.object().shape({
      identification:  
        yup.string()
        .required("Identificación requerida")
        .nullable(false)
        .min(limits.minIdentification, `Mínimo ${limits.minIdentification} caracteres`)
        .max(limits.maxIdentification, `Máximo ${limits.minIdentification} caracteres`),
      identificationType:  
        yup.string()
        .required("Tipo de identificación requerida")
        .nullable(false)
        .min(limits.minIdentificationType, `Mínimo ${limits.minIdentificationType} caracteres`),
      email:  
        yup.string()
        .required("E-mail es requerido")
        .nullable(false)
        .email("E-mail inválido")
    });
  }

export const GetValidatorSubscription = (defaultValues:ISubscriptionInput) => {
    return useForm({
        resolver: yupResolver(getValidationShema(defaultValues)),
        defaultValues: defaultValues
    });  
}

