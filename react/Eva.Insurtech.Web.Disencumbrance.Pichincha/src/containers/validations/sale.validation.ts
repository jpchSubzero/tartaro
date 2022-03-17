import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ISaleRegisterInput } from '../../interfaces/sale/sale.register.input.interface';

const limits = {
  cardNumberSize: 16
};

const getValidationShema = ({...formValues}:ISaleRegisterInput) => {
  return yup.object().shape({
    cardNumber:  
      yup.string()
      .required("Número de tarjeta requerida")
      .nullable(false)
      .min(limits.cardNumberSize, `Mínimo ${limits.cardNumberSize} caracteres`)
      .max(limits.cardNumberSize, `Máximo ${limits.cardNumberSize} caracteres`)
  });
}

export const GetValidatorSale = (defaultValues:ISaleRegisterInput) => {
  return useForm({
      resolver: yupResolver(getValidationShema(defaultValues)),
      defaultValues: defaultValues
  });  
}
