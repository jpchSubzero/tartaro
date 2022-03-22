import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ISubscriptionInput } from "../../interfaces/subscription/subscription.input.interface";
import { stringFormat, validCardId } from "../../utils";
import requestIdentificationInfo from "../../api/data/request-subscription-page.json";

const limits = {
  maxIdentification: 13,
  minIdentification: 10,
  minIdentificationType: 6,
};

const getValidationShema = ({ ...formValues }: ISubscriptionInput) => {
  const rules = requestIdentificationInfo.form.rulesText;
  return yup.object().shape({
    identificationType: yup
      .string()
      .required(rules.identificationRequired)
      .nullable(false),
    identification: yup
      .string()
      .required(rules.identificationRequired)
      .nullable(false)
      .ensure()
      .when('identificationType', {
        is: 'CEDULA',
        then: yup
          .string()
          .min(limits.minIdentification, stringFormat(rules.minIdentification, [`${limits.minIdentification}`]))
          .max(limits.minIdentification, stringFormat(rules.maxIdentification, [`${limits.minIdentification}`]))
          .test("validateIndentification", rules.identificationInvalid, (value) => {
            return validCardId(value);
          }),
        otherwise: yup
        .string()
        .min(limits.minIdentification, stringFormat(rules.minIdentification, [`${limits.minIdentification}`]))
        .max(limits.maxIdentification, stringFormat(rules.maxIdentification, [`${limits.maxIdentification}`]))
      }),
    email: yup
      .string()
      .required(rules.emailRequired)
      .nullable(false)
      .email(rules.emailInvalid),
  });
};

export const GetValidatorSubscription = (defaultValues: ISubscriptionInput) => {
  return useForm({
    resolver: yupResolver(getValidationShema(defaultValues)),
    defaultValues: defaultValues,
  });
};
