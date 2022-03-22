import { sortArrayBy } from ".";
import HealthSummaryCard from "../components/DisencumbranceSummaryCard";
import EvaTypography from "../componentsEva/EvaTypography";
import {
  parseJsonToHtml,
  optionRemoveRootParrNode,
  getJsonElementToText,
} from "./JsonConverter";
import HomeInfo from "../api/data/home-page.json";
import { FormControlLabel, Grid, RadioGroup } from "@material-ui/core";
import { FieldError, Controller } from "react-hook-form";
import EvaCheckBox from "../componentsEva/EvaCheckbox";
import EvaRadioButton from "../componentsEva/EvaRadioButton";
import EvaTextField from "../componentsEva/EvaTextField";
import { TypesController } from "../types/types.controller";
import moduleSharedStyles from "../scss/shared.module.scss";
import { IMaskInput } from "react-imask";
import DisencumbranceMaskedTextField from "../components/DisencumbranceMaskedTextField";
import { getCreditCardBrand } from './index';

const homeDefaultItem = HomeInfo["defaultItem"];

export const generateDinamicItems = (
  limitItemsToShow,
  listServiceItems,
  listLocalItems,
  variant
) => {
  let arrayItems = [];
  const sortListServiceItems = listServiceItems.slice();
  let limitLocalItems = listLocalItems.length - 1;
  if (limitItemsToShow > sortListServiceItems.length) {
    console.log(`Se intentan mostrar mas elementos (${variant}) que los
        configurados en local`);
    return variant === "coverage" ? (
      [homeDefaultItem]
    ) : (
      <EvaTypography variant="body1">
        {parseJsonToHtml(homeDefaultItem.body, optionRemoveRootParrNode)}
      </EvaTypography>
    );
  }
  sortArrayBy(sortListServiceItems, "priority");

  for (let index = 0; index < sortListServiceItems.length; index++) {
    if (index >= limitItemsToShow) {
      break;
    }

    let indexLocalElement = index > limitLocalItems ? limitLocalItems : index;

    let newItem =
      variant === "coverage" ? (
        {
          id: sortListServiceItems[index].$id,
          icon: listLocalItems[indexLocalElement].icon,
          altIcon: listLocalItems[indexLocalElement].altIcon,
          body: getJsonElementToText(
            sortListServiceItems[index].description,
            0
          ),
        }
      ) : (
        <HealthSummaryCard
          key={sortListServiceItems[index].$id}
          icon={listLocalItems[indexLocalElement].icon}
          altIcon={listLocalItems[indexLocalElement].altIcon}
          title={sortListServiceItems[index].name}
          body={getJsonElementToText(
            sortListServiceItems[index].description,
            0
          )}
        />
      );
    if (sortListServiceItems[index].isActive) {
      arrayItems.push(newItem);
    }
  }
  return arrayItems;
};

export const getEvaTextField = (
  ref: any,
  field: any,
  error: FieldError | undefined,
  placeholder: string,
  fieldLabel: string,
  maxLength: number,
  autoFocus: boolean
) => {
  return (
    <>
      <EvaTextField
        {...field}
        inputRef={ref}
        autoFocus={autoFocus}
        placeholder={placeholder}
        fieldlabel={fieldLabel}
        inputProps={{
          maxLength: maxLength,
        }}
        error={!!error}
        helperText={error ? error.message : null}
      />
    </>
  );
};

export const getEvaNumberField = (
  ref: any,
  field: any,
  error: FieldError | undefined,
  placeholder: string,
  fieldLabel: string,
  maxLength: number,
  autoFocus: boolean
) => {
  return (
    <>
      <EvaTextField
        {...field}
        inputRef={ref}
        autoFocus={autoFocus}
        placeholder={placeholder}
        fieldlabel={fieldLabel}
        type="number"
        inputProps={{
          maxLength: maxLength,
        }}
        error={!!error}
        helperText={error ? error.message : null}
      />
    </>
  );
};

