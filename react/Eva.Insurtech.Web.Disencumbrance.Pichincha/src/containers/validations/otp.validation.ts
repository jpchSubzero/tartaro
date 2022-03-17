import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ICheckOtpInput } from '../../interfaces/sale/check.otp.input.interface';


const getValidationShema = (formValues:ICheckOtpInput) => {
  return yup.object().shape({
    otp:  
      yup.string()
      .required("Número de OTP requerido")
      .nullable(false)
  });
}

export const GetValidatorOtp = (defaultValues:ICheckOtpInput) => {
  return useForm({
      resolver: yupResolver(getValidationShema(defaultValues)),
      defaultValues
  });  
}
