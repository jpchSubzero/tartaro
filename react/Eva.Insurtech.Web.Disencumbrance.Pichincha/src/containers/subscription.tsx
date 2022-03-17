import { Controller, FieldError } from 'react-hook-form';
import { GetValidatorSubscription } from './validations/subscription.validation';
import { ISubscriptionInput } from '../interfaces/subscription/subscription.input.interface';
import { SubscriptionService } from '../services/subscriptionService';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createSubscriptionAction } from '../actions/create.subscription.action';
import { TypesRoutes } from '../types/types.routes';
import configuration from "../api/data/configuration.json";
import { findPersonAction } from '../actions/person.find.action';
import { IntegrationService } from '../services/integrationService';
import { errorRegisterAction } from '../actions/error.register.action';

export const Subscription = () => {
  let defaultValues:ISubscriptionInput = {
    identification: "1103533095",
    identificationType: "CEDULA",
    email: "software@bocetosoft.com"    
  };
  
  let fieldNames:ISubscriptionInput = {
    identification: "identification",
    identificationType: "identificationType",
    email: "email"    
  };

  const onSubmit = async (formValues:ISubscriptionInput) => {
    setLoading(true);
    const person = await IntegrationService.getPersonAsync(formValues.identification);
    if (!person.result) {
      dispatch(errorRegisterAction(person.error));
      setLoading(false);
      navigate(TypesRoutes.ROUTE_ERROR);      
    } else {
      dispatch(findPersonAction(person.result));
      const response = await SubscriptionService.createSubscriptionAsync({...formValues});
      console.log(response.result?.trackingId);
      dispatch(createSubscriptionAction(response.result));
      setLoading(false);
      navigate(TypesRoutes.ROUTE_SALE);
    }
  };

  const { control, handleSubmit } = GetValidatorSubscription(defaultValues);
  const [ loading, setLoading ] = useState(false);
  const localStorageKeys = configuration.localStorageKeys;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const getDataField = (field:any, error:FieldError | undefined) => {
    return (
      <>
        <input {...field} />
        { error && <h5>{error?.message}</h5> }
      </>
    );
  }

  const getControllerField = (fieldName:any) => {
    return (
      <Controller
        name={fieldName}
        control={control}
        render={({ field: { ref, ...field }, fieldState: { error } }) => (
          getDataField(field, error)
        )}
      />   
    );
  }

  const renderDefault = () => { 
    return (
      <>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            { getControllerField(fieldNames.identification) }
          </div>
          <div>  
            { getControllerField(fieldNames.identificationType) }
          </div>
          <div>  
            { getControllerField(fieldNames.email) }
          </div>
          <div>  
            <button type="submit">Guardar</button>
          </div>

        </form>

        <hr />      
      </>
    );
  }

  const renderComponent = () => { 
    return (
      <>
        {renderDefault()}
        {/* <h3><pre>{JSON.stringify(subscription?.result, null, 2)}</pre></h3> */}
      </>
    );
  }

  const renderLoading = () => { 
    return (
      <>
        {loading ? <h1>Creando suscripción...</h1> : <h3>{localStorage.getItem(localStorageKeys.trackingId)}</h3>}
      </>
    );
  }

  if (loading) {
    return renderLoading();    
  } else {
    return renderComponent();        
  }
}