export const getEvaCreditCardNumberField = (
  ref: any,
  field: any,
  error: FieldError | undefined,
  placeholder: string,
  fieldLabel: string,
  maxLength: number,
  autoFocus: boolean
) => {
  return (
    <>
      <DisencumbranceMaskedTextField
        {...field}
        inputRef={ref}
        autoFocus={autoFocus}
        placeholder={placeholder}
        fieldlabel={fieldLabel}
        brand={getCreditCardBrand(field.value.replaceAll(" ", ""))}
        InputProps={{
          inputComponent: IdentificationMask,
      }}
      error={!!error}
        helperText={error ? error.message : null}
      />
    </>
  );
};

export const getEvaCheckField = (
  ref: any,
  field: any,
  error: FieldError | undefined,
  fieldLabel: string,
  onChangeAction: (value: boolean) => void,
  state: boolean
) => {
  return (
    <>
      <FormControlLabel
        control={
          <EvaCheckBox
            {...field}
            value={state}
            inputRef={ref}
            error={error ? 1 : undefined}
            onChange={onChangeAction}
          />
        }
        label={<EvaTypography variant="helper1">{fieldLabel}</EvaTypography>}
      />
    </>
  );
};

export const getEvaRadioGroup = (
  ref: any,
  field: any,
  fieldLabels: string[],
  fieldValues: string[]
) => {
  return (
    <>
      <EvaTypography variant='body2.medium' className={moduleSharedStyles['EvaTextField-fieldlabel']}>{fieldLabels[fieldLabels.length - 1]}</EvaTypography>
      <RadioGroup {...field}>
        {fieldLabels.map((fieldLabel, index) => {
          if (index <= fieldLabels.length - 2) {
            return (
              <FormControlLabel
              key={index}
              value={fieldValues[index]}
              control={<EvaRadioButton inputRef={ref} />}
              label={fieldLabel}
              />
            );
          }
        })}
      </RadioGroup>
    </>
  );
};

export const getControllerField = (
  control: any,
  fieldType: string,
  fieldName: any,
  placeholder: string,
  fieldLabel: string,
  maxLength: number,
  autoFocus: boolean = false,
  onChangeAction: () => void = undefined,
  state: boolean = false,
  fieldLabels: string[] = [],
  fieldValues: string[] = [],
  defaultValue: string = ""
) => {
  switch (fieldType) {
    case TypesController.EVA_TEXT_FIELD:
      return (
        <Controller
          name={fieldName}
          control={control}
          render={({ field: { ref, ...field }, fieldState: { error } }) =>
            getEvaTextField(
              ref,
              field,
              error,
              placeholder,
              fieldLabel,
              maxLength,
              autoFocus
            )
          }
        />
      );
    case TypesController.EVA_NUMBER_FIELD:
      return (
        <Controller
          name={fieldName}
          control={control}
          render={({ field: { ref, ...field }, fieldState: { error } }) =>
          getEvaNumberField(
              ref,
              field,
              error,
              placeholder,
              fieldLabel,
              maxLength,
              autoFocus
            )
          }
        />
      );
    case TypesController.EVA_CREDIT_CARD_NUMBER_FIELD:
      return (
        <Controller
          name={fieldName}
          control={control}
          render={({ field: { ref, ...field }, fieldState: { error } }) =>
          getEvaCreditCardNumberField(
              ref,
              field,
              error,
              placeholder,
              fieldLabel,
              maxLength,
              autoFocus
            )
          }
        />
      );
    case TypesController.EVA_CHECK_BOX:
      return (
        <Controller
          name={fieldName}
          control={control}
          render={({ field: { ref, ...field }, fieldState: { error } }) =>
            getEvaCheckField(
              ref,
              field,
              error,
              fieldLabel,
              onChangeAction,
              state
            )
          }
        />
      );
    case TypesController.EVA_RADIO_GROUP:
      return (
        <Controller
          name={fieldName}
          control={control}
          defaultValue={defaultValue}
          render={({ field: { ref, ...field }, fieldState: { error } }) =>
            getEvaRadioGroup(ref, field, fieldLabels, fieldValues)
          }
        />
      );
  }
};

const IdentificationMask = function IdentificationMask(props) {
  const { onChange, ...other } = props;

  return (
      <IMaskInput
          {...other}
          mask="#### #### #### ####"
          definitions={{
              '#': /\d/,
          }}
          onAccept={(value) => onChange({ target: { name: props.name, value } })}
          overwrite="shift"
      />
  );
};
