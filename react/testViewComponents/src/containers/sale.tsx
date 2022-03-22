import { useEffect, useState } from 'react'
import { Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createOtpAction } from '../actions/create.otp.action';
import { saveSaleAction } from '../actions/save.sale.action';
import { ISaleRegisterInput } from '../interfaces/sale/sale.register.input.interface';
import IRootState from '../interfaces/store/store.root.state.interface';
import { IntegrationService } from '../services/integrationService';
import { TypesRoutes } from '../types/types.routes';
import { getCreditCardBrand } from '../utils';
import { BaseSection } from './base.section';
import { GetValidatorSale } from './validations/sale.validation';
import requestSaleInfo from "../api/data/request-sale-page.json";
import { getControllerField } from '../utils/utilsTsx';
import { TypesController } from '../types/types.controller';
import { Box, Grid, Tabs, TextField } from '@material-ui/core';
import EvaButton from '../componentsEva/EvaButton';
import classNames from 'classnames';
import moduleSharedStyles from "../scss/shared.module.scss";
import EvaPriceCards from '../componentsEva/EvaPriceCards';
import EvaPriceCardTab from '../componentsEva/EvaPriceCards/evaPriceCardTab';
import EvaTypography from '../componentsEva/EvaTypography';
import DisencumbranceMaskedTextField from '../components/DisencumbranceMaskedTextField';
import DisencumbranceLoadingDialog from '../components/DisencumbranceLoadingDialog';
import DisencumbranceAlert from '../components/DisencumbranceAlert';
import { parseJsonToHtml, optionRemoveRootParrNode } from '../utils/JsonConverter';
import moduleSaleStyles from "../scss/sale.module.scss";
import moduleEvaTextFieldStyles from "../componentsEva/EvaTextField/EvaTextField.module.scss";


interface Props {
  trackingId:string;
}

export const Sale = ({ trackingId }:Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [ loading, setLoading ] = useState(false);
  const [ cardBrand, setCardBrand ] = useState("");
  const labels = requestSaleInfo.form.labels;
  const rules = requestSaleInfo.form.rules;
  const values = requestSaleInfo.form.values;
  const variables = requestSaleInfo.form.variables;
  const buttons = requestSaleInfo.buttons;

  const buttonPrimary = classNames(moduleSharedStyles["button-primary"]);
  const buttonSecondary = classNames(moduleSharedStyles["button-secondary"]);
  const formContainerDivider = classNames(moduleSharedStyles["form-container--divider"]);
  const contratModalitySectionNotification = classNames(moduleSaleStyles['section-contrat-modality-container__notification']);

  let defaultValues:ISaleRegisterInput = {
    cardNumber: "4556097174511986",
    cardBrand: "VISA",
    trackingId
  };
  
  let fieldNames:ISaleRegisterInput = {
    cardNumber: "cardNumber",
    cardBrand: "cardBrand",
    trackingId: "trackingId"
  };
  
  const { control, handleSubmit, watch } = GetValidatorSale(defaultValues);

  const watchCardNumber = watch("cardNumber");

  const { subscription, person } = useSelector((state:IRootState) => state);

  useEffect(() => {
    setCardBrand(getCreditCardBrand(watchCardNumber.replaceAll(" ", "")))
  }, [watchCardNumber]);
  
  useEffect(() => {
    if (!subscription.trackingId || !person.identification) {
      navigate(TypesRoutes.ROUTE_HOME);
    }
  }, [subscription, person]);  // eslint-disable-line react-hooks/exhaustive-deps
  
  const onSubmit = async (formValues:ISaleRegisterInput) => {
    console.log(formValues);
    setLoading(true);
    formValues.cardBrand = cardBrand;
    dispatch(saveSaleAction(formValues));
    const response = await IntegrationService.createOtpAsync(person, subscription);
    dispatch(createOtpAction(response?.result));
    setLoading(false);
    navigate(TypesRoutes.ROUTE_OTP);
  };  

  const handleBack = () => {
    navigate(TypesRoutes.ROUTE_SUBSCRIPTION);
  };

  const getForm = () => { 
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <EvaTypography variant='body2.medium' className={moduleEvaTextFieldStyles['EvaTextField-fieldlabel']}>{labels.periodicityPayment}</EvaTypography>
              <EvaPriceCardTab 
                  style={{
                    minWidth: "100%",
                }}
            
              tabcontent={
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                    }}
                >
                    <div style={{ textAlign: "start" }} >
                        <EvaTypography variant="body2.bold" style={{ color: '#733BE6' }} >
                            Mensual
                        </EvaTypography>
                        <EvaTypography variant="helper2" >
                            1 pago cada mes
                        </EvaTypography>

                    </div>
                    <div
                        style={{ marginLeft: "auto", fontSize: 18, color: "#0F265C" }}
                    >
                        <EvaTypography variant="subtitle2.bold" style={{ marginBottom: 0 }} >
                            $2.98 /mes
                        </EvaTypography>

                    </div>
                </div>
            }
            />

          <EvaTypography variant='body2.medium' className={moduleEvaTextFieldStyles['EvaTextField-fieldlabel']}>{labels.methodPayment}</EvaTypography>

          <Box className={contratModalitySectionNotification}>
								<DisencumbranceAlert
									variant={requestSaleInfo.paymentMethodNotification.variant}
									withIcon={true}
									content={
										parseJsonToHtml(
											requestSaleInfo.paymentMethodNotification.body,
											optionRemoveRootParrNode
										)
									}
									altCustomIcon={requestSaleInfo.altIcon}
								/>
							</Box>

          {getControllerField(control, TypesController.EVA_CREDIT_CARD_NUMBER_FIELD, variables.cardNumber, labels.creditCardPlaceHolder, labels.creditCard, rules.creditCardMaxlength, true)}

          <div className={formContainerDivider}></div>
            {/* <h4>{ cardBrand }</h4> */}
          <div className={formContainerDivider}></div>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <EvaButton className={buttonSecondary} variant="contained" onClick={handleBack}>
                {buttons.back}
              </EvaButton>
            </Grid>
            <Grid item xs={12} sm={6}>
              <EvaButton variant="contained" className={buttonPrimary} onClick={handleSubmit(onSubmit)}>
                {buttons.next}
              </EvaButton>
            </Grid>
          </Grid>

        </form>
    );
  }

  const renderComponent = () => { 
    return BaseSection(getForm(), 1, requestSaleInfo.title.normalTitle);
  }

  const renderLoading = () => { 
    return <DisencumbranceLoadingDialog title="asfasdfasfasdf" open={loading} />;
  }

  if (loading) {
    return renderLoading();    
  } else {
    return renderComponent();        
  }  

}


