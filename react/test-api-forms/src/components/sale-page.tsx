import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { useIntegration } from '../hooks/useIntegration';
import { useSale } from '../hooks/useSale';
import { getCreditCardBrand } from '../services/UtilitiesService';

export const SalePage = () => {
  const navigate = useNavigate();
  const { 
    saleRegister, 
    saleConfirmPayment,
    saleFinalizeSale,
    registerSaleHandler, 
    confirmPaymentHandler, 
    finalizeSaleHandler,
    saveSaleRequest,
    loading:loadingSale
  } = useSale();
  const {
    integration,
    person,
    loading:loadingEnd,   
    setLoading: setLoadingEnd,
    createContractHandler
  } = useIntegration();
  const [formValues, handleInputChange] = useForm({
    cardNumber: "4539758150223985",
    cardBrand: "VISA"
  });

  const { cardNumber } = formValues;
  // const handleSubmit = async (e:any) => {
  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    saveSaleRequest({...formValues});
    navigate("/otp");
  };

  const renderDefault = () => { 
    return (
      <>
        <form onSubmit={ handleSubmit }>
          <h1>Register Sale</h1>  
          <hr />
          <div>
              <input 
                  type="text" 
                  className="form-control"
                  name="cardNumber"
                  placeholder="Ingrese un número de tarjeta de crédito"
                  autoComplete="off"
                  value={cardNumber}
                  onChange={ handleInputChange}
              ></input>
          </div>
          <div>
              <input 
                  disabled
                  type="text" 
                  className="form-control"
                  name="cardBrand"
                  placeholder="Ingrese una marca de tarjeta de crédito"
                  autoComplete="off"
                  value={getCreditCardBrand(cardNumber)}
                  onChange={ handleInputChange}
              ></input>
          </div>

          <button type="submit" className="btn btn-primary">Guardar</button>
        </form>

        <hr />      
      </>
    );
  }

  const renderComponent = () => { 
    return (
      <>
        {renderDefault()}
      </>
    );
  }

  const renderLoading = () => { 
    return (
      <>
        <h1>Cargando...</h1> 
      </>
    );
  }

  if (loadingEnd) {
    return renderLoading();    
  } else {
    return renderComponent();        
  }
}
