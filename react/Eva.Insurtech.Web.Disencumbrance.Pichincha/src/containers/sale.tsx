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
import { GetValidatorSale } from './validations/sale.validation';

interface Props {
  trackingId:string;
}

export const Sale = ({ trackingId }:Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [ loading, setLoading ] = useState(false);
  const [ cardBrand, setCardBrand ] = useState("");
  
  let defaultValues:ISaleRegisterInput = {
    cardNumber: "4514320003893529",
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
    setCardBrand(getCreditCardBrand(watchCardNumber))
  }, [watchCardNumber]);
  
  useEffect(() => {
    if (!subscription.trackingId || !person.identification) {
      navigate(TypesRoutes.ROUTE_HOME);
    }
  }, [subscription, person]);  // eslint-disable-line react-hooks/exhaustive-deps
  
  const onSubmit = async (formValues:ISaleRegisterInput) => {
    setLoading(true);
    formValues.cardBrand = cardBrand;
    dispatch(saveSaleAction(formValues));
    const response = await IntegrationService.createOtpAsync(person, subscription);
    dispatch(createOtpAction(response?.result));
    setLoading(false);
    navigate(TypesRoutes.ROUTE_OTP);
  };  

  const getControllerField = (fieldName:any) => {
    return (
      <Controller
        name={fieldName}
        control={control}
        render={({ field: { ref, ...field }, fieldState: { error } }) => (
          <>
          <input {...field} />
          { error && <h5>{error?.message}</h5> }
        </>
          )}
      />   
    );
  }

  const renderComponent = () => { 
    return (
      <>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            { getControllerField(fieldNames.cardNumber) }
          </div>
          <div>  
            <h4>{ cardBrand }</h4>
          </div>
          <div>  
            <button type="submit">Guardar</button>
          </div>

        </form>

        <hr />      
      </>
    );
  }

  const renderLoading = () => { 
    return (
      <>
        <h1>Preparando venta...</h1> 
      </>
    );
  }

  if (loading) {
    return renderLoading();    
  } else {
    return renderComponent();        
  }  

}


