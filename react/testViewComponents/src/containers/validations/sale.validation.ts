import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ISaleRegisterInput } from '../../interfaces/sale/sale.register.input.interface';
import requestSaleInfo from "../../api/data/request-sale-page.json";

const rules = requestSaleInfo.form.rules;

const getValidationShema = ({...formValues}:ISaleRegisterInput) => {
  return yup.object().shape({
    cardNumber:  
      yup.string()
      .required("Número de tarjeta requerida")
      .nullable(false)
      .min(rules.creditCardMaxlength, `Mínimo ${rules.creditCardMaxlength} caracteres`)
      .max(rules.creditCardMaxlength, `Máximo ${rules.creditCardMaxlength} caracteres`)
  });
}

export const GetValidatorSale = (defaultValues:ISaleRegisterInput) => {
  return useForm({
      resolver: yupResolver(getValidationShema(defaultValues)),
      defaultValues: defaultValues
  });  
}
