import { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import EvaButton from "../componentsEva/EvaButton";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moduleSharedStyles from "../scss/shared.module.scss";
import requestSubscriptionInfo from "../api/data/request-subscription-page.json";
//services
import DisencumbranceLoadingDialog from "../components/DisencumbranceLoadingDialog";
import { ISubscriptionInput } from "../interfaces/subscription/subscription.input.interface";
import { GetValidatorSubscription } from "./validations/subscription.validation";
import { IntegrationService } from "../services/integrationService";
import { createSubscriptionAction } from  "../actions/create.subscription.action";
import { errorRegisterAction } from "../actions/error.register.action";
import { findPersonAction } from "../actions/person.find.action";
import { SubscriptionService } from "../services/subscriptionService";
import { TypesRoutes } from "../types/types.routes";
import { TypesController } from "../types/types.controller";
import { getControllerField } from "../utils/utilsTsx";
import { BaseSection } from "./base.section";
import IRootState from "../interfaces/store/store.root.state.interface";

const buttonPrimary = classNames(moduleSharedStyles["button-primary"]);
const buttonSecondary = classNames(moduleSharedStyles["button-secondary"]);
const formContainerDivider = classNames(moduleSharedStyles["form-container--divider"]);

export const Subscription = () => {
  const [loading, setLoading] = useState(false);
  const [acceptedTermsAndConditions, setAcceptedTermsAndConditions] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products } = useSelector((state:IRootState) => state);
  const labels = requestSubscriptionInfo.form.labels;
  const rules = requestSubscriptionInfo.form.rules;
  const values = requestSubscriptionInfo.form.values;
  const variables = requestSubscriptionInfo.form.variables;
  const buttons = requestSubscriptionInfo.buttons;
  const loader = requestSubscriptionInfo.form.loader;

  useEffect(() => {
    if (!products[0].code) {
      navigate(TypesRoutes.ROUTE_HOME);
    }
  }, [products]);  // eslint-disable-line react-hooks/exhaustive-deps


  let defaultValues: ISubscriptionInput = {
    identification: "1103533095",
    identificationType: values.identificationType1,
    email: "software@bocetosoft.com",
  };

  const { control, handleSubmit } = GetValidatorSubscription(defaultValues);
  const handleCheck = () => setAcceptedTermsAndConditions(!acceptedTermsAndConditions);
  
  const onSubmit = async (formValues: ISubscriptionInput) => {
    setLoading(true);
    const person = await IntegrationService.getPersonAsync(
      formValues.identification
    );
    if (!person.result) {
      dispatch(errorRegisterAction(person.error));
      setLoading(false);
      navigate(TypesRoutes.ROUTE_ERROR);
    } else {
      dispatch(findPersonAction(person.result));
      const response = await SubscriptionService.createSubscriptionAsync({
        ...formValues,
      });
      if (!response.result) {
        console.log("error");
        dispatch(errorRegisterAction(response.error));
        setLoading(false);
        navigate(TypesRoutes.ROUTE_ERROR);
      } else {
        console.log(response.result?.trackingId);
        dispatch(createSubscriptionAction(response.result));
        setLoading(false);
        navigate(TypesRoutes.ROUTE_SALE);
      }
    }
  };

   const handleBack = () => {
    navigate(TypesRoutes.ROUTE_HOME);
  };

  const getForm = () => {
    return (
      <form>
      {getControllerField(control, TypesController.EVA_RADIO_GROUP, variables.identificationType, labels.identificationPlaceHolder, labels.identification, rules.identificationMaxlength, true, null, false, [labels.identificationType1, labels.identificationType2, labels.identificationType], [values.identificationType1, values.identificationType2])}
      <div className={formContainerDivider}></div>
      {getControllerField(control, TypesController.EVA_TEXT_FIELD, variables.identification, labels.identificationPlaceHolder, labels.identification, rules.identificationMaxlength, true)}
      <div className={formContainerDivider}></div>
      {getControllerField(control, TypesController.EVA_TEXT_FIELD, variables.email, labels.emailPlaceHolder, labels.email, rules.emailMaxlength)}
      <div className={formContainerDivider}></div>
      {getControllerField(control, TypesController.EVA_CHECK_BOX, "termsAndConditions", "", labels.termsAndConditions, 0, false, handleCheck, acceptedTermsAndConditions)}
      <div className={formContainerDivider}></div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <EvaButton className={buttonSecondary} variant="contained" onClick={handleBack}>
            {buttons.back}
          </EvaButton>
        </Grid>
        <Grid item xs={12} sm={6}>
          <EvaButton variant="contained" disabled={!acceptedTermsAndConditions} className={buttonPrimary} onClick={handleSubmit(onSubmit)}>
            {buttons.next}
          </EvaButton>
        </Grid>
      </Grid>
    </form>
    );
  }
  
  const renderComponent = () => {
    return (
      BaseSection(getForm(), 0, requestSubscriptionInfo.title.normalTitle)
    );
  };

  const renderLoading = () => {
    return <DisencumbranceLoadingDialog subtitle={loader.title} open={loading} />;
  };

  if (loading) {
    return renderLoading();
  } else {
    return renderComponent();
  }
};


