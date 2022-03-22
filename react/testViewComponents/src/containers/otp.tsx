import { useEffect, useState } from 'react'
import { Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createContractAction } from '../actions/create.contract.action';
import { errorRegisterAction } from '../actions/error.register.action';
import HealthLoadingDialog from '../components/DisencumbranceLoadingDialog';
import EvaOtp from '../componentsEva/EvaOtp';
import { IError } from '../interfaces/eva/eva.error.interface';
import { ICheckOtpInput } from '../interfaces/sale/check.otp.input.interface';
import IRootState from '../interfaces/store/store.root.state.interface';
import { IntegrationService } from '../services/integrationService';
import { MessengerServiceService } from '../services/messengerServiceService';
import { SaleService } from '../services/saleService';
import { TypesRoutes } from '../types/types.routes';
import { BaseSection } from './base.section';
import { GetValidatorOtp } from './validations/otp.validation';

export const Otp = () => {
 
  let formValues:ICheckOtpInput = {
    otp: ""
  };

  let fieldNames:ICheckOtpInput = {
    otp: "otp"
  };

  const { control, handleSubmit } = GetValidatorOtp(formValues);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [ loading, setLoading ] = useState(false);
  const [ step, setStep ] = useState("Validando OTP");
  const { otp, person, subscription, saleRegister } = useSelector((state:IRootState) => state);
  const [otpState, setOtpState] = useState("normal");


  useEffect(() => {
    if (!subscription.trackingId || !person.identification || !otp.referenceId) {
      navigate(TypesRoutes.ROUTE_HOME);
    }
  }, [otp, person, subscription]);  // eslint-disable-line react-hooks/exhaustive-deps

  const onSubmit = async (otpValue:string) => {
    setLoading(true);
    await IntegrationService.checkOtpAsync(otpValue, otp, person, subscription);
    setStep("Registrando venta...");
    console.log('Correcto');
    saleRegister.trackingId = subscription.trackingId;
    const saleResponse = await SaleService.handleSaleAsync(saleRegister);
    if (saleResponse.result) {
      console.log(saleResponse.result.novaSaleId);
      setStep("Generando contrato...");
      const responseContract = await IntegrationService.createContractAsync(saleResponse.result.novaSaleId, subscription.trackingId);
      if (responseContract?.result) {
        setStep("Enviando contrato...");
        dispatch(createContractAction(responseContract.result));
        await MessengerServiceService.emailWelcomeAsync(responseContract.result, person, subscription.trackingId);
        setLoading(false);
        navigate(TypesRoutes.ROUTE_THANKS);
      } else {
        let error:IError = {
          code: `${responseContract?.error?.code}`,
          message: `${responseContract?.error?.message}`,
          details: `${responseContract?.error?.details}`,
        }      
        processError(error);  
      }
    } else {
      let error:IError = {
        code: `${saleResponse?.error?.code}`,
        message: `${saleResponse?.error?.message}`,
        details: `${saleResponse?.error?.details}`,
      }      
      processError(error);
    }
  };  

  const processError = (error:IError) => {
    dispatch(errorRegisterAction(error));
    setLoading(false);
    navigate(TypesRoutes.ROUTE_ERROR);      
  }

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

  const getForm = () => { 
    return (
      <>
        <EvaOtp
            initOtpValues={["", "", "", "", "", ""]}
            alertMessage="El tiempo de duración del código es de 5 minutos"
            errorMessage=""
            onSend={(numberOtp: string) => onSubmit(numberOtp)}
            hasError={false}
            onResend={() => alert("Resend Button clicked")}
            onGoBack={() => alert("GoBack Clicked")}
        />
      </>
    );
  }

  const renderComponent = () => { 
    return BaseSection(getForm(), -1, "Confirmación electrónica", (<><p>Por favor, ingreas el código que enviamos al móvil {person.mobilePhone}</p><p>Este código sirve para aceptar electrónicamente la compra de tu seguro.</p></>));
  }

  const renderLoading = () => { 
    // return (
    //   <>
    //     <h1>{step}</h1> 
    //   </>
    // );
    return <HealthLoadingDialog open={loading} />;
  }

  if (loading) {
    return renderLoading();    
  } else {
    return renderComponent();        
  }  
}

