import { useSubscription } from '../hooks/useSubscription';
import { useForm } from '../hooks/useForm';
import { useNavigate } from 'react-router-dom';
import { useIntegration } from '../hooks/useIntegration';
import { useEffect } from 'react';
import IRootState from '../store/store';
import { useSelector } from 'react-redux';
import { useSale } from '../hooks/useSale';

export const OtpPage = () => {
  const { 
    loading, 
    setLoading,
    createOtpHandler, 
    checkOtpHandler, 
    otpValidated,
    otpGenerated
  } = useIntegration();
  const { 
    registerSaleHandler, 
    confirmPaymentHandler, 
    finalizeSaleHandler,
    loading:loadingSale
  } = useSale();

  const navigate = useNavigate();
  const { otp, saleRegister } = useSelector((state:IRootState) => state);
  const [formValues, handleInputChange] = useForm({
    otpInput: "",
  });
  const { otpInput } = formValues;

  const handleValidateSubmit = async (e:any) => {
    e.preventDefault();
    await checkOtpHandler(otpInput);
  };

  const handleRecreateOtpSubmit = async (e:any) => {
    e.preventDefault();
    createOtp();
  };

  const createOtp = async () => {
    await createOtpHandler();
  };
  
  const registerSaleAsync = async () => {
    await registerSaleHandler(saleRegister);
    await confirmPaymentHandler();
    await finalizeSaleHandler();
};
  
  useEffect(() => {
    if (!otpGenerated) {
      createOtp();
    } else {
      if (otp.expiration < new Date()) {
        console.log("otp caducado");
        navigate("/sale");
      }      
    }
  }, []);
  
  useEffect(() => {
    if (otpGenerated) {
      if (otpValidated) {
        console.log('Correcto');
        setLoading(true);
        registerSaleAsync();
      } else {
        console.log('Incorrecto');
      }        
    }
  }, [otpValidated]);
  
  const isValidForm = ():Boolean => {
    return true;
  }

  const renderDefault = () => { 
    return (
      <>
        <form onSubmit={ handleValidateSubmit }>
          <h1>Verificar OTP</h1>  
          <hr />
          <div>
              <input 
                  type="text" 
                  className="form-control"
                  name="otpInput"
                  placeholder="Ingrese la otp"
                  autoComplete="off"
                  value={otpInput}
                  onChange={ handleInputChange}
              ></input>
          </div>

          <button type="submit">Validar</button>

        </form>

        <button onClick={handleRecreateOtpSubmit}>Volver a generar</button>

        <hr />      
      </>
    );
  }

  const renderComponent = () => { 
    return (
      <>
        {renderDefault()}
        <h3><pre>{JSON.stringify(otp, null, 2)}</pre></h3>
      </>
    );
  }

  const renderLoading = () => { 
    return (
      <>
        {loading ? <h1>Cargando...</h1> : <h3><pre>{JSON.stringify(otp, null, 2)}</pre></h3>}
      </>
    );
  }

  if (loading) {
    return renderLoading();    
  } else {
    return renderComponent();        
  }
}
